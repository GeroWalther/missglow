import db from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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
      discountInPercent: parseFloat(amount),
      expiresAt: new Date(date),
    },
  });

  if (!discount) {
    return NextResponse.json(
      { message: "Failed to create discount" },
      { status: 500 }
    );
  }

  return NextResponse.json({ discount }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { id } = body;
  if (!id) {
    return NextResponse.json(
      { message: "Please select a date" },
      { status: 400 }
    );
  }

  const discount = await db.discountCode.delete({
    where: {
      id,
    },
  });

  if (!discount) {
    return NextResponse.json(
      { message: "Failed to delete discount" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      message: "Discount deleted successfully",
    },
    { status: 200 }
  );
}

export async function PU(req: NextRequest) {
  const body = await req.json();

  const { id, code, date, amount } = body;

  if (!code || !date) {
    return NextResponse.json(
      { message: "Please select a date" },
      { status: 400 }
    );
  }

  const discount = await db.discountCode.update({
    where: {
      id,
    },
    data: {
      code,
      discountInPercent: parseFloat(amount),
      expiresAt: new Date(date),
    },
  });

  if (!discount) {
    return NextResponse.json(
      { message: "Failed to update discount" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Discount updated" }, { status: 200 });
}
