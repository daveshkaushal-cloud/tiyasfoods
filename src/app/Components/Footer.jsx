import data from '../../../data.json'
import BrandLogo from './BrandLogo'

const cols = data.footerCols || []

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/5 bg-[#0c0a09] pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex rounded-[28px] bg-[#FFF8E8] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
              <BrandLogo className="w-52 max-w-full" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-400">
              Heritage A2 Desi Ghee and clean, lab-tested protein — crafted in India, trusted worldwide. Purity, always.
            </p>
          </div>

          {cols.map((c) => (
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
