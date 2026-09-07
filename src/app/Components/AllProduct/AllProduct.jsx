"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Search, X, ChevronDown, Leaf, Sparkles, Truck } from "lucide-react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import Benefit from "./Benefit";
import Stat from "./Stat";
import EmptyState from "./EmptyState";
import { useAuth } from "../../../context/AuthContext";
import { useRouter, usePathname } from 'next/navigation';


const products = [
    {
        id: 1,
        name: "A2 Bilona Ghee",
        category: "Ghee",
        price: 899,
        oldPrice: 1099,
        rating: 4.9,
        reviews: 128,
        size: "500 ml",
        image: "/assets/hero-section-1.jpeg",
        badge: "BESTSELLER",

        description: "Traditional Bilona method A2 cow ghee",

        fullDescription:
            "Made using the traditional Bilona method, our A2 Bilona Ghee is carefully prepared from A2 cow milk to deliver a rich aroma, authentic taste and wholesome goodness in every spoon.",

        benefits: [
            "Made from A2 cow milk",
            "Traditional Bilona preparation",
            "Rich aroma and authentic taste",
            "Perfect for everyday cooking",
        ],

        tags: ["A2", "Natural", "Premium"],
        inStock: true,
    },

    {
        id: 2,
        name: "A2 Cow Ghee",
        category: "Ghee",
        price: 499,
        oldPrice: 599,
        rating: 4.8,
        reviews: 94,
        size: "250 ml",
        image: "/assets/hero-section-1.jpeg",
        badge: "POPULAR",

        description: "Pure A2 cow ghee made traditionally",

        fullDescription:
            "Our A2 Cow Ghee is traditionally prepared with carefully sourced A2 cow milk, giving it a naturally rich taste and aroma that works beautifully in everyday cooking.",

        benefits: [
            "Made from A2 cow milk",
            "Traditionally prepared",
            "Rich and natural flavour",
            "Ideal for everyday use",
        ],

        tags: ["A2", "Natural"],
        inStock: true,
    },

    {
        id: 3,
        name: "Natural Protein",
        category: "Protein",
        price: 1499,
        oldPrice: 1699,
        rating: 4.8,
        reviews: 86,
        size: "1 kg",
        image: "/assets/hero-section-2.jpeg",
        badge: "NEW",

        description: "Clean protein for everyday nutrition",

        fullDescription:
            "A thoughtfully made protein option for everyday nutrition, designed to fit easily into your routine while keeping things simple, wholesome and convenient.",

        benefits: [
            "Clean protein source",
            "Made for everyday nutrition",
            "Easy to include in your routine",
            "Wholesome and convenient",
        ],

        tags: ["Protein", "Healthy"],
        inStock: true,
    },
];

const categories = ["All Products", "Ghee", "Protein"];

export default function AllProduct() {
    const gridRef = useRef(null);
    const scrollRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const timeoutId = scrollToProduct();
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const scrollToProduct = () => {
        const el = scrollRef.current;
        if (!el) return null;

        const id = setTimeout(() => {
            try {
                el?.scrollIntoView?.({ behavior: "smooth" });
            } catch (e) {
                // ignore if element removed
            }
        }, 5000);

        return id;
    }

    const openProduct = (product) => {
        setSelectedProduct(product);
    };

    const closeProduct = () => {
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        console.log("Add to cart clicked", product?.id ?? product);
        if (loading) return; // auth status not resolved yet, avoid false negative

        if (!isAuthenticated) {
            router.push(`/login?redirect=${pathname}`);
            return;
        }

        // TODO: implement adding to cart (local state or API)
        // for now we just log and could show a toast or update UI
        console.log('Would add product to cart:', product);
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#090807] text-stone-100">
            <section className="relative overflow-hidden border-b border-white/5 pt-32">
                <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-[#f5b82e]/5 blur-[150px]" />
                <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                    <div className="mb-10 flex items-center gap-2 text-xs text-stone-500">
                        <a href="/" className="transition hover:text-[#f5b82e]">Home</a>
                        <span>/</span>
                        <span className="text-stone-300">Products</span>
                    </div>

                    <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#f5b82e]" />
                                <span className="text-xs font-semibold tracking-[0.25em] text-[#f5b82e]">PURE • NATURAL • YOURS</span>
                            </div>

                            <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                                Goodness
                                <br />
                                <span className="text-[#f5b82e]">Worth Choosing.</span>
                            </h1>

                            <p className="mt-7 max-w-xl text-sm leading-7 text-stone-400 sm:text-base">Discover our carefully crafted collection of wholesome food products, made with thoughtful ingredients and traditional care.</p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <Stat number="03" label="Products" />
                            <Stat number="100%" label="Natural" />
                            <Stat number="4.9" label="Rated" />
                        </div>
                    </div>
                </div>
            </section>

            <section ref={scrollRef} className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.25em] text-[#f5b82e]">OUR COLLECTION</p>
                        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Made with care.</h2>
                        <p className="mt-3 max-w-lg text-sm leading-6 text-stone-500">A small collection, thoughtfully made. We focus on quality rather than quantity.</p>
                    </div>

                    {/* <div className="text-sm text-stone-500">{filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}</div> */}
                </div>

                <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative w-full sm:max-w-md">
                        <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" />
                        <input placeholder="Search ghee, protein..." className="h-12 w-full rounded-full border border-white/10 bg-[#11100d] pl-11 pr-11 text-sm text-stone-200 outline-none placeholder:text-stone-600 transition focus:border-[#f5b82e]/50" />
                    </div>

                    <div className="flex gap-3">
                        <div className="flex overflow-hidden rounded-full border border-white/10 bg-[#11100d]">
                            {/* {categories.map((item) => (
                                <button key={item} className={`px-4 py-3 text-xs transition sm:px-5 ${category === item ? "bg-[#f5b82e] font-semibold text-[#11100d]" : "text-stone-500 hover:text-stone-200"}`}>{item}</button>
                            ))} */}
                        </div>

                        <div className="relative hidden sm:block">
                            <select className="h-12 appearance-none rounded-full border border-white/10 bg-[#11100d] px-5 pr-10 text-sm text-stone-300 outline-none">
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                                <option value="name">Name</option>
                            </select>

                            <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-500" />
                        </div>
                    </div>
                </div>
                {/* 
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} wishlist={wishlist.includes(product.id)} inCart={isInCart(product.id)} onWishlist={() => toggleWishlist(product.id)} onAdd={() => addToCart(product.id)} onReadMore={() => openProduct(product)} />
                        ))}
                    </div>
                ) : (
                    <EmptyState onClear={() => { setSearch(""); setCategory("All Products"); setSort("featured"); }} />
                )} */}

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onReadMore={() => openProduct(product)} handleAddToCart={handleAddToCart} />
                    ))}
                </div>

                <section className="mt-20">
                    <div className="relative overflow-hidden rounded-[35px] border border-[#f5b82e]/10 bg-[#15120e] px-6 py-20 text-center">
                        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#f5b82e]/5 blur-[100px]" />
                        <div className="relative">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f5b82e]/10 text-[#f5b82e]"><Sparkles size={24} /></div>
                            <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">MORE GOODNESS IS COMING</p>
                            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">We're making room for <span className="text-[#f5b82e]"> more.</span></h2>
                            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-stone-400">We're working on more wholesome favorites for your everyday table. Keep an eye out — something delicious is on the way.</p>
                            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-xs text-stone-400"><span className="text-[#f5b82e]">✦</span> New products coming soon</div>
                        </div>
                    </div>
                </section>
            </section>

            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={closeProduct} />
            )}
        </main>
    );
}
