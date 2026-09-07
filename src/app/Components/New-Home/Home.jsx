"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  Truck,
  FlaskConical,
} from "lucide-react";

const products = [
  {
    name: "A2 Bilona Ghee",
    eyebrow: "TRADITIONAL GOODNESS",
    description:
      "Slow-crafted ghee inspired by traditional Indian preparation.",
    price: "₹899",
    size: "500 ml",
    image: "/assets/hero-section-1.jpeg",
    href: "/Products",
    background: "#F4C65D",
    text: "#173D2D",
  },
  {
    name: "Fresh Yogurt",
    eyebrow: "FARM FRESH",
    description:
      "Creamy everyday goodness made for simple, wholesome routines.",
    price: "₹149",
    size: "400 g",
    image: "/assets/home-yogurt-product.webp",
    href: "/Products/yogurt",
    background: "#DCE8BC",
    text: "#244A35",
  },
  {
    name: "Whey Protein",
    eyebrow: "EVERYDAY NUTRITION",
    description:
      "A stronger, food-first protein experience for your daily routine.",
    price: "₹1,499",
    size: "1 kg",
    image: "/assets/home-whey-brand.webp",
    href: "/Products/whey-protein",
    background: "#D77A52",
    text: "#432C24",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Thoughtful Ingredients",
    description: "Food made with a simpler, more considered approach.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description: "Care at every stage, from sourcing to packing.",
  },
  {
    icon: Sprout,
    title: "Traditional Roots",
    description: "Inspired by familiar Indian food traditions.",
  },
  {
    icon: Heart,
    title: "Made for Families",
    description: "Everyday products that belong around the family table.",
  },
  {
    icon: Truck,
    title: "Delivered with Care",
    description: "Packed thoughtfully and brought directly to your home.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#FFF8EA] text-[#24382B]">

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-[#173D2D] pt-32 text-[#FFF9EB]">
        <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-[#E5A12C]/25 blur-[110px]" />
        <div className="pointer-events-none absolute -right-24 bottom-4 h-96 w-96 rounded-full bg-[#91B96E]/20 blur-[120px]" />

        <div className="absolute left-[5%] top-[20%] text-[#8CB372]/25">
          <Leaf size={160} strokeWidth={0.7} />
        </div>

        <div className="absolute right-[3%] top-[10%] rotate-12 text-[#EBC568]/20">
          <Sprout size={180} strokeWidth={0.7} />
        </div>

        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F2C45A]/30 bg-white/5 px-4 py-2">
              <Sparkles size={14} className="text-[#F2C45A]" />
              <span className="text-[10px] font-semibold tracking-[0.28em] text-[#F2C45A]">
                PURE • ORGANIC • WHOLESOME
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[0.96] tracking-tight sm:text-6xl lg:text-[78px]">
              Food that feels
              <span className="block text-[#F2C45A]">
                closer to home.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#E8DFCF] sm:text-lg">
              Tiyas Foods brings together traditional inspiration, thoughtful
              ingredients and everyday nourishment for modern Indian families.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/Products"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F2C45A] px-6 py-3.5 text-sm font-bold text-[#173D2D] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD66D]"
              >
                Shop Our Products
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/Goodness"
                className="inline-flex items-center gap-3 rounded-full border border-[#FFF8E8]/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#FFF8E8] transition hover:bg-white/10"
              >
                Discover Our Goodness
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <Leaf className="mb-2 text-[#B6CF8D]" size={20} />
                <p className="text-xs font-semibold">Thoughtful</p>
                <p className="mt-1 text-[11px] text-[#BDB5A8]">Ingredients</p>
              </div>

              <div>
                <Heart className="mb-2 text-[#EAA37F]" size={20} />
                <p className="text-xs font-semibold">Made with</p>
                <p className="mt-1 text-[11px] text-[#BDB5A8]">Care</p>
              </div>

              <div>
                <Sprout className="mb-2 text-[#F2C45A]" size={20} />
                <p className="text-xs font-semibold">Traditional</p>
                <p className="mt-1 text-[11px] text-[#BDB5A8]">Roots</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[480px] lg:min-h-[650px]">
            <div className="absolute inset-0 overflow-hidden rounded-[45px] border border-white/10">
              <img
                src="/assets/hero-section-1.jpeg"
                alt="Tiyas Foods A2 Bilona Ghee"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173D2D]/65 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-8 left-6 rounded-[26px] border border-white/20 bg-[#173D2D]/80 p-5 backdrop-blur-md sm:left-8">
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#F2C45A]">
                SIGNATURE GOODNESS
              </p>
              <p className="mt-2 font-serif text-2xl">
                A2 Bilona Ghee
              </p>
              <p className="mt-1 text-xs text-[#D8D0C3]">
                Tradition in every spoon.
              </p>
            </div>

            <div className="absolute right-5 top-6 rotate-3 rounded-[24px] bg-[#FFF8E8] px-5 py-4 text-[#31513B] shadow-xl">
              <p className="font-serif text-lg leading-tight">
                Goodness tastes
                <br />
                better when
                <br />
                it feels real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLOUR STRIP */}
      <section className="bg-[#F3E5C8]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 text-sm md:grid-cols-3 lg:px-8">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Leaf size={18} className="text-[#477453]" />
            <span>Food-first ingredients</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FlaskConical size={18} className="text-[#C46943]" />
            <span>Thoughtful quality approach</span>
          </div>
          <div className="flex items-center justify-center gap-3 md:justify-end">
            <Truck size={18} className="text-[#C8922E]" />
            <span>Free delivery above ₹999</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="absolute -left-20 top-24 text-[#759D68]/10">
          <Leaf size={260} />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-[#C46943]">
                OUR PRODUCTS
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#234735] sm:text-5xl lg:text-6xl">
                Different kinds of goodness.
                <span className="block text-[#C86743]">
                  One thoughtful pantry.
                </span>
              </h2>
            </div>

            <Link
              href="/Products"
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#315C43]"
            >
              Explore the shop
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#315C43] text-white transition-transform group-hover:rotate-45">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group overflow-hidden rounded-[34px] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(74,58,38,0.14)]"
                style={{ backgroundColor: product.background }}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-[#FFF8EA]/90 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-[#315C43] backdrop-blur">
                    {product.eyebrow}
                  </div>

                  <div className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition-transform group-hover:rotate-45">
                    <ArrowRight size={18} />
                  </div>
                </div>

                <div
                  className="flex min-h-[200px] flex-col justify-between p-7"
                  style={{ color: product.text }}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs opacity-65">{product.size}</p>
                        <h3 className="mt-1 font-serif text-3xl">
                          {product.name}
                        </h3>
                      </div>

                      <div className="text-right">
                        <p className="text-[10px] opacity-60">From</p>
                        <p className="mt-1 text-xl font-bold">
                          {product.price}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 max-w-sm text-sm leading-6 opacity-75">
                      {product.description}
                    </p>
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-[0.16em]">
                    SHOP NOW →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TIYAS */}
      <section className="relative overflow-hidden bg-[#EAF0D9] py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-16 -bottom-20 text-[#63865C]/10">
          <Sprout size={300} />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.28em] text-[#B96642]">
              WHY CHOOSE TIYAS FOODS?
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#234735] sm:text-5xl">
              Real food. Real everyday goodness.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              const bgColors = [
                "#FFF8E8",
                "#F4D98B",
                "#D9E5B8",
                "#E4B097",
                "#F5EAD3",
              ];

              return (
                <div
                  key={benefit.title}
                  className="rounded-[28px] border border-[#C8D0B5]/60 p-6 text-center transition duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: bgColors[index] }}
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/70 text-[#315C43]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 font-serif text-xl text-[#294A36]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#5F665D]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAMILY STORY */}
      <section className="bg-[#FFF8EA] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-2">
          <div className="group relative min-h-[520px] overflow-hidden rounded-[40px] bg-[#EED8B6]">
            <img
              src="/assets/home-family.webp"
              alt="Family enjoying wholesome food"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#32261D]/80 via-[#32261D]/10 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white sm:p-10">
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#FFD376]">
                GOOD FOOD BRINGS US CLOSER
              </p>

              <h2 className="mt-3 max-w-md font-serif text-4xl leading-tight">
                Happier families.
                <br />
                Healthier tomorrows.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#EFE6DD]">
                Food is more than nutrition. It is routine, memory, family and
                the everyday moments shared around a table.
              </p>

              <Link
                href="/Goodness"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F2C45A] px-5 py-3 text-sm font-bold text-[#294A36]"
              >
                Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] bg-[#DCE7BF] p-8 sm:p-10 lg:p-12">
            <div className="absolute -right-12 -top-16 text-[#54784E]/15">
              <Leaf size={240} />
            </div>

            <div className="relative">
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#B96541]">
                FROM OUR ROOTS TO YOUR HOME
              </p>

              <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight text-[#244734] sm:text-5xl">
                Food you can trust from people who care.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#586557]">
                Tiyas Foods is being built around a simple belief: food should
                feel familiar, thoughtfully made and easy to understand.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[26px] bg-[#FFF8EA]/75 p-6">
                  <Sprout size={22} className="text-[#477453]" />
                  <h3 className="mt-4 font-serif text-xl text-[#244734]">
                    Traditional Inspiration
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#667064]">
                    Products inspired by familiar Indian preparation and
                    everyday food culture.
                  </p>
                </div>

                <div className="rounded-[26px] bg-[#F2C45A]/65 p-6">
                  <Users size={22} className="text-[#315C43]" />
                  <h3 className="mt-4 font-serif text-xl text-[#244734]">
                    People First
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#596052]">
                    Designed around families, routines and food people actually
                    enjoy every day.
                  </p>
                </div>
              </div>

              <Link
                href="/Goodness"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#315C43] px-6 py-3 text-sm font-bold text-white"
              >
                Discover the Tiyas Way
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#C86743] px-7 py-12 text-[#FFF8E8] sm:px-12 lg:px-16">
          <div className="absolute -left-12 bottom-0 text-[#F4C45C]/20">
            <Leaf size={220} />
          </div>

          <div className="absolute -right-10 -top-10 text-[#7FA36C]/25">
            <Sprout size={220} />
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-[10px] font-bold tracking-[0.28em] text-[#FFE295]">
                JOIN OUR WHOLESOME JOURNEY
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
                A little goodness,
                <br />
                delivered occasionally.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#FFF0E5]">
                Product updates, food stories and special offers from Tiyas
                Foods.
              </p>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="rounded-[30px] bg-[#173D2D] p-4 sm:flex sm:items-center sm:gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 w-full rounded-full border border-white/10 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#F2C45A]"
              />

              <button
                type="submit"
                className="mt-3 h-12 w-full shrink-0 rounded-full bg-[#F2C45A] px-6 text-sm font-bold text-[#173D2D] transition hover:bg-[#FFD978] sm:mt-0 sm:w-auto"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}