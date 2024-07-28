import ErrorComponent from "@/components/ErrorComponent";
import { getDashboardData } from "./_actions/getDashboardData";
import Dashboard from "./_components/dashboard/Dashboard";
export type DashboardData = typeof getDashboardData extends () => Promise<
  infer T
>
  ? T
  : never;
export default async function AdminDashboard() {
  const dashboardData = await getDashboardData();

  if (!dashboardData) {
    return <ErrorComponent message="No data found" />;
  }

  return <Dashboard dashboardParams={dashboardData} />;
}
