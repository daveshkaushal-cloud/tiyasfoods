"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
    ShoppingCart,
    UserRound,
    Search,
    Menu,
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "../../../data.json";

const links = data.navLinks || [];

export default function Header() {
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const nav = navRef.current;

        if (!nav) return;

        gsap.fromTo(
            nav,
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }
        );

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!menuRef.current) return;

        if (menuOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.fromTo(
                menuRef.current.querySelectorAll(".mobile-link"),
                {
                    x: 30,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.06,
                    delay: 0.1,
                }
            );
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.4,
                ease: "power3.inOut",
            });
        }
    }, [menuOpen]);

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
                    ? "glass border-b border-[#f5b82e]/10 backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="hidden border-b border-white/5 py-2 text-center text-[10px] tracking-[0.25em] text-stone-400 md:block">
                    FREE DELIVERY ON ORDERS ABOVE ₹999
                    <span className="mx-3 text-[#f5b82e]">•</span>
                    FARM FRESH
                    <span className="mx-3 text-[#f5b82e]">•</span>
                    100% NATURAL
                </div>

                <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 md:px-8">
                    <Link
                        href="/"
                        className="group flex items-center gap-3"
                    >
                        <div className="grid h-12 w-12 place-items-center rounded-full gold-gradient text-lg font-black text-[#0c0a09] shadow-lg shadow-[#f5b82e]/20 transition-transform duration-300 group-hover:scale-110">
                            T
                        </div>

                        <div>
                            <div className="text-[18px] font-semibold tracking-[0.16em]">
                                TIYAS{" "}
                                <span className="text-[#f5b82e]">
                                    FOOD
                                </span>
                            </div>

                            <div className="hidden text-[8px] tracking-[0.3em] text-stone-500 sm:block">
                                PURE. NATURAL. YOURS.
                            </div>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-7 lg:flex">
                        {links.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`group relative text-sm transition-colors ${
                                        isActive
                                            ? "font-bold text-[#ffd166]"
                                            : "text-stone-300 hover:text-[#ffd166]"
                                    }`}
                                >
                                    {link.label}

                                    <span
                                        className={`absolute -bottom-2 left-0 h-px bg-[#f5b82e] transition-all duration-300 ${
                                            isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <Link href="/Cart" className="relative grid h-10 w-10 place-items-center rounded-full text-stone-300 transition hover:bg-white/5 hover:text-[#ffd166]">
                            <ShoppingCart size={19} />

                            <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[#f5b82e] px-1 text-[9px] font-bold text-[#0c0a09]">
                                2
                            </span>
                        </Link>
                        <Link href="/My-Profile" className="grid h-10 w-10 place-items-center rounded-full text-stone-300 transition hover:bg-white/5 hover:text-[#ffd166]">
                            <UserRound size={18} />
                        </Link>

                        {/* <Link
                            href="#products"
                            className="ml-2 rounded-full gold-gradient px-6 py-3 text-sm font-semibold text-[#0c0a09] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#f5b82e]/20"
                        >
                            Shop Now
                        </Link> */}
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <Link href="/Cart" className="relative grid h-10 w-10 place-items-center rounded-full text-stone-200">
                            <ShoppingCart size={19} />

                            <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[#f5b82e] px-1 text-[9px] font-bold text-[#0c0a09]">
                                2
                            </span>
                        </Link>

                        <button
                            onClick={() => setMenuOpen(true)}
                            className="grid h-10 w-10 place-items-center rounded-full border border-white/10"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            <div
                ref={menuRef}
                className="fixed right-0 top-0 z-60 flex h-screen w-[88%] translate-x-full flex-col bg-[#0f0d0a] p-7 shadow-2xl md:hidden"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-full gold-gradient font-bold text-[#0c0a09]">
                            T
                        </div>

                        <span className="text-sm font-semibold tracking-[0.15em]">
                            TIYAS <span className="text-[#f5b82e]">FOOD</span>
                        </span>
                    </div>

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/10"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="my-10 h-px bg-white/10" />

                <div className="flex flex-col gap-7">
                    {links.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`mobile-link font-display text-3xl transition-colors ${
                                    isActive ? "font-bold text-[#f5b82e]" : "text-stone-200 hover:text-[#f5b82e]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}