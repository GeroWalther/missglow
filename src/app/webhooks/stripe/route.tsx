import { saveOrder } from '@/app/actions/orders';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import PurchaseReceiptEmail from '@/email/PurchaseReceipt';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature') as string;

    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    if (event.type !== 'charge.succeeded') {
      return new NextResponse('ok', { status: 200 });
    }

    const charge = event.data.object as Stripe.Charge;

    // Try to read products from charge, else fetch from PaymentIntent
    let products: any[] = [];
    let discountCode: string | undefined;

    if (charge.metadata?.products) {
      products = JSON.parse(charge.metadata.products);
      discountCode = charge.metadata.discountCode;
    } else if (charge.payment_intent) {
      const pi = await stripe.paymentIntents.retrieve(
        typeof charge.payment_intent === 'string'
          ? charge.payment_intent
          : charge.payment_intent.id
      );
      const productsStr = pi.metadata?.products || '';
      products = productsStr ? JSON.parse(productsStr) : [];
      discountCode = pi.metadata?.discountCode;
    }

    const pricePaidInCents = charge.amount;
    const email = charge.billing_details?.email || '';
    const customerName = charge.billing_details?.name || '';

    const city = charge.shipping?.address?.city;
    const country = charge.shipping?.address?.country;
    const line1 = charge.shipping?.address?.line1;
    const line2 = charge.shipping?.address?.line2;
    const postalCode = charge.shipping?.address?.postal_code;
    const state = charge.shipping?.address?.state;
    const address = `${line1 || ''}, ${line2 ? line2 + ', ' : ''}${city || ''}, ${state || ''}, ${postalCode || ''}, ${country || ''}`;

    if (!email || !customerName || !products.length) {
      console.warn('Missing data on charge.succeeded – skipping.');
      return new NextResponse('ok', { status: 200 });
    }

    const { order } = await saveOrder(
      address,
      customerName,
      email,
      products,
      pricePaidInCents,
      discountCode || '-'
    );

    try {
      await resend.emails.send({
        from: `BESTELLUNGSEINGANG <${process.env.SENDER_EMAIL}>`,
        to: process.env.SHOP_EMAIL as string,
        subject: 'Neue Bestellung eingegangen',
        react: (
          <PurchaseReceiptEmail
            products={products}
            order={{
              id: order.id,
              createdAt: order.createdAt,
              customerName,
              address,
              email,
              pricePaidInCents,
              shippingCost: order.shippingCost,
              discountCode: order.discountCode,
            }}
          />
        ),
      });
    } catch (error) {
      console.log('Error to admin email:', error);
    }

    try {
      await resend.emails.send({
        from: `Bestellung MISS GLOW BEAUTY <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject: 'Vielen Dank für deine Bestellung',
        react: (
          <PurchaseReceiptEmail
            isAdmin={false}
            products={products}
            order={{
              id: order.id,
              createdAt: order.createdAt,
              customerName,
              address,
              email,
              pricePaidInCents,
              shippingCost: order.shippingCost,
              discountCode: order.discountCode,
            }}
          />
        ),
      });
    } catch (e) {
      console.error('Error to customer email:', e);
    }

    console.log('Order saved successfully:', order.id);
    return new NextResponse('ok', { status: 200 });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return new NextResponse('Internal Server Error!', { status: 500 });
  }
}
