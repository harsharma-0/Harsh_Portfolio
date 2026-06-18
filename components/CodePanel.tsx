const services = [
  "auth-service",
  "billing-worker",
  "events-stream",
  "analytics-api"
];

export default function CodePanel() {
  return (
    <div className="relative mx-auto w-full max-w-xl rounded-lg border border-cyan/30 bg-[#081120] shadow-glow">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-300" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-muted">production-health.ts</span>
      </div>
      <div className="space-y-5 p-6 font-mono text-sm leading-7">
        <p>
          <span className="text-electric">const</span>{" "}
          <span className="text-white">system</span>{" "}
          <span className="text-muted">=</span>{" "}
          <span className="text-cyan">await</span>{" "}
          <span className="text-white">shipReliableBackend</span>
          <span className="text-muted">();</span>
        </p>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
          {services.map((service) => (
            <div key={service} className="flex items-center justify-between gap-4 py-2">
              <span className="text-muted">{service}</span>
              <span className="text-cyan">healthy</span>
            </div>
          ))}
        </div>
        <p className="text-muted">
          latency.p95 <span className="text-cyan">{"<"}</span> 120ms / errors{" "}
          <span className="text-cyan">{"<"}</span> 0.1%
        </p>
      </div>
    </div>
  );
}
