import { saveOrder } from "@/app/actions/orders";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY);

async function POST(req: NextRequest) {
  const event = stripe.webhooks.constructEvent(
    await req.text(),
    req.headers.get("stripe-signature") as string,
    process.env.STRIPE_WEBHOOK_SECRET as string
  );

  if (event.type === "charge.succeeded") {
    const charge = event.data.object;
    const productsAsString = charge.metadata.products;
    const products = JSON.parse(productsAsString);

    const email = charge.billing_details.email;
    const pricePaidInCents = charge.amount;
    // const customerName = charge.billing_details.name;

    const city = charge.shipping?.address?.city;
    const country = charge.shipping?.address?.country;
    const line1 = charge.shipping?.address?.line1;
    const line2 = charge.shipping?.address?.line2;
    const postalCode = charge.shipping?.address?.postal_code;
    const state = charge.shipping?.address?.state;
    const address = `${line1}, ${
      line2 ? line2 + ", " : ""
    } ${city}, ${state}, ${postalCode}, ${country}`;

    if (email == null || address == null) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    //  Save order in DB
    await saveOrder(address, email, products, pricePaidInCents);
  }
  return new NextResponse();
}

export { POST };
