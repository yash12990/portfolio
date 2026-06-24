"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Back to top"
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-xs font-medium text-zinc-400 transition-colors hover:border-brand/40 hover:text-white"
    >
      Back to top
      <ArrowUp
        size={14}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}
