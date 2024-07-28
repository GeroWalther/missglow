import { DashboardData } from "@/app/admin/page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import {
  BikeIcon,
  DollarSign,
  HomeIcon,
  ListOrderedIcon,
  User2,
} from "lucide-react";
import { FC } from "react";
import DashboardCard from "./DashboardCard";

interface DashboardProps {
  dashboardParams: DashboardData;
}

const Dashboard: FC<DashboardProps> = ({ dashboardParams }) => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Hi, Welcome Miss Glow!
        </h2>
        <div className="hidden items-center space-x-2 md:flex">
          <Button>Download</Button>
        </div>
      </div>
      <section className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <DashboardCard
            title="Umsatz insgesamt"
            subtitle={`${formatNumber(
              dashboardParams.numberofOrders
            )} Bestellungen`}
            body={formatCurrency(dashboardParams.amount)}
            icon={<DollarSign size={24} />}
          />
          <DashboardCard
            title="Bestellungen"
            subtitle="Anzahl der gesamten Bestellungen"
            body={dashboardParams.numberofOrders.toString()}
            icon={<ListOrderedIcon size={24} />}
          />
          <DashboardCard
            title="Bearbeitete Bestellungen"
            subtitle="Anzahl der gesamten verschickten Bestellungen"
            body={dashboardParams.hasBeenShipped.hasBeenShipped.toString()}
            icon={<HomeIcon size={24} />}
          />
          <DashboardCard
            title="Offene Bestellungen"
            subtitle="Anzahl der gesamten Bestellungen"
            body={(
              dashboardParams.hasBeenShipped.hasBeenShipped -
              dashboardParams.numberofOrders
            ).toString()}
            icon={<BikeIcon size={24} />}
          />
          <DashboardCard
            title="Kunden"
            subtitle={`${formatCurrency(
              dashboardParams.averageValuePerCustomer
            )} Durchschnittlicher Kunden-Wert`}
            body={formatNumber(dashboardParams.userCount)}
            icon={<User2 size={24} />}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4"></div>
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>{/* <RecentSales /> */}</CardContent>
          </Card>
          <div className="col-span-4">{/* <AreaGraph /> */}</div>
          <div className="col-span-4 md:col-span-3">{/* <PieGraph /> */}</div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
