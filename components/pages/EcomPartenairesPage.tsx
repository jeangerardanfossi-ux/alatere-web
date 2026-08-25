'use client';

/**
 * Alatere ecoM - page « Partenaires agences » (offre en marque blanche).
 * Portée depuis le handoff Claude Design « Partenaire.dc.html ».
 * Accent bleu ecoM ; en-tête et pied de page mutualisés avec le reste du site.
 */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useLang, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon, BrandIcon } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';
import { company } from '@/lib/site';

export const PARTENAIRES_TITLE = {
  fr: 'Alatere ecoM - Partenaire e-commerce en marque blanche pour agences',
  en: 'Alatere ecoM - White-label e-commerce partner for agencies',
};

const ACCENT = {
  '--accent': '#1B4F8A',
  '--accent-dark': '#153E6E',
  '--accent-soft': '#e8eff7',
} as React.CSSProperties;

/** Sommaire collant (ancres de la colonne principale). */
const TOC: [string, string, string][] = [
  ['constat', 'Le constat', 'The situation'],
  ['perimetre', 'Ce que vous pouvez nous confier', 'What you can hand over'],
  ['international', "Se développer à l'étranger", 'Expanding abroad'],
  ['modalites', 'Comment on travaille', 'How we work with you'],
  ['equipe', "L'équipe", 'The team'],
  ['contact', 'Nous contacter', 'Contact us'],
];

/** Périmètre : prestations opérables sous la marque de l'agence. */
const SCOPE: { icon: string; k: string }[] = [
  { icon: 'trending-up', k: 'sea' },
  { icon: 'search', k: 'seo' },
  { icon: 'file-text', k: 'content' },
  { icon: 'message-circle', k: 'care' },
  { icon: 'star', k: 'reviews' },
  { icon: 'package', k: 'ops' },
];

/** Marchés déjà opérés (panneau international). */
const MARKETS = ['fr', 'it', 'es', 'cz', 'de'];

/** Modalités de collaboration. */
const MODES = ['wl', 'regie', 'forfait', 'cotraitance'];

type Member = { photo: string; k: string; skills: number; linkedin: string };

const TEAM: Member[] = [
  {
    photo: '/photos/jean-gerard.webp',
    k: 'jga',
    skills: 4,
    linkedin: 'https://www.linkedin.com/in/jeangerardanfossi/',
  },
  {
    photo: '/photos/iveta.webp',
    k: 'isa',
    skills: 4,
    linkedin: 'https://www.linkedin.com/in/iveta-siskova-office-manager/',
  },
  {
    photo: '/photos/simona.webp',
    k: 'sb',
    skills: 6,
    linkedin: 'https://www.linkedin.com/in/simona-ballatore/',
  },
];

