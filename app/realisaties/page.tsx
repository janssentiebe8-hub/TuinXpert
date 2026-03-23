import type { Metadata } from 'next'
import RealisatiesContent from '@/components/sections/RealisatiesContent'

export const metadata: Metadata = {
  title: 'Realisaties | Tuinaanleg Projecten in Mol & Kempen',
  description:
    'Bekijk onze gerealiseerde tuinprojecten in Mol, Geel, Turnhout en de Kempen. Inspiratie voor uw droomtuin bij TuinXpert.',
  alternates: {
    canonical: 'https://www.xandrostuinen.be/realisaties',
  },
  openGraph: {
    title: 'Realisaties | Tuinaanleg Projecten in Mol & Kempen — TuinXpert',
    description:
      'Bekijk onze gerealiseerde tuinprojecten in Mol, Geel, Turnhout en de Kempen. Inspiratie voor uw droomtuin bij TuinXpert.',
    url: 'https://www.xandrostuinen.be/realisaties',
  },
}

export default function RealisatiesPage() {
  return <RealisatiesContent />
}
