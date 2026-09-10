import Link from "next/link";
import {
  Sparkles,
  Compass,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import {
  about,
  availability,
  experiences,
  education,
  certifications,
} from "@/data/portfolio";

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

/** Small caption that opens a block inside a card. */
function BlockLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.18em] text-zinc-500 uppercase">
      {children}
    </p>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-lg border border-white/8 bg-white/4 px-2.5 py-1 text-xs font-medium text-zinc-400">
      {children}
    </span>
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

      <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
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

        {/* Current Focus — tall: focus list, core strengths, availability CTA */}
        <RevealItem className="md:col-span-1 md:row-span-2">
          <SpotlightCard
            className="h-full p-7"
            spotlight="rgba(6,182,212,0.12)"
          >
            <div className="flex h-full flex-col">
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

              <div className="mt-7 border-t border-white/8 pt-6">
                <BlockLabel>What I bring</BlockLabel>
                <ul className="mt-4 flex flex-col gap-4">
                  {about.highlights.map((highlight) => (
                    <li key={highlight.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/4 text-brand-2">
                        <highlight.icon size={15} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-zinc-200">
                          {highlight.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                          {highlight.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {availability.open && (
                <div className="mt-auto pt-7">
                  <Link
                    href="#contact"
                    className="group/cta flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3.5 transition-colors duration-300 hover:border-brand/40 hover:bg-white/6"
                  >
                    <span className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                      </span>
                      {availability.label}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-zinc-500 transition-colors duration-300 group-hover/cta:text-brand"
                    />
                  </Link>
                </div>
              )}
            </div>
          </SpotlightCard>
        </RevealItem>

        {/* Experience summary */}
        <RevealItem className="md:col-span-1">
          <SpotlightCard className="h-full p-7">
            <div className="flex h-full flex-col">
              <CardLabel icon={Briefcase}>Experience</CardLabel>
              <p className="mt-5 text-base font-semibold text-white">
                {exp.role}
              </p>
              <p className="mt-1 text-sm text-zinc-400">{exp.company}</p>
              <div className="mt-3 flex flex-col gap-1.5 font-mono text-xs text-zinc-500">
                <p>{exp.period}</p>
                <p className="flex items-center gap-1.5">
                  <MapPin size={11} className="shrink-0" />
                  {exp.location}
                </p>
              </div>
              <div className="mt-auto pt-6">
                <BlockLabel>Stack</BlockLabel>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tools.slice(0, 5).map((tool) => (
                    <Chip key={tool}>{tool}</Chip>
                  ))}
                  {exp.tools.length > 5 && (
                    <Chip>{`+${exp.tools.length - 5} more`}</Chip>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </RevealItem>

        {/* Education summary */}
        <RevealItem className="md:col-span-1">
          <SpotlightCard className="h-full p-7">
            <div className="flex h-full flex-col">
              <CardLabel icon={GraduationCap}>Education</CardLabel>
              <p className="mt-5 text-base font-semibold text-white">
                {edu.degree}
              </p>
              <p className="mt-1 text-sm text-zinc-400">{edu.institution}</p>
              <div className="mt-3 flex flex-col gap-1.5 font-mono text-xs text-zinc-500">
                <p>
                  {edu.period}
                  {edu.cgpa ? ` · CGPA ${edu.cgpa}` : ""}
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin size={11} className="shrink-0" />
                  {edu.location}
                </p>
              </div>
              <div className="mt-auto pt-6">
                <BlockLabel>Certifications</BlockLabel>
                <div className="mt-3 flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <Chip key={cert.name}>{cert.name}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
