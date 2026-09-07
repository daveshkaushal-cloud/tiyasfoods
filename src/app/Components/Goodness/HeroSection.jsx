"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import data from "../../../../data.json";
const heroData = data.hero || [];

export default function Hero() {
    const heroRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slide = heroData[current];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-content",
                {
                    x: -60,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                ".hero-product",
                {
                    scale: 0.8,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsAnimating(false);
                },
            });

            tl.fromTo(
                ".hero-content",
                {
                    x: 40,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                }
            ).fromTo(
                ".hero-product",
                {
                    x: 50,
                    scale: 0.9,
                    opacity: 0,
                },
                {
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.4"
            );
        }, heroRef);

        return () => ctx.revert();
    }, [current]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [current, isAnimating]);

    const nextSlide = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        setCurrent((prev) =>
            prev === heroData.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        setCurrent((prev) =>
            prev === 0 ? heroData.length - 1 : prev - 1
        );
    };

    const goToSlide = (index) => {
        if (isAnimating || index === current) return;

        setIsAnimating(true);
        setCurrent(index);
    };

    return (
        <section
            ref={heroRef}
            id="top"
            className="relative min-h-screen overflow-hidden pt-28"
        >
            <div className="absolute inset-0 bg-[#0c0a09]" />

            <div className="absolute right-[-10%] top-[15%] h-150 w-150 rounded-full bg-[#f5b82e]/10 blur-[120px]" />

            <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-2 lg:px-8">
                <div className="hero-content relative z-10">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#f5b82e]" />

                        <span className="text-xs font-semibold tracking-[0.25em] text-[#f5b82e]">
                            {slide.eyebrow}
                        </span>
                    </div>

                    <h1 className="font-display text-[52px] leading-[0.98] tracking-[-0.03em] text-stone-100 sm:text-[68px] lg:text-[76px]">
                        <span className="block">{slide.title[0]}</span>

                        <span className="block">{slide.title[1]}</span>

                        <span className="block">
                            {slide.title[2]}{" "}
                            <span className="text-[#f5b82e]">
                                {slide.highlight}
                            </span>
                        </span>
                    </h1>

                    <p className="mt-7 max-w-lg text-base leading-7 text-stone-400 sm:text-lg">
                        {slide.description}
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                        <div className="flex text-[#f5b82e]">
                            ★★★★★
                        </div>

                        <div className="h-5 w-px bg-white/10" />

                        <p className="text-xs text-stone-500">
                            Loved by 10,000+ families
                        </p>
                    </div>
                </div>

                <div className="relative flex min-h-120 items-center justify-center lg:min-h-155">
                    <div className="absolute h-107.5 w-107.5 rounded-full bg-[#f5b82e]/10 blur-[80px]" />
                    <div className="hero-product relative z-10">
                        <div className="absolute -inset-10 rounded-full border border-[#f5b82e]/10" />
                        <div className="relative overflow-hidden rounded-[40px]">
                            <img
                                key={slide.id}
                                src={slide.image}
                                alt={slide.product}
                                className="h-107.5 w-87.5 object-cover sm:h-130 sm:w-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#0c0a09]/90 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0c0a09]/85 p-5 backdrop-blur-xl">
                                <div className="flex items-center justify-between gap-4">

                                    <div>
                                        <p className="text-[10px] font-semibold tracking-[0.3em] text-[#f5b82e]">
                                            TIYAS FOOD
                                        </p>

                                        <h3 className="mt-2 font-display text-2xl leading-tight">
                                            Pure. Natural. Yours.
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-stone-500">
                                            Good food, thoughtfully made for everyday living.
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f5b82e]/20 bg-[#f5b82e]/5">
                                        <span className="text-lg text-[#f5b82e]">✦</span>
                                    </div>

                                </div>

                                <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5b82e]" />

                                    <span className="text-[9px] tracking-[0.2em] text-stone-500">
                                        FARM FRESH • QUALITY • CARE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {heroData.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => goToSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${current === index
                            ? "w-10 bg-[#f5b82e]"
                            : "w-1.5 bg-stone-600 hover:bg-stone-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}