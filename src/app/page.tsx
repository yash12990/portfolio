import HeroSection from "@/components/hero/hero-section";
import ExperienceSection from "@/components/experience/experience-section";
import EducationSection from "@/components/education/education-section";
import ProjectsSection from "@/components/projects/projects-section";
import ContactSection from "@/components/contact/contact-section";
import SkillsLogoMarquee from "@/components/skills-logo-marque";

export default function Home() {
  return (
    <>
      <main className="xl:px-40 lg:px-28 sm:px-20 px-4">
        <HeroSection />
        <SkillsLogoMarquee />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
