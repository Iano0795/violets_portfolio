import { FileText, Microscope, ShieldCheck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const focusIcons: Record<string, LucideIcon> = {
  "Lab-based learning": Microscope,
  "Defensive analysis": ShieldCheck,
  "Tool familiarity": Wrench,
  "Report writing": FileText,
};

export function ProjectsSection() {
  return (
    <section className="section-divider section-shell relative" id="projects">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(245,239,230,0.028)_1px,transparent_1px)] bg-[size:100%_4rem] opacity-50"
      />

      <div className="relative">
        <SectionHeader
          eyebrow="Security Labs"
          title="Practical Projects & Labs"
          description="Hands-on cybersecurity labs focused on enumeration, vulnerability assessment, incident analysis, and defensive investigation workflows."
        />

        <ul className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.projectFocus.map((focus) => {
            const FocusIcon = focusIcons[focus] ?? ShieldCheck;

            return (
              <li className="surface-panel flex items-center gap-3 px-4 py-3" key={focus}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/45 text-accent">
                  <FocusIcon aria-hidden="true" size={16} strokeWidth={1.8} />
                </span>
                <span className="font-semibold text-foreground/88">{focus}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <ProjectCard
              featured={index === 0}
              index={index}
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
