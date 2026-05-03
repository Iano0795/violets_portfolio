import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const credentialIcons: Record<string, LucideIcon> = {
  Education: GraduationCap,
  "Certification / Training": Network,
  "Practical Labs": ShieldCheck,
  "Learning Track": BookOpen,
};

const focusIcons: Record<string, LucideIcon> = {
  "Academic foundation": GraduationCap,
  "Networking fundamentals": Network,
  "Practical labs": ShieldCheck,
  "SOC learning path": Target,
};

export function CredentialsSection() {
  return (
    <section className="section-divider section-shell relative" id="certifications">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-28 -z-10 h-72 bg-[radial-gradient(circle_at_78%_0%,rgba(215,168,110,0.1),transparent_58%)]"
      />

      <div className="relative">
        <SectionHeader
          eyebrow="Credentials"
          title="Education & Certifications"
          description="Academic background, cybersecurity training, and practical learning milestones supporting Violet's path into SOC and network security roles."
        />

        <ul className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.credentialFocus.map((focus) => {
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

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {portfolio.credentials.map((credential, index) => {
            const CredentialIcon =
              credentialIcons[credential.type] ?? ShieldCheck;

            return (
              <article
                className={cn(
                  "surface-panel relative flex min-h-full flex-col overflow-hidden p-6 md:p-7",
                  credential.featured &&
                    "border-accent/35 bg-[linear-gradient(180deg,rgba(215,168,110,0.08),rgba(20,17,13,0.78))]",
                )}
                key={`${credential.issuer}-${credential.title}`}
              >
                {credential.featured ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-accent/75"
                  />
                ) : null}

                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/45 text-muted-foreground",
                      credential.featured &&
                        "border-accent/35 bg-accent/10 text-accent",
                    )}
                  >
                    <CredentialIcon aria-hidden="true" size={19} strokeWidth={1.8} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                          {credential.type}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold leading-7 text-foreground">
                          {credential.title}
                        </h3>
                        <p className="mt-2 text-sm font-semibold text-foreground/82">
                          {credential.issuer}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-border bg-background/45 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 border-y border-border py-4 text-xs font-medium text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays
                          aria-hidden="true"
                          className="text-accent/80"
                          size={15}
                          strokeWidth={1.8}
                        />
                        {credential.period}
                      </span>
                      <span className="w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent">
                        {credential.status}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {credential.description}
                    </p>

                    <ul
                      aria-label={`${credential.issuer} credential highlights`}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {credential.highlights.map((highlight) => (
                        <li
                          className="rounded-full border border-border bg-background/55 px-3 py-1.5 text-xs font-medium leading-5 text-foreground/82"
                          key={highlight}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
