import ContactForm from './ContactForm';
import { company } from '@/lib/site';
import styles from './Contact.module.css';

const I = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function Contact({ titleAs = 'h2' }: { titleAs?: 'h1' | 'h2' }) {
  const Title = titleAs;
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <span className={styles.eyebrow}>Contact</span>
          <Title className={styles.h2}>Parlons de votre projet.</Title>
          <p className={styles.text}>
            Webmarketing, formation, domiciliation ou coworking : dites-nous
            votre besoin, nous revenons vers vous sous 48 heures.
          </p>
          <ul className={styles.coords}>
            <li>
              <span className={styles.coordIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" {...I}>
                  <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>
                {company.address}, {company.postalCode} {company.city}
              </span>
            </li>
            <li>
              <span className={styles.coordIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" {...I}>
                  <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
              </span>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phoneDisplay}</a>
            </li>
            <li>
              <span className={styles.coordIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" {...I}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>

        <div className={styles.card}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
