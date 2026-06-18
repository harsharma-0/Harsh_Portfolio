import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Applied AI systems built close to the edge."
        description="A featured engineering project combining autonomous flight control, real-time computer vision, and distributed inference."
      />
      <div className="mt-12">
        <FeaturedProjectCard />
      </div>
    </section>
  );
}
