import { portfolio } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ContactSection() {
  return (
    <section className="border-t border-white/10 px-6 py-20" id="contact">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="Contact links are centralized in the portfolio data file for easy updates."
          eyebrow="Contact"
          title="Connect with Violet."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {portfolio.contactLinks.map((link, index) => (
            <a
              className={buttonVariants(index === 0 ? "primary" : "secondary")}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
