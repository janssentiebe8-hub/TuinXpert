import type { Metadata } from 'next'
import OverOnsContent from '@/components/sections/OverOnsContent'

export const metadata: Metadata = {
  title: 'Over TuinXpert | Uw Hovenier in Mol, Kempen',
  description:
    'Maak kennis met TuinXpert — uw betrouwbare hovenier in Mol. Passie voor tuinaanleg en groenonderhoud in de Kempen. 5+ jaar vakmanschap.',
  alternates: {
    canonical: 'https://www.tuinxpert.be/over-ons',
  },
  openGraph: {
    title: 'Over TuinXpert | Uw Hovenier in Mol, Kempen',
    description:
      'Maak kennis met TuinXpert — uw betrouwbare hovenier in Mol. Passie voor tuinaanleg en groenonderhoud in de Kempen.',
    url: 'https://www.tuinxpert.be/over-ons',
    images: [{ url: 'https://www.tuinxpert.be/images/hero-poster-desktop.webp', width: 1200, height: 630, alt: 'TuinXpert — Tuinaanleg en tuinonderhoud in Mol en de Kempen' }],
  },
  twitter: {
    title: 'Over TuinXpert | Uw Hovenier in Mol, Kempen',
    description: 'Maak kennis met TuinXpert — uw betrouwbare hovenier in Mol. Passie voor tuinaanleg en groenonderhoud in de Kempen.',
  },
}


export default function OverOnsPage() {
  return <OverOnsContent />
}
