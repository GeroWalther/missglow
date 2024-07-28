import { useMemo, useState } from "react";
import { SHIPPING } from "../../consts";
import { CartItem } from "./use-cart-hook";

const useCartTotals = (items: CartItem[]) => {
  const [discount, setDiscount] = useState<number>(0);

  const itemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.product.quantity, 0);
  }, [items]);

  const subItemTotal = useMemo(() => {
    return items.reduce(
      (total, { product }) => total + product.price * product.quantity,
      0
    );
  }, [items]);

  const totalCart = useMemo(() => subItemTotal, [subItemTotal]);

  const toPay = useMemo(
    () => totalCart + SHIPPING + discount,
    [totalCart, discount]
  );

  const setNewDiscount = (x: number) => {
    setDiscount(x);
    alert("Discount set to: " + x);
  };

  return { itemCount, subItemTotal, totalCart, toPay, setNewDiscount };
};

export default useCartTotals;
