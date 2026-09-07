import data from '../../../../data.json'

const nl = data.newsletter || {};

export default function NewsLetter() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-4xl border border-[#f5b82e]/15 bg-[#15120e] px-6 py-16 text-center md:px-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">
          {nl.eyebrow}
        </p>

        <h2 className="mt-5 font-display text-4xl md:text-5xl">
          {nl.heading}
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-stone-500">
          {nl.description}
        </p>

        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder={nl.placeholder || "Enter your email"}
            className="h-12 flex-1 rounded-full border border-white/10 bg-[#0c0a09] px-5 text-sm outline-none placeholder:text-stone-600 focus:border-[#f5b82e]/50"
          />

          <button
            type="submit"
            className="h-12 rounded-full gold-gradient px-7 text-sm font-semibold text-[#0c0a09]"
          >
            {nl.buttonText || "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}