'use client'

import { motion } from 'framer-motion'
import { WavingGrass, GrowingPlants } from '@/components/ui/NatureAnimations'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'

const contactItems = [
  { icon: <MapPin size={20} />, label: 'Adres', value: 'Feynend 8, 2400 Mol' },
  { icon: <Phone size={20} />, label: 'GSM', value: '0493 96 74 17', href: 'tel:0493967417' },
  { icon: <Mail size={20} />, label: 'E-mail', value: 'info@tuinxpert.be', href: 'mailto:info@tuinxpert.be' },
  { icon: <Clock size={20} />, label: 'Openingsuren', value: 'Ma–Zo: 06:00–22:00' },
]

export default function ContactContent() {
  return (
    <section className="bg-zwart scroll-mt-20 relative overflow-hidden min-h-screen pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-wit mb-6">
                Onze gegevens
              </h3>
              <div className="space-y-5">
                {contactItems.map((item, i) => (
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

            {/* Map */}
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="font-heading text-2xl font-bold text-wit mb-6">
              Stuur ons een bericht
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
      <WavingGrass />
      <GrowingPlants />
    </section>
  )
}
