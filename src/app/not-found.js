import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090807] text-stone-100">
      <div className="mx-6 w-full max-w-lg rounded-3xl border border-white/5 bg-[#15120e] p-10 text-center">
        <h1 className="text-7xl font-display font-bold">404</h1>
        <p className="mt-4 text-2xl">Page not found</p>
        <p className="mt-2 text-sm text-stone-400">We couldn't find the page you were looking for.</p>

        <div className="mt-8">
          <Link href="/" className="inline-block rounded-full bg-[#f5b82e] px-6 py-3 font-semibold text-[#0c0a09]">Go to Home</Link>
        </div>
      </div>
    </div>
  );
}
