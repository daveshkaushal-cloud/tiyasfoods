'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const acts = [
  {
    label: 'Act I',
    title: 'The Gathering',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    phrases: [
      'Our story begins at dawn.',
      'We harvest the thickest, most pristine curd,',
      'rich in natural cultures',
      'and completely untouched by artificial stabilizers.',
    ],
  },
  {
    label: 'Act II',
    title: 'The Suspended Wait',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    phrases: [
      'Then, we surrender to time.',
      'Wrapped in breathable, traditional muslin cloth,',
      'the curd is suspended in absolute stillness.',
      'No machinery. No rushed pressure.',
      'Just gravity performing its silent ritual.',
    ],
  },
  {
    label: 'Act III',
    title: 'The Transformation',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    phrases: [
      'For twelve patient hours,',
      'the excess moisture slowly weeps away.',
      'What remains in the heart of the cloth is a revelation',
      '— a dense, ultra-velvety concentrate,',
      'naturally low in carbs and bursting with pure protein.',
    ],
  },
]

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

function KineticText({
  act,
  index,
  total,
  progress,
}) {
  const center = index / (total - 1)
  const halfSpan = 1 / (total - 1) / 2

  const opacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return clamp(1 - dist / halfSpan, 0, 1)
  })
  const y = useTransform(progress, (v) => {
    const diff = v - center
    return clamp(diff / halfSpan, -1, 1) * 60
  })

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <motion.span
        style={{
          opacity: useTransform(progress, (v) => {
            const dist = Math.abs(v - center)
            return clamp(1 - dist / halfSpan, 0, 1)
          }),
        }}
        className="mb-2 text-xs uppercase tracking-[0.4em] text-amber-600/70"
      >
        {act.label}
      </motion.span>

      <motion.h3
        style={{
          x: useTransform(progress, (v) => {
            const diff = v - center
            return clamp(diff / halfSpan, -1, 1) * -40
          }),
        }}
        className="mb-6 text-4xl font-black tracking-tight text-stone-800 sm:text-5xl"
      >
        {act.title}
      </motion.h3>

      <div className="space-y-3">
        {act.phrases.map((phrase, pi) => {
          const phraseCenter =
            center + (pi - (act.phrases.length - 1) / 2) * ((halfSpan * 0.3) / act.phrases.length)
          const phraseHalf = halfSpan * 0.6

          return (
            <KineticPhrase
              key={pi}
              text={phrase}
              progress={progress}
              center={phraseCenter}
              halfSpan={phraseHalf}
            />
          )
        })}
      </div>
    </motion.div>
  )
}

function KineticPhrase({
  text,
  progress,
  center,
  halfSpan,
}) {
  const opacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return clamp(1 - dist / halfSpan, 0, 1)
  })

  const x = useTransform(progress, (v) => {
    const diff = v - center
    return clamp(diff / halfSpan, -1, 1) * 30
  })

  const fontWeight = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    const t = clamp(1 - dist / halfSpan, 0, 1)
    return Math.round(300 + t * 400)
  })

  const letterSpacing = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    const t = clamp(1 - dist / halfSpan, 0, 1)
    return `${0.04 - t * 0.03}em`
  })

  return (
    <motion.p
      style={{ opacity, x, fontWeight, letterSpacing }}
      className="text-lg leading-relaxed text-stone-700 sm:text-xl"
    >
      {text}
    </motion.p>
  )
}

function ActVisual({
  act,
  index,
  total,
  progress,
}) {
  const center = index / (total - 1)
  const halfSpan = 1 / (total - 1) / 2

  const opacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return clamp(1 - dist / halfSpan, 0, 1)
  })
  const scale = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    const t = clamp(1 - dist / halfSpan, 0, 1)
    return 0.6 + t * 0.4
  })
  const rotateY = useTransform(progress, (v) => {
    const diff = v - center
    return clamp(diff / halfSpan, -1, 1) * 40
  })
  const y = useTransform(progress, (v) => {
    const diff = v - center
    return clamp(diff / halfSpan, -1, 1) * 100
  })
  const glowScale = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    const t = clamp(1 - dist / halfSpan, 0, 1)
    return 0.5 + t * 0.8
  })
  const glowOpacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return clamp(1 - dist / halfSpan, 0, 1) * 0.35
  })

  return (
    <motion.div
      style={{ opacity, scale, rotateY, y, transformStyle: 'preserve-3d' }}
      className="relative flex h-full w-full items-center justify-center"
    >
      <motion.div
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute h-[26rem] w-[26rem] rounded-full bg-amber-400/40 blur-[90px]"
      />
      <motion.img
        src={act.img}
        alt={act.title}
        className="relative z-10 h-[85%] w-auto object-contain drop-shadow-[0_25px_50px_rgba(120,80,20,0.25)]"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transform: 'translateZ(40px)' }}
      />
    </motion.div>
  )
}

function ActDot({
  index,
  total,
  progress,
  label,
}) {
  const center = index / (total - 1)
  const halfSpan = 1 / (total - 1) / 2

  const opacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return 0.3 + clamp(1 - dist / halfSpan, 0, 1) * 0.7
  })
  const scale = useTransform(progress, (v) => {
    const dist = Math.abs(v - center)
    return 1 + clamp(1 - dist / halfSpan, 0, 1) * 0.4
  })

  return (
    <div className="flex items-center gap-2">
      {index > 0 && <span className="h-px w-6 bg-amber-700/20" />}
      <motion.span
        style={{ opacity, scale }}
        className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700"
      >
        {label}
      </motion.span>
    </div>
  )
}

function LightParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-amber-300/60 blur-[1px]"
          style={{
            left: `${30 + (i * 13) % 50}%`,
            top: `${20 + (i * 17) % 60}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function HungCurd() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const p = useSpring(scrollYProgress, { stiffness: 50, damping: 18, restDelta: 0.001 })

  return (
    <section id="hung-curd" className="relative overflow-x-clip bg-[#f5efe0]">
      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-700/70">04 / Hung Curd</p>
          <h2 className="text-4xl font-black tracking-tight text-stone-800 sm:text-6xl">
            The Ancient Art of{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Hung Curd
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
            A three-act story of patience, gravity, and transformation — told the way it has been for centuries.
          </p>
        </motion.div>
      </div>

      <div ref={ref} className="relative h-[360vh] w-full">
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/25 blur-[170px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(180,120,40,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(180,120,40,0.5) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            }}
          />

          <LightParticles />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6">
            <div className="relative h-[65vh] w-full lg:w-[48%]">
              {acts.map((act, i) => (
                <KineticText key={act.label} act={act} index={i} total={acts.length} progress={p} />
              ))}
            </div>

            <div
              className="relative hidden h-[65vh] flex-1 items-center justify-center lg:flex"
              style={{ perspective: '1200px' }}
            >
              {acts.map((act, i) => (
                <ActVisual key={act.label} act={act} index={i} total={acts.length} progress={p} />
              ))}
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4">
            {acts.map((act, i) => (
              <ActDot key={act.label} index={i} total={acts.length} progress={p} label={act.label} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {[
            { v: '2x', l: 'Protein Density' },
            { v: '12hr', l: 'Slow Strain' },
            { v: '0', l: 'Artificial Pressure' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-amber-600/20 bg-amber-50/50 p-6 text-center backdrop-blur-sm"
            >
              <p className="bg-gradient-to-b from-amber-500 to-amber-700 bg-clip-text text-4xl font-black text-transparent">
                {s.v}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-600">{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}