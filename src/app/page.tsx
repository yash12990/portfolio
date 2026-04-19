import HeroSection from "@/components/hero/hero-section";
import ExperienceSection from "@/components/experience/experience-section";
import SkillsLogoMarquee from "@/components/skills-logo-marque";

export default function Home() {
  return (
    <>
      <main className="xl:px-40 lg:px-28 sm:px-20 px-4">
        <HeroSection />
        <SkillsLogoMarquee />
        <ExperienceSection />
      </main>
    </>
  );
}
