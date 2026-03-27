'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WavingGrass, GrowingPlants } from '@/components/ui/NatureAnimations'
import { Heart, Shield, Leaf } from 'lucide-react'

const values = [
  {
    icon: <Leaf size={28} />,
    title: 'Liefde voor buiten',
    description:
      'Al van kinds af aan buiten. Die passie nemen we mee in elk project, groot of klein.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Kwaliteit en vakmanschap',
    description:
      'Elk project wordt met de grootste zorg en precisie uitgevoerd. Wij werken enkel met kwalitatieve materialen en leveranciers waarop wij kunnen vertrouwen.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Betrouwbaarheid',
    description:
      'Wij komen onze afspraken na: op tijd, binnen budget en zoals beloofd. Onze klanten mogen altijd rekenen op eerlijkheid en transparante communicatie.',
  },
]

export default function OverOnsContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 sm:pt-32 pb-6 sm:pb-8 relative overflow-hidden"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-donker relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
                Ons verhaal
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-6">
                Wie is TuinXpert?
              </h2>
              <div className="space-y-4 text-grijs font-body text-lg leading-relaxed">
                <p>
                  TuinXpert is het verhaal van Xandro, een jonge en gedreven vakman uit Mol met een passie voor buitenwerk en alles wat met tuinen te maken heeft. Op 22-jarige leeftijd heeft hij al meerdere jaren ervaring in de bouwsector, waar hij een sterke basis heeft opgebouwd in nauwkeurigheid, hard werk en kwaliteit.
                </p>
                <p>
                  Wat begon als interesse, groeide al snel uit tot een echte passie. Xandro haalt voldoening uit het creëren van buitenruimtes waar mensen tot rust kunnen komen en genieten. Met oog voor detail en een praktische aanpak zet hij zich elke dag in om klanten tevreden achter te laten.
                </p>
                <p>
                  TuinXpert staat voor betrouwbaarheid, duidelijke communicatie en werk dat met zorg wordt uitgevoerd. Of het nu gaat om een kleine aanpassing of een volledig project, elke opdracht wordt met dezelfde inzet en aandacht behandeld.
                </p>
                <p>
                  Actief in Mol en omstreken helpt TuinXpert particulieren bij het aanleggen, onderhouden en verbeteren van hun tuin.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden h-64 sm:h-96 lg:h-[500px] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/realisaties/foto10.jpeg"
                  alt="Aangelegde oprit met betonnen tegels en kiezelstroken door TuinXpert in Mol"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-zwart relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Waarvoor wij staan
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-4">
              Onze aanpak: van schets tot droomtuin
            </h2>
            <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
              Jouw tuin is voor ons geen project — het is jouw plek. We luisteren eerst, denken mee, en gaan pas aan de slag als we weten wat jij écht wil. Altijd eerlijk, altijd vakkundig.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>
    </>
  )
}
