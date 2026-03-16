type HeroSignal = {
  description: string;
  title: string;
};

type HeroProfilePanelProps = {
  role: string;
  signals: readonly HeroSignal[];
};

export function HeroProfilePanel({ role, signals }: HeroProfilePanelProps) {
  return (
    <div className="space-y-5">
      <article className="relative overflow-hidden rounded-[32px] border border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(19,41,75,0.92),rgba(11,27,51,0.98))] p-6 shadow-[0_24px_60px_rgba(2,8,23,0.28)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,230,255,0.16),transparent_30%),linear-gradient(135deg,transparent,rgba(54,239,220,0.08))]" />
        <div className="relative flex min-h-[420px] flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.26em] text-[var(--color-accent-secondary)]">
                Executive Profile
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-text-secondary)]">
                A calm, high-trust operating style shaped around platform depth, buyer confidence, and enterprise execution.
              </p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[rgba(7,20,38,0.72)] font-[family:var(--font-heading)] text-xl font-semibold text-[var(--color-text-primary)]">
              DB
            </div>
          </div>
          <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(7,20,38,0.18),rgba(7,20,38,0.58))] p-6">
            <div className="rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(106,230,255,0.12),transparent_42%),rgba(7,20,38,0.8)] p-8">
              <div className="flex aspect-[4/5] items-end justify-between rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(15,34,63,0.68),rgba(7,20,38,0.96))] p-6">
                <div>
                  <p className="font-[family:var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text-primary)]">
                    Dipta Brata Das
                  </p>
                  <p className="mt-2 max-w-[14rem] text-sm leading-6 text-[var(--color-text-secondary)]">
                    {role}
                  </p>
                </div>
                <div className="h-24 w-24 rounded-full border border-[var(--color-accent-secondary)]/25 bg-[radial-gradient(circle,rgba(106,230,255,0.16),rgba(7,20,38,0.18))]" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        className="rounded-[28px] border border-[var(--color-border-subtle)] bg-white/4 p-6"
        id="hero-signals"
      >
        <p className="font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent-secondary)]">
          Enterprise Signals
        </p>
        <div className="mt-5 space-y-5">
          {signals.map((signal) => (
            <div
              key={signal.title}
              className="border-l border-[var(--color-accent-primary)]/30 pl-4"
            >
              <h3 className="font-[family:var(--font-heading)] text-lg font-medium tracking-[-0.03em] text-[var(--color-text-primary)]">
                {signal.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
