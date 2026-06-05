import { Eye } from "lucide-react";
import type { Wizard } from "@/types/wizard";
import { truncateId } from "@/utils/formatters";
import { ElixirBadge } from "./ElixirBadge";

interface WizardRowProps {
  wizard: Wizard;
  onViewDetails: (wizard: Wizard) => void;
}

export function WizardRow({ wizard, onViewDetails }: WizardRowProps) {
  return (
    <tr className="group border-b border-border-subtle/50 hover:bg-card-hover/40 transition-colors">
      {/* ID */}
      <td className="whitespace-nowrap px-6 py-4 text-xs font-mono text-text-secondary">
        {truncateId(wizard.id)}
      </td>

      {/* First Name */}
      <td className="whitespace-nowrap px-6 py-4 text-xs font-medium">
        {wizard.firstName ? (
          <span className="text-text-primary">{wizard.firstName}</span>
        ) : (
          <span className="text-text-muted italic">(None)</span>
        )}
      </td>

      {/* Last Name */}
      <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-text-primary">
        {wizard.lastName}
      </td>

      {/* Associated Elixirs */}
      <td className="px-6 py-4">
        {wizard.associatedElixirs.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 max-w-sm">
            {wizard.associatedElixirs.map((elixir) => (
              <ElixirBadge key={elixir.id} name={elixir.name} />
            ))}
          </div>
        ) : (
          <span className="text-xs text-text-muted italic select-none">
            None registered
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="whitespace-nowrap px-6 py-4 text-right text-xs font-medium">
        <button
          onClick={() => onViewDetails(wizard)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-subtle bg-card/40 text-text-secondary hover:bg-card-hover hover:text-text-primary hover:border-accent-purple/40 hover:shadow-sm hover:shadow-accent-purple/5 transition-all"
          aria-label={`View details for ${wizard.firstName || ""} ${wizard.lastName}`}
          title="View Wizard Details"
        >
          <Eye className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}
