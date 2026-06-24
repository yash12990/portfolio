import { ArrowUpRight, Code2, Sparkle } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const MAX_VISIBLE_TAGS = 5;

/** Faux app-window preview standing in for a project screenshot. */
function ProjectPreview({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/8",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br transition-transform duration-500 ease-out group-hover:scale-105",
          project.gradient,
        )}
      />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent" />

      {/* window chrome */}
      <div className="relative flex items-center gap-1.5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      </div>

      <div className="relative flex h-full items-center justify-center px-6 pb-10">
        <span className="text-center text-2xl font-bold tracking-tight text-white/85 sm:text-3xl">
          {project.name}
        </span>
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3">
      {project.liveUrl ? (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition-transform hover:scale-[1.03]"
        >
          Live Demo
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </Link>
      ) : (
        <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-600">
          Live Demo
        </span>
      )}

      {project.sourceUrl ? (
        <Link
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/3 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:border-white/25 hover:text-white"
        >
          <Code2 size={14} />
          Source
        </Link>
      ) : (
        <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-600">
          <Code2 size={14} />
          Source
        </span>
      )}
    </div>
  );
}

function TechTags({ tags }: { tags: string[] }) {
  const visible = tags.slice(0, MAX_VISIBLE_TAGS);
  const overflow = tags.length - MAX_VISIBLE_TAGS;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {visible.map((tag) => (
        <span
          key={tag}
          className="rounded-lg border border-white/8 bg-white/4 px-2.5 py-1 text-xs font-medium text-zinc-300"
        >
          {tag}
        </span>
      ))}
      {overflow > 0 && (
        <span className="text-xs font-medium text-brand-2">+{overflow}</span>
      )}
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-xs text-zinc-400"
        >
          <Sparkle size={12} className="shrink-0 text-brand-3" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <SpotlightCard className="h-full p-3">
        <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <ProjectPreview project={project} className="h-56 lg:h-full lg:min-h-80" />
          <div className="flex flex-col gap-5 p-4 lg:py-6 lg:pr-6">
            <div>
              <span className="font-mono text-xs tracking-[0.15em] text-brand-2 uppercase">
                Featured
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
            </div>
            <Highlights items={project.highlights} />
            <TechTags tags={project.tags} />
            <ProjectLinks project={project} />
          </div>
        </div>
      </SpotlightCard>
    );
  }

  return (
    <SpotlightCard className="flex h-full flex-col p-3">
      <ProjectPreview project={project} className="h-48" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 line-clamp-3">
            {project.description}
          </p>
        </div>
        <Highlights items={project.highlights} />
        <TechTags tags={project.tags} />
        <div className="mt-auto pt-2">
          <ProjectLinks project={project} />
        </div>
      </div>
    </SpotlightCard>
  );
}
