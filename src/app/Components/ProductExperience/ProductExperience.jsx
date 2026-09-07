"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  Leaf,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const details = {
  whey: {
    id: 3,
    name: "Whey Protein",
    category: "Everyday Protein",
    size: "1 kg",
    price: 1499,
    oldPrice: 1699,
    rating: 4.8,
    reviews: 86,
    image: "/assets/hero-section-2.jpeg",
    badge: "DAILY NUTRITION",
    eyebrow: "POWER • PROTEIN • PURE",
    headline: "Strong nutrition, without the gym-store feel.",
    intro:
      "A warm, approachable protein experience made for everyday routines — simple to understand, easy to use and designed to feel like food first.",
    storyTitle: "Protein that belongs in your everyday pantry.",
    story:
      "Tiyas Whey Protein is positioned as an everyday nutrition staple rather than a harsh performance product. The experience focuses on simplicity, routine and a more natural food-first identity.",
    benefits: [
      "Designed for everyday nutrition routines",
      "Simple, approachable product experience",
      "Easy to add to shakes and breakfast routines",
      "Packed with the same care as the rest of the Tiyas pantry",
    ],
    uses: ["Morning shake", "Post-workout routine", "Smoothies", "Breakfast bowls"],
    note: "Nutritional values and ingredient details should match the final approved product label before launch.",
    colors: {
      page: "#F6EAD8",
      hero: "#573A2B",
      heroSoft: "#6A4938",
      accent: "#C86F42",
      gold: "#DDA63A",
      sage: "#81936B",
      paper: "#FFF8E8",
      text: "#3D2C24",
      muted: "#7E6A5D",
    },
  },
  yogurt: {
    id: 4,
    name: "Fresh Yogurt",
    category: "Farm Fresh Dairy",
    size: "400 g",
    price: 149,
    oldPrice: 179,
    rating: 4.9,
    reviews: 72,
    image: "/assets/hero-section-3.jpeg",
    badge: "FRESH & CREAMY",
    eyebrow: "FRESH • CREAMY • COMFORTING",
    headline: "A brighter, fresher corner of the Tiyas pantry.",
    intro:
      "Soft colours, creamy textures and a farm-fresh mood make this product feel light, familiar and made for everyday meals.",
    storyTitle: "The kind of freshness that feels close to home.",
    story:
      "Tiyas Fresh Yogurt is presented as an everyday dairy essential with a softer visual language — clean, creamy and comforting, with enough colour to feel fresh without looking artificial.",
    benefits: [
      "Fresh, creamy everyday dairy experience",
      "Made to fit naturally into regular meals",
      "A simple pantry staple for sweet or savoury pairings",
      "Packed and presented with a fresh, home-style identity",
    ],
    uses: ["Breakfast bowls", "Raita", "Fruit & granola", "Everyday meals"],
    note: "Ingredient, storage and nutrition information should be taken from the final approved yogurt packaging before launch.",
    colors: {
      page: "#FFF9EC",
      hero: "#A9BE7A",
      heroSoft: "#BDCB97",
      accent: "#C76F76",
      gold: "#E5B74E",
      sage: "#6E8A62",
      paper: "#FFFDF7",
      text: "#34402F",
      muted: "#6F756A",
    },
  },
};

