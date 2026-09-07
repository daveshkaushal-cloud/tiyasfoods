"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../../../../data.json";

gsap.registerPlugin(ScrollTrigger);

const steps = data.processSteps || [];
const stepColors = ["#F2C35A", "#A7BE7A", "#D97B4E", "#7A5260"];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        y: 55,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#D96F45] px-6 py-28 text-[#FFF8EC]">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#F4C45D]/25 blur-[100px]" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#6F8E61]/25 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#FFE08B]">OUR PROCESS</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
            Good food is a journey,
            <span className="block text-[#FFF0BC]">not a shortcut.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#FFF1E4]/85">
            From sourcing to preparation and delivery, each step is meant to keep the product close to what food should feel like: simple, careful and honest.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="process-step rounded-[30px] bg-[#FFF8EC] p-6 text-[#2E352D] shadow-[0_18px_45px_rgba(92,47,27,0.14)]">
              <div className="grid h-14 w-14 place-items-center rounded-2xl text-sm font-bold" style={{ backgroundColor: stepColors[index % stepColors.length] }}>
                {step.number}
              </div>
              <h3 className="mt-6 font-serif text-2xl leading-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#756B5F]">{step.description}</p>
              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[#EFE4D3]">
                <div className="h-full rounded-full" style={{ width: `${58 + index * 12}%`, backgroundColor: stepColors[index % stepColors.length] }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
