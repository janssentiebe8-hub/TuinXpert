import type { Metadata } from 'next'
import DienstenContent from '@/components/sections/DienstenContent'

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
    images: [{ url: 'https://www.tuinxpert.be/images/hero.jpg', width: 1200, height: 630, alt: 'TuinXpert — Tuinaanleg en tuinonderhoud in Mol en de Kempen' }],
  },
  twitter: {
    title: 'Onze Diensten | Tuinaanleg, Onderhoud & Bestrating',
    description: 'Ontdek onze diensten: tuinaanleg, tuinonderhoud, bestrating & groenvoorziening in Mol en de Kempen. Vakwerk door TuinXpert.',
  },
}

export default function DienstenPage() {
  return <DienstenContent />
}