export default function ProductExperience({ type }) {
  const product = details[type];
  const { addToCart, isInCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const inCart = isInCart(product.id);
  const saving = product.oldPrice - product.price;
  const total = useMemo(() => product.price * quantity, [product.price, quantity]);

  const addSelectedQuantity = () => {
    for (let i = 0; i < quantity; i += 1) addToCart(product);
  };

  return (
    <main style={{ backgroundColor: product.colors.page, color: product.colors.text }} className="min-h-screen">
      <section style={{ backgroundColor: product.colors.hero }} className="relative overflow-hidden pt-32 text-white">
        <div
          className="absolute -left-20 top-28 h-80 w-80 rounded-full blur-[110px]"
          style={{ backgroundColor: `${product.colors.accent}55` }}
        />
        <div
          className="absolute -right-20 bottom-0 h-96 w-96 rounded-full blur-[120px]"
          style={{ backgroundColor: `${product.colors.sage}55` }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <Link href="/Products" className="mb-10 inline-flex items-center gap-2 text-xs text-white/70 transition hover:text-white">
            <ArrowLeft size={15} /> Back to the pantry
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative">
              <div
                className="absolute inset-10 rounded-full blur-3xl"
                style={{ backgroundColor: `${product.colors.gold}30` }}
              />
              <div className="relative overflow-hidden rounded-[42px] border border-white/15 bg-white/8 p-5 backdrop-blur-sm sm:p-8">
                <div className="absolute left-6 top-6 z-10 rounded-full bg-white/90 px-4 py-2 text-[9px] font-bold tracking-[0.2em]" style={{ color: product.colors.hero }}>
                  {product.badge}
                </div>
                <img src={product.image} alt={product.name} className="aspect-square w-full rounded-[30px] object-cover" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-[0.25em]">
                <Leaf size={14} /> {product.eyebrow}
              </div>

              <h1 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">{product.name}</h1>
              <p className="mt-5 max-w-xl font-serif text-2xl leading-snug" style={{ color: product.colors.gold }}>{product.headline}</p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">{product.intro}</p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm">
                  <Star size={15} fill="currentColor" style={{ color: product.colors.gold }} />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-white/55">({product.reviews})</span>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm">{product.size}</div>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-white/55">YOUR PRICE</p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-3xl font-bold">₹{product.price.toLocaleString("en-IN")}</span>
                      <span className="text-base text-white/45 line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
                    </div>
                    <p className="mt-1 text-xs" style={{ color: product.colors.gold }}>Save ₹{saving.toLocaleString("en-IN")}</p>
                  </div>

                  <div className="flex items-center rounded-full border border-white/15 bg-black/10 p-1.5">
                    <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10"><Minus size={15} /></button>
                    <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
                    <button onClick={() => setQuantity((q) => q + 1)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10"><Plus size={15} /></button>
                  </div>
                </div>

                <button
                  onClick={addSelectedQuantity}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold transition hover:-translate-y-0.5"
                  style={{ backgroundColor: product.colors.gold, color: product.colors.text }}
                >
                  <ShoppingBag size={18} /> {inCart ? `Add ${quantity} more • ₹${total.toLocaleString("en-IN")}` : `Add to Cart • ₹${total.toLocaleString("en-IN")}`}
                </button>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/60">
                  <span className="inline-flex items-center gap-1.5"><Truck size={13} /> Free delivery above ₹999</span>
                  <span className="inline-flex items-center gap-1.5"><ShieldCheck size={13} /> Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[36px] p-8 sm:p-10" style={{ backgroundColor: product.colors.paper }}>
            <p className="text-[10px] font-bold tracking-[0.25em]" style={{ color: product.colors.accent }}>WHY IT FEELS DIFFERENT</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">{product.storyTitle}</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7" style={{ color: product.colors.muted }}>{product.story}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {product.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl border p-4" style={{ borderColor: `${product.colors.sage}55`, backgroundColor: `${product.colors.page}88` }}>
                  <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full" style={{ backgroundColor: `${product.colors.sage}25`, color: product.colors.sage }}><Check size={14} /></div>
                  <span className="text-sm leading-6">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            <div className="rounded-[36px] p-8 text-white sm:p-10" style={{ backgroundColor: product.colors.accent }}>
              <Sparkles size={24} />
              <p className="mt-5 text-[10px] font-bold tracking-[0.25em] text-white/70">MAKE IT YOUR ROUTINE</p>
              <h3 className="mt-3 font-serif text-3xl">Simple ways to enjoy it.</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {product.uses.map((use, index) => (
                  <div key={use} className="rounded-2xl bg-white/12 p-4">
                    <p className="text-[10px] text-white/55">0{index + 1}</p>
                    <p className="mt-2 text-sm font-semibold">{use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border p-6" style={{ borderColor: `${product.colors.sage}55`, backgroundColor: `${product.colors.sage}12` }}>
              <p className="text-xs font-bold tracking-[0.18em]" style={{ color: product.colors.sage }}>LABEL NOTE</p>
              <p className="mt-3 text-xs leading-6" style={{ color: product.colors.muted }}>{product.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: product.colors.paper }} className="border-y border-black/5">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-10 sm:grid-cols-3 lg:px-8">
          <div className="flex items-start gap-3"><Leaf size={19} style={{ color: product.colors.sage }} /><div><p className="font-semibold">Food-first identity</p><p className="mt-1 text-xs leading-5" style={{ color: product.colors.muted }}>Designed to feel part of the Tiyas pantry, not a generic catalogue.</p></div></div>
          <div className="flex items-start gap-3"><ShieldCheck size={19} style={{ color: product.colors.accent }} /><div><p className="font-semibold">Clear product story</p><p className="mt-1 text-xs leading-5" style={{ color: product.colors.muted }}>Benefits, usage and buying information are easier to understand.</p></div></div>
          <div className="flex items-start gap-3"><Truck size={19} style={{ color: product.colors.gold }} /><div><p className="font-semibold">Connected shopping flow</p><p className="mt-1 text-xs leading-5" style={{ color: product.colors.muted }}>Add to cart here, then continue through the same Tiyas checkout flow.</p></div></div>
        </div>
      </section>
    </main>
  );
}
