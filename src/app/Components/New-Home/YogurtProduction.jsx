'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from './TiltCard'

const YOGURT_IMAGE = '/assets/home-yogurt-product.webp'

const steps = [
  { n: '01', title: 'Sourcing A2 Milk', text: 'We start with pure, grass-fed A2 milk from our trusted Indian dairy farms — the same network behind our Desi Ghee.', img: YOGURT_IMAGE, tag: 'The Foundation' },
  { n: '02', title: 'Slow Fermentation', text: 'The milk is gently heated and cultured with live, gut-friendly probiotics. Time does the work — not thickeners.', img: YOGURT_IMAGE, tag: 'Living Cultures' },
  { n: '03', title: 'Triple-Straining Process', text: 'We triple-strain the yogurt to remove excess whey, resulting in a naturally dense, ultra-thick texture without adding any thickeners.', img: YOGURT_IMAGE, tag: 'The Texture' },
]

const benefits = [
  { title: 'Double the Protein', text: 'Packed with twice the protein of regular yogurt to fuel muscle recovery and keep you full longer.', img: YOGURT_IMAGE, accent: 'text-lime-300' },
  { title: 'Gut Health & Immunity', text: 'Billions of live, active probiotics that actively support digestion and strengthen your immune system.', img: YOGURT_IMAGE, accent: 'text-emerald-300' },
  { title: 'Zero Additives', text: 'No artificial stabilizers, starch, or thickeners. Just pure, wholesome dairy goodness.', img: YOGURT_IMAGE, accent: 'text-teal-300' },
]

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

function ProductionLine() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })

  return (
    <div ref={ref} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-600/[0.06] blur-[160px]" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6">
          <div className="relative h-[60vh] w-full lg:w-[45%]">
            {steps.map((s, i) => <ProductionText key={s.n} step={s} index={i} total={steps.length} progress={p} />)}
          </div>
          <div className="relative hidden h-[60vh] flex-1 items-center justify-center lg:flex" style={{ perspective: '1200px' }}>
            {steps.map((s, i) => <ProductionVisual key={s.n} step={s} index={i} total={steps.length} progress={p} />)}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4">
          {steps.map((s, i) => <StepDot key={s.n} index={i} total={steps.length} progress={p} label={s.n} />)}
        </div>
      </div>
    </div>
  )
}

function ProductionText({ step, index, total, progress }) {
  const center = index / (total - 1)
  const halfSpan = 1 / (total - 1) / 2
  const opacity = useTransform(progress, (v) => clamp(1 - Math.abs(v - center) / halfSpan, 0, 1))
  const y = useTransform(progress, (v) => clamp((v - center) / halfSpan, -1, 1) * 40)

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <span className="mb-3 text-xs uppercase tracking-[0.3em] text-lime-300/70">{step.tag}</span>
      <div className="mb-4 flex items-baseline gap-4">
        <span className="bg-gradient-to-b from-lime-300 to-lime-500 bg-clip-text text-6xl font-black text-transparent sm:text-7xl">{step.n}</span>
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500">{index + 1} / {total}</span>
      </div>
      <h3 className="text-3xl font-black tracking-tight text-stone-100 sm:text-4xl">{step.title}</h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-stone-400 sm:text-lg">{step.text}</p>
    </motion.div>
  )
}

function ProductionVisual({ step, index, total, progress }) {
  const center = index / (total - 1)
  const halfSpan = 1 / (total - 1) / 2
  const opacity = useTransform(progress, (v) => clamp(1 - Math.abs(v - center) / halfSpan, 0, 1))
  const scale = useTransform(progress, (v) => 0.72 + clamp(1 - Math.abs(v - center) / halfSpan, 0, 1) * 0.28)
  const rotateY = useTransform(progress, (v) => clamp((v - center) / halfSpan, -1, 1) * 30)
  const y = useTransform(progress, (v) => clamp((v - center) / halfSpan, -1, 1) * 70)

  return (
    <motion.div style={{ opacity, scale, rotateY, y, transformStyle: 'preserve-3d' }} className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-[24rem] w-[24rem] rounded-full bg-lime-500/30 blur-[80px]" />
      <motion.img
        src={step.img}
        alt={step.title}
        className="relative z-10 h-[72%] w-[min(420px,80%)] rounded-[30px] border border-lime-200/10 object-cover shadow-2xl shadow-black/50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transform: 'translateZ(30px)' }}
      />
    </motion.div>
  )
}

function StepDot({ index, total, progress, label }) {
  const center = index / (total - 1)
  const halfSpan = 1 / (total - 1) / 2
  const opacity = useTransform(progress, (v) => 0.4 + clamp(1 - Math.abs(v - center) / halfSpan, 0, 1) * 0.6)
  const scale = useTransform(progress, (v) => 1 + clamp(1 - Math.abs(v - center) / halfSpan, 0, 1) * 0.5)

  return (
    <div className="flex items-center gap-2">
      {index > 0 && <span className="h-px w-6 bg-white/10" />}
      <motion.span style={{ opacity, scale }} className="grid h-8 w-8 place-items-center rounded-full border border-lime-400/30 bg-lime-400/10 text-[10px] font-bold text-lime-300">{label}</motion.span>
    </div>
  )
}

function BenefitsGrid() {
  return (
    <div className="relative mx-auto max-w-6xl px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="mb-16 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-lime-300/70">Core Health Benefits</p>
        <h3 className="text-4xl font-black tracking-tight text-stone-100 sm:text-5xl">Good for your <span className="bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text text-transparent">whole body</span></h3>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-3" style={{ perspective: '1200px' }}>
        {benefits.map((b, i) => (
          <motion.div key={b.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
            <TiltCard className="h-full">
              <div className="relative mb-5 flex justify-center" style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
                <motion.img src={b.img} alt={b.title} className="h-28 w-28 rounded-2xl object-cover drop-shadow-[0_15px_30px_rgba(132,204,22,0.3)]" animate={{ y: [0, -10, 0] }} transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }} />
              </div>
              <h4 className={`text-center text-lg font-bold ${b.accent}`} style={{ transform: 'translateZ(24px)' }}>{b.title}</h4>
              <p className="mt-2 text-center text-sm leading-relaxed text-stone-400" style={{ transform: 'translateZ(12px)' }}>{b.text}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function YogurtProduction() {
  return (
    <section id="yogurt-art" className="relative overflow-x-clip bg-[#080a08] py-28 sm:py-36">
      <div className="relative mx-auto mb-8 max-w-6xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-lime-300/70">Greek Yogurt</p>
          <h2 className="text-4xl font-black tracking-tight text-stone-100 sm:text-6xl">The Pure Art of <span className="bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text text-transparent">Greek Yogurt</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-400">Production &amp; Benefits — from farm-fresh A2 milk to thick, creamy yogurt made with care.</p>
        </motion.div>
      </div>
      <ProductionLine />
      <div className="py-20"><BenefitsGrid /></div>
    </section>
  )
}