const TX: Dict = {
  bc_root: { fr: 'Accueil', en: 'Home' },
  bc_ecom: { fr: 'Alatere ecoM', en: 'Alatere ecoM' },
  bc_leaf: { fr: 'Partenaires', en: 'Partners' },

  toc_label: { fr: 'Sur cette page', en: 'On this page' },

  hero_tag: {
    fr: 'Alatere ecoM · partenaires agences',
    en: 'Alatere ecoM · agency partners',
  },
  hero_h1: {
    fr: "Le partenaire e-commerce que vos clients ne verront jamais",
    en: 'The e-commerce partner your clients will never see',
  },
  hero_lead: {
    fr: "Nous prenons en charge l'acquisition, le contenu et la relation client de vos projets e-commerce, en marque blanche, dans cinq langues. Vingt-trois ans à opérer nos propres boutiques, au service de votre agence.",
    en: 'We take on the acquisition, content and customer care of your e-commerce projects, white-label, in five languages. Twenty-three years running our own stores, at the service of your agency.',
  },
  hero_cta1: { fr: 'Prendre rendez-vous', en: 'Book a meeting' },
  hero_cta2: {
    fr: 'Ce que nous prenons en charge',
    en: 'What we take on',
  },

  stat1_n: { fr: '23 ans', en: '23 years' },
  stat1_l: { fr: 'de e-commerce', en: 'of e-commerce' },
  stat2_n: { fr: '5', en: '5' },
  stat2_l: { fr: 'boutiques en propre', en: 'stores run in-house' },
  stat3_n: { fr: '5 langues', en: '5 languages' },
  stat3_l: { fr: 'natives ou courantes', en: 'native or fluent' },
  badge_google: { fr: 'Google Partner', en: 'Google Partner' },
  badge_qualiopi: { fr: 'Qualiopi', en: 'Qualiopi' },

  constat_h2: {
    fr: 'Vos clients vendent en ligne. Rarement dans une seule langue.',
    en: 'Your clients sell online. Rarely in a single language.',
  },
  constat_p1: {
    fr: "Une agence sait concevoir un site. Le faire vivre au quotidien - les campagnes, les fiches produits, les avis, les clients qui écrivent en italien un samedi soir - demande d'autres bras et d'autres langues.",
    en: 'An agency knows how to build a site. Keeping it alive day to day - the campaigns, the product pages, the reviews, the customer writing in Italian on a Saturday evening - takes other hands and other languages.',
  },
  constat_p2: {
    fr: "C'est exactement ce que nous faisons pour nos propres boutiques depuis vingt-trois ans. Nous le faisons aussi pour vous, sous votre marque.",
    en: "That is exactly what we have been doing for our own stores for twenty-three years. We do it for you too, under your brand.",
  },

  scope_label: { fr: 'Périmètre', en: 'Scope' },
  scope_h2: {
    fr: 'Ce que vous pouvez nous confier',
    en: 'What you can hand over to us',
  },
  sea_h: { fr: 'Acquisition payante', en: 'Paid acquisition' },
  sea_p: {
    fr: 'Google Ads et Meta Ads : structure des campagnes, budgets, suivi de la rentabilité.',
    en: 'Google Ads and Meta Ads: campaign structure, budgets, profitability tracking.',
  },
  seo_h: { fr: 'SEO', en: 'SEO' },
  seo_p: {
    fr: 'Audit technique, arborescence, optimisation des pages et des fiches produits.',
    en: 'Technical audit, site structure, optimisation of pages and product listings.',
  },
  content_h: { fr: 'Contenu et traduction', en: 'Content and translation' },
  content_p: {
    fr: 'Fiches produits, pages, newsletters, réseaux sociaux - rédigés ou traduits, pas passés à la machine.',
    en: 'Product pages, landing pages, newsletters, social media - written or translated, not run through a machine.',
  },
  care_h: { fr: 'Relation client', en: 'Customer care' },
  care_p: {
    fr: "Conseil avant-vente, devis, suivi des commandes, litiges - en français, anglais, italien, espagnol.",
    en: 'Pre-sales advice, quotes, order follow-up, disputes - in French, English, Italian and Spanish.',
  },
  reviews_h: { fr: 'Avis et e-réputation', en: 'Reviews and online reputation' },
  reviews_p: {
    fr: 'Collecte des avis, réponses publiques, suivi de la note dans chaque pays.',
    en: 'Review collection, public replies, rating monitoring in each country.',
  },
  ops_h: { fr: 'Back-office et logistique', en: 'Back office and logistics' },
  ops_p: {
    fr: 'Catalogue, stocks, transporteurs, expéditions multi-pays.',
    en: 'Catalogue, stock, carriers, multi-country shipping.',
  },
  forma_h: {
    fr: 'Formation de vos clients - organisme certifié Qualiopi',
    en: 'Training your clients - Qualiopi-certified provider',
  },
  forma_p: {
    fr: "Former les équipes de vos clients à leur outil, avec un financement OPCO ou FAF quand il est mobilisable. Vous gardez la relation, nous gérons l'administratif de la formation.",
    en: "Training your clients' teams on their own tools, with OPCO or FAF funding where it can be mobilised. You keep the relationship, we handle the training paperwork.",
  },

  intl_label: { fr: 'International', en: 'International' },
  intl_h2: {
    fr: "Se développer à l'étranger sans recruter",
    en: 'Expanding abroad without hiring',
  },
  intl_p: {
    fr: "Ouvrir un marché ne se réduit pas à traduire un site. Il faut répondre aux clients dans leur langue, adapter les campagnes et connaître les usages locaux. Nos langues sont natives ou courantes, pas approximatives.",
    en: 'Opening a market is not just translating a site. You have to answer customers in their language, adapt the campaigns and know local habits. Our languages are native or fluent, not approximate.',
  },
  lang_fr: { fr: 'Français', en: 'French' },
  lang_en: { fr: 'Anglais', en: 'English' },
  lang_it: { fr: 'Italien', en: 'Italian' },
  lang_de: { fr: 'Allemand', en: 'German' },
  lang_sk: { fr: 'Slovaque / tchèque', en: 'Slovak / Czech' },
  lang_es: { fr: 'Espagnol', en: 'Spanish' },
  markets_label: { fr: 'Marchés déjà opérés', en: 'Markets already covered' },
  fr_n: { fr: 'France', en: 'France' },
  fr_d: { fr: 'boutiques en propre', en: 'stores run in-house' },
  it_n: { fr: 'Italie', en: 'Italy' },
  it_d: { fr: 'vente et service client', en: 'sales and customer care' },
  es_n: { fr: 'Espagne', en: 'Spain' },
  es_d: { fr: 'vente et service client', en: 'sales and customer care' },
  cz_n: { fr: 'Tchéquie et Slovaquie', en: 'Czechia and Slovakia' },
  cz_d: { fr: 'vente et service client', en: 'sales and customer care' },
  de_n: { fr: 'Allemagne', en: 'Germany' },
  de_d: { fr: 'supply chain et expédition', en: 'supply chain and shipping' },

  modes_label: { fr: 'Modalités', en: 'Terms' },
  modes_h2: {
    fr: 'Comment on travaille avec vous',
    en: 'How we work with you',
  },
  wl_h: { fr: 'Marque blanche', en: 'White label' },
  wl_p: {
    fr: "Nous n'apparaissons nulle part. Vous restez l'interlocuteur unique de votre client, nous livrons sous votre nom.",
    en: 'We appear nowhere. You remain your client’s single point of contact, we deliver under your name.',
  },
  regie_h: { fr: 'Régie', en: 'Time and materials' },
  regie_p: {
    fr: 'Un volume de jours par mois, mobilisable selon vos pics. Utile quand la charge est irrégulière.',
    en: 'A monthly volume of days, called on as your peaks demand. Useful when the workload is uneven.',
  },
  forfait_h: { fr: 'Forfait', en: 'Fixed price' },
  forfait_p: {
    fr: "Un périmètre défini, un prix ferme, un calendrier. Pour les missions dont le contour est clair dès le départ.",
    en: 'A defined scope, a firm price, a schedule. For assignments whose outline is clear from the start.',
  },
  cotraitance_h: { fr: 'Co-traitance', en: 'Joint contracting' },
  cotraitance_p: {
    fr: 'Nous signons avec vous et assumons notre part devant le client final, quand le projet le demande.',
    en: 'We sign alongside you and answer for our share before the end client, when the project calls for it.',
  },

  team_label: { fr: "L'équipe", en: 'The team' },
  team_h2: { fr: 'Une équipe, pas un solo', en: 'A team, not a solo act' },
  team_p: {
    fr: 'Structure en SAS : capacité à monter en charge et à co-traiter.',
    en: 'Set up as a SAS company: able to scale up and to contract jointly.',
  },
  jga_n: { fr: 'Jean-Gérard Anfossi', en: 'Jean-Gérard Anfossi' },
  jga_r: {
    fr: 'Dirigeant - acquisition et formation',
    en: 'Managing director - acquisition and training',
  },
  jga_s1: {
    fr: 'Plus de 25 ans en e-commerce et webmarketing',
    en: '25+ years in e-commerce and web marketing',
  },
  jga_s2: { fr: 'SEO et SEA - agence Google Partner', en: 'SEO and SEA - Google Partner agency' },
  jga_s3: {
    fr: 'IA générative appliquée au marketing',
    en: 'Generative AI applied to marketing',
  },
  jga_s4: {
    fr: 'Enseignant : IAE Nice, SKEMA, HEC Paris, IUT Cannes',
    en: 'Lecturer: IAE Nice, SKEMA, HEC Paris, IUT Cannes',
  },
  jga_l: {
    fr: 'Français et anglais natifs · allemand et italien courants',
    en: 'Native French and English · fluent German and Italian',
  },
  isa_n: { fr: 'Iveta Siskova Anfossi', en: 'Iveta Siskova Anfossi' },
  isa_r: {
    fr: 'Associée - opérations e-commerce et relation client',
    en: 'Partner - e-commerce operations and customer care',
  },
  isa_s1: {
    fr: 'Plus de 15 ans en service clients multi-pays',
    en: '15+ years in multi-country customer service',
  },
  isa_s2: { fr: 'Supply chain et logistique', en: 'Supply chain and logistics' },
  isa_s3: { fr: 'CRM - Emarsys, SAP', en: 'CRM - Emarsys, SAP' },
  isa_s4: { fr: 'MBA Marketing Global', en: 'Global Marketing MBA' },
  isa_l: {
    fr: 'Slovaque et tchèque natifs · allemand bilingue · français et anglais courants',
    en: 'Native Slovak and Czech · bilingual German · fluent French and English',
  },
  sb_n: { fr: 'Simona Ballatore', en: 'Simona Ballatore' },
  sb_r: {
    fr: 'Marketing digital et relation client e-commerce multilingue',
    en: 'Digital marketing and multilingual e-commerce customer care',
  },
  sb_s1: {
    fr: 'Campagnes Meta Ads et Google Ads - certifiée',
    en: 'Meta Ads and Google Ads campaigns - certified',
  },
  sb_s2: {
    fr: 'Service client italien, français, espagnol, anglais : conseil, devis, suivi de commandes',
    en: 'Customer service in Italian, French, Spanish and English: advice, quotes, order follow-up',
  },
  sb_s3: {
    fr: 'Réseaux sociaux, newsletters, contenus',
    en: 'Social media, newsletters, content',
  },
  sb_s4: {
    fr: 'Traduction et SEO des pages et fiches produits',
    en: 'Translation and SEO of pages and product listings',
  },
  sb_s5: { fr: 'Avis clients et e-réputation', en: 'Customer reviews and online reputation' },
  sb_s6: {
    fr: 'Appui formation : OPCO, Digiforma, conformité Qualiopi',
    en: 'Training support: OPCO, Digiforma, Qualiopi compliance',
  },
  sb_l: {
    fr: 'Italien langue maternelle · français et anglais courants · espagnol professionnel',
    en: 'Native Italian · fluent French and English · professional Spanish',
  },

  linkedin_btn: { fr: 'Profil LinkedIn', en: 'LinkedIn profile' },

  trust1_t: { fr: 'Alatere Web SAS', en: 'Alatere Web SAS' },
  trust1_s: {
    fr: 'Contrat de sous-traitance, RC pro',
    en: 'Subcontracting agreement, insured',
  },
  trust2_t: { fr: 'Organisme Qualiopi', en: 'Qualiopi-certified provider' },
  trust2_s: {
    fr: `OF n° ${company.formationNumber} · financement OPCO`,
    en: `Provider no. ${company.formationNumber} · OPCO funding`,
  },
  trust3_t: { fr: 'Google Partner', en: 'Google Partner' },
  trust3_s: {
    fr: 'Certification Google Ads à jour',
    en: 'Google Ads certification up to date',
  },
  trust4_t: { fr: 'Antibes', en: 'Antibes' },
  trust4_s: {
    fr: 'Centre-ville, à proximité de Sophia Antipolis',
    en: 'City centre, close to Sophia Antipolis',
  },

  contact_h2: {
    fr: 'Un projet, un pic de charge, un marché à ouvrir ?',
    en: 'A project, a workload peak, a market to open?',
  },
  contact_p: {
    fr: "Décrivez votre besoin sur le formulaire de contact, en choisissant le sujet « E-commerce - Alatere ecoM ». Nous répondons sous 48 heures.",
    en: 'Describe your need on the contact form, choosing the subject "E-commerce - Alatere ecoM". We reply within 48 hours.',
  },
  contact_cta: { fr: 'Prendre rendez-vous', en: 'Book a meeting' },
  contact_label: { fr: 'Nous joindre directement', en: 'Reach us directly' },
};

