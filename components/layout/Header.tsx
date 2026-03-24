'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Realisaties', href: '/realisaties' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-white"
        style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="TuinXpert — Home"
            >
              <Image
                src="/images/logo/TuinXpert-Logo-Full.svg"
                alt="TuinXpert"
                width={200}
                height={70}
                className="object-contain group-hover:opacity-80 transition-all duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Hoofdnavigatie">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-body font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 group/nav ${
                      isActive
                        ? 'text-groen-neon'
                        : 'text-black hover:text-groen-neon'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-groen-neon rounded-full transition-all duration-300 ${
                      isActive ? 'w-4' : 'w-0 group-hover/nav:w-4'
                    }`} />
                  </Link>
                )
              })}
            </nav>

            {/* CTA Button (desktop) */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="font-body font-semibold text-sm bg-groen-neon text-white px-5 py-2.5 rounded-md border border-groen-neon transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(76,175,80,0.6)] hover:bg-groen-helder"
              >
                Offerte aanvragen
              </Link>
            </div>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              className="lg:hidden text-black hover:text-groen-neon transition-colors duration-200 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Sluit menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-70 z-30 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-donker z-40 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-groen border-opacity-10">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/images/logo/TuinXpert-Logo-Full.svg"
                    alt="TuinXpert"
                    width={180}
                    height={64}
                    className="object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-grijs hover:text-wit transition-colors duration-200"
                  aria-label="Sluit menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 py-6 px-6" aria-label="Mobiele navigatie">
                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.07 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block font-body font-medium text-base px-4 py-3 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'text-groen-neon bg-groen bg-opacity-10'
                              : 'text-grijs hover:text-wit hover:bg-groen hover:bg-opacity-10'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </nav>

              {/* CTA in drawer */}
              <div className="p-6 border-t border-groen border-opacity-10">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center font-body font-semibold text-sm bg-groen-neon text-white px-5 py-3 rounded-md hover:bg-groen-helder transition-all duration-300 hover:shadow-groen-glow"
                >
                  Offerte aanvragen
                </Link>
                <a
                  href="tel:0493967417"
                  className="block w-full text-center font-body font-medium text-sm text-grijs mt-3 hover:text-groen-neon transition-colors duration-200"
                >
                  0493 96 74 17
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
