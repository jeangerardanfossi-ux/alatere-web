'use client';

/**
 * Bloc « Avis Google » d'une activité - alimenté par /api/reviews (API Places).
 * Rendu intégré à la charte ; ne s'affiche pas tant qu'aucun avis n'est disponible
 * (clé API absente, fiche sans avis, ou appel en échec).
 *
 * Conforme : pas de balisage AggregateRating (avis auto-attribués interdits par Google).
 */

import { useEffect, useState } from 'react';
import { useLang } from './lang';

type Review = {
  author: string;
  rating: number;
  text: string;
  time: string;
  uri: string;
  photo?: string;
};
type PlaceReviews = {
  name: string;
  rating: number;
  total: number;
  mapsUri: string;
  reviews: Review[];
};

const TX = {
  eyebrow: { fr: 'Avis clients', en: 'Customer reviews' },
  title: { fr: 'Ils nous recommandent sur Google', en: 'They recommend us on Google' },
  based: { fr: 'avis Google', en: 'Google reviews' },
  all: { fr: 'Voir tous nos avis Google', en: 'See all our Google reviews' },
} as const;

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <span className="g-stars" aria-label={`${value.toFixed(1)} / 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= full ? 'is-on' : ''}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function GoogleReviews({ pole }: { pole: string }) {
  const { lang } = useLang();
  const [data, setData] = useState<PlaceReviews | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(`/api/reviews?pole=${encodeURIComponent(pole)}&lang=${lang}`)
      .then((r) => (r.ok ? r.json() : { data: null }))
      .then((j) => {
        if (alive) setData(j.data ?? null);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [pole, lang]);

  if (!data || !data.reviews.length) return null;
  const t = (k: keyof typeof TX) => TX[k][lang];

  return (
    <section className="g-reviews">
      <div className="g-reviews__in">
        <div className="g-reviews__head">
          <span className="g-label">{t('eyebrow')}</span>
          <h2 className="g-h2">{t('title')}</h2>
          <div className="g-reviews__score">
            <strong>{data.rating.toFixed(1)}</strong>
            <Stars value={data.rating} />
            <span>
              {data.total} {t('based')}
            </span>
          </div>
        </div>

        <div className="g-reviews__grid">
          {data.reviews.map((r, i) => (
            <figure className="g-review" key={i}>
              <div className="g-review__top">
                {r.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="g-review__ava" src={r.photo} alt="" loading="lazy" />
                ) : (
                  <span className="g-review__ava g-review__ava--ph">
                    {r.author.charAt(0).toUpperCase()}
                  </span>
                )}
                <div>
                  <figcaption className="g-review__author">{r.author}</figcaption>
                  <span className="g-review__time">{r.time}</span>
                </div>
              </div>
              <Stars value={r.rating} />
              <blockquote className="g-review__text">{r.text}</blockquote>
            </figure>
          ))}
        </div>

        <a
          className="g-btn g-btn--secondary g-btn--sm g-reviews__cta"
          href={data.mapsUri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('all')} <span className="g-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
