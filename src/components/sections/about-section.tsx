import { Sparkles, Compass, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { about, experiences, education } from "@/data/portfolio";

const exp = experiences[0];
const edu = education[0];

function CardLabel({
  icon: Icon,
  children,
}: {
  icon: typeof Sparkles;
  children: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-brand/10 text-brand-2">
        <Icon size={16} />
      </span>
      <span className="font-mono text-xs font-medium tracking-[0.15em] text-zinc-400 uppercase">
        {children}
      </span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-28 sm:py-28">
      <SectionHeading
        eyebrow="About"
        title="Engineering interfaces that"
        accent="feel effortless"
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-fr">
        {/* About Me — wide */}
        <RevealItem className="md:col-span-2">
          <SpotlightCard className="h-full p-7">
            <CardLabel icon={Sparkles}>About Me</CardLabel>
            <div className="mt-5 flex flex-col gap-4">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/8 pt-6">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[0.7rem] text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </RevealItem>

        {/* Current Focus — tall */}
        <RevealItem className="md:col-span-1 md:row-span-2">
          <SpotlightCard
            className="h-full p-7"
            spotlight="rgba(6,182,212,0.12)"
          >
            <CardLabel icon={Compass}>Current Focus</CardLabel>
            <ul className="mt-5 flex flex-col gap-3">
              {about.currentFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-brand to-brand-3" />
                  {item}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </RevealItem>

        {/* Experience summary */}
        <RevealItem className="md:col-span-1">
          <SpotlightCard className="h-full p-7">
            <CardLabel icon={Briefcase}>Experience</CardLabel>
            <p className="mt-5 text-base font-semibold text-white">
              {exp.role}
            </p>
            <p className="mt-1 text-sm text-zinc-400">{exp.company}</p>
            <p className="mt-3 font-mono text-xs text-zinc-500">{exp.period}</p>
          </SpotlightCard>
        </RevealItem>

        {/* Education summary */}
        <RevealItem className="md:col-span-1">
          <SpotlightCard className="h-full p-7">
            <CardLabel icon={GraduationCap}>Education</CardLabel>
            <p className="mt-5 text-base font-semibold text-white">
              {edu.degree}
            </p>
            <p className="mt-1 text-sm text-zinc-400">{edu.institution}</p>
            <p className="mt-3 font-mono text-xs text-zinc-500">
              {edu.period}
              {edu.cgpa ? ` · CGPA ${edu.cgpa}` : ""}
            </p>
          </SpotlightCard>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
