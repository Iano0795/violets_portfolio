import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const portraitPath = "/images/violet-profile.png";
const hasPortrait = existsSync(
  join(process.cwd(), "public", "images", "violet-profile.png"),
);

// const capabilityBadges = [
//   "SOC Monitoring",
//   "Network Security",
//   "Incident Response",
//   "Vulnerability Assessment",
// ];

const trustIndicators = [
  "SOC-focused",
  "Hands-on Labs",
  "Network Security",
  "Incident Response",
];

export function HeroSection() {
  return (
    <section
      className="relative mx-auto flex w-full max-w-6xl items-start overflow-hidden px-6 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:min-h-[calc(100svh-5.5rem)] lg:pb-24 lg:pt-10"
      id="home"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="max-w-3xl">
          <p className="eyebrow">Hello, I&apos;m Violet Achieng</p>
          <h1 className="font-heading mt-5 max-w-4xl text-5xl font-semibold leading-[0.9] text-foreground sm:text-6xl lg:text-7xl">
            Cybersecurity Analyst 
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            I&apos;m a cybersecurity professional with hands-on
            exposure to network security, vulnerability assessment, phishing
            analysis, Linux systems, and practical security labs. I am focused
            on supporting SOC operations, monitoring security alerts, and
            strengthening digital defenses.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              className="w-full sm:w-auto"
              download
              href="/documents/violet-achieng-resume.pdf"
            >
              Download Resume
            </Button>
            <Button className="w-full sm:w-auto" href="#projects" variant="secondary">
              View Security Labs
            </Button>
            {/* <Button className="w-full sm:w-auto" href="#contact" variant="ghost">
              Contact Violet
            </Button> */}
          </div>

          <ul
            aria-label="Cybersecurity focus areas"
            className="mt-9 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4"
          >
            {trustIndicators.map((indicator) => (
              <li
                className="border-t border-border pt-3 font-medium text-foreground/85"
                key={indicator}
              >
                {indicator}
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-label="Professional profile"
          className="relative mx-auto w-full max-w-md lg:mr-0"
        >
          <div className="surface-panel overflow-hidden bg-surface/80 p-3 shadow-2xl shadow-black/30">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#19140f]">
              {hasPortrait ? (
                <Image
                  alt="Professional portrait of Violet Achieng"
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  src={portraitPath}
                />
              ) : (
                <div className="flex h-full flex-col justify-between p-7">
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    <span>Portrait</span>
                    <span>Pending</span>
                  </div>
                  <div>
                    <div className="mb-6 h-32 w-32 rounded-full border border-border bg-gradient-to-br from-accent/20 via-white/5 to-transparent" />
                    <p className="font-heading text-4xl font-semibold leading-none text-foreground">
                      Violet Achieng
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                      Professional portrait placeholder. Add
                      public/images/violet-profile.jpg to replace this area.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 px-2 py-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Cybersecurity • SOC • Network Defense
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Entry-level analyst portfolio
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Open to roles
              </p>
            </div>
          </div>

          {/* <ul className="mt-4 flex flex-wrap gap-2">
            {capabilityBadges.map((badge) => (
              <li
                className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold text-muted-foreground"
                key={badge}
              >
                {badge}
              </li>
            ))}
          </ul> */}
        </aside>
      </div>
    </section>
  );
}
