"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <a
            className="font-heading text-2xl font-semibold leading-none text-foreground transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            V.A.
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center justify-end gap-x-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="rounded-sm transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
                
              ))}
            </ul>
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface/70 px-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent/45 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={16} strokeWidth={1.9} />
            ) : (
              <Menu aria-hidden="true" size={16} strokeWidth={1.9} />
            )}
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity,padding] duration-200 lg:hidden",
            isMenuOpen
              ? "grid-rows-[1fr] pb-4 opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
          id="mobile-navigation"
        >
          <div className="min-h-0">
            <ul className="surface-panel grid gap-1 p-2 text-sm font-semibold text-foreground/88">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="block rounded-md px-4 py-3 transition-colors hover:bg-accent/10 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
