"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import data from '../../../../data.json'

const story = data.story || {};

export default function Story() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-image", {
        x: -80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      });

      gsap.from(".story-content", {
        x: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-4xl border border-white/10 bg-[#15120e] lg:grid-cols-2">
          <div className="story-image h-112 md:h-140 w-full border-2 border-white">
          <img
            src={story.image}
            alt={story.heading || "Farm fresh dairy"}
            className="h-full w-full object-fill"
          />
        </div>

        <div className="story-content flex items-center p-8 md:p-16 lg:p-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">
              {story.eyebrow}
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              {story.heading}
            </h2>

            {story.paragraphs?.map((p, i) => (
              <p key={i} className="mt-7 text-sm leading-7 text-stone-400">
                {p}
              </p>
            ))}

            <button className="mt-8 rounded-full border border-[#f5b82e]/30 px-6 py-3 text-sm font-semibold text-[#ffd166] transition hover:bg-[#f5b82e] hover:text-[#0c0a09]">
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}