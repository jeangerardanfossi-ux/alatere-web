import { NextResponse } from 'next/server';
import { getReviews } from '@/lib/reviews';

/** Avis Google d'une activité : /api/reviews?pole=domo&lang=fr */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pole = searchParams.get('pole') || '';
  const lang = searchParams.get('lang') === 'en' ? 'en' : 'fr';
  const data = await getReviews(pole, lang);
  // Cache CDN : 24 h, revalidation en arrière-plan.
  return NextResponse.json(
    { data },
    { headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200' } },
  );
}
