"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import data from "../../../../data.json";

gsap.registerPlugin(ScrollTrigger);

const products = data.products || [];

const cardThemes = [
  { bg: "#F2C45A", text: "#2D3529", imageBg: "#E7B749" },
  { bg: "#A9BE7A", text: "#2C3C2B", imageBg: "#91AB64" },
  { bg: "#D8794D", text: "#FFF7EC", imageBg: "#C96740" },
];

export default function ProductList() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".goodness-product-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FFF8EB] px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#B65F3D]">OUR COLLECTION</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#234735] md:text-6xl">
              Different kinds of goodness.
              <span className="block text-[#D26F45]">One thoughtful pantry.</span>
            </h2>
          </div>

          <Link href="/Products" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#315B45]">
            Explore the shop
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#315B45] text-white transition group-hover:translate-x-1">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => {
            const theme = cardThemes[index % cardThemes.length];
            const href = product.href || "/Products";

            return (
              <Link
                href={href}
                key={product.name}
                className="goodness-product-card group overflow-hidden rounded-[34px] shadow-[0_22px_50px_rgba(92,63,37,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(92,63,37,0.13)]"
                style={{ backgroundColor: theme.bg, color: theme.text }}
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{ backgroundColor: theme.imageBg }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#FFF9EE]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#30402E] shadow-sm backdrop-blur-sm">
                    {product.category}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-xs text-white/80">{product.size}</p>
                      <h3 className="mt-1 font-serif text-2xl leading-tight sm:text-3xl">{product.name}</h3>
                    </div>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.22em] opacity-65">TIYAS GOODNESS</p>
                    <p className="mt-2 text-sm opacity-80">Thoughtfully made for everyday routines.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-60">From</p>
                    <p className="mt-1 text-xl font-bold">{product.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 rounded-[28px] bg-[#234735] px-6 py-5 text-center text-sm text-[#FFF7E8]">
          <Sparkles size={17} className="text-[#F3C258]" />
          A small collection by design — focused on products we can stand behind.
        </div>
      </div>
    </section>
  );
}
