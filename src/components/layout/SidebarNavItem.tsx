import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/dashboard";

interface SidebarNavItemProps {
  item: NavItem;
}

export function SidebarNavItem({ item }: SidebarNavItemProps) {
  const Icon = item.icon;

  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        item.active
          ? "bg-accent-amber/20 text-accent-amber border-accent-amber scale-105 border-r-2"
          : "text-text-secondary hover:bg-card-hover hover:text-text-primary"
      )}
      aria-current={item.active ? "page" : undefined}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span>{item.label}</span>
    </button>
  );
}
