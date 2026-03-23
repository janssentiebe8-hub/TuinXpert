'use client'

import { motion } from 'framer-motion'

const GRASS_BLADES = Array.from({ length: 26 }, (_, i) => ({
  left: `${(i / 25) * 96 + 2}%`,
  height: 14 + (i * 9 + 5) % 20,
  width: 3 + (i % 3),
  color: i % 3 === 1 ? '#3D8B3D' : '#2D6A2D',
  anim: i % 2 === 0 ? 'swayA' : 'swayB',
  dur: `${2 + (i % 5) * 0.3}s`,
  delay: `${(i * 0.2) % 2.5}s`,
  opacity: 0.4 + (i % 4) * 0.08,
}))

export function WavingGrass() {
  return (
    <div
      aria-hidden="true"
      className="nature-anim"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 38,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {GRASS_BLADES.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: 0,
            left: b.left,
            width: b.width,
            height: b.height,
            backgroundColor: b.color,
            borderRadius: `${b.width / 2}px ${b.width / 2}px 0 0`,
            transformOrigin: 'bottom center',
            animation: `${b.anim} ${b.dur} ease-in-out ${b.delay} infinite`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  )
}

const PLANT_CLUSTERS = [
  { left: '4%',  delay: 0,    w: 26, h: 32 },
  { left: '14%', delay: 0.10, w: 34, h: 44 },
  { left: '26%', delay: 0.05, w: 28, h: 36 },
  { left: '38%', delay: 0.15, w: 32, h: 42 },
  { left: '50%', delay: 0.20, w: 26, h: 34 },
  { left: '62%', delay: 0.08, w: 36, h: 46 },
  { left: '73%', delay: 0.18, w: 30, h: 38 },
  { left: '85%', delay: 0.12, w: 34, h: 42 },
  { left: '93%', delay: 0.06, w: 24, h: 30 },
]

export function GrowingPlants() {
  return (
    <div
      aria-hidden="true"
      className="nature-anim growing-plants"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {PLANT_CLUSTERS.map((c, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            bottom: 0,
            left: c.left,
            transformOrigin: 'bottom center',
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: c.delay, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <svg
            width={c.w}
            height={c.h}
            viewBox="0 0 40 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20,50 Q17,33 18,8 Q23,33 20,50"  fill="#2D6A2D" opacity="0.85" />
            <path d="M20,50 Q9,36 5,12 Q17,34 20,50"   fill="#3D8B3D" opacity="0.75" />
            <path d="M20,50 Q31,36 35,12 Q23,34 20,50"  fill="#2D6A2D" opacity="0.75" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
