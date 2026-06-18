import SectionHeading from "@/components/SectionHeading";

const experience = [
  {
    project: "AWS Native Services Platform",
    role: "Software Engineer I",
    company: "CloudLaminate, BlueConcur Private Limited",
    period: "May 2025 - Present",
    location: "Remote",
    bullets: [
      {
        metric: "-60% latency",
        title: "Async microservice backend",
        detail:
          "Built FastAPI and aioboto3-backed services covering 250+ AWS services, improving API responsiveness across cloud-management workflows."
      },
      {
        metric: "+40% clarity",
        title: "Native services engine with FinOps integration",
        detail:
          "Connected service metadata, pricing context, and usage signals to improve cost-transparency for engineering and operations teams."
      },
      {
        metric: "3x audits",
        title: "Bulk export pipelines",
        detail:
          "Delivered CSV and JSON export flows that reduced console overhead by 70% and made audit preparation significantly faster."
      }
    ]
  },
  {
    project: "Documentation Module",
    role: "Software Engineer I",
    company: "CloudLaminate, BlueConcur Private Limited",
    period: "May 2025 - Present",
    location: "Remote",
    bullets: [
      {
        metric: "8 endpoints",
        title: "Spring Boot notes workflows",
        detail:
          "Built create, read, update, soft delete, attachment upload, attachment listing, and attachment deletion workflows for a documentation notes module."
      },
      {
        metric: "3 roles",
        title: "Tenant-aware access control",
        detail:
          "Implemented account, creator, and tenant-level isolation across roles to prevent cross-user data exposure."
      },
      {
        metric: "25 MB uploads",
        title: "S3-backed attachment handling",
        detail:
          "Integrated file handling with 11 allowed file types, CloudFront URLs, soft-deleted attachments, and additional-link deduplication."
      }
    ]
  },
  {
    project: "AWS Cost Calculator",
    role: "Software Engineer I",
    company: "CloudLaminate, BlueConcur Private Limited",
    period: "May 2025 - Present",
    location: "Remote",
    bullets: [
      {
        metric: "EC2/S3/EKS",
        title: "Configuration-normalization engine",
        detail:
          "Normalized infrastructure blueprints for EC2, S3, and EKS so estimation logic could run consistently across product surfaces."
      },
      {
        metric: "+30-50%",
        title: "Deterministic Price List API pipeline",
        detail:
          "Transformed AWS Price List API data into reliable internal pricing models, improving forecasting reliability by 30-50%."
      },
      {
        metric: "-80% time",
        title: "Enterprise what-if simulations",
        detail:
          "Enabled CI/CD and IaC estimation scenarios that helped teams model infrastructure changes 80% faster before provisioning."
      }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Building cloud-native platforms with measurable backend impact."
        description="Experience across AWS automation, async services, cost intelligence, and enterprise infrastructure workflows."
      />

      <div className="relative mt-14 space-y-10 border-l border-cyan/35 pl-7 before:absolute before:-left-px before:top-0 before:h-full before:w-px before:bg-cyan before:blur-sm md:pl-10">
        {experience.map((item) => (
          <article
            key={item.project}
            className="group relative rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_36px_rgba(0,212,255,0.07)] transition duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:bg-white/[0.05] hover:shadow-glow focus-within:-translate-y-1 focus-within:border-cyan/35 focus-within:bg-white/[0.05] focus-within:shadow-glow"
            tabIndex={0}
          >
            <span className="absolute -left-[35px] top-8 h-4 w-4 rounded-full border border-cyan bg-navy shadow-[0_0_22px_rgba(0,212,255,0.9)] md:-left-[49px]" />
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                  {item.project}
                </p>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-white">
                  {item.role}
                </h2>
                <p className="mt-2 text-muted">{item.company}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="rounded-md border border-cyan/25 bg-cyan/10 px-3 py-1 font-medium text-cyan">
                  {item.period}
                </span>
                <span className="rounded-md border border-white/10 px-3 py-1 text-muted">
                  {item.location}
                </span>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {item.bullets.map((bullet) => (
                <div
                  key={bullet.title}
                  className="rounded-lg border border-white/10 bg-navy/45 p-4 transition duration-300 hover:border-cyan/30 hover:bg-cyan/[0.06] focus-within:border-cyan/30 focus-within:bg-cyan/[0.06]"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {bullet.title}
                    </h3>
                    <span className="w-fit rounded-full border border-cyan/35 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan shadow-[0_0_20px_rgba(0,212,255,0.14)]">
                      {bullet.metric}
                    </span>
                  </div>
                  <p className="max-h-0 overflow-hidden text-sm leading-6 text-muted opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-28 group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:max-h-28 group-focus-within:opacity-100">
                    {bullet.detail}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
