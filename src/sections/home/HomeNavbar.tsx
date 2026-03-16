import { Container } from "@/components/ui/Container";
import { homeNav } from "@/data/home";

export function HomeNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border-subtle)] bg-[rgba(7,20,38,0.78)] backdrop-blur-xl">
      <Container size="xl">
        <nav className="flex min-h-18 items-center justify-between gap-6 py-4">
          <div className="flex flex-col">
            <span className="font-[family:var(--font-heading)] text-lg font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
              {homeNav.brand}
            </span>
            <span className="font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
              Sales Engineering & Alliances
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-5 text-sm text-[var(--color-text-secondary)]">
            {homeNav.links.map((link) => (
              <a
                key={link.label}
                className="transition-colors duration-200 hover:text-[var(--color-text-primary)]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
