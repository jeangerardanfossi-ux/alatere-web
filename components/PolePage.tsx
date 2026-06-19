import Link from 'next/link';
import SiteHeader from './Header';
import Contact from './Contact';
import SiteFooter from './SiteFooter';
import type { PoleContent } from '@/lib/poles-content';
import styles from './PolePage.module.css';

export default function PolePage({ pole }: { pole: PoleContent }) {
  // La couleur du pôle pilote tout le dégradé / les accents via --pole.
  const style = { '--pole': `var(${pole.colorVar})` } as React.CSSProperties;

  return (
    <>
      <SiteHeader />
      <main>
        <section className={styles.hero} style={style}>
          <div className={styles.heroInner}>
            <Link href="/" className={styles.crumb}>
              ← Alatere Web
            </Link>
            <div>
              <span className={styles.status}>{pole.status}</span>
            </div>
            <h1 className={styles.h1}>
              Alatere <em>{pole.brand}</em>
            </h1>
            <p className={styles.tagline}>{pole.tagline}</p>
            <p className={styles.intro}>{pole.intro}</p>
            <div className={styles.ctas}>
              <a href="#contact" className={styles.btn}>
                Nous contacter →
              </a>
              <Link href="/" className={`${styles.btn} ${styles.btnGhost}`}>
                Voir les 4 métiers
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.blocks} style={style}>
          {pole.blocks.map((b) => (
            <article key={b.heading} className={styles.block}>
              <h2 className={styles.blockHeading}>{b.heading}</h2>
              <p className={styles.blockBody}>{b.body}</p>
              {b.bullets && (
                <ul className={styles.bullets}>
                  {b.bullets.map((x) => (
                    <li key={x}>
                      <span className={styles.bulletDot} />
                      {x}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
