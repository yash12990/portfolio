import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/scroll-reveal";
import { projects } from "@/data/portfolio";
import ProjectCard from "./project-card";

const [featured, ...rest] = projects;

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 scroll-mt-28 sm:py-28">
      <SectionHeading
        eyebrow="Work"
        title="Selected"
        accent="projects"
        description="High-impact products built with a focus on performance, scalability, and exceptional user experience."
        align="center"
      />

      <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2">
        <RevealItem className="lg:col-span-2">
          <ProjectCard project={featured} featured />
        </RevealItem>
        {rest.map((project) => (
          <RevealItem key={project.name} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
