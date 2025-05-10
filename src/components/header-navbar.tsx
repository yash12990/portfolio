import Link from "next/link";
import React from "react";

// type HeaderNavbarProps = {}

export default function HeaderNavbar() {
  return (
    <nav className="text-sm text-slate-300 flex items-center gap-x-8">
      <Link href={""}>About</Link>
      <span>/</span>

      <Link href={""}>Experience</Link>
      <span>/</span>

      <Link href={""}>Projects</Link>
      <span>/</span>

      <Link href={""}>Education</Link>
      <span>/</span>

      <Link href={""}>Contact</Link>
    </nav>
  );
}
