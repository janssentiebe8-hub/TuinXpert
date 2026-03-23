'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'xandros_tuinen_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        level: 'necessary',
        timestamp: new Date().toISOString(),
      })
    )
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
        >
          <div className="max-w-4xl mx-auto bg-donker border border-groen border-opacity-30 rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="text-groen-neon flex-shrink-0 mt-0.5">
                <Cookie size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h2
                  id="cookie-title"
                  className="font-heading font-bold text-wit text-lg mb-2"
                >
                  Wij gebruiken cookies
                </h2>
                <p
                  id="cookie-desc"
                  className="font-body text-grijs text-sm leading-relaxed"
                >
                  Deze website gebruikt uitsluitend strikt noodzakelijke cookies voor de
                  basiswerking van de site. Wij plaatsen geen tracking- of
                  marketingcookies. Lees meer in ons{' '}
                  <Link
                    href="/cookies"
                    className="text-groen-neon hover:underline"
                    onClick={saveConsent}
                  >
                    cookiebeleid
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <button
                    onClick={saveConsent}
                    className="font-body font-semibold text-sm bg-groen-neon text-white px-5 py-2.5 rounded-md border border-groen-neon hover:bg-groen-helder transition-all duration-300 hover:scale-105 hover:shadow-groen-glow"
                  >
                    Begrepen
                  </button>
                  <Link
                    href="/cookies"
                    onClick={saveConsent}
                    className="font-body font-medium text-sm text-groen-neon px-5 py-2.5 hover:underline transition-colors duration-200"
                  >
                    Meer info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
