import type { HTMLAttributes } from "react";

type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  align = "left",
  className,
  description,
  eyebrow,
  title,
  ...props
}: SectionTitleProps) {
  const isCentered = align === "center";
  const classes = [
    "flex flex-col gap-4",
    isCentered ? "items-center text-center" : "items-start text-left",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {eyebrow ? (
        <span className="font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent-secondary)]">
          {eyebrow}
        </span>
      ) : null}
      <div className="max-w-3xl space-y-3">
        <h2 className="font-[family:var(--font-heading)] text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
