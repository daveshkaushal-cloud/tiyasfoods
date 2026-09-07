import { Mail, Sparkles } from "lucide-react";
import data from "../../../../data.json";

const nl = data.newsletter || {};

export default function NewsLetter() {
  return (
    <section className="bg-[#FFF8EB] px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#F2C45A] px-6 py-14 text-[#2F382E] shadow-[0_24px_60px_rgba(129,89,29,0.14)] md:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7D8] px-4 py-2 text-[10px] font-bold tracking-[0.25em] text-[#7A5B16]">
              <Sparkles size={14} /> {nl.eyebrow}
            </div>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight md:text-5xl">{nl.heading}</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#5E5A46]">{nl.description}</p>
          </div>

          <div className="rounded-[30px] bg-[#234735] p-5 text-white md:p-7">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-[#F2C45A]"><Mail size={19} /></div>
              <div>
                <p className="font-serif text-2xl">A little goodness, occasionally.</p>
                <p className="mt-1 text-xs leading-5 text-white/60">New products, thoughtful food notes and Tiyas updates.</p>
              </div>
            </div>

            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={nl.placeholder || "Enter your email"}
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#F2C45A]"
              />
              <button type="submit" className="h-12 rounded-full bg-[#D97B4E] px-7 text-sm font-bold text-white transition hover:bg-[#C96C40]">
                {nl.buttonText || "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
