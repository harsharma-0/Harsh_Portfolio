import SectionHeading from "@/components/SectionHeading";

const achievements = [
  {
    icon: "G20",
    title: "G20 Symposium on Digital Agriculture 2023",
    subtitle: "Runner-up, IoT in Agriculture",
    detail:
      "Recognized for an agriculture-focused IoT solution presented at the G20 Symposium on Digital Agriculture."
  },
  {
    icon: "NSS",
    title: "NSS 'B' and 'C' Certificates",
    subtitle: "2022-2024 / Community leadership",
    detail:
      "Earned National Service Scheme certifications through sustained community work, leadership, and service initiatives."
  },
  {
    icon: "500+",
    title: "Competitive Problem Solving",
    subtitle: "LeetCode, GFG, HackerRank",
    detail:
      "Solved 500+ problems across data structures, algorithms, databases, and programming fundamentals."
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones across innovation, service, and problem solving."
        description="A focused snapshot of recognitions, community leadership, and consistent computer science practice."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {achievements.map((achievement) => (
          <article
            key={achievement.title}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_34px_rgba(0,212,255,0.07)] transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.055] hover:shadow-glow"
          >
            <div className="grid h-14 w-14 place-items-center rounded-lg border border-cyan/35 bg-cyan/10 font-heading text-lg font-semibold text-cyan shadow-[0_0_18px_rgba(0,212,255,0.18)]">
              {achievement.icon}
            </div>
            <h2 className="mt-6 font-heading text-xl font-semibold leading-snug text-white">
              {achievement.title}
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan">
              {achievement.subtitle}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">{achievement.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
