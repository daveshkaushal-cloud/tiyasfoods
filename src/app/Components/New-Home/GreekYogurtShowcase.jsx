'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { Dumbbell, Droplets, Sparkles, ShieldCheck, Leaf, HeartPulse, Sun, Zap } from 'lucide-react'

const products = [
  {
    name: 'Original Plain',
    flavor: 'Classic',
    tagline: 'The purest form of thick, creamy goodness.',
    img: '/assets/home-yogurt-product.webp',
    accent: 'text-lime-300',
    halo: 'bg-lime-500/40',
    benefits: [
      { icon: Dumbbell, title: 'High Protein', text: 'A satisfying dairy option designed to support an everyday balanced routine.' },
      { icon: Droplets, title: 'Thick & Creamy Texture', text: 'Strained for a rich, spoonable texture without making the experience feel heavy.' },
      { icon: ShieldCheck, title: 'Simple Ingredients', text: 'A cleaner product story focused on familiar dairy goodness.' },
      { icon: Leaf, title: 'Cultured Dairy', text: 'Made around a traditional cultured-dairy process and everyday freshness.' },
    ],
  },
  {
    name: 'Wild Blueberry',
    flavor: 'Berry',
    tagline: 'A fresh fruit-led take on thick Greek-style yogurt.',
    img: '/assets/home-yogurt-product.webp',
    accent: 'text-indigo-300',
    halo: 'bg-indigo-500/40',
    benefits: [
      { icon: Sparkles, title: 'Fruit-Led Flavour', text: 'A brighter flavour profile built around a creamy yogurt base.' },
      { icon: Dumbbell, title: 'Everyday Protein', text: 'A convenient snack option for breakfast, workdays and post-workout routines.' },
      { icon: HeartPulse, title: 'Balanced Snacking', text: 'Designed to feel satisfying without losing the freshness of cultured dairy.' },
      { icon: Leaf, title: 'Cultured Dairy', text: 'A smooth, spoonable dairy format made for everyday enjoyment.' },
    ],
  },
  {
    name: 'Strawberry',
    flavor: 'Fresh Fruit',
    tagline: 'Creamy yogurt with a familiar strawberry-led personality.',
    img: '/assets/home-yogurt-product.webp',
    accent: 'text-rose-300',
    halo: 'bg-rose-500/40',
    benefits: [
      { icon: Sun, title: 'Bright Flavour', text: 'A colourful, easy-to-love flavour direction for everyday snacking.' },
      { icon: Dumbbell, title: 'Routine Friendly', text: 'Works easily as breakfast, a snack or part of a fuller meal.' },
      { icon: Droplets, title: 'Creamy Texture', text: 'A thick, spoonable feel that keeps the product indulgent yet fresh.' },
      { icon: Leaf, title: 'Fresh Dairy Feel', text: 'Keeps the visual and product story rooted in cultured dairy goodness.' },
    ],
  },
  {
    name: 'Mango Honey',
    flavor: 'Tropical',
    tagline: 'A warmer mango-led yogurt flavour for a bright finish.',
    img: '/assets/home-yogurt-product.webp',
    accent: 'text-amber-300',
    halo: 'bg-amber-500/40',
    benefits: [
      { icon: Zap, title: 'Tropical Energy', text: 'A brighter flavour direction that fits breakfast and daytime snacking.' },
      { icon: Dumbbell, title: 'Daily Nutrition', text: 'Designed as an easy dairy option to slot into a busy routine.' },
      { icon: Sparkles, title: 'Mango-Led Taste', text: 'A familiar Indian flavour profile paired with a creamy yogurt base.' },
      { icon: Leaf, title: 'Cultured Dairy', text: 'A fresh, spoonable format that keeps the Tiyas dairy identity consistent.' },
    ],
  },
]

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

function Product3D({ product, index, total, progress }) {
  const center = index / (total - 1)
  const span = 1 / (total - 1)
  const halfSpan = span / 2

  const opacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return clamp(1 - dist / halfSpan, 0, 1)
  })
  const scale = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    const t = clamp(1 - dist / halfSpan, 0, 1)
    return 0.78 + t * 0.22
  })
  const y = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    const t = clamp(1 - dist / halfSpan, 0, 1)
    return 48 - t * 48
  })
  const rotateY = useTransform(progress, (v) => {
    const diff = v - center
    return clamp(diff / halfSpan, -1, 1) * 40
  })
  const haloOpacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return clamp(1 - dist / halfSpan, 0, 1) * 0.6
  })
  const haloScale = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    const t = clamp(1 - dist / halfSpan, 0, 1)
    return 0.5 + t * 0.7
  })

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1200px' }}>
      <motion.div
        style={{ opacity, rotateY, scale, y, transformStyle: 'preserve-3d' }}
        className="relative flex h-[62vh] max-h-[560px] w-[min(470px,82vw)] items-center justify-center"
      >
        <motion.div style={{ opacity: haloOpacity, scale: haloScale }} className={`absolute h-[26rem] w-[26rem] rounded-full ${product.halo} blur-[90px]`} />
        <motion.img
          src={product.img}
          alt={`Tiyas Foods Greek Yogurt — ${product.name}`}
          className="relative z-10 h-[76%] w-[76%] rounded-[32px] border border-white/10 object-cover shadow-2xl shadow-black/50"
          style={{ transform: 'translateZ(40px)' }}
        />
        <div className="absolute bottom-[12%] h-20 w-48 rounded-[50%] bg-black/50 blur-xl" style={{ transform: 'translateZ(-20px)' }} />
      </motion.div>
    </div>
  )
}

