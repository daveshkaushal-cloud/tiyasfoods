import React from "react";
import { Search } from "lucide-react";

export default function EmptyState({ onClear }) {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center rounded-[30px] border border-dashed border-white/10 bg-[#11100d]/40 px-6 text-center">
      <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#f5b82e]/10 text-[#f5b82e]">
        <Search size={25} />
      </div>

      <h3 className="font-serif text-3xl">No products found</h3>

      <p className="mt-3 max-w-sm text-sm leading-6 text-stone-500">Try changing your search or category to discover our available products.</p>

      <button onClick={onClear} className="mt-6 rounded-full bg-[#f5b82e] px-6 py-3 text-sm font-semibold text-[#11100d] transition hover:bg-[#ffd166]">View All Products</button>
    </div>
  );
}
