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
      <div onClick={onClose} className="absolute inset-0 bg-[#1B2A22]/75 backdrop-blur-md" />

      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[30px] border border-[#DCCCAD] bg-[#FFFDF8] shadow-2xl">
        <button onClick={onClose} aria-label="Close product details" className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-[#DCCCAD] bg-[#FFF9ED]/90 text-[#4D453D] backdrop-blur-xl transition hover:border-[#6A8B57] hover:text-[#2E5E3B] cursor-pointer">
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative min-h-100 bg-[#EFE4CF] md:min-h-150">
            <div className="absolute left-5 top-5 rounded-full bg-[#173D2D] px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-[#FFF6DE]">{product.badge}</div>
            <img src={product.image} alt={product.name} className="h-full min-h-100 w-full object-contain p-10 md:min-h-150 md:p-16" />
          </div>

          <div className="flex flex-col p-7 text-[#312A24] sm:p-10 md:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B66A3C]">{product.category}</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#2E3F2E] sm:text-5xl">{product.name}</h2>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#C58C2B]"><Star size={16} fill="currentColor" /><span className="text-sm font-semibold">{product.rating}</span></div>
              <span className="text-sm text-[#94897D]">{product.reviews} reviews</span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="text-2xl font-bold text-[#2F342E]">₹{product.price.toLocaleString("en-IN")}</span>
              <span className="text-sm text-[#A79B8D] line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="my-7 h-px bg-[#E6DAC3]" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6258]">About this product</p>
              <p className="mt-4 text-sm leading-7 text-[#756B5F]">{product.fullDescription}</p>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6258]">Good to know</p>
              <div className="mt-4 grid gap-3">
                {product.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 text-sm text-[#675E54]">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#E5EDD7] text-[#477453]"><Check size={12} /></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">{product.tags.map((tag) => (<span key={tag} className="rounded-full border border-[#DCCCAD] bg-[#FAF5EA] px-3 py-1.5 text-[10px] font-semibold text-[#746A5F]">{tag}</span>))}</div>

            <button onClick={() => addToCart(product)} className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#F2C14E] py-4 text-sm font-semibold text-[#263528] transition hover:bg-[#FFD973]">
              <ShoppingBag size={17} />
              {inCart ? "Add Another" : "Add to Cart"}
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#8A8074]"><Truck size={14} className="text-[#477453]" />Freshly prepared with care</div>
          </div>
        </div>
      </div>
    </div>
  );
}
