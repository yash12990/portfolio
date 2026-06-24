import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

type SectionHeadingProps = {
  /** Small mono label shown above the title. */
  eyebrow?: string;
  /** Plain leading part of the title. */
  title: string;
  /** Optional gradient-accented trailing part of the title. */
  accent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <ScrollReveal
      className={cn(
        "flex flex-col gap-y-4",
        isCenter && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] text-brand uppercase">
          <span className="h-px w-6 bg-linear-to-r from-brand to-transparent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-zinc-50">
        {title}
        {accent && (
          <>
            {" "}
            <span className="bg-linear-to-r from-brand via-brand-2 to-brand-3 bg-clip-text text-transparent">
              {accent}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "text-pretty text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
