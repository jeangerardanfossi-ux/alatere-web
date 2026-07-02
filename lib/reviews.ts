/**
 * Avis Google via l'API Google Places (New) - côté serveur uniquement.
 * Importé seulement par la route /api/reviews (la clé ne fuit jamais côté client).
 *
 * Variable d'environnement : GOOGLE_PLACES_API_KEY
 *   Google Cloud → API « Places API (New) » activée + facturation activée.
 * Si la clé est absente, getReviews renvoie null (le bloc avis ne s'affiche pas).
 *
 * Mise en cache (revalidate) pour rester bien en deçà du quota gratuit :
 *   - résolution du Place ID : 7 jours (stable) ;
 *   - détails + avis : 24 h.
 */

const KEY = process.env.GOOGLE_PLACES_API_KEY;

export type Review = {
  author: string;
  rating: number;
  text: string;
  time: string; // ex. « il y a 2 mois »
  uri: string;
  photo?: string;
};

export type PlaceReviews = {
  name: string;
  rating: number; // note moyenne
  total: number; // nombre d'avis
  mapsUri: string; // lien vers la fiche Google
  reviews: Review[];
};

export type PoleKey = 'ecom' | 'forma' | 'domo' | 'cowo';

// Requête texte par activité (nom de la fiche + adresse) - sert à résoudre le Place ID.
const QUERIES: Record<PoleKey, string> = {
  ecom: 'Repro-tableaux 9 Boulevard Albert 1er 06600 Antibes',
  forma: 'Alatere Web formation 9 Boulevard Albert 1er 06600 Antibes',
  domo: 'Alatere doMo 9 Boulevard Albert 1er 06600 Antibes',
  cowo: 'Alatere coWo 9 Boulevard Albert 1er 06600 Antibes',
};

async function findPlaceId(query: string): Promise<string | null> {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': KEY as string,
      'X-Goog-FieldMask': 'places.id',
    },
    body: JSON.stringify({ textQuery: query, languageCode: 'fr', regionCode: 'FR' }),
    next: { revalidate: 604800 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { places?: { id: string }[] };
  return data.places?.[0]?.id ?? null;
}

type ApiReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
};

export async function getReviews(
  pole: string,
  lang: 'fr' | 'en' = 'fr',
): Promise<PlaceReviews | null> {
  if (!KEY) return null;
  const query = QUERIES[pole as PoleKey];
  if (!query) return null;

  try {
    const id = await findPlaceId(query);
    if (!id) return null;

    const res = await fetch(
      `https://places.googleapis.com/v1/places/${id}?languageCode=${lang}&regionCode=FR`,
      {
        headers: {
          'X-Goog-Api-Key': KEY,
          'X-Goog-FieldMask':
            'displayName,rating,userRatingCount,googleMapsUri,reviews',
        },
        next: { revalidate: 86400 },
      },
    );
    if (!res.ok) return null;

    const d = (await res.json()) as {
      displayName?: { text?: string };
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: ApiReview[];
    };

    const reviews: Review[] = (d.reviews ?? [])
      .slice(0, 5)
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Client Google',
        rating: r.rating ?? 5,
        text: (r.text?.text ?? r.originalText?.text ?? '').trim(),
        time: r.relativePublishTimeDescription ?? '',
        uri: r.authorAttribution?.uri ?? d.googleMapsUri ?? '',
        photo: r.authorAttribution?.photoUri,
      }))
      .filter((r) => r.text.length > 0);

    return {
      name: d.displayName?.text ?? '',
      rating: d.rating ?? 0,
      total: d.userRatingCount ?? 0,
      mapsUri: d.googleMapsUri ?? '',
      reviews,
    };
  } catch {
    return null;
  }
}
