"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const AUTH_PATHS = ["/login", "/signup"];

export default function AppShell({ children }) {
  const pathname = usePathname() || "/";
  const isAuthPage = AUTH_PATHS.includes(pathname) || pathname.startsWith("/login/") || pathname.startsWith("/signup/");

  return (
    <div className="min-h-screen flex flex-col bg-[#090807] text-stone-100">
      {!isAuthPage && <Header />}
      <main className="flex-1">{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
}