import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

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

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
