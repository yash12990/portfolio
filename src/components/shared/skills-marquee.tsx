import Image from "next/image";
import { SkillsLogos } from "@/data/portfolio";
import type { SkillLogo } from "@/types";

function SkillChip({ logo }: { logo: SkillLogo }) {
  return (
    <div className="flex items-center gap-x-3.5 rounded-xl border border-white/8 bg-white/4 px-5 py-3.5">
      <Image
        src={logo.image}
        alt={logo.name}
        className="h-8 w-8 object-contain"
        style={
          logo.name !== "Next.js"
            ? { filter: "grayscale(1) sepia(1) hue-rotate(228deg) saturate(3.5)" }
            : undefined
        }
      />
      <div>
        <p className="text-sm font-semibold whitespace-nowrap text-zinc-100">
          {logo.name}
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] text-brand-2/70 uppercase">
          Technology
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  duration,
}: {
  items: SkillLogo[];
  duration: string;
}) {
  const style = { animation: `marquee ${duration} linear infinite` };

  return (
    <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Two identical lists — when list 1 exits left, list 2 slides into place */}
      <ul className="flex shrink-0 gap-x-4 pr-4" style={style}>
        {items.map((logo, i) => (
          <li key={i} className="shrink-0">
            <SkillChip logo={logo} />
          </li>
        ))}
      </ul>
      <ul className="flex shrink-0 gap-x-4 pr-4" style={style} aria-hidden>
        {items.map((logo, i) => (
          <li key={i} className="shrink-0">
            <SkillChip logo={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsMarquee() {
  return <MarqueeRow items={SkillsLogos} duration="25s" />;
}
