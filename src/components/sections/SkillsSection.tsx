import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SkillsSection() {
  return (
    <section className="section-divider section-shell" id="skills">
      <div>
        <SectionHeader
          description="A focused cybersecurity toolkit covering SOC monitoring, network analysis, vulnerability assessment, scripting, and practical security labs."
          eyebrow="Capabilities"
          title="Skills & Technical Toolkit"
        />

        <ul className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.skillHighlights.map((highlight) => (
            <li
              className="surface-panel px-4 py-3 font-medium text-foreground/85"
              key={highlight}
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.skills.map((group) => (
            <article
              className="surface-panel group flex min-h-full flex-col p-6 transition-colors hover:border-accent/45 hover:bg-surface/90"
              key={group.category}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {group.category}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent/70 transition-transform group-hover:scale-125"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {group.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    className="rounded-full border border-border bg-background/35 px-3 py-1 text-xs font-medium text-muted-foreground"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
