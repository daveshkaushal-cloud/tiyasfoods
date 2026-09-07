"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    Check,
    Leaf,
    LogIn,
    Minus,
    Plus,
    ShieldCheck,
    ShoppingBag,
    Sparkles,
    Trash2,
    Truck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function CartPage() {
    const router = useRouter();
    const { cartItems, subtotal, hydrated, updateQuantity, removeFromCart } = useCart();
    const { isAuthenticated, loading } = useAuth();

    const shipping = subtotal === 0 || subtotal > 999 ? 0 : 99;
    const total = subtotal + shipping;
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const freeShippingTarget = 999;
    const remainingForFreeShipping = Math.max(0, freeShippingTarget - subtotal);
    const shippingProgress = Math.min(100, (subtotal / freeShippingTarget) * 100);

    const handleCheckout = () => {
        if (loading) return;
        if (!isAuthenticated) {
            router.push("/login?redirect=/Cart");
            return;
        }

        alert("You are signed in. Checkout integration is the next step.");
    };

    if (!hydrated) {
        return (
            <main className="min-h-screen bg-[#F8F1E3] pt-32 pb-20 text-[#2B241D]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="h-40 animate-pulse rounded-[32px] border border-[#DDC9A5] bg-[#FFFDF8]" />
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F8F1E3] text-[#2B241D]">
            <section className="relative overflow-hidden bg-[#173D2D] pt-32 text-[#FFF8E8]">
                <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#E59A38]/20 blur-[100px]" />
                <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#9DBA73]/15 blur-[100px]" />

                <div className="relative mx-auto max-w-7xl px-6 pb-12 lg:px-8 lg:pb-16">
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4D38A]/25 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold tracking-[0.28em] text-[#F4C25D]">
                                <ShoppingBag size={14} /> YOUR TIYAS BAG
                            </div>
                            <h1 className="font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                                Your goodness,
                                <span className="block text-[#F4C25D]">ready for home.</span>
                            </h1>
                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#E7DDCC]">
                                Review your favourites, adjust quantities and sign in only when you’re ready to continue with your order.
                            </p>
                        </div>

                        <Link
                            href="/Products"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F4D38A]/25 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-[#FFF8E8] transition hover:bg-[#F4C25D] hover:text-[#173D2D]"
                        >
                            <ArrowLeft size={16} />
                            Continue shopping
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#D8C6A4] bg-[#F3E5C9]">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-[#54483A] sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <div className="flex items-center gap-2.5">
                        <Truck size={17} className="text-[#477453]" />
                        {remainingForFreeShipping > 0 ? (
                            <span>Add ₹{remainingForFreeShipping.toLocaleString("en-IN")} more for free delivery.</span>
                        ) : (
                            <span className="font-semibold text-[#477453]">You’ve unlocked free delivery.</span>
                        )}
                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#DDCFB4] sm:max-w-[280px]">
                        <div
                            className="h-full rounded-full bg-[#477453] transition-all duration-500"
                            style={{ width: `${shippingProgress}%` }}
                        />
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                {cartItems.length === 0 ? (
                    <section className="relative overflow-hidden rounded-[38px] border border-[#DCCCAD] bg-[#FFFDF8] px-6 py-16 text-center shadow-[0_20px_60px_rgba(91,70,40,0.08)] sm:py-20">
                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#E7B64C]/15 blur-[90px]" />
                        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#89A76D]/15 blur-[90px]" />

                        <div className="relative">
                            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#E7EEDC] text-[#477453]">
                                <ShoppingBag size={30} strokeWidth={1.6} />
                            </div>
                            <p className="mt-7 text-[10px] font-semibold tracking-[0.28em] text-[#B66A3C]">YOUR PANTRY IS WAITING</p>
                            <h2 className="mt-4 font-serif text-4xl text-[#2E3F2E] sm:text-5xl">Your cart is empty.</h2>
                            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#74695C]">
                                Add a little everyday goodness from our collection and we’ll keep it here while you explore.
                            </p>
                            <Link
                                href="/Products"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D86C40] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#C35D35]"
                            >
                                Explore the pantry
                                <Sparkles size={15} />
                            </Link>
                        </div>
                    </section>
                ) : (
                    <div className="grid gap-8 lg:grid-cols-[1.45fr_0.72fr] lg:items-start">
                        <section>
                            <div className="mb-6 flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-[10px] font-semibold tracking-[0.26em] text-[#B66A3C]">IN YOUR BAG</p>
                                    <h2 className="mt-2 font-serif text-3xl text-[#2E3F2E]">{itemCount} {itemCount === 1 ? "item" : "items"}</h2>
                                </div>
                                <p className="hidden text-xs text-[#8A7D6D] sm:block">Quantities update instantly</p>
                            </div>

                            <div className="space-y-5">
                                {cartItems.map((item) => (
                                    <article
                                        key={item.id}
                                        className="overflow-hidden rounded-[30px] border border-[#DCCCAD] bg-[#FFFDF8] shadow-[0_16px_45px_rgba(91,70,40,0.06)]"
                                    >
                                        <div className="grid sm:grid-cols-[180px_1fr]">
                                            <div className="relative min-h-[190px] overflow-hidden bg-[#EEE2CB] sm:min-h-full">
                                                <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover" />
                                                <div className="absolute inset-0 bg-linear-to-t from-[#3A2E24]/45 via-transparent to-transparent" />
                                                {item.badge && (
                                                    <span className="absolute left-4 top-4 rounded-full bg-[#173D2D] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#FFF5DC]">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-col justify-between p-5 sm:p-6">
                                                <div className="flex items-start justify-between gap-5">
                                                    <div>
                                                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B66A3C]">TIYAS FOODS</p>
                                                        <h3 className="mt-2 font-serif text-2xl text-[#2E3F2E] sm:text-3xl">{item.name}</h3>
                                                        <p className="mt-2 text-sm text-[#837769]">{item.subtitle || item.size}</p>
                                                    </div>
                                                    <p className="whitespace-nowrap text-xl font-bold text-[#2E3F2E]">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                                                </div>

                                                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8DCC5] pt-5">
                                                    <div className="inline-flex items-center rounded-full border border-[#D9C9A9] bg-[#F7F0E3] p-1.5">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="grid h-9 w-9 place-items-center rounded-full text-[#5E554B] transition hover:bg-[#E7EEDC] hover:text-[#315D3C]"
                                                            aria-label={`Decrease quantity of ${item.name}`}
                                                        >
                                                            <Minus size={15} />
                                                        </button>
                                                        <span className="min-w-10 text-center text-sm font-bold text-[#342E28]">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="grid h-9 w-9 place-items-center rounded-full text-[#5E554B] transition hover:bg-[#E7EEDC] hover:text-[#315D3C]"
                                                            aria-label={`Increase quantity of ${item.name}`}
                                                        >
                                                            <Plus size={15} />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#9A6653] transition hover:text-[#C6533D]"
                                                    >
                                                        <Trash2 size={14} />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-[22px] bg-[#E5EDD8] p-4 text-[#315D3C]">
                                    <Leaf size={18} />
                                    <p className="mt-3 text-xs font-semibold">Thoughtful ingredients</p>
                                </div>
                                <div className="rounded-[22px] bg-[#F5DEC5] p-4 text-[#9A5B37]">
                                    <Truck size={18} />
                                    <p className="mt-3 text-xs font-semibold">Packed & shipped with care</p>
                                </div>
                                <div className="rounded-[22px] bg-[#F3E3A9] p-4 text-[#765C18]">
                                    <ShieldCheck size={18} />
                                    <p className="mt-3 text-xs font-semibold">Secure checkout flow</p>
                                </div>
                            </div>
                        </section>

                        <aside className="lg:sticky lg:top-28">
                            <div className="overflow-hidden rounded-[34px] border border-[#244B38]/15 bg-[#173D2D] text-[#FFF8E8] shadow-[0_24px_70px_rgba(35,61,45,0.18)]">
                                <div className="border-b border-white/10 px-6 py-6">
                                    <p className="text-[10px] font-semibold tracking-[0.28em] text-[#F4C25D]">ORDER SUMMARY</p>
                                    <h2 className="mt-2 font-serif text-3xl">Almost yours.</h2>
                                </div>

                                <div className="p-6">
                                    <div className="space-y-4 text-sm text-[#E7DDCE]">
                                        <div className="flex items-center justify-between gap-4">
                                            <span>Subtotal</span>
                                            <span className="font-semibold text-[#FFF8E8]">₹{subtotal.toLocaleString("en-IN")}</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-4">
                                            <span>Shipping</span>
                                            <span className={shipping === 0 ? "font-semibold text-[#CDE1A2]" : "font-semibold text-[#FFF8E8]"}>
                                                {shipping === 0 ? "Free" : `₹${shipping.toLocaleString("en-IN")}`}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-white/10 pt-5 text-base">
                                            <span className="font-semibold">Total</span>
                                            <span className="text-2xl font-bold text-[#F4C25D]">₹{total.toLocaleString("en-IN")}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-[22px] border border-[#F4D38A]/15 bg-white/[0.06] p-4">
                                        <div className="flex items-start gap-3">
                                            <Truck className="mt-0.5 shrink-0 text-[#F4C25D]" size={17} />
                                            <div>
                                                <p className="text-sm font-semibold text-[#FFF8E8]">Delivery made simple</p>
                                                <p className="mt-1 text-xs leading-5 text-[#CFC6B8]">Free delivery above ₹999. Your basket stays saved while you browse or sign in.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {!isAuthenticated && !loading ? (
                                        <div className="mt-4 rounded-[22px] bg-[#FFF4D8] p-4 text-[#493D2E]">
                                            <div className="flex items-start gap-3">
                                                <LogIn className="mt-0.5 shrink-0 text-[#B66A3C]" size={17} />
                                                <div>
                                                    <p className="text-sm font-bold">Sign in only at checkout</p>
                                                    <p className="mt-1 text-xs leading-5 text-[#756755]">Keep shopping freely. We’ll ask you to log in only when you’re ready to place the order.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : isAuthenticated ? (
                                        <div className="mt-4 flex items-center gap-2 rounded-[22px] bg-[#DCE9C5] p-4 text-sm font-semibold text-[#315D3C]">
                                            <Check size={17} />
                                            You’re signed in and ready to continue.
                                        </div>
                                    ) : null}

                                    <button
                                        onClick={handleCheckout}
                                        disabled={loading}
                                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#F4C25D] px-5 py-4 text-sm font-bold text-[#173D2D] transition hover:-translate-y-0.5 hover:bg-[#FFD56D] disabled:cursor-wait disabled:opacity-60"
                                    >
                                        {loading ? "Checking account..." : isAuthenticated ? "Checkout securely" : "Login to checkout"}
                                        {!loading && <ShieldCheck size={16} />}
                                    </button>

                                    <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[#BFB6A8]">
                                        <ShieldCheck size={13} className="text-[#CDE1A2]" />
                                        Secure checkout • Trusted quality
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-[24px] border border-[#DCCCAD] bg-[#FFFDF8] px-5 py-4 text-center text-xs text-[#71675B]">
                                <ShoppingBag size={14} className="mr-2 inline text-[#477453]" />
                                {itemCount} {itemCount === 1 ? "item" : "items"} currently in your bag
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    );
}
