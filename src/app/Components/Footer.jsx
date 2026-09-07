import data from '../../../data.json'
import BrandLogo from './BrandLogo'

const cols = data.footerCols || []

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-[#F1D58C]/10 bg-[#123728] pt-20 text-[#FFF7E8]">
      <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#F2C75B]/8 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#91B477]/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center">
              <BrandLogo className="w-52 max-w-full" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#D6CFBF]">
              Warm food traditions, thoughtful ingredients and an everyday experience designed to feel close to home.
            </p>
            <p className="mt-5 font-serif text-2xl leading-tight text-[#F2C75B]">
              Pure · Organic · Wholesome
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#F2C75B]">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[#D8D1C2] transition-colors hover:text-[#FFF2C8]">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#F1D58C]/10 py-8 text-xs text-[#AFA99D] sm:flex-row">
          <p>© 2026 Tiyas Foods. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#FFF2C8]">Privacy</a>
            <a href="#" className="transition hover:text-[#FFF2C8]">Terms</a>
            <a href="#" className="transition hover:text-[#FFF2C8]">Cookies</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden">
        <p className="bg-gradient-to-b from-[#FFF4D8]/[0.045] to-transparent bg-clip-text text-center text-[18vw] font-black leading-none text-transparent">TIYAS</p>
      </div>
    </footer>
  )
}
