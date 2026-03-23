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
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2D6A2D;">Nieuw bericht via het contactformulier</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Naam:</td>
              <td style="padding: 8px 0;">${naam}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">E-mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telefoon:</td>
              <td style="padding: 8px 0;">${telefoon || 'Niet opgegeven'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Bericht:</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${bericht}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border-color: #eee;" />
          <p style="color: #888; font-size: 12px;">Verzonden via tuinxpert.be op ${new Date().toLocaleString('nl-BE')}</p>
        </div>
      `

      const confirmHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2D6A2D;">Bedankt voor uw bericht, ${naam}!</h2>
          <p>Wij hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op.</p>
          <p style="color: #555;">Heeft u dringend iemand nodig? Bel ons op <strong>0474 55 22 44</strong>.</p>
          <hr style="margin: 24px 0; border-color: #eee;" />
          <p style="color: #888; font-size: 12px;">TuinXpert — Teststraat 1, 2400 Mol</p>
        </div>
      `

      // Send notification to Xandro
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'website@tuinxpert.be',
          to: 'XandroTuin111@hotmail.com',
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
          subject: 'Wij hebben uw bericht ontvangen — TuinXpert',
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
