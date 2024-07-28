'use server';

import db from '@/db';
import { Product } from '@/hooks/use-cart-hook';
import { SHIPPING } from '../../../consts';

export async function saveOrder(
  address: string,
  customerName: string,
  email: string,
  items: Product[],
  pricePaidInCents: number
) {
//  console.log('ITEMS: ', items);
  // Create the order first
  const order = await db.order.create({
    data: {
      address,
      email,
      pricePaidInCents,
      shippingCost: SHIPPING,
      customerName,
    },
  });

  // Prepare ordered products data with the created order ID
  const orderedProductsData = items.map((item) => ({
    orderId: order.id,
    product: item.name,
    quantity: item.quantity,
  }));

  // Create ordered products
  await db.orderedProduct.createMany({
    data: orderedProductsData,
  });

  // Get the actual array of all created orderedProducts
  const allOrderedProducts = await db.orderedProduct.findMany({
    where: {
      orderId: order.id,
    },
  });

  return { orderedProducts: allOrderedProducts, order };
}
