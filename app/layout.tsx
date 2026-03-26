import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'
import ScrollToTop from '@/components/ui/ScrollToTop'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

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
  twitter: {
    card: 'summary_large_image',
    title: 'TuinXpert Mol | Tuinaanleg & Tuinonderhoud in de Kempen',
    description:
      'TuinXpert uit Mol — specialist in tuinaanleg, tuinonderhoud & bestrating in de Kempen. Van schets tot droomtuin.',
    images: ['https://www.tuinxpert.be/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon/TuinXpert-Logo-Secundair.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`scroll-smooth ${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="bg-zwart text-wit font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-groen focus:text-white focus:rounded-lg focus:outline-none"
        >
          Direct naar inhoud
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  )
}
