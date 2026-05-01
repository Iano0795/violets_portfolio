import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm font-medium text-[var(--accent)]">{project.type}</p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.focusAreas.map((area) => (
          <span
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted-foreground)]"
            key={area}
          >
            {area}
          </span>
        ))}
      </div>
    </article>
  );
}
