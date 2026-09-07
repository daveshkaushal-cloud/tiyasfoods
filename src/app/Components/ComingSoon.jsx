"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <section className="mt-14 px-6 py-24">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-[#f5b82e]/10 bg-[#15120e] px-6 py-20 text-center md:px-12">

                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5b82e]/10 text-[#f5b82e]">
                    <Sparkles size={28} strokeWidth={1.5} />
                </div>

                <p className="text-xs font-semibold tracking-[0.35em] text-[#f5b82e]">
                    SOMETHING FRESH IS COMING
                </p>

                <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                    More goodness is
                    <span className="text-[#f5b82e]"> on the way.</span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-stone-400 md:text-base">
                    We’re working on bringing more delicious, wholesome products
                    to your table. A few more favorites are getting ready behind
                    the scenes.
                </p>

                <div className="mt-8 rounded-2xl border border-white/5 bg-white/3 px-6 py-4">
                    <p className="text-sm text-stone-300">
                        Made with the same care.
                        <span className="ml-1 text-[#f5b82e]">
                            Coming soon.
                        </span>
                    </p>
                </div>

                <Link
                href="/Products"
                    className="group mt-8 flex items-center gap-2 rounded-full bg-[#f5b82e] px-6 py-3 text-sm font-semibold text-[#0c0a09] transition-all duration-300 hover:bg-[#ffd166] hover:shadow-lg hover:shadow-[#f5b82e]/10 cursor-pointer"
                >
                    Explore Available Products
                    <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </section>
    );
}