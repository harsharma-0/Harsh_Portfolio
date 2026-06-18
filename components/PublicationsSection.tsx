import SectionHeading from "@/components/SectionHeading";

const publications = [
  {
    title: "Assessing the Accuracy of Regression and Classification Models in Air Quality Prediction",
    outlet: "IEEE",
    year: "2024-2025",
    href: "https://ieeexplore.ieee.org/document/10958972",
    summary:
      "Improved pollution forecasting accuracy by 20% over traditional baselines."
  },
  {
    title: "Sentimental Analysis of Movie Reviews using Naive Bayes and Random Forest",
    outlet: "IEEE",
    year: "2022-2023",
    href: "https://ieeexplore.ieee.org/document/10269857",
    summary:
      "Achieved 95%+ accuracy in sentiment classification, surpassing prior benchmarks by 15%."
  }
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Publications"
        title="Academic work in AI, prediction, and applied machine learning."
        description="Published research focused on model accuracy, classification performance, and practical prediction systems."
      />
      <div className="mt-12 grid gap-6">
        {publications.map((publication) => (
          <article
            key={publication.title}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_36px_rgba(245,158,11,0.07)] transition hover:-translate-y-1 hover:border-amber-400/35 hover:bg-white/[0.05] sm:p-7"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.55)]" />
            <div className="flex flex-wrap items-start justify-between gap-4 pl-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md border border-amber-400/35 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                  {publication.outlet}
                </span>
                <span className="text-sm font-medium text-muted">{publication.year}</span>
              </div>
              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-amber-400/35 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-300 hover:text-navy"
              >
                Read Paper
              </a>
            </div>
            <div className="mt-5 pl-3">
              <h2 className="font-heading text-2xl font-semibold leading-tight text-white">
                {publication.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">{publication.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
