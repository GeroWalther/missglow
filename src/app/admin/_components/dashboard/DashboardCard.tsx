import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FC } from "react";

interface DashboardCardProps {
  title: string;
  subtitle: string;
  body: string;
  icon: React.ReactNode;
}

const DashboardCard: FC<DashboardCardProps> = ({
  icon,
  body,
  subtitle,
  title,
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{body}</div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
