import db from '@/db';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import Subscribed from '@/email/Subscribed';
import { generateUniqueGlowCode } from '@/lib/generateDiscountCode';

const resend = new Resend(process.env.RESEND_API_KEY);

const NEWSLETTER_DISCOUNT_PERCENT = 15;
const NEWSLETTER_VALIDITY_DAYS = 90;

export async function POST(
  req: NextRequest
): Promise<NextResponse | undefined> {
  try {
    const body = await req.json();
    const { email, name, emailIsValid } = body;

    if (!email || !emailIsValid) {
      return NextResponse.json(
        {
          error:
            'E-Mail ist erforderlich und muss mit der bestätigten E-Mail übereinstimmen.',
          code: 0,
        },
        { status: 400 }
      );
    }
    if (!name) {
      return NextResponse.json(
        {
          msg: '',
          error: 'Name ist erforderlich.',
          code: 1,
        },
        { status: 400 }
      );
    }

    try {
      await db.newsletter.create({
        data: {
          email,
          name,
          subscribedAt: new Date(),
        },
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { msg: '', error: 'Schon eingeschrieben! Already subscribed!' },
        { status: 400 }
      );
    }

    // Generate a unique single-use discount code for this subscriber.
    const code = await generateUniqueGlowCode();
    const expiresAt = new Date(
      Date.now() + NEWSLETTER_VALIDITY_DAYS * 24 * 60 * 60 * 1000
    );
    await db.discountCode.create({
      data: {
        code,
        discountInPercent: NEWSLETTER_DISCOUNT_PERCENT,
        expiresAt,
        singleUse: true,
        usedCount: 0,
        subscriberEmail: email,
      },
    });

    // Email the personal code to the subscriber.
    await resend.emails.send({
      from: `Newsletter <${process.env.SENDER_EMAIL}>`,
      to: email.toString().trim() as string,
      subject: 'Hier ist dein persönlicher Gutscheincode!',
      react: (
        <Subscribed
          name={name}
          code={code}
          discountPercent={NEWSLETTER_DISCOUNT_PERCENT}
          expiresAt={expiresAt}
        />
      ),
    });

    return NextResponse.json(
      {
        error: '',
        msg: 'Erfolgreich eingeschrieben!🎉 Wir haben dir eine Email mit deinem persönlichen Rabattcode gesendet!',
        code: 2,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: 'Failed to subscribe',
      },
      { status: 500 }
    );
  }
}
