"use client";

import React from "react";
import { X, Star, Check, ShoppingBag, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductModal({ product, onClose }) {
  const { addToCart, isInCart } = useCart();

  if (!product) return null;
  const inCart = isInCart(product.id);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[30px] border border-white/10 bg-[#11100d] shadow-2xl">
        <button onClick={onClose} aria-label="Close product details" className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/40 text-stone-300 backdrop-blur-xl transition hover:border-[#f5b82e]/50 hover:text-white cursor-pointer">
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative min-h-100 bg-[#15120e] md:min-h-150">
            <img src={product.image} alt={product.name} className="h-full min-h-100 w-full object-contain p-10 md:min-h-150 md:p-16" />
          </div>

          <div className="flex flex-col p-7 sm:p-10 md:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f5b82e]">{product.category}</p>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-100 sm:text-5xl">{product.name}</h2>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#f5b82e]"><Star size={16} fill="currentColor" /><span className="text-sm font-medium">{product.rating}</span></div>
              <span className="text-sm text-stone-600">{product.reviews} reviews</span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="text-2xl font-semibold">₹{product.price.toLocaleString("en-IN")}</span>
              <span className="text-sm text-stone-600 line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="my-7 h-px bg-white/5" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">About this product</p>
              <p className="mt-4 text-sm leading-7 text-stone-400">{product.fullDescription}</p>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Good to know</p>
              <div className="mt-4 grid gap-3">
                {product.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 text-sm text-stone-400">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f5b82e]/10 text-[#f5b82e]"><Check size={12} /></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">{product.tags.map((tag) => (<span key={tag} className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-[10px] text-stone-400">{tag}</span>))}</div>

            <button onClick={() => addToCart(product)} className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#f5b82e] py-4 text-sm font-semibold text-[#11100d] transition hover:bg-[#ffd166]">
              <ShoppingBag size={17} />
              {inCart ? "Add Another" : "Add to Cart"}
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-stone-600"><Truck size={14} />Freshly prepared with care</div>
          </div>
        </div>
      </div>
    </div>
  );
}
