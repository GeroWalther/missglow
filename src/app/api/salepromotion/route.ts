import { NextResponse } from 'next/server';
import db from '@/db';

export async function GET() {
  try {
    const now = new Date();
    
    // Find sale promotion that is within date range
    const salePromotion = await db.salePromotion.findFirst({
      where: {
        saleStartDate: { lte: now },
        saleUntil: { gte: now },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    if (!salePromotion) {
      return NextResponse.json({
        isActive: false,
        salePercentage: 0,
        saleName: '',
        saleUntil: '',
      });
    }

    // Calculate isActive dynamically based on date range (don't rely on stored value)
    const isActive = now >= salePromotion.saleStartDate && now <= salePromotion.saleUntil;

    return NextResponse.json({
      isActive,
      salePercentage: salePromotion.salePercentage,
      saleName: salePromotion.saleName,
      saleUntil: salePromotion.saleUntil.toISOString(),
    });
  } catch (error) {
    console.error('Error fetching sale promotion:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sale promotion' },
      { status: 500 }
    );
  }
}
