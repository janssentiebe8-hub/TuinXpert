'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { WavingGrass, GrowingPlants } from '@/components/ui/NatureAnimations'
import {
  Shovel,
  Scissors,
  Square,
  Star,
  ArrowRight,
  ChevronDown,
  MapPin,
} from 'lucide-react'


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function HomeContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          poster="/images/hero.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.60)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
<div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight max-w-3xl"
              >
                Tuinaanleg & tuinonderhoud in Mol en de Kempen
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="font-body text-lg sm:text-xl mb-3 leading-relaxed"
                style={{ color: '#D1D5DB' }}
              >
                Van schets tot droomtuin — uw specialist voor tuinaanleg in Mol (2400)
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 items-start mt-8"
              >
                <Link
                  href="/diensten"
                  className="inline-flex items-center justify-center gap-2 font-body font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: '#2D6A2D',
                    color: '#ffffff',
                    boxShadow: '0 0 12px rgba(76,175,80,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3D8B3D'
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.boxShadow = '0 0 28px rgba(76,175,80,0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#4CAF50'
                    e.currentTarget.style.color = '#111111'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(76,175,80,0.35)'
                  }}
                >
                  Diensten bekijken
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 font-body font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: '#2D6A2D',
                    color: '#ffffff',
                    boxShadow: '0 0 12px rgba(76,175,80,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3D8B3D'
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.boxShadow = '0 0 28px rgba(76,175,80,0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#4CAF50'
                    e.currentTarget.style.color = '#111111'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(76,175,80,0.35)'
                  }}
                >
                  Gratis offerte aanvragen
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 right-8 text-white opacity-60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Intro / About Section */}
      <section className="section-padding bg-donker relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
                Over ons
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-6">
                Van schets tot droomtuin
              </h2>
              <p className="text-grijs font-body text-lg leading-relaxed mb-6">
                TuinXpert is het verhaal van Xandro, een jonge en gedreven hovenier uit Mol, actief in de regio Mol, Geel, Balen, Turnhout en Lommel. Met een sterke passie voor tuinaanleg en tuinonderhoud creëert hij buitenruimtes waar mensen tot rust komen en genieten.
              </p>
              <p className="text-grijs font-body text-lg leading-relaxed mb-6">
                Met een achtergrond in de bouwsector staat TuinXpert garant voor nauwkeurigheid, kwaliteit en een praktische aanpak. Elk project wordt met zorg en oog voor detail uitgevoerd.
              </p>
              <p className="text-grijs font-body text-lg leading-relaxed mb-8">
                Als betrouwbaar tuinbedrijf helpt TuinXpert je bij het aanleggen, onderhouden en verbeteren van je tuin — van schets tot droomtuin.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { value: '5+', label: 'Jaar in de sector' },
                  { value: '100%', label: 'Op maat' },
                  { value: '100%', label: 'Tevredenheid' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading text-3xl font-bold text-groen-neon">
                      {stat.value}
                    </div>
                    <div className="font-body text-sm text-grijs mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden h-96 lg:h-[500px] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/over.ons.home.pagina.foto.jpeg"
                  alt="TuinXpert hovenier aan het werk in een tuin in de Kempen"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-groen-neon text-white rounded-2xl p-4 shadow-groen-glow text-center">
                <div className="font-heading text-2xl font-bold">5+</div>
                <div className="font-body text-xs font-medium">jaar in de sector</div>
              </div>
            </motion.div>
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-zwart relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Onze diensten
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-4">
              Onze diensten — van tuinontwerp tot onderhoud
            </h2>
            <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
              Van tuinontwerp tot dagelijks onderhoud — wij bieden een volledig pakket
              aan tuindiensten op maat van uw wensen en budget in de Kempen.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Shovel size={32} />,
                title: 'Tuinaanleg & Ontwerp',
                description:
                  'Van concept tot realisatie: wij ontwerpen en leggen uw droomtuin aan in Mol en omgeving. Volledig op maat, met een professioneel tuinplan en duurzame materialen.',
                href: '/diensten',
              },
              {
                icon: <Scissors size={32} />,
                title: 'Tuinonderhoud',
                description:
                  'Regelmatig en vakkundig tuinonderhoud in de Kempen door ons ervaren team. Maaien, snoeien, hagen bijknippen — uw tuin altijd in perfecte staat.',
                href: '/diensten',
              },
              {
                icon: <Square size={32} />,
                title: 'Bestrating & Opritten',
                description:
                  'Stijlvolle terrassen, opritten en paden in klinkers, tegels of natuursteen. Duurzaam, functioneel en esthetisch — door uw hovenier in Mol.',
                href: '/diensten',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-donker rounded-2xl p-8 border border-groen border-opacity-10 hover:border-groen-neon hover:border-opacity-40 transition-all duration-300 hover:shadow-groen-glow hover:-translate-y-1"
              >
                <div className="text-groen-neon mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-wit mb-4">
                  {service.title}
                </h3>
                <p className="text-grijs font-body leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-groen-neon font-body font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Meer info
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#4CAF50', color: '#111111', boxShadow: '0 0 12px rgba(76,175,80,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor='#3D8B3D'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.boxShadow='0 0 28px rgba(76,175,80,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor='#2D6A2D'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.boxShadow='0 0 12px rgba(76,175,80,0.35)' }}
            >
              Bekijk alle diensten
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-donker relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Onze Realisaties
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-4">
              Trots op elk project
            </h2>
            <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
              Van strakke bestrating tot weelderig groen — ontdek een greep uit onze
              afgewerkte projecten in de Kempen.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Pad Beklinkerd',
                category: 'Bestrating',
                image: '/images/realisaties/foto-1.jpeg',
                alt: 'Beklinkerd tuinpad aangelegd door TuinXpert in de Kempen',
              },
              {
                title: 'Groenonderhoud',
                category: 'Onderhoud',
                image: '/images/realisaties/foto-3.jpeg',
                alt: 'Groenonderhoud met beplanting en snoeien door TuinXpert',
              },
              {
                title: 'Kasseien Oprit Reinigen',
                category: 'Bestrating',
                image: '/images/realisaties/foto-4.jpeg',
                alt: 'Kasseien oprit gereinigd door TuinXpert in de Kempen',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-groen bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-400 flex items-end">
                  <div className="p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-groen-neon font-body text-xs font-semibold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-groen-neon text-white font-body text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/realisaties" className="btn-primary">
              Bekijk alle realisaties
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Werkgebied */}
      <section className="section-padding bg-zwart relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Werkgebied
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-4">
              Werkgebied: Mol, Geel, Turnhout & de Kempen
            </h2>
            <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
              Als hovenier in Mol zijn wij actief in de volledige Kempen-regio.
              U hoeft niet ver te zoeken voor vakkundige tuinaanleg of tuinonderhoud.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Mol', 'Balen', 'Dessel', 'Geel', 'Retie', 'Meerhout', 'Turnhout', 'Lommel', 'Kempen-regio'].map((place) => (
              <span
                key={place}
                className="inline-flex items-center gap-1.5 bg-donker border border-groen border-opacity-20 text-grijs font-body text-sm px-4 py-2 rounded-full hover:border-groen-neon hover:text-groen-neon transition-all duration-300"
              >
                <MapPin size={13} />
                {place}
              </span>
            ))}
          </motion.div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-donker relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Klantreviews
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-4">
              Wat onze klanten zeggen
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-zwart rounded-2xl p-10 border border-groen border-opacity-20">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} className="text-groen-neon fill-groen-neon opacity-40" />
                ))}
              </div>
              <p className="font-heading text-xl text-wit font-semibold mb-3">
                Reviews komen binnenkort
              </p>
              <p className="font-body text-grijs leading-relaxed mb-8">
                Wij zijn volop aan het werk voor onze klanten. Tevreden over ons werk?
                Laat een review achter op Google — we waarderen elke reactie!
              </p>
              <a
                href="https://g.page/r/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#4CAF50', color: '#111111', boxShadow: '0 0 12px rgba(76,175,80,0.35)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor='#3D8B3D'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.boxShadow='0 0 28px rgba(76,175,80,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor='#2D6A2D'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.boxShadow='0 0 12px rgba(76,175,80,0.35)' }}
              >
                <Star size={16} />
                Schrijf een Google review
              </a>
            </div>
          </motion.div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* CTA Banner */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a3a1a 0%, #2D6A2D 50%, #1a3a1a 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #4CAF50 0%, transparent 60%)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Klaar voor uw droomtuin?
            </h2>
            <p className="font-body text-green-100 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
              Vraag een <strong>gratis offerte</strong> aan voor tuinaanleg of
              tuinonderhoud in Mol en de Kempen. Wij komen ter plaatse voor een
              vrijblijvend adviesgesprek op maat.
            </p>
            <p className="font-body text-green-200 text-sm mb-10 italic">
              "Van schets tot droomtuin" — TuinXpert, uw hovenier in Mol (2400)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#4CAF50', color: '#111111', boxShadow: '0 0 12px rgba(76,175,80,0.35)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor='#3D8B3D'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.boxShadow='0 0 28px rgba(76,175,80,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor='#2D6A2D'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.boxShadow='0 0 12px rgba(76,175,80,0.35)' }}
              >
                Vraag een gratis offerte aan
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:0493967417"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#4CAF50', color: '#111111', boxShadow: '0 0 12px rgba(76,175,80,0.35)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor='#3D8B3D'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.boxShadow='0 0 28px rgba(76,175,80,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor='#2D6A2D'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.boxShadow='0 0 12px rgba(76,175,80,0.35)' }}
              >
                Bel ons: 0493 96 74 17
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