function BenefitPanel({ product, index, total, progress }) {
  const center = index / (total - 1)
  const halfSpan = 1 / (total - 1) / 2

  const opacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return clamp(1 - dist / halfSpan, 0, 1)
  })
  const x = useTransform(progress, (v) => {
    const diff = v - center
    return clamp(diff / halfSpan, -1, 1) * 40
  })

  return (
    <motion.div style={{ opacity, x }} className="absolute inset-0 flex flex-col justify-center">
      <span className={`mb-3 text-xs uppercase tracking-[0.3em] ${product.accent}`}>{product.flavor}</span>
      <h3 className="text-3xl font-black tracking-tight text-stone-100 sm:text-4xl">{product.name}</h3>
      <p className="mt-2 text-sm text-stone-400">{product.tagline}</p>

      <div className="mt-6 space-y-4">
        {product.benefits.map((b) => (
          <div key={b.title} className="flex items-start gap-3">
            <span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-lime-400/20 bg-lime-400/10 ${product.accent}`}>
              <b.icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <div>
              <p className="text-sm font-bold text-stone-100">{b.title}</p>
              <p className="text-xs leading-relaxed text-stone-400">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function MobileProductName({ product, index, total, progress }) {
  const center = index / (total - 1)
  const halfSpan = 1 / (total - 1) / 2
  const opacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return clamp(1 - dist / halfSpan, 0, 1)
  })

  return (
    <motion.div style={{ opacity }} className="absolute inset-x-0 bottom-0 text-center">
      <p className={`text-xs uppercase tracking-[0.3em] ${product.accent}`}>{product.flavor}</p>
      <p className="mt-1 text-xl font-black text-stone-100">{product.name}</p>
    </motion.div>
  )
}

export default function GreekYogurtShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })

  const [active, setActive] = useState(0)
  useMotionValueEvent(p, 'change', (v) => {
    setActive(Math.min(products.length - 1, Math.round(v * (products.length - 1))))
  })

  const barWidth = useTransform(p, [0, 1], ['0%', '100%'])

  return (
    <section id="yogurt" ref={ref} className="relative h-[480vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#080a08]">
        <div className="pointer-events-none absolute left-1/4 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-lime-600/[0.08] blur-[150px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[32rem] w-[32rem] rounded-full bg-emerald-600/[0.06] blur-[140px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-lime-950/25 to-transparent" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-lime-300/40 blur-[1px]"
              style={{ left: `${(i * 41) % 100}%`, top: `${(i * 29) % 100}%`, width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px` }}
              animate={{ y: [0, -50, 0], opacity: [0, 0.6, 0] }}
              transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="absolute left-6 top-28 z-40 sm:left-10">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">03 / Greek Yogurt</p>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="relative hidden h-[70vh] w-[42%] shrink-0 lg:block">
            {products.map((prod, i) => (
              <BenefitPanel key={prod.name} product={prod} index={i} total={products.length} progress={p} />
            ))}
          </div>

          <div className="relative h-[70vh] flex-1">
            {products.map((prod, i) => (
              <Product3D key={prod.name} product={prod} index={i} total={products.length} progress={p} />
            ))}

            <div className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2 text-center lg:hidden">
              {products.map((prod, i) => (
                <MobileProductName key={prod.name} product={prod} index={i} total={products.length} progress={p} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            {products.map((prod, i) => (
              <span key={prod.name} className={`h-2 rounded-full transition-all duration-500 ${active === i ? 'w-8 bg-lime-400' : 'w-2 bg-white/20'}`} />
            ))}
          </div>
          <div className="h-px w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div style={{ width: barWidth }} className="h-full bg-gradient-to-r from-lime-400 to-emerald-400" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Scroll to explore flavours</p>
        </div>
      </div>
    </section>
  )
}
