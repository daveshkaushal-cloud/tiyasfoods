"use client";

import React from "react";
import { Check, ShoppingBag, ArrowRight, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, onReadMore }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <article className="product-card group overflow-hidden rounded-[30px] border border-[#DCCCAD] bg-[#FFFDF8] shadow-[0_18px_55px_rgba(94,72,43,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(94,72,43,0.12)]">
      <div className="relative aspect-[0.95] overflow-hidden bg-[#EFE4CF]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-[#173D2D] px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-[#FFF6DE]">
          {product.badge}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#392B1F]/55 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition ${product.inStock ? "cursor-pointer bg-[#F2C14E] text-[#263528] hover:bg-[#FFD973]" : "cursor-not-allowed bg-[#B8B0A5] text-white"}`}
          >
            {inCart ? <><Check size={16} />Add Another</> : product.inStock ? <><ShoppingBag size={16} />Add to Cart</> : "Out of Stock"}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B66A3C]">{product.category}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-[#2E3F2E]">{product.name}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#756B5F]">{product.description}</p>

        <button onClick={onReadMore} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#477453] transition hover:text-[#2E5E3B]">
          Read more <ArrowRight size={13} />
        </button>

        <div className="mt-5 flex items-center gap-2">
          <div className="flex items-center gap-1 text-[#C58C2B]">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-semibold">{product.rating}</span>
          </div>
          <span className="text-xs text-[#988D80]">({product.reviews} reviews)</span>
          <span className="ml-auto rounded-full bg-[#EAF0DF] px-2.5 py-1 text-[10px] font-semibold text-[#5B774B]">{product.size}</span>
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-[#E8DDC7] pt-5">
          <span className="text-xl font-bold text-[#2F342E]">₹{product.price.toLocaleString("en-IN")}</span>
          <span className="text-sm text-[#A79B8D] line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </article>
  );
}
