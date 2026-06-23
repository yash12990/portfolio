"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavBarLinks } from "@/lib/constants";

const SECTION_IDS = NavBarLinks.map((l) => l.href.slice(1));
const OFFSET = 120; // header height + buffer

function getActiveId(): string {
  let active = SECTION_IDS[0];
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= OFFSET) {
      active = id;
    }
  }
  return active;
}

export default function HeaderNavbar() {
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const onScroll = () => setActiveId(getActiveId());
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="flex items-center gap-x-8 text-sm font-medium">
      {NavBarLinks.map((link) => {
        const isActive = activeId === link.href.slice(1);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative transition-colors duration-200 group ${
              isActive ? "text-white" : "text-white/50 hover:text-white"
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-violet-400 to-indigo-400 transition-opacity duration-200 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
