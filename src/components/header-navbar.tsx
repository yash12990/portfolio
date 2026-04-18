import { NavBarLinks } from "@/lib/constants";
import Link from "next/link";

export default function HeaderNavbar() {
  return (
    <nav className="flex items-center gap-x-8 text-sm font-medium">
      {NavBarLinks.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            i === 0
              ? "text-violet-400"
              : "text-white/65 hover:text-white transition-colors duration-200"
          }
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
