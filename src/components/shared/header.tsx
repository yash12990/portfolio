"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./logo";
import { NavBarLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = NavBarLinks.map((l) => l.href.slice(1));

export default function Header() {
  const activeId = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-slide-down">
      <div className="container-px pt-4">
        <nav
          className={cn(
            "mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border py-2 pr-2 pl-5 transition-all duration-300",
            scrolled
              ? "border-white/10 bg-ink-2/80 shadow-xl shadow-black/40 backdrop-blur-xl"
              : "border-white/6 bg-white/3 backdrop-blur-md",
          )}
        >
          <Logo />

          {/* Desktop links with sliding active indicator */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NavBarLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.07]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1 rounded-full bg-linear-to-r from-brand to-brand-2 px-4 py-1.5 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.04]"
            >
              Get in touch
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-0 z-40"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="container-px relative pt-24"
            >
              <ul className="flex flex-col gap-1.5">
                {NavBarLinks.map((link, i) => {
                  const isActive = activeId === link.href.slice(1);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border px-5 py-4 text-lg font-medium transition-colors",
                          isActive
                            ? "border-brand/30 bg-brand/10 text-white"
                            : "border-white/6 bg-white/2 text-zinc-300 hover:text-white",
                        )}
                      >
                        {link.label}
                        <ArrowUpRight size={18} className="text-zinc-500" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
