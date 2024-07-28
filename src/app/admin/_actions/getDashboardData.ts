import db from "@/db";

const getDashboardData = async () => {
  const orderCount = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });

  if (!orderCount) {
    null;
  }

  const getShippedNumber = await db.order.aggregate({
    _count: { hasBeenShipped: true },
  });

  if (!getShippedNumber) {
    null;
  }

  // count unique email addresses
  const orders = await db.order.findMany();

  if (!orders) {
    null;
  }

  const userCount = orders.filter(
    (order, index, self) =>
      index === self.findIndex((t) => t.email === order.email)
  ).length;

  // get sales per day for the last 7 days
  const ordersPerDay = orders.filter(
    (order) => order.createdAt.getTime() > Date.now() - 7 * 24 * 60 * 60
  );

  const salesPerDay = ordersPerDay.reduce(
    (acc: Record<string, number>, order) => {
      const date = order.createdAt.toISOString().split("T")[0];
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date]++;
      return acc;
    },
    {}
  );

  const salesPerDayArray = Object.entries(salesPerDay).map(([date, count]) => ({
    date,
    count,
  }));

  const dashboardData = {
    amount: (orderCount._sum.pricePaidInCents || 0) / 100,
    numberofOrders: orderCount._count,
    hasBeenShipped: getShippedNumber._count,
    userCount,
    averageValuePerCustomer:
      userCount === 0
        ? 0
        : (orderCount._sum.pricePaidInCents || 0) / userCount / 100,
    salesPerDay: salesPerDayArray,
  };

  return dashboardData;
};

export { getDashboardData };
