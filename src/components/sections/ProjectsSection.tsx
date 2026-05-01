import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectsSection() {
  return (
    <section className="border-t border-white/10 px-6 py-20" id="projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="Placeholder case studies for labs and projects that can be expanded with screenshots, reports, and evidence."
          eyebrow="Projects"
          title="Cybersecurity projects and labs."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
