import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
      <input
        type="text"
        className="h-9 w-full rounded-lg border border-border-subtle bg-card/60 pl-9 pr-4 text-xs text-text-primary placeholder-text-muted focus:border-accent-purple/50 focus:bg-card focus:outline-none focus:ring-1 focus:ring-accent-purple/50 transition-all"
        {...props}
      />
    </div>
  );
}
