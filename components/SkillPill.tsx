type SkillPillProps = {
  children: React.ReactNode;
};

export default function SkillPill({ children }: SkillPillProps) {
  return (
    <span className="rounded-md border border-cyan/25 bg-cyan/10 px-3 py-2 text-sm font-medium text-ink">
      {children}
    </span>
  );
}
