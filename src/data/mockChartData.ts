import type { ActivityDataPoint, SpecialtyDataPoint } from "@/types/dashboard";
import { CHART_COLORS } from "@/constants/chart";

export const activityData: ActivityDataPoint[] = [
  { label: "Day 1", value: 32 },
  { label: "Day 3", value: 45 },
  { label: "Day 5", value: 28 },
  { label: "Day 7", value: 52 },
  { label: "Day 9", value: 38 },
  { label: "Day 11", value: 61 },
  { label: "Day 13", value: 44 },
  { label: "Day 15", value: 55 },
  { label: "Day 17", value: 72 },
  { label: "Day 19", value: 48 },
  { label: "Day 21", value: 65 },
  { label: "Day 23", value: 82 },
  { label: "Day 25", value: 58 },
  { label: "Day 27", value: 91 },
  { label: "Day 29", value: 75 },
];

export const specialtyData: SpecialtyDataPoint[] = [
  { name: "Alchemists", value: 540, color: CHART_COLORS.alchemists },
  { name: "Transmuters", value: 360, color: CHART_COLORS.transmuters },
  { name: "Conjurers", value: 300, color: CHART_COLORS.conjurers },
];

export const specialtyTotal = specialtyData.reduce(
  (sum, item) => sum + item.value,
  0
);
