'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { WavingGrass, GrowingPlants } from '@/components/ui/NatureAnimations'
import { ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react'

const faqs = [
  {
    vraag: 'Welke diensten biedt TuinXpert aan?',
    antwoord:
      'TuinXpert biedt een volledig pakket aan tuindiensten: tuinaanleg & tuinontwerp op maat, periodiek tuinonderhoud, tuinrenovatie van bestaande tuinen, en professionele bestrating van terrassen, opritten en tuinpaden. Of u nu een volledig nieuwe tuin wilt of uw bestaande tuin wil vernieuwen — wij verzorgen het van A tot Z.',
    categorie: 'Diensten',
  },
  {
    vraag: 'In welke regio is TuinXpert actief?',
    antwoord:
      'Wij zijn voornamelijk actief in de Kempen, met Mol als thuisbasis. Wij werken in de ruime omgeving van Mol, Geel, Balen, Herentals, Westerlo, Laakdal en andere gemeenten in de Antwerpse Kempen. Twijfelt u of uw gemeente in ons werkgebied valt? Neem gerust contact op — wij bekijken het graag voor u.',
    categorie: 'Werkgebied',
  },
  {
    vraag: 'Hoe vraag ik een vrijblijvende offerte aan?',
    antwoord:
      'Een offerte aanvragen gaat snel en eenvoudig. U kunt het contactformulier op onze website invullen, of ons rechtstreeks bellen op 0493 96 74 17. Na uw aanvraag plannen wij een gratis kennismakingsgesprek bij u thuis in, waarbij we uw wensen bespreken en de situatie ter plaatse bekijken. Vervolgens ontvangt u een gedetailleerde, vrijblijvende offerte op maat.',
    categorie: 'Offerte',
  },
  {
    vraag: 'Hoe lang duurt een tuinproject gemiddeld?',
    antwoord:
      'De doorlooptijd hangt sterk af van de omvang en complexiteit van het project. Een eenvoudige heraanleg of terrasaanleg duurt doorgaans 2 tot 5 werkdagen. Een volledige tuinaanleg met ontwerp, grondwerken, bestrating en beplanting kan 1 tot 4 weken in beslag nemen. Bij grotere of complexere projecten communiceren wij vooraf een duidelijke planning zodat u weet waar u aan toe bent.',
    categorie: 'Planning',
  },
  {
    vraag: 'Geven jullie garantie op het uitgevoerde werk?',
    antwoord:
      'Ja, TuinXpert staat volledig achter de kwaliteit van zijn werk. Op bestrating en constructiewerken bieden wij 2 jaar garantie. Op de gebruikte planten en bomen geven wij 1 groeiseizoen garantie, mits correcte verzorging door de klant. Onze garanties zijn conform het Belgisch recht. Eventuele opmerkingen of problemen lossen wij snel en professioneel op.',
    categorie: 'Garantie',
  },
  {
    vraag: 'Wat zijn de tarieven van TuinXpert?',
    antwoord:
      'Onze tarieven zijn afhankelijk van de aard en omvang van het werk en worden steeds op maat berekend. Wij werken transparant: u ontvangt altijd een gedetailleerde offerte vóór de start van de werken, zonder verborgen kosten. Voor tuinonderhoud werken wij met vaste abonnementsformules. Vraag gerust een vrijblijvende offerte aan — wij zoeken altijd naar de beste prijs-kwaliteitsverhouding voor uw situatie.',
    categorie: 'Prijzen',
  },
]

const categorieBadgeKleur: Record<string, string> = {
  Diensten: 'bg-groen text-white',
  Werkgebied: 'bg-groen-helder text-white',
  Offerte: 'bg-groen-neon text-white',
  Planning: 'bg-groen text-white',
  Garantie: 'bg-groen-helder text-white',
  Prijzen: 'bg-groen-neon text-white',
}

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="border border-groen border-opacity-20 rounded-2xl overflow-hidden bg-zwart hover:border-groen-neon hover:border-opacity-50 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span
            className={`hidden sm:inline-flex flex-shrink-0 text-xs font-body font-semibold px-2.5 py-1 rounded-full ${categorieBadgeKleur[faq.categorie]}`}
          >
            {faq.categorie}
          </span>
          <span className="font-heading font-bold text-wit text-base sm:text-lg leading-snug group-hover:text-groen-neon transition-colors duration-200">
            {faq.vraag}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0 text-groen-neon"
        >
          <ChevronDown size={22} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 border-t border-groen border-opacity-10">
              <p className="font-body text-grijs leading-relaxed text-sm sm:text-base">
                {faq.antwoord}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqPage() {
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
              priority
            />
          </div>
          <p className="font-body text-groen font-semibold text-sm tracking-widest uppercase mb-3">
            Van schets tot droomtuin.
          </p>
          <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
            Veelgestelde vragen
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-wit mt-3 mb-5">
            Alles wat u wilt weten
          </h1>
          <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
            Hieronder vindt u antwoorden op de meest gestelde vragen over onze
            diensten, werkgebied, tarieven en aanpak. Staat uw vraag er niet bij?
            Contacteer ons gerust.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-donker relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Nog een vraag? CTA */}
      <section className="section-padding bg-zwart relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a3a1a 0%, #2D6A2D 50%, #1a3a1a 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 70% 30%, #4CAF50 0%, transparent 60%)`,
              }}
            />
            <div className="relative z-10">
              <span className="text-green-300 font-body font-semibold text-sm tracking-widest uppercase">
                Nog een vraag?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
                Wij helpen u graag verder
              </h2>
              <p className="font-body text-green-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Staat uw vraag er niet bij, of wenst u een persoonlijk advies?
                Neem contact op — wij reageren binnen de werkdag.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-groen font-body font-semibold px-7 py-3.5 rounded-md hover:bg-groen-neon hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-groen-glow"
                >
                  <Mail size={18} />
                  Contactformulier
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:0493967417"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-body font-semibold px-7 py-3.5 rounded-md border-2 border-white border-opacity-50 hover:border-opacity-100 hover:bg-white hover:text-groen transition-all duration-300 hover:scale-105"
                >
                  <Phone size={18} />
                  0493 96 74 17
                </a>
              </div>
            </div>
          </div>
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>
    </>
  )
}
