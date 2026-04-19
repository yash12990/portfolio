import { projects } from "@/lib/constants";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <section className="py-24" id="projects">
      <div className="flex flex-col items-center gap-y-4 mb-16 text-center">
        <h2 className="text-6xl font-bold tracking-tight leading-tight">
          <span className="text-white">Featured </span>
          <span className="text-violet-400">Creations</span>
        </h2>

        <p className="text-white/45 text-sm leading-relaxed max-w-xl">
          A selection of high-impact digital solutions, built with focus on
          scalability, performance, and exceptional user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
