import type { DashboardStat } from "@/types/dashboard";
import { TrendingUp, FlaskConical, AlertTriangle } from "lucide-react";

export const dashboardStats: DashboardStat[] = [
  {
    title: "Total Registered Wizards",
    value: "1,248",
    subtitle: "+4% from last moon",
    trend: {
      type: "positive",
      icon: TrendingUp,
    },
  },
  {
    title: "Active Elixirs",
    value: "856",
    subtitle: "24 new formulas registered",
    trend: {
      type: "neutral",
      icon: FlaskConical,
    },
  },
  {
    title: "Pending Verifications",
    value: "12",
    subtitle: "Requires High-Council approval",
    trend: {
      type: "warning",
      icon: AlertTriangle,
    },
  },
];