export default function EcomPartenairesPage() {
  return (
    <div className="g-home pt-page" style={ACCENT}>
      <LangProvider titles={PARTENAIRES_TITLE}>
        <Header active="ecom" />
        <Body />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Body() {
  const t = useT(TX);
  const { lang } = useLang();
  const idx = lang === 'fr' ? 1 : 2;

  return (
    <>
      {/* FIL D'ARIANE */}
      <div className="pt-bcbar">
        <nav className="pt-bc" aria-label={lang === 'fr' ? "Fil d'ariane" : 'Breadcrumb'}>
          <Link href="/">{t('bc_root')}</Link>
          <span className="pt-bc__sep">/</span>
          <Link href="/alatere-ecom" className="is-parent">
            {t('bc_ecom')}
          </Link>
          <span className="pt-bc__sep">/</span>
          <span className="pt-bc__leaf">{t('bc_leaf')}</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="pt-hero">
        <span className="g-label">{t('hero_tag')}</span>
        <h1>{t('hero_h1')}</h1>
        <p className="pt-hero__lead">{t('hero_lead')}</p>
        <div className="pt-hero__cta">
          <Link href="/contact?pole=ecom" className="g-btn g-btn--primary g-btn--lg">
            {t('hero_cta1')} <span className="g-arrow">→</span>
          </Link>
          <a href="#perimetre" className="g-btn g-btn--secondary g-btn--lg">
            {t('hero_cta2')} <span className="g-arrow">→</span>
          </a>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <div className="pt-stats">
        <div className="pt-stats__in">
          <div className="pt-stat">
            <strong>{t('stat1_n')}</strong>
            <span>{t('stat1_l')}</span>
          </div>
          <div className="pt-stat">
            <strong>{t('stat2_n')}</strong>
            <span>{t('stat2_l')}</span>
          </div>
          <div className="pt-stat">
            <strong>{t('stat3_n')}</strong>
            <span>{t('stat3_l')}</span>
          </div>
          <div className="pt-stats__badges">
            <span className="pt-badge">{t('badge_google')}</span>
            <span className="pt-badge">{t('badge_qualiopi')}</span>
          </div>
        </div>
      </div>

      <div className="pt-layout">
        {/* SOMMAIRE COLLANT */}
        <aside className="pt-toc">
          <span className="g-label">{t('toc_label')}</span>
          {TOC.map((row, i) => (
            <a key={row[0]} href={`#${row[0]}`} className={i === 0 ? 'is-current' : undefined}>
              {row[idx]}
            </a>
          ))}
        </aside>

        <main className="pt-main">
          {/* LE CONSTAT */}
          <section id="constat" className="pt-section">
            <h2>{t('constat_h2')}</h2>
            <p>{t('constat_p1')}</p>
            <p>{t('constat_p2')}</p>
          </section>

          {/* PÉRIMÈTRE */}
          <section id="perimetre" className="pt-section">
            <span className="g-label">{t('scope_label')}</span>
            <h2>{t('scope_h2')}</h2>
            <div className="pt-scope">
              {SCOPE.map((s) => (
                <div className="pt-scope__item" key={s.k}>
                  <Icon name={s.icon} />
                  <div>
                    <h3>{t(`${s.k}_h`)}</h3>
                    <p>{t(`${s.k}_p`)}</p>
                  </div>
                </div>
              ))}
              <div className="pt-scope__item pt-scope__item--wide">
                <Icon name="award" />
                <div>
                  <h3>{t('forma_h')}</h3>
                  <p>{t('forma_p')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* INTERNATIONAL */}
          <section id="international" className="pt-section">
            <div className="pt-intl">
              <div>
                <span className="g-label">{t('intl_label')}</span>
                <h2>{t('intl_h2')}</h2>
                <p>{t('intl_p')}</p>
                <div className="pt-langs">
                  {['fr', 'en', 'it', 'de', 'sk', 'es'].map((l) => (
                    <span key={l}>{t(`lang_${l}`)}</span>
                  ))}
                </div>
              </div>
              <div className="pt-markets">
                <span className="g-label">{t('markets_label')}</span>
                <dl>
                  {MARKETS.map((m) => (
                    <div key={m}>
                      <dt>{t(`${m}_n`)}</dt>
                      <dd>{t(`${m}_d`)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          {/* MODALITÉS */}
          <section id="modalites" className="pt-section">
            <span className="g-label">{t('modes_label')}</span>
            <h2>{t('modes_h2')}</h2>
            <div className="pt-modes">
              {MODES.map((m, i) => (
                <div className="pt-mode" key={m}>
                  <span className="pt-mode__n">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{t(`${m}_h`)}</h3>
                    <p>{t(`${m}_p`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ÉQUIPE */}
          <section id="equipe" className="pt-section">
            <span className="g-label">{t('team_label')}</span>
            <h2>{t('team_h2')}</h2>
            <p>{t('team_p')}</p>
            <div className="pt-team">
              {TEAM.map((m) => (
                <article className="pt-member" key={m.k}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={t(`${m.k}_n`)} loading="lazy" width={88} height={88} />
                  <div>
                    <h3>{t(`${m.k}_n`)}</h3>
                    <p className="pt-member__role">{t(`${m.k}_r`)}</p>
                    <ul>
                      {Array.from({ length: m.skills }, (_, i) => (
                        <li key={i}>{t(`${m.k}_s${i + 1}`)}</li>
                      ))}
                    </ul>
                    <div className="pt-member__foot">
                      <span className="pt-member__langs">{t(`${m.k}_l`)}</span>
                      <a
                        className="pt-member__li"
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BrandIcon name="linkedin" />
                        {t('linkedin_btn')}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RÉASSURANCE */}
          <section className="pt-section">
            <div className="pt-trust">
              <div className="pt-trustcard">
                <Icon name="shield-check" />
                <div className="pt-trustcard__t">{t('trust1_t')}</div>
                <div className="pt-trustcard__s">{t('trust1_s')}</div>
              </div>
              <div className="pt-trustcard pt-trustcard--gold">
                <Icon name="badge-check" />
                <div className="pt-trustcard__t">{t('trust2_t')}</div>
                <div className="pt-trustcard__s">{t('trust2_s')}</div>
              </div>
              <div className="pt-trustcard">
                <BrandIcon name="google" />
                <div className="pt-trustcard__t">{t('trust3_t')}</div>
                <div className="pt-trustcard__s">{t('trust3_s')}</div>
              </div>
              <div className="pt-trustcard pt-trustcard--green">
                <Icon name="map-pin" />
                <div className="pt-trustcard__t">{t('trust4_t')}</div>
                <div className="pt-trustcard__s">{t('trust4_s')}</div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* CONTACT */}
      <section className="pt-contact" id="contact">
        <div className="pt-contact__in">
          <div>
            <h2>{t('contact_h2')}</h2>
            <p>{t('contact_p')}</p>
            <Link href="/contact?pole=ecom" className="g-btn g-btn--primary g-btn--lg">
              {t('contact_cta')} <span className="g-arrow">→</span>
            </Link>
          </div>
          <div className="pt-card">
            <span className="g-label">{t('contact_label')}</span>
            <div className="pt-card__row">
              <Icon name="mail" />
              <Email user="contact" />
            </div>
            <div className="pt-card__row">
              <Icon name="phone" />
              <a href="tel:+33761564556">07 61 56 45 56</a>
            </div>
            <div className="pt-card__row pt-card__row--addr">
              <Icon name="map-pin" />
              <span>
                9 Boulevard Albert 1er
                <br />
                06600 Antibes
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
