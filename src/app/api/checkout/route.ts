import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20',
});

export async function POST(
  req: NextRequest
): Promise<NextResponse | undefined> {
  try {
    const body = await req.json();
    const { totalAmountinCents, products } = body;
    if (!totalAmountinCents || !products) {
      throw new Error(
        'Missing required fields: totalAmountinCents or products'
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      // payment_method_types: ['card', 'klarna'],
      amount: totalAmountinCents,
      currency: 'EUR',
      description: 'Miss Glow Bestellung',
      metadata: {
        products: JSON.stringify(products),
      },
    });

    if (paymentIntent.client_secret === null) {
      throw new Error('Stripe failed to create payment intent.');
    }

    return NextResponse.json(
      {
        message: 'PaymentIntent created successfully',
        client_secret: paymentIntent.client_secret,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating payment intent on server: ', error);

    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

export function GET(): NextResponse {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
