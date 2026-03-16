import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { currentFocusData } from "@/data/home";
import { CurrentFocusAreas } from "@/sections/current-focus/CurrentFocusAreas";

export function CurrentFocus() {
  return (
    <section className="py-20 sm:py-24">
      <Container size="xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-6">
            <SectionTitle
              description={currentFocusData.description}
              eyebrow={currentFocusData.eyebrow}
              title={currentFocusData.title}
            />
            <div className="rounded-[28px] border border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(15,34,63,0.86),rgba(11,27,51,0.98))] p-6">
              <p className="font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent-secondary)]">
                Operating Priority
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                {currentFocusData.summary}
              </p>
            </div>
          </div>
          <CurrentFocusAreas areas={currentFocusData.areas} />
        </div>
      </Container>
    </section>
  );
}
