import { Globe, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";

const MAX_VISIBLE_TAGS = 4;

type ProjectCardProps = {
  project: (typeof projects)[number];
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
  const overflow = project.tags.length - MAX_VISIBLE_TAGS;
  return (
    <div className="flex flex-col bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
      {/* Screenshot / placeholder */}
      <div
        className={`h-56 bg-linear-to-br ${project.gradient} flex items-end p-4`}
      >
        <span className="text-white/10 text-4xl font-black uppercase tracking-widest select-none">
          {project.name}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-y-4">
        <div>
          <h3 className="text-white font-bold text-xl">{project.name}</h3>
          <p className="text-white/45 text-sm italic mt-1.5 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 items-center">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-white/65 bg-white/6 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
          {overflow > 0 && (
            <span className="text-xs font-bold text-violet-400">
              +{overflow}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-x-3 mt-auto pt-4 border-t border-white/8">
          <Button
            asChild={!!project.liveUrl}
            size="sm"
            className="flex-1 bg-white/8 hover:bg-white/12 border border-white/10 text-white text-xs font-bold tracking-widest uppercase cursor-pointer"
          >
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={13} />
                Live Demo
              </Link>
            ) : (
              <span className="flex items-center gap-x-1.5 opacity-35 cursor-not-allowed">
                <Globe size={13} />
                Live Demo
              </span>
            )}
          </Button>

          <Button
            asChild={!!project.sourceUrl}
            variant="ghost"
            size="sm"
            className="flex-1 text-white/45 hover:text-white hover:bg-white/6 text-xs font-bold tracking-widest uppercase cursor-pointer"
          >
            {project.sourceUrl ? (
              <Link
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={13} />
                Source
              </Link>
            ) : (
              <span className="flex items-center gap-x-1.5 opacity-35 cursor-not-allowed">
                <Code2 size={13} />
                Source
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
