import { cn } from "@/lib/utils";

interface ElixirBadgeProps {
  name: string;
}

export function ElixirBadge({ name }: ElixirBadgeProps) {
  // Determine badge colors based on naming keywords 
  const getBadgeColors = (elixirName: string) => {
    const lowercaseName = elixirName.toLowerCase();

    // Mrs Skower's messy potion: Amber-orange
    if (lowercaseName.includes("mess") || lowercaseName.includes("scouring")) {
      return "bg-accent-orange/15 text-accent-orange border-accent-orange/30";
    }
    // Elixir of Life: Gold/amber
    if (lowercaseName.includes("life") || lowercaseName.includes("gold") || lowercaseName.includes("shield")) {
      return "bg-accent-amber/15 text-accent-amber border-accent-amber/30";
    }
    // Default potions (Veritaserum, Wolfsbane, etc): Purple/indigo
    return "bg-accent-lavender/15 text-accent-lavender/90 border-accent-lavender/30";
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide transition-all select-none max-w-[200px] truncate",
        getBadgeColors(name)
      )}
      title={name}
    >
      {name}
    </span>
  );
}
