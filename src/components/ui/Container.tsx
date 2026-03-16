import type { HTMLAttributes, ReactNode } from "react";

type ContainerSize = "md" | "lg" | "xl";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps) {
  const classes = ["mx-auto w-full px-6 sm:px-8 lg:px-10", sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
