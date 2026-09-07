'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function ProteinShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.001 })

  const scene0 = useTransform(p, [0, 0.22, 0.34], [1, 1, 0])
  const scene1 = useTransform(p, [0.26, 0.42, 0.66, 0.78], [0, 1, 1, 0])
  const scene2 = useTransform(p, [0.72, 0.88, 1], [0, 1, 1])

  const scene0Scale = useTransform(p, [0, 1], [1.03, 1.1])
  const scene1Scale = useTransform(p, [0, 1], [1.08, 1.16])
  const scene2Scale = useTransform(p, [0, 1], [1.12, 1.2])

  const tubScale = useTransform(p, [0, 0.5, 1], [0.9, 1.02, 1.08])
  const tubY = useTransform(p, [0, 1], [22, -28])
  const tubRotate = useTransform(p, [0, 1], [1.5, -1.5])

  const haloScale = useTransform(p, [0, 1], [0.6, 1.35])
  const haloOpacity = useTransform(p, [0.1, 0.4, 1], [0.2, 0.5, 0.3])

  const t0 = useTransform(p, [0, 0.12, 0.2], [1, 1, 0])
  const t0Y = useTransform(p, [0, 0.2], [0, -40])
  const t1 = useTransform(p, [0.28, 0.4, 0.6, 0.72], [0, 1, 1, 0])
  const t1Y = useTransform(p, [0.28, 0.72], [40, -40])
  const t2 = useTransform(p, [0.78, 0.9, 1], [0, 1, 1])
  const t2Y = useTransform(p, [0.78, 1], [40, 0])

  const labelOpacity = useTransform(p, [0.1, 0.25, 0.9, 1], [0, 1, 1, 0.4])

  return (
    <section id="protein" ref={ref} className="relative h-[420vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0c0a]">
        {[scene0, scene1, scene2].map((sceneOpacity, index) => (
          <motion.div
            key={index}
            style={{ opacity: sceneOpacity, scale: [scene0Scale, scene1Scale, scene2Scale][index] }}
            className="absolute inset-0"
          >
            <img
              src="/assets/home-whey-brand.webp"
              alt="Tiyas Foods whey protein tub in a performance setting"
              className={`h-full w-full object-cover ${index === 0 ? 'object-center' : index === 1 ? 'object-[55%_center]' : 'object-[60%_center]'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0a]/64 via-[#0a0c0a]/42 to-[#0a0c0a]/92" />
          </motion.div>
        ))}

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

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative flex h-[66vh] max-h-[610px] w-[min(520px,82vw)] items-center justify-center">
            <motion.div
              style={{ scale: haloScale, opacity: haloOpacity }}
              className="absolute h-[28rem] w-[28rem] rounded-full bg-lime-500/35 blur-[90px]"
            />
            <motion.img
              src="/assets/home-whey-brand.webp"
              alt="Tiyas Foods whey protein"
              style={{ scale: tubScale, y: tubY, rotate: tubRotate }}
              className="relative z-30 h-[82%] w-[82%] rounded-[34px] border border-lime-300/10 object-cover shadow-2xl shadow-black/60"
            />
          </div>
        </div>

        <motion.div style={{ opacity: labelOpacity }} className="absolute right-6 top-1/2 z-40 -translate-y-1/2 sm:right-10">
          <div className="rounded-2xl border border-lime-400/20 bg-[#0a0c0a]/65 p-4 text-right backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.25em] text-lime-300/80">Performance</p>
            <p className="mt-1 text-2xl font-black text-lime-200">Tiyas Whey Protein</p>
            <p className="mt-1 text-xs text-stone-400">1kg Tub · Daily Nutrition</p>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-16 left-1/2 z-40 w-[92%] max-w-2xl -translate-x-1/2 text-center">
          <motion.h3 style={{ opacity: t0, y: t0Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-lime-100 sm:text-4xl">
            Built for everyday strength
          </motion.h3>
          <motion.h3 style={{ opacity: t1, y: t1Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-lime-100 sm:text-4xl">
            Clean nutrition, no clutter
          </motion.h3>
          <motion.h3 style={{ opacity: t2, y: t2Y }} className="absolute inset-x-0 bottom-0 text-3xl font-bold text-lime-100 sm:text-4xl">
            Made to fit your routine
          </motion.h3>
        </div>

        <div className="absolute left-6 top-28 z-40 sm:left-10">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">02 / Protein</p>
        </div>
      </div>
    </section>
  )
}
