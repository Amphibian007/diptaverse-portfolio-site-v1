type HeroMetric = {
  label: string;
  value: string;
};

type HeroMetricsProps = {
  metrics: readonly HeroMetric[];
};

export function HeroMetrics({ metrics }: HeroMetricsProps) {
  return (
    <div
      className="grid gap-4 sm:grid-cols-3"
      id="hero-metrics"
    >
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="rounded-[24px] border border-[var(--color-border-subtle)] bg-white/4 p-5 shadow-[0_18px_40px_rgba(2,8,23,0.22)]"
        >
          <p className="font-[family:var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-3xl">
            {metric.value}
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
            {metric.label}
          </p>
        </article>
      ))}
    </div>
  );
}
