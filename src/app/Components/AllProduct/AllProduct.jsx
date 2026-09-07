"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Leaf, Search, ShieldCheck, Sparkles, Truck } from "lucide-react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [sort, setSort] = useState("featured");

  const visibleProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory = category === "All Products" || product.category === category;
      const term = search.trim().toLowerCase();
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    if (sort === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, category, sort]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F1E3] text-[#2B241D]">
      <section className="relative overflow-hidden bg-[#173D2D] pt-32 text-[#FFF8E8]">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E79A35]/20 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#A7C77B]/15 blur-[110px]" />
        <div className="absolute right-[12%] top-28 h-28 w-28 rotate-12 rounded-[38%] border border-[#F4D38A]/15" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="mb-10 flex items-center gap-2 text-xs text-[#E7DCC6]/70">
            <a href="/" className="transition hover:text-[#F4C25D]">Home</a>
            <span>/</span>
            <span className="text-[#FFF8E8]">Shop</span>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4D38A]/25 bg-[#FFF8E8]/8 px-4 py-2 text-[10px] font-semibold tracking-[0.28em] text-[#F4C25D]">
                <Leaf size={14} /> PURE • NATURAL • YOURS
              </div>

              <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Everyday goodness,
                <br />
                <span className="text-[#F4C25D]">made the slower way.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#E9E0D0] sm:text-base">
                Thoughtfully made pantry staples inspired by traditional preparation, honest ingredients and the comfort of food made with care.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#F4D38A]/20 bg-[#FFF8E8]/8 p-6 backdrop-blur-sm sm:p-7">
              <p className="text-[10px] font-semibold tracking-[0.28em] text-[#F4C25D]">THE TIYAS WAY</p>
              <div className="mt-5 grid gap-4">
                <div className="flex items-start gap-3"><Leaf className="mt-0.5 text-[#BFD58F]" size={18} /><div><p className="font-semibold text-[#FFF8E8]">Thoughtful ingredients</p><p className="mt-1 text-xs leading-5 text-[#D8D0C1]">Simple products built around familiar everyday goodness.</p></div></div>
                <div className="flex items-start gap-3"><Sparkles className="mt-0.5 text-[#F4C25D]" size={18} /><div><p className="font-semibold text-[#FFF8E8]">Traditional inspiration</p><p className="mt-1 text-xs leading-5 text-[#D8D0C1]">Rooted in methods and flavours that feel close to home.</p></div></div>
                <div className="flex items-start gap-3"><Truck className="mt-0.5 text-[#E89A63]" size={18} /><div><p className="font-semibold text-[#FFF8E8]">Packed with care</p><p className="mt-1 text-xs leading-5 text-[#D8D0C1]">A warm, direct-to-your-door shopping experience.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D9C9AA]/60 bg-[#F3E5C9]">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-5 text-sm text-[#4F463C] sm:grid-cols-3 lg:px-8">
          <div className="flex items-center gap-3"><Leaf size={17} className="text-[#477453]" /><span>Natural everyday essentials</span></div>
          <div className="flex items-center gap-3"><ShieldCheck size={17} className="text-[#B66A3C]" /><span>Carefully packed products</span></div>
          <div className="flex items-center gap-3"><Truck size={17} className="text-[#C58C2B]" /><span>Free delivery above ₹999</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#B66A3C]">OUR PANTRY</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2E3F2E] sm:text-5xl">Choose your goodness.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#756B5F]">A focused collection with a warm, honest store experience — less catalogue, more care.</p>
          </div>
          <div className="rounded-full bg-[#E5EDD7] px-4 py-2 text-xs font-semibold text-[#477453]">
            {visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}
          </div>
        </div>

        <div className="mb-10 rounded-[28px] border border-[#DCCCAD] bg-[#FFFDF8] p-4 shadow-[0_18px_50px_rgba(94,72,43,0.06)] sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#887D70]" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search ghee, protein..."
                className="h-12 w-full rounded-full border border-[#DCCCAD] bg-[#FAF5EA] pl-11 pr-4 text-sm text-[#332C25] outline-none placeholder:text-[#9A9083] transition focus:border-[#6A8B57] focus:bg-white"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-4 py-2.5 text-xs font-semibold transition ${category === item ? "bg-[#477453] text-[#FFFDF7]" : "border border-[#DCCCAD] bg-[#FAF5EA] text-[#665D52] hover:border-[#A9BE8D] hover:text-[#385B3D]"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="h-11 appearance-none rounded-full border border-[#DCCCAD] bg-[#FAF5EA] px-5 pr-10 text-xs font-semibold text-[#665D52] outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Name</option>
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#887D70]" />
              </div>
            </div>
          </div>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} onReadMore={() => setSelectedProduct(product)} />
            ))}
          </div>
        ) : (
          <div className="rounded-[32px] border border-dashed border-[#CDBB98] bg-[#FFF9ED] px-6 py-16 text-center">
            <p className="font-serif text-3xl text-[#2E3F2E]">Nothing in the pantry matches that yet.</p>
            <p className="mt-3 text-sm text-[#756B5F]">Try another search or clear your filters.</p>
            <button onClick={() => { setSearch(""); setCategory("All Products"); setSort("featured"); }} className="mt-6 rounded-full bg-[#B66A3C] px-5 py-3 text-sm font-semibold text-white">Show all products</button>
          </div>
        )}

        <section className="mt-20">
          <div className="relative overflow-hidden rounded-[38px] bg-[#D96B3F] px-6 py-16 text-center text-[#FFF8E8] sm:px-10 lg:py-20">
            <div className="absolute -left-16 -top-20 h-60 w-60 rounded-full bg-[#F5C760]/25 blur-[80px]" />
            <div className="absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-[#6F925E]/30 blur-[70px]" />
            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF8E8]/15 text-[#FFE092]"><Sparkles size={24} /></div>
              <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-[#FFE092]">MORE GOODNESS IS COMING</p>
              <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">A pantry that grows slowly, <span className="text-[#FFE092]">and thoughtfully.</span></h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#FFF1DF]">We’re working on more wholesome favourites for your everyday table. No endless catalogue — just products we’re happy to put the Tiyas name on.</p>
            </div>
          </div>
        </section>
      </section>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </main>
  );
}
