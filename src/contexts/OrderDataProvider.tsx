"use client";
import { OrderStatusType, OrderType } from "@/app/admin/_actions/getOrders";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const orderStatus = [
  {
    name: "Not Shipped",
    value: "notShipped",
  },
  {
    name: "Shipped",
    value: "shipped",
  },
];

interface OrderManagementProps {
  createdOrder: OrderType;
  deliveredOrder: OrderType;
  createdOrdersLength: number;
  deliveredOrdersLength: number;
  children: ReactNode;
}

interface OrderDataContextProps {
  orderStatus: OrderStatusType;
  createdOrder: OrderType;
  deliveredOrder: OrderType;
  currentPage: number;
  createdOrdersLength: number;
  deliveredOrdersLength: number;
  setCreatedOrder: Dispatch<SetStateAction<OrderType>>;
  setDeliveredOrder: Dispatch<SetStateAction<OrderType>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const OrderDataContext = createContext<OrderDataContextProps | undefined>(
  undefined
);

export const useOrderData = () => {
  const context = useContext(OrderDataContext);
  if (!context) {
    throw new Error("useOrderData must be used within a OrderDataProvider");
  }
  return context;
};

export const OrderDataProvider: FC<OrderManagementProps> = ({
  children,
  createdOrder: crtOrd,
  deliveredOrder: dlvdOrd,
  createdOrdersLength,
  deliveredOrdersLength,
}) => {
  const [createdOrder, setCreatedOrder] = useState<OrderType>(crtOrd);
  const [deliveredOrder, setDeliveredOrder] = useState<OrderType>(dlvdOrd);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <OrderDataContext.Provider
      value={{
        orderStatus,
        createdOrder,
        deliveredOrder,
        currentPage,
        createdOrdersLength,
        deliveredOrdersLength,
        setDeliveredOrder,
        setCreatedOrder,
        setCurrentPage,
      }}
    >
      {children}
    </OrderDataContext.Provider>
  );
};
