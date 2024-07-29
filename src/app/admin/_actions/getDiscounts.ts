import db from "@/db";

const getDiscounts = async () => {
  const discounts = await db.discountCode.findMany({
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
