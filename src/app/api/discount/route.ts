import db from "@/db";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { code, date, amount } = body;
  if (!code || !date) {
    return NextResponse.json(
      { message: "Please select a date" },
      { status: 400 }
    );
  }

  const discount = await db.discountCode.create({
    data: {
      code,
      discountInPercent: amount,
      expiresAt: new Date(date),
    },
  });

  if (!discount) {
    return NextResponse.json(
      { message: "Failed to create discount" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: " created successfully" },
    { status: 200 }
  );
};
export { POST };
