import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookiebeleid',
  description:
    'Het cookiebeleid van TuinXpert. Wij gebruiken uitsluitend strikt noodzakelijke cookies. Conform de ePrivacy Richtlijn en GDPR.',
  robots: { index: false },
}

export default function CookiesPage() {
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
            Cookiebeleid
          </h1>
          <p className="text-grijs font-body">Laatste update: januari 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-zwart">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">

            {/* Intro */}
            <div className="bg-donker rounded-2xl p-8 border border-groen border-opacity-10">
              <p className="text-grijs font-body leading-relaxed">
                TuinXpert maakt gebruik van uitsluitend strikt noodzakelijke cookies op de website
                www.tuinxpert.be. Wij plaatsen <strong className="text-wit">geen</strong> analytische
                cookies, marketingcookies of cookies van derde partijen. Dit cookiebeleid legt uit
                wat cookies zijn en welke cookies wij gebruiken. Dit beleid is conform de ePrivacy
                Richtlijn (2002/58/EG, gewijzigd door 2009/136/EG) en de Algemene Verordening
                Gegevensbescherming (AVG/GDPR).
              </p>
            </div>

            {/* Wat zijn cookies */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                1. Wat zijn cookies?
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                Cookies zijn kleine tekstbestanden die door een website op uw apparaat worden
                geplaatst wanneer u de website bezoekt. Cookies stellen de website in staat uw
                apparaat te herkennen bij een volgend bezoek en bepaalde instellingen of voorkeuren
                te onthouden.
              </p>
            </div>

            {/* Cookie types */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-6">
                2. Welke cookies gebruiken wij?
              </h2>

              <div className="bg-donker rounded-2xl p-6 border border-groen border-opacity-20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-groen-neon text-white font-body text-xs font-bold px-3 py-1 rounded-full mt-0.5 whitespace-nowrap">
                    Altijd actief
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-wit mb-1">
                      Strikt noodzakelijke cookies
                    </h3>
                    <p className="text-grijs font-body text-sm leading-relaxed">
                      Dit zijn de enige cookies die wij gebruiken. Ze zijn essentieel voor de
                      basisfunctionaliteit van de website. Zonder deze cookies kan de website
                      niet naar behoren functioneren. Voor strikt noodzakelijke cookies is
                      conform de ePrivacy Richtlijn geen toestemming vereist.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-groen border-opacity-20">
                        <th className="text-left py-2 pr-4 text-grijs font-body font-semibold">Naam</th>
                        <th className="text-left py-2 pr-4 text-grijs font-body font-semibold">Doel</th>
                        <th className="text-left py-2 text-grijs font-body font-semibold">Duur</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 pr-4 text-wit font-body font-mono text-xs">xandros_tuinen_cookie_consent</td>
                        <td className="py-2 pr-4 text-grijs font-body">Onthoudt dat u de cookiemelding hebt gezien</td>
                        <td className="py-2 text-grijs font-body">12 maanden</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Beheer */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                3. Cookies beheren of verwijderen
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Omdat wij enkel noodzakelijke cookies gebruiken, is er geen opt-out vereist. U kunt
                cookies altijd verwijderen via de instellingen van uw browser:
              </p>
              <div className="bg-donker rounded-xl p-6 border border-groen border-opacity-10">
                <ul className="space-y-2">
                  {[
                    { browser: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                    { browser: 'Mozilla Firefox', url: 'https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-websites-verwijderd' },
                    { browser: 'Microsoft Edge', url: 'https://support.microsoft.com/nl-nl/microsoft-edge/cookies-verwijderen-in-microsoft-edge' },
                    { browser: 'Safari', url: 'https://support.apple.com/nl-nl/guide/safari/sfri11471/mac' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-groen-neon text-xs">→</span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-groen-neon font-body text-sm hover:underline"
                      >
                        {item.browser}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wijzigingen */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                4. Wijzigingen aan dit cookiebeleid
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                Wij behouden het recht om dit cookiebeleid te wijzigen, onder meer bij wijzigingen
                in de wetgeving. De meest recente versie staat steeds op deze pagina. Indien wij in
                de toekomst analytische of marketingcookies zouden gebruiken, zullen wij dit beleid
                bijwerken en uw toestemming vragen via een cookiebanner.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                5. Contact
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                Heeft u vragen over ons cookiebeleid? Neem contact op via{' '}
                <a
                  href="mailto:info@tuinxpert.be"
                  className="text-groen-neon underline"
                >
                  info@tuinxpert.be
                </a>
                .
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-groen border-opacity-10">
              <Link href="/privacy" className="text-groen-neon font-body text-sm hover:underline">
                → Privacybeleid
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
