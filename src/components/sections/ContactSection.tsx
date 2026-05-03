import {
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const linkIcons: Record<string, LucideIcon> = {
  email: Mail,
  linkedin: ExternalLink,
  github: ExternalLink,
  tryhackme: Terminal,
  resume: Download,
};

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function ContactSection() {
  const { contact } = portfolio;

  return (
    <section className="section-divider section-shell relative" id="contact">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(215,168,110,0.11),transparent_60%)]"
      />

      <div className="relative">
        <SectionHeader
          description={contact.description}
          eyebrow={contact.eyebrow}
          title={contact.title}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <article className="surface-panel flex min-h-full flex-col p-6 md:p-7">
            <p className="text-base leading-8 text-muted-foreground">
              {contact.message}
            </p>

            <div className="mt-7">
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent/85">
                <ShieldCheck aria-hidden="true" size={14} strokeWidth={1.8} />
                Availability
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {contact.availability.map((role) => (
                  <li
                    className="rounded-full border border-border bg-background/55 px-3.5 py-1.5 text-xs font-medium leading-5 text-foreground/84"
                    key={role}
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8">
              <div className="rounded-md border border-accent/25 bg-accent/[0.055] p-5">
                <h3 className="text-xl font-semibold leading-7 text-foreground">
                  {contact.ctaTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {contact.ctaText}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    className={cn(
                      buttonVariants("primary"),
                      "gap-2 w-full sm:w-auto",
                    )}
                    download
                    href={contact.resumePath}
                  >
                    <Download aria-hidden="true" size={16} strokeWidth={1.8} />
                    Download Resume
                  </a>
                  <a
                    className={cn(
                      buttonVariants("secondary"),
                      "gap-2 w-full sm:w-auto",
                    )}
                    href={`mailto:${contact.email}`}
                  >
                    <Mail aria-hidden="true" size={16} strokeWidth={1.8} />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </article>

          <aside className="surface-panel p-6 md:p-7" aria-label="Contact details">
            <div className="space-y-4">
              <ContactDetail
                href={`mailto:${contact.email}`}
                icon={Mail}
                label="Email"
                value={contact.email}
              />
              <ContactDetail
                href={`tel:${contact.phoneHref}`}
                icon={Phone}
                label="Phone"
                value={contact.phone}
              />
              <ContactDetail
                icon={MapPin}
                label="Location"
                value={contact.location}
              />
            </div>

            <div className="mt-7 border-t border-border pt-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent/85">
                Links
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {contact.links.map((link) => {
                  const LinkIcon = linkIcons[link.type] ?? ExternalLink;
                  const external = isExternalLink(link.href);

                  return (
                    <li key={link.label}>
                      <a
                        className="group flex min-h-12 items-center justify-between gap-3 rounded-md border border-border bg-background/45 px-4 py-3 text-sm font-semibold text-foreground/88 transition-colors hover:border-accent/45 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        download={link.download || undefined}
                        href={link.href}
                        rel={external ? "noreferrer" : undefined}
                        target={external ? "_blank" : undefined}
                      >
                        <span className="inline-flex items-center gap-3">
                          <LinkIcon
                            aria-hidden="true"
                            className="text-accent"
                            size={16}
                            strokeWidth={1.8}
                          />
                          {link.label}
                        </span>
                        {external ? (
                          <ExternalLink
                            aria-hidden="true"
                            className="text-muted-foreground transition-colors group-hover:text-accent"
                            size={14}
                            strokeWidth={1.8}
                          />
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  href,
  icon: Icon,
  label,
  value,
}: {
  href?: string;
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
        <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-semibold leading-6 text-foreground">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className="flex items-start gap-3 rounded-md border border-border bg-background/45 p-4 transition-colors hover:border-accent/45 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        href={href}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-md border border-border bg-background/45 p-4">
      {content}
    </div>
  );
}
