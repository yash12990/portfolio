import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { HeroVisual } from "./hero-visual";
import { availability, site, socialLinks, EMAIL_ID } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative grid min-h-svh items-center gap-14 pt-28 pb-20 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pt-32"
    >
      <ScrollReveal className="flex flex-col items-start gap-6">
        {availability.open && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {availability.label}
          </span>
        )}

        <div>
          <p className="font-mono text-sm text-zinc-500">Hi, I&apos;m</p>
          <h1 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-50 text-balance">
            {site.name}
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-medium text-zinc-300">
            <span className="bg-linear-to-r from-brand via-brand-2 to-brand-3 bg-clip-text text-transparent">
              Frontend
            </span>{" "}
            Software Engineer
          </p>
        </div>

        <p className="max-w-md text-base leading-relaxed text-zinc-400 text-pretty">
          {site.tagline} I craft modern, responsive interfaces that look
          refined and perform flawlessly.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Magnetic className="inline-flex">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand to-brand-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/35"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </Magnetic>

          <Magnetic className="inline-flex">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/3 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:text-white"
            >
              <Mail size={16} />
              Contact Me
            </Link>
          </Magnetic>
        </div>

        <div className="flex items-center gap-3 pt-2">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 transition-colors hover:border-brand/40 hover:bg-white/6"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-300 transition-colors hover:border-brand/40 hover:bg-white/6 hover:text-white"
          >
            <Mail size={16} />
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="w-full">
        <HeroVisual />
      </ScrollReveal>
    </section>
  );
}
