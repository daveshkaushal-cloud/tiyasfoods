"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Leaf,
  Milk,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Star,
  Truck,
  Users,
  Utensils,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                  PRODUCTS                                  */
/* -------------------------------------------------------------------------- */

const products = [
  {
    number: "01",
    name: "A2 Bilona Ghee",
    shortName: "Ghee",
    eyebrow: "TRADITIONAL GOODNESS",
    description:
      "Inspired by traditional Indian kitchens, our A2 Bilona Ghee brings warmth, familiarity and rich flavour to everyday meals.",
    longDescription:
      "A pantry staple created around a simple idea — keep traditional food culture relevant for modern homes. From tadka and rotis to festive recipes, it is designed to become part of everyday family cooking.",
    price: "₹899",
    size: "500 ml",
    image: "/assets/hero-section-1.jpeg",
    href: "/Products",
    accent: "#E4A52F",
    surface: "#F5CD67",
    dark: "#284A35",
    benefits: [
      "Traditional food inspiration",
      "Rich everyday cooking experience",
      "Made for Indian kitchens",
    ],
  },
  {
    number: "02",
    name: "Whey Protein",
    shortName: "Protein",
    eyebrow: "EVERYDAY NUTRITION",
    description:
      "A modern protein product presented with the warmth of a food brand — approachable, practical and designed for everyday routines.",
    longDescription:
      "Instead of making nutrition feel clinical or intimidating, Tiyas Protein is positioned as a simple daily habit for active lifestyles, busy schedules and people looking to make more considered food choices.",
    price: "₹1,499",
    size: "1 kg",
    image: "/assets/home-whey-brand.webp",
    href: "/Products/whey-protein",
    accent: "#CB7048",
    surface: "#E2A17F",
    dark: "#573A2B",
    benefits: [
      "Routine-friendly nutrition",
      "Modern food-first identity",
      "Easy everyday use",
    ],
  },
  {
    number: "03",
    name: "Fresh Yogurt",
    shortName: "Yogurt",
    eyebrow: "CREAMY & FRESH",
    description:
      "Fresh, creamy and comforting — yogurt designed to fit naturally into breakfast, meals, snacks and everyday family routines.",
    longDescription:
      "Simple food often creates the strongest habits. Tiyas Yogurt is built around freshness, familiarity and versatility — something you can enjoy on its own or make part of everyday recipes.",
    price: "₹149",
    size: "400 g",
    image: "/assets/home-yogurt-product.webp",
    href: "/Products/yogurt",
    accent: "#77925C",
    surface: "#DCE8BC",
    dark: "#304D36",
    benefits: [
      "Creamy everyday staple",
      "Versatile meal companion",
      "Family-friendly food",
    ],
  },
  {
    number: "04",
    name: "Hung Curd",
    shortName: "Hung Curd",
    eyebrow: "THICK & WHOLESOME",
    description:
      "A thick, creamy kitchen favourite inspired by the familiar process of patiently straining curd.",
    longDescription:
      "Hung curd is simple, versatile and deeply familiar to Indian kitchens. Use it for dips, sandwiches, marinades, spreads, bowls and dishes that need a richer, creamier texture.",
    price: "Coming Soon",
    size: "Fresh Batch",
    image: "/assets/home-hung-curd-product.webp",
    fallback: "/assets/home-yogurt-product.webp",
    href: "/ComingSoon",
    accent: "#C78A3B",
    surface: "#F0DEAF",
    dark: "#504430",
    benefits: [
      "Thick creamy texture",
      "Versatile recipe ingredient",
      "Inspired by traditional preparation",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                   VALUES                                   */
/* -------------------------------------------------------------------------- */

const values = [
  {
    icon: Leaf,
    title: "Thoughtful Ingredients",
    text: "Products built around simpler food choices and familiar ingredients.",
    bg: "#E2EDC8",
  },
  {
    icon: Heart,
    title: "Made for Families",
    text: "Food designed to belong naturally in everyday family routines.",
    bg: "#F4D5C4",
  },
  {
    icon: Sprout,
    title: "Traditional Roots",
    text: "Inspired by food traditions that have lived in Indian homes for generations.",
    bg: "#F6DF99",
  },
  {
    icon: ShieldCheck,
    title: "Quality Mindset",
    text: "A considered approach from product selection through packaging and delivery.",
    bg: "#DCE7D7",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#FFF8EA] text-[#24382B]">

      {/* ==================================================================== */}
      {/* HERO                                                                 */}
      {/* ==================================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#173D2D] pt-32 text-[#FFF9EB]">
        <div className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#D89929]/20 blur-[140px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-[#789F65]/20 blur-[140px]" />

        <div className="pointer-events-none absolute left-[2%] top-[20%] rotate-[-16deg] text-[#7AA169]/15">
          <Leaf size={240} strokeWidth={0.55} />
        </div>

        <div className="pointer-events-none absolute right-[1%] top-[8%] rotate-12 text-[#E9BC53]/15">
          <Sprout size={220} strokeWidth={0.55} />
        </div>

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">

          {/* HERO COPY */}
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F2C45A]/30 bg-white/5 px-4 py-2 backdrop-blur">
              <Sparkles size={14} className="text-[#F2C45A]" />
              <span className="text-[10px] font-bold tracking-[0.28em] text-[#F2C45A]">
                PURE • ORGANIC • WHOLESOME
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-[54px] leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-[92px]">
              Good food
              <span className="block text-[#F2C45A]">feels like</span>
              <span className="italic text-[#E9E0D0]">home.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#DDD5C7] sm:text-lg">
              Tiyas Foods brings together traditional inspiration, thoughtful
              ingredients and modern everyday nutrition for families who want
              food to feel simple, familiar and meaningful.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/Products"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F2C45A] px-7 py-4 text-sm font-bold text-[#173D2D] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD76F]"
              >
                Explore Our Products
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/Goodness"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold transition hover:bg-white/10"
              >
                The Tiyas Story
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
              <div>
                <Leaf size={19} className="mb-3 text-[#A8C887]" />
                <p className="text-sm font-semibold">Thoughtful</p>
                <p className="mt-1 text-xs text-[#AAA398]">Ingredients</p>
              </div>

              <div>
                <Heart size={19} className="mb-3 text-[#E49A78]" />
                <p className="text-sm font-semibold">Made with</p>
                <p className="mt-1 text-xs text-[#AAA398]">Care</p>
              </div>

              <div>
                <Sprout size={19} className="mb-3 text-[#F2C45A]" />
                <p className="text-sm font-semibold">Traditional</p>
                <p className="mt-1 text-xs text-[#AAA398]">Roots</p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative min-h-[540px] lg:min-h-[700px]">
            <div className="absolute inset-0 overflow-hidden rounded-[48px] border border-white/10">
              <img
                src="/assets/hero-section-1.jpeg"
                alt="Tiyas Foods A2 Bilona Ghee"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173D2D]/75 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-7 left-6 max-w-xs rounded-[28px] border border-white/15 bg-[#173D2D]/80 p-6 backdrop-blur-xl sm:left-8">
              <p className="text-[9px] font-bold tracking-[0.28em] text-[#F2C45A]">
                SIGNATURE GOODNESS
              </p>

              <p className="mt-3 font-serif text-3xl">
                A2 Bilona Ghee
              </p>

              <p className="mt-2 text-sm leading-6 text-[#D5CEC3]">
                Traditional inspiration for the modern family kitchen.
              </p>
            </div>

            <div className="absolute right-5 top-7 rotate-3 rounded-[25px] bg-[#FFF8EA] px-6 py-5 text-[#31513B] shadow-2xl">
              <Heart size={18} className="mb-3 text-[#C96845]" />
              <p className="font-serif text-xl leading-tight">
                Wholesome food.
                <br />
                Happier tables.
              </p>
            </div>
          </div>
        </div>

        {/* SCROLL CUE */}
        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/45 md:flex">
          <span className="text-[8px] tracking-[0.28em]">DISCOVER TIYAS</span>
          <ChevronDown size={15} />
        </div>
      </section>

      {/* ==================================================================== */}
      {/* QUICK TRUST STRIP                                                    */}
      {/* ==================================================================== */}

      <section className="border-b border-[#E3D5BC] bg-[#F3E5C8]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            [Leaf, "Thoughtful Food", "Made for everyday living"],
            [PackageCheck, "Carefully Packed", "Prepared for your pantry"],
            [Truck, "Home Delivery", "Free above ₹999"],
            [Heart, "Family Focused", "Made to feel familiar"],
          ].map(([Icon, title, text]) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl px-2 py-2"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#FFF8EA] text-[#3D674B]">
                <Icon size={18} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#294936]">{title}</p>
                <p className="mt-1 text-xs text-[#77756D]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* BRAND INTRO                                                          */}
      {/* ==================================================================== */}

      <section className="relative bg-[#FFF8EA] px-6 py-24 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute -right-20 top-20 text-[#62815B]/8">
          <Leaf size={360} />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#C56743]">
              THE TIYAS PHILOSOPHY
            </p>

            <div className="mt-5 h-px w-20 bg-[#D79B38]" />
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] text-[#244734] sm:text-5xl lg:text-6xl">
              We believe everyday food does not need to be complicated.
              <span className="block italic text-[#C56945]">
                It simply needs to feel right.
              </span>
            </h2>

            <div className="mt-9 grid gap-7 text-sm leading-7 text-[#687066] md:grid-cols-2">
              <p>
                At Tiyas Foods, we are building products around food people
                already understand — ghee, yogurt, hung curd and everyday
                nutrition — and presenting them with more care, clarity and
                personality.
              </p>

              <p>
                Our aim is to create a modern Indian food brand that feels
                colourful and contemporary without losing the warmth,
                familiarity and emotional connection of home food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* ALL FOUR PRODUCTS                                                    */}
      {/* ==================================================================== */}

      <section className="bg-[#EAF0DC] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#B85F40]">
                OUR COLLECTION
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#244734] sm:text-5xl lg:text-6xl">
                Four products.
                <span className="block text-[#B96B47]">
                  Four everyday rituals.
                </span>
              </h2>
            </div>

            <Link
              href="/Products"
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#315C43]"
            >
              Shop the collection

              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#315C43] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group overflow-hidden rounded-[38px] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(61,77,53,0.15)]"
                style={{ backgroundColor: product.surface }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(event) => {
                      if (product.fallback) {
                        event.currentTarget.src = product.fallback;
                      }
                    }}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  <div className="absolute left-6 top-6 flex items-center gap-3">
                    <span className="rounded-full bg-[#FFF8EA]/90 px-4 py-2 text-[9px] font-bold tracking-[0.18em] text-[#31513C] backdrop-blur">
                      {product.eyebrow}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs text-white/70">
                      {product.size}
                    </p>

                    <h3 className="mt-1 font-serif text-3xl sm:text-4xl">
                      {product.name}
                    </h3>
                  </div>

                  <div className="absolute bottom-6 right-6 grid h-13 w-13 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition-transform duration-300 group-hover:rotate-45">
                    <ArrowRight size={18} />
                  </div>
                </div>

                <div
                  className="p-7 sm:p-8"
                  style={{ color: product.dark }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <p className="max-w-md text-sm leading-6 opacity-80">
                      {product.description}
                    </p>

                    <div className="shrink-0 text-right">
                      <p className="text-[9px] uppercase tracking-wider opacity-60">
                        From
                      </p>
                      <p className="mt-1 font-serif text-xl">
                        {product.price}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full border border-black/10 bg-white/35 px-3 py-2 text-[10px] font-semibold"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* GHEE STORY                                                           */}
      {/* ==================================================================== */}

      <section className="bg-[#F4C65D] px-6 py-24 text-[#294936] lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[46px]">
              <img
                src="/assets/hero-section-1.jpeg"
                alt="Tiyas Foods ghee"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 max-w-[250px] rounded-[28px] bg-[#FFF8EA] p-6 shadow-xl sm:right-[-25px]">
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#B86743]">
                THE EVERYDAY SPOON
              </p>

              <p className="mt-3 font-serif text-2xl">
                Familiar food.
                <br />
                Beautifully presented.
              </p>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#805F20]">
              01 · A2 BILONA GHEE
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-6xl">
              Tradition deserves
              <span className="block italic text-[#8F4F31]">
                a place in modern kitchens.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#425941]">
              Ghee has always been more than an ingredient. It carries memory,
              aroma, family recipes and the feeling of food made at home. Tiyas
              brings that familiar experience into a contemporary food brand.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Made for everyday Indian cooking",
                "Suitable for tadka, rotis and family recipes",
                "Warm, traditional brand experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-[#284A35] text-[#F4C65D]">
                    <Check size={13} />
                  </div>

                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/Products"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#284A35] px-7 py-4 text-sm font-bold text-white"
            >
              Discover Our Ghee
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* PROTEIN STORY                                                        */}
      {/* ==================================================================== */}

      <section className="bg-[#573A2B] px-6 py-24 text-[#FFF3E6] lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#EFA77B]">
              02 · WHEY PROTEIN
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[1.02] sm:text-6xl">
              Nutrition without
              <span className="block italic text-[#E39A71]">
                the intimidating gym aesthetic.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#E5D1C4]">
              We want protein to feel like part of normal life — not something
              reserved only for athletes. Tiyas Protein is designed as a warmer,
              more approachable everyday nutrition product.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Morning", "Add it to your routine"],
                ["02", "Post Workout", "Simple daily nutrition"],
                ["03", "On the Go", "Made for busy days"],
              ].map(([n, title, desc]) => (
                <div
                  key={n}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-[9px] font-bold tracking-wider text-[#EFA77B]">
                    {n}
                  </p>
                  <p className="mt-3 font-serif text-xl">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-[#C9B5A9]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/Products/whey-protein"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#E89B70] px-7 py-4 text-sm font-bold text-[#573A2B]"
            >
              Explore Tiyas Protein
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[46px] border border-white/10">
              <img
                src="/assets/home-whey-brand.webp"
                alt="Tiyas Foods Whey Protein"
                className="aspect-[4/4.6] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-[26px] border border-white/10 bg-[#38241C]/90 p-5 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.2em] text-[#EAA17A]">
                    DAILY NUTRITION
                  </p>
                  <p className="mt-1 font-serif text-xl">
                    Stronger routines start simply.
                  </p>
                </div>

                <Sparkles size={22} className="text-[#EAA17A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* YOGURT STORY                                                         */}
      {/* ==================================================================== */}

      <section className="bg-[#DDE9BE] px-6 py-24 text-[#294936] lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-16 -top-10 text-[#617E55]/15">
              <Leaf size={230} />
            </div>

            <div className="relative overflow-hidden rounded-[46px] bg-[#EEF4DD] p-4">
              <img
                src="/assets/home-yogurt-product.webp"
                alt="Tiyas Foods Yogurt"
                className="aspect-square w-full rounded-[35px] object-cover"
              />
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#687D44]">
              03 · FRESH YOGURT
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-6xl">
              Creamy simplicity
              <span className="block italic text-[#B6694A]">
                for everyday meals.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5C6959]">
              Breakfast bowls, lunchtime meals, cooling sides or an evening
              snack — yogurt is one of those foods that fits naturally into
              almost every part of the day.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[25px] bg-[#FFF8EA]/75 p-6">
                <Utensils size={21} className="text-[#53714C]" />
                <p className="mt-4 font-serif text-xl">With meals</p>
                <p className="mt-2 text-sm leading-6 text-[#687166]">
                  A simple companion for everyday home food.
                </p>
              </div>

              <div className="rounded-[25px] bg-[#F3C96F]/70 p-6">
                <Heart size={21} className="text-[#53714C]" />
                <p className="mt-4 font-serif text-xl">As a snack</p>
                <p className="mt-2 text-sm leading-6 text-[#687166]">
                  Fresh, creamy and easy to enjoy on its own.
                </p>
              </div>
            </div>

            <Link
              href="/Products/yogurt"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#315C43] px-7 py-4 text-sm font-bold text-white"
            >
              Explore Fresh Yogurt
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* HUNG CURD STORY                                                      */}
      {/* ==================================================================== */}

      <section className="bg-[#FFF2D5] px-6 py-24 text-[#504430] lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#B4772D]">
              04 · HUNG CURD
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[1.02] sm:text-6xl">
              Thick. Creamy.
              <span className="block italic text-[#A86440]">
                Wonderfully versatile.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#6D6658]">
              Hung curd is a familiar kitchen technique turned into an
              incredibly useful everyday ingredient. Creamy enough for dips and
              spreads, yet versatile enough for marinades, bowls and recipes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Dips",
                "Sandwiches",
                "Marinades",
                "Breakfast Bowls",
                "Spreads",
                "Everyday Cooking",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#CDAE7A] bg-white/45 px-4 py-2 text-xs font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/ComingSoon"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#B87D34] px-7 py-4 text-sm font-bold text-white"
            >
              Discover Hung Curd
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[46px] bg-[#E9D2A5] p-4">
              <img
                src="/assets/home-hung-curd-product.webp"
                alt="Tiyas Foods Hung Curd"
                onError={(event) => {
                  event.currentTarget.src =
                    "/assets/home-yogurt-product.webp";
                }}
                className="aspect-square w-full rounded-[35px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-[28px] bg-[#B87D34] p-6 text-white shadow-xl sm:left-[-30px]">
              <Milk size={21} />
              <p className="mt-4 font-serif text-2xl leading-tight">
                Familiar process.
                <br />
                Modern pantry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* HOW WE THINK ABOUT FOOD                                              */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden bg-[#FFF8EA] px-6 py-24 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute -right-24 -top-24 text-[#597850]/8">
          <Sprout size={400} />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#B96041]">
              OUR APPROACH
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#244734] sm:text-5xl lg:text-6xl">
              Food designed around
              <span className="block italic text-[#C06948]">
                real life.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6B7169]">
              We are not trying to reinvent the foods people already love.
              We want to make them feel more considered, approachable and
              relevant to modern homes.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[30px] p-7 transition duration-300 hover:-translate-y-2"
                  style={{ backgroundColor: value.bg }}
                >
                  <div className="grid h-13 w-13 place-items-center rounded-full bg-white/70 text-[#315C43]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[#294936]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687066]">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FAMILY / LIFESTYLE                                                   */}
      {/* ==================================================================== */}

      <section className="px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1.2fr_0.8fr]">

          <div className="group relative min-h-[620px] overflow-hidden rounded-[44px]">
            <img
              src="/assets/home-family.webp"
              alt="Family enjoying food together"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2D23]/90 via-[#1C2D23]/15 to-transparent" />

            <div className="absolute bottom-0 max-w-2xl p-8 text-white sm:p-12">
              <p className="text-[10px] font-bold tracking-[0.28em] text-[#F4C65D]">
                WHY WE EXIST
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Because the best food memories happen around a table.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#E4DED5]">
                Our products are ultimately about the small moments — breakfast
                before school, family lunches, post-workout routines, evening
                snacks and recipes passed between generations.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex-1 rounded-[40px] bg-[#C56743] p-8 text-[#FFF8EA] sm:p-10">
              <Heart size={28} className="text-[#FFD17B]" />

              <p className="mt-8 text-[10px] font-bold tracking-[0.27em] text-[#FFD17B]">
                PEOPLE BEFORE PRODUCTS
              </p>

              <h3 className="mt-4 font-serif text-4xl leading-tight">
                A food brand should feel human.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#FFE9DC]">
                Warm photography, clear communication and products that make
                sense in daily life are at the heart of how we want Tiyas to
                grow.
              </p>
            </div>

            <div className="flex-1 rounded-[40px] bg-[#315C43] p-8 text-white sm:p-10">
              <ShoppingBag size={27} className="text-[#F4C65D]" />

              <p className="mt-8 text-[10px] font-bold tracking-[0.27em] text-[#F4C65D]">
                BUILD YOUR PANTRY
              </p>

              <h3 className="mt-4 font-serif text-4xl leading-tight">
                Start with something good.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#DCE4DA]">
                Explore the growing Tiyas collection and find the products that
                belong in your everyday routine.
              </p>

              <Link
                href="/Products"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#F4C65D] px-6 py-3.5 text-sm font-bold text-[#284A35]"
              >
                Shop Tiyas Foods
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* BRAND STATEMENT                                                      */}
      {/* ==================================================================== */}

      <section className="bg-[#173D2D] px-6 py-24 text-center text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <Sparkles className="mx-auto text-[#F4C65D]" size={25} />

          <p className="mt-7 text-[10px] font-bold tracking-[0.3em] text-[#F4C65D]">
            PURE • ORGANIC • WHOLESOME
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            From familiar traditions
            <span className="block italic text-[#F4C65D]">
              to modern tables.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#D2D9D0]">
            Tiyas Foods is our attempt to build a colourful, trustworthy and
            distinctly Indian food brand around products people can genuinely
            make part of everyday life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/Products"
              className="inline-flex items-center gap-3 rounded-full bg-[#F4C65D] px-7 py-4 text-sm font-bold text-[#173D2D]"
            >
              Explore All Products
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/Goodness"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* NEWSLETTER                                                           */}
      {/* ==================================================================== */}

      <section className="bg-[#FFF8EA] px-6 py-20 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[44px] bg-[#D47750] px-7 py-14 text-[#FFF8EA] sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute -left-16 -bottom-16 text-[#FFD177]/20">
            <Leaf size={260} />
          </div>

          <div className="pointer-events-none absolute -right-12 -top-16 text-[#96B274]/22">
            <Sprout size={250} />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#FFE39C]">
                STAY CLOSE TO THE GOOD STUFF
              </p>

              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
                New products.
                <br />
                Food stories.
                <br />
                A little goodness.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#FFE8DB]">
                Join the Tiyas Foods community for product updates, special
                launches and stories from our growing pantry.
              </p>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="rounded-[32px] bg-[#173D2D] p-5"
            >
              <p className="mb-4 text-sm font-semibold">
                Join our wholesome journey
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-13 flex-1 rounded-full border border-white/10 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#F4C65D]"
                />

                <button
                  type="submit"
                  className="h-13 shrink-0 rounded-full bg-[#F4C65D] px-7 text-sm font-bold text-[#173D2D]"
                >
                  Subscribe →
                </button>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-white/45">
                No clutter. Just occasional Tiyas Foods updates.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}