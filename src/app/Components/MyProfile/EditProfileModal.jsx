"use client";

import { X } from "lucide-react";

export default function EditProfileModal({ isOpen, onClose, formData, setFormData, onSave }) {
  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl rounded-[30px] border border-white/10 bg-[#15120e] p-6 shadow-2xl shadow-black/40 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#f5b82e]">EDIT</p>
            <h3 className="mt-2 font-display text-3xl text-stone-100">Profile details</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#0c0a09] text-stone-300 transition hover:border-[#f5b82e]/30 hover:text-[#ffd166]"
            aria-label="Close edit profile"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-stone-500">First name</span>
            <input
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="h-12 w-full rounded-full border border-white/10 bg-[#0c0a09] px-4 text-sm text-stone-100 outline-none transition focus:border-[#f5b82e]/50"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Last name</span>
            <input
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="h-12 w-full rounded-full border border-white/10 bg-[#0c0a09] px-4 text-sm text-stone-100 outline-none transition focus:border-[#f5b82e]/50"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Email</span>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="h-12 w-full rounded-full border border-white/10 bg-[#0c0a09] px-4 text-sm text-stone-100 outline-none transition focus:border-[#f5b82e]/50"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Phone</span>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="h-12 w-full rounded-full border border-white/10 bg-[#0c0a09] px-4 text-sm text-stone-100 outline-none transition focus:border-[#f5b82e]/50"
            />
          </label>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-[#0c0a09] px-5 py-3 text-sm font-medium text-stone-300 transition hover:border-[#f5b82e]/30 hover:text-[#ffd166]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onSave}
            className="rounded-full gold-gradient px-5 py-3 text-sm font-semibold text-[#0c0a09] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#f5b82e]/20"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
