
'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function ProteinShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.001 })

  const scene0 = useTransform(p, [0, 0.22, 0.34], [1, 1, 0])
  const scene1 = useTransform(p, [0.26, 0.42, 0.66, 0.78], [0, 1, 1, 0])
  const scene2 = useTransform(p, [0.72, 0.88, 1], [0, 1, 1])

  const scene0Scale = useTransform(p, [0, 1], [1.1, 1.25])
  const scene1Scale = useTransform(p, [0, 1], [1.15, 1.3])
  const scene2Scale = useTransform(p, [0, 1], [1.15, 1.3])

  const tubScale = useTransform(p, [0, 0.5, 1], [0.85, 1.05, 1.15])
  const tubY = useTransform(p, [0, 1], [30, -50])
  const tubRotate = useTransform(p, [0, 1], [3, -3])

  const burstOpacity = useTransform(p, [0.18, 0.42, 0.85, 1], [0, 1, 1, 0.6])
  const burstScale = useTransform(p, [0.18, 0.5], [0.4, 1.3])
  const burstY = useTransform(p, [0.18, 0.55], [120, -40])
  const burstRotate = useTransform(p, [0, 1], [0, -8])

  const haloScale = useTransform(p, [0, 1], [0.6, 1.4])
  const haloOpacity = useTransform(p, [0.1, 0.4, 1], [0.2, 0.55, 0.3])

  const t0 = useTransform(p, [0, 0.12, 0.2], [1, 1, 0])
  const t0Y = useTransform(p, [0, 0.2], [0, -40])
  const t1 = useTransform(p, [0.28, 0.4, 0.6, 0.72], [0, 1, 1, 0])
  const t1Y = useTransform(p, [0.28, 0.72], [40, -40])
  const t2 = useTransform(p, [0.78, 0.9, 1], [0, 1, 1])
  const t2Y = useTransform(p, [0.78, 1], [40, 0])

  const labelOpacity = useTransform(p, [0.1, 0.25, 0.9, 1], [0, 1, 1, 0.4])

  const sceneClass = 'absolute inset-0 h-full w-full object-cover'

  return (
    <section id="protein" ref={ref} className="relative h-[420vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0c0a]">
        <motion.div style={{ opacity: scene0, scale: scene0Scale }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80" alt="Athlete training" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0a]/70 via-[#0a0c0a]/40 to-[#0a0c0a]/90" />
        </motion.div>

        <motion.div style={{ opacity: scene1, scale: scene1Scale }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80" alt="Protein shake" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0a]/60 via-lime-950/20 to-[#0a0c0a]/90" />
        </motion.div>

        <motion.div style={{ opacity: scene2, scale: scene2Scale }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80" alt="Craft" className={sceneClass} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0a]/70 via-[#0a0c0a]/40 to-[#0a0c0a]/95" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-lime-300/50 blur-[1px]"
              style={{
                left: `${(i * 31) % 100}%`,
                top: `${(i * 47) % 100}%`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
              }}
              animate={{ y: [0, -70, 0], opacity: [0, 0.7, 0] }}
              transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex h-[70vh] max-h-[640px] items-center justify-center">
            <motion.div
              style={{ scale: haloScale, opacity: haloOpacity }}
              className="absolute h-[28rem] w-[28rem] rounded-full bg-lime-500/40 blur-[90px]"
            />
            <motion.img
              src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80"
              alt="Protein powder bursting"
              style={{ opacity: burstOpacity, scale: burstScale, y: burstY, rotate: burstRotate }}
              className="absolute z-20 h-[80%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(132,204,22,0.35)]"
            />
            <motion.img
              src="https://images.unsplash.com/photo-1574170601006-6e87cc13f257?auto=format&fit=crop&w=1200&q=80"
              alt="Tiyas Food Whey Protein"
              style={{ scale: tubScale, y: tubY, rotate: tubRotate }}
              className="relative z-30 h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute right-6 top-1/2 z-40 -translate-y-1/2 sm:right-10"
        >
          <div className="rounded-2xl border border-lime-400/20 bg-[#0a0c0a]/60 p-4 text-right backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.25em] text-lime-300/80">Performance</p>
            <p className="mt-1 text-2xl font-black text-lime-200">Tiyas Whey Isolate</p>
            <p className="mt-1 text-xs text-stone-400">27g Protein · 1kg Tub</p>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-16 left-1/2 z-40 w-[92%] max-w-2xl -translate-x-1/2 text-center">
          <motion.h3 style={{ opacity: t0, y: t0Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-lime-100 sm:text-4xl">
            Built for the grind
          </motion.h3>
          <motion.h3 style={{ opacity: t1, y: t1Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-lime-100 sm:text-4xl">
            27g of clean power
          </motion.h3>
          <motion.h3 style={{ opacity: t2, y: t2Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-lime-100 sm:text-4xl">
            No fillers. Ever.
          </motion.h3>
        </div>

        <div className="absolute left-6 top-28 z-40 sm:left-10">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">02 / Protein</p>
        </div>
      </div>
    </section>
  )
}