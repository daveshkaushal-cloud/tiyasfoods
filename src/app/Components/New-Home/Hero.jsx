'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section id="top" ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y: yBg, scale }} className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1600&q=80" alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#0c0a09]/50 to-[#0c0a09]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0c0a09_85%)]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-amber-500/20 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[12%] bottom-[15%] h-80 w-80 rounded-full bg-lime-500/10 blur-[120px]"
      />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-amber-200"
        >
          Tiyas Food · Pure by Tradition
        </motion.span> */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="block bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">Heritage Ghee.</span>
          <span className="block bg-gradient-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent">Honest Protein.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-8 max-w-2xl text-lg text-stone-300 sm:text-xl"
        >
          Rooted in India's timeless dairy traditions, Tiyas Foods creates authentic A2 Bilona Desi Ghee with uncompromising care and purity. Made from ethically sourced Gir cow milk and prepared using the age-old Bilona process, every batch is slow-crafted to preserve its natural richness, aroma, and nutrition. We bring you the taste of tradition, crafted for modern, mindful living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#ghee"
            className="group rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 text-sm font-bold text-[#0c0a09] shadow-xl shadow-amber-500/30 transition-all hover:scale-105 hover:shadow-amber-500/50"
          >
            Discover Our Ghee
          </a>
          <a
            href="#protein"
            className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-stone-200 transition-all hover:scale-105 hover:bg-white/5"
          >
            Explore Protein
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-stone-400"
        >
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Hand-Churned Bilona</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-lime-400" /> Zero Fillers</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-stone-300" /> Lab-Tested Every Batch</span>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 p-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8 text-amber-300"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </motion.svg>
        </div>
      </motion.div>

    </section>
  )
}