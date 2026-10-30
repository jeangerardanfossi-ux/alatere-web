import styles from './WorkValues.module.css';

const I = {
  stroke: 'currentColor',
  fill: 'none',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const values = [
  {
    title: 'Le même contact',
    text: 'La personne qui vous répond connaît votre dossier.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...I}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <path d="M16 6.2a3 3 0 0 1 0 5.6M17 14.5a5 5 0 0 1 3.5 4.5" />
      </svg>
    ),
  },
  {
    title: 'Une seule adresse',
    text: 'Agence, formation, domiciliation et coworking au 9 boulevard Albert 1er.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...I}>
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
      </svg>
    ),
  },
  {
    title: 'À Antibes depuis 2008',
    text: 'Nous participons à la vie économique et associative de la ville.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...I}>
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Vingt ans d’e-commerce',
    text: 'Nous gérons nos propres boutiques en ligne depuis 2003. Nos clients profitent de ce que nous y apprenons.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...I}>
        <circle cx="12" cy="9" r="5" />
        <path d="M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5" />
      </svg>
    ),
  },
];

export default function WorkValues() {
  return (
    <section className={styles.block} aria-labelledby="work-values-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Iveta et Jean-Gérard Anfossi</p>
        <h2 id="work-values-title" className={styles.h2}>
          Nous suivons un nombre limité de clients.
        </h2>
        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.title} className={styles.col}>
              <span className={styles.icon}>{v.icon}</span>
              <h3 className={styles.colTitle}>{v.title}</h3>
              <p className={styles.colText}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
