'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function GheeShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.001 })

  // --- Background scenes crossfade ---
  const scene0 = useTransform(p, [0, 0.22, 0.34], [1, 1, 0])
  const scene1 = useTransform(p, [0.26, 0.42, 0.66, 0.78], [0, 1, 1, 0])
  const scene2 = useTransform(p, [0.72, 0.88, 1], [0, 1, 1])

  const scene0Scale = useTransform(p, [0, 1], [1.1, 1.25])
  const scene1Scale = useTransform(p, [0, 1], [1.15, 1.3])
  const scene2Scale = useTransform(p, [0, 1], [1.15, 1.3])

  // --- The jar (stays pinned, premium) ---
  const jarScale = useTransform(p, [0, 0.5, 1], [0.9, 1, 1.08])
  const jarY = useTransform(p, [0, 1], [20, -30])
  const jarRotate = useTransform(p, [0, 1], [-2, 2])

  // --- Ghee pouring OUT of the jar ---
  const splashOpacity = useTransform(p, [0.18, 0.42, 0.85, 1], [0, 1, 1, 0.6])
  const splashScale = useTransform(p, [0.18, 0.5], [0.4, 1.1])
  const splashY = useTransform(p, [0.18, 0.55], [100, -20])
  const splashRotate = useTransform(p, [0, 1], [0, 6])

  // --- Glow halo behind jar ---
  const haloScale = useTransform(p, [0, 1], [0.6, 1.4])
  const haloOpacity = useTransform(p, [0.1, 0.4, 1], [0.2, 0.6, 0.3])

  // --- Text panels ---
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
        {/* ---------- Scene backgrounds (crossfade) ---------- */}
        <motion.div style={{ opacity: scene0, scale: scene0Scale }} className="absolute inset-0">
          <img src="/scene/cow-pasture.jpg" alt="A2 cows grazing" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/70 via-[#0c0a09]/40 to-[#0c0a09]/90" />
        </motion.div>

        <motion.div style={{ opacity: scene1, scale: scene1Scale }} className="absolute inset-0">
          <img src="/scene/ghee-texture.jpg" alt="Golden ghee" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/60 via-amber-950/30 to-[#0c0a09]/90" />
        </motion.div>

        <motion.div style={{ opacity: scene2, scale: scene2Scale }} className="absolute inset-0">
          <img src="/scene/indian-kitchen.jpg" alt="Indian kitchen" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/70 via-[#0c0a09]/40 to-[#0c0a09]/95" />
        </motion.div>

        {/* ---------- Ambient gold particles ---------- */}
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

        {/* ---------- Product: real Tiyas Food ghee image (bg removed) + pouring ghee ---------- */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex h-[44vh] max-h-[420px] items-center justify-center">
            {/* glow halo */}
            <motion.div
              style={{ scale: haloScale, opacity: haloOpacity }}
              className="absolute h-[20rem] w-[20rem] rounded-full bg-amber-500/40 blur-[80px]"
            />
            {/* the real Tiyas Food product — transparent, floating seamlessly */}
            <motion.img
              src="/products/ghee-product-front.png"
              alt="Tiyas Food Desi Ghee"
              style={{ scale: jarScale, y: jarY, rotate: jarRotate }}
              className="relative z-20 h-full w-auto max-w-[300px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
            />
            {/* pouring ghee overlay — emerges in front of the product as you scroll */}
            <motion.img
              src="/products/ghee-splash.png"
              alt="Golden ghee pouring"
              style={{ opacity: splashOpacity, scale: splashScale, y: splashY, rotate: splashRotate }}
              className="absolute z-30 h-[55%] w-auto max-w-[240px] object-contain drop-shadow-[0_15px_30px_rgba(245,158,11,0.5)]"
            />
          </div>
        </div>

        {/* ---------- Floating product label ---------- */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute left-6 top-1/2 z-40 -translate-y-1/2 sm:left-10"
        >
          <div className="rounded-2xl border border-amber-400/20 bg-[#0c0a09]/60 p-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Signature</p>
            <p className="mt-1 text-2xl font-black text-amber-200">Tiyas A2 Ghee</p>
            <p className="mt-1 text-xs text-stone-400">Bilona · Glass Jar · 500ml</p>
          </div>
        </motion.div>

        {/* ---------- Scroll narrative text ---------- */}
        <div className="pointer-events-none absolute bottom-16 left-1/2 z-40 w-[92%] max-w-2xl -translate-x-1/2 text-center">
          <motion.h3 style={{ opacity: t0, y: t0Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-amber-100 sm:text-4xl">
            From grass-fed A2 cows
          </motion.h3>
          <motion.h3 style={{ opacity: t1, y: t1Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-amber-100 sm:text-4xl">
            Slow-churned, golden &amp; pure
          </motion.h3>
          <motion.h3 style={{ opacity: t2, y: t2Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-amber-100 sm:text-4xl">
            The soul of every kitchen
          </motion.h3>
        </div>

        {/* ---------- Section tag ---------- */}
        <div className="absolute right-6 top-28 z-40 sm:right-10">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">01 / Desi Ghee</p>
        </div>
      </div>
    </section>
  )
}