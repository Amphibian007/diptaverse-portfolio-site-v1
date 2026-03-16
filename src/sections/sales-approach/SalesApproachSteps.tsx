type SalesApproachStep = {
  description: string;
  step: string;
  title: string;
};

type SalesApproachStepsProps = {
  steps: readonly SalesApproachStep[];
};

export function SalesApproachSteps({ steps }: SalesApproachStepsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {steps.map((step) => (
        <article
          key={step.step}
          className="rounded-[28px] border border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-primary)]/25 bg-[rgba(54,239,220,0.08)] font-[family:var(--font-mono)] text-xs tracking-[0.18em] text-[var(--color-accent-secondary)]">
              {step.step}
            </div>
            <div>
              <h3 className="font-[family:var(--font-heading)] text-xl font-medium tracking-[-0.03em] text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-[15px]">
                {step.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
