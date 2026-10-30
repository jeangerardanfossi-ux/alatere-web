'use client';

/**
 * Alatere coWo - page « Bureaux à louer à Antibes » (/alatere-cowo/bureaux-a-louer-antibes).
 * Cible les recherches « location / louer bureau(x) Antibes » (audit Search Console, oct. 2026).
 * Mêmes composants et accent clay que la page coWo.
 */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useLang, useReservations, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import GoogleReviews from '@/components/grommet/GoogleReviews';
import { Icon, ImageSlot } from '@/components/grommet/icons';
import { BUREAUX_FAQ, MARKET } from '@/lib/bureaux-content';

const TITLE = {
  fr: 'Bureaux à louer à Antibes - Alatere coWo',
  en: 'Offices to rent in Antibes - Alatere coWo',
};

const ACCENT = {
  '--accent': '#b86137',
  '--accent-dark': '#9a4d26',
  '--accent-soft': '#f7e7dc',
} as React.CSSProperties;

const TX: Dict = {
  stripe_badge: {
    fr: 'Sans bail ni dépôt de garantie',
    en: 'No lease, no deposit',
  },
  stripe_1: {
    fr: 'À la journée dès 30 € TTC',
    en: 'By the day from €30 incl. VAT',
  },
  stripe_2: {
    fr: 'Au mois 360 € TTC, tout compris',
    en: '€360 incl. VAT per month, all included',
  },
  bc_root: { fr: 'Alatere Web', en: 'Alatere Web' },
  bc_1: { fr: 'Bureaux à louer à Antibes', en: 'Offices to rent in Antibes' },
  hero_tag: {
    fr: 'Centre-ville · port Vauban',
    en: 'Town centre · Port Vauban',
  },
  hero_h: {
    fr: 'Bureaux à louer à Antibes, à la journée ou au mois',
    en: 'Offices to rent in Antibes, by the day or by the month',
  },
  hero_lead: {
    fr: "Louez un poste de travail équipé au 9 boulevard Albert 1er, à deux pas du port Vauban : fibre, climatisation, café et salles de réunion compris. Pas de bail 3-6-9, pas de dépôt de garantie, pas de frais d'agence. Vous réservez en ligne et vous vous installez le jour même.",
    en: 'Rent a fully equipped desk at 9 Boulevard Albert 1er, steps from Port Vauban: fibre, air conditioning, coffee and meeting rooms included. No 3-6-9 lease, no deposit, no agency fees. Book online and move in the same day.',
  },
  hero_cta1: { fr: 'Réserver un poste', en: 'Book a desk' },
  hero_cta2: { fr: 'Planifier une visite', en: 'Schedule a visit' },
  hero_cta3: { fr: 'Voir les tarifs', en: 'See the prices' },
  brief: { fr: 'En bref', en: 'At a glance' },
  brief_1: { fr: 'Pass journée TTC', en: 'Day pass incl. VAT' },
  brief_2: { fr: 'Par mois TTC', en: 'Per month incl. VAT' },
  brief_3: { fr: 'Postes de travail', en: 'Workstations' },
  brief_4: { fr: 'Salles climatisées', en: 'Air-conditioned rooms' },

  off_label: { fr: 'Formules et tarifs', en: 'Plans and prices' },
  off_title: {
    fr: 'Trois façons de louer un bureau chez nous',
    en: 'Three ways to rent an office with us',
  },
  off_p: {
    fr: 'Les prix sont affichés toutes taxes comprises et incluent les charges, internet et le café.',
    en: 'Prices include VAT, utilities, internet and coffee.',
  },
  price_ttc: { fr: 'TTC', en: 'incl. VAT' },
  per_month: { fr: '/ mois', en: '/ month' },
  per_day: { fr: '/ jour', en: '/ day' },
  p1_name: { fr: 'Bureau à la journée', en: 'Office by the day' },
  p1_p: {
    fr: "Un poste en open-space de 9 h à 18 h, du lundi au vendredi. Idéal pour une journée au calme, un rendez-vous à Antibes ou un passage sur la Côte d'Azur.",
    en: 'An open-area desk from 9 am to 6 pm, Monday to Friday. Ideal for a quiet day, a meeting in Antibes or a trip to the Riviera.',
  },
  p1_cta: { fr: 'Réserver en ligne', en: 'Book online' },
  p2_ribbon: { fr: 'Le plus demandé', en: 'Most popular' },
  p2_name: { fr: 'Bureau au mois', en: 'Office by the month' },
  p2_p: {
    fr: "Accès illimité à l'open-space, badge 24 h/24 et 7 j/7, tarifs préférentiels sur les salles de réunion. Soit 300 € HT par mois, sans engagement de durée.",
    en: 'Unlimited open-area access, 24/7 badge and preferential meeting-room rates. That is €300 excl. VAT per month, with no minimum term.',
  },
  p2_cta: { fr: 'Réserver en ligne', en: 'Book online' },
  p3_name: { fr: 'Salle de réunion', en: 'Meeting room' },
  p3_p: {
    fr: 'Pour recevoir un client, animer une formation ou faire passer des entretiens. 80 € TTC après 16 h. Ouverte aux non-abonnés.',
    en: 'To meet a client, run a training session or hold interviews. €80 incl. VAT after 4 pm. Open to non-members.',
  },
  p3_cta: { fr: 'Réserver', en: 'Book' },
  priv_note: {
    fr: 'Bureaux privatifs fermés à l’année : tous occupés pour le moment.',
    en: 'Private closed offices on a yearly basis: all taken at the moment.',
  },
  priv_cta: {
    fr: 'Être prévenu de la prochaine disponibilité',
    en: 'Hear about the next availability',
  },

  inc_label: { fr: 'Ce qui est compris', en: "What's included" },
  inc_title: {
    fr: 'Un bureau prêt à l’emploi, sans frais cachés',
    en: 'A ready-to-use office, with no hidden costs',
  },
  inc1_h: { fr: 'Fibre et Wi-Fi sécurisé', en: 'Fibre and secure Wi-Fi' },
  inc1_p: {
    fr: "Connexion rapide et fiable dans tout l'espace, pour vos visios comme pour vos envois lourds.",
    en: 'Fast, reliable connection throughout the space, for video calls and large uploads alike.',
  },
  inc2_h: { fr: 'Climatisation', en: 'Air conditioning' },
  inc2_p: {
    fr: 'Cinq salles climatisées, confortables en plein été comme en hiver.',
    en: 'Five air-conditioned rooms, comfortable in midsummer as in winter.',
  },
  inc3_h: { fr: 'Café et cuisine équipée', en: 'Coffee and equipped kitchen' },
  inc3_p: {
    fr: 'Café à volonté, réfrigérateur et comptoir pour déjeuner sur place.',
    en: 'Unlimited coffee, fridge and counter to have lunch on site.',
  },
  inc4_h: { fr: 'Charges incluses', en: 'Utilities included' },
  inc4_p: {
    fr: 'Électricité, chauffage, internet : rien à souscrire, rien à refacturer. Le prix affiché est le prix payé.',
    en: 'Electricity, heating, internet: nothing to sign up for, nothing re-billed. The price shown is the price you pay.',
  },

  cmp_label: {
    fr: 'Bail classique ou bureau flexible',
    en: 'Conventional lease or flexible office',
  },
  cmp_title: {
    fr: 'Ce que coûte vraiment un bureau à Antibes',
    en: 'What an office in Antibes really costs',
  },
  cmp_p: {
    fr: `Les bureaux d'Antibes se louent en moyenne ${MARKET.avg} € HT par m² et par an, hors charges, avec des annonces allant de ${MARKET.low} à ${MARKET.high} € (${MARKET.source}). Un bureau de 15 m² au prix moyen revient donc à environ 270 € HT par mois de loyer seul. À cela s'ajoutent les charges, la taxe foncière souvent refacturée, l'électricité, internet, l'assurance et le mobilier.`,
    en: `Offices in Antibes rent for an average of €${MARKET.avg} excl. VAT per m² per year before charges, with listings ranging from €${MARKET.low} to €${MARKET.high} (${MARKET.source}). A 15 m² office at the average price therefore costs about €270 excl. VAT per month in rent alone, before service charges, property tax (often re-billed), electricity, internet, insurance and furniture.`,
  },
  th_crit: { fr: 'Critère', en: 'Criterion' },
  th_bail: {
    fr: 'Bureau en bail classique',
    en: 'Office on a conventional lease',
  },
  th_cowo: { fr: 'Alatere coWo (au mois)', en: 'Alatere coWo (monthly)' },
  r1: { fr: 'Engagement', en: 'Commitment' },
  r1_b: {
    fr: '9 ans (bail commercial, sortie tous les 3 ans) ou 6 ans (bail professionnel)',
    en: '9 years (commercial lease, exit every 3 years) or 6 years (professional lease)',
  },
  r1_c: { fr: 'Aucun, au mois', en: 'None, month to month' },
  r2: { fr: "Coûts d'entrée", en: 'Upfront costs' },
  r2_b: {
    fr: "Dépôt de garantie, frais d'agence, mobilier, ouverture des compteurs",
    en: 'Deposit, agency fees, furniture, utility connections',
  },
  r2_c: { fr: 'Aucun', en: 'None' },
  r3: { fr: 'Charges et internet', en: 'Charges and internet' },
  r3_b: { fr: 'En plus du loyer', en: 'On top of the rent' },
  r3_c: { fr: 'Compris', en: 'Included' },
  r4: { fr: 'Salle de réunion', en: 'Meeting room' },
  r4_b: {
    fr: 'À prévoir dans la surface louée',
    en: 'Must fit in the rented space',
  },
  r4_c: {
    fr: 'Sur réservation, tarif préférentiel',
    en: 'Bookable, preferential rate',
  },
  r5: { fr: 'Espace', en: 'Space' },
  r5_b: { fr: 'Privatif, à vous seul', en: 'Private, yours alone' },
  r5_c: { fr: 'Poste en open-space partagé', en: 'Desk in a shared open area' },
  cmp_after: {
    fr: "Le bail classique reste le bon choix si vous avez besoin d'un local fermé, d'une équipe installée ou d'un aménagement sur mesure. Pour un indépendant ou une petite équipe qui démarre, le bureau flexible évite d'immobiliser plusieurs milliers d'euros et de s'engager sur des années.",
    en: 'A conventional lease remains the right choice if you need a closed space, a settled team or a custom fit-out. For a freelancer or a small team getting started, a flexible office avoids tying up several thousand euros and committing for years.',
  },
  cmp_link: {
    fr: 'Bail commercial, professionnel ou dérogatoire : notre guide complet',
    en: 'Commercial, professional or short-term lease: our guide (in French)',
  },

  who_label: { fr: 'Pour qui ?', en: 'Who is it for?' },
  who_title: {
    fr: 'Le bureau qui suit votre activité',
    en: 'An office that keeps pace with your business',
  },
  who1_h: {
    fr: 'Indépendants et freelances',
    en: 'Freelancers and the self-employed',
  },
  who1_p: {
    fr: 'Un vrai lieu de travail hors de chez vous, sans payer un local toute l’année.',
    en: 'A real workplace away from home, without paying for premises all year.',
  },
  who2_h: {
    fr: 'Télétravailleurs et salariés en déplacement',
    en: 'Remote workers and travelling employees',
  },
  who2_p: {
    fr: 'Un poste calme et une connexion fiable, à 700 m de la gare d’Antibes.',
    en: 'A quiet desk and a reliable connection, 700 m from Antibes station.',
  },
  who3_h: { fr: 'Créateurs d’entreprise', en: 'New business owners' },
  who3_p: {
    fr: 'Commencez au mois, puis ajoutez la domiciliation de votre siège au même endroit.',
    en: 'Start month to month, then add your registered office at the same address.',
  },
  who4_h: {
    fr: 'Équipes de Sophia Antipolis',
    en: 'Teams from Sophia Antipolis',
  },
  who4_p: {
    fr: 'Un point de chute en centre-ville, à une vingtaine de minutes de la technopole.',
    en: 'A base in the town centre, about twenty minutes from the technology park.',
  },

  loc_label: { fr: 'Emplacement', en: 'Location' },
  loc_title: {
    fr: 'Au cœur d’Antibes, accessible sans voiture',
    en: 'In the heart of Antibes, easy to reach without a car',
  },
  loc_p: {
    fr: "L'espace occupe l'immeuble Art nouveau La Caravelle, au 9 boulevard Albert 1er, à 100 m de la place de Gaulle et à deux pas du port Vauban. La gare SNCF est à 700 m, soit une dizaine de minutes à pied, et la gare routière à 200 m. Juan-les-Pins, Vallauris et Biot sont à quelques minutes, Sophia Antipolis à une vingtaine de minutes en voiture.",
    en: 'The space is in the Art Nouveau La Caravelle building, 9 Boulevard Albert 1er, 100 m from Place de Gaulle and steps from Port Vauban. The train station is 700 m away, about a ten-minute walk, and the bus station 200 m. Juan-les-Pins, Vallauris and Biot are a few minutes away, Sophia Antipolis about twenty minutes by car.',
  },
  gal_cap1: { fr: 'Open-space', en: 'Open-space' },
  gal_cap2: { fr: 'Salle de réunion', en: 'Meeting room' },

  faq_label: { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
  faq_title: {
    fr: 'Louer un bureau à Antibes : vos questions',
    en: 'Renting an office in Antibes: your questions',
  },

  cta_title: { fr: 'Venez voir les bureaux', en: 'Come and see the offices' },
  cta_p: {
    fr: 'Visite sur rendez-vous, café offert. Ou réservez directement votre premier jour.',
    en: "Visits by appointment, coffee's on us. Or book your first day straight away.",
  },
  cta_b0: { fr: 'Réserver un poste', en: 'Book a desk' },
  cta_b1: { fr: 'Planifier une visite', en: 'Schedule a visit' },
  cta_b2: { fr: 'Découvrir Alatere coWo', en: 'Discover Alatere coWo' },
};

export default function BureauxAntibesPage() {
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
  const { lang } = useLang();
  const resa = useReservations();
  return (
    <>
      <div className="ap-stripe">
        <div className="ap-stripe__in">
          <span className="ap-stripe__badge">
            <Icon name="badge-check" /> {t('stripe_badge')}
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
              <Link href="/">{t('bc_root')}</Link> <span>›</span>{' '}
              <Link href="/alatere-cowo">Alatere coWo</Link> <span>›</span> <span>{t('bc_1')}</span>
            </div>
            <span className="g-label">
              <span className="g-tag g-tag--clay">{t('hero_tag')}</span>
            </span>
            <h1 className="g-h1 ap-hero__h1" style={{ marginTop: 14 }}>
              {t('hero_h')}
            </h1>
            <p className="g-lead">{t('hero_lead')}</p>
            <div className="ap-hero__cta">
              <a
                href={resa('/reserver')}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn ap-btn g-btn--lg"
              >
                {t('hero_cta1')} <span className="g-arrow">→</span>
              </a>
              <a
                href={resa('/visite')}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn g-btn--secondary g-btn--lg"
              >
                {t('hero_cta2')}
              </a>
              <a href="#tarifs" className="g-btn g-btn--secondary g-btn--lg">
                {t('hero_cta3')}
              </a>
            </div>
          </div>
          <aside className="ap-aside">
            <span className="g-label">{t('brief')}</span>
            <div className="ap-statgrid">
              <div className="ap-stat">
                <strong>30&nbsp;€</strong>
                <span>{t('brief_1')}</span>
              </div>
              <div className="ap-stat">
                <strong>360&nbsp;€</strong>
                <span>{t('brief_2')}</span>
              </div>
              <div className="ap-stat">
                <strong>15</strong>
                <span>{t('brief_3')}</span>
              </div>
              <div className="ap-stat">
                <strong>5</strong>
                <span>{t('brief_4')}</span>
              </div>
            </div>
          </aside>
        </section>

        {/* FORMULES */}
        <section className="ap-section--alt" id="tarifs">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--clay">{t('off_label')}</span>
              </span>
              <h2 className="g-h2">{t('off_title')}</h2>
              <p>{t('off_p')}</p>
            </div>
            <div className="ap-plans ap-plans--3">
              <div className="ap-plan">
                <div className="ap-plan__name">{t('p1_name')}</div>
                <div className="ap-plan__price">
                  30&nbsp;€{' '}
                  <span>
                    {t('price_ttc')} {t('per_day')}
                  </span>
                </div>
                <p>{t('p1_p')}</p>
                <a
                  href={resa('/reserver')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="g-btn g-btn--secondary g-btn--sm"
                >
                  {t('p1_cta')}
                </a>
              </div>
              <div className="ap-plan is-featured">
                <div className="ap-plan__ribbon">{t('p2_ribbon')}</div>
                <div className="ap-plan__name">{t('p2_name')}</div>
                <div className="ap-plan__price">
                  360&nbsp;€{' '}
                  <span>
                    {t('price_ttc')} {t('per_month')}
                  </span>
                </div>
                <p>{t('p2_p')}</p>
                <a
                  href={resa('/reserver')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="g-btn ap-btn g-btn--sm"
                >
                  {t('p2_cta')}
                </a>
              </div>
              <div className="ap-plan">
                <div className="ap-plan__name">{t('p3_name')}</div>
                <div className="ap-plan__price">
                  180&nbsp;€{' '}
                  <span>
                    {t('price_ttc')} {t('per_day')}
                  </span>
                </div>
                <p>{t('p3_p')}</p>
                <a
                  href={resa('/reserver')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="g-btn g-btn--secondary g-btn--sm"
                >
                  {t('p3_cta')}
                </a>
              </div>
            </div>
            <p className="ap-hero__note" style={{ marginTop: 18 }}>
              {t('priv_note')} <Link href="/contact?pole=cowo">{t('priv_cta')} →</Link>
            </p>
          </div>
        </section>

        {/* CE QUI EST COMPRIS */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">{t('inc_label')}</span>
            </span>
            <h2 className="g-h2">{t('inc_title')}</h2>
          </div>
          <div className="ap-grid">
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="wifi" />
              </div>
              <h3>{t('inc1_h')}</h3>
              <p>{t('inc1_p')}</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="snowflake" />
              </div>
              <h3>{t('inc2_h')}</h3>
              <p>{t('inc2_p')}</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="coffee" />
              </div>
              <h3>{t('inc3_h')}</h3>
              <p>{t('inc3_p')}</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="wallet" />
              </div>
              <h3>{t('inc4_h')}</h3>
              <p>{t('inc4_p')}</p>
            </div>
          </div>
        </section>

        {/* COMPARATIF */}
        <section className="ap-section--alt">
          <div className="ap-inner">
            <div className="ap-head" style={{ maxWidth: 860 }}>
              <span className="g-label">
                <span className="g-tag g-tag--clay">{t('cmp_label')}</span>
              </span>
              <h2 className="g-h2">{t('cmp_title')}</h2>
              <p>{t('cmp_p')}</p>
            </div>
            <div className="ap-tablewrap">
              <table className="ap-table">
                <thead>
                  <tr>
                    <th>{t('th_crit')}</th>
                    <th>{t('th_bail')}</th>
                    <th>{t('th_cowo')}</th>
                  </tr>
                </thead>
                <tbody>
                  {(['r1', 'r2', 'r3', 'r4', 'r5'] as const).map((r) => (
                    <tr key={r}>
                      <td>{t(r)}</td>
                      <td>{t(`${r}_b`)}</td>
                      <td>{t(`${r}_c`)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ap-prose" style={{ marginTop: 18 }}>
              {t('cmp_after')}
            </p>
            {/* Article publié en français uniquement : lien affiché sur la version FR. */}
            {lang === 'fr' && (
              <p className="ap-prose" style={{ marginTop: 10 }}>
                <Link className="g-inline" href="/blog/louer-bureau-antibes-bail">
                  {t('cmp_link')}
                </Link>
              </p>
            )}
          </div>
        </section>

        {/* POUR QUI */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">{t('who_label')}</span>
            </span>
            <h2 className="g-h2">{t('who_title')}</h2>
          </div>
          <div className="ap-grid">
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="user-round-check" />
              </div>
              <h3>{t('who1_h')}</h3>
              <p>{t('who1_p')}</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="navigation" />
              </div>
              <h3>{t('who2_h')}</h3>
              <p>{t('who2_p')}</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="zap" />
              </div>
              <h3>{t('who3_h')}</h3>
              <p>
                {t('who3_p')}{' '}
                <Link className="g-inline" href="/alatere-domo">
                  Alatere doMo
                </Link>
              </p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic">
                <Icon name="building-2" />
              </div>
              <h3>{t('who4_h')}</h3>
              <p>{t('who4_p')}</p>
            </div>
          </div>
        </section>

        {/* EMPLACEMENT */}
        <section className="ap-section--alt">
          <div className="ap-inner">
            <div className="ap-head" style={{ maxWidth: 860 }}>
              <span className="g-label">
                <span className="g-tag g-tag--clay">{t('loc_label')}</span>
              </span>
              <h2 className="g-h2">{t('loc_title')}</h2>
              <p>{t('loc_p')}</p>
            </div>
            <div className="ap-loc">
              <iframe
                className="ap-loc__map"
                src="https://www.google.com/maps?q=9%20Boulevard%20Albert%201er%2C%2006600%20Antibes&z=16&output=embed"
                loading="lazy"
                title="Plan - 9 Boulevard Albert 1er, 06600 Antibes"
                style={{ width: '100%', border: 0, display: 'block' }}
              />
              <div className="ap-gallery ap-gallery--2">
                <ImageSlot cap={t('gal_cap1')} src="/photos/cowo.webp" />
                <ImageSlot cap={t('gal_cap2')} src="/photos/cowo-salle.jpg" />
              </div>
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
            {BUREAUX_FAQ.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>{f.q[lang]}</summary>
                <div className="ap-ans">{f.a[lang]}</div>
              </details>
            ))}
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
            <a
              href={resa('/reserver')}
              target="_blank"
              rel="noopener noreferrer"
              className="g-btn g-btn--light g-btn--lg"
            >
              {t('cta_b0')} <span className="g-arrow">→</span>
            </a>
            <a
              href={resa('/visite')}
              target="_blank"
              rel="noopener noreferrer"
              className="g-btn g-btn--ghost-light g-btn--lg"
            >
              {t('cta_b1')}
            </a>
            <Link href="/alatere-cowo" className="g-btn g-btn--ghost-light g-btn--lg">
              {t('cta_b2')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
