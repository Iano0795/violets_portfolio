import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const aboutPlaceholder = {
  id: "about",
  eyebrow: "About",
  title: "A focused defensive security profile.",
  description:
    "This section will introduce Violet's background, cybersecurity direction, and portfolio positioning.",
};

const remainingPlaceholderSections = [
  {
    id: "projects",
    eyebrow: "Projects",
    title: "Cybersecurity labs and case studies.",
    description:
      "This section will present portfolio projects with clear objectives, evidence, and outcomes.",
  },
  {
    id: "certifications",
    eyebrow: "Certifications",
    title: "Credentials and learning milestones.",
    description:
      "This section will list certifications, courses, badges, and verified achievements.",
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Professional contact links.",
    description:
      "This section will make it easy for recruiters and collaborators to connect with Violet.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />

        <section
          className="section-divider section-shell"
          id={aboutPlaceholder.id}
        >
          <SectionHeader
            description={aboutPlaceholder.description}
            eyebrow={aboutPlaceholder.eyebrow}
            title={aboutPlaceholder.title}
          />
          <div className="surface-panel mt-10 p-6 text-sm leading-7 text-muted-foreground">
            Placeholder content for the {aboutPlaceholder.eyebrow.toLowerCase()} section.
          </div>
        </section>

        <SkillsSection />

        <ExperienceSection />

        {remainingPlaceholderSections.map((section) => (
          <section
            className="section-divider section-shell"
            id={section.id}
            key={section.id}
          >
            <SectionHeader
              description={section.description}
              eyebrow={section.eyebrow}
              title={section.title}
            />
            <div className="surface-panel mt-10 p-6 text-sm leading-7 text-muted-foreground">
              Placeholder content for the {section.eyebrow.toLowerCase()} section.
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
