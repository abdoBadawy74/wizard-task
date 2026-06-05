import { FlaskConical, ChevronRight } from "lucide-react";
import type { Elixir } from "@/types/wizard";

interface ElixirListItemProps {
  elixir: Elixir;
}

export function ElixirListItem({ elixir }: ElixirListItemProps) {
  return (
    <div className="group flex items-center justify-between rounded-xl border border-border-subtle bg-card/40 p-4 transition-all hover:bg-card-hover hover:border-accent-purple/30 hover:-translate-y-0.5 duration-200">
      <div className="flex items-center gap-3.5">
        {/* Flask Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-card-hover/40 text-accent-lavender group-hover:bg-accent-purple/10 transition-colors">
          <FlaskConical className="h-5 w-5" />
        </div>

        {/* Potion Information */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-text-primary group-hover:text-accent-lavender transition-colors">
            {elixir.name}
          </span>
          <span className="text-[10px] text-text-secondary mt-0.5">
            Inventory: <span className="font-medium text-text-primary">{elixir.inventory}</span> Units
          </span>
        </div>
      </div>

      {/* Right chevron indicator */}
      <ChevronRight className="h-4 w-4 text-text-muted group-hover:text-text-secondary transition-colors" />
    </div>
  );
}
