import Link from 'next/link';
import Logo from './Logo';
import { company } from '@/lib/site';
import styles from './SiteFooter.module.css';

const activites = [
  { label: 'Alatere ecoM — e-commerce', href: '/alatere-ecom' },
  { label: 'Alatere forMa — formation', href: '/alatere-forma' },
  { label: 'Alatere doMo — domiciliation', href: '/alatere-domo' },
  { label: 'Alatere coWo — coworking', href: '/alatere-cowo' },
];

const liens = [
  { label: 'Catalogue formations', href: '/alatere-forma', external: false },
  { label: 'repro-tableaux.com', href: 'https://repro-tableaux.com', external: true },
  { label: 'copia-di-arte.com', href: 'https://copia-di-arte.com', external: true },
  { label: 'Nous contacter', href: '/contact', external: false },
];

const legal = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/confidentialite' },
  { label: 'Certification Qualiopi', href: '/alatere-forma' },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Logo size={46} variant="dark" />
          <div className={styles.brandLines}>
            <strong style={{ color: 'rgba(255,255,255,0.92)' }}>{company.legalName}</strong>
            <br />
            {company.address}
            <br />
            {company.postalCode} {company.city} — {company.country}
            <br />
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phoneDisplay}</a>
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>

        <div>
          <p className={styles.colTitle}>Activités</p>
          <ul className={styles.list}>
            {activites.map((a) => (
              <li key={a.href}>
                <Link href={a.href}>{a.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Liens utiles</p>
          <ul className={styles.list}>
            {liens.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href}>{l.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Informations légales</p>
          <ul className={styles.list}>
            {legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© 2026 {company.legalName} — Tous droits réservés</span>
          <span>
            SIRET {company.siret} · {company.rcs} · Qualiopi n° {company.qualiopiCert}
          </span>
        </div>
      </div>
    </footer>
  );
}
