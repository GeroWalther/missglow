import db from "@/db";
import { NextRequest } from "next/server";

async function POST(req: NextRequest) {
  const body = await req.json();

  const { id, changeShipped } = body as {
    id: string;
    changeShipped: boolean;
  };

  if (!id || changeShipped === undefined) {
    return Response.json(
      { error: "Missing required fields: id" },
      { status: 400 }
    );
  }

  const checkOrder = await db.order.findUnique({
    where: { id },
  });

  if (!checkOrder) {
    return Response.json({ error: "Order not found" }, { status: 404 });
  }

  await db.order.update({
    where: { id },
    data: {
      hasBeenShipped: changeShipped,
    },
  });

  return Response.json({ message: "Order has been shipped" }, { status: 200 });
}

async function GET(req: NextRequest) {}
export { GET, POST };
