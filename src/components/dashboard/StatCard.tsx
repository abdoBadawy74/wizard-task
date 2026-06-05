import { cn } from "@/lib/utils";
import type { DashboardStat } from "@/types/dashboard";

interface StatCardProps {
  stat: DashboardStat;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.trend.icon;

  const trendColorClass =
    stat.trend.type === "positive"
      ? "text-accent-lavender"
      : stat.trend.type === "warning"
        ? "text-accent-orange font-semibold"
        : "text-accent-amber";

  return (
    <div className="rounded-xl border border-border-subtle bg-card p-6 shadow-md shadow-black/10 transition-all hover:border-accent-purple/30 hover:shadow-accent-purple/5 hover:-translate-y-0.5 duration-200">
      <h3 className="text-lg tracking-[0.5px] font-semibold text-text-primary uppercase">
        {stat.title}
      </h3>
      <p className={cn("mt-3 text-3xl font-extrabold tracking-tight", trendColorClass)}>
        {stat.value}
      </p>
      <div className={cn("mt-4 flex items-center gap-2 text-sm", trendColorClass)}>
        <Icon className="h-4 w-4 shrink-0" />
        <span>{stat.subtitle}</span>
      </div>
    </div>
  );
}
