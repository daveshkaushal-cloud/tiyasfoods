"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import data from "../../../../data.json";

gsap.registerPlugin(ScrollTrigger);

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
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">
              OUR COLLECTION
            </p>

            <h2 className="font-display text-4xl md:text-6xl">
              Goodness in
              <span className="text-[#f5b82e]">
                {" "}
                every bite.
              </span>
            </h2>
          </div>

          <Link
            href="/Products"
            className="group flex items-center gap-2 text-sm text-stone-400 transition-colors duration-300 hover:text-[#f5b82e]"
          >
            View all products

            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#f5b82e]/50 group-hover:bg-[#f5b82e] group-hover:text-[#0c0a09]">
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.name}
              className="
                product-card
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#11100e]
                transition-colors
                duration-500
                hover:border-[#f5b82e]/30
              "
            >
              <div className="relative h-90 overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0c0a09] via-transparent to-transparent opacity-70" />
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-white/10
                    bg-black/40
                    px-3
                    py-1.5
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-stone-300
                    backdrop-blur-md
                  "
                >
                  {product.category}
                </span>
                <button
                  className="
                    absolute
                    bottom-4
                    right-4
                    grid
                    h-11
                    w-11
                    scale-90
                    place-items-center
                    rounded-full
                    bg-[#f5b82e]
                    text-[#0c0a09]
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  <ShoppingBag size={17} />
                </button>
              </div>
              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h3 className="font-display text-xl text-white">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-xs text-stone-500">
                      {product.size}
                    </p>
                  </div>

                  <p className="font-semibold text-[#ffd166]">
                    {product.price}
                  </p>

                </div>
                <div className="mt-5 flex items-center gap-1 text-[11px] text-[#f5b82e]">
                  <span className="tracking-[2px]">
                    ★★★★★
                  </span>

                  <span className="ml-1 text-stone-600">
                    4.9
                  </span>
                </div>
                <div className="mt-5 h-px w-full overflow-hidden bg-white/5">
                  <div
                    className="
                      h-full
                      w-full
                      origin-left
                      scale-x-0
                      bg-[#f5b82e]
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-x-100
                    "
                  />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}