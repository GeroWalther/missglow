"use client";
import { OrderStatusType, OrderType } from "@/app/actions/getOrders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FC } from "react";
import SelectFilter from "./SelectFilter";

interface OrderTableProps {
  orderData: OrderType;
  orderStatus: OrderStatusType;
}

const OrderTable: FC<OrderTableProps> = ({ orderData, orderStatus }) => {
  if (!orderData) {
    return <div>No orders available</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order Id</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Date Created</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orderData.map((singleRow) => (
          <TableRow key={singleRow.id}>
            <TableCell className="font-medium">{singleRow.id}</TableCell>
            <TableCell className="text-left w-36">
              {singleRow.hasBeenShipped ? (
                <SelectFilter
                  items={orderStatus}
                  placeHolder={
                    singleRow.hasBeenShipped ? "Shipped" : "Not Shipped"
                  }
                  toChangeValue="shipped"
                  id={singleRow.id}
                />
              ) : (
                <SelectFilter
                  items={orderStatus}
                  placeHolder={
                    singleRow.hasBeenShipped ? "Shipped" : "Not Shipped"
                  }
                  toChangeValue="notShipped"
                  id={singleRow.id}
                />
              )}
            </TableCell>
            <TableCell className="font-medium">{singleRow.address}</TableCell>
            <TableCell className="font-medium">{singleRow.email}</TableCell>
            <TableCell className="font-medium">
              {new Date(singleRow.createdAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </TableCell>
            <TableCell className="font-bold text-right">
              €{singleRow.pricePaidInCents / 100}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderTable;
