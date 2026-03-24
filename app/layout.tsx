import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'
import ScrollToTop from '@/components/ui/ScrollToTop'

export const metadata: Metadata = {
  title: {
    template: '%s | TuinXpert',
    default: 'TuinXpert Mol | Tuinaanleg & Tuinonderhoud in de Kempen',
  },
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
    'groenvoorziening Mol',
    'tuinrenovatie Mol',
    'vijver aanleggen Kempen',
    'afsluitingen tuin Mol',
  ],
  authors: [{ name: 'TuinXpert' }],
  creator: 'TuinXpert',
  metadataBase: new URL('https://www.tuinxpert.be'),
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.tuinxpert.be',
    siteName: 'TuinXpert',
    title: 'TuinXpert Mol | Tuinaanleg & Tuinonderhoud in de Kempen',
    description:
      'TuinXpert uit Mol — specialist in tuinaanleg, tuinonderhoud & bestrating in de Kempen. Van schets tot droomtuin.',
    images: [
      {
        url: 'https://www.tuinxpert.be/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'TuinXpert — Tuinaanleg en tuinonderhoud in Mol en de Kempen',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon/TuinXpert-Logo-Secundair.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-zwart text-wit font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  )
}
