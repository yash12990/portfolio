"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Colour of the cursor-following glow. */
  spotlight?: string;
};

/**
 * Surface card with two premium hover effects:
 *  - a cursor-following radial spotlight, and
 *  - an indigo→violet→cyan gradient border (via the `.gradient-border` class).
 */
export function SpotlightCard({
  children,
  className,
  spotlight = "rgba(99,102,241,0.12)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      className={cn(
        "group gradient-border relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur-sm transition-colors duration-300",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(380px circle at var(--mx) var(--my), ${spotlight}, transparent 72%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
