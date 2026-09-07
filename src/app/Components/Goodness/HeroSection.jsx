"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight, Leaf, Sparkles } from "lucide-react";
import data from "../../../../data.json";

const heroData = data.hero || [];

const palettes = [
  {
    bg: "#1F4A35",
    glow: "#E4A33B",
    accent: "#F7C85A",
    soft: "#F7EBD4",
    button: "#F4C45D",
    buttonText: "#243428",
    route: "/Products",
  },
  {
    bg: "#5A3B2B",
    glow: "#D87445",
    accent: "#F0B550",
    soft: "#F7E5D6",
    button: "#D97848",
    buttonText: "#FFF8EC",
    route: "/Products/whey-protein",
  },
  {
    bg: "#7A5260",
    glow: "#A9BE7A",
    accent: "#D8E29E",
    soft: "#F9E8E6",
    button: "#B7CA83",
    buttonText: "#31412F",
    route: "/Products/yogurt",
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const slide = heroData[current];
  const palette = palettes[current] || palettes[0];

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".goodness-hero-copy",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }
      );
      gsap.fromTo(
        ".goodness-hero-product",
        { x: 45, scale: 0.94, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!slide) return null;

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-screen overflow-hidden pt-28 text-white transition-colors duration-700"
      style={{ backgroundColor: palette.bg }}
    >
      <div
        className="absolute -left-32 top-20 h-96 w-96 rounded-full blur-[120px] opacity-30"
        style={{ backgroundColor: palette.glow }}
      />
      <div
        className="absolute -right-24 bottom-0 h-[430px] w-[430px] rounded-full blur-[130px] opacity-25"
        style={{ backgroundColor: palette.accent }}
      />
      <div className="absolute left-[8%] top-[22%] h-20 w-20 rotate-12 rounded-[32%] border border-white/10" />
      <div className="absolute right-[8%] top-[18%] h-32 w-32 -rotate-12 rounded-full border border-white/10" />

      <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="goodness-hero-copy relative z-10">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-[0.26em] backdrop-blur-sm"
            style={{ color: palette.accent }}
          >
            <Leaf size={14} /> {slide.eyebrow}
          </div>

          <h1 className="max-w-3xl font-serif text-[52px] leading-[0.95] tracking-[-0.035em] sm:text-[68px] lg:text-[78px]">
            <span className="block">{slide.title[0]}</span>
            <span className="block">{slide.title[1]}</span>
            <span className="block">
              {slide.title[2]}{" "}
              <span style={{ color: palette.accent }}>{slide.highlight}</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            {slide.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={palette.route}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5"
              style={{ backgroundColor: palette.button, color: palette.buttonText }}
            >
              {slide.button} <ArrowUpRight size={16} />
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3.5 text-xs text-white/75">
              <Sparkles size={15} style={{ color: palette.accent }} /> Thoughtfully made for everyday tables
            </div>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["Honest ingredients", "Careful process", "Made with purpose"].map((label) => (
              <div key={label} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-xs leading-5 text-white/70 backdrop-blur-sm">
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[620px]">
          <div
            className="absolute h-[440px] w-[440px] rounded-full opacity-25 blur-[90px]"
            style={{ backgroundColor: palette.glow }}
          />
          <div className="goodness-hero-product relative z-10 w-full max-w-[470px]">
            <div className="absolute -inset-6 rotate-3 rounded-[46px] border border-white/12" />
            <div className="relative overflow-hidden rounded-[42px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.product}
                  className="h-[500px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-black/35 p-5 backdrop-blur-xl">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.28em]" style={{ color: palette.accent }}>TIYAS GOODNESS</p>
                      <h3 className="mt-2 font-serif text-2xl">{slide.product}</h3>
                      <p className="mt-1 text-xs text-white/65">{slide.size} • {slide.price}</p>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-white/12 text-xl" style={{ color: palette.accent }}>✦</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {heroData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrent(index)}
            aria-label={`Show ${item.product}`}
            className={`h-2 rounded-full transition-all duration-300 ${current === index ? "w-10 bg-white" : "w-2 bg-white/35 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
}
