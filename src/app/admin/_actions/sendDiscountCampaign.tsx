'use server';

import db from '@/db';
import { Resend } from 'resend';
import DiscountCampaign from '@/email/DiscountCampaign';
import { generateUniqueGlowCode } from '@/lib/generateDiscountCode';

const resend = new Resend(process.env.RESEND_API_KEY);

export type CampaignResult = {
  totalSubscribers: number;
  sent: number;
  failed: number;
  errors: string[];
};

export async function sendDiscountCampaign(input: {
  discountPercent: number;
  validityDays: number;
  intro?: string;
  subject?: string;
}): Promise<CampaignResult> {
  const { discountPercent, validityDays, intro, subject } = input;

  if (
    !Number.isFinite(discountPercent) ||
    discountPercent <= 0 ||
    discountPercent > 100
  ) {
    throw new Error('Discount percent must be between 1 and 100.');
  }
  if (!Number.isFinite(validityDays) || validityDays < 1) {
    throw new Error('Validity must be at least 1 day.');
  }

  const subscribers = await db.newsletter.findMany({
    select: { email: true, name: true },
  });

  const expiresAt = new Date(
    Date.now() + validityDays * 24 * 60 * 60 * 1000
  );

  const result: CampaignResult = {
    totalSubscribers: subscribers.length,
    sent: 0,
    failed: 0,
    errors: [],
  };

  for (const sub of subscribers) {
    try {
      const code = await generateUniqueGlowCode();
      await db.discountCode.create({
        data: {
          code,
          discountInPercent: discountPercent,
          expiresAt,
          singleUse: true,
          usedCount: 0,
          subscriberEmail: sub.email,
        },
      });

      await resend.emails.send({
        from: `Miss Glow Beauty <${process.env.SENDER_EMAIL}>`,
        to: sub.email.trim(),
        subject:
          subject ?? `Dein persönlicher ${discountPercent}% Rabattcode`,
        react: (
          <DiscountCampaign
            name={sub.name}
            code={code}
            discountPercent={discountPercent}
            expiresAt={expiresAt}
            intro={intro}
          />
        ),
      });
      result.sent++;
    } catch (err) {
      result.failed++;
      const msg = err instanceof Error ? err.message : String(err);
      result.errors.push(`${sub.email}: ${msg}`);
      console.error('Discount campaign send failed for', sub.email, err);
    }
  }

  return result;
}
