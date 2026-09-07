"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight, Eye, LockKeyhole, Mail, UserRound } from "lucide-react";
import BrandLogo from "../BrandLogo";

export default function Signup() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".auth-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".auth-card", {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 1,
        delay: 0.15,
        ease: "power4.out",
      });

      gsap.to(".ring-one", {
        scale: 1.15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ring-two", {
        scale: 0.85,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gold-glow", {
        scale: 1.2,
        opacity: 0.65,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#0c0a09] text-stone-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,184,46,0.07),transparent_30%)]" />
      <div className="gold-glow absolute left-[25%] top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b82e]/10 blur-[130px]" />
      <div className="ring-one absolute left-[25%] top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f5b82e]/10" />
      <div className="ring-two absolute left-[25%] top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

      <header className="relative z-20 flex items-center justify-between px-6 py-7 lg:px-12">
        <Link href="/" className="inline-flex rounded-2xl bg-[#FFF8E8] px-3 py-2 shadow-xl">
          <BrandLogo variant="header" className="h-14 w-auto" />
        </Link>

        <Link href="/" className="text-[9px] tracking-[0.25em] text-stone-500 transition hover:text-[#f5b82e]">
          BACK TO STORE
        </Link>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-6xl items-center justify-center px-6 pb-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <div className="auth-content hidden lg:block">
            <p className="mb-5 text-[9px] font-semibold tracking-[0.5em] text-[#f5b82e]">PURE • NATURAL</p>

            <h1 className="font-display text-6xl leading-[0.95] xl:text-8xl">
              Welcome to
              <br />
              <span className="text-[#f5b82e]">TIYAS FOOD</span>
            </h1>

            <p className="mt-8 max-w-md text-sm leading-7 text-stone-500">
              Create your account and enjoy fresh, thoughtfully crafted dairy essentials designed for everyday wellness.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[#f5b82e]/40" />
              <span className="text-[8px] tracking-[0.3em] text-stone-600">MADE WITH CARE</span>
            </div>
          </div>

          <div className="auth-card mx-auto w-full max-w-[520px]">
            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-7 shadow-2xl backdrop-blur-2xl sm:p-9">
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#f5b82e]/10 blur-[70px]" />
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#f5b82e]/50 to-transparent" />

              <div className="relative">
                <p className="text-[8px] font-semibold tracking-[0.4em] text-[#f5b82e]">START YOUR JOURNEY</p>
                <h2 className="mt-3 font-display text-4xl">Create account.</h2>
                <p className="mt-3 text-xs leading-6 text-stone-500">
                  Join TIYAS and bring pure, natural goodness home.
                </p>
              </div>

              <form className="relative mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[9px] tracking-[0.2em] text-stone-500">FIRST NAME</label>
                    <div className="relative">
                      <UserRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" />
                      <input
                        type="text"
                        placeholder="John"
                        className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 pl-11 pr-4 text-sm outline-none placeholder:text-stone-700 transition focus:border-[#f5b82e]/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] tracking-[0.2em] text-stone-500">LAST NAME</label>
                    <div className="relative">
                      <UserRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" />
                      <input
                        type="text"
                        placeholder="Doe"
                        className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 pl-11 pr-4 text-sm outline-none placeholder:text-stone-700 transition focus:border-[#f5b82e]/40"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[9px] tracking-[0.2em] text-stone-500">EMAIL ADDRESS</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 pl-11 pr-4 text-sm outline-none placeholder:text-stone-700 transition focus:border-[#f5b82e]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[9px] tracking-[0.2em] text-stone-500">PASSWORD</label>
                  <div className="relative">
                    <LockKeyhole size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 pl-11 pr-12 text-sm outline-none placeholder:text-stone-700 transition focus:border-[#f5b82e]/40"
                    />
                    <Eye size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#f5b82e] text-[10px] font-bold tracking-[0.25em] text-[#0c0a09] transition hover:bg-[#ffd166]"
                >
                  CREATE ACCOUNT
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </button>
              </form>

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[8px] text-stone-700">OR</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <p className="text-center text-[10px] text-stone-600">
                Already have an account?
                <Link href="/login" className="ml-2 text-[#f5b82e] hover:text-[#ffd166]">
                  Sign in
                </Link>
              </p>
            </div>

            <p className="mt-6 text-center text-[8px] tracking-[0.3em] text-stone-700">PURE • NATURAL • YOURS</p>
          </div>
        </div>
      </section>
    </main>
  );
}
