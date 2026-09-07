"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Package,
  UserRound,
  ArrowLeft,
} from "lucide-react";
import EditProfileModal from "./EditProfileModal";

const orders = [
  {
    id: "#TIYAS2031",
    item: "A2 Bilona Ghee",
    status: "Delivered",
    date: "12 Aug 2026",
    total: "₹899",
  },
  {
    id: "#TIYAS2047",
    item: "Natural Protein",
    status: "Shipped",
    date: "18 Aug 2026",
    total: "₹2,998",
  },
  {
    id: "#TIYAS2052",
    item: "Farm Box",
    status: "Processing",
    date: "22 Aug 2026",
    total: "₹1,499",
  },
];

const accountLinks = [
  {
    label: "Account Details",
    icon: MapPin,
    description: "Manage your account information",
    tab: "account",
  },
  {
    label: "My Orders",
    icon: Package,
    description: "Track recent purchases",
    tab: "orders",
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("account");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Ankit",
    lastName: "Yadav",
    email: "ankit@gmail.com",
    phone: "+91 98765 XXXXX",
    memberSince: "January 2025",
  });

  const handleSaveProfile = () => setIsEditOpen(false);

  const accountInfo = [
    { label: "Name", value: `${formData.firstName} ${formData.lastName}` },
    { label: "Email", value: formData.email },
    { label: "Phone", value: formData.phone },
    { label: "Member since", value: formData.memberSince },
  ];

  return (
    <>
      <main className="min-h-screen bg-[#090807] pb-20 pt-32 text-stone-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#f5b82e]">
                MY ACCOUNT
              </p>
              <h1 className="font-display text-4xl md:text-6xl">Profile</h1>
            </div>

            <Link
              href="/Products"
              className="group inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-[#ffd166]"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Continue shopping
            </Link>
          </div>

          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.8fr]">
            <aside className="h-fit rounded-[30px] border border-white/10 bg-[#15120e] p-6">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#f5b82e]/15 text-xl font-bold text-[#f5b82e]">
                  <UserRound size={28} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                    Welcome back
                  </p>
                  <h2 className="mt-1 font-display text-3xl">Ankit Yadav</h2>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {accountLinks.map(({ label, icon: Icon, description, tab }) => {
                  const isActive = activeTab === tab;

                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-[#f5b82e]/30 bg-[#f5b82e]/10"
                          : "border-white/10 bg-[#0c0a09] hover:border-[#f5b82e]/30 hover:bg-[#17120d]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`grid h-10 w-10 place-items-center rounded-full ${
                            isActive
                              ? "bg-[#f5b82e]/20 text-[#f5b82e]"
                              : "bg-[#f5b82e]/10 text-[#f5b82e]"
                          }`}
                        >
                          <Icon size={17} />
                        </div>

                        <div>
                          <div className="text-sm font-medium text-stone-100">{label}</div>
                          <div className="text-[11px] text-stone-500">{description}</div>
                        </div>
                      </div>

                      <ChevronRight
                        size={16}
                        className={`transition ${
                          isActive ? "translate-x-1 text-[#f5b82e]" : "text-stone-500"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </aside>

            <section>
              {activeTab === "account" && (
                <div className="rounded-[30px] border border-[#f5b82e]/10 bg-[#15120e] p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.25em] text-[#f5b82e]">
                        PROFILE
                      </p>
                      <h2 className="mt-2 font-display text-3xl">Account details</h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsEditOpen(true)}
                      className="cursor-pointer rounded-full border border-white/10 bg-[#0c0a09] px-4 py-2 text-xs font-medium text-stone-300 transition hover:border-[#f5b82e]/30 hover:text-[#ffd166]"
                    >
                      Edit profile
                    </button>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {accountInfo.map(({ label, value }) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-[#0c0a09] p-4">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                          {label}
                        </p>
                        <p className="mt-3 text-lg font-medium text-stone-100">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="rounded-[30px] border border-white/10 bg-[#15120e] p-6">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab("account")}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#0c0a09] text-stone-400 transition hover:border-[#f5b82e]/30 hover:text-[#f5b82e]"
                    >
                      <ArrowLeft size={17} />
                    </button>

                    <div>
                      <p className="text-xs font-semibold tracking-[0.25em] text-[#f5b82e]">
                        RECENT
                      </p>
                      <h2 className="mt-2 font-display text-3xl">My orders</h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0c0a09] px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[#f5b82e]">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                              {order.id}
                            </span>
                          </div>

                          <p className="mt-2 text-base font-medium text-stone-100">{order.item}</p>
                        </div>

                        <div className="flex items-center gap-4 sm:justify-end">
                          <div className="text-left sm:text-right">
                            <p className="text-xs text-stone-500">{order.date}</p>
                            <p className="mt-1 text-sm font-semibold text-[#ffd166]">{order.total}</p>
                          </div>

                          <span className="rounded-full border border-[#f5b82e]/20 bg-[#f5b82e]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5b82e]">
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSaveProfile}
      />
    </>
  );
}