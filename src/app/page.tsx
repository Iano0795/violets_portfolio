import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const remainingPlaceholderSections = [
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

        <AboutSection />

        <SkillsSection />

        <ExperienceSection />

        <ProjectsSection />

        <CredentialsSection />

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
