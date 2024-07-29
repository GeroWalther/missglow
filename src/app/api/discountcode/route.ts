import db from "@/db";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    //  console.log('BODY: ', body);
    const discountCode = body.inputVal;
    // console.log('DISCOUNTCODE: ', discountCode);

    // Check if the discount code exists in the database
    const discount = await db.discountCode.findFirst({
      where: {
        code: discountCode,
      },
    });

    if (!discount || discount == null) {
      return NextResponse.json(
        {
          discountInPercent: 0,
          message: "Invalid discount code or discount not found.",
          code: 0,
        },
        { status: 200 }
      );
    }

    // Check if the discount code has expired
    const currentDate = new Date();
    if (currentDate > discount.expiresAt) {
      return NextResponse.json(
        {
          discountInPercent: 0,
          message: "Discount code has expired.",
          code: 1,
        },
        { status: 200 }
      );
    }

    // If the discount code is valid, send back the discount in percent
    return NextResponse.json(
      {
        discountInPercent: discount.discountInPercent,
        message: "Discount code has been applied!",
        code: 2,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
