import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description:
    "Het privacybeleid van TuinXpert conform de GDPR/AVG-wetgeving. Lees hoe wij omgaan met uw persoonsgegevens.",
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #111111 0%, #0A0A0A 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
            Juridisch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-5">
            Privacybeleid
          </h1>
          <p className="text-grijs font-body">
            Laatste update: januari 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-zwart">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-10">

            {/* Intro */}
            <div className="bg-donker rounded-2xl p-8 border border-groen border-opacity-10">
              <p className="text-grijs font-body leading-relaxed">
                TuinXpert, gevestigd te Feynend 8, 2400 Mol, België, hecht groot belang aan de
                bescherming van uw persoonsgegevens. Dit privacybeleid legt uit hoe wij uw gegevens
                verzamelen, gebruiken, bewaren en beschermen in overeenstemming met de Algemene
                Verordening Gegevensbescherming (AVG/GDPR — Verordening (EU) 2016/679).
              </p>
            </div>

            {/* Article 1 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                1. Verwerkingsverantwoordelijke
              </h2>
              <div className="bg-donker rounded-xl p-6 border border-groen border-opacity-10 space-y-2">
                <p className="text-grijs font-body">
                  <strong className="text-wit">Bedrijfsnaam:</strong>{' '}
                  Xandro van den broek — handelend onder de naam TuinXpert
                </p>
                <p className="text-grijs font-body">
                  <strong className="text-wit">Rechtsvorm:</strong> Eenmanszaak
                </p>
                <p className="text-grijs font-body">
                  <strong className="text-wit">Adres:</strong> Feynend 8, 2400 Mol, België
                </p>
                <p className="text-grijs font-body">
                  <strong className="text-wit">KBO-nummer:</strong> 1007.856.130
                </p>
                <p className="text-grijs font-body">
                  <strong className="text-wit">BTW-nummer:</strong> BE1007856130
                </p>
                <p className="text-grijs font-body">
                  <strong className="text-wit">E-mail:</strong>{' '}
                  <a
                    href="mailto:info@tuinxpert.be"
                    className="text-groen-neon hover:underline"
                  >
                    info@tuinxpert.be
                  </a>
                </p>
                <p className="text-grijs font-body">
                  <strong className="text-wit">Telefoon:</strong>{' '}
                  <a href="tel:0493967417" className="text-groen-neon hover:underline">
                    0493 96 74 17
                  </a>
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                2. Welke persoonsgegevens verzamelen wij?
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Wij verzamelen alleen gegevens die noodzakelijk zijn voor de uitvoering van onze diensten.
                Afhankelijk van uw interactie met ons, kan dit de volgende gegevens betreffen:
              </p>
              <ul className="space-y-2">
                {[
                  'Identificatiegegevens: naam, voornaam',
                  'Contactgegevens: e-mailadres, telefoonnummer, postadres',
                  'Communicatiegegevens: de inhoud van uw berichten via het contactformulier of e-mail',
                  'Financiële gegevens: facturatiegegevens (alleen bij bestaande klanten)',
                  'Technische gegevens: IP-adres, browsertype, cookies (zie ook ons Cookiebeleid)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-groen-neon mt-1">•</span>
                    <span className="text-grijs font-body">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-grijs font-body leading-relaxed mt-4">
                Wij verzamelen geen bijzondere categorieën persoonsgegevens (zoals gezondheidsgegevens,
                etnische afkomst, politieke overtuigingen, etc.).
              </p>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                3. Doel en rechtsgrond van de verwerking
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <div className="space-y-4">
                {[
                  {
                    doel: 'Beantwoording van uw contactverzoek of offerteaanvraag',
                    grond: 'Gerechtvaardigd belang / voorbereiding van een overeenkomst (Art. 6(1)(b) AVG)',
                  },
                  {
                    doel: 'Uitvoering van een overeenkomst (tuinprojecten, onderhoud)',
                    grond: 'Uitvoering van een overeenkomst (Art. 6(1)(b) AVG)',
                  },
                  {
                    doel: 'Facturatie en boekhouding',
                    grond: 'Wettelijke verplichting (Art. 6(1)(c) AVG) — Belgische boekhoudwetgeving',
                  },
                  {
                    doel: 'Direct marketing (nieuwsbrief, promoties) — alleen met uw toestemming',
                    grond: 'Toestemming (Art. 6(1)(a) AVG)',
                  },
                  {
                    doel: 'Analyse van websitebezoek via cookies',
                    grond: 'Toestemming (Art. 6(1)(a) AVG) — zie Cookiebeleid',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-donker rounded-xl p-4 border border-groen border-opacity-10"
                  >
                    <p className="text-wit font-body font-medium text-sm mb-1">{item.doel}</p>
                    <p className="text-grijs font-body text-xs">Rechtsgrond: {item.grond}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                4. Bewaartermijn
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk voor de doeleinden
                waarvoor zij zijn verzameld, rekening houdend met onze wettelijke bewaarplichten:
              </p>
              <ul className="space-y-2">
                {[
                  'Klantgegevens en facturatie: 7 jaar (wettelijke boekhoudverplichting)',
                  'Contactformulierberichten zonder opdracht: maximaal 2 jaar',
                  'Marketingtoestemming: tot u uw toestemming intrekt',
                  'Analytische cookies: maximaal 13 maanden',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-groen-neon mt-1">•</span>
                    <span className="text-grijs font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article 5 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                5. Doorgifte aan derden
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Wij delen uw persoonsgegevens niet met derden voor commerciële doeleinden. Wij kunnen uw
                gegevens wel delen met:
              </p>
              <ul className="space-y-2">
                {[
                  'Onze boekhouder of accountant, voor de wettelijk verplichte financiële verwerking',
                  'IT-dienstverleners en hosting partners (bijv. Vercel), uitsluitend voor de werking van deze website',
                  'Bevoegde overheidsinstanties, wanneer wij hiertoe wettelijk verplicht zijn',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-groen-neon mt-1">•</span>
                    <span className="text-grijs font-body">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-grijs font-body leading-relaxed mt-4">
                Wij werken uitsluitend samen met verwerkers die voldoende garanties bieden voor de
                bescherming van uw persoonsgegevens en waarmee een verwerkersovereenkomst is afgesloten.
              </p>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                6. Uw rechten als betrokkene
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Op grond van de AVG beschikt u over de volgende rechten met betrekking tot uw
                persoonsgegevens:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    recht: 'Recht op inzage',
                    beschrijving: 'U heeft het recht om te weten welke gegevens wij over u bewaren.',
                  },
                  {
                    recht: 'Recht op rectificatie',
                    beschrijving: 'U kunt ons verzoeken onjuiste gegevens te corrigeren.',
                  },
                  {
                    recht: 'Recht op verwijdering ("recht op vergetelheid")',
                    beschrijving: 'U kunt ons verzoeken uw gegevens te verwijderen, tenzij wij een wettelijke bewaarplicht hebben.',
                  },
                  {
                    recht: 'Recht op beperking van de verwerking',
                    beschrijving: 'U kunt vragen de verwerking tijdelijk te beperken.',
                  },
                  {
                    recht: 'Recht op overdraagbaarheid',
                    beschrijving: 'U heeft het recht uw gegevens in een gestructureerd formaat te ontvangen.',
                  },
                  {
                    recht: 'Recht van bezwaar',
                    beschrijving: 'U kunt bezwaar maken tegen de verwerking op basis van gerechtvaardigd belang.',
                  },
                  {
                    recht: 'Recht om toestemming in te trekken',
                    beschrijving: 'Indien verwerking op toestemming is gebaseerd, kunt u deze altijd intrekken.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-donker rounded-xl p-4 border border-groen border-opacity-10"
                  >
                    <p className="text-wit font-body font-semibold text-sm mb-1">
                      {item.recht}
                    </p>
                    <p className="text-grijs font-body text-xs">{item.beschrijving}</p>
                  </div>
                ))}
              </div>
              <p className="text-grijs font-body leading-relaxed mt-4">
                Om uw rechten uit te oefenen, kunt u ons een verzoek sturen via{' '}
                <a
                  href="mailto:info@tuinxpert.be"
                  className="text-groen-neon hover:underline"
                >
                  info@tuinxpert.be
                </a>
                . Wij reageren binnen de wettelijke termijn van 30 dagen. Wij kunnen u verzoeken uw
                identiteit te bevestigen voor de verwerking van uw verzoek.
              </p>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                7. Klacht indienen bij de GBA
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Indien u van mening bent dat uw rechten niet worden gerespecteerd, heeft u het recht
                een klacht in te dienen bij de Belgische toezichthoudende autoriteit:
              </p>
              <div className="bg-donker rounded-xl p-6 border border-groen border-opacity-20">
                <p className="text-wit font-body font-semibold mb-2">
                  Gegevensbeschermingsautoriteit (GBA)
                </p>
                <p className="text-grijs font-body text-sm">Drukpersstraat 35, 1000 Brussel</p>
                <p className="text-grijs font-body text-sm">Tel: +32 2 274 48 00</p>
                <p className="text-grijs font-body text-sm">
                  Website:{' '}
                  <a
                    href="https://www.gegevensbeschermingsautoriteit.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-groen-neon hover:underline"
                  >
                    www.gegevensbeschermingsautoriteit.be
                  </a>
                </p>
              </div>
            </div>

            {/* Article 8 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                8. Beveiliging
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te
                beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Dit omvat onder meer
                versleutelde verbindingen (HTTPS/SSL), beperkte toegang tot gegevens en regelmatige
                beveiligingscontroles.
              </p>
            </div>

            {/* Article 9 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                9. Wijzigingen aan dit privacybeleid
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                Wij behouden het recht om dit privacybeleid te wijzigen. Bij belangrijke wijzigingen
                zullen wij u hiervan op de hoogte stellen via onze website of per e-mail. De meest
                recente versie staat altijd op deze pagina.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-donker rounded-2xl p-8 border border-groen border-opacity-20">
              <h2 className="font-heading text-xl font-bold text-wit mb-4">
                10. Contacteer ons
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Voor vragen of verzoeken m.b.t. dit privacybeleid of de verwerking van uw gegevens:
              </p>
              <div className="space-y-2">
                <p className="text-grijs font-body text-sm">
                  <strong className="text-wit">E-mail:</strong>{' '}
                  <a
                    href="mailto:info@tuinxpert.be"
                    className="text-groen-neon hover:underline"
                  >
                    info@tuinxpert.be
                  </a>
                </p>
                <p className="text-grijs font-body text-sm">
                  <strong className="text-wit">Post:</strong> TuinXpert, Feynend 8, 2400 Mol
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-groen border-opacity-10">
              <Link
                href="/cookies"
                className="text-groen-neon font-body text-sm hover:underline"
              >
                → Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
