import Image from "next/image";
import { SkillsLogos } from "@/lib/constants";

const reversedLogos = [...SkillsLogos].reverse();

function SkillCard({ logo }: { logo: (typeof SkillsLogos)[number] }) {
  return (
    <div className="flex items-center gap-x-4 px-5 py-4 bg-white/4 border border-white/8 rounded-xl">
      {logo.name !== "Next.js" ? (
        <Image
          src={logo.image}
          alt={logo.name}
          className="h-9 w-9 object-contain"
          style={{
            filter: "grayscale(1) sepia(1) hue-rotate(228deg) saturate(3.5)",
          }}
          priority
        />
      ) : (
        <Image
          src={logo.image}
          alt={logo.name}
          className="h-9 w-9 object-contain"
          priority
        />
      )}
      <div>
        <p className="text-white font-bold text-sm uppercase tracking-wider whitespace-nowrap">
          {logo.name}
        </p>
        <p className="text-violet-400/60 text-[10px] font-bold tracking-[0.2em] uppercase">
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
  items: typeof SkillsLogos;
  duration: string;
}) {
  const style = { animation: `marquee ${duration} linear infinite` };

  return (
    <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Two identical lists — when list 1 exits left, list 2 slides into its place */}
      <ul className="flex shrink-0 gap-x-4 pr-4" style={style}>
        {items.map((logo, i) => (
          <li key={i} className="shrink-0">
            <SkillCard logo={logo} />
          </li>
        ))}
      </ul>
      <ul className="flex shrink-0 gap-x-4 pr-4" style={style} aria-hidden>
        {items.map((logo, i) => (
          <li key={i} className="shrink-0">
            <SkillCard logo={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsLogoMarquee() {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center gap-y-4 mb-14">
        <h2 className="text-6xl font-bold tracking-tight leading-tight">
          <span className="text-white">The </span>
          <span className="text-violet-400">Tech Stack</span>
        </h2>
      </div>

      {/* Two marquee rows */}
      <div className="flex flex-col gap-y-4">
        <MarqueeRow items={SkillsLogos} duration="25s" />
        {/* <MarqueeRow items={reversedLogos} duration="18s" /> */}
      </div>
    </section>
  );
}
