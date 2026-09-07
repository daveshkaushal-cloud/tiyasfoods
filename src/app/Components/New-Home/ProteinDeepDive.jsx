'use client'

import { motion } from 'framer-motion'
import { Dumbbell, HeartPulse, ShieldPlus, Leaf, Zap, Bone } from 'lucide-react'
import TiltCard from './TiltCard'

const benefits = [
  { icon: Dumbbell, title: '27g Protein Per Scoop', text: 'Every scoop delivers 27g of pure whey isolate — the precise dose your muscles need to repair and grow after training.', color: 'text-lime-300', glow: 'from-lime-400/30 to-lime-600/10' },
  { icon: HeartPulse, title: 'Heart-Healthy & Clean', text: 'Zero trans fats, zero cholesterol, zero added sugar. Just clean protein that supports lean muscle without taxing your heart.', color: 'text-rose-300', glow: 'from-rose-400/30 to-rose-600/10' },
  { icon: Zap, title: 'Instant Energy & Recovery', text: 'Fast-absorbing amino acids flood your bloodstream within 30 minutes — reducing soreness and speeding up recovery.', color: 'text-amber-300', glow: 'from-amber-400/30 to-amber-600/10' },
  { icon: Bone, title: 'Bone Density Support', text: 'Naturally rich in calcium and bioavailable minerals that strengthen bones and joints — not just muscles.', color: 'text-sky-300', glow: 'from-sky-400/30 to-sky-600/10' },
  { icon: ShieldPlus, title: 'Immunity Boost', text: 'Lactoferrin and immunoglobulins in whey isolate actively support your immune system — a benefit most protein brands ignore.', color: 'text-violet-300', glow: 'from-violet-400/30 to-violet-600/10' },
  { icon: Leaf, title: 'Gut-Friendly & Light', text: 'Cold-processed and micro-filtered to remove lactose. Easy on the stomach — no bloating, no heaviness.', color: 'text-emerald-300', glow: 'from-emerald-400/30 to-emerald-600/10' },
]

const process = [
  { n: '01', title: 'Sourcing Premium Whey', text: 'We start with grass-fed cow milk from trusted Indian dairy farms — the same network behind our A2 ghee.', img: '/assets/hero-section-3.jpeg' },
  { n: '02', title: 'Cold Micro-Filtration', text: 'Whey is separated using cold micro-filtration — no heat, no chemicals. This keeps all the delicate proteins intact.', img: '/assets/home-whey-brand.webp' },
  { n: '03', title: 'Isolation & Purification', text: 'Carbs, fats and lactose are filtered out. What remains is 90%+ pure whey protein isolate.', img: '/assets/home-whey-brand.webp' },
  { n: '04', title: 'Natural Flavouring', text: 'We add only real cocoa and natural stevia. No artificial flavours, no sucralose, no maltodextrin.', img: '/assets/home-whey-brand.webp' },
  { n: '05', title: 'Third-Party Lab Testing', text: 'Every batch is tested by independent labs for heavy metals, microbes and protein content. You see the report.', img: '/assets/home-whey-brand.webp' },
  { n: '06', title: 'Sealed & Shipped', text: 'Packed in a food-grade, BPA-free tub with a tamper-proof seal — then shipped to your door.', img: '/assets/home-whey-brand.webp' },
]

export default function ProteinDeepDive() {
  return (
    <section id="protein-deepdive" className="relative overflow-hidden bg-[#0a0c0a] py-28 sm:py-36">
      <div className="pointer-events-none absolute right-0 top-0 h-[40rem] w-[40rem] rounded-full bg-lime-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-[26rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-lime-500/[0.08] blur-[160px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-lime-950/30 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(132,204,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-lime-300/70">Why Our Protein</p>
          <h2 className="text-4xl font-black tracking-tight text-stone-100 sm:text-6xl">
            Benefits you can{' '}
            <span className="relative bg-gradient-to-b from-lime-200 via-lime-300 to-lime-500 bg-clip-text text-transparent" style={{ textShadow: '0 1px 0 rgba(132,204,22,0.4), 0 2px 0 rgba(101,163,13,0.3), 0 3px 6px rgba(132,204,22,0.35), 0 8px 24px rgba(132,204,22,0.25)' }}>feel</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-400">Not just protein. Real, functional nutrition that supports your whole body.</p>
        </motion.div>

        <div className="mb-28 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1200px' }}>
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.08 }}>
              <TiltCard className="h-full">
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${b.glow} opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
                <div className={`relative mb-5 grid h-14 w-14 place-items-center rounded-2xl ${b.color}`} style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/[0.02] backdrop-blur-md" />
                  <div className="absolute inset-x-1 top-1 h-1/2 rounded-t-2xl bg-gradient-to-b from-lime-300/25 to-transparent" />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_-8px_16px_rgba(0,0,0,0.35),0_8px_20px_rgba(0,0,0,0.4)]" />
                  <b.icon className="relative h-7 w-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" strokeWidth={2} />
                </div>
                <h3 className="relative text-lg font-bold text-stone-100" style={{ transform: 'translateZ(24px)' }}>{b.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-stone-400" style={{ transform: 'translateZ(12px)' }}>{b.text}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-lime-300/70">Clean Manufacturing</p>
          <h2 className="text-4xl font-black tracking-tight text-stone-100 sm:text-6xl">From milk to <span className="bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">your scoop</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-400">Six transparent steps. Zero hidden ingredients. Full traceability.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-lime-400/40 via-lime-500/20 to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-3">
            {process.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 40, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -6 }} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors hover:border-lime-400/30">
                <div className="relative h-36 w-full overflow-hidden sm:h-40">
                  <img src={s.img} alt={s.title} className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0a] via-[#0a0c0a]/30 to-transparent" />
                  <div className="absolute inset-0 bg-lime-950/20 mix-blend-multiply" />
                  <span className="absolute left-4 top-3 bg-gradient-to-b from-lime-300 to-lime-500 bg-clip-text text-3xl font-black text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{s.n}</span>
                  <span className="absolute right-4 top-3 grid h-9 w-9 place-items-center rounded-full border border-lime-400/30 bg-[#0a0c0a]/70 text-lime-300 backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-lime-400/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-5">
                  <h3 className="text-lg font-bold text-stone-100">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} className="relative mt-20 overflow-hidden rounded-[2rem] border border-lime-400/20 bg-gradient-to-br from-lime-500/10 via-[#0a0c0a] to-[#0a0c0a] p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.12),transparent_70%)]" />
          <h3 className="relative text-3xl font-black text-stone-100 sm:text-5xl">What's on the label is exactly what's in the tub.</h3>
          <p className="relative mx-auto mt-4 max-w-xl text-stone-300">No fillers. No amino spiking. No hidden carbs. Just honest protein, lab-tested and delivered.</p>
        </motion.div>
      </div>
    </section>
  )
}
