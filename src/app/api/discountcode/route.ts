import db from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const discountCode = body.inputVal;

    const discount = await db.discountCode.findFirst({
      where: { code: discountCode },
    });

    if (!discount) {
      return NextResponse.json(
        {
          discountInPercent: 0,
          message: 'Invalid discount code or discount not found.',
          code: 0,
        },
        { status: 200 }
      );
    }

    // Expired?
    if (new Date() > discount.expiresAt) {
      return NextResponse.json(
        {
          discountInPercent: 0,
          message: 'Discount code has expired.',
          code: 1,
        },
        { status: 200 }
      );
    }

    // Single-use codes can only be redeemed once. The increment happens in the
    // Stripe webhook after the order is saved.
    const usedCount = discount.usedCount ?? 0;
    if (discount.singleUse && usedCount >= 1) {
      return NextResponse.json(
        {
          discountInPercent: 0,
          message: 'This code has already been used.',
          code: 1,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        discountInPercent: discount.discountInPercent,
        message: 'Discount code has been applied!',
        code: 2,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
