import { ActivityChart } from "@/components/charts/ActivityChart";
import { SpecialtyChart } from "@/components/charts/SpecialtyChart";

export function ChartsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <div className="md:col-span-2">
        <ActivityChart />
      </div>
      <div>
        <SpecialtyChart />
      </div>
    </div>
  );
}
