"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useOrderData } from "@/contexts/OrderDataProvider";
import { cn } from "@/lib/utils";
import OrderTable from "./OrderTable";

const OrderTab = () => {
  const {
    createdOrder,
    createdOrdersLength,
    currentPage,
    deliveredOrder,
    deliveredOrdersLength,
    orderStatus,
    setCreatedOrder,
    setCurrentPage,
    setDeliveredOrder,
  } = useOrderData();

  return (
    <Card className="min-h-96 p-2">
      <Tabs defaultValue={orderStatus[0].value} className="w-full">
        <TabsList
          className={cn(
            " grid-cols-2",
            orderStatus.length || 0 > 2 ? "grid-cols-3" : "grid-cols-2"
          )}
        >
          {orderStatus.map((status) => (
            <TabsTrigger key={status.value} value={status.value}>
              {status.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {orderStatus.map((status) => (
          <TabsContent value={status.value} key={Math.random()}>
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>{status.name} Orders.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {status.value === "shipped" ? (
                  <OrderTable
                    orderData={deliveredOrder}
                    orderStatus={orderStatus}
                  />
                ) : (
                  <OrderTable
                    orderData={createdOrder}
                    orderStatus={orderStatus}
                  />
                )}
              </CardContent>
              <CardFooter>Thank You!</CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};

export default OrderTab;
