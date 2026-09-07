"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import data from "../../../data.json";

const products = data.products || [];

export default function ProductList() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">OUR COLLECTION</p>
            <h2 className="font-display text-4xl md:text-6xl">Goodness in <span className="text-[#f5b82e]">every bite.</span></h2>
          </div>
          <Link href="/Products" className="group flex items-center gap-2 text-sm text-stone-400 transition hover:text-[#f5b82e]">View all products <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.name} href={product.href || "/Products"} className="product-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition hover:-translate-y-1 hover:border-[#f5b82e]/30">
              <div className="relative h-90 overflow-hidden">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0c0a09] via-transparent to-transparent opacity-70" />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-wider text-stone-300 backdrop-blur-md">{product.category}</span>
                <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full gold-gradient text-[#0c0a09] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100"><ArrowUpRight size={17} /></span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div><h3 className="font-display text-xl">{product.name}</h3><p className="mt-1 text-xs text-stone-500">{product.size}</p></div>
                  <p className="font-semibold text-[#ffd166]">{product.price}</p>
                </div>
                <div className="mt-5 flex gap-1 text-[11px] text-[#f5b82e]">★★★★★ <span className="ml-1 text-stone-600">4.9</span></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
