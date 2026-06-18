import Image from "next/image";
import AnimatedStatCard from "@/components/AnimatedStatCard";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { end: 250, suffix: "+", label: "AWS Services covered" },
  { end: 60, suffix: "%", label: "API Latency Reduction" },
  { end: 500, suffix: "+", label: "DSA Problems Solved" }
];

const education = [
  {
    title: "B.Tech CSE",
    institution: "Graphic Era University",
    meta: "2021-2025 / CGPA 8.09"
  },
  {
    title: "12th",
    institution: "Woodland Academy",
    meta: "86.8%"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-full bg-cyan/10 blur-3xl" />
          <div className="relative aspect-square rounded-full border border-cyan/45 bg-[#081120] p-3 shadow-glow">
            <div className="relative h-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-cyan/20 via-electric/10 to-white/[0.03]">
              <Image
                src="/Profile_Photo.jpg"
                alt="Harsh Vishwakarma profile photo"
                fill
                sizes="(min-width: 1024px) 384px, calc(100vw - 48px)"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-8 right-0 rounded-full border border-cyan/40 bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan shadow-glow sm:right-2">
              Open to Work
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About"
            title="Backend engineer building cloud systems for scale."
            description="Backend engineer and founding member of a cloud-management startup. I specialize in AWS automation, distributed systems, and building high-performance SaaS platforms using Python, FastAPI, and async microservices."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <AnimatedStatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold text-white">Education</h2>
            <div className="mt-6 space-y-5 border-l border-cyan/25 pl-6">
              {education.map((item) => (
                <article key={item.title} className="relative rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border border-cyan bg-navy shadow-[0_0_18px_rgba(0,212,255,0.8)]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
                    {item.title}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-white">
                    {item.institution}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
