'use client';

/** Alatere coWo — page « espace de coworking » (handoff Grommet, accent clay/terracotta). */

import Link from 'next/link';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import GoogleReviews from '@/components/grommet/GoogleReviews';
import { Icon, ImageSlot } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';

const TITLE = {
  fr: 'Alatere coWo — Espace de coworking à Antibes',
  en: 'Alatere coWo — Coworking space in Antibes',
};

const ACCENT = {
  '--accent': '#b86137',
  '--accent-dark': '#9a4d26',
  '--accent-soft': '#f7e7dc',
} as React.CSSProperties;

const TX: Dict = {
  stripe_badge: { fr: "Communauté d'entrepreneurs", en: 'Community of entrepreneurs' },
  stripe_1: {
    fr: '5 salles de travail · 15 postes de travail',
    en: '5 work rooms · 15 workstations',
  },
  stripe_2: {
    fr: 'Fibre haut-débit · salles climatisées',
    en: 'High-speed fiber · air-conditioned rooms',
  },
  bc_root: { fr: 'Alatere Web', en: 'Alatere Web' },
  bc_1: { fr: "Centre d'affaires", en: 'Business center' },
  hero_tag: { fr: 'Espace de coworking à Antibes', en: 'Coworking space in Antibes' },
  hero_lead: {
    fr: "Un lieu de travail inspirant au cœur d'Antibes, à deux pas du port Vauban. Postes nomades, bureaux fermés et salles de réunion — café, fibre et événements business mensuels, au sein d'une communauté d'entrepreneurs.",
    en: 'An inspiring workplace in the heart of Antibes, steps from Port Vauban. Hot desks, private offices and meeting rooms — coffee, fiber and monthly business events, within a community of entrepreneurs.',
  },
  hero_cta1: { fr: 'Réserver une visite', en: 'Book a visit' },
  hero_cta2: { fr: 'Voir les offres', en: 'View the offers' },
  brief: { fr: "L'espace en bref", en: 'The space at a glance' },
  brief_1: { fr: 'Salles de travail', en: 'Work rooms' },
  brief_2: { fr: 'Postes de travail', en: 'Workstations' },
  brief_3: { fr: 'Internet haut-débit', en: 'High-speed internet' },
  brief_4: { fr: 'Salles climatisées', en: 'Air-conditioned rooms' },
  brief_3_v: { fr: 'Fibre', en: 'Fiber' },
  brief_4_v: { fr: 'Climatisation', en: 'Air conditioning' },
  gal_label: { fr: 'Découvrir les lieux', en: 'Discover the space' },
  gal_title: { fr: 'Un cadre de travail soigné', en: 'A carefully designed workspace' },
  gal_p: {
    fr: "Un cadre de travail lumineux au cœur d'Antibes : open-space, bureaux privatifs et salle de réunion, dans l'immeuble La Caravelle au 9 Boulevard Albert 1er.",
    en: 'A bright workspace in the heart of Antibes: open area, private offices and meeting room, in the La Caravelle building at 9 Boulevard Albert 1er.',
  },
  gal_cap1: { fr: 'Open-space', en: 'Open-space' },
  gal_cap2: { fr: 'Bureau privatif', en: 'Private office' },
  gal_cap3: { fr: 'Salle de réunion', en: 'Meeting room' },
  gal_cap4: { fr: "Notre immeuble à Antibes", en: 'Our building in Antibes' },
  off_label: { fr: 'Nos offres', en: 'Our offers' },
  off_title: { fr: 'Des formules pour chaque besoin', en: 'Plans for every need' },
  off_p: {
    fr: "Du passage ponctuel à l'installation longue durée. Tarifs communiqués sur demande, selon vos besoins.",
    en: 'From occasional visits to long-term setup. Pricing provided on request, based on your needs.',
  },
  plan1_name: { fr: 'Pass journée', en: 'Day pass' },
  plan1_p: {
    fr: 'Un poste en open-space pour la journée, café inclus.',
    en: 'An open-area desk for the day, coffee included.',
  },
  plan1_cta: { fr: 'Nous consulter', en: 'Contact us' },
  plan2_ribbon: { fr: 'Le plus flexible', en: 'Most flexible' },
  plan2_name: { fr: 'Abonnement mensuel', en: 'Monthly membership' },
  plan2_p: {
    fr: "Accès illimité à l'open-space et tarifs préférentiels sur les salles.",
    en: 'Unlimited open-area access and preferential rates on meeting rooms.',
  },
  plan2_cta: { fr: 'Nous consulter', en: 'Contact us' },
  plan3_name: { fr: 'Bureau privatif', en: 'Private office' },
  plan3_p: {
    fr: "Un bureau fermé pour une à plusieurs personnes, à l'année.",
    en: 'A closed office for one or more people, on a yearly basis.',
  },
  plan3_cta: { fr: 'Nous consulter', en: 'Contact us' },
  plan4_name: { fr: 'Salle de réunion', en: 'Meeting room' },
  plan4_p: {
    fr: "Cinq salles climatisées à louer à l'heure ou à la demi-journée.",
    en: 'Five air-conditioned rooms to rent by the hour or half-day.',
  },
  plan4_cta: { fr: 'Réserver', en: 'Book' },
  eq_label: { fr: 'Équipements & services', en: 'Amenities & services' },
  eq_title: {
    fr: 'Tout est pensé pour bien travailler',
    en: 'Everything designed for great work',
  },
  eq1_h: { fr: 'Fibre haut-débit', en: 'High-speed fiber' },
  eq1_p: {
    fr: "Connexion rapide et fiable, Wi-Fi sécurisé dans tout l'espace.",
    en: 'Fast, reliable connection with secure Wi-Fi throughout the space.',
  },
  eq2_h: { fr: 'Salles climatisées', en: 'Air-conditioned rooms' },
  eq2_p: {
    fr: 'Cinq salles de réunion confortables, été comme hiver.',
    en: 'Five comfortable meeting rooms, all year round.',
  },
  eq3_h: { fr: 'Café & convivialité', en: 'Coffee & community' },
  eq3_p: {
    fr: 'Espace détente, café à volonté et coin pause partagé.',
    en: 'Lounge area, unlimited coffee and a shared break corner.',
  },
  eq4_h: { fr: 'Événements mensuels', en: 'Monthly events' },
  eq4_p: {
    fr: "Rencontres business et moments d'échange entre membres.",
    en: 'Business meetups and networking moments between members.',
  },
  com_label: { fr: 'La communauté', en: 'The community' },
  com_title: { fr: "Bien plus qu'un bureau", en: 'Much more than an office' },
  com_p: {
    fr: "Travailler chez Alatere coWo, c'est rejoindre un réseau d'entrepreneurs et de freelances locaux. Échanges, entraide et opportunités au quotidien, au cœur d'Antibes.",
    en: 'Working at Alatere coWo means joining a network of local entrepreneurs and freelancers. Exchange, support and opportunities every day, in the heart of Antibes.',
  },
  com_chip1: { fr: 'Entrepreneurs & freelances', en: 'Entrepreneurs & freelancers' },
  com_chip2: { fr: 'Événements business', en: 'Business events' },
  com_chip3: { fr: 'Mise en relation', en: 'Networking' },
  com_chip4: { fr: 'Écosystème Alatere', en: 'Alatere ecosystem' },
  faq_label: { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
  faq_title: {
    fr: 'Coworking à Antibes — pratique',
    en: 'Coworking in Antibes — practical info',
  },
  faq1_q: {
    fr: "Où se situe l'espace de coworking ?",
    en: 'Where is the coworking space located?',
  },
  faq1_a: {
    fr: 'Au 9 Boulevard Albert 1er, 06600 Antibes, à deux pas du port Vauban et à environ cinq minutes à pied de la gare SNCF.',
    en: 'At 9 Boulevard Albert 1er, 06600 Antibes, steps from Port Vauban and about a five-minute walk from the train station.',
  },
  faq2_q: { fr: 'Quelles formules proposez-vous ?', en: 'What plans do you offer?' },
  faq2_a: {
    fr: "Pass à la journée, abonnement mensuel en open-space, bureau privatif à l'année et location de salles de réunion. Les tarifs sont communiqués sur demande, selon votre besoin.",
    en: 'Day passes, monthly open-area membership, yearly private offices and meeting-room rentals. Pricing is provided on request, based on your needs.',
  },
  faq3_q: {
    fr: 'Puis-je réserver une salle de réunion sans être abonné ?',
    en: 'Can I book a meeting room without a membership?',
  },
  faq3_a: {
    fr: "Oui, nos cinq salles climatisées se louent à l'heure ou à la demi-journée, que vous soyez membre ou non.",
    en: 'Yes, our five air-conditioned rooms can be rented by the hour or half-day, member or not.',
  },
  faq4_q: {
    fr: 'Puis-je aussi y domicilier mon entreprise ?',
    en: "Can I also register my company's address here?",
  },
  faq4_a: {
    fr: 'Oui, via notre offre Alatere doMo. Les membres du coworking bénéficient de conditions avantageuses sur la domiciliation.',
    en: 'Yes, through our Alatere doMo service. Coworking members enjoy preferential terms on business address services.',
  },
  loc_label: { fr: 'Nous situer', en: 'Find us' },
  loc_title: { fr: "Au cœur d'Antibes", en: 'In the heart of Antibes' },
  loc_card_label: { fr: "Alatere coWo · centre d'affaires", en: 'Alatere coWo · business center' },
  loc_map_cap: {
    fr: 'Plan / carte — 9 Bd Albert 1er, Antibes',
    en: 'Plan / carte — 9 Bd Albert 1er, Antibes',
  },
  loc_addr_l: { fr: 'Adresse', en: 'Address' },
  loc_phone_l: { fr: 'Téléphone', en: 'Phone' },
  loc_mail_l: { fr: 'E-mail', en: 'E-mail' },
  loc_acc_l: { fr: 'Accès', en: 'Access' },
  loc_acc_v: {
    fr: 'Port Vauban & gare SNCF à 5 min à pied',
    en: 'Port Vauban & train station 5 min walk',
  },
  loc_cta: { fr: 'Planifier une visite', en: 'Schedule a visit' },
  loc_maps: { fr: 'Voir sur Google Maps', en: 'View on Google Maps' },
  cta_title: { fr: 'Envie de venir travailler ici ?', en: 'Want to come work here?' },
  cta_p: {
    fr: "Venez visiter l'espace et rencontrer la communauté. Café offert.",
    en: "Come visit the space and meet the community. Coffee's on us.",
  },
  cta_b1: { fr: 'Nous contacter', en: 'Contact us' },
  cta_b2: { fr: 'Voir la domiciliation', en: 'See business address service' },
};

export default function CowoPage() {
  return (
    <div className="g-home" style={ACCENT}>
      <LangProvider titles={TITLE}>
        <Header active="cowo" />
        <Body />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Body() {
  const t = useT(TX);
  return (
    <>
      <div className="ap-stripe">
        <div className="ap-stripe__in">
          <span className="ap-stripe__badge">
            <Icon name="users-round" /> {t('stripe_badge')}
          </span>
          <span>{t('stripe_1')}</span>
          <span className="ap-stripe__sep">·</span>
          <span>{t('stripe_2')}</span>
        </div>
      </div>

      <main id="top">
        {/* HERO */}
        <section className="ap-hero">
          <div>
            <div className="ap-breadcrumb">
              <Link href="/">{t('bc_root')}</Link> <span>›</span> <span>{t('bc_1')}</span>{' '}
              <span>›</span> <span>Alatere coWo</span>
            </div>
            <span className="g-label">
              <span className="g-tag g-tag--clay">{t('hero_tag')}</span>
            </span>
            <h1 className="g-h1 ap-hero__h1 g-titlelogo" style={{ marginTop: 14 }}>
              Alatere{' '}
              <span className="g-subword">
                <span className="lg-gold">c</span>
                <span className="lg-green">o</span>
                <span className="lg-navy">W</span>
                <span className="lg-clay">o</span>
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/domo-cowo-badge.png"
                alt="Alatere doMo · coWo"
                className="g-titlebadge"
              />
            </h1>
            <p className="g-lead">{t('hero_lead')}</p>
            <div className="ap-hero__cta">
              <a href="#contact" className="g-btn ap-btn g-btn--lg">
                {t('hero_cta1')} <span className="g-arrow">→</span>
              </a>
              <a href="#offres" className="g-btn g-btn--secondary g-btn--lg">
                {t('hero_cta2')}
              </a>
            </div>
          </div>
          <aside className="ap-aside">
            <span className="g-label">{t('brief')}</span>
            <div className="ap-statgrid">
              <div className="ap-stat">
                <strong>5</strong>
                <span>{t('brief_1')}</span>
              </div>
              <div className="ap-stat">
                <strong>15</strong>
                <span>{t('brief_2')}</span>
              </div>
              <div className="ap-stat">
                <strong>{t('brief_3_v')}</strong>
                <span>{t('brief_3')}</span>
              </div>
              <div className="ap-stat">
                <strong>{t('brief_4_v')}</strong>
                <span>{t('brief_4')}</span>
              </div>
            </div>
          </aside>
        </section>

        {/* GALERIE */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">{t('gal_label')}</span>
            </span>
            <h2 className="g-h2">{t('gal_title')}</h2>
            <p>{t('gal_p')}</p>
          </div>
          <div className="ap-gallery">
            <ImageSlot cap={t('gal_cap1')} src="/photos/cowo.webp" />
            <ImageSlot cap={t('gal_cap2')} src="/photos/cowo-bureau.jpg" objectPosition="50% 5%" />
            <ImageSlot cap={t('gal_cap3')} src="/photos/cowo-salle.jpg" />
            <ImageSlot cap={t('gal_cap4')} src="/photos/cowo-immeuble.jpg" objectPosition="50% 0%" />
          </div>
        </section>

        {/* OFFRES */}
        <section className="ap-section--alt" id="offres">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--clay">{t('off_label')}</span>
              </span>
              <h2 className="g-h2">{t('off_title')}</h2>
              <p>{t('off_p')}</p>
            </div>
            <div className="ap-plans">
              <div className="ap-plan">
                <div className="ap-plan__name">{t('plan1_name')}</div>
                <p>{t('plan1_p')}</p>
                <a href="#contact" className="g-btn g-btn--secondary g-btn--sm">
                  {t('plan1_cta')}
                </a>
              </div>
              <div className="ap-plan is-featured">
                <div className="ap-plan__ribbon">{t('plan2_ribbon')}</div>
                <div className="ap-plan__name">{t('plan2_name')}</div>
                <p>{t('plan2_p')}</p>
                <a href="#contact" className="g-btn ap-btn g-btn--sm">
                  {t('plan2_cta')}
                </a>
              </div>
              <div className="ap-plan">
                <div className="ap-plan__name">{t('plan3_name')}</div>
                <p>{t('plan3_p')}</p>
                <a href="#contact" className="g-btn g-btn--secondary g-btn--sm">
                  {t('plan3_cta')}
                </a>
              </div>
              <div className="ap-plan">
                <div className="ap-plan__name">{t('plan4_name')}</div>
                <p>{t('plan4_p')}</p>
                <a href="#contact" className="g-btn g-btn--secondary g-btn--sm">
                  {t('plan4_cta')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ÉQUIPEMENTS */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">{t('eq_label')}</span>
            </span>
            <h2 className="g-h2">{t('eq_title')}</h2>
          </div>
          <div className="ap-grid">
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="wifi" />
              </div>
              <h3>{t('eq1_h')}</h3>
              <p>{t('eq1_p')}</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="snowflake" />
              </div>
              <h3>{t('eq2_h')}</h3>
              <p>{t('eq2_p')}</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="coffee" />
              </div>
              <h3>{t('eq3_h')}</h3>
              <p>{t('eq3_p')}</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="calendar-days" />
              </div>
              <h3>{t('eq4_h')}</h3>
              <p>{t('eq4_p')}</p>
            </div>
          </div>
        </section>

        {/* COMMUNAUTÉ */}
        <section className="ap-section--alt">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--clay">{t('com_label')}</span>
              </span>
              <h2 className="g-h2">{t('com_title')}</h2>
              <p>{t('com_p')}</p>
            </div>
            <div className="ap-chips">
              <span className="ap-chip">{t('com_chip1')}</span>
              <span className="ap-chip">{t('com_chip2')}</span>
              <span className="ap-chip">{t('com_chip3')}</span>
              <span className="ap-chip">{t('com_chip4')}</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">{t('faq_label')}</span>
            </span>
            <h2 className="g-h2">{t('faq_title')}</h2>
          </div>
          <div className="ap-faq">
            <details open>
              <summary>{t('faq1_q')}</summary>
              <div className="ap-ans">{t('faq1_a')}</div>
            </details>
            <details>
              <summary>{t('faq2_q')}</summary>
              <div className="ap-ans">{t('faq2_a')}</div>
            </details>
            <details>
              <summary>{t('faq3_q')}</summary>
              <div className="ap-ans">{t('faq3_a')}</div>
            </details>
            <details>
              <summary>{t('faq4_q')}</summary>
              <div className="ap-ans">{t('faq4_a')}</div>
            </details>
          </div>
        </section>

        {/* LOCALISATION */}
        <section className="ap-section--alt">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--clay">{t('loc_label')}</span>
              </span>
              <h2 className="g-h2">{t('loc_title')}</h2>
            </div>
            <div className="ap-loc">
              <iframe
                className="ap-loc__map"
                src="https://www.google.com/maps?q=9%20Boulevard%20Albert%201er%2C%2006600%20Antibes&z=16&output=embed"
                loading="lazy"
                title="Plan — 9 Boulevard Albert 1er, 06600 Antibes"
                style={{ width: '100%', border: 0, display: 'block' }}
              />
              <div className="ap-loc__card">
                <span className="g-label" style={{ color: 'var(--accent-dark)' }}>
                  {t('loc_card_label')}
                </span>
                <div className="ap-rows" style={{ marginTop: 14 }}>
                  <div>
                    <Icon name="map-pin" />
                    <span>
                      <strong>{t('loc_addr_l')}</strong>9 Boulevard Albert 1er, 06600 Antibes
                    </span>
                  </div>
                  <div>
                    <Icon name="phone" />
                    <span>
                      <strong>{t('loc_phone_l')}</strong>07 61 56 45 56
                    </span>
                  </div>
                  <div>
                    <Icon name="mail" />
                    <span>
                      <strong>{t('loc_mail_l')}</strong><Email user="coworking" />
                    </span>
                  </div>
                  <div>
                    <Icon name="navigation" />
                    <span>
                      <strong>{t('loc_acc_l')}</strong>
                      {t('loc_acc_v')}
                    </span>
                  </div>
                </div>
                <a href="#contact" className="g-btn ap-btn g-btn--sm" style={{ marginTop: 18 }}>
                  {t('loc_cta')} <span className="g-arrow">→</span>
                </a>
                <div style={{ marginTop: 12 }}>
                  <a
                    href="https://maps.app.goo.gl/y9AHJHxXD7y9U5sx8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="g-anchor"
                    style={{ color: 'var(--clay-dark)', fontSize: 14 }}
                  >
                    <Icon name="map-pin" /> {t('loc_maps')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GoogleReviews pole="cowo" />

      {/* CTA */}
      <section className="ap-cta" id="contact">
        <div className="ap-cta__in">
          <div>
            <h2>{t('cta_title')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <div className="ap-cta__btns">
            <Link href="/contact?pole=cowo" className="g-btn g-btn--light g-btn--lg">
              {t('cta_b1')} <span className="g-arrow">→</span>
            </Link>
            <Link href="/#domo" className="g-btn g-btn--ghost-light g-btn--lg">
              {t('cta_b2')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
