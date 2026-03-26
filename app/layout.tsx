import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'
import ScrollToTop from '@/components/ui/ScrollToTop'

const playfairDisplay = localFont({
  src: [
    { path: '../public/fonts/playfair/latin_ext_400_normal.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/playfair/latin_400_normal.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/playfair/latin_ext_400_italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/playfair/latin_400_italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/playfair/latin_ext_500_normal.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/playfair/latin_500_normal.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/playfair/latin_ext_600_normal.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/playfair/latin_600_normal.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/playfair/latin_ext_700_normal.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/playfair/latin_700_normal.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/playfair/latin_ext_700_italic.woff2', weight: '700', style: 'italic' },
    { path: '../public/fonts/playfair/latin_700_italic.woff2', weight: '700', style: 'italic' },
    { path: '../public/fonts/playfair/latin_ext_800_normal.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/playfair/latin_800_normal.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/playfair/latin_ext_900_normal.woff2', weight: '900', style: 'normal' },
    { path: '../public/fonts/playfair/latin_900_normal.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = localFont({
  src: [
    { path: '../public/fonts/dm-sans/latin_ext_300_normal.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_300_normal.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_ext_300_italic.woff2', weight: '300', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_300_italic.woff2', weight: '300', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_ext_400_normal.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_400_normal.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_ext_400_italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_400_italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_ext_500_normal.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_500_normal.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_ext_500_italic.woff2', weight: '500', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_500_italic.woff2', weight: '500', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_ext_600_normal.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_600_normal.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_ext_600_italic.woff2', weight: '600', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_600_italic.woff2', weight: '600', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_ext_700_normal.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_700_normal.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/dm-sans/latin_ext_700_italic.woff2', weight: '700', style: 'italic' },
    { path: '../public/fonts/dm-sans/latin_700_italic.woff2', weight: '700', style: 'italic' },
  ],
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
        url: 'https://www.tuinxpert.be/images/hero-poster-desktop.webp',
        width: 1280,
        height: 720,
        alt: 'TuinXpert — Tuinaanleg en tuinonderhoud in Mol en de Kempen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TuinXpert Mol | Tuinaanleg & Tuinonderhoud in de Kempen',
    description:
      'TuinXpert uit Mol — specialist in tuinaanleg, tuinonderhoud & bestrating in de Kempen. Van schets tot droomtuin.',
    images: ['https://www.tuinxpert.be/images/hero-poster-desktop.webp'],
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
