import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import SkillsMarquee from "@/components/shared/skills-marquee";
import { skillGroups } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 scroll-mt-28 sm:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit for the"
        accent="modern web"
        description="Refined for building secure, performant, and maintainable web applications."
        align="center"
      />

      <RevealGroup className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <RevealItem
            key={group.category}
            className={i === 0 ? "sm:col-span-2" : "sm:col-span-1"}
          >
            <SpotlightCard className="h-full p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-brand/10 text-brand-2">
                  <group.icon size={20} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {group.category}
                  </h3>
                  <p className="text-xs text-zinc-500">{group.description}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/8 bg-white/4 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-brand/30 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Continuous tech marquee */}
      <div className="mt-12">
        <SkillsMarquee />
      </div>
    </section>
  );
}
