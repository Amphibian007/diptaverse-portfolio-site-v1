"use client";

import { useEffect, useState } from "react";

type RotatingRoleProps = {
  roles: readonly string[];
};

export function RotatingRole({ roles }: RotatingRoleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [roles]);

  return (
    <div className="flex min-h-14 flex-col justify-center rounded-[20px] border border-[var(--color-border-subtle)] bg-white/4 px-4 py-3">
      <span className="font-[family:var(--font-mono)] text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
        Current Focus
      </span>
      <span
        className="mt-2 text-sm leading-6 text-[var(--color-text-primary)] transition-opacity duration-300"
        key={roles[index]}
      >
        {roles[index]}
      </span>
    </div>
  );
}
