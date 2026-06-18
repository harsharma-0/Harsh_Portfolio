type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <p className="font-heading text-3xl font-semibold text-cyan">{value}</p>
      <p className="mt-2 text-sm leading-5 text-muted">{label}</p>
    </div>
  );
}
