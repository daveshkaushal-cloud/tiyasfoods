'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { n: '01', title: 'Milking A2 Cows', text: 'Our day begins before dawn. Grass-fed, free-roaming Gir & Sahiwal cows are milked by hand — no machines, no hormones, only kindness.' },
  { n: '02', title: 'Boiling the Milk', text: 'Fresh milk is slowly boiled in earthen pots. This step purifies, makes it safe, and begins the journey from liquid to gold.' },
  { n: '03', title: 'Setting the Curd', text: 'A spoon of natural curd culture is folded in. The milk rests overnight, transforming into a thick, living curd — the soul of Bilona ghee.' },
  { n: '04', title: 'Churning the Bilona', text: 'At sunrise, the curd is hand-churned in a wooden bilona — a two-way rope churner. This ancient method keeps nutrients intact that machines destroy.' },
  { n: '05', title: 'Separating the Butter', text: 'Butter (loni) floats to the top, gathered by hand. What remains becomes buttermilk — nothing is wasted, everything is used.' },
  { n: '06', title: 'Slow-Heating to Ghee', text: 'The butter is simmered on a wood flame until the golden ghee separates from the milk solids. The aroma — your grandmother’s kitchen, bottled.' },
]

export default function GheeProcess() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.6'] })
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  const bgRef = useRef(null)
  const { scrollYProgress: bgProgress } = useScroll({ target: bgRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(bgProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="ghee-process" ref={bgRef} className="relative overflow-hidden bg-[#0c0a09] py-28 sm:py-36">
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/assets/home-family.webp"
          alt="Family sharing a warm meal made with Tiyas Foods"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/80 via-[#0c0a09]/68 to-[#0c0a09]/88" />
        <div className="absolute inset-0 bg-[#0c0a09]/32" />
      </motion.div>

      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-amber-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300/70">The Bilona Method</p>
          <h2 className="text-4xl font-black tracking-tight text-stone-100 sm:text-6xl">
            Six steps to <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">liquid gold</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-400">
            The same hands-on, wood-churned process our grandmothers used. No shortcuts, no machines, no compromise.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-1/2">
            <motion.div style={{ scaleY: lineScaleY }} className="h-full w-full origin-top bg-gradient-to-b from-amber-400 to-amber-600" />
          </div>

          <div className="space-y-14">
            {steps.map((s, i) => {
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
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all hover:border-amber-400/30 hover:bg-white/[0.07]">
                      <span className="bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-5xl font-black text-transparent">{s.n}</span>
                      <h3 className="mt-2 text-xl font-bold text-stone-100">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-400">{s.text}</p>
                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                  <span className="absolute left-4 top-7 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-amber-400 ring-4 ring-amber-400/20 sm:left-1/2" />
                </div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="mx-auto max-w-xl rounded-2xl border border-amber-400/20 bg-amber-400/5 px-6 py-4 text-sm italic leading-relaxed text-amber-200/90">
            It takes 10 litres of A2 milk to make just 1 litre of our ghee. That's not inefficiency — that's integrity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
