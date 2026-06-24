import { GraduationCap, Award, CalendarDays, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { education, certifications } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 scroll-mt-28 sm:py-28">
      <SectionHeading eyebrow="Background" title="Education &" accent="learning" />

      <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        {education.map((edu) => (
          <RevealItem key={edu.institution} className="h-full">
            <SpotlightCard className="h-full p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-brand via-brand-2 to-brand-3 text-white shadow-lg shadow-brand/25">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-brand-2">{edu.institution}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs font-medium text-zinc-300">
                  <CalendarDays size={13} className="text-zinc-500" />
                  {edu.period}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs font-medium text-zinc-300">
                  <MapPin size={13} className="text-zinc-500" />
                  {edu.location}
                </span>
                {edu.cgpa && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand-2">
                    CGPA {edu.cgpa}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {edu.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-brand to-brand-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </RevealItem>
        ))}

        <RevealItem className="h-full">
          <SpotlightCard
            className="flex h-full flex-col p-7 sm:p-9"
            spotlight="rgba(6,182,212,0.12)"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-brand/10 text-brand-2">
                <Award size={16} />
              </span>
              <span className="font-mono text-xs font-medium tracking-[0.15em] text-zinc-400 uppercase">
                Certifications
              </span>
            </div>

            <div className="mt-5 flex flex-1 flex-col gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-xl border border-white/8 bg-white/3 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {cert.name}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
