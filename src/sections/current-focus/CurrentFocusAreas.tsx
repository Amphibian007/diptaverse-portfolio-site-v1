type CurrentFocusArea = {
  description: string;
  title: string;
};

type CurrentFocusAreasProps = {
  areas: readonly CurrentFocusArea[];
};

export function CurrentFocusAreas({ areas }: CurrentFocusAreasProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {areas.map((area) => (
        <article
          key={area.title}
          className="rounded-[28px] border border-[var(--color-border-subtle)] bg-white/4 p-6 shadow-[0_16px_40px_rgba(2,8,23,0.18)]"
        >
          <h3 className="font-[family:var(--font-heading)] text-xl font-medium tracking-[-0.03em] text-[var(--color-text-primary)]">
            {area.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-[15px]">
            {area.description}
          </p>
        </article>
      ))}
    </div>
  );
}
