'use client';

/** Alatere ecoM - page « savoir-faire e-commerce » (handoff Grommet, accent navy). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import GoogleReviews from '@/components/grommet/GoogleReviews';
import { Icon, ImageSlot } from '@/components/grommet/icons';

const REPRO = 'https://repro-tableaux.com';

const TITLE = {
  fr: "Alatere ecoM - E-commerce d'art opéré en propre depuis 2003",
  en: 'Alatere ecoM - Art e-commerce run in-house since 2003',
};

const ACCENT = {
  '--accent': '#163a6e',
  '--accent-dark': '#0f2a52',
  '--accent-soft': '#e7eef8',
} as React.CSSProperties;

const TX: Dict = {
  stripe_badge: { fr: 'Showcase savoir-faire', en: 'Expertise showcase' },
  stripe_1: {
    fr: 'Boutiques opérées en propre depuis 2003',
    en: 'Stores run in-house since 2003',
  },
  stripe_2: {
    fr: 'SEO · SEA · acquisition · opérations',
    en: 'SEO · SEA · acquisition · operations',
  },
  bc_root: { fr: 'Alatere Web', en: 'Alatere Web' },
  bc_1: { fr: 'Savoir-faire', en: 'Expertise' },
  hero_tag: {
    fr: 'E-commerce · sites marchands opérés en propre',
    en: 'E-commerce · online stores run in-house',
  },
  hero_lead: {
    fr: "Depuis plus de vingt ans, nous concevons, opérons et référençons nos propres boutiques d'art en ligne. Ce n'est pas une promesse : c'est notre meilleure démonstration de savoir-faire en SEO, SEA, acquisition et opérations e-commerce.",
    en: "For over twenty years, we have designed, run and ranked our own online art stores. It's not a promise - it's our best proof of expertise in SEO, SEA, acquisition and e-commerce operations.",
  },
  hero_cta1: { fr: 'Visiter repro-tableaux.com', en: 'Visit repro-tableaux.com' },
  hero_cta2: { fr: "Discuter d'un projet", en: 'Discuss a project' },
  lab: { fr: 'Notre laboratoire', en: 'Our lab' },
  lab_1: { fr: 'Première boutique', en: 'First store' },
  lab_2: { fr: "D'opération continue", en: 'Of continuous operation' },
  lab_2_n: { fr: '23 ans', en: '23 years' },
  lab_3: { fr: 'Boutiques en ligne', en: 'Online stores' },
  lab_4: { fr: 'Marchés européens', en: 'European markets' },
  lab_4_n: { fr: '5 langues', en: '5 languages' },
  shops_label: { fr: 'Nos boutiques', en: 'Our stores' },
  shops_title: {
    fr: "Deux décennies à vendre l'art en ligne",
    en: 'Two decades selling art online',
  },
  shops_p: {
    fr: "Déposez des captures de chaque boutique. Ce sont nos terrains d'apprentissage, dont les enseignements bénéficient directement à nos clients.",
    en: 'Add screenshots of each store. They are our learning grounds, whose lessons directly benefit our clients.',
  },
  shop1_cap: { fr: 'Capture repro-tableaux.com', en: 'repro-tableaux.com screenshot' },
  shop1_h: {
    fr: 'Reproductions de tableaux sur toile',
    en: 'Canvas reproductions of paintings',
  },
  shop1_p: {
    fr: 'Notre première boutique, lancée en 2003. Marché français, pivot de notre apprentissage SEO et acquisition.',
    en: 'Our first store, launched in 2003. French market, the pivot of our SEO and acquisition learning.',
  },
  shop2_cap: { fr: 'Capture copia-di-arte.com', en: 'copia-di-arte.com screenshot' },
  shop2_h: { fr: 'Déclinaison européenne multilingue', en: 'Multilingual European version' },
  shop2_p: {
    fr: "Ouverture à l'Italie, l'Espagne et le Royaume-Uni. Apprentissage du multilingue, du SEO international et de la logistique UE.",
    en: 'Expansion to Italy, Spain and the UK. Learning multilingual SEO, international SEO and EU logistics.',
  },
  skills_label: { fr: 'Notre savoir-faire', en: 'Our expertise' },
  skills_title: {
    fr: 'Ce que nous maîtrisons, prouvé sur nos propres sites',
    en: 'What we master, proven on our own sites',
  },
  skills_p: {
    fr: "Chaque compétence mobilisée sur nos boutiques nourrit nos prestations d'agence et nos formations Alatere forMa.",
    en: 'Every skill used on our stores feeds our agency services and our Alatere forMa training.',
  },
  sk1_h: { fr: 'SEO & contenu', en: 'SEO & content' },
  sk1_p: {
    fr: 'Référencement naturel sur des mots-clés concurrentiels, contenu et structure.',
    en: 'Organic ranking on competitive keywords, content and structure.',
  },
  sk2_h: { fr: 'SEA & acquisition', en: 'SEA & acquisition' },
  sk2_p: {
    fr: 'Campagnes Google, Microsoft et Meta, pilotage de la performance.',
    en: 'Google, Microsoft and Meta campaigns, performance management.',
  },
  sk3_h: { fr: 'International', en: 'International' },
  sk3_p: {
    fr: 'Sites multilingues, hreflang, ciblage géographique et fiscalité UE.',
    en: 'Multilingual sites, hreflang, geo-targeting and EU taxation.',
  },
  sk4_h: { fr: 'AEO & IA', en: 'AEO & AI' },
  sk4_p: {
    fr: "Optimisation pour les moteurs génératifs et intégration de l'IA aux opérations.",
    en: 'Optimization for generative engines and AI integration into operations.',
  },
  tl_label: { fr: 'Notre parcours', en: 'Our journey' },
  tl_title: {
    fr: "Vingt ans d'apprentissage continu",
    en: 'Twenty years of continuous learning',
  },
  tl_2003: {
    fr: 'Lancement de repro-tableaux.com. Première boutique marchande et premières campagnes d’acquisition en France.',
    en: 'Launch of repro-tableaux.com. First online store and first acquisition campaigns in France.',
  },
  tl_2008: {
    fr: 'Ouverture à l’Europe avec copia-di-arte.com. Apprentissage du multilingue et de la fiscalité communautaire.',
    en: 'Expansion to Europe with copia-di-arte.com. Learning multilingual operations and EU taxation.',
  },
  tl_2015: {
    fr: 'Montée en puissance SEO. Première page sur des mots-clés très concurrentiels.',
    en: 'SEO ramp-up. First page on highly competitive keywords.',
  },
  tl_2020: {
    fr: 'Diversification de l’acquisition. Réseaux sociaux, marketplaces et nouveaux canaux.',
    en: 'Acquisition diversification. Social media, marketplaces and new channels.',
  },
  tl_now_y: { fr: "Aujourd'hui", en: 'Today' },
  tl_now: {
    fr: 'Intégration de l’IA. Fiches enrichies, traduction assistée et optimisation pour les moteurs génératifs.',
    en: 'AI integration. Enriched product pages, assisted translation and optimization for generative engines.',
  },
  cta_title: {
    fr: "Un projet e-commerce ou d'acquisition ?",
    en: 'An e-commerce or acquisition project?',
  },
  cta_p: {
    fr: "Profitez de vingt ans d'expérience opérationnelle. Un appel suffit pour cadrer votre besoin.",
    en: 'Tap into twenty years of operational experience. One call is enough to scope your need.',
  },
  cta_b1: { fr: 'Nous contacter', en: 'Contact us' },
  cta_b2: { fr: 'Voir nos formations', en: 'See our training' },
  maps_label: { fr: 'Voir sur Google Maps', en: 'View on Google Maps' },

  faq_label: { fr: 'FAQ', en: 'FAQ' },
  faq_title: { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
  faq1_q: { fr: 'Que fait Alatere ecoM ?', en: 'What does Alatere ecoM do?' },
  faq1_a: {
    fr: "Alatere ecoM conçoit, opère et référence des sites e-commerce. Depuis 2003, nous gérons nos propres boutiques d'art en ligne (repro-tableaux.com, copia-di-arte.com) - un savoir-faire SEO, SEA et opérations que nous mettons au service de nos clients.",
    en: "Alatere ecoM designs, runs and ranks e-commerce sites. Since 2003 we have run our own online art stores (repro-tableaux.com, copia-di-arte.com) - SEO, SEA and operations expertise we put at our clients' service.",
  },
  faq2_q: {
    fr: 'Proposez-vous du référencement SEO et de la publicité SEA ?',
    en: 'Do you offer SEO and SEA advertising?',
  },
  faq2_a: {
    fr: 'Oui. Le référencement naturel (SEO), la publicité en ligne (SEA Google, Microsoft, Meta) et l’acquisition sont au cœur de notre métier - éprouvés sur nos propres sites depuis vingt ans.',
    en: 'Yes. Organic ranking (SEO), online advertising (SEA on Google, Microsoft, Meta) and acquisition are at the core of our business - proven on our own sites for twenty years.',
  },
  faq3_q: { fr: "Travaillez-vous pour l'international ?", en: 'Do you work internationally?' },
  faq3_a: {
    fr: 'Oui. Nous opérons des sites multilingues (hreflang, ciblage géographique, fiscalité UE), notamment via copia-di-arte.com pour les marchés européens.',
    en: 'Yes. We run multilingual sites (hreflang, geo-targeting, EU taxation), notably via copia-di-arte.com for European markets.',
  },
  faq4_q: {
    fr: 'Comment démarrer un projet e-commerce avec vous ?',
    en: 'How do I start an e-commerce project with you?',
  },
  faq4_a: {
    fr: 'Contactez-nous via le formulaire ou au 07 61 56 45 56. Nous échangeons sur votre besoin et revenons vers vous sous 48 heures avec une première proposition.',
    en: 'Contact us via the form or at +33 7 61 56 45 56. We discuss your need and get back to you within 48 hours with a first proposal.',
  },
};

export default function EcomPage() {
  return (
    <div className="g-home" style={ACCENT}>
      <LangProvider titles={TITLE}>
        <Header active="ecom" />
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
              <Link href="/">{t('bc_root')}</Link> <span>›</span> <span>{t('bc_1')}</span>{' '}
              <span>›</span> <span>Alatere ecoM</span>
            </div>
            <span className="g-label">
              <span className="g-tag g-tag--brand">{t('hero_tag')}</span>
            </span>
            <h1 className="g-h1" style={{ marginTop: 14 }}>
              Alatere{' '}
              <span className="g-subword">
                <span className="lg-navy">e</span>
                <span className="lg-teal">c</span>
                <span className="lg-gold">o</span>
                <span className="lg-clay">M</span>
              </span>
            </h1>
            <p className="g-lead">{t('hero_lead')}</p>
            <div className="ap-hero__cta">
              <a
                href={REPRO}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn ap-btn g-btn--lg"
              >
                {t('hero_cta1')} <span className="g-arrow">↗</span>
              </a>
              <a href="#contact" className="g-btn g-btn--secondary g-btn--lg">
                {t('hero_cta2')}
              </a>
            </div>
          </div>
          <aside className="ap-aside">
            <span className="g-label">{t('lab')}</span>
            <div className="ap-statgrid">
              <div className="ap-stat">
                <strong>2003</strong>
                <span>{t('lab_1')}</span>
              </div>
              <div className="ap-stat">
                <strong>{t('lab_2_n')}</strong>
                <span>{t('lab_2')}</span>
              </div>
              <div className="ap-stat">
                <strong>5</strong>
                <span>{t('lab_3')}</span>
              </div>
              <div className="ap-stat">
                <strong>{t('lab_4_n')}</strong>
                <span>{t('lab_4')}</span>
              </div>
            </div>
          </aside>
        </section>

        {/* BOUTIQUES */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--brand">{t('shops_label')}</span>
            </span>
            <h2 className="g-h2">{t('shops_title')}</h2>
            <p>{t('shops_p')}</p>
          </div>
          <div className="ap-shops">
            <article className="ap-shop">
              <ImageSlot cap={t('shop1_cap')} src="/photos/ecompage-repro.webp" />
              <div className="ap-shop__b">
                <a
                  className="ap-shop__u"
                  href="https://repro-tableaux.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  repro-tableaux.com ↗
                </a>
                <h3>{t('shop1_h')}</h3>
                <p>{t('shop1_p')}</p>
                <a
                  href="https://maps.app.goo.gl/LuUe1QSGMXmXeDCh9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="g-anchor"
                  style={{ color: 'var(--brand)', fontSize: 14 }}
                >
                  <Icon name="map-pin" /> {t('maps_label')}
                </a>
              </div>
            </article>
            <article className="ap-shop">
              <ImageSlot cap={t('shop2_cap')} src="/photos/ecompage-copia.webp" />
              <div className="ap-shop__b">
                <a
                  className="ap-shop__u"
                  href="https://www.copia-di-arte.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  copia-di-arte.com ↗
                </a>
                <h3>{t('shop2_h')}</h3>
                <p>{t('shop2_p')}</p>
              </div>
            </article>
          </div>
          <div className="ap-chips" style={{ marginTop: 24 }}>
            <a className="ap-chip" href="https://www.reprodart.com" target="_blank" rel="noopener noreferrer">reprodart.com</a>
            <a className="ap-chip" href="https://www.art-prints-on-demand.com" target="_blank" rel="noopener noreferrer">art-prints-on-demand.com</a>
            <a className="ap-chip" href="https://www.myartprints.cz" target="_blank" rel="noopener noreferrer">myartprints.cz</a>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section className="ap-section--alt">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--brand">{t('skills_label')}</span>
              </span>
              <h2 className="g-h2">{t('skills_title')}</h2>
              <p>{t('skills_p')}</p>
            </div>
            <div className="ap-grid">
              <div className="ap-card">
                <div className="ap-card__ic">
                  <Icon name="search" />
                </div>
                <h3>{t('sk1_h')}</h3>
                <p>{t('sk1_p')}</p>
              </div>
              <div className="ap-card">
                <div className="ap-card__ic">
                  <Icon name="target" />
                </div>
                <h3>{t('sk2_h')}</h3>
                <p>{t('sk2_p')}</p>
              </div>
              <div className="ap-card">
                <div className="ap-card__ic">
                  <Icon name="globe" />
                </div>
                <h3>{t('sk3_h')}</h3>
                <p>{t('sk3_p')}</p>
              </div>
              <div className="ap-card">
                <div className="ap-card__ic">
                  <Icon name="sparkles" />
                </div>
                <h3>{t('sk4_h')}</h3>
                <p>{t('sk4_p')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--brand">{t('tl_label')}</span>
            </span>
            <h2 className="g-h2">{t('tl_title')}</h2>
          </div>
          <div className="ap-timeline">
            {[
              ['2003', t('tl_2003')],
              ['2008', t('tl_2008')],
              ['2015', t('tl_2015')],
              ['2020', t('tl_2020')],
              [t('tl_now_y'), t('tl_now')],
            ].map(([y, e], i) => (
              <div className="ap-tl" key={i}>
                <div className="ap-tl__y">{y}</div>
                <div className="ap-tl__e">{e}</div>
              </div>
            ))}
          </div>
        </section>
        {/* FAQ */}
        <section className="ap-section" id="faq">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--brand">{t('faq_label')}</span>
            </span>
            <h2 className="g-h2">{t('faq_title')}</h2>
          </div>
          <div className="g-faq">
            {['faq1', 'faq2', 'faq3', 'faq4'].map((k) => (
              <details key={k}>
                <summary>{t(`${k}_q`)}</summary>
                <div className="g-faq__a">{t(`${k}_a`)}</div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <GoogleReviews pole="ecom" />

      {/* CTA */}
      <section className="ap-cta" id="contact">
        <div className="ap-cta__in">
          <div>
            <h2>{t('cta_title')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <div className="ap-cta__btns">
            <Link href="/contact?pole=ecom" className="g-btn g-btn--light g-btn--lg">
              {t('cta_b1')} <span className="g-arrow">→</span>
            </Link>
            <Link href="/#forma" className="g-btn g-btn--ghost-light g-btn--lg">
              {t('cta_b2')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
