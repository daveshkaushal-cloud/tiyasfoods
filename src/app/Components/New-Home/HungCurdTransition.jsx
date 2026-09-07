'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HungCurdTransition() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const bg = useTransform(scrollYProgress, [0, 0.5, 1], ['#080a08', '#3d3422', '#f5efe0'])

  const textOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.7, 0.9], [0, 1, 1, 0])
  const textZ = useTransform(scrollYProgress, [0.15, 0.5, 0.9], [-400, 0, 300])
  const textRotateX = useTransform(scrollYProgress, [0.15, 0.5, 0.9], [50, 0, -20])
  const textBlur = useTransform(scrollYProgress, [0.15, 0.35, 0.6, 0.9], [12, 0, 0, 8])
  const filter = useTransform(textBlur, (b) => `blur(${b}px)`)

  const words = ['Crafting', 'Pure', 'Hung', 'Curd']

  const orb1X = useTransform(scrollYProgress, [0, 1], ['30%', '60%'])
  const orb2X = useTransform(scrollYProgress, [0, 1], ['70%', '40%'])

  const wipe = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%'])

  return (
    <section ref={ref} className="relative h-[260vh] w-full">
      <motion.div
        style={{ backgroundColor: bg }}
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ left: orb1X }}
          className="absolute top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/30 blur-[100px]"
        />
        <motion.div
          style={{ left: orb2X }}
          className="absolute bottom-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-600/20 blur-[100px]"
        />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ width: wipe }}
            className="absolute inset-y-0 left-0 bg-[linear-gradient(105deg,transparent_48%,rgba(245,239,224,0.3)_50%,rgba(202,138,4,0.3)_50.5%,transparent_52%)]"
          />
        </div>

        <motion.div
          style={{ opacity: textOpacity, transformStyle: 'preserve-3d', perspective: '1000px' }}
          className="relative z-20 px-6 text-center"
        >
          <motion.h2
            style={{
              z: textZ,
              rotateX: textRotateX,
              filter,
              transformStyle: 'preserve-3d',
            }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-5xl font-black tracking-tight sm:text-7xl md:text-8xl"
          >
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60, rotateX: 80 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block bg-gradient-to-b from-amber-50 via-amber-100 to-amber-400 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 2px 0 rgba(202,138,4,0.2), 0 4px 8px rgba(202,138,4,0.3), 0 12px 40px rgba(202,138,4,0.2)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.85], [0, 1, 1, 0]) }}
            className="mt-6 text-sm uppercase tracking-[0.4em] text-amber-700/80"
          >
            The Fourth Craft
          </motion.p>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
          <span className="h-px w-16 bg-gradient-to-r from-lime-500/60 to-amber-500/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        </div>
      </motion.div>
    </section>
  )
}