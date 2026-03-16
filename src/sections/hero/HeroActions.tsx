import { Button } from "@/components/ui/Button";

type HeroAction = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

type HeroActionsProps = {
  actions: readonly HeroAction[];
};

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {actions.map((action) => (
        <Button key={action.label} href={action.href} variant={action.variant}>
          {action.label}
        </Button>
      ))}
    </div>
  );
}
