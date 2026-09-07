"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ShoppingCart, UserRound, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "../../../data.json";
import { useCart } from "@/context/CartContext";
import BrandLogo from "./BrandLogo";

const links = data.navLinks || [];

export default function Header() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const { cartCount, hydrated } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo(nav, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });

    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      gsap.fromTo(
        menuRef.current.querySelectorAll(".mobile-link"),
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.4, ease: "power3.inOut" });
    }
  }, [menuOpen]);

  const badge = hydrated ? cartCount : 0;

  const navSurface = isHome
    ? "border-b border-[#E4D3B5] bg-[#FFF8E8]/95 shadow-[0_8px_30px_rgba(54,45,29,0.06)] backdrop-blur-lg"
    : scrolled
      ? "glass border-b border-[#f5b82e]/10 backdrop-blur-md"
      : "bg-transparent";

  const topStrip = isHome
    ? "border-b border-[#31523A]/10 bg-[#173D2D] text-[#F4E8D0]"
    : "border-b border-white/5 text-stone-400";

  const normalLink = isHome
    ? "text-[#31523A] hover:text-[#C56943]"
    : "text-stone-300 hover:text-[#ffd166]";

  const activeLink = isHome ? "font-bold text-[#B85E3C]" : "font-bold text-[#ffd166]";
  const underline = isHome ? "bg-[#C56943]" : "bg-[#f5b82e]";
  const iconClass = isHome
    ? "text-[#31523A] hover:bg-[#31523A]/7 hover:text-[#B85E3C]"
    : "text-stone-300 hover:bg-white/5 hover:text-[#ffd166]";

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 z-50 w-full transition-all duration-500 ${navSurface}`}>
        <div className={`hidden py-2 text-center text-[10px] tracking-[0.25em] md:block ${topStrip}`}>
          FREE DELIVERY ON ORDERS ABOVE ₹999
          <span className={`mx-3 ${isHome ? "text-[#F2C75B]" : "text-[#f5b82e]"}`}>•</span>
          MADE WITH CARE
          <span className={`mx-3 ${isHome ? "text-[#F2C75B]" : "text-[#f5b82e]"}`}>•</span>
          WHOLESOME EVERYDAY
        </div>

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="group inline-flex items-center">
            <BrandLogo variant="header" className="h-[58px] w-auto transition-transform duration-300 group-hover:scale-[1.02]" />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link key={link.label} href={link.href} className={`group relative text-sm transition-colors ${isActive ? activeLink : normalLink}`}>
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 h-px ${underline} transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/Cart" className={`relative grid h-10 w-10 place-items-center rounded-full transition ${iconClass}`}>
              <ShoppingCart size={19} />
              {badge > 0 && (
                <span className={`absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full px-1 text-[9px] font-bold ${isHome ? "bg-[#D86F45] text-white" : "bg-[#f5b82e] text-[#0c0a09]"}`}>
                  {badge > 99 ? "99+" : badge}
                </span>
              )}
            </Link>
            <Link href="/My-Profile" className={`grid h-10 w-10 place-items-center rounded-full transition ${iconClass}`}>
              <UserRound size={18} />
            </Link>
            <Link
              href="/Products"
              className={`ml-1 hidden items-center rounded-full px-5 py-2.5 text-xs font-bold transition xl:inline-flex ${isHome ? "bg-[#315C41] text-white hover:bg-[#254B35]" : "border border-[#f5b82e]/25 bg-[#f5b82e]/10 text-[#ffd166] hover:bg-[#f5b82e]/15"}`}
            >
              Shop now
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link href="/Cart" className={`relative grid h-10 w-10 place-items-center rounded-full ${isHome ? "text-[#31523A]" : "text-stone-200"}`}>
              <ShoppingCart size={19} />
              {badge > 0 && (
                <span className={`absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full px-1 text-[9px] font-bold ${isHome ? "bg-[#D86F45] text-white" : "bg-[#f5b82e] text-[#0c0a09]"}`}>
                  {badge > 99 ? "99+" : badge}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className={`grid h-10 w-10 place-items-center rounded-full border ${isHome ? "border-[#31523A]/15 text-[#31523A]" : "border-white/10 text-stone-100"}`}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`fixed right-0 top-0 z-60 flex h-screen w-[88%] translate-x-full flex-col p-7 shadow-2xl md:hidden ${isHome ? "bg-[#FFF8E8] text-[#31523A]" : "bg-[#0f0d0a] text-stone-100"}`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="inline-flex items-center">
            <BrandLogo variant="header" className="h-14 w-auto" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className={`grid h-10 w-10 place-items-center rounded-full border ${isHome ? "border-[#31523A]/15" : "border-white/10"}`}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className={`my-10 h-px ${isHome ? "bg-[#31523A]/12" : "bg-white/10"}`} />
        <div className="flex flex-col gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`mobile-link font-serif text-3xl transition-colors ${isActive ? (isHome ? "font-bold text-[#B85E3C]" : "font-bold text-[#f5b82e]") : (isHome ? "text-[#31523A] hover:text-[#B85E3C]" : "text-stone-200 hover:text-[#f5b82e]")}`}
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
