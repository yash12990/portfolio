import { NavBarLinks } from "@/lib/constants";
import Link from "next/link";

export default function HeaderNavbar() {
  return (
    <nav className="flex items-center gap-x-8 text-sm font-medium">
      {NavBarLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative text-white/50 hover:text-white transition-colors duration-200 group"
        >
          {link.label}
          {/* Underline indicator — toggle `opacity-100` on the active link */}
          <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-violet-500 opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
        </Link>
      ))}
    </nav>
  );
}
