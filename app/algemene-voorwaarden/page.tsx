import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description:
    "De algemene voorwaarden van TuinXpert, van toepassing op alle diensten en overeenkomsten conform het Belgisch recht.",
  robots: { index: false },
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #2D6A2D 0%, #1e4d1e 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-green-200 font-body font-semibold text-sm tracking-widest uppercase">
            Juridisch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            Algemene Voorwaarden
          </h1>
          <p className="text-green-200 font-body">
            Versie 1.0 — Januari 2025 | Belgisch recht van toepassing
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-zwart">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">

            {/* Intro */}
            <div className="bg-donker rounded-2xl p-8 border border-groen border-opacity-10">
              <p className="text-grijs font-body leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen
                van diensten door <strong className="text-wit">Xandro van den broek</strong>,
                handelend onder de naam <strong className="text-wit">TuinXpert</strong>, gevestigd te
                Feynend 8, 2400 Mol, KBO-nummer 1007.856.130, BTW-nummer BE1007856130.
              </p>
              <p className="text-grijs font-body leading-relaxed mt-3">
                Door het aanvragen van een offerte, het plaatsen van een opdracht of het sluiten van een
                overeenkomst met TuinXpert, aanvaardt de klant deze algemene voorwaarden zonder
                voorbehoud.
              </p>
            </div>

            {/* Article 1 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 1 — Definities
              </h2>
              <div className="space-y-3">
                {[
                  {
                    term: 'Opdrachtnemer',
                    def: "Xandro van den broek, handelend onder TuinXpert",
                  },
                  {
                    term: 'Opdrachtgever / Klant',
                    def: 'De natuurlijke of rechtspersoon die een offerte aanvraagt of een overeenkomst sluit met de Opdrachtnemer',
                  },
                  {
                    term: 'Overeenkomst',
                    def: 'Elke mondeling of schriftelijk gesloten overeenkomst tot het uitvoeren van tuinwerken, onderhoud of aanverwante diensten',
                  },
                  {
                    term: 'Offerte',
                    def: 'Een schriftelijk aanbod van de Opdrachtnemer met een beschrijving van de te leveren werken en de bijhorende prijs',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-groen-neon font-body font-bold text-sm whitespace-nowrap mt-0.5">
                      {item.term}:
                    </span>
                    <span className="text-grijs font-body text-sm">{item.def}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 2 — Offertes en aanvaarding
              </h2>
              <div className="space-y-3 text-grijs font-body leading-relaxed">
                <p>
                  2.1 Alle offertes van TuinXpert zijn vrijblijvend en geldig gedurende{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. 30 of 60 dagen]</strong> na de datum
                  van uitgifte, tenzij anders vermeld.
                </p>
                <p>
                  2.2 Een offerte is gebaseerd op de door de klant verstrekte informatie. Wijzigingen in
                  de scope van het werk na aanvaarding kunnen aanleiding geven tot een aangepaste prijs.
                </p>
                <p>
                  2.3 De overeenkomst komt tot stand op het moment dat de klant de offerte schriftelijk
                  (per e-mail of via ondertekend document) aanvaardt, of wanneer de Opdrachtnemer een
                  schriftelijke bevestiging van de opdracht verstuurt.
                </p>
                <p>
                  2.4 Mondelinge afspraken binden de Opdrachtnemer enkel na schriftelijke bevestiging.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 3 — Uitvoering van de werken
              </h2>
              <div className="space-y-3 text-grijs font-body leading-relaxed">
                <p>
                  3.1 TuinXpert verbindt zich ertoe de overeengekomen werken uit te voeren met de
                  nodige zorg en vakbekwaamheid, overeenkomstig de geldende normen en best practices.
                </p>
                <p>
                  3.2 Startdata en uitvoeringstermijnen zijn indicatief en kunnen worden beïnvloed door
                  weersomstandigheden, leveringsvertragingen of omstandigheden buiten de wil van de
                  Opdrachtnemer. Vertraging geeft de klant geen recht op schadevergoeding of
                  annulering, tenzij de vertraging buitensporig is.
                </p>
                <p>
                  3.3 De klant dient tijdig toegang te verlenen tot het terrein en eventuele noodzakelijke
                  faciliteiten (water, elektriciteit). Bijkomende kosten ten gevolge van het niet nakomen
                  hiervan zijn ten laste van de klant.
                </p>
                <p>
                  3.4 Wijzigingen aan de opdracht na de start van de werken worden schriftelijk vastgelegd
                  in een bijlage of meerwerkbon en leiden mogelijk tot een aangepaste prijs en planning.
                </p>
              </div>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 4 — Prijzen en facturatie
              </h2>
              <div className="space-y-3 text-grijs font-body leading-relaxed">
                <p>
                  4.1 Alle prijzen zijn uitgedrukt in euro en zijn, tenzij anders vermeld, exclusief btw.
                  Het toepasselijk btw-tarief wordt afzonderlijk vermeld op de offerte en factuur.
                </p>
                <p>
                  4.2 Voor grotere projecten kan TuinXpert een voorschot vragen van{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. 30%]</strong> van de totale projectwaarde
                  bij aanvang van de werken.
                </p>
                <p>
                  4.3 Facturen zijn betaalbaar binnen{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. 14 of 30 kalenderdagen]</strong> na
                  factuurdatum, tenzij anders overeengekomen.
                </p>
                <p>
                  4.4 Bij niet-tijdige betaling is van rechtswege en zonder ingebrekestelling een
                  verwijlintrest verschuldigd van{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. 10%]</strong> per jaar op het
                  openstaande bedrag, alsmede een forfaitaire schadevergoeding van{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. 10%]</strong> met een minimum van{' '}
                  <strong className="text-wit">€ [PLACEHOLDER]</strong>, conform de Wet Betalingsachterstand
                  (Wet van 2 augustus 2002).
                </p>
                <p>
                  4.5 TuinXpert behoudt zich het recht voor de werken op te schorten of stop te zetten
                  bij aanhoudende wanbetaling.
                </p>
              </div>
            </div>

            {/* Article 5 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 5 — Annulering en ontbinding
              </h2>
              <div className="space-y-3 text-grijs font-body leading-relaxed">
                <p>
                  5.1 Bij annulering door de klant na aanvaarding van de offerte is een vergoeding
                  verschuldigd van:
                </p>
                <ul className="ml-4 space-y-1">
                  <li>
                    • <strong className="text-wit">[PLACEHOLDER: bijv. 15%]</strong> van de totale
                    projectwaarde bij annulering meer dan [X] dagen voor de startdatum;
                  </li>
                  <li>
                    • <strong className="text-wit">[PLACEHOLDER: bijv. 25%]</strong> bij annulering
                    binnen [X] dagen voor de startdatum;
                  </li>
                  <li>
                    • De reeds gemaakte kosten + een vergoeding voor reeds geleverde prestaties bij
                    annulering na aanvang van de werken.
                  </li>
                </ul>
                <p>
                  5.2 TuinXpert kan de overeenkomst van rechtswege ontbinden bij overmacht of
                  wanneer de klant zijn verplichtingen niet nakomt, zonder dat schadevergoeding
                  verschuldigd is.
                </p>
              </div>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 6 — Aansprakelijkheid
              </h2>
              <div className="space-y-3 text-grijs font-body leading-relaxed">
                <p>
                  6.1 TuinXpert is aansprakelijk voor directe schade die het rechtstreekse gevolg
                  is van een aantoonbare fout of nalatigheid tijdens de uitvoering van de opdracht, doch
                  beperkt tot de waarde van de overeenkomst.
                </p>
                <p>
                  6.2 TuinXpert is niet aansprakelijk voor:
                </p>
                <ul className="ml-4 space-y-1">
                  {[
                    'Indirecte schade, gevolgschade, gederfde winst of reputatieschade',
                    'Schade veroorzaakt door onvoorzienbare weersomstandigheden',
                    'Schade door verborgen gebreken in de bodem of ondergrond die niet gekend waren bij aanvang',
                    'Schade door onjuiste of onvolledige informatie verstrekt door de klant',
                    'Schade door gebruik van materialen of planten conform de wensen van de klant, ondanks advies',
                  ].map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <p>
                  6.3 Voor planten geldt de toepasselijke wettelijke garantieregeling, doch houdt
                  TuinXpert geen langdurige aansprakelijkheid voor plantensterfte door
                  droogte, overstromingen of insectenplagen na oplevering.
                </p>
              </div>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 7 — Klachten en garantie
              </h2>
              <div className="space-y-3 text-grijs font-body leading-relaxed">
                <p>
                  7.1 De klant dient eventuele zichtbare gebreken bij de oplevering schriftelijk te
                  melden, uiterlijk binnen{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. 8 kalenderdagen]</strong> na
                  voltooiing van de werken.
                </p>
                <p>
                  7.2 Verborgen gebreken dienen schriftelijk te worden gemeld uiterlijk binnen{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. 1 jaar]</strong> na de
                  oplevering en uiterlijk binnen{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. 2 maanden]</strong> na het ontdekken
                  van het gebrek.
                </p>
                <p>
                  7.3 Klachten schorten de betalingsverplichting niet op, tenzij de klacht schriftelijk
                  door TuinXpert is erkend.
                </p>
                <p>
                  7.4 Klachten kunnen worden ingediend via:{' '}
                  <a
                    href="mailto:info@tuinxpert.be"
                    className="text-groen-neon underline"
                  >
                    info@tuinxpert.be
                  </a>
                </p>
              </div>
            </div>

            {/* Article 8 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 8 — Intellectuele eigendom
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                Alle tuinontwerpen, plannen, tekeningen en documenten die TuinXpert vervaardigt,
                blijven intellectueel eigendom van de Opdrachtnemer, tenzij schriftelijk anders
                overeengekomen. Reproductie of gebruik door derden is niet toegestaan zonder
                schriftelijke toestemming.
              </p>
            </div>

            {/* Article 9 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 9 — Privacy en GDPR
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                TuinXpert verwerkt persoonsgegevens conform de AVG/GDPR. Raadpleeg ons{' '}
                <Link href="/privacy" className="text-groen-neon underline">
                  privacybeleid
                </Link>{' '}
                voor alle informatie over de verwerking van uw persoonsgegevens.
              </p>
            </div>

            {/* Article 10 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 10 — Overmacht
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                Geen der partijen kan aansprakelijk worden gesteld voor de niet-nakoming van haar
                verplichtingen in geval van overmacht. Onder overmacht wordt verstaan: extreme
                weersomstandigheden, stakingen, overheidsmaatregelen, pandemieën, materiaalschaarste
                of andere omstandigheden die redelijkerwijze buiten de invloed van de partij vallen.
                De betrokken partij informeert de andere partij zo snel mogelijk.
              </p>
            </div>

            {/* Article 11 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 11 — Toepasselijk recht en geschillenbeslechting
              </h2>
              <div className="space-y-3 text-grijs font-body leading-relaxed">
                <p>
                  11.1 Op alle overeenkomsten met TuinXpert is uitsluitend het Belgisch recht van
                  toepassing.
                </p>
                <p>
                  11.2 Bij geschillen zullen partijen in eerste instantie trachten tot een minnelijke
                  schikking te komen.
                </p>
                <p>
                  11.3 Indien geen minnelijke schikking mogelijk is, zijn de rechtbanken van het
                  arrondissement{' '}
                  <strong className="text-wit">[PLACEHOLDER: bijv. Antwerpen/Turnhout]</strong>{' '}
                  exclusief bevoegd.
                </p>
                <p>
                  11.4 Voor consumenten is tevens buitengerechtelijke geschillenbeslechting mogelijk
                  via het Online Dispute Resolution platform van de Europese Commissie:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-groen-neon underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
              </div>
            </div>

            {/* Article 12 */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-wit mb-4">
                Artikel 12 — Deelbaarheid
              </h2>
              <p className="text-grijs font-body leading-relaxed">
                Indien een of meerdere bepalingen van deze algemene voorwaarden nietig, ongeldig of
                niet-afdwingbaar worden verklaard, tast dit de geldigheid van de overige bepalingen
                niet aan. De ongeldige bepaling wordt vervangen door een geldige bepaling die zo dicht
                mogelijk aansluit bij de bedoeling van de oorspronkelijke bepaling.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-donker rounded-2xl p-8 border border-groen border-opacity-20">
              <h2 className="font-heading text-xl font-bold text-wit mb-4">
                Vragen over deze voorwaarden?
              </h2>
              <p className="text-grijs font-body leading-relaxed mb-4">
                Voor vragen over deze algemene voorwaarden kunt u ons bereiken via:
              </p>
              <div className="space-y-2">
                <p className="text-grijs font-body text-sm">
                  <strong className="text-wit">E-mail:</strong>{' '}
                  <a
                    href="mailto:info@tuinxpert.be"
                    className="text-groen-neon underline"
                  >
                    info@tuinxpert.be
                  </a>
                </p>
                <p className="text-grijs font-body text-sm">
                  <strong className="text-wit">Telefoon:</strong>{' '}
                  <a href="tel:0493967417" className="text-groen-neon underline">
                    0493 96 74 17
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
                href="/privacy"
                className="text-groen-neon font-body text-sm hover:underline"
              >
                → Privacybeleid
              </Link>
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
