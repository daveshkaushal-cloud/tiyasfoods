import React from "react";

export default function Benefit({ icon, title, description }) {
  return (
    <div className="group rounded-[25px] border border-white/5 bg-[#11100d] p-7 text-center transition duration-300 hover:border-[#f5b82e]/20">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f5b82e]/10 text-[#f5b82e] transition group-hover:bg-[#f5b82e]/15">{icon}</div>
      <h3 className="mt-5 text-sm font-semibold text-stone-200">{title}</h3>
      <p className="mt-3 text-xs leading-6 text-stone-500">{description}</p>
    </div>
  );
}
