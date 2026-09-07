"use client";

import React from "react";
import { Check, ShoppingBag, ArrowRight, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({
    product,
    onReadMore,
}) {
    const { addToCart, isInCart } = useCart();
    const inCart = isInCart(product.id);

    return (
        <article className="product-card group rounded-[30px]">
            <div className="relative aspect-[0.9] overflow-hidden rounded-[30px] bg-[#11100d] transition hover:shadow-lg hover:shadow-[#f5b82e]/10">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />

                <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition ${product.inStock ? "cursor-pointer bg-[#f5b82e] text-[#11100d] hover:bg-[#ffd166] hover:shadow-lg hover:shadow-[#f5b82e]/10" : "cursor-not-allowed bg-stone-700 text-stone-400"}`}>
                        {inCart ? (
                            <>
                                <Check size={16} />
                                Add Another
                            </>
                        ) : product.inStock ? (
                            <>
                                <ShoppingBag size={16} />
                                Add to Cart
                            </>
                        ) : (
                            "Out of Stock"
                        )}
                    </button>
                </div>
            </div>

            <div className="px-4 pb-4 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5b82e]">{product.category}</p>

                <h3 className="mt-2 font-serif text-2xl leading-tight text-stone-100">{product.name}</h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-500">{product.description}</p>

                <button onClick={onReadMore} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#f5b82e] transition hover:text-[#ffd166] cursor-pointer">
                    Read more
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </button>

                <div className="mt-5 flex items-center gap-2">
                    <div className="flex items-center gap-1 text-[#f5b82e]">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-medium">{product.rating}</span>
                    </div>

                    <span className="text-xs text-stone-600">({product.reviews} reviews)</span>

                    <span className="ml-auto text-xs text-stone-500">{product.size}</span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                    <span className="text-xl font-semibold text-stone-100">₹{product.price.toLocaleString("en-IN")}</span>
                    <span className="text-sm text-stone-600 line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
                </div>
            </div>
        </article>
    );
}
