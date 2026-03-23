import type { Metadata } from 'next'
import { WavingGrass, GrowingPlants } from '@/components/ui/NatureAnimations'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | TuinXpert — Gratis Offerte Aanvragen',
  description:
    'Contacteer TuinXpert voor een vrijblijvende offerte. Tuinaanleg en onderhoud in Mol en de Kempen. Bel ons op 0474 55 22 44 of stuur een bericht.',
  alternates: {
    canonical: 'https://www.tuinxpert.be/contact',
  },
  openGraph: {
    title: 'Contact | TuinXpert — Gratis Offerte Aanvragen',
    description:
      'Contacteer TuinXpert voor een vrijblijvende offerte. Tuinaanleg en onderhoud in Mol en de Kempen.',
    url: 'https://www.tuinxpert.be/contact',
  },
}

export default function ContactPage() {
  return (
    <section className="section-padding bg-zwart scroll-mt-20 relative overflow-hidden min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-groen-neon font-body font-semibold text-sm tracking-widest uppercase">
            Neem contact op
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-wit mt-3 mb-4">
            Contacteer TuinXpert — gratis offerte aanvragen
          </h2>
          <p className="text-grijs font-body text-lg max-w-2xl mx-auto">
            Heeft u een vraag of wenst u een vrijblijvende offerte voor tuinaanleg of
            tuinonderhoud in Mol en de Kempen? Wij staan voor u klaar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-wit mb-6">
                Onze gegevens
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: <MapPin size={20} />,
                    label: 'Adres',
                    value: 'Teststraat 1, 2400 Mol',
                  },
                  {
                    icon: <Phone size={20} />,
                    label: 'GSM',
                    value: '0474 55 22 44',
                    href: 'tel:0474552244',
                  },
                  {
                    icon: <Mail size={20} />,
                    label: 'E-mail',
                    value: 'XandroTuin111@hotmail.com',
                    href: 'mailto:XandroTuin111@hotmail.com',
                  },
                  {
                    icon: <Clock size={20} />,
                    label: 'Openingsuren',
                    value: 'Ma–Vr: 08:00–17:00',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="text-groen-neon mt-0.5 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-grijs font-body text-xs uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-wit font-body font-medium hover:text-groen-neon transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-wit font-body font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <h3 className="font-heading text-xl font-bold text-wit mb-4">
                Locatie
              </h3>
              <div className="rounded-2xl overflow-hidden border border-groen border-opacity-20 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://maps.google.com/maps?q=Feynend%208&t=m&z=10&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie TuinXpert"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-wit mb-6">
              Stuur ons een bericht
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
      <WavingGrass />
      <GrowingPlants />
    </section>
  )
}
