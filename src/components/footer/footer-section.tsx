import Link from "next/link";
import Logo from "@/components/logo";
import { NavBarLinks, contactDetails, socialLinks } from "@/lib/constants";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/8 bg-[#07071a]/70 mt-20">
      <div className="xl:px-40 lg:px-28 sm:px-20 px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left — Logo + tagline */}
          <div className="flex flex-col gap-5 max-w-xs">
            <Logo />
            <p className="text-white/40 text-sm leading-relaxed">
              Professional Full Stack Developer dedicated to crafting immersive,
              high-performance digital experiences with cutting-edge technology.
            </p>
          </div>

          {/* Middle — Navigation */}
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Navigation
            </span>
            <nav className="flex flex-col gap-3">
              {NavBarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — Connect */}
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Connect
            </span>
            <div className="flex flex-col gap-3">
              {contactDetails.slice(0, 2).map((detail) => (
                <span key={detail.label} className="text-sm text-white/60">
                  {detail.value}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Icon}
                    alt={label}
                    width={24}
                    height={24}
                    className="rounded-full object-contain bg-white h-8 w-8"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="xl:px-40 lg:px-28 sm:px-20 px-4 py-5 flex items-center justify-between text-xs text-white/30">
          <span>© 2026 Yash Gupta. All rights reserved.</span>
          <span>
            Made with <span className="text-red-500">♥</span> in India
          </span>
        </div>
      </div>
    </footer>
  );
}
