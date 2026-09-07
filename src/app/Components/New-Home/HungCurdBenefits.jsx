'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

const benefits = [
  {
    title: 'High Protein, Low Calorie',
    text: 'Packed with nearly double the protein of regular curd — while being naturally lower in calories. The perfect fuel for lean muscle.',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    accent: 'text-amber-600',
    glow: 'from-amber-400/30 to-amber-600/10',
  },
  {
    title: 'Gut-Friendly Probiotics',
    text: 'Billions of live, active cultures survive the straining process, actively supporting digestion and strengthening your immune system.',
    img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    accent: 'text-orange-600',
    glow: 'from-orange-400/30 to-orange-600/10',
  },
  {
    title: 'Naturally Thick & Creamy',
    text: 'No starch, no thickeners, no stabilizers. The dense, cream-cheese-like texture comes purely from 12 hours of gravity straining.',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    accent: 'text-yellow-700',
    glow: 'from-yellow-400/30 to-yellow-600/10',
  },
  {
    title: 'Low in Carbs',
    text: 'The straining process removes excess lactose and carbohydrates, making it ideal for keto, low-carb, and diabetic-friendly diets.',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80',
    accent: 'text-amber-700',
    glow: 'from-amber-500/30 to-amber-700/10',
  },
  {
    title: 'Rich in Calcium',
    text: 'A concentrated source of bioavailable calcium and phosphorus that strengthens bones, teeth, and supports nerve function.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    accent: 'text-stone-600',
    glow: 'from-stone-400/30 to-stone-600/10',
  },
  {
    title: 'Made With Patience',
    text: "No shortcuts, no machinery, no artificial pressure. Just 12 hours of slow, gravity-driven straining — the way it's been done for centuries.",
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    accent: 'text-amber-600',
    glow: 'from-amber-400/30 to-amber-600/10',
  },
]

const stories = [
  {
    n: '01',
    title: 'Why We Strain Slowly',
    text: 'Machine-strained curd loses its live cultures and delicate texture. Our 12-hour gravity method preserves every probiotic and every drop of natural richness.',
  },
  {
    n: '02',
    title: 'The Muslin Difference',
    text: "Traditional muslin cloth breathes naturally, allowing whey to escape while keeping the curd's probiotic cultures alive and active.",
  },
  {
    n: '03',
    title: 'From Curd to Concentrate',
    text: 'What starts as 3 cups of fresh curd becomes 1 cup of dense, protein-rich hung curd. Concentration without compromise.',
  },
]

function WarmTiltCard({
  children,
  className = '',
}) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const sx = useSpring(px, { stiffness: 150, damping: 18, restDelta: 0.001 })
  const sy = useSpring(py, { stiffness: 150, damping: 18, restDelta: 0.001 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8])
  const liftX = useTransform(sx, [-0.5, 0.5], [-6, 6])
  const liftY = useTransform(sy, [-0.5, 0.5], [-6, 6])

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onLeave() {
    px.set(0)
    py.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 900 }}
      className={`group relative will-change-transform ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-1 rounded-[2rem] transition-all duration-500"
        style={{
          opacity: hovered ? 0.4 : 0,
          boxShadow: '0 25px 50px -12px rgba(180,120,40,0.35), 0 0 0 1px rgba(217,119,6,0.12)',
        }}
      />
      <div
        className="relative h-full overflow-hidden rounded-3xl border border-amber-600/15 bg-gradient-to-b from-white/60 to-amber-50/30 backdrop-blur-sm transition-colors duration-500 group-hover:border-amber-500/40"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
        <motion.div
          style={{ x: liftX, y: liftY, transformStyle: 'preserve-3d' }}
          className="relative p-7"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  )
}

function BenefitsGrid() {
  return (
    <div className="relative mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-700/70">Core Health Benefits</p>
        <h3 className="text-4xl font-black tracking-tight text-stone-800 sm:text-5xl">
          Why Hung Curd is{' '}
          <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
            nature's cheat code
          </span>
        </h3>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
          Thick, satisfying, and loaded with benefits that regular curd simply can't match.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1200px' }}>
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <WarmTiltCard className="h-full">
              <div
                className="relative mb-5 flex justify-center"
                style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
              >
                <motion.img
                  src={b.img}
                  alt={b.title}
                  className="h-24 w-24 object-contain drop-shadow-[0_15px_30px_rgba(180,120,40,0.3)]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute bottom-0 h-5 w-16 rounded-[50%] bg-amber-400/25 blur-xl" />
              </div>

              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${b.glow} opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-80`}
              />

              <h4
                className={`text-center text-lg font-bold ${b.accent}`}
                style={{ transform: 'translateZ(20px)' }}
              >
                {b.title}
              </h4>
              <p
                className="mt-2 text-center text-sm leading-relaxed text-stone-600"
                style={{ transform: 'translateZ(10px)' }}
              >
                {b.text}
              </p>
            </WarmTiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StorySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.4'] })
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  return (
    <div className="relative mx-auto mt-24 max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-700/70">The Tiyas Difference</p>
        <h3 className="text-4xl font-black tracking-tight text-stone-800 sm:text-5xl">
          What makes ours{' '}
          <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
            different
          </span>
        </h3>
      </motion.div>

      <div ref={ref} className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-amber-700/15 sm:left-1/2">
          <motion.div
            style={{ scaleY: lineScaleY }}
            className="h-full w-full origin-top bg-gradient-to-b from-amber-400 to-amber-600"
          />
        </div>

        <div className="space-y-12">
          {stories.map((s, i) => {
            const left = i % 2 === 0
            return (
              <div key={s.n} className={`relative flex items-center ${left ? 'sm:justify-start' : 'sm:justify-end'}`}>
                <motion.div
                  initial={{ opacity: 0, x: left ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`ml-12 w-full sm:ml-0 sm:w-[44%] ${left ? '' : 'sm:text-right'}`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-amber-600/15 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-amber-500/40 hover:bg-white/70">
                    <span className="bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-4xl font-black text-transparent">
                      {s.n}
                    </span>
                    <h4 className="mt-2 text-lg font-bold text-stone-800">{s.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.text}</p>
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.div>
                <span className="absolute left-4 top-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-amber-500 ring-4 ring-amber-400/20 sm:left-1/2" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function HungCurdBenefits() {
  return (
    <section className="relative overflow-x-clip bg-[#f5efe0] pb-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber-300/20 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-300/10 blur-[140px]" />

      <div className="relative pt-20">
        <BenefitsGrid />
      </div>

      <StorySection />

      <div className="relative mx-auto mt-24 max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-amber-600/20 bg-gradient-to-br from-amber-500/10 via-[#f5efe0] to-orange-400/10 p-10 text-center sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.1),transparent_70%)]" />
          <h3 className="relative text-3xl font-black text-stone-800 sm:text-5xl">
            Thick by nature. Pure by choice.
          </h3>
          <p className="relative mx-auto mt-4 max-w-xl text-stone-600">
            No thickeners. No shortcuts. No compromise. Just 12 hours of patience and the richest, most satisfying curd you'll ever taste.
          </p>
        </motion.div>
      </div>
    </section>
  )
}