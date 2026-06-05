import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  title: string;
  value: string | number;
  subtitle: string;
  trend: {
    type: "positive" | "warning" | "neutral";
    icon: LucideIcon;
  };
}

export interface ActivityDataPoint {
  label: string;
  value: number;
}

export interface SpecialtyDataPoint {
  name: string;
  value: number;
  color: string;
}

export interface NavItem {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}
