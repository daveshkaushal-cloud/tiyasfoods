import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck } from "lucide-react";

const cartItems = [
    {
        id: 1,
        name: "A2 Bilona Ghee",
        subtitle: "500 ml",
        price: 899,
        quantity: 1,
        image: "/assets/hero-section-1.jpeg",
        badge: "BESTSELLER",
    },
    {
        id: 2,
        name: "Natural Protein",
        subtitle: "1 kg",
        price: 1499,
        quantity: 2,
        image: "/assets/hero-section-2.jpeg",
        badge: "NEW",
    },
];

const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
const shipping = subtotal > 1999 ? 0 : 99;
const total = subtotal + shipping;

export default async function CartPage() {

    return (
        <main className="min-h-screen bg-[#090807] pt-32 pb-20 text-stone-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">YOUR BAG</p>
                        <h1 className="font-display text-4xl md:text-6xl">Cart</h1>
                    </div>

                    <Link
                        href="/Products"
                        className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-[#ffd166]"
                    >
                        <ArrowLeft size={16} />
                        Continue shopping
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
                    <section className="space-y-5">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-[28px] border border-white/10 bg-[#15120e] p-4 shadow-[0_0_0_1px_rgba(245,184,46,0.04)] sm:p-5"
                            >
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
                                            <p className="mt-1 text-sm text-stone-500">{item.subtitle}</p>
                                        </div>

                                        <div className="flex items-center justify-between gap-4 sm:justify-end">
                                            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0c0a09] px-2 py-2">
                                                <button className="grid h-7 w-7 place-items-center rounded-full text-stone-300 transition hover:bg-white/5 hover:text-white" aria-label={`Decrease quantity of ${item.name}`}>
                                                    <Minus size={14} />
                                                </button>
                                                <span className="min-w-5 text-center text-sm font-medium text-stone-100">{item.quantity}</span>
                                                <button className="grid h-7 w-7 place-items-center rounded-full text-stone-300 transition hover:bg-white/5 hover:text-white" aria-label={`Increase quantity of ${item.name}`}>
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-lg font-semibold text-[#ffd166]">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                                                <button className="mt-2 inline-flex items-center gap-2 text-xs text-stone-500 transition hover:text-[#f5b82e]">
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

                    <aside className="rounded-[30px] border border-[#f5b82e]/10 bg-[#15120e] p-6 h-fit">
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

                        <button className="mt-6 w-full rounded-full gold-gradient px-5 py-4 text-sm font-semibold text-[#0c0a09] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#f5b82e]/20">
                            Checkout securely
                        </button>

                        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-stone-500">
                            <ShieldCheck size={14} className="text-[#f5b82e]" />
                            Secure payment • Trusted quality
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0c0a09] px-4 py-3 text-xs text-stone-400">
                            <ShoppingBag size={14} className="text-[#f5b82e]" />
                            {cartItems.length} items in your cart
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
