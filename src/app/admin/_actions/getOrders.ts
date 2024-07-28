"use server";

import db from "@/db";
//import { faker } from "@faker-js/faker";

// const createRandomOrders = (number: number) => {
//   let array = [];
//   for (let index = 0; index < number; index++) {
//     array[index] = {
//       id: "66a" + faker.string.alphanumeric(21).toLowerCase(),
//       pricePaidInCents: faker.number.int({ min: 10000, max: 20000 }),
//       hasBeenShipped: Math.random() < 0.5,
//       address:
//         faker.location.cardinalDirection() +
//         " " +
//         faker.location.city() +
//         " " +
//         faker.location.secondaryAddress() +
//         " " +
//         faker.location.country(),
//       email:
//         faker.person.firstName().toString().toLowerCase() + "@" + "mail.com",
//       createdAt: faker.date.recent(),
//     };
//   }

//   return array;
// };

// type customDataType = ReturnType<typeof createRandomOrders>;

const getOrders = async () => {
  const createdOrders = await db.order.findMany({
    where: { hasBeenShipped: false },
    select: {
      id: true,
      pricePaidInCents: true,
      hasBeenShipped: true,
      address: true,
      email: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  if (!createdOrders) {
    return {
      createdOrders: [],
      deliveredOrders: [],
      createdOrdersLength: 0,
      deliveredOrdersLength: 0,
      successs: true,
    };
  }

  const deliveredOrders = await db.order.findMany({
    where: { hasBeenShipped: true },
    select: {
      id: true,
      pricePaidInCents: true,
      hasBeenShipped: true,
      address: true,
      email: true,
      createdAt: true,
    },
  });

  if (!deliveredOrders) {
    return {
      createdOrders: [],
      deliveredOrders: [],
      createdOrdersLength: 0,
      deliveredOrdersLength: 0,
      successs: true,
    };
  }

  const response = {
    createdOrders,
    deliveredOrders,
    createdOrdersLength: createdOrders.length,
    deliveredOrdersLength: deliveredOrders.length,
    successs: true,
  };

  return response;
};
const orderStatus = [
  {
    name: "Not Shipped",
    value: "notShipped",
  },
  {
    name: "Shipped",
    value: "shippedxxx",
  },
];

export type OrderDataType = Awaited<ReturnType<typeof getOrders>>;
export type OrderType = OrderDataType["createdOrders"];
export type OrderStatusType = typeof orderStatus;

export default getOrders;
