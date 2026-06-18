import SectionHeading from "@/components/SectionHeading";
import SkillsShowcase from "@/components/SkillsShowcase";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="A cloud, backend, and AI engineering toolkit."
        description="Tabbed skill categories with practical strengths across AWS automation, async APIs, computer vision, databases, frontend delivery, and core CS fundamentals."
      />
      <SkillsShowcase />
    </section>
  );
}
