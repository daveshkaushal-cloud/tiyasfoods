"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Leaf,
  Mail,
  ShieldCheck,
  Sparkles,
  Sprout,
  Truck,
  Users,
} from "lucide-react";

const products = [
  {
    name: "A2 Bilona Ghee",
    eyebrow: "TRADITIONAL GHEE",
    copy: "Slow-crafted, golden and made for the everyday Indian kitchen.",
    image: "/assets/hero-section-1.jpeg",
    href: "/Products",
    tone: "bg-[#F2C75B]",
    text: "text-[#2D3E2F]",
    chip: "bg-[#FFF6DA] text-[#31543B]",
  },
  {
    name: "Fresh Yogurt",
    eyebrow: "FARM FRESH",
    copy: "Cool, creamy goodness with a lighter, fresher personality.",
    image: "/assets/home-yogurt-product.webp",
    href: "/Products/yogurt",
    tone: "bg-[#CAD9A7]",
    text: "text-[#244632]",
    chip: "bg-[#F7FBEF] text-[#31543B]",
  },
  {
    name: "Whey Protein",
    eyebrow: "DAILY NUTRITION",
    copy: "A stronger everyday routine, presented with a warmer food-first identity.",
    image: "/assets/home-whey-brand.webp",
    href: "/Products/whey-protein",
    tone: "bg-[#D9754F]",
    text: "text-[#321F18]",
    chip: "bg-[#FFE5D5] text-[#783A25]",
  },
];

