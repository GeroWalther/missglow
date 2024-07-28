import getOrders from "../_actions/getOrders";
import OrderTab from "../_components/dashboard/order/OrderTab";

import ErrorComponent from "@/components/ErrorComponent";
import { OrderDataProvider } from "@/contexts/OrderDataProvider";

const Page = async () => {
  const orderData = await getOrders();

  if (orderData.successs === false) {
    return <ErrorComponent message="There was a problem with database" />;
  }

  return (
    <div>
      {orderData && (
        <OrderDataProvider
          createdOrder={orderData.createdOrders}
          deliveredOrder={orderData.deliveredOrders}
          createdOrdersLength={orderData.createdOrdersLength}
          deliveredOrdersLength={orderData.deliveredOrdersLength}
        >
          <OrderTab />
        </OrderDataProvider>
      )}
    </div>
  );
};

export default Page;
