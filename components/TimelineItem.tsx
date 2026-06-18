type TimelineItemProps = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export default function TimelineItem({ role, company, period, summary }: TimelineItemProps) {
  return (
    <article className="relative rounded-lg border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-white">{role}</h2>
          <p className="mt-1 text-cyan">{company}</p>
        </div>
        <p className="rounded-md border border-white/10 px-3 py-1 text-sm text-muted">{period}</p>
      </div>
      <p className="mt-5 leading-7 text-muted">{summary}</p>
    </article>
  );
}
