import {
  CalendarDays,
  CheckCircle2,
  Database,
  FileText,
  Headset,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const focusIcons: Record<string, LucideIcon> = {
  "Cybersecurity Labs": ShieldCheck,
  "Data Integrity": Database,
  "Technical Support": Headset,
  Documentation: FileText,
};

export function ExperienceSection() {
  return (
    <section className="section-divider section-shell relative" id="experience">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-64 bg-[radial-gradient(circle_at_18%_0%,rgba(215,168,110,0.1),transparent_58%)]"
      />
      <div className="relative">
        <SectionHeader
          eyebrow="Experience"
          title="Relevant Experience"
          description="A focused track record across cybersecurity practice, technical support, data validation, and hands-on security education."
        />

        <ul className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.experienceFocus.map((focus) => {
            const FocusIcon = focusIcons[focus] ?? ShieldCheck;

            return (
              <li
                className="surface-panel flex min-h-14 items-center gap-3 border-accent/20 bg-accent/[0.045] px-4 py-3"
                key={focus}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                  <FocusIcon aria-hidden="true" size={16} strokeWidth={1.8} />
                </span>
                <span className="font-semibold text-foreground/88">{focus}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {portfolio.experience.map((item, index) => (
            <article
              className={cn(
                "surface-panel relative flex min-h-full flex-col overflow-hidden p-6 md:p-7",
                item.featured &&
                  "border-accent/35 bg-[linear-gradient(180deg,rgba(215,168,110,0.09),rgba(20,17,13,0.78))]",
              )}
              key={`${item.company}-${item.role}`}
            >
              {item.featured ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-accent/75"
                />
              ) : null}

              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/45 text-sm font-bold text-muted-foreground",
                    item.featured && "border-accent/35 bg-accent/10 text-accent",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-accent">
                        {item.company}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold leading-7 text-foreground">
                        {item.role}
                      </h3>
                    </div>

                    {item.featured ? (
                      <p className="w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent">
                        Security relevant
                      </p>
                    ) : (
                      <p className="w-fit rounded-full border border-border bg-background/45 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                        Transferable
                      </p>
                    )}
                  </div>

                  <div className="mt-5 flex flex-col gap-2 border-y border-border py-4 text-xs font-medium text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-5">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays
                        aria-hidden="true"
                        className="text-accent/80"
                        size={15}
                        strokeWidth={1.8}
                      />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin
                        aria-hidden="true"
                        className="text-accent/80"
                        size={15}
                        strokeWidth={1.8}
                      />
                      {item.location}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </p>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                    {item.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-accent"
                          size={16}
                          strokeWidth={1.8}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <ul
                    aria-label={`${item.company} experience tags`}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {item.tags.map((tag) => (
                      <li
                        className="rounded-full border border-border bg-background/55 px-3 py-1.5 text-xs font-medium leading-5 text-foreground/82"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
