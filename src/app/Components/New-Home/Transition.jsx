
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Transition() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const bg = useTransform(scrollYProgress, [0, 0.5, 1], ['#1a1207', '#0c0a09', '#0a0f08'])
  const wipe = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '100%'])

  const line1X = useTransform(scrollYProgress, [0.15, 0.45], [-120, 0])
  const line1Opacity = useTransform(scrollYProgress, [0.15, 0.4, 0.7, 0.85], [0, 1, 1, 0])
  const line2X = useTransform(scrollYProgress, [0.3, 0.6], [120, 0])
  const line2Opacity = useTransform(scrollYProgress, [0.3, 0.55, 0.8, 0.95], [0, 1, 1, 0])

  const orb1X = useTransform(scrollYProgress, [0, 1], ['20%', '60%'])
  const orb2X = useTransform(scrollYProgress, [0, 1], ['80%', '40%'])

  const emblemScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.6, 1, 1.3])
  const emblemRotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  const emblemOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.75, 0.95], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative h-[260vh] w-full">
      <motion.div
        style={{ backgroundColor: bg }}
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ left: orb1X }}
          className="absolute top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/25 blur-[100px]"
        />
        <motion.div
          style={{ left: orb2X }}
          className="absolute bottom-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-500/25 blur-[100px]"
        />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ width: wipe }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500/10 via-transparent to-lime-500/10"
          />
          <motion.div
            style={{ width: wipe }}
            className="absolute inset-y-0 left-0 bg-[linear-gradient(105deg,transparent_48%,rgba(245,158,11,0.5)_50%,rgba(132,204,22,0.5)_50.5%,transparent_52%)]"
          />
        </div>

        <motion.div
          style={{ scale: emblemScale, rotate: emblemRotate, opacity: emblemOpacity }}
          className="absolute z-10 grid h-40 w-40 place-items-center"
        >
          <span className="absolute inset-0 rounded-full border border-amber-400/40" />
          <span className="absolute inset-3 rounded-full border border-lime-400/40" />
          <span className="absolute inset-6 rounded-full border border-white/10" />
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-amber-300 to-lime-300" />
        </motion.div>

        <div className="relative z-20 flex flex-col items-center gap-2 px-6 text-center">
          <motion.div
            style={{ x: line1X, opacity: line1Opacity }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-amber-400/60 sm:w-16" />
            <span className="text-3xl font-black tracking-tight text-amber-200 sm:text-5xl">
              From tradition
            </span>
          </motion.div>

          <motion.p
            style={{ opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.75, 0.9], [0, 1, 1, 0]) }}
            className="text-sm uppercase tracking-[0.4em] text-stone-400"
          >
            to strength
          </motion.p>

          <motion.div
            style={{ x: line2X, opacity: line2Opacity }}
            className="flex items-center gap-4"
          >
            <span className="text-3xl font-black tracking-tight text-lime-200 sm:text-5xl">
              to performance
            </span>
            <span className="h-px w-10 bg-lime-400/60 sm:w-16" />
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-px w-16 bg-gradient-to-r from-amber-400/60 to-lime-400/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
        </div>
      </motion.div>
    </section>
  )
}