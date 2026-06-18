type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
};

export default function ProjectCard({ title, description, stack }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan/60 hover:shadow-glow">
      <h2 className="font-heading text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-md bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
