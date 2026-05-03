import {
  Bug,
  FileText,
  FlaskConical,
  Network,
  ScanSearch,
  Server,
  ShieldAlert,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const highlightIcons: Record<string, LucideIcon> = {
  "SOC-ready fundamentals": ShieldCheck,
  "Practical lab exposure": FlaskConical,
  "Network security foundation": Network,
  "Documentation mindset": FileText,
};

const skillIcons: Record<string, LucideIcon> = {
  "SOC & Monitoring": ShieldAlert,
  Networking: Network,
  "Security Tools": ScanSearch,
  "Systems & Platforms": Server,
  "Scripting & Data": Terminal,
  "Security Concepts": Bug,
};

export function SkillsSection() {
  return (
    <section className="section-divider section-shell relative" id="skills">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(215,168,110,0.12),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(245,239,230,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(245,239,230,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30"
      />
      <div className="relative">
        <SectionHeader
          description="A focused cybersecurity toolkit covering SOC monitoring, network analysis, vulnerability assessment, scripting, and practical security labs."
          eyebrow="Capabilities"
          title="Skills & Technical Toolkit"
        />

        <ul className="mt-10 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.skillHighlights.map((highlight) => (
            <li
              className="surface-panel min-h-full px-4 py-4"
              key={highlight.title}
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const HighlightIcon = highlightIcons[highlight.title];

                  return HighlightIcon ? (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                      <HighlightIcon aria-hidden="true" size={17} strokeWidth={1.8} />
                    </span>
                  ) : null;
                })()}
                <div>
                  <p className="font-semibold leading-5 text-foreground">
                    {highlight.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.skills.map((group) => (
            (() => {
              const SkillIcon = skillIcons[group.category] ?? ShieldCheck;

              return (
                <article
                  className={cn(
                    "surface-panel group relative flex min-h-full flex-col overflow-hidden p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-surface/90",
                    group.featured &&
                      "border-accent/35 bg-[linear-gradient(180deg,rgba(215,168,110,0.08),rgba(20,17,13,0.78))]",
                  )}
                  key={group.category}
                >
                  {group.featured ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-accent/70"
                    />
                  ) : null}
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/40 text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent",
                        group.featured && "border-accent/30 bg-accent/10 text-accent",
                      )}
                    >
                      <SkillIcon aria-hidden="true" size={19} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold leading-6 text-foreground">
                        {group.category}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((skill) => (
                      <li
                        className="rounded-full border border-border bg-background/55 px-3.5 py-1.5 text-xs font-medium leading-5 text-foreground/82"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <p className="border-t border-border pt-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent/80">
                      {group.label}
                    </p>
                  </div>
                </article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
