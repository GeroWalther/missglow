import db from "@/db";

const getDiscounts = async () => {
  // Only list multi-use admin Rabattaktionen here. Single-use codes generated
  // by the newsletter subscribe flow or the admin discount campaign are
  // intentionally hidden from this view — there can be thousands of them and
  // they are personal to each subscriber.
  const discounts = await db.discountCode.findMany({
    where: {
      singleUse: { not: true },
    },
    select: {
      code: true,
      discountInPercent: true,
      expiresAt: true,
      id: true,
    },
  });

  if (!discounts || discounts.length === 0) {
    return [];
  }

  return discounts;
};

export type DiscountType = Awaited<ReturnType<typeof getDiscounts>>;

export { getDiscounts };
