import {
  ArrowUpRight,
  FileText,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = Project & {
  className?: string;
  featured?: boolean;
  index?: number;
};

export function ProjectCard({
  actions,
  className,
  featured = false,
  href,
  index,
  objective,
  outcome,
  skills,
  source,
  summary,
  title,
  tools,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "surface-panel group relative flex min-h-full flex-col overflow-hidden p-6 transition-all duration-200 hover:border-accent/40 hover:bg-surface/90 md:p-7",
        featured &&
          "border-accent/35 bg-[linear-gradient(180deg,rgba(215,168,110,0.085),rgba(20,17,13,0.78))]",
        className,
      )}
    >
      {featured ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-accent/75"
        />
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/45 text-muted-foreground transition-colors group-hover:border-accent/35 group-hover:text-accent",
              featured && "border-accent/35 bg-accent/10 text-accent",
            )}
          >
            <ShieldAlert aria-hidden="true" size={18} strokeWidth={1.8} />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {source}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-7 text-foreground">
              {title}
            </h3>
          </div>
        </div>

        {typeof index === "number" ? (
          <span className="shrink-0 text-sm font-bold text-muted-foreground/65">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>

      <p className="mt-5 text-sm leading-7 text-muted-foreground">{summary}</p>

      <div className="mt-6 border-y border-border py-5">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent/85">
          Objective
        </p>
        <p className="mt-2 text-sm leading-6 text-foreground/86">{objective}</p>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent/85">
          <Terminal aria-hidden="true" size={14} strokeWidth={1.8} />
          Actions
        </div>
        <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
          {actions.map((action) => (
            <li className="flex gap-3" key={action}>
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
              />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <TagGroup label="Tools" tags={tools} />
        <TagGroup label="Skills" tags={skills} />
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-md border border-border bg-background/45 p-4">
          <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent/85">
            <FileText aria-hidden="true" size={14} strokeWidth={1.8} />
            Outcome
          </div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {outcome}
          </p>
        </div>

        {href ? (
          <a
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-[#e4bb82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href={href}
          >
            View lab note
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function TagGroup({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div>
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            className="rounded-full border border-border bg-background/55 px-3 py-1.5 text-xs font-medium leading-5 text-foreground/82"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
