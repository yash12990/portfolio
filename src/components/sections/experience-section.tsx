import { MapPin, CalendarDays, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 scroll-mt-28 sm:py-28">
      <SectionHeading eyebrow="Career" title="Where I've" accent="worked" />

      <RevealGroup className="mt-14 flex flex-col gap-5">
        {experiences.map((exp) => (
          <RevealItem key={exp.company}>
            <SpotlightCard className="p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  {/* Company logo placeholder */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-brand via-brand-2 to-brand-3 text-lg font-bold text-white shadow-lg shadow-brand/25">
                    {exp.company.charAt(0)}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-brand-2">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs font-medium text-zinc-300">
                    <CalendarDays size={13} className="text-zinc-500" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs font-medium text-zinc-300">
                    <MapPin size={13} className="text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand-2">
                      <Check size={11} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-white/8 pt-6">
                {exp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-white/8 bg-white/4 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
