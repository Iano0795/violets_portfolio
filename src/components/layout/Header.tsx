const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <a
          className="font-heading text-2xl font-semibold leading-none text-foreground transition-colors hover:text-accent focus-visible:rounded-sm"
          href="#home"
        >
          V.A.
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground md:justify-end md:gap-x-6">
            {navigationLinks.map((link) => (
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
      </div>
    </header>
  );
}
