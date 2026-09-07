
import { motion } from 'framer-motion'
// import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

import data from '../../../data.json'

const cols = data.footerCols || []

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/5 bg-[#0c0a09] pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 font-black text-[#0c0a09]">T</span>
              <span className="text-lg font-semibold tracking-[0.15em] text-stone-100">TIYAS <span className="text-amber-300">FOOD</span></span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              Heritage A2 Desi Ghee and clean, lab-tested protein — crafted in India, trusted worldwide. Purity, always.
            </p>
            {/* <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-stone-400 transition-all hover:scale-110 hover:border-amber-400/40 hover:text-amber-300">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
          </div>

          {cols.map((c, i) => (
            <div key={c.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-200">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-stone-400 transition-colors hover:text-amber-300">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 text-xs text-stone-500 sm:flex-row">
          <p>© 2024 Tiyas Food Pvt. Ltd. · FSSAI Lic. 100240xxxxxx</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300">Privacy</a>
            <a href="#" className="hover:text-stone-300">Terms</a>
            <a href="#" className="hover:text-stone-300">Cookies</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden">
        <p className="bg-linear-to-b from-white/4 to-transparent bg-clip-text text-center text-[18vw] font-black leading-none text-transparent">TIYAS</p>
      </div>
    </footer>
  )
}