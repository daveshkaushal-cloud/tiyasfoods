'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function GheeShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.001 })

  const scene0 = useTransform(p, [0, 0.22, 0.34], [1, 1, 0])
  const scene1 = useTransform(p, [0.26, 0.42, 0.66, 0.78], [0, 1, 1, 0])
  const scene2 = useTransform(p, [0.72, 0.88, 1], [0, 1, 1])

  const scene0Scale = useTransform(p, [0, 1], [1.05, 1.18])
  const scene1Scale = useTransform(p, [0, 1], [1.08, 1.2])
  const scene2Scale = useTransform(p, [0, 1], [1.08, 1.18])

  const jarScale = useTransform(p, [0, 0.5, 1], [0.92, 1, 1.06])
  const jarY = useTransform(p, [0, 1], [18, -22])
  const jarRotate = useTransform(p, [0, 1], [-1.5, 1.5])

  const accentOpacity = useTransform(p, [0.18, 0.42, 0.85, 1], [0, 1, 1, 0.55])
  const accentScale = useTransform(p, [0.18, 0.5], [0.75, 1])
  const accentY = useTransform(p, [0.18, 0.55], [70, -10])

  const haloScale = useTransform(p, [0, 1], [0.6, 1.4])
  const haloOpacity = useTransform(p, [0.1, 0.4, 1], [0.2, 0.6, 0.3])

  const t0 = useTransform(p, [0, 0.12, 0.2], [1, 1, 0])
  const t0Y = useTransform(p, [0, 0.2], [0, -40])
  const t1 = useTransform(p, [0.28, 0.4, 0.6, 0.72], [0, 1, 1, 0])
  const t1Y = useTransform(p, [0.28, 0.72], [40, -40])
  const t2 = useTransform(p, [0.78, 0.9, 1], [0, 1, 1])
  const t2Y = useTransform(p, [0.78, 1], [40, 0])

  const labelOpacity = useTransform(p, [0.1, 0.25, 0.9, 1], [0, 1, 1, 0.4])
  const sceneClass = 'absolute inset-0 h-full w-full object-cover'

  return (
    <section id="ghee" ref={ref} className="relative h-[420vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0c0a09]">
        <motion.div style={{ opacity: scene0, scale: scene0Scale }} className="absolute inset-0">
          <img src="/assets/hero-section-3.jpeg" alt="Tiyas Foods A2 Bilona Ghee jars" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/72 via-[#0c0a09]/44 to-[#0c0a09]/92" />
        </motion.div>

        <motion.div style={{ opacity: scene1, scale: scene1Scale }} className="absolute inset-0">
          <img src="/assets/hero-section-1.jpeg" alt="Tiyas Foods ghee being poured" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/55 via-amber-950/25 to-[#0c0a09]/92" />
        </motion.div>

        <motion.div style={{ opacity: scene2, scale: scene2Scale }} className="absolute inset-0">
          <img src="/assets/home-family.webp" alt="Family enjoying food made with Tiyas Foods" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/68 via-[#0c0a09]/42 to-[#0c0a09]/95" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-amber-300/60 blur-[1px]"
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
              animate={{ y: [0, -60, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative flex h-[54vh] max-h-[560px] w-[min(560px,86vw)] items-center justify-center">
            <motion.div
              style={{ scale: haloScale, opacity: haloOpacity }}
              className="absolute h-[22rem] w-[22rem] rounded-full bg-amber-500/40 blur-[80px]"
            />

            <motion.img
              src="/assets/hero-section-3.jpeg"
              alt="Tiyas Foods A2 Bilona Ghee product"
              style={{ scale: jarScale, y: jarY, rotate: jarRotate }}
              className="relative z-20 h-[76%] w-[76%] rounded-[32px] border border-amber-200/10 object-cover shadow-2xl shadow-black/60"
            />

            <motion.img
              src="/assets/hero-section-1.jpeg"
              alt="Golden ghee pouring from a Tiyas Foods jar"
              style={{ opacity: accentOpacity, scale: accentScale, y: accentY }}
              className="absolute -bottom-4 -right-3 z-30 h-[34%] w-[48%] rounded-2xl border border-amber-200/15 object-cover shadow-2xl shadow-black/50 sm:-right-10"
            />
          </div>
        </div>

        <motion.div style={{ opacity: labelOpacity }} className="absolute left-6 top-1/2 z-40 -translate-y-1/2 sm:left-10">
          <div className="rounded-2xl border border-amber-400/20 bg-[#0c0a09]/60 p-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Signature</p>
            <p className="mt-1 text-2xl font-black text-amber-200">Tiyas A2 Ghee</p>
            <p className="mt-1 text-xs text-stone-400">Bilona · Glass Jar · 500ml</p>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-16 left-1/2 z-40 w-[92%] max-w-2xl -translate-x-1/2 text-center">
          <motion.h3 style={{ opacity: t0, y: t0Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-amber-100 sm:text-4xl">
            From carefully sourced A2 milk
          </motion.h3>
          <motion.h3 style={{ opacity: t1, y: t1Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-amber-100 sm:text-4xl">
            Slow-churned, golden &amp; pure
          </motion.h3>
          <motion.h3 style={{ opacity: t2, y: t2Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-amber-100 sm:text-4xl">
            The soul of every kitchen
          </motion.h3>
        </div>

        <div className="absolute right-6 top-28 z-40 sm:right-10">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">01 / Desi Ghee</p>
        </div>
      </div>
    </section>
  )
}
