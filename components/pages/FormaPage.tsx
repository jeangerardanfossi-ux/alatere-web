'use client';

/** Alatere forMa - page « organisme de formation » (handoff Grommet, accent or). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import { formaFaqTx } from '@/lib/faq';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import CuratedReviews from '@/components/grommet/CuratedReviews';
import { ImgIcon } from '@/components/grommet/ImgIcon';
import { Icon } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';
import { BrandTitle } from '@/components/grommet/BrandName';

const CATALOG = 'https://alatere-web.catalogueformpro.com';

const TITLE = {
  fr: 'Alatere forMa - Formation IA, webmarketing et anglais professionnel à Antibes',
  en: 'Alatere forMa - AI, web marketing and business English training in Antibes',
};

const ACCENT = {
  '--accent': 'var(--gold)',
  '--accent-dark': 'var(--gold-dark)',
  '--accent-soft': 'var(--gold-soft)',
} as React.CSSProperties;

const TX: Dict = {
  back_home: { fr: '← Accueil', en: '← Home' },
  catalog: { fr: 'Catalogue', en: 'Catalog' },

  stripe_badge: { fr: 'Certifié Qualiopi', en: 'Qualiopi-certified' },
  stripe_decl: {
    fr: 'Organisme de formation enregistré sous le n° 93.06.07588.06',
    en: 'Registered training provider no. 93.06.07588.06',
  },
  stripe_referent: { fr: 'Référente handicap :', en: 'Disability liaison:' },
  stripe_psh: { fr: 'Simona Ballatore', en: 'Simona Ballatore' },

  bc_root: { fr: 'Alatere Web', en: 'Alatere Web' },

  hero_tag: {
    fr: 'Organisme de formation Qualiopi à Antibes',
    en: 'Qualiopi-certified training provider in Antibes',
  },
  qualiopi_alt: {
    fr: 'Qualiopi - Processus certifié - République Française',
    en: 'Qualiopi - Certified process - French Republic',
  },
  qualiopi_mention: {
    fr: "La certification qualité a été délivrée au titre de la catégorie d'action suivante : ACTIONS DE FORMATION",
    en: 'The quality certification has been issued for the following category of action: TRAINING ACTIONS',
  },
  hero_lead: {
    fr: "Formation IA, formation webmarketing, anglais professionnel, communication digitale et immobilier : nos sessions se tiennent à Antibes ou à distance, et sont finançables par votre OPCO ou votre FAF. Chaque parcours commence par un positionnement initial.",
    en: 'AI training, web marketing training, business English, digital communication and real estate: our sessions run in Antibes or remotely, and can be funded by your OPCO or FAF. Every path starts with an initial assessment.',
  },
  hero_cta1: { fr: 'Voir le catalogue détaillé', en: 'View the detailed catalog' },
  hero_cta2: { fr: 'Demander un devis', en: 'Request a quote' },
  hero_cat: {
    fr: 'Programmes, durées, prérequis, tarifs et dates sur alatere-web.catalogueformpro.com',
    en: 'Programs, durations, prerequisites, prices and dates on alatere-web.catalogueformpro.com',
  },
  switch_a: {
    fr: "Vous cherchez une agence web - création de site internet, référencement SEO, e-commerce ? C'est le métier de notre autre pôle : ",
    en: 'Looking for a web agency - website design, SEO, e-commerce? That is what our other division does: ',
  },
  switch_link: {
    fr: 'Alatere ecoM, agence web à Antibes',
    en: 'Alatere ecoM, web agency in Antibes',
  },
  switch_b: { fr: '.', en: '.' },

  stats_label: { fr: 'Indicateurs publiés', en: 'Published indicators' },
  stat1: { fr: 'Satisfaction stagiaires', en: 'Trainee satisfaction' },
  stat2: { fr: 'Taux de complétion', en: 'Completion rate' },
  stat3: { fr: "Délai d'accès moyen", en: 'Average access time' },
  stat4: { fr: 'Certifié Qualiopi', en: 'Qualiopi-certified' },
  stats_note: {
    fr: 'Données auto-déclarées, mises à jour annuelle (indicateur 22 du référentiel).',
    en: 'Self-reported data, updated annually (indicator 22 of the framework).',
  },

  dom_label: { fr: 'Nos domaines', en: 'Our fields' },
  dom_title: {
    fr: 'Cinq domaines de formation, à Antibes ou à distance',
    en: 'Five training fields, in Antibes or remotely',
  },
  dom_p: {
    fr: 'Seules les grandes thématiques figurent ici. Le détail de chaque programme (objectifs, prérequis, durée, modalités, tarifs, accessibilité) est publié sur notre catalogue.',
    en: 'Only the main themes appear here. The details of each program (objectives, prerequisites, duration, terms, prices, accessibility) are published in our catalog.',
  },

  dom1_count: { fr: '11 programmes', en: '11 programs' },
  dom1_h: { fr: 'Formation webmarketing', en: 'Web marketing training' },
  dom1_p: {
    fr: "Apprendre le SEO, le SEA, l'AEO, les social ads, l'analytics et l'e-commerce. Notre métier depuis 2003, transmis à vos équipes.",
    en: 'Learn SEO, SEA, AEO, social ads, analytics and e-commerce. Our trade since 2003, passed on to your teams.',
  },
  dom2_count: { fr: '12 programmes', en: '12 programs' },
  dom2_h: { fr: 'Formation IA', en: 'AI training' },
  dom2_p: {
    fr: "Prompts, IA générative, automatisation, intégration de l'intelligence artificielle dans les métiers et les outils du quotidien.",
    en: 'Prompts, generative AI, automation and integrating artificial intelligence into jobs and everyday tools.',
  },
  dom3_count: { fr: '6 programmes', en: '6 programs' },
  dom3_h: { fr: 'Anglais professionnel et langues', en: 'Business English and languages' },
  dom3_p: {
    fr: "Anglais professionnel, italien et espagnol pour un usage courant et technique, en individuel ou en petit groupe, à Antibes ou en visio.",
    en: 'Business English, Italian and Spanish for everyday and technical use, one-to-one or in a small group, in Antibes or by video.',
  },
  dom4_count: { fr: '10 programmes', en: '10 programs' },
  dom4_h: { fr: 'Formation communication digitale', en: 'Digital communication training' },
  dom4_p: {
    fr: 'Réseaux sociaux, brand content, création de contenu et stratégie éditoriale.',
    en: 'Social media, brand content, content creation and editorial strategy.',
  },
  dom5_count: { fr: '35 programmes', en: '35 programs' },
  dom5_h: { fr: 'Formation immobilier', en: 'Real estate training' },
  dom5_p: {
    fr: "Formations pour les professionnels de l'immobilier : formation continue obligatoire, outils digitaux.",
    en: 'Courses for real-estate professionals: mandatory continuing education, digital tools.',
  },
  dom_see: { fr: 'En savoir plus →', en: 'Learn more →' },

  team_role: { fr: 'L’équipe pédagogique', en: 'The teaching team' },
  team_h: {
    fr: 'Nos six formateurs',
    en: 'Our six trainers',
  },
  team_p: {
    fr: "Consultants, juriste, coach : chacun enseigne la matière qu'il exerce. Leurs parcours sont présentés sur la page formateurs.",
    en: 'Consultants, a lawyer, a coach: each teaches the subject they work in. Their backgrounds are on the trainers page.',
  },
  team_cta: { fr: 'Voir nos formateurs', en: 'Meet our trainers' },

  cat_count: { fr: '64 programmes', en: '64 programs' },
  cat_h: { fr: 'Catalogue complet', en: 'Full catalog' },
  cat_p: {
    fr: 'Recherche par mot-clé, filtres par durée, prix et modalité, fiche détaillée pour chaque programme.',
    en: 'Keyword search, filters by duration, price and format, a detailed sheet for each program.',
  },
  cat_open: { fr: 'Ouvrir le catalogue ↗', en: 'Open the catalog ↗' },

  mod_label: { fr: 'Comment ça se passe', en: 'How it works' },
  mod_title: { fr: 'Modalités, délais et financement', en: 'Terms, timelines and funding' },
  mod_p: {
    fr: "Ce qu'il faut savoir avant l'entrée en formation, comme le prévoit le référentiel Qualiopi.",
    en: 'What you need to know before starting a course, as required by the Qualiopi framework.',
  },

  mod1_h: { fr: 'Modalités pédagogiques', en: 'Teaching methods' },
  mod1_r1_b: { fr: 'Présentiel', en: 'In person' },
  mod1_r1_t: {
    fr: 'à Antibes (9 Bd Albert 1er) ou en intra-entreprise.',
    en: 'in Antibes (9 Bd Albert 1er) or on company premises.',
  },
  mod1_r2_b: { fr: 'Distanciel', en: 'Remote' },
  mod1_r2_t: {
    fr: 'synchrone (visio) ou parcours mixte.',
    en: 'synchronous (video) or blended path.',
  },
  mod1_r3_b: { fr: 'Individualisé', en: 'Individualized' },
  mod1_r3_t: {
    fr: ': positionnement initial, rythme adapté, groupes de 1 à 8.',
    en: 'with an initial assessment, adapted pace, groups of 1 to 8.',
  },

  mod2_h: { fr: "Délais d'accès", en: 'Access times' },
  mod2_r1_b: { fr: '14 jours', en: '14 days' },
  mod2_r1_t: {
    fr: 'en moyenne entre la demande et le démarrage.',
    en: 'on average between request and start.',
  },
  mod2_r2_t: {
    fr: 'Variable selon le dossier de financement et la disponibilité.',
    en: 'Varies depending on the funding file and availability.',
  },
  mod2_r3_b: { fr: 'Devis personnalisé sous', en: 'Personalized quote within' },
  mod2_r3_t: { fr: '48 heures', en: '48 hours' },

  mod3_h: { fr: 'Financement', en: 'Funding' },
  mod3_r1_b: { fr: 'OPCO', en: 'OPCO' },
  mod3_r1_t: {
    fr: '(plan de développement des compétences).',
    en: '(skills development plan).',
  },
  mod3_r2_b: { fr: 'FAF', en: 'FAF' },
  mod3_r2_t: {
    fr: "(Fonds d'Assurance Formation) pour les travailleurs non-salariés.",
    en: '(training insurance fund) for self-employed workers.',
  },
  mod3_r3_t: {
    fr: "Par subrogation ou financement par l'entreprise avant remboursement.",
    en: 'By subrogation, or company funding ahead of reimbursement.',
  },

  access_h: {
    fr: 'Accessibilité aux personnes en situation de handicap',
    en: 'Accessibility for people with disabilities',
  },
  access_p_a: {
    fr: 'Nos locaux sont accessibles et nos parcours adaptables. Notre référente handicap, Simona Ballatore, étudie chaque situation pour proposer les aménagements nécessaires. Contact : ',
    en: 'Our premises are accessible and our courses adaptable. Our disability liaison, Simona Ballatore, reviews each situation to offer the necessary adjustments. Contact: ',
  },
  access_p_b: {
    fr: '.',
    en: '.',
  },
  access_more: { fr: 'Accessibilité et handicap →', en: 'Accessibility & disability →' },
  decl_note: {
    fr: "Organisme de formation enregistré auprès de la Préfecture de la région Provence-Alpes-Côte d'Azur sous le numéro 93.06.07588.06. Cet enregistrement ne vaut pas agrément de l'État.",
    en: 'Training provider registered with the Préfecture of the Provence-Alpes-Côte d’Azur region under number 93.06.07588.06. This registration does not constitute State approval.',
  },

  doc1: { fr: 'CGV', en: 'Terms of sale' },
  doc2: { fr: 'Règlement intérieur', en: 'Internal rules' },
  doc3: { fr: 'Programme type', en: 'Sample program' },
  doc4: { fr: 'Certificat Qualiopi', en: 'Qualiopi certificate' },

  ind_label: { fr: 'Transparence', en: 'Transparency' },
  ind_title: { fr: 'Nos indicateurs de résultats', en: 'Our results indicators' },
  ind_p: {
    fr: "Chiffres à jour 2025, publiés conformément à l'indicateur 22 du référentiel national qualité.",
    en: 'Figures updated 2025, published in line with indicator 22 of the national quality framework.',
  },
  ind1: { fr: 'Satisfaction des stagiaires', en: 'Trainee satisfaction' },
  ind2: { fr: 'Taux de complétion', en: 'Completion rate' },
  ind3: { fr: 'Objectifs pédagogiques atteints', en: 'Learning objectives achieved' },
  ind4: { fr: 'Taux de recommandation', en: 'Recommendation rate' },

  steps_label: { fr: 'Les étapes', en: 'The steps' },
  steps_title: {
    fr: 'De la demande à la certification, en quatre étapes',
    en: 'From request to certification, in four steps',
  },
  step1_h: { fr: 'Positionnement', en: 'Assessment' },
  step1_p: {
    fr: 'Entretien initial, évaluation de votre niveau et de vos objectifs.',
    en: 'Initial interview, assessment of your level and goals.',
  },
  step2_h: { fr: 'Devis & convention', en: 'Quote & agreement' },
  step2_p: {
    fr: 'Programme personnalisé, montage du financement, conventionnement.',
    en: 'Personalized program, funding setup, agreement.',
  },
  step3_h: { fr: 'Formation', en: 'Training' },
  step3_p: {
    fr: "Présentiel, distanciel ou mixte. Feuilles d'émargement et suivi continu.",
    en: 'In person, remote or blended. Attendance sheets and ongoing follow-up.',
  },
  step4_h: { fr: 'Évaluation & suivi', en: 'Evaluation & follow-up' },
  step4_p: {
    fr: 'Bilan final, attestation de fin de formation, suivi à six mois.',
    en: 'Final review, completion certificate, six-month follow-up.',
  },

  cta_title: { fr: 'Un besoin de formation ?', en: 'Need training?' },
  cta_p: {
    fr: 'Devis sous 48 heures, démarrage sous 14 jours. Nous montons avec vous le dossier de financement OPCO.',
    en: 'Quote within 48 hours, start within 14 days. We prepare the OPCO funding file with you.',
  },
  cta_b1: { fr: 'Demander un devis', en: 'Request a quote' },
  cta_b2: { fr: 'Voir le catalogue ↗', en: 'View the catalog ↗' },

  faq_label: { fr: 'FAQ', en: 'FAQ' },
  faq_title: {
    fr: 'Questions fréquentes sur nos formations',
    en: 'Frequently asked questions about our training',
  },
  faq6_link: {
    fr: 'Voir Alatere ecoM, agence web à Antibes →',
    en: 'See Alatere ecoM, web agency in Antibes →',
  },
  ...formaFaqTx,
};

export default function FormaPage() {
  return (
    <div className="g-home" style={ACCENT}>
      <LangProvider titles={TITLE}>
        <Header active="forma" />
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
      {/* BANDEAU QUALIOPI */}
      <div className="f-stripe">
        <div className="f-stripe__in">
          <span className="f-stripe__badge">
            <Icon name="badge-check" /> {t('stripe_badge')}
          </span>
          <span>
            <a
              href="/documents/Certificat-Qualiopi-Alatere-Web.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title={t('doc4')}
            >
              {t('stripe_decl')}
            </a>
          </span>
          <span className="f-stripe__sep">·</span>
          <span>
            {t('stripe_referent')}{' '}
            <Link href="/accessibilite-et-handicap">{t('stripe_psh')}</Link>
          </span>
        </div>
      </div>

      <main id="top">
        {/* HERO */}
        <section className="f-hero">
          <div>
            <div className="f-breadcrumb">
              <Link href="/">{t('bc_root')}</Link> <span>›</span> <span>Alatere forMa</span>
            </div>
            <h1 className="g-label" style={{ margin: 0 }}>
              <span className="g-tag g-tag--gold">{t('hero_tag')}</span>
            </h1>
            <div className="g-h1" style={{ marginTop: 14 }}>
              <BrandTitle pole="forma" />
            </div>
            <p className="g-lead">{t('hero_lead')}</p>
            <div className="f-hero__cta">
              <a
                href={CATALOG}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn g-btn--primary g-btn--lg"
              >
                {t('hero_cta1')} <span className="g-arrow">↗</span>
              </a>
              <a href="#contact" className="g-btn g-btn--secondary g-btn--lg">
                {t('hero_cta2')}
              </a>
            </div>
            <div className="f-hero__cat">{t('hero_cat')}</div>
            <p className="f-hero__switch">
              {t('switch_a')}
              <Link href="/alatere-ecom">{t('switch_link')}</Link>
              {t('switch_b')}
            </p>
          </div>
          <aside className="f-hero__stats">
            <figure className="f-qualiopi">
              <div className="f-qualiopi__logos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/qualiopi.png" alt={t('qualiopi_alt')} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/datadock.png" alt="Datadocké" />
              </div>
              <figcaption>{t('qualiopi_mention')}</figcaption>
            </figure>
            <span className="g-label">{t('stats_label')}</span>
            <div className="f-statgrid">
              <div className="f-stat">
                <strong>94 %</strong>
                <span>{t('stat1')}</span>
              </div>
              <div className="f-stat">
                <strong>91 %</strong>
                <span>{t('stat2')}</span>
              </div>
              <div className="f-stat">
                <strong>14 j</strong>
                <span>{t('stat3')}</span>
              </div>
              <div className="f-stat">
                <strong>2022</strong>
                <span>{t('stat4')}</span>
              </div>
            </div>
            <p className="f-hero__note">{t('stats_note')}</p>
          </aside>
        </section>

        {/* 5 DOMAINES */}
        <section className="f-section" id="domaines">
          <div className="f-head">
            <span className="g-label">
              <span className="g-tag g-tag--gold">{t('dom_label')}</span>
            </span>
            <h2 className="g-h2">{t('dom_title')}</h2>
            <p>{t('dom_p')}</p>
          </div>
          <div className="f-domains">
            <article className="f-domain">
              <div className="f-domain__top">
                <ImgIcon name="chart" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom1_count')}</span>
              </div>
              <h3>{t('dom1_h')}</h3>
              <p>{t('dom1_p')}</p>
              <Link href="/alatere-forma/webmarketing">{t('dom_see')}</Link>
            </article>
            <article className="f-domain">
              <div className="f-domain__top">
                <ImgIcon name="ia" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom2_count')}</span>
              </div>
              <h3>{t('dom2_h')}</h3>
              <p>{t('dom2_p')}</p>
              <Link href="/alatere-forma/intelligence-artificielle">{t('dom_see')}</Link>
            </article>
            <article className="f-domain">
              <div className="f-domain__top">
                <ImgIcon name="langues" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom3_count')}</span>
              </div>
              <h3>{t('dom3_h')}</h3>
              <p>{t('dom3_p')}</p>
              <Link href="/alatere-forma/langues">{t('dom_see')}</Link>
            </article>
            <article className="f-domain">
              <div className="f-domain__top">
                <ImgIcon name="megaphone" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom4_count')}</span>
              </div>
              <h3>{t('dom4_h')}</h3>
              <p>{t('dom4_p')}</p>
              <Link href="/alatere-forma/communication-digitale">{t('dom_see')}</Link>
            </article>
            <article className="f-domain">
              <div className="f-domain__top">
                <ImgIcon name="maison" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom5_count')}</span>
              </div>
              <h3>{t('dom5_h')}</h3>
              <p>{t('dom5_p')}</p>
              <Link href="/alatere-forma/immobilier">{t('dom_see')}</Link>
            </article>
            <article className="f-domain f-domain--catalog">
              <div className="f-domain__top">
                <ImgIcon name="catalogue" className="f-domain__icon" />
                <span className="f-domain__count">{t('cat_count')}</span>
              </div>
              <h3>{t('cat_h')}</h3>
              <p>{t('cat_p')}</p>
              <a
                href={CATALOG}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn g-btn--light g-btn--sm"
                style={{ marginTop: 8 }}
              >
                {t('cat_open')}
              </a>
            </article>
          </div>
        </section>

        {/* FORMATEURS (teaser) */}
        <section className="f-section" style={{ paddingTop: 0 }}>
          <div className="fd-ref">
            <div className="fm-avatar fm-avatar--lg f-avatar--color" aria-hidden="true">
              <ImgIcon name="equipe" />
            </div>
            <div className="fd-ref__txt">
              <div className="fd-ref__role">{t('team_role')}</div>
              <h3>{t('team_h')}</h3>
              <p>{t('team_p')}</p>
            </div>
            <Link href="/alatere-forma/formateurs" className="g-btn g-btn--primary">
              {t('team_cta')} <span className="g-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* MODALITÉS */}
        <section className="f-section--alt">
          <div className="f-inner">
            <div className="f-head">
              <span className="g-label">
                <span className="g-tag g-tag--gold">{t('mod_label')}</span>
              </span>
              <h2 className="g-h2">{t('mod_title')}</h2>
              <p>{t('mod_p')}</p>
            </div>
            <div className="f-mods">
              <div className="f-mod">
                <div className="f-mod__h">
                  <span className="f-mod__ic f-mod__ic--color">
                    <ImgIcon name="pedagogie" />
                  </span>
                  <h3>{t('mod1_h')}</h3>
                </div>
                <ul className="f-rows">
                  <li>
                    <Icon name="check" />{' '}
                    <span>
                      <strong>{t('mod1_r1_b')}</strong> {t('mod1_r1_t')}
                    </span>
                  </li>
                  <li>
                    <Icon name="check" />{' '}
                    <span>
                      <strong>{t('mod1_r2_b')}</strong> {t('mod1_r2_t')}
                    </span>
                  </li>
                  <li>
                    <Icon name="check" />{' '}
                    <span>
                      <strong>{t('mod1_r3_b')}</strong> {t('mod1_r3_t')}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="f-mod">
                <div className="f-mod__h">
                  <span className="f-mod__ic f-mod__ic--color">
                    <ImgIcon name="delais" />
                  </span>
                  <h3>{t('mod2_h')}</h3>
                </div>
                <ul className="f-rows">
                  <li>
                    <Icon name="check" />{' '}
                    <span>
                      <strong>{t('mod2_r1_b')}</strong> {t('mod2_r1_t')}
                    </span>
                  </li>
                  <li>
                    <Icon name="check" /> <span>{t('mod2_r2_t')}</span>
                  </li>
                  <li>
                    <Icon name="check" />{' '}
                    <span>
                      {t('mod2_r3_b')} <strong>{t('mod2_r3_t')}</strong>.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="f-mod">
                <div className="f-mod__h">
                  <span className="f-mod__ic f-mod__ic--color">
                    <ImgIcon name="financement" />
                  </span>
                  <h3>{t('mod3_h')}</h3>
                </div>
                <ul className="f-rows">
                  <li>
                    <Icon name="check" />{' '}
                    <span>
                      <strong>{t('mod3_r1_b')}</strong> {t('mod3_r1_t')}
                    </span>
                  </li>
                  <li>
                    <Icon name="check" />{' '}
                    <span>
                      <strong>{t('mod3_r2_b')}</strong> {t('mod3_r2_t')}
                    </span>
                  </li>
                  <li>
                    <Icon name="check" /> <span>{t('mod3_r3_t')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Accessibilité PSH */}
            <div className="f-access" id="accessibilite">
              <Icon name="accessibility" />
              <div>
                <h3>{t('access_h')}</h3>
                <p>{t('access_p_a')}<Email user="handicap" />{t('access_p_b')}</p>
                <Link
                  href="/accessibilite-et-handicap"
                  className="g-anchor"
                  style={{ color: 'var(--gold-dark)' }}
                >
                  {t('access_more')}
                </Link>
              </div>
            </div>

            {/* Documents */}
            <div className="f-docs">
              <Link href="/conditions-generales-de-vente" className="f-doc">
                <Icon name="file-text" /> {t('doc1')}
              </Link>
              <a href={CATALOG} target="_blank" rel="noopener noreferrer" className="f-doc">
                <Icon name="file-text" /> {t('doc3')}
              </a>
              <a
                href="/documents/Certificat-Qualiopi-Alatere-Web.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="f-doc"
              >
                <Icon name="badge-check" /> {t('doc4')}
              </a>
            </div>

            {/* Mention légale OF */}
            <p className="f-hero__note" style={{ marginTop: 'var(--m)' }}>
              {t('decl_note')}
            </p>
          </div>
        </section>

        {/* INDICATEURS */}
        <section className="f-section">
          <div className="f-head">
            <span className="g-label">
              <span className="g-tag g-tag--gold">{t('ind_label')}</span>
            </span>
            <h2 className="g-h2">{t('ind_title')}</h2>
            <p>{t('ind_p')}</p>
          </div>
          <div className="f-inds">
            <div className="f-ind">
              <strong>94 %</strong>
              <span>{t('ind1')}</span>
            </div>
            <div className="f-ind">
              <strong>91 %</strong>
              <span>{t('ind2')}</span>
            </div>
            <div className="f-ind">
              <strong>96 %</strong>
              <span>{t('ind3')}</span>
            </div>
            <div className="f-ind">
              <strong>87 %</strong>
              <span>{t('ind4')}</span>
            </div>
          </div>
        </section>

        {/* AVIS GOOGLE (sélection statique, lib/curated-reviews.ts) */}
        <CuratedReviews pole="forma" />

        {/* PARCOURS */}
        <section className="f-section--alt">
          <div className="f-inner">
            <div className="f-head">
              <span className="g-label">
                <span className="g-tag g-tag--gold">{t('steps_label')}</span>
              </span>
              <h2 className="g-h2">{t('steps_title')}</h2>
            </div>
            <div className="f-steps">
              <div className="f-step">
                <ImgIcon name="etape-01" alt="01" className="f-step__img" />
                <h3>{t('step1_h')}</h3>
                <p>{t('step1_p')}</p>
              </div>
              <div className="f-step">
                <ImgIcon name="etape-02" alt="02" className="f-step__img" />
                <h3>{t('step2_h')}</h3>
                <p>{t('step2_p')}</p>
              </div>
              <div className="f-step">
                <ImgIcon name="etape-03" alt="03" className="f-step__img" />
                <h3>{t('step3_h')}</h3>
                <p>{t('step3_p')}</p>
              </div>
              <div className="f-step">
                <ImgIcon name="etape-04" alt="04" className="f-step__img" />
                <h3>{t('step4_h')}</h3>
                <p>{t('step4_p')}</p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="f-section" id="faq">
          <div className="f-head">
            <span className="g-label">
              <span className="g-tag g-tag--gold">{t('faq_label')}</span>
            </span>
            <h2 className="g-h2">{t('faq_title')}</h2>
          </div>
          <div className="g-faq">
            {Object.keys(formaFaqTx)
              .filter((k) => k.endsWith('_q'))
              .map((k) => k.slice(0, -2))
              .map((k) => (
                <details key={k}>
                  <summary>{t(`${k}_q`)}</summary>
                  <div className="g-faq__a">
                    {t(`${k}_a`)}
                    {k === 'faq6' && (
                      <>
                        {' '}
                        <Link href="/alatere-ecom" style={{ color: 'var(--gold-dark)' }}>
                          {t('faq6_link')}
                        </Link>
                      </>
                    )}
                  </div>
                </details>
              ))}
          </div>
        </section>
      </main>


      {/* CTA */}
      <section className="f-cta" id="contact">
        <div className="f-cta__in">
          <div>
            <h2>{t('cta_title')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <div className="f-cta__btns">
            <Link href="/contact?pole=forma" className="g-btn g-btn--light g-btn--lg">
              {t('cta_b1')} <span className="g-arrow">→</span>
            </Link>
            <a
              href={CATALOG}
              target="_blank"
              rel="noopener noreferrer"
              className="g-btn g-btn--ghost-light g-btn--lg"
            >
              {t('cta_b2')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
