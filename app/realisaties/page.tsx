import type { Metadata } from 'next'
import RealisatiesContent from '@/components/sections/RealisatiesContent'

export const metadata: Metadata = {
  title: 'Realisaties | Tuinaanleg Projecten in Mol & Kempen',
  description:
    'Bekijk onze gerealiseerde tuinprojecten in Mol, Geel, Turnhout en de Kempen. Inspiratie voor uw droomtuin bij TuinXpert.',
  alternates: {
    canonical: 'https://www.tuinxpert.be/realisaties',
  },
  openGraph: {
    title: 'Realisaties | Tuinaanleg Projecten in Mol & Kempen — TuinXpert',
    description:
      'Bekijk onze gerealiseerde tuinprojecten in Mol, Geel, Turnhout en de Kempen. Inspiratie voor uw droomtuin bij TuinXpert.',
    url: 'https://www.tuinxpert.be/realisaties',
    images: [{ url: 'https://www.tuinxpert.be/images/hero-poster-desktop.webp', width: 1200, height: 630, alt: 'TuinXpert — Tuinaanleg en tuinonderhoud in Mol en de Kempen' }],
  },
  twitter: {
    title: 'Realisaties | Tuinaanleg Projecten in Mol & Kempen',
    description: 'Bekijk onze gerealiseerde tuinprojecten in Mol, Geel, Turnhout en de Kempen. Inspiratie voor uw droomtuin bij TuinXpert.',
  },
}

export default function RealisatiesPage() {
  return <RealisatiesContent />
}
