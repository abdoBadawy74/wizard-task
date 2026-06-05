import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { activityData } from "@/data/mockChartData";
import { CHART_COLORS } from "@/constants/chart";

export function ActivityChart() {
  // Format xAxis to show only specific labels
  const formatXAxis = (_tickItem: string, index: number) => {
    if (index === 0) return "Moon Start";
    if (index === Math.floor(activityData.length / 2)) return "Full Moon";
    if (index === activityData.length - 1) return "Moon End";
    return "";
  };

  return (
    <div className="flex flex-col rounded-xl border border-border-subtle bg-card p-6 shadow-md shadow-black/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold tracking-wider text-text-primary text-base">
          Registry Activity
        </h3>
        <span className="rounded-lg bg-card-hover border border-border-subtle px-2.5 py-1 text-xs font-semibold text-text-secondary">
          Last 30 Days
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activityData}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            barSize={25}
          >
            <CartesianGrid
              vertical={false}
              stroke="#1F2937"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="label"
              tickFormatter={formatXAxis}
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              dx={-5}
            />
            <Tooltip
              cursor={{ fill: "rgba(155, 150, 170, 0.05)" }}
              contentStyle={{
                backgroundColor: "#111827",
                borderColor: "#1F2937",
                borderRadius: "8px",
                color: "#F9FAFB",
                fontSize: "14px",
              }}
              labelClassName="hidden"
            />
            <Bar
              dataKey="value"
              fill={CHART_COLORS.bar}
              radius={[4, 4, 0, 0]}
              activeBar={{ fill: CHART_COLORS.barHover }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
