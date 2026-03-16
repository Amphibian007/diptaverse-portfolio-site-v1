import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent-primary)] text-slate-950 shadow-[0_12px_30px_rgba(54,239,220,0.18)] hover:bg-[var(--color-accent-secondary)]",
  secondary:
    "border border-white/10 bg-white/5 text-[var(--color-text-primary)] hover:border-[var(--color-accent-primary)]/30 hover:bg-white/8",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:bg-white/6",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function Button({
  children,
  className,
  href,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full font-medium tracking-[0.01em] transition-colors duration-200",
    "font-[family:var(--font-body)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]",
    "disabled:pointer-events-none disabled:opacity-50",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
