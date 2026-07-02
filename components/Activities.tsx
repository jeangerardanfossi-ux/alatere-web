import Link from 'next/link';
import styles from './Activities.module.css';

const bandColors: Record<string, string> = {
  ecom: 'linear-gradient(90deg,#0C306C,#1c4a92)',
  forma: 'linear-gradient(90deg,#b07f2f,#C0934A)',
  domo: 'linear-gradient(90deg,#305424,#46743a)',
  cowo: 'linear-gradient(90deg,#13534a,#186C60)',
};

const visualColors: Record<string, string> = {
  forma: 'linear-gradient(135deg,#C0934A,#E4C078)',
  domo: 'linear-gradient(135deg,#305424,#5b8a4a)',
  cowo: 'linear-gradient(135deg,#186C60,#2fa090)',
};

/** Coche réutilisable (pas de dépendance icône). */
function Check({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M13 4 6.5 11 3 7.5"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Activities() {
  return (
    <section id="activites" className={styles.section}>
      <div className={styles.head}>
        <div>
          <span className={styles.eyebrow}>Nos activités</span>
          <h2 className={styles.h2}>Quatre métiers, une même exigence.</h2>
        </div>
        <a className={styles.headLink} href="#contact">
          Un seul interlocuteur →
        </a>
      </div>

      <div className={styles.grid}>
        {/* ---------- ecoM ---------- */}
        <article id="ecom" className={`${styles.card} ${styles.ecom}`}>
          <div className={styles.band} style={{ background: bandColors.ecom }}>
            <span className={styles.hashtag}>#savoir-faire-ecommerce</span>
            <span className={styles.status}>E-commerce</span>
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>
              Alatere <em>ecoM</em>
            </h3>
            <p className={styles.subtitle}>
              Sites marchands opérés en propre · depuis 2003
            </p>
            <p className={styles.text}>
              Vingt ans à concevoir, opérer et référencer nos propres boutiques
              d&rsquo;art - notre meilleure démonstration de savoir-faire SEO, SEA
              et opérations.
            </p>
            <div className={styles.vignettes}>
              <a className={styles.vignette} href="https://repro-tableaux.com" target="_blank" rel="noopener noreferrer">
                <b>repro-tableaux.com</b>
                <span>France</span>
              </a>
              <a className={styles.vignette} href="https://copia-di-arte.com" target="_blank" rel="noopener noreferrer">
                <b>copia-di-arte.com</b>
                <span>Union européenne · 4 langues</span>
              </a>
            </div>
            <Link className={styles.cardCta} href="/alatere-ecom">
              Découvrir le savoir-faire →
            </Link>
          </div>
        </article>

        {/* ---------- forMa ---------- */}
        <article id="forma" className={`${styles.card} ${styles.forma}`}>
          <div className={styles.band} style={{ background: bandColors.forma }}>
            <span className={styles.hashtag}>#formations</span>
            <span className={styles.status}>Certifié Qualiopi</span>
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>
              Alatere <em>forMa</em>
            </h3>
            <p className={styles.subtitle}>Organisme de formation professionnelle</p>
            <p className={styles.text}>
              Cinq grands domaines de compétences, parcours sur mesure et
              financement OPCO. Programmes détaillés sur notre catalogue dédié.
            </p>
            <ul className={styles.list}>
              {['Webmarketing', 'Intelligence artificielle', 'Langues', 'Communication digitale', 'Immobilier'].map(
                (d) => (
                  <li key={d}>
                    <span className={styles.dot} />
                    {d}
                  </li>
                ),
              )}
            </ul>
            <div className={styles.visual} style={{ background: visualColors.forma }}>
              <span>Visuel - salle de formation</span>
            </div>
            <Link className={styles.cardCta} href="/alatere-forma">
              Voir le catalogue ↗
            </Link>
          </div>
        </article>

        {/* ---------- doMo ---------- */}
        <article id="domo" className={`${styles.card} ${styles.domo}`}>
          <div className={styles.band} style={{ background: bandColors.domo }}>
            <span className={styles.hashtag}>#domiciliation-antibes</span>
            <span className={styles.status}>Agréé préfecture</span>
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>
              Alatere <em>doMo</em>
            </h3>
            <p className={styles.subtitle}>Domiciliation d&rsquo;entreprise à Antibes</p>
            <p className={styles.text}>
              Une adresse de prestige au 9 Boulevard Albert 1<sup>er</sup> pour
              votre siège social. Réception du courrier, scan, réexpédition -
              idéal SIRET et transfert de siège.
            </p>
            <div className={styles.prices}>
              <div className={styles.price}>
                <div className={styles.priceAmount}>30 €</div>
                <span className={styles.priceLabel}>Offre Headquarters</span>
              </div>
              <div className={`${styles.price} ${styles.priceFeatured}`}>
                <div className={styles.priceAmount}>50 €</div>
                <span className={styles.priceLabel}>Pro / mois</span>
              </div>
              <div className={styles.price}>
                <div className={styles.priceAmount}>79 €</div>
                <span className={styles.priceLabel}>Frais de dossier</span>
              </div>
            </div>
            <Link className={styles.cardCta} href="/alatere-domo">
              Voir les formules →
            </Link>
          </div>
        </article>

        {/* ---------- coWo ---------- */}
        <article id="cowo" className={`${styles.card} ${styles.cowo}`}>
          <div className={styles.band} style={{ background: bandColors.cowo }}>
            <span className={styles.hashtag}>#coworking-antibes</span>
            <span className={styles.status}>Communauté</span>
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>
              Alatere <em>coWo</em>
            </h3>
            <p className={styles.subtitle}>Espace de coworking à Antibes</p>
            <p className={styles.text}>
              Postes nomades, bureaux fermés, salles de réunion. Café, fibre et
              événements business mensuels - à deux pas du port Vauban. Venez nous
              rendre visite au 9 boulevard Albert 1<sup>er</sup> à Antibes.
            </p>
            <ul className={styles.facts}>
              {['5 salles de réunion', '16 postes de travail', 'Internet haut-débit', 'Salles climatisées'].map(
                (f) => (
                  <li key={f}>
                    <Check color="#186C60" />
                    {f}
                  </li>
                ),
              )}
            </ul>
            <div className={styles.visual} style={{ background: visualColors.cowo }}>
              <span>Visuel - espace coworking</span>
            </div>
            <Link className={styles.cardCta} href="/alatere-cowo">
              Réserver une visite →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
