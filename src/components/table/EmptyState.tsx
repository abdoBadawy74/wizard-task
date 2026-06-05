import { EyeOff } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card-hover border border-border-subtle text-text-muted mb-4">
        <EyeOff className="h-5 w-5" />
      </div>
      <h3 className="text-sm font-semibold text-text-primary">
        No matching wizard records found
      </h3>
      <p className="text-xs text-text-secondary mt-1 max-w-xs">
        The scrying mirrors are clear. Adjust your search keywords or clear filters to try again.
      </p>
      <button
        onClick={onClear}
        className="mt-4 text-xs font-semibold text-accent-purple hover:underline focus:outline-none"
      >
        Clear scrying search
      </button>
    </div>
  );
}
