import type { Metadata } from 'next'
import HomeContent from '@/components/sections/HomeContent'

export const metadata: Metadata = {
  title: 'TuinXpert Mol | Tuinaanleg & Tuinonderhoud in de Kempen',
  description:
    'TuinXpert uit Mol — specialist in tuinaanleg, tuinonderhoud & bestrating in de Kempen. Van schets tot droomtuin. Vraag een gratis offerte aan!',
  keywords: [
    'tuinaanleg Mol',
    'hovenier Mol',
    'tuinonderhoud Mol',
    'tuinaanleg Kempen',
    'tuinarchitect Mol',
    'bestrating Mol',
    'oprit aanleggen Kempen',
    'gazon leggen Mol',
    'hovenier Kempen',
    'tuin aanleggen Mol',
    'tuinonderhoud Kempen',
    'groenvoorziening Mol',
    'tuinrenovatie Mol',
  ],
  alternates: {
    canonical: 'https://www.tuinxpert.be',
  },
  openGraph: {
    title: 'TuinXpert Mol | Tuinaanleg & Tuinonderhoud in de Kempen',
    description:
      'TuinXpert uit Mol — specialist in tuinaanleg, tuinonderhoud & bestrating in de Kempen. Van schets tot droomtuin. Vraag een gratis offerte aan!',
    url: 'https://www.tuinxpert.be',
    images: [
      {
        url: 'https://www.tuinxpert.be/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'TuinXpert — Tuinaanleg en tuinonderhoud in Mol en de Kempen',
      },
    ],
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TuinXpert',
  description: 'Tuinaanleg en tuinonderhoud in Mol en de Kempen',
  url: 'https://www.tuinxpert.be',
  telephone: '+32493967417',
  email: 'Info@TuinXpert.be',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Feynend 8',
    addressLocality: 'Mol',
    postalCode: '2400',
    addressRegion: 'Antwerpen',
    addressCountry: 'BE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '51.1896',
    longitude: '5.1181',
  },
  areaServed: [
    { '@type': 'City', name: 'Mol' },
    { '@type': 'City', name: 'Balen' },
    { '@type': 'City', name: 'Dessel' },
    { '@type': 'City', name: 'Geel' },
    { '@type': 'City', name: 'Retie' },
    { '@type': 'City', name: 'Meerhout' },
    { '@type': 'City', name: 'Turnhout' },
    { '@type': 'City', name: 'Lommel' },
  ],
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: '€€',
  image: 'https://www.tuinxpert.be/images/hero.jpg',
  sameAs: [] as string[],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HomeContent />
    </>
  )
}
