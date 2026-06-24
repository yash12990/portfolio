import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/shared/logo";
import { BackToTop } from "@/components/shared/back-to-top";
import { NavBarLinks, socialLinks, site } from "@/data/portfolio";

export default function FooterSection() {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/8">
      <div className="container-px py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <p className="hidden text-sm text-zinc-500 sm:block">
              {site.role}
            </p>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {NavBarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white transition-transform hover:scale-105"
              >
                <Image
                  src={icon}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  className="h-full w-full rounded-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/8 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-zinc-500">
            © 2026 {site.name}. Crafted with Next.js & Tailwind CSS.
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
