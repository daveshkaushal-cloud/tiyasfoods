"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck, LogIn } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function CartPage() {
    const router = useRouter();
    const { cartItems, subtotal, hydrated, updateQuantity, removeFromCart } = useCart();
    const { isAuthenticated, loading } = useAuth();

    const shipping = subtotal === 0 || subtotal > 999 ? 0 : 99;
    const total = subtotal + shipping;

    const handleCheckout = () => {
        if (loading) return;
        if (!isAuthenticated) {
            router.push('/login?redirect=/Cart');
            return;
        }

        // Checkout/payment integration can be connected here next.
        alert('You are signed in. Checkout integration is the next step.');
    };

    if (!hydrated) {
        return (
            <main className="min-h-screen bg-[#090807] pt-32 pb-20 text-stone-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="h-40 animate-pulse rounded-[28px] border border-white/10 bg-[#15120e]" />
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#090807] pt-32 pb-20 text-stone-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">YOUR BAG</p>
                        <h1 className="font-display text-4xl md:text-6xl">Cart</h1>
                    </div>

                    <Link href="/Products" className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-[#ffd166]">
                        <ArrowLeft size={16} />
                        Continue shopping
                    </Link>
                </div>

                {cartItems.length === 0 ? (
                    <section className="rounded-[30px] border border-white/10 bg-[#15120e] px-6 py-16 text-center">
                        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#f5b82e]/10 text-[#f5b82e]">
                            <ShoppingBag size={26} />
                        </div>
                        <h2 className="mt-6 font-display text-3xl">Your cart is empty.</h2>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-stone-500">Add your favourites from our collection and they will stay here while you continue browsing.</p>
                        <Link href="/Products" className="mt-7 inline-flex rounded-full bg-[#f5b82e] px-6 py-3 text-sm font-semibold text-[#0c0a09] transition hover:bg-[#ffd166]">
                            Shop Products
                        </Link>
                    </section>
                ) : (
                    <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
                        <section className="space-y-5">
                            {cartItems.map((item) => (
                                <div key={item.id} className="rounded-[28px] border border-white/10 bg-[#15120e] p-4 shadow-[0_0_0_1px_rgba(245,184,46,0.04)] sm:p-5">
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                        <div className="relative h-28 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0a09] sm:w-28">
                                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            <span className="absolute left-2 top-2 rounded-full bg-[#f5b82e]/15 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#f5b82e]">
                                                {item.badge}
                                            </span>
                                        </div>

                                        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                <h2 className="font-display text-2xl text-stone-100">{item.name}</h2>
                                                <p className="mt-1 text-sm text-stone-500">{item.subtitle || item.size}</p>
                                            </div>

                                            <div className="flex items-center justify-between gap-4 sm:justify-end">
                                                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0c0a09] px-2 py-2">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="grid h-7 w-7 place-items-center rounded-full text-stone-300 transition hover:bg-white/5 hover:text-white" aria-label={`Decrease quantity of ${item.name}`}>
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="min-w-5 text-center text-sm font-medium text-stone-100">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="grid h-7 w-7 place-items-center rounded-full text-stone-300 transition hover:bg-white/5 hover:text-white" aria-label={`Increase quantity of ${item.name}`}>
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                <div className="text-right">
                                                    <p className="text-lg font-semibold text-[#ffd166]">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                                                    <button onClick={() => removeFromCart(item.id)} className="mt-2 inline-flex items-center gap-2 text-xs text-stone-500 transition hover:text-[#f5b82e]">
                                                        <Trash2 size={12} />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>

                        <aside className="h-fit rounded-[30px] border border-[#f5b82e]/10 bg-[#15120e] p-6">
                            <p className="text-xs font-semibold tracking-[0.25em] text-[#f5b82e]">ORDER SUMMARY</p>

                            <div className="mt-6 space-y-4 text-sm text-stone-300">
                                <div className="flex items-center justify-between">
                                    <span>Subtotal</span>
                                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? "Free" : `₹${shipping.toLocaleString("en-IN")}`}</span>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-base font-semibold text-stone-100">
                                    <span>Total</span>
                                    <span>₹{total.toLocaleString("en-IN")}</span>
                                </div>
                            </div>

                            <div className="mt-6 rounded-2xl border border-[#f5b82e]/15 bg-[#0c0a09] p-4 text-sm text-stone-300">
                                <div className="flex items-start gap-3">
                                    <Truck className="mt-0.5 text-[#f5b82e]" size={16} />
                                    <span>Free delivery on orders above ₹999. Fresh products shipped with care.</span>
                                </div>
                            </div>

                            {!isAuthenticated && !loading && (
                                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                    <div className="flex items-start gap-3">
                                        <LogIn className="mt-0.5 shrink-0 text-[#f5b82e]" size={16} />
                                        <div>
                                            <p className="text-sm font-medium text-stone-200">Login before checkout</p>
                                            <p className="mt-1 text-xs leading-5 text-stone-500">Your cart is safe. Sign in only when you are ready to continue with your order.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button onClick={handleCheckout} disabled={loading} className="mt-6 w-full rounded-full gold-gradient px-5 py-4 text-sm font-semibold text-[#0c0a09] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#f5b82e]/20 disabled:cursor-wait disabled:opacity-60">
                                {loading ? "Checking account..." : isAuthenticated ? "Checkout securely" : "Login to checkout"}
                            </button>

                            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-stone-500">
                                <ShieldCheck size={14} className="text-[#f5b82e]" />
                                Secure payment • Trusted quality
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0c0a09] px-4 py-3 text-xs text-stone-400">
                                <ShoppingBag size={14} className="text-[#f5b82e]" />
                                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items in your cart
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    );
}
