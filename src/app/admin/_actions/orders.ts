"use server";

import { SHIPPING } from "@/config/priceConfig";
import db from "@/db";
import { Product } from "@/hooks/use-cart-hook";
import { sendEmail } from "@/lib/sendEmail";

export async function saveOrder(
  address: string,
  email: string,
  items: Product[],
  pricePaidInCents: number
  // stripePaymentIntentId: string
) {
  // Prepare ordered products data with the created order ID
  const orderedProductsData = items.map((item: Product) => ({
    product: item.name,
    quantity: item.quantity,
  }));

  await db.order.create({
    data: {
      address,
      email,
      pricePaidInCents,
      shippingCost: SHIPPING,
      orderedProducts: {
        createMany: {
          data: orderedProductsData,
        },
      },
    },
  });

  await sendEmail({
    email,
    name: "User",
    address,
    type: "orderConfirmation",
    product: items,
  });
}
