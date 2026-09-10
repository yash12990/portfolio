import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="#top"
      aria-label="Yash Gupta — back to top"
      className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-br from-brand via-brand-2 to-brand-3 text-[13px] font-bold text-white shadow-lg shadow-brand/30">
        YG
      </span>
    </Link>
  );
}
