import { dashboardStats } from "@/data/mockStats";
import { StatCard } from "./StatCard";

export function StatsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
      {dashboardStats.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
}
