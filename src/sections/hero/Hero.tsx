import { Container } from "@/components/ui/Container";
import { heroData } from "@/data/home";
import { HeroActions } from "@/sections/hero/HeroActions";
import { HeroMetrics } from "@/sections/hero/HeroMetrics";
import { HeroProfilePanel } from "@/sections/hero/HeroProfilePanel";
import { RotatingRole } from "@/sections/hero/RotatingRole";

export function Hero() {
  return (
    <section className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent-secondary)]">
                {heroData.category}
              </p>
              <div className="space-y-4">
                <h1 className="font-[family:var(--font-heading)] text-5xl font-semibold tracking-[-0.06em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
                  {heroData.name}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
                  {heroData.role}
                </p>
              </div>
            </div>
            <RotatingRole roles={heroData.rotatingRoles} />
            <div className="space-y-5">
              <p className="max-w-3xl font-[family:var(--font-heading)] text-2xl leading-9 tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-[2rem] sm:leading-10">
                {heroData.statement}
              </p>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                {heroData.description}
              </p>
            </div>
            <HeroActions actions={heroData.actions} />
            <HeroMetrics metrics={heroData.metrics} />
          </div>
          <HeroProfilePanel role={heroData.role} signals={heroData.signals} />
        </div>
      </Container>
    </section>
  );
}
