import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen (FAQ)',
  description:
    'Antwoorden op veelgestelde vragen over TuinXpert: tuinaanleg Geel, tuinonderhoud Kempen, tarieven, garantie en offerte aanvragen. Actief in heel de Kempen.',
  keywords: [
    'tuinaanleg Geel',
    'tuinaanleg Kempen',
    'tuinier Geel',
    'tuinonderhoud Kempen',
    'tuinrenovatie Geel',
    'bestrating Kempen',
    'TuinXpert FAQ',
    'tuinaanleg offerte Geel',
  ],
  openGraph: {
    title: 'Veelgestelde Vragen | TuinXpert',
    description:
      'Alles wat u wil weten over tuinaanleg, onderhoud en tarieven in de Kempen. TuinXpert — Van schets tot droomtuin.',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
