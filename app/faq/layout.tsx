import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen (FAQ)',
  description:
    'Antwoorden op veelgestelde vragen over TuinXpert: tuinaanleg Mol, tuinonderhoud Kempen, tarieven, garantie en offerte aanvragen. Actief in heel de Kempen.',
  keywords: [
    'tuinaanleg Mol',
    'tuinaanleg Kempen',
    'tuinier Mol',
    'tuinonderhoud Kempen',
    'tuinrenovatie Mol',
    'bestrating Kempen',
    'TuinXpert FAQ',
    'tuinaanleg offerte Mol',
  ],
  alternates: {
    canonical: 'https://www.tuinxpert.be/faq',
  },
  openGraph: {
    title: 'Veelgestelde Vragen | TuinXpert',
    description:
      'Alles wat u wil weten over tuinaanleg, onderhoud en tarieven in Mol en de Kempen. TuinXpert — Van schets tot droomtuin.',
    url: 'https://www.tuinxpert.be/faq',
    images: [{ url: 'https://www.tuinxpert.be/images/hero.jpg', width: 1200, height: 630, alt: 'TuinXpert — Tuinaanleg en tuinonderhoud in Mol en de Kempen' }],
  },
  twitter: {
    title: 'Veelgestelde Vragen | TuinXpert Mol',
    description: 'Alles wat u wil weten over tuinaanleg, onderhoud en tarieven in Mol en de Kempen. TuinXpert — Van schets tot droomtuin.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke diensten biedt TuinXpert aan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TuinXpert biedt een volledig pakket aan tuindiensten: tuinaanleg & tuinontwerp op maat, periodiek tuinonderhoud, tuinrenovatie van bestaande tuinen, en professionele bestrating van terrassen, opritten en tuinpaden.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke regio is TuinXpert actief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij zijn voornamelijk actief in de Kempen, met Mol als thuisbasis. Wij werken in de ruime omgeving van Mol, Geel, Balen, Herentals, Westerlo, Laakdal en andere gemeenten in de Antwerpse Kempen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vraag ik een vrijblijvende offerte aan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een offerte aanvragen gaat snel en eenvoudig. U kunt het contactformulier op onze website invullen, of ons rechtstreeks bellen op 0493 96 74 17. Na uw aanvraag plannen wij een gratis kennismakingsgesprek bij u thuis in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt een tuinproject gemiddeld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De doorlooptijd hangt sterk af van de omvang en complexiteit van het project. Een eenvoudige heraanleg of terrasaanleg duurt doorgaans 2 tot 5 werkdagen. Een volledige tuinaanleg kan 1 tot 4 weken in beslag nemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Geven jullie garantie op het uitgevoerde werk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, TuinXpert staat volledig achter de kwaliteit van zijn werk. Op bestrating en constructiewerken bieden wij 2 jaar garantie. Op de gebruikte planten en bomen geven wij 1 groeiseizoen garantie, mits correcte verzorging door de klant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de tarieven van TuinXpert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze tarieven worden steeds op maat berekend. Wij werken transparant: u ontvangt altijd een gedetailleerde offerte vóór de start van de werken, zonder verborgen kosten. Voor tuinonderhoud werken wij met vaste abonnementsformules.',
      },
    },
  ],
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
