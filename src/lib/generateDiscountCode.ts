import { randomBytes } from 'crypto';
import db from '@/db';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O/1/I/L

function randomToken(length: number): string {
  const bytes = randomBytes(length);
  let out = '';
  for (let i = 0; i < length; i++) {
    out += ALPHABET[bytes[i] % ALPHABET.length];
  }
  return out;
}

/**
 * Generate a unique GLOW-XXXXXX code that does not collide with an existing
 * DiscountCode in the database. Retries up to 5 times before throwing.
 */
export async function generateUniqueGlowCode(): Promise<string> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = `GLOW-${randomToken(6)}`;
    const existing = await db.discountCode.findUnique({ where: { code } });
    if (!existing) return code;
  }
  throw new Error('Failed to generate a unique discount code after 5 attempts');
}
