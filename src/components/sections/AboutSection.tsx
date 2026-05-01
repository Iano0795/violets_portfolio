import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <section className="border-t border-white/10 px-6 py-20" id="about">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description={portfolio.personal.summary}
          eyebrow="About"
          title="A practical defensive security portfolio."
        />
      </div>
    </section>
  );
}
