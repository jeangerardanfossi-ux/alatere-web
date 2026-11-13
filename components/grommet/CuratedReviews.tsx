'use client';

/**
 * Bloc « Avis Google » sélectionnés, rendu en HTML statique (SSR) :
 * le texte des avis est dans la page, lisible par Google et les assistants IA.
 * Données : lib/curated-reviews.ts. Couleur : reprend l'accent de la page (--accent).
 *
 * Conforme : pas de balisage AggregateRating / Review (avis auto-attribués).
 */

import { useLang } from './lang';
import { CURATED_REVIEWS } from '@/lib/curated-reviews';
import styles from './CuratedReviews.module.css';

const TX = {
  google: { fr: 'avis Google', en: 'Google reviews' },
  all: { fr: 'Lire les {n} avis sur Google', en: 'Read all {n} reviews on Google' },
  fromFr: { fr: '', en: 'Translated from French by Alatere Web' },
  fromEn: { fr: "Traduit de l'anglais", en: '' },
} as const;

export default function CuratedReviews({ pole }: { pole: 'forma' | 'cowo' | 'domo' }) {
  const { lang } = useLang();
  const place = CURATED_REVIEWS[pole];
  const rating = lang === 'en' ? place.ratingEn : place.rating;

  return (
    <section className={styles.wrap} id="avis" aria-labelledby={`avis-${pole}-title`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <span className="g-label">
              <span className={`g-tag ${styles.tag}`}>{place.label[lang]}</span>
            </span>
            <h2 className="g-h2" id={`avis-${pole}-title`}>
              {place.title[lang]}
            </h2>
          </div>
          <div className={styles.score}>
            <strong>{rating}</strong>
            <div>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span className={styles.count}>
                {place.total} {TX.google[lang]}
              </span>
            </div>
          </div>
        </div>

        <ul className={styles.grid}>
          {place.reviews.map((r) => {
            const translated =
              r.original !== lang ? (r.original === 'fr' ? TX.fromFr[lang] : TX.fromEn[lang]) : '';
            return (
              <li className={styles.card} key={r.author + r.meta.fr}>
                <blockquote className={styles.quote} lang={translated ? lang : r.original}>
                  {r.text[lang]}
                </blockquote>
                <div className={styles.meta}>
                  <b>{r.author}</b>
                  {r.meta[lang]}
                  {translated ? <> · {translated}</> : null}
                  <br />
                  <span className={styles.pill}>{r.tag[lang]}</span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.foot}>
          <p className={styles.legal}>{place.legal[lang]}</p>
          <a
            className="g-btn g-btn--secondary"
            href={place.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {TX.all[lang].replace('{n}', String(place.total))} <span className="g-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
