import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <ExperienceSection />
      </AnimatedSection>
      <AnimatedSection>
        <ShowcaseSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>
      <AnimatedSection>
        <PublicationsSection />
      </AnimatedSection>
      <AnimatedSection>
        <AchievementsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
