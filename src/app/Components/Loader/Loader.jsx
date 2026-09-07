"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ loading = true }) {
    const loaderRef = useRef(null);
    const logoRef = useRef(null);
    const glowRef = useRef(null);
    const arcRef = useRef(null);
    const lineRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(logoRef.current, {
                opacity: 0,
                y: 30,
                scale: 0.94,
            });

            gsap.set(textRef.current, {
                opacity: 0,
                y: 10,
            });

            gsap.set(lineRef.current, {
                scaleX: 0,
                transformOrigin: "left center",
            });

            gsap.set(arcRef.current, {
                opacity: 0,
                scale: 0.8,
            });

            const intro = gsap.timeline();

            intro
                .to(logoRef.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power4.out",
                })
                .to(
                    textRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.35"
                )
                .to(
                    lineRef.current,
                    {
                        scaleX: 0.7,
                        duration: 1.5,
                        ease: "power2.out",
                    },
                    "-=0.2"
                )
                .to(
                    arcRef.current,
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=1"
                );

            gsap.to(".loader-ring-1", {
                scale: 1.18,
                opacity: 0.16,
                duration: 2.6,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

            gsap.to(".loader-ring-2", {
                scale: 0.82,
                opacity: 0.08,
                duration: 2.1,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

            gsap.to(".loader-ring-3", {
                scale: 1.1,
                opacity: 0.05,
                duration: 3.2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
            gsap.to(glowRef.current, {
                scale: 1.3,
                opacity: 0.75,
                duration: 2.8,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
            gsap.to(arcRef.current, {
                rotation: 360,
                duration: 8,
                ease: "none",
                repeat: -1,
            });

            gsap.to(lineRef.current, {
                scaleX: 0.88,
                duration: 4,
                ease: "power2.out",
            });

            gsap.utils.toArray(".loader-dot").forEach((dot, index) => {
                gsap.to(dot, {
                    y: index % 2 === 0 ? -8 : 8,
                    opacity: 0.25,
                    duration: 1.5 + index * 0.2,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                });
            });
        }, loaderRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={loaderRef} className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black/50 text-stone-100 backdrop-blur-lg">

            <div ref={glowRef} className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b82e]/10 blur-[130px]" />

            <div className="loader-ring-1 absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f5b82e]/10" />

            <div className="loader-ring-2 absolute left-1/2 top-1/2 h-82 w-82 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6" />

            <div className="loader-ring-3 absolute left-1/2 top-1/2 h-62 w-62 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f5b82e]/5" />

            <div ref={arcRef} className="pointer-events-none absolute left-1/2 top-1/2 h-85 w-85 -translate-x-1/2 -translate-y-1/2 rounded-full border border-transparent border-t-[#f5b82e]/40 border-r-[#f5b82e]/10" />

            {/* --------------------------------
                MAIN CONTENT
            -------------------------------- */}

            <div className="relative z-10 w-75 text-center">

                {/* Logo */}

                <div ref={logoRef}>

                    <p className="mb-4 text-[9px] font-semibold tracking-[0.55em] text-[#f5b82e]">PURE • NATURAL</p>

                    <h1 className="font-display text-6xl tracking-tight">TIYAS</h1>

                    <p className="mt-2 text-[10px] font-medium tracking-[0.6em] text-[#ffd166]">FOOD</p>

                </div>

                {/* Loading Area */}

                <div
                    ref={textRef}
                    className="mt-12"
                >

                        <div className="mb-4">
                            <span className="text-[8px] tracking-[0.35em] text-stone-400">PREPARING GOODNESS</span>
                        </div>

                        <div ref={lineRef} className="mx-auto mt-4 h-px w-28 bg-white/5" />

                </div>

                {/* Bottom */}

                <p className="mt-7 text-[8px] tracking-[0.35em] text-stone-500">MADE WITH CARE</p>

            </div>
        </div>
    );
}