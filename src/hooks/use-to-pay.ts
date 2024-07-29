import { useMemo } from 'react';
import { SHIPPING } from '../../consts';
import { CartItem } from './use-cart-hook';

const useCartTotals = (items: CartItem[], discount: number) => {
  const itemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.product.quantity, 0);
  }, [items]);

  const subItemTotal = useMemo(() => {
    return items.reduce((total, { product }) => total + product.price, 0);
  }, [items]);

  const totalCart = useMemo(
    () => subItemTotal * itemCount,
    [subItemTotal, itemCount]
  );

  const toPay = useMemo(() => totalCart + SHIPPING, [totalCart]);

  return {
    itemCount,
    subItemTotal,
    totalCart,
    toPay,
    discountedPrice:
      totalCart - totalCart * (discount > 0 ? discount / 100 : 1),
  };
};

export default useCartTotals;
