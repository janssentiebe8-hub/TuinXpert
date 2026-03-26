'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { WavingGrass, GrowingPlants } from '@/components/ui/NatureAnimations'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Category = 'Alle' | 'Tuinaanleg' | 'Onderhoud' | 'Bestrating' | 'Groenvoorziening'

interface Project {
  id: number
  title: string
  category: Exclude<Category, 'Alle'>
  location: string
  year: number
  image: string
  alt: string
  description: string
  size: 'normal' | 'tall' | 'wide'
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Oprit en kiezelaanleg',
    category: 'Bestrating',
    location: 'Mol',
    year: 2024,
    image: '/images/realisaties/foto-1.jpeg',
    alt: 'Oprit en kiezelaanleg door TuinXpert — betonnen pad en kiezelstroken',
    description: 'Aanleg van een betonnen pad en kiezelstroken langs een nieuwbouwwoning.',
    size: 'tall',
  },
  {
    id: 2,
    title: 'Oprit en kiezelaanleg',
    category: 'Bestrating',
    location: 'Mol',
    year: 2024,
    image: '/images/realisaties/foto-7.jpeg',
    alt: 'Oprit en kiezelaanleg door TuinXpert — betonnen pad en kiezelstroken',
    description: 'Aanleg van een betonnen pad en kiezelstroken langs een nieuwbouwwoning.',
    size: 'tall',
  },
  {
    id: 3,
    title: 'Oprit en kiezelaanleg',
    category: 'Bestrating',
    location: 'Mol',
    year: 2024,
    image: '/images/realisaties/foto-2.jpeg',
    alt: 'Oprit en kiezelaanleg door TuinXpert — betonnen pad en kiezelstroken',
    description: 'Aanleg van een betonnen pad en kiezelstroken langs een nieuwbouwwoning.',
    size: 'normal',
  },
  {
    id: 4,
    title: 'Oprit en kiezelaanleg',
    category: 'Bestrating',
    location: 'Mol',
    year: 2024,
    image: '/images/realisaties/foto-6.jpeg',
    alt: 'Oprit en kiezelaanleg door TuinXpert — betonnen pad en kiezelstroken',
    description: 'Aanleg van een betonnen pad en kiezelstroken langs een nieuwbouwwoning.',
    size: 'normal',
  },
  {
    id: 5,
    title: 'Groenonderhoud',
    category: 'Onderhoud',
    location: 'Mol',
    year: 2024,
    image: '/images/realisaties/foto-3.jpeg',
    alt: 'Groenonderhoud door TuinXpert — sierschors leggen en poetsen',
    description: 'Groenonderhoud met het leggen en poetsen van sierschors.',
    size: 'normal',
  },
  {
    id: 6,
    title: 'Kasseioprit reiniging',
    category: 'Onderhoud',
    location: 'Mol',
    year: 2024,
    image: '/images/realisaties/foto-4.jpeg',
    alt: 'Kasseioprit reiniging door TuinXpert — hogedruk en voegen',
    description: 'Kasseioprit gereinigd met hogedruk en zand terug in de voegen gezet.',
    size: 'wide',
  },
  {
    id: 7,
    title: 'Chape gelegd op zolder',
    category: 'Bestrating',
    location: 'Mol',
    year: 2025,
    image: '/images/realisaties/4C421405-981B-4DA6-8EED-48759EED7F41.jpeg',
    alt: 'Chape gelegd op zolder door TuinXpert — vloerchape zolderverdieping',
    description: 'Chape gelegd op de zolderverdieping voor een vlakke en duurzame afwerking.',
    size: 'normal',
  },
  {
    id: 8,
    title: 'Chape gelegd op zolder',
    category: 'Bestrating',
    location: 'Mol',
    year: 2025,
    image: '/images/realisaties/FB254EDF-C155-4782-9150-9699B5474877.jpeg',
    alt: 'Chape gelegd op zolder door TuinXpert — vloerchape zolderverdieping',
    description: 'Chape gelegd op de zolderverdieping voor een vlakke en duurzame afwerking.',
    size: 'normal',
  },
]

const allCategories: Category[] = ['Alle', 'Tuinaanleg', 'Onderhoud', 'Bestrating', 'Groenvoorziening']

export default function RealisatiesContent() {
  const [activeCategory, setActiveCategory] = useState<Category>('Alle')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const categories = allCategories.filter(
    (cat) => cat === 'Alle' || projects.some((p) => p.category === cat)
  )

  const filtered =
    activeCategory === 'Alle'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? filtered.length - 1 : prev - 1
    )
  }, [lightboxIndex, filtered.length])

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      prev === null ? null : prev === filtered.length - 1 ? 0 : prev + 1
    )
  }, [lightboxIndex, filtered.length])

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
              Portfolio
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-wit mt-3 mb-5">
              Onze realisaties — tuinprojecten in de Kempen
            </h1>
            <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
              Bekijk onze gerealiseerde tuinprojecten in Mol, Geel, Balen, Retie en de
              ruimere Kempen-regio. Elk project is een bewijs van ons vakmanschap als
              hovenier in Mol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-donker sticky top-16 z-30 border-b border-groen border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body font-semibold text-sm px-5 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                  activeCategory === cat
                    ? 'bg-groen-neon border-groen-neon text-white shadow-groen-glow'
                    : 'bg-transparent border-groen border-opacity-30 text-grijs hover:border-groen-neon hover:text-groen hover:shadow-groen-glow'
                }`}
              >
                {cat}
                {cat !== 'Alle' && (
                  <span className="ml-1 text-xs opacity-70">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding bg-zwart relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer mb-6"
                  style={{
                    height:
                      project.size === 'tall'
                        ? '380px'
                        : project.size === 'wide'
                        ? '260px'
                        : '300px',
                  }}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title & description overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-white/70 mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-groen-neon text-white font-body text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-grijs font-body">
              Geen projecten gevonden in deze categorie.
            </div>
          )}
        </div>
        <WavingGrass />
        <GrowingPlants />
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-groen-neon transition-colors duration-200 z-10"
                aria-label="Sluit lightbox"
              >
                <X size={32} />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden relative"
                style={{ height: '70vh', minHeight: '400px' }}
              >
                <Image
                  src={filtered[lightboxIndex].image}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  quality={90}
                  priority
                />
              </motion.div>

              <div className="mt-4 text-center">
                <span className="text-groen-neon font-body text-xs font-semibold tracking-widest uppercase">
                  {filtered[lightboxIndex].category}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-wit mt-1">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="text-grijs font-body text-sm">
                  {filtered[lightboxIndex].location} — {filtered[lightboxIndex].year}
                </p>
                <p className="text-grijs font-body text-sm mt-2 max-w-lg mx-auto">
                  {filtered[lightboxIndex].description}
                </p>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-16 text-white hover:text-groen-neon transition-colors duration-200 bg-black bg-opacity-60 rounded-full p-2 hover:shadow-groen-glow"
                aria-label="Vorige foto"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-16 text-white hover:text-groen-neon transition-colors duration-200 bg-black bg-opacity-60 rounded-full p-2 hover:shadow-groen-glow"
                aria-label="Volgende foto"
              >
                <ChevronRight size={28} />
              </button>

              <div className="absolute bottom-16 right-0 text-grijs font-body text-sm">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
