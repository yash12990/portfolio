import Link from "next/link";
import { contactDetails, socialLinks } from "@/data/portfolio";

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col gap-y-8">
      <div>
        <h3 className="text-lg font-semibold text-white">Contact details</h3>
        <p className="mt-1 text-sm text-zinc-500">
          Prefer something direct? Reach me here.
        </p>

        <div className="mt-6 flex flex-col gap-y-3">
          {contactDetails.map(({ icon: Icon, label, value }) => {
            const href =
              label === "Email"
                ? `mailto:${value}`
                : label === "Phone"
                  ? `tel:${value.replace(/\s/g, "")}`
                  : undefined;

            const content = (
              <div className="flex items-center gap-x-4 rounded-xl border border-white/8 bg-white/3 p-4 transition-colors hover:border-brand/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-brand/10 text-brand-2">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-zinc-500 uppercase">
                    {label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-white">
                    {value}
                  </p>
                </div>
              </div>
            );

            return href ? (
              <Link key={label} href={href} className="block">
                {content}
              </Link>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="text-sm font-semibold text-white">Find me online</h3>
        <div className="mt-4 flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, ...platform }) => (
            <Link
              key={platform.label}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-zinc-400 transition-all duration-300 hover:scale-105 hover:border-brand/50 hover:bg-white/8 hover:text-brand"
            >
              <Icon className="h-[1.15rem] w-[1.15rem]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