const promises = [
  { icon: Leaf, title: "Thoughtful Ingredients", copy: "Simple products built around familiar goodness." },
  { icon: ShieldCheck, title: "Carefully Made", copy: "Prepared and packed with attention to every detail." },
  { icon: Heart, title: "Made for Home", copy: "Food designed to fit naturally into everyday routines." },
  { icon: Sprout, title: "Rooted in Tradition", copy: "A modern brand with a strong connection to familiar methods." },
  { icon: Users, title: "For Generations", copy: "Warm, approachable food for the whole family." },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#FFF8E9] text-[#24392B]">
      <section className="relative overflow-hidden bg-[#173D2D] pt-32 text-[#FFF7E7] md:pt-36">
        <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#E2A83E]/25 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#94B66D]/20 blur-[120px]" />
        <div className="pointer-events-none absolute left-[8%] top-[28%] h-24 w-12 rotate-[-28deg] rounded-[100%_0_100%_0] bg-[#8CAF71]/20" />
        <div className="pointer-events-none absolute right-[6%] top-[18%] h-28 w-14 rotate-[22deg] rounded-[100%_0_100%_0] bg-[#A8C58C]/20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0C96E]/25 bg-[#FFF8E8]/8 px-4 py-2 text-[10px] font-semibold tracking-[0.28em] text-[#F6CB63]">
              <Sparkles size={13} /> REAL FOOD · BRIGHTER EVERYDAY
            </div>

            <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.2rem]">
              Pure. Organic.
              <span className="mt-2 block text-[#F2C75B]">Wholesome food</span>
              <span className="block">for brighter days.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#E7DFCF] sm:text-base">
              Tiyas Foods brings together familiar ingredients, warm food traditions and a modern shopping experience made for everyday homes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/Products"
                className="inline-flex items-center gap-3 rounded-full bg-[#F2C75B] px-6 py-3.5 text-sm font-bold text-[#183829] shadow-[0_16px_35px_rgba(242,199,91,0.18)] transition hover:-translate-y-0.5 hover:bg-[#F7D271]"
              >
                Shop our products <ArrowRight size={16} />
              </Link>
              <Link
                href="/Goodness"
                className="inline-flex items-center gap-3 rounded-full border border-[#FFF5DB]/20 bg-[#FFF8E8]/7 px-6 py-3.5 text-sm font-semibold text-[#FFF7E7] transition hover:bg-[#FFF8E8]/12"
              >
                Discover our goodness
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {[
                [Leaf, "Pure ingredients"],
                [ShieldCheck, "No unnecessary extras"],
                [Users, "Goodness for families"],
              ].map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 backdrop-blur-sm">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F2C75B]/12 text-[#F2C75B]"><Icon size={16} /></span>
                  <span className="text-xs leading-5 text-[#EEE5D5]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[36px] border border-[#F5D88A]/20 bg-[#E9C15C] shadow-[0_34px_90px_rgba(6,25,17,0.34)]">
              <img
                src="/assets/hero-section-1.jpeg"
                alt="Tiyas Foods A2 Bilona Ghee"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163B2C]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-[#173D2D]/75 px-4 py-3 backdrop-blur-md">
                <p className="text-[9px] font-semibold tracking-[0.24em] text-[#F4CB6B]">SIGNATURE GOODNESS</p>
                <p className="mt-1 font-serif text-xl text-white">A2 Bilona Ghee</p>
              </div>
              <div className="absolute right-5 top-5 rounded-full bg-[#FFF8E8]/92 px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-[#234A36]">
                MADE WITH CARE
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 hidden w-44 rotate-[-3deg] rounded-[24px] bg-[#FFF6DE] p-4 text-[#31523A] shadow-xl lg:block">
              <p className="font-serif text-xl leading-tight">Goodness tastes better when it feels real.</p>
              <p className="mt-3 text-[10px] tracking-[0.2em] text-[#B76B42]">TIYAS FOODS</p>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="relative bg-[#FFF8E9] py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-14 top-16 h-44 w-32 rotate-[24deg] rounded-[100%_0_100%_0] bg-[#A6C68B]/14" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#C56D43]">OUR PRODUCTS</p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-[#234633] sm:text-5xl lg:text-6xl">
                Wholesome goodness for every home.
              </h2>
              <p className="mt-4 text-sm text-[#73695D]">Three distinct product worlds. One warm, familiar Tiyas Foods identity.</p>
            </div>
            <Link href="/Products" className="inline-flex items-center gap-2 text-sm font-bold text-[#31543B] transition hover:text-[#B85F3A]">
              View all products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className={`group relative overflow-hidden rounded-[30px] ${product.tone} ${product.text} shadow-[0_18px_50px_rgba(91,69,37,0.08)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_65px_rgba(91,69,37,0.14)]`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
                  <span className={`absolute left-5 top-5 rounded-full px-4 py-2 text-[9px] font-bold tracking-[0.22em] ${product.chip}`}>{product.eyebrow}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <h3 className="font-serif text-3xl leading-none">{product.name}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-6 opacity-75">{product.copy}</p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current/15 bg-white/25 transition group-hover:rotate-[-10deg] group-hover:scale-105">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#DFD0B5] bg-[#F4E8D0] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#B66A43]">WHY CHOOSE TIYAS FOODS?</p>
            <h2 className="mt-3 font-serif text-4xl text-[#224733] sm:text-5xl">Real food. Real warmth.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {promises.map(({ icon: Icon, title, copy }, i) => {
              const backgrounds = ["bg-[#F8CF69]", "bg-[#C8D7A6]", "bg-[#E39A7C]", "bg-[#D7E3C5]", "bg-[#F2D8A5]"];
              return (
                <div key={title} className="rounded-[26px] bg-[#FFF9EE] p-5 text-center shadow-[0_10px_30px_rgba(90,64,34,0.05)]">
                  <span className={`mx-auto grid h-12 w-12 place-items-center rounded-full ${backgrounds[i]} text-[#244A36]`}><Icon size={20} /></span>
                  <h3 className="mt-4 text-sm font-bold text-[#284A37]">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#7A6F62]">{copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8E9] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <article className="group overflow-hidden rounded-[34px] border border-[#E6D4B6] bg-[#FFFDF7] shadow-[0_18px_55px_rgba(80,58,31,0.07)]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src="/assets/home-family.webp" alt="Wholesome food for families" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D2D]/60 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-[#FFF6E1]/90 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-[#AF5D3C]">GOOD FOOD BRINGS US CLOSER</span>
            </div>
            <div className="p-7 sm:p-8">
              <h3 className="font-serif text-4xl leading-tight text-[#234633]">Happier families. Warmer tables.</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#746A5E]">Food is more than nutrition. It is routine, memory and the little moments people share around the table.</p>
              <Link href="/Goodness" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#315C41] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#244A35]">Our story <ArrowRight size={15} /></Link>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[34px] border border-[#D8C49F] bg-[#E7D7AF] shadow-[0_18px_55px_rgba(80,58,31,0.07)]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src="/assets/hero-section-3.jpeg" alt="Tiyas Foods fresh dairy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#284C37]/58 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-[#E6F0D8]/92 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-[#31563F]">FROM SOURCE TO HOME</span>
            </div>
            <div className="p-7 sm:p-8">
              <h3 className="font-serif text-4xl leading-tight text-[#244733]">Food you can trust from people who care.</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#655D52]">A simple promise: build products thoughtfully, present them honestly and make the whole experience feel close to home.</p>
              <Link href="/Goodness" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C76943] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B65A37]">Our goodness <ArrowRight size={15} /></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#D96F46] px-6 py-16 text-[#FFF7E8] lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#173D2D] px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#F4C762]/14 blur-[80px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.28em] text-[#F3C764]"><Mail size={14} /> JOIN OUR WHOLESOME JOURNEY</div>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">A little goodness in your inbox.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#DDD6C8]">Product updates, food stories and new launches — kept simple and useful.</p>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-full border border-[#F2D79E]/15 bg-[#FFF8E8] px-6 text-sm text-[#263B2E] outline-none placeholder:text-[#8F877A] focus:ring-2 focus:ring-[#F2C75B]/50"
            />
            <button type="submit" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#F2C75B] px-7 text-sm font-bold text-[#173D2D] transition hover:bg-[#F7D477]">
              Subscribe <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#FFF8E9] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-[#6C6459] sm:flex-row sm:text-left lg:px-8">
          <div className="flex items-center gap-2"><Truck size={16} className="text-[#B86642]" /> Free delivery above ₹999</div>
          <div className="font-serif text-xl text-[#31523A]">Pure · Organic · Wholesome</div>
          <div className="flex items-center gap-2"><Leaf size={16} className="text-[#64845C]" /> Made for everyday goodness</div>
        </div>
      </section>
    </div>
  );
}
