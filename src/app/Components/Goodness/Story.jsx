"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight, Heart, Leaf } from "lucide-react";
import data from "../../../../data.json";

const story = data.story || {};

export default function Story() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-image", {
        x: -60,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: { trigger: ref.current, start: "top 72%", once: true },
      });
      gsap.from(".story-content", {
        x: 60,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: { trigger: ref.current, start: "top 72%", once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#F5E9D2] px-6 py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[42px] bg-[#234735] shadow-[0_28px_70px_rgba(48,57,42,0.14)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="story-image relative min-h-[460px] overflow-hidden lg:min-h-[620px]">
          <img src={story.image} alt={story.heading || "Tiyas food story"} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#173426]/65 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
            <div className="rounded-[24px] border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
              <Leaf size={18} className="text-[#D9E59B]" />
              <p className="mt-3 text-xs font-semibold">Closer to nature</p>
              <p className="mt-1 text-[11px] leading-5 text-white/65">A food-first approach, without unnecessary drama.</p>
            </div>
            <div className="rounded-[24px] border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
              <Heart size={18} className="text-[#F1B66A]" />
              <p className="mt-3 text-xs font-semibold">Made to feel familiar</p>
              <p className="mt-1 text-[11px] leading-5 text-white/65">Everyday products with a warmer, more personal character.</p>
            </div>
          </div>
        </div>

        <div className="story-content flex items-center p-8 text-[#FFF8E9] md:p-14 lg:p-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F3C45C]">{story.eyebrow}</p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight md:text-6xl">{story.heading}</h2>

            {story.paragraphs?.map((p, i) => (
              <p key={i} className="mt-6 max-w-xl text-sm leading-7 text-[#E7DDCB]">{p}</p>
            ))}

            <div className="mt-8 rounded-[26px] bg-[#FFF8E9] p-5 text-[#2D392F]">
              <p className="font-serif text-2xl leading-snug">“Food should still feel like food — familiar, nourishing and made with intention.”</p>
            </div>

            <Link href="/Products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F1B64D] px-6 py-3.5 text-sm font-bold text-[#2B3429] transition hover:-translate-y-0.5">
              Explore our pantry <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
