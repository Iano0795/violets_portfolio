import {
  Brain,
  FileText,
  FlaskConical,
  ShieldCheck,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const capabilityIcons: Record<string, LucideIcon> = {
  "Defensive Mindset": ShieldCheck,
  "Analytical Foundation": Brain,
  "Hands-on Practice": FlaskConical,
  "Clear Documentation": FileText,
};

export function AboutSection() {
  const { about } = portfolio;

  return (
    <section className="section-divider section-shell relative" id="about">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-64 bg-[radial-gradient(circle_at_12%_0%,rgba(215,168,110,0.1),transparent_58%)]"
      />

      <div className="relative">
        <SectionHeader
          description={about.description}
          eyebrow={about.eyebrow}
          title={about.title}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <article className="surface-panel p-6 md:p-7">
            <div className="space-y-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 border-t border-border pt-6">
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent/85">
                <Target aria-hidden="true" size={14} strokeWidth={1.8} />
                Target Roles
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.targetRoles.map((role) => (
                  <li
                    className="rounded-full border border-border bg-background/55 px-3.5 py-1.5 text-xs font-medium leading-5 text-foreground/84"
                    key={role}
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {about.capabilities.map((capability) => {
              const CapabilityIcon =
                capabilityIcons[capability.title] ?? ShieldCheck;

              return (
                <li className="surface-panel min-h-full p-5" key={capability.title}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                      <CapabilityIcon
                        aria-hidden="true"
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold leading-6 text-foreground">
                        {capability.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
