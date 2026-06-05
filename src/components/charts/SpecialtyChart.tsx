import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { specialtyData } from "@/data/mockChartData";

export function SpecialtyChart() {
  return (
    <div className="flex flex-col rounded-xl border border-border-subtle bg-card p-6 shadow-md shadow-black/10">
      <h3 className="font-semibold tracking-wider text-text-primary text-base mb-6">
        Wizards by Specialty
      </h3>

      {/* Donut Chart Container */}
      <div className="relative flex-1 flex flex-col justify-center items-center">
        {/* Chart */}
        <div className="relative h-48 w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={specialtyData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
              >
                {specialtyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="#111827"
                    strokeWidth={3}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-extrabold tracking-tight text-text-primary">
              1.2k
            </span>
            <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider">
              Total
            </span>
          </div>
        </div>

        {/* Custom Legend */}
        <div className="mt-6 w-full space-y-2.5 px-2">
          {specialtyData.map((item) => {
            // Calculate percentage
            const percentage = item.name === "Alchemists" ? "45%" : item.name === "Transmuters" ? "30%" : "25%";
            return (
              <div
                key={item.name}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-text-secondary font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="font-semibold text-text-primary">
                  {percentage}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
