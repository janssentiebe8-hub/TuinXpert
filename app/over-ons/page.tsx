import type { Metadata } from 'next'
import Image from 'next/image'
import { WavingGrass, GrowingPlants } from '@/components/ui/NatureAnimations'
import { Heart, Shield, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Over TuinXpert | Uw Hovenier in Mol, Kempen',
  description:
    'Maak kennis met TuinXpert — uw betrouwbare hovenier in Mol. Passie voor tuinaanleg en groenonderhoud in de Kempen. Meer dan 10 jaar vakmanschap.',
  alternates: {
    canonical: 'https://www.xandrostuinen.be/over-ons',
  },
  openGraph: {
    title: 'Over TuinXpert | Uw Hovenier in Mol, Kempen',
    description:
      'Maak kennis met TuinXpert — uw betrouwbare hovenier in Mol. Passie voor tuinaanleg en groenonderhoud in de Kempen.',
    url: 'https://www.xandrostuinen.be/over-ons',
  },
}

const teamMembers = [
  {
    name: 'Xandro [PLACEHOLDER Achternaam]',
    role: 'Zaakvoerder & Tuinaannemer',
    description:
      "Oprichter van TuinXpert met meer dan 10 jaar ervaring in tuinaanleg en -ontwerp. Gepassioneerd door groen en duurzame buitenruimtes.",
    initials: 'X',
  },
  {
    name: '[PLACEHOLDER Voornaam Naam]',
    role: 'Tuinmedewerker',
    description:
      'Ervaren in bestrating, terrasaanleg en tuinonderhoud. Staat garant voor kwaliteitswerk en een nette oplevering bij elk project.',
    initials: 'T',
  },
  {
    name: '[PLACEHOLDER Voornaam Naam]',
    role: 'Vijver- & Waterspecialist',
    description:
      'Specialist in de aanleg en het onderhoud van vijvers, waterpartijen en filtratiesystemen. Brengt water tot leven in elke tuin.',
    initials: 'V',
  },
]

const values = [
  {
    icon: <Leaf size={28} />,
    title: 'Passie voor natuur',
    description:
      'Wij werken elke dag met passie en respect voor de natuur. Duurzame materialen, inheemse planten en ecologische oplossingen staan centraal in onze aanpak.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Kwaliteit & vakmanschap',
    description:
      'Elk project wordt met de grootste zorg en precisie uitgevoerd. Wij werken enkel met kwalitatieve materialen en leveranciers warop wij kunnen vertrouwen.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Betrouwbaarheid',
    description:
      'Wij komen onze afspraken na: op tijd, binnen budget en zoals beloofd. Onze klanten mogen altijd rekenen op eerlijkheid en transparante communicatie.',
  },
]

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
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
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo/TuinXpert-Logo-Full.svg"
              alt="TuinXpert"
              width={280}
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
            Wie zijn wij
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-wit mt-3 mb-5">
            Over TuinXpert — uw hovenier in Mol
          </h1>
          <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
            Maak kennis met TuinXpert — uw betrouwbare hovenier en tuinaanlegbedrijf in
            Mol (2400), actief in de gehele Kempen-regio.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-donker relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
                Ons verhaal
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-6">
                Wie is TuinXpert?
              </h2>
              <div className="space-y-4 text-grijs font-body text-lg leading-relaxed">
                <p>
                  TuinXpert is ontstaan vanuit een diepe passie voor natuur en het
                  buitenleven. De oprichter groeide op met de handen in de aarde en
                  droomde er van jongs af aan van om zijn liefde voor tuinieren om te
                  zetten in een levenswerk — als hovenier in Mol en de Kempen.
                </p>
                <p>
                  Na een gerichte opleiding en jaren ervaring bij gerenommeerde
                  tuinaanlegbedrijven in de regio, waagde hij de stap om zijn eigen
                  onderneming op te richten in Mol. Wat begon als een eenmanszaak,
                  groeide snel uit tot een klein maar gedreven team van tuinprofessionals.
                </p>
                <p>
                  Vandaag is TuinXpert een vertrouwde naam voor tuinaanleg en
                  tuinonderhoud in Mol (2400) en omstreken. Wij zijn trots op de
                  honderden tuinen die wij mochten ontwerpen, aanleggen en onderhouden
                  in Mol, Geel, Balen, Retie, Turnhout en de ruimere Kempen-regio.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden h-64 sm:h-96 lg:h-[500px] relative"
                style={{
                  background:
                    'linear-gradient(135deg, #1a3a1a 0%, #2D6A2D 50%, #0A1A0A 100%)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-7xl mb-4">🌱</div>
                    <p className="text-grijs font-body text-sm">
                      [PLACEHOLDER — teamfoto TuinXpert]
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-groen-neon opacity-10 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-groen opacity-20 rounded-tr-full" />
              </div>
            </div>
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-zwart relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Waarvoor wij staan
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-4">
              Onze aanpak: van schets tot droomtuin
            </h2>
            <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
              Wij geloven dat elke tuin een verhaal vertelt. Ons doel is om dat
              verhaal zo mooi mogelijk te maken — met vakmanschap, eerlijkheid
              en een oprechte liefde voor groen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-donker rounded-2xl p-8 border border-groen border-opacity-10 hover:border-groen-neon hover:border-opacity-40 transition-all duration-300 hover:shadow-groen-glow hover:-translate-y-1 text-center"
              >
                <div className="text-groen-neon mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-wit mb-4">
                  {value.title}
                </h3>
                <p className="text-grijs font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Team */}
      <section className="section-padding bg-donker relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Ons team
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-4">
              De mensen achter TuinXpert
            </h2>
            <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
              Wij zijn een klein, hecht team van gepassioneerde tuinprofessionals.
              Elk projectlid brengt specifieke expertise mee, samen leveren wij
              één geheel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-zwart rounded-2xl overflow-hidden border border-groen border-opacity-10 hover:border-groen-neon hover:border-opacity-40 transition-all duration-300 hover:shadow-groen-glow hover:-translate-y-1"
              >
                {/* Photo placeholder */}
                <div
                  className="h-56 relative flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, #1a3a1a 0%, #2D6A2D 100%)',
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-groen-neon flex items-center justify-center text-white font-heading font-bold text-3xl shadow-groen-glow">
                    {member.initials}
                  </div>
                  <p className="absolute bottom-3 left-0 right-0 text-center text-grijs font-body text-xs opacity-60">
                    [PLACEHOLDER — teamfoto]
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-wit mb-1">
                    {member.name}
                  </h3>
                  <span className="text-groen-neon font-body text-sm font-semibold">
                    {member.role}
                  </span>
                  <p className="text-grijs font-body text-sm leading-relaxed mt-3">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>
    </>
  )
}
