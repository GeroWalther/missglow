import { NextResponse } from 'next/server';
import db from '@/db/db';

export async function GET() {
  try {
    // Simple query to keep database connection alive
    await db.order.count();
    return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
