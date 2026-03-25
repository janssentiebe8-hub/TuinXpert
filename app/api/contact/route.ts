import { NextResponse } from 'next/server'

// Basic in-memory rate limiting: max 5 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      request.headers.get('x-real-ip') ??
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Te veel aanvragen. Probeer het later opnieuw.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { naam, email, telefoon, bericht } = body

    // Validate required fields
    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { success: false, message: 'Verplichte velden ontbreken.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Ongeldig e-mailadres.' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // Development fallback: log to console
      console.log('--- Nieuw contactformulier (geen RESEND_API_KEY ingesteld) ---')
      console.log('Naam:', naam)
      console.log('E-mail:', email)
      console.log('Telefoon:', telefoon || 'Niet opgegeven')
      console.log('Bericht:', bericht)
      console.log('Tijdstip:', new Date().toISOString())
      console.log('--------------------------------------------------------------')
    } else {
      const datum = new Date().toLocaleDateString('nl-BE')
      const tijdstip = new Date().toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' })

      const confirmHtml = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Offerte aanvraag ontvangen – TuinXpert</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f7f4;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background-color:#1B6B5A;border-radius:12px 12px 0 0;padding:48px 48px 36px;text-align:center;">
              <div style="display:inline-block;margin-bottom:24px;">
                <img src="https://tuinxpert.be/logo/TuinXpert-Logo-Full.png" alt="TuinXpert" height="55" style="display:block;margin:0 auto 24px;" />
              </div>
              <div style="width:48px;height:2px;background-color:#6B8F71;margin:0 auto 24px;border-radius:2px;"></div>
              <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;color:#ffffff;font-weight:normal;line-height:1.4;">
                Uw aanvraag is ontvangen
              </h1>
              <p style="margin:12px 0 0;font-family:Arial,sans-serif;font-size:15px;color:#a8d5c5;line-height:1.6;">
                Bedankt voor uw interesse in TuinXpert
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;padding:48px;">
              <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:16px;color:#333333;line-height:1.7;">
                Beste <strong>{{naam}}</strong>,
              </p>
              <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:15px;color:#555555;line-height:1.8;">
                We hebben uw offerte aanvraag goed ontvangen en zijn er al mee aan de slag. Binnen <strong>2 werkdagen</strong> nemen we contact met u op met een persoonlijk voorstel op maat van uw tuin.
              </p>
              <div style="border-top:1px solid #e8efe8;margin:32px 0;"></div>
              <h2 style="margin:0 0 20px;font-family:Georgia,serif;font-size:18px;color:#1B6B5A;font-weight:normal;">
                Uw aanvraag in het kort
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <table width="100%">
                      <tr>
                        <td style="font-family:Arial,sans-serif;font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;width:40%;">Naam</td>
                        <td style="font-family:Arial,sans-serif;font-size:14px;color:#333333;font-weight:bold;">{{naam}}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <table width="100%">
                      <tr>
                        <td style="font-family:Arial,sans-serif;font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;width:40%;">E-mail</td>
                        <td style="font-family:Arial,sans-serif;font-size:14px;color:#333333;">{{email}}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <table width="100%">
                      <tr>
                        <td style="font-family:Arial,sans-serif;font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;width:40%;">Telefoon</td>
                        <td style="font-family:Arial,sans-serif;font-size:14px;color:#333333;">{{telefoon}}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table width="100%">
                      <tr>
                        <td style="font-family:Arial,sans-serif;font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;width:40%;vertical-align:top;">Bericht</td>
                        <td style="font-family:Arial,sans-serif;font-size:14px;color:#333333;line-height:1.6;">{{bericht}}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div style="border-top:1px solid #e8efe8;margin:32px 0;"></div>
              <h2 style="margin:0 0 20px;font-family:Georgia,serif;font-size:18px;color:#1B6B5A;font-weight:normal;">
                Wat kunt u verwachten?
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:14px 16px;background-color:#f4faf7;border-left:3px solid #1B6B5A;border-radius:0 6px 6px 0;">
                    <span style="font-size:18px;">📞</span>
                    <span style="font-family:Arial,sans-serif;font-size:14px;color:#333333;margin-left:10px;"><strong>Persoonlijk contact</strong> – We bellen u op om uw wensen te bespreken</span>
                  </td>
                </tr>
              </table>
              <div style="height:10px;"></div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:14px 16px;background-color:#f4faf7;border-left:3px solid #6B8F71;border-radius:0 6px 6px 0;">
                    <span style="font-size:18px;">📋</span>
                    <span style="font-family:Arial,sans-serif;font-size:14px;color:#333333;margin-left:10px;"><strong>Offerte op maat</strong> – Transparante prijzen, geen verrassingen</span>
                  </td>
                </tr>
              </table>
              <div style="height:10px;"></div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:14px 16px;background-color:#f4faf7;border-left:3px solid #1B6B5A;border-radius:0 6px 6px 0;">
                    <span style="font-size:18px;">🌱</span>
                    <span style="font-family:Arial,sans-serif;font-size:14px;color:#333333;margin-left:10px;"><strong>Van schets tot droomtuin</strong> – Wij realiseren uw tuinproject van A tot Z</span>
                  </td>
                </tr>
              </table>
              <div style="border-top:1px solid #e8efe8;margin:36px 0;"></div>
              <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:15px;color:#555555;line-height:1.8;">
                Heeft u nog vragen? Aarzel dan niet om ons te contacteren via <a href="mailto:info@tuinxpert.be" style="color:#1B6B5A;text-decoration:none;font-weight:bold;">info@tuinxpert.be</a> of bezoek onze website.
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:6px;background-color:#1B6B5A;">
                    <a href="https://tuinxpert.be" style="display:inline-block;padding:14px 32px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;letter-spacing:0.5px;">
                      Bezoek tuinxpert.be →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:36px 0 0;font-family:Arial,sans-serif;font-size:15px;color:#555555;line-height:1.8;">
                Met vriendelijke groeten,<br/>
                <strong style="color:#1B6B5A;">Het TuinXpert team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#1B6B5A;border-radius:0 0 12px 12px;padding:28px 48px;text-align:center;">
              <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:12px;color:#a8d5c5;">
                TuinXpert · Mol, Kempen · <a href="mailto:info@tuinxpert.be" style="color:#a8d5c5;text-decoration:none;">info@tuinxpert.be</a>
              </p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#6B8F71;">
                U ontvangt deze e-mail omdat u een offerte aanvraag heeft ingediend via tuinxpert.be
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
        .replace(/\{\{naam\}\}/g, naam)
        .replace(/\{\{email\}\}/g, email)
        .replace(/\{\{telefoon\}\}/g, telefoon || 'Niet opgegeven')
        .replace(/\{\{bericht\}\}/g, bericht)

      const emailHtml = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Nieuwe offerte aanvraag – TuinXpert</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f0f0;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f0f0;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background-color:#1B6B5A;border-radius:10px 10px 0 0;padding:28px 40px;">
              <table width="100%">
                <tr>
                  <td>
                    <span style="font-family:Georgia,serif;font-size:20px;color:#ffffff;font-weight:bold;">🌿 TuinXpert</span>
                    <span style="font-family:Arial,sans-serif;font-size:12px;color:#a8d5c5;margin-left:12px;">Intern systeem</span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background-color:#e8f5e0;color:#1B6B5A;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;letter-spacing:0.5px;">
                      🔔 NIEUWE AANVRAAG
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;padding:36px 40px;">
              <h2 style="margin:0 0 6px;font-family:Georgia,serif;font-size:22px;color:#1B6B5A;font-weight:normal;">
                Nieuwe offerte aanvraag
              </h2>
              <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:13px;color:#888888;">
                Ontvangen op {{datum}} om {{tijdstip}}
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8faf8;border:1px solid #e0ebe0;border-radius:8px;overflow:hidden;">
                <tr>
                  <td colspan="2" style="padding:14px 20px;background-color:#1B6B5A;">
                    <span style="font-family:Arial,sans-serif;font-size:12px;font-weight:bold;color:#ffffff;text-transform:uppercase;letter-spacing:1px;">Klantgegevens</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #e8efe8;width:35%;">
                    <span style="font-family:Arial,sans-serif;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">Naam</span>
                  </td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e8efe8;">
                    <span style="font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;font-weight:bold;">{{naam}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #e8efe8;">
                    <span style="font-family:Arial,sans-serif;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">E-mail</span>
                  </td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e8efe8;">
                    <a href="mailto:{{email}}" style="font-family:Arial,sans-serif;font-size:14px;color:#1B6B5A;text-decoration:none;font-weight:bold;">{{email}}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #e8efe8;">
                    <span style="font-family:Arial,sans-serif;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">Telefoon</span>
                  </td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e8efe8;">
                    <a href="tel:{{telefoon}}" style="font-family:Arial,sans-serif;font-size:14px;color:#1B6B5A;text-decoration:none;font-weight:bold;">{{telefoon}}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;vertical-align:top;">
                    <span style="font-family:Arial,sans-serif;font-size:12px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">Bericht</span>
                  </td>
                  <td style="padding:14px 20px;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#333333;line-height:1.7;">{{bericht}}</p>
                  </td>
                </tr>
              </table>
              <div style="height:28px;"></div>
              <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;font-weight:bold;">Snel reageren</p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="mailto:{{email}}?subject=Uw offerte aanvraag – TuinXpert" style="display:inline-block;padding:12px 24px;background-color:#1B6B5A;color:#ffffff;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;text-decoration:none;border-radius:6px;">
                      ✉️ Beantwoord klant
                    </a>
                  </td>
                  <td>
                    <a href="tel:{{telefoon}}" style="display:inline-block;padding:12px 24px;background-color:#ffffff;color:#1B6B5A;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;text-decoration:none;border-radius:6px;border:2px solid #1B6B5A;">
                      📞 Bel klant
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#2a2a2a;border-radius:0 0 10px 10px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#777777;">
                Automatisch gegenereerd door het TuinXpert contactformulier · <a href="https://tuinxpert.be" style="color:#6B8F71;text-decoration:none;">tuinxpert.be</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
        .replace(/\{\{naam\}\}/g, naam)
        .replace(/\{\{email\}\}/g, email)
        .replace(/\{\{telefoon\}\}/g, telefoon || 'Niet opgegeven')
        .replace(/\{\{bericht\}\}/g, bericht)
        .replace(/\{\{datum\}\}/g, datum)
        .replace(/\{\{tijdstip\}\}/g, tijdstip)

      // Send notification to TuinXpert
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'website@tuinxpert.be',
          to: 'Info@TuinXpert.be',
          subject: `Nieuw contactbericht van ${naam}`,
          html: emailHtml,
          reply_to: email,
        }),
      })

      // Send confirmation to visitor
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'website@tuinxpert.be',
          to: email,
          subject: 'Wij hebben uw aanvraag ontvangen — TuinXpert',
          html: confirmHtml,
        }),
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contactformulier fout:', error)
    return NextResponse.json(
      {
        success: false,
        message:
          'Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw of neem rechtstreeks contact op.',
      },
      { status: 500 }
    )
  }
}
