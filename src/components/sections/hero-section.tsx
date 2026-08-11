import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Magnetic } from "@/components/shared/magnetic";
import {
  availability,
  hero,
  site,
  socialLinks,
  EMAIL_ID,
} from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center pt-32 pb-16 text-center"
    >
      <ScrollReveal className="flex w-full flex-col items-center gap-7">
        {/* Availability pill + role / location eyebrow */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {availability.open && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              {availability.label}
            </span>
          )}

          <p className="font-mono text-[11px] tracking-[0.2em] text-brand/85 uppercase sm:text-xs">
            {site.role} · {site.location}
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance text-zinc-50 sm:text-6xl lg:text-7xl">
          {hero.headline.lead}{" "}
          <span className="bg-linear-to-r from-brand via-brand-2 to-brand-3 bg-clip-text text-transparent">
            {hero.headline.accent}
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg">
          I&apos;m <span className="font-semibold text-zinc-200">Yash</span> —{" "}
          {hero.intro}
        </p>

        {/* Primary actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Magnetic className="inline-flex">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-brand to-brand-2 px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-brand/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/35"
            >
              <Mail size={16} />
              Get in touch
            </Link>
          </Magnetic>

          <Magnetic className="inline-flex">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/3 px-6 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-colors duration-300 hover:border-brand/40 hover:text-white"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </Magnetic>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 transition-colors hover:border-brand/40 hover:bg-white/6"
            >
              <Image
                src={social.icon}
                alt=""
                aria-hidden
                width={18}
                height={18}
                className="h-4.5 w-4.5 rounded-full object-contain"
              />
            </Link>
          ))}
          <Link
            href={`mailto:${EMAIL_ID}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-zinc-300 transition-colors hover:border-brand/40 hover:bg-white/6 hover:text-white"
          >
            <Mail size={17} />
          </Link>
        </div>
      </ScrollReveal>

      {/* Stat strip */}
      <ScrollReveal delay={0.15} className="mt-16 w-full">
        <dl className="mx-auto grid w-full max-w-2xl grid-cols-3 divide-x divide-white/8 overflow-hidden rounded-2xl border border-white/10 bg-ink-2/60 backdrop-blur-xl">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 sm:px-8">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block font-mono text-[10px] tracking-[0.16em] text-zinc-500 uppercase sm:text-[11px]">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>

      {/* Scroll cue */}
      <div className="mt-12 flex flex-col items-center gap-2 text-zinc-600">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase">
          Scroll
        </span>
        <span aria-hidden className="animate-bounce text-sm">
          ↓
        </span>
      </div>
    </section>
  );
}
