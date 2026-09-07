import React from "react";

export default function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#11100d]/60 p-5 backdrop-blur-xl">
      <p className="font-serif text-2xl text-[#f5b82e] sm:text-3xl">{number}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-stone-500">{label}</p>
    </div>
  );
}
