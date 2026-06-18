type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-normal text-white sm:text-5xl">
        {title}
      </h1>
      {description ? <p className="mt-5 text-lg leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
