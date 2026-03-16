import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { salesApproachData } from "@/data/home";
import { SalesApproachSteps } from "@/sections/sales-approach/SalesApproachSteps";

export function SalesApproach() {
  return (
    <section className="pb-24 pt-8 sm:pb-28 sm:pt-10">
      <Container size="xl">
        <div className="rounded-[36px] border border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(15,34,63,0.62),rgba(11,27,51,0.92))] p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <div className="space-y-6">
              <SectionTitle
                description={salesApproachData.description}
                eyebrow={salesApproachData.eyebrow}
                title={salesApproachData.title}
              />
              <div className="rounded-[24px] border border-white/8 bg-[rgba(7,20,38,0.42)] p-5">
                <p className="font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                  Enterprise Lens
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                  The goal is not to make a platform sound impressive. The goal is to help technical and commercial stakeholders reach the same confident conclusion.
                </p>
              </div>
            </div>
            <SalesApproachSteps steps={salesApproachData.principles} />
          </div>
        </div>
      </Container>
    </section>
  );
}
