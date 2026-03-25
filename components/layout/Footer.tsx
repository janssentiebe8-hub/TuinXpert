import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Realisaties', href: '/realisaties' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacybeleid', href: '/privacy' },
  { label: 'Cookiebeleid', href: '/cookies' },
]

const services = [
  'Bestrating & Terrassen',
  'Tuinaanleg',
  'Professioneel tuinonderhoud',
  'Groenvoorziening & Beplanting',
  'Tuinrenovatie',
  'Afsluitingen & Tuinschermen',
]

export default function Footer() {
  return (
    <footer className="bg-donker border-t border-groen border-opacity-10">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center group mb-4 w-fit">
              <Image
                src="/images/logo/TuinXpert-Logo-Full.svg"
                alt="TuinXpert"
                width={260}
                height={92}
                className="object-contain group-hover:opacity-80 transition-all duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="font-body text-grijs text-sm leading-relaxed mb-6">
              Passie voor natuur, vakmanschap in elke tuin. Uw betrouwbare partner
              voor tuinaanleg en -onderhoud in de regio Mol.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="[PLACEHOLDER — Facebook URL]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TuinXpert op Facebook"
                className="w-10 h-10 rounded-full bg-zwart border border-groen border-opacity-20 flex items-center justify-center text-grijs hover:text-groen-neon hover:border-groen-neon hover:shadow-groen-glow transition-all duration-300 hover:scale-105"
              >
                <Facebook size={18} />
              </a>
              <a
                href="[PLACEHOLDER — Instagram URL]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TuinXpert op Instagram"
                className="w-10 h-10 rounded-full bg-zwart border border-groen border-opacity-20 flex items-center justify-center text-grijs hover:text-groen-neon hover:border-groen-neon hover:shadow-groen-glow transition-all duration-300 hover:scale-105"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-wit text-base mb-5">
              Snelkoppelingen
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-grijs text-sm hover:text-groen-neon transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-groen text-xs group-hover:text-groen-neon transition-colors duration-200">
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-bold text-wit text-base mb-5 mt-8">
              Diensten
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/diensten"
                    className="font-body text-grijs text-sm hover:text-groen-neon transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-groen text-xs group-hover:text-groen-neon transition-colors duration-200">
                      →
                    </span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading font-bold text-wit text-base mb-5">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-groen-neon mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-grijs text-sm">Feynend 8</p>
                  <p className="font-body text-grijs text-sm">2400 Mol, België</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-groen-neon flex-shrink-0" />
                <a
                  href="tel:0493967417"
                  className="font-body text-grijs text-sm hover:text-groen-neon transition-colors duration-200"
                >
                  0493 96 74 17
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-groen-neon flex-shrink-0" />
                <a
                  href="mailto:Info@TuinXpert.be"
                  className="font-body text-grijs text-sm hover:text-groen-neon transition-colors duration-200 break-all"
                >
                  Info@TuinXpert.be
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-groen-neon mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-grijs text-sm">Ma–Zo: 06:00–22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal / bottom bar */}
      <div className="border-t border-groen border-opacity-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legal info */}
          <div className="bg-zwart rounded-xl px-6 py-4 mb-6 text-xs font-body text-grijs space-y-1">
            <p>
              <strong className="text-wit">Officiële bedrijfsnaam:</strong>{' '}
              Xandro van den broek |{' '}
              <strong className="text-wit">Rechtsvorm:</strong> Eenmanszaak
            </p>
            <p>
              <strong className="text-wit">Maatschappelijke zetel:</strong> Feynend 8, 2400 Mol,
              België |{' '}
              <strong className="text-wit">KBO-nummer:</strong> 1007.856.130 |{' '}
              <strong className="text-wit">BTW-nummer:</strong> BE1007856130
            </p>
            <p>
              <strong className="text-wit">E-mail voor klachten:</strong>{' '}
              <a
                href="mailto:Info@TuinXpert.be"
                className="text-groen-neon hover:underline"
              >
                Info@TuinXpert.be
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-body text-grijs text-xs text-center sm:text-left">
              © 2025 TuinXpert. Alle rechten voorbehouden.
            </p>

            {/* Legal links */}
            <div className="flex flex-wrap gap-4 justify-center">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-grijs text-xs hover:text-groen-neon transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
