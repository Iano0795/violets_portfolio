import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  return (
    <section className="border-t border-white/10 px-6 py-20" id="experience">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="A foundation for adding roles, internships, labs, volunteer work, and security practice."
          eyebrow="Experience"
          title="Experience built around defensive outcomes."
        />
        <div className="mt-12 space-y-6">
          {portfolio.experience.map((item) => (
            <article className="rounded-lg border border-white/10 bg-white/[0.03] p-6" key={`${item.role}-${item.organization}`}>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {item.organization}
                  </p>
                </div>
                <p className="text-sm text-[var(--accent)]">{item.period}</p>
              </div>
              <p className="mt-5 text-sm leading-6 text-[var(--muted-foreground)]">
                {item.summary}
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted-foreground)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
