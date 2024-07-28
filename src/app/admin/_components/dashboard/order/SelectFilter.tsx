"use client";
import { OrderStatusType } from "@/app/actions/getOrders";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrderData } from "@/contexts/OrderDataProvider";
import { FC, useState } from "react";

interface SelectFilterProps {
  placeHolder: string;
  toChangeValue: string;
  items: OrderStatusType;
  id?: string;
}

const SelectFilter: FC<SelectFilterProps> = ({
  placeHolder,
  toChangeValue,
  id,
}) => {
  const { setCreatedOrder, setDeliveredOrder, createdOrder, deliveredOrder } =
    useOrderData();
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState(false);

  const handleChange = (value: string) => {
    setState(true);
    fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        changeShipped: value == "shipped" ? false : true,
      }),
    })
      .then((res) => {
        if (res.ok) {
          const selectedOrder = createdOrder.find((order) => order.id === id);
          if (selectedOrder) {
            selectedOrder.hasBeenShipped = true;
            setCreatedOrder((prev) => prev.filter((order) => order.id !== id));
            setDeliveredOrder((prev) => [...prev, selectedOrder]);
          } else {
            const selectedOrder = deliveredOrder.find(
              (order) => order.id === id
            );
            if (selectedOrder) {
              selectedOrder.hasBeenShipped = false;
              setDeliveredOrder((prev) =>
                prev.filter((order) => order.id !== id)
              );
              setCreatedOrder((prev) => [...prev, selectedOrder]);
            }
          }
        }
        setState(false);
      })
      .catch((err) => {
        setState(false);
        setError(err.message);
      })
      .finally(() => {
        setState(false);
      });
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger disabled={state}>
        <SelectValue
          placeholder={placeHolder ? placeHolder : "Please Select"}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Change status to</SelectLabel>
          <SelectItem value={toChangeValue}>
            {placeHolder === "Shipped" ? "Not Shipped" : "Shipped"}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectFilter;
