import type { Metadata } from 'next'
import ContactContent from '@/components/sections/ContactContent'

export const metadata: Metadata = {
  title: 'Contact | TuinXpert — Gratis Offerte Aanvragen',
  description:
    'Contacteer TuinXpert voor een vrijblijvende offerte. Tuinaanleg en onderhoud in Mol en de Kempen. Bel ons op 0493 96 74 17 of stuur een bericht.',
  alternates: {
    canonical: 'https://www.tuinxpert.be/contact',
  },
  openGraph: {
    title: 'Contact | TuinXpert — Gratis Offerte Aanvragen',
    description:
      'Contacteer TuinXpert voor een vrijblijvende offerte. Tuinaanleg en onderhoud in Mol en de Kempen.',
    url: 'https://www.tuinxpert.be/contact',
    images: [{ url: 'https://www.tuinxpert.be/images/hero.jpg', width: 1200, height: 630, alt: 'TuinXpert — Tuinaanleg en tuinonderhoud in Mol en de Kempen' }],
  },
  twitter: {
    title: 'Contact | TuinXpert — Gratis Offerte Aanvragen',
    description: 'Contacteer TuinXpert voor een vrijblijvende offerte. Tuinaanleg en onderhoud in Mol en de Kempen. Bel ons op 0493 96 74 17.',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
