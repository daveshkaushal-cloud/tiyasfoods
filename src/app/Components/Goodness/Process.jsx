"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import data from '../../../../data.json'

const steps = data.processSteps || [];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".process-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      gsap.from(".process-step", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b82e]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="process-title mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">
            OUR PROCESS
          </p>

          <h2 className="font-display text-4xl md:text-6xl">
            From farm
            <br />
            <span className="text-[#f5b82e]">
              to your home.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-500">
            We believe good food shouldn't need shortcuts.
            That's why every product follows a careful,
            transparent journey.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="process-line absolute left-0 right-0 top-8 hidden h-px bg-[#f5b82e]/40 md:block" />

          <div className="grid gap-12 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="process-step relative text-center"
              >
                <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#f5b82e]/30 bg-[#0c0a09] text-sm font-semibold text-[#f5b82e]">
                  {step.number}
                </div>

                <h3 className="mt-7 font-display text-xl">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-55 text-xs leading-6 text-stone-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}