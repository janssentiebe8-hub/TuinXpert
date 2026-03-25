'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll naar boven"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: '#2C632F',
            boxShadow: '0 0 16px rgba(76,175,80,0.45)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3D8B3D'
            e.currentTarget.style.boxShadow = '0 0 28px rgba(76,175,80,0.7)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2C632F'
            e.currentTarget.style.boxShadow = '0 0 16px rgba(76,175,80,0.45)'
          }}
        >
          <ChevronUp size={22} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
