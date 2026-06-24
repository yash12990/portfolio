"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import HeroImg from "../../../public/hero-img.webp";
import ReactLogo from "../../../public/skills/react-logo.webp";
import NextLogo from "../../../public/skills/next-logo.svg";
import TsLogo from "../../../public/skills/typescript-logo.webp";
import { site } from "@/data/portfolio";

const badges = [
  { image: ReactLogo, label: "React", className: "-left-4 top-10 sm:-left-8" },
  {
    image: TsLogo,
    label: "TypeScript",
    className: "-right-3 top-1/3 sm:-right-7",
  },
  {
    image: NextLogo,
    label: "Next.js",
    className: "bottom-12 -left-3 sm:-left-6",
  },
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  const floatFor = (i: number): Variants =>
    reduce
      ? {}
      : {
          animate: {
            y: [0, -12, 0],
            transition: {
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            },
          },
        };

  return (
    <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
      {/* Soft gradient glow behind the card */}
      <div className="absolute -inset-8 rounded-[2.5rem] bg-linear-to-br from-brand/30 via-brand-2/20 to-brand-3/20 blur-3xl" />

      {/* Profile card */}
      <div className="relative rounded-[1.75rem] border border-white/10 bg-ink-2/60 p-2.5 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={HeroImg}
            alt={`Portrait of ${site.name}`}
            priority
            sizes="(max-width: 640px) 18rem, 24rem"
            className="aspect-[4/5] w-full object-cover"
          />

          {/* Top-right availability dot */}
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/70 px-2.5 py-1 text-[10px] font-medium text-zinc-200 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            Available
          </span>

          {/* Bottom name plate */}
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink via-ink/70 to-transparent px-4 pb-4 pt-16">
            <p className="text-base font-semibold text-white">{site.name}</p>
            <p className="text-xs text-zinc-400">{site.role}</p>
          </div>
        </div>
      </div>

      {/* Floating tech badges */}
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          variants={floatFor(i)}
          animate="animate"
          className={`absolute ${badge.className} flex items-center gap-2 rounded-xl border border-white/10 bg-ink-2/80 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-md`}
        >
          <Image
            src={badge.image}
            alt=""
            aria-hidden
            className="h-5 w-5 object-contain"
          />
          <span className="text-xs font-medium text-zinc-200">
            {badge.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
