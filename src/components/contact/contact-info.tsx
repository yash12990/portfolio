import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import { contactDetails, socialLinks } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-y-8">
      {/* Direct Contact */}
      <div>
        <div className="flex items-center gap-x-2.5 mb-5">
          <Send size={18} className="text-violet-400" />
          <h3 className="text-xl font-bold text-white">Direct Contact</h3>
        </div>

        <div className="flex flex-col gap-y-3">
          {contactDetails.map(({ icon: Icon, label, value }) => {
            const href =
              label === "Email"
                ? `mailto:${value}`
                : label === "Phone"
                  ? `tel:${value.replace(/\s/g, "")}`
                  : undefined;

            return (
              <div
                key={label}
                className="flex items-center gap-x-4 bg-white/3 border border-white/8 rounded-xl p-4 transition-all duration-300 hover:border-white/15 hover:shadow-[0_4px_20px_rgba(139,92,246,0.07)]"
              >
                <div className="h-10 w-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-white/30 uppercase">
                    {label}
                  </p>
                  {href ? (
                    <Link
                      href={href}
                      className="text-sm font-semibold text-white mt-0.5 hover:text-violet-400 transition-colors duration-200"
                    >
                      {value}
                    </Link>
                  ) : (
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Presence */}
      <div>
        <h3 className="text-xl font-bold text-white mb-5">Social Presence</h3>
        <div className="flex items-center gap-x-3">
          {socialLinks.map((platform) => (
            <Link
              key={platform.label}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.label}
              className="bg-white hover:bg-white h-12 w-12 rounded-full border border-white flex items-center justify-center hover:border-violet-500/80 hover:opacity-90 transition-all duration-200"
            >
              <Image
                src={platform.icon}
                alt={platform.label}
                width={24}
                height={24}
                className="rounded-full w-full h-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
