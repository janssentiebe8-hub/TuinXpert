import type { Metadata } from 'next'
import Link from 'next/link'
import { WavingGrass, GrowingPlants } from '@/components/ui/NatureAnimations'
import {
  Layers,
  Shovel,
  Scissors,
  Sprout,
  Fence,
  Lightbulb,
  ArrowRight,
  RefreshCw,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Onze Diensten | Tuinaanleg, Onderhoud & Bestrating',
  description:
    'Ontdek onze diensten: tuinaanleg, tuinonderhoud, bestrating & groenvoorziening in Mol en de Kempen. Vakwerk door TuinXpert.',
  alternates: {
    canonical: 'https://www.tuinxpert.be/diensten',
  },
  openGraph: {
    title: 'Onze Diensten | Tuinaanleg, Onderhoud & Bestrating — TuinXpert Mol',
    description:
      'Ontdek onze diensten: tuinaanleg, tuinonderhoud, bestrating & groenvoorziening in Mol en de Kempen. Vakwerk door TuinXpert.',
    url: 'https://www.tuinxpert.be/diensten',
  },
}

const services = [
  {
    icon: Layers,
    nummer: '01',
    title: 'Bestrating & Terrassen',
    h2: 'Bestrating & terrassen — opritten en paden',
    subtitel: 'Opritten · Paden · Terrassen · Chape · Tegelen & Klinkeren',
    description:
      'Wij verzorgen de volledige aanleg van opritten, paden en terrassen in Mol en de Kempen. Of het nu gaat om klinkers leggen, tegelen of een betonnen chape — wij leveren een duurzame en verzorgde afwerking die past bij uw woning en tuin. Oprit aanleggen in de Kempen? TuinXpert staat voor u klaar.',
  },
  {
    icon: Shovel,
    nummer: '02',
    title: 'Tuinaanleg',
    h2: 'Tuinaanleg in Mol en omgeving',
    subtitel: 'Uitgraven · Nivelleren · Volledig tuinontwerp & realisatie',
    description:
      'Van grondwerken tot volledige tuinaanleg: wij zorgen voor een stabiele bodemvoorbereiding als fundament voor elk tuinproject. Als tuinarchitect in Mol begeleiden wij u van het eerste tuinplan tot de definitieve oplevering. Uw groenaanleg in de Kempen in vakkundige handen.',
  },
  {
    icon: Scissors,
    nummer: '03',
    title: 'Professioneel tuinonderhoud',
    h2: 'Professioneel tuinonderhoud in de Kempen',
    subtitel: 'Gras maaien · Hagen snoeien · Bomen & Planten',
    description:
      'Wij onderhouden uw tuin het hele jaar door in Mol, Geel, Balen en omstreken. Gazon maaien, snoeien van hagen en bomen, en het beheren van beplanting — zodat uw tuin er altijd verzorgd bij staat. Tuinonderhoud op abonnement beschikbaar voor particulieren en bedrijven in de Kempen.',
  },
  {
    icon: Sprout,
    nummer: '04',
    title: 'Groenvoorziening & Beplanting',
    h2: 'Groenvoorziening & beplanting',
    subtitel: 'Bomen · Struiken · Vaste Planten · Gazon leggen',
    description:
      'Wij planten nieuwe bomen, struiken en vaste planten op de juiste locatie, of verplanten bestaande beplanting met de nodige vakkennis. Gazon leggen in Mol? Wij rollen een mooi gazon voor u uit of zaaien een stevig grasmat. Inheemse planten en duurzame groenvoorziening staan centraal.',
  },
  {
    icon: RefreshCw,
    nummer: '05',
    title: 'Tuinrenovatie',
    h2: 'Tuinrenovatie — geef uw tuin een nieuw leven',
    subtitel: 'Bestaande tuin vernieuwen · Heraanleg · Nieuwe look',
    description:
      'Is uw tuin toe aan een frisse start? TuinXpert verzorgt tuinrenovaties in Mol en de Kempen: bestaande tuinen volledig vernieuwen met nieuwe beplanting, verharding, verlichting en structuur. Van kleine opfrissing tot volledige heraanleg — wij maken van elke tuin opnieuw een pareltje.',
  },
  {
    icon: Fence,
    nummer: '06',
    title: 'Afsluitingen & Tuinschermen',
    h2: 'Afsluitingen & tuinschermen',
    subtitel: 'Hekwerk · Schermen · Afbakening · Privacy',
    description:
      'Wij plaatsen hekwerk en tuinschermen op maat voor afbakening, privacy of veiligheid — stijlvol en duurzaam afgewerkt. Van eenvoudige draadafsluiting tot strakke aluminium tuinschermen, wij bieden een oplossing voor elk budget en elke stijl in de Kempen-regio.',
  },
  {
    icon: Lightbulb,
    nummer: '07',
    title: 'Tuinadvies & Tuinontwerp',
    h2: 'Tuinadvies & tuinontwerp',
    subtitel: 'Tuinplan · Beplantingsplan · Persoonlijk Advies',
    description:
      'Niet zeker waar te beginnen? Wij bieden professioneel tuinadvies op maat. Als tuinarchitect in Mol stellen wij een gedetailleerd tuinplan en beplantingsplan op, afgestemd op uw wensen, budget en de omgeving. Zo weet u precies wat er gaat komen — voor de eerste spade de grond ingaat.',
  },
]

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F0F7F0 0%, #FFFFFF 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(76,175,80,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,80,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
            Wat wij doen
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-wit mt-3 mb-5">
            Onze tuindiensten in Mol en de Kempen
          </h1>
          <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
            Van tuinaanleg en bestrating tot tuinonderhoud en -advies — TuinXpert levert
            vakwerk op maat als uw hovenier in Mol. Actief in de gehele Kempen-regio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-zwart relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-donker rounded-2xl p-8 border border-groen border-opacity-10 hover:border-groen-neon hover:border-opacity-40 transition-all duration-300 hover:shadow-groen-glow hover:-translate-y-1 flex flex-col"
                >
                  {/* Nummer + icoon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-groen bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300">
                      <Icon
                        size={28}
                        className="text-groen-neon group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className="font-heading font-bold text-3xl text-groen-neon opacity-20 group-hover:opacity-40 transition-opacity duration-300 leading-none">
                      {service.nummer}
                    </span>
                  </div>

                  {/* H2 (SEO) */}
                  <h2 className="font-heading text-2xl font-bold text-wit mb-1">
                    {service.title}
                  </h2>

                  {/* Subtitel */}
                  <p className="font-body text-xs font-semibold text-groen-neon tracking-wide uppercase mb-4">
                    {service.subtitel}
                  </p>

                  {/* Beschrijving */}
                  <p className="text-grijs font-body leading-relaxed text-sm flex-1">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 pt-5 border-t border-groen border-opacity-10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-body font-semibold text-sm text-groen-neon hover:gap-3 transition-all duration-300 group/link"
                    >
                      Offerte aanvragen
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Werkgebied SEO-sectie */}
      <section className="py-12 bg-donker relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-wit mb-4">
            Waarom kiezen voor TuinXpert?
          </h2>
          <p className="text-grijs font-body leading-relaxed mb-6">
            Als gespecialiseerde hovenier in Mol bieden wij een complete service: van het
            eerste tuinontwerp tot de oplevering en het jaarlijkse onderhoud. Wij werken
            in de gehele Kempen-regio — Mol, Balen, Dessel, Geel, Retie, Meerhout, Turnhout
            en Lommel. Ons team combineert jarenlange ervaring met een persoonlijke aanpak.
            Elke tuin is anders, elk project is maatwerk.
          </p>
          <p className="text-grijs font-body leading-relaxed">
            <strong className="text-wit">Tuinaanleg bedrijf in Mol 2400</strong> zoeken?
            U bent op het juiste adres. Neem vandaag contact op voor een <strong className="text-wit">gratis offerte</strong>.
          </p>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-zwart relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-donker rounded-2xl p-12 border border-groen border-opacity-20 hover:border-groen-neon hover:border-opacity-40 transition-all duration-300">
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Maatwerk
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-wit mt-3 mb-5">
              Niet gevonden wat u zoekt?
            </h2>
            <p className="text-grijs font-body text-lg leading-relaxed mb-8">
              Heeft u een specifiek tuinproject in gedachten dat niet in ons standaard
              dienstenaanbod past? Geen nood — wij denken graag mee en bieden oplossingen
              op maat voor elk tuinproject in de Kempen, hoe uniek ook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contacteer ons voor maatwerk
                <ArrowRight size={18} />
              </Link>
              <a href="tel:0493967417" className="btn-primary">
                Bel ons: 0493 96 74 17
              </a>
            </div>
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>
    </>
  )
}
