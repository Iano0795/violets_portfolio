import { portfolio } from "@/data/portfolio";

const footerNavigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Email", href: "mailto:violet@example.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "TryHackMe", href: "https://tryhackme.com/" },
];

export function Footer() {
  return (
    <footer className="section-divider bg-surface/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-heading text-3xl font-semibold text-foreground">
            {portfolio.personal.name}.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
            {portfolio.personal.role} focused on SOC monitoring, threat
            detection, network security, and incident response.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Footer navigation">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {footerNavigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="rounded-sm transition-colors hover:text-foreground focus-visible:text-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Contact and social links">
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="rounded-sm transition-colors hover:text-foreground focus-visible:text-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground md:col-span-2">
          &copy; {new Date().getFullYear()} {portfolio.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
