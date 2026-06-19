import Link from 'next/link';
import styles from './Hero.module.css';

/** Tuiles métiers du panneau de droite (direction « Split Côte d'Azur »). */
const tiles = [
  {
    key: 'ecom',
    brand: 'ecoM',
    desc: 'E-commerce · sites marchands opérés en propre',
    href: '/alatere-ecom',
  },
  {
    key: 'forma',
    brand: 'forMa',
    desc: 'Formation professionnelle · Qualiopi',
    href: '/alatere-forma',
  },
  {
    key: 'domo',
    brand: 'doMo',
    desc: "Domiciliation d'entreprise · agréée",
    href: '/alatere-domo',
  },
  {
    key: 'cowo',
    brand: 'coWo',
    desc: 'Coworking · port Vauban, Antibes',
    href: '/alatere-cowo',
  },
] as const;

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.eyebrow}>Antibes · depuis 2002</span>
        <h1 className={styles.title}>
          E-commerce, formations et centre d&rsquo;affaires.
        </h1>
        <p className={styles.lead}>
          Au cœur d&rsquo;Antibes, nous accompagnons dirigeants de PME et
          entrepreneurs avec un service sur mesure et un nombre limité de
          clients. Quatre activités complémentaires, un seul interlocuteur.
        </p>
        <div className={styles.cta}>
          <a href="#activites" className={styles.btn}>
            Découvrir nos activités →
          </a>
          <a href="#contact" className={styles.link}>
            Nous rencontrer
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.tiles}>
          {tiles.map((t) => (
            <Link key={t.key} href={t.href} className={`${styles.tile} ${styles[t.key]}`}>
              <span className={styles.tileBrand}>{t.brand}</span>
              <span className={styles.tileDesc}>{t.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
