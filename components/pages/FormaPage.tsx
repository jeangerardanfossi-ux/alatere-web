'use client';

/** Alatere forMa - page « organisme de formation » (handoff Grommet, accent or). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import GoogleReviews from '@/components/grommet/GoogleReviews';
import { Icon } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';

const CATALOG = 'https://alatere-web.catalogueformpro.com';

const TITLE = {
  fr: 'Alatere forMa - Organisme de formation certifié Qualiopi à Antibes',
  en: 'Alatere forMa - Qualiopi-certified training provider in Antibes',
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
  stripe_referent: { fr: 'Référent handicap :', en: 'Disability liaison:' },
  stripe_psh: { fr: 'accessibilité PSH', en: 'accessibility (PRM)' },

  bc_root: { fr: 'Alatere Web', en: 'Alatere Web' },

  hero_tag: {
    fr: 'Organisme de formation professionnelle',
    en: 'Professional training provider',
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
    fr: "Nous concevons des parcours de formation sur mesure, pensés pour développer des compétences opérationnelles. Cinq grands domaines, un accompagnement humain, un financement OPCO facilité - au cœur d'Antibes ou à distance.",
    en: 'We design tailored training paths built to develop operational skills. Five major fields, human support and facilitated OPCO funding - in the heart of Antibes or remotely.',
  },
  hero_cta1: { fr: 'Voir le catalogue détaillé', en: 'View the detailed catalog' },
  hero_cta2: { fr: 'Demander un devis', en: 'Request a quote' },
  hero_cat: {
    fr: 'Programmes, durées, prérequis, tarifs et dates sur alatere-web.catalogueformpro.com',
    en: 'Programs, durations, prerequisites, prices and dates on alatere-web.catalogueformpro.com',
  },

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
    fr: 'Cinq grands domaines de compétences',
    en: 'Five major fields of expertise',
  },
  dom_p: {
    fr: 'Seules les grandes thématiques figurent ici. Le détail de chaque programme - objectifs, prérequis, durée, modalités, tarifs et accessibilité - est publié sur notre catalogue dédié.',
    en: 'Only the main themes appear here. The details of each program - objectives, prerequisites, duration, terms, prices and accessibility - are published in our dedicated catalog.',
  },

  dom1_count: { fr: '8 programmes', en: '8 programs' },
  dom1_h: { fr: 'Webmarketing', en: 'Web marketing' },
  dom1_p: {
    fr: 'SEO, SEA, AEO, publicité social ads, analytics et e-commerce. Notre métier historique, transmis par la pratique.',
    en: 'SEO, SEA, AEO, social ads, analytics and e-commerce. Our core business, taught through practice.',
  },
  dom2_count: { fr: '4 programmes', en: '4 programs' },
  dom2_h: { fr: 'Intelligence artificielle', en: 'Artificial intelligence' },
  dom2_p: {
    fr: "Prompts, IA générative, automatisation, intégration de l'IA dans les métiers et les outils du quotidien.",
    en: 'Prompts, generative AI, automation and integrating AI into jobs and everyday tools.',
  },
  dom3_count: { fr: '6 programmes', en: '6 programs' },
  dom3_h: { fr: 'Langues', en: 'Languages' },
  dom3_p: {
    fr: 'Anglais, italien et espagnol - usage professionnel et technique, en individuel ou petit groupe.',
    en: 'English, Italian and Spanish - professional and technical use, one-to-one or small group.',
  },
  dom4_count: { fr: '5 programmes', en: '5 programs' },
  dom4_h: { fr: 'Communication digitale', en: 'Digital communication' },
  dom4_p: {
    fr: 'Réseaux sociaux, brand content, création de contenu et stratégie éditoriale pour gagner en visibilité.',
    en: 'Social media, brand content, content creation and editorial strategy to grow visibility.',
  },
  dom5_count: { fr: '3 programmes', en: '3 programs' },
  dom5_h: { fr: 'Immobilier', en: 'Real estate' },
  dom5_p: {
    fr: 'Formations professionnelles dédiées au secteur immobilier (obligations de formation continue, outils digitaux).',
    en: 'Professional training dedicated to the real-estate sector (continuing-education requirements, digital tools).',
  },
  dom_see: { fr: 'En savoir plus →', en: 'Learn more →' },

  team_role: { fr: 'L’équipe pédagogique', en: 'The teaching team' },
  team_h: {
    fr: 'Des formateurs praticiens, experts de leur domaine',
    en: 'Practitioner trainers, experts in their field',
  },
  team_p: {
    fr: "Des intervenants choisis pour leur expérience de terrain animent nos parcours. Faites connaissance avec celles et ceux qui vous forment.",
    en: 'Trainers chosen for their hands-on experience lead our courses. Meet the people who train you.',
  },
  team_cta: { fr: 'Voir nos formateurs', en: 'Meet our trainers' },

  cat_h: { fr: 'Catalogue complet', en: 'Full catalog' },
  cat_p: {
    fr: 'Recherche par mot-clé, filtres par durée, prix et modalité. Toutes les fiches programmes à jour.',
    en: 'Keyword search, filters by duration, price and format. All program sheets kept up to date.',
  },
  cat_open: { fr: 'Ouvrir le catalogue ↗', en: 'Open the catalog ↗' },

  mod_label: { fr: 'Comment ça se passe', en: 'How it works' },
  mod_title: { fr: 'Modalités, délais et financement', en: 'Terms, timelines and funding' },
  mod_p: {
    fr: "Conformément au référentiel Qualiopi, voici les informations essentielles avant l'entrée en formation.",
    en: 'In line with the Qualiopi framework, here is the key information before starting a course.',
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
    fr: '- positionnement initial, rythme adapté, groupes de 1 à 8.',
    en: '- initial assessment, adapted pace, groups of 1 to 8.',
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
    fr: '- plan de développement des compétences.',
    en: '- skills development plan.',
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
    fr: 'Nos locaux sont accessibles et nos parcours adaptables. Un référent handicap dédié étudie chaque situation pour proposer les aménagements nécessaires. Contact : ',
    en: 'Our premises are accessible and our courses adaptable. A dedicated disability liaison reviews each situation to offer the necessary adjustments. Contact: ',
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

  steps_label: { fr: 'Votre parcours', en: 'Your journey' },
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
    fr: 'Devis sous 48 heures, démarrage sous 14 jours. Financement OPCO accompagné.',
    en: 'Quote within 48 hours, start within 14 days. OPCO funding supported.',
  },
  cta_b1: { fr: 'Demander un devis', en: 'Request a quote' },
  cta_b2: { fr: 'Voir le catalogue ↗', en: 'View the catalog ↗' },

  faq_label: { fr: 'FAQ', en: 'FAQ' },
  faq_title: {
    fr: 'Questions fréquentes sur nos formations',
    en: 'Frequently asked questions about our training',
  },
  faq1_q: { fr: 'Alatere forMa est-il certifié Qualiopi ?', en: 'Is Alatere forMa Qualiopi-certified?' },
  faq1_a: {
    fr: "Oui. L'organisme de formation est Alatere Web SAS (marque Alatere forMa), certifié Qualiopi et enregistré sous le numéro 93.06.07588.06. La certification Qualiopi atteste de la qualité de nos processus et conditionne l'accès aux financements publics et mutualisés.",
    en: 'Yes. The training provider is Alatere Web SAS (Alatere forMa brand), Qualiopi-certified and registered under number 93.06.07588.06. Qualiopi certification attests to the quality of our processes and is required to access public and pooled funding.',
  },
  faq2_q: { fr: 'Mes formations peuvent-elles être financées ?', en: 'Can my training be funded?' },
  faq2_a: {
    fr: "Oui. Selon votre situation, nos formations sont finançables par votre OPCO (plan de développement des compétences) ou, pour les travailleurs non-salariés, par votre FAF (Fonds d'Assurance Formation). Nous vous accompagnons dans le montage du dossier de financement.",
    en: 'Yes. Depending on your situation, our courses can be funded by your OPCO (skills development plan) or, for self-employed workers, by your FAF (training insurance fund). We help you set up the funding file.',
  },
  faq3_q: { fr: 'Quels domaines de formation proposez-vous ?', en: 'What training fields do you offer?' },
  faq3_a: {
    fr: 'Cinq grands domaines : webmarketing (SEO, SEA, e-commerce), intelligence artificielle, langues, communication digitale et immobilier. Le détail des programmes est publié sur notre catalogue dédié.',
    en: 'Five major fields: web marketing (SEO, SEA, e-commerce), artificial intelligence, languages, digital communication and real estate. Program details are published in our dedicated catalog.',
  },
  faq4_q: {
    fr: 'Les formations sont-elles en présentiel ou à distance ?',
    en: 'Are courses in person or remote?',
  },
  faq4_a: {
    fr: "Les deux. Nous proposons du présentiel à Antibes (9 Bd Albert 1er), de l'intra-entreprise et du distanciel synchrone. Les parcours sont individualisés, en groupes de 1 à 8 personnes.",
    en: 'Both. We offer in-person training in Antibes (9 Bd Albert 1er), on-site company training and synchronous remote courses. Paths are individualized, in groups of 1 to 8.',
  },
  faq5_q: { fr: 'Quel est le délai pour démarrer une formation ?', en: 'How long before a course starts?' },
  faq5_a: {
    fr: 'Comptez en moyenne 14 jours entre la demande et le démarrage, selon le dossier de financement et les disponibilités. Le devis personnalisé est envoyé sous 48 heures.',
    en: 'On average 14 days between request and start, depending on the funding file and availability. The personalized quote is sent within 48 hours.',
  },
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
            <span className="g-label">
              <span className="g-tag g-tag--gold">{t('hero_tag')}</span>
            </span>
            <h1 className="g-h1" style={{ marginTop: 14 }}>
              Alatere{' '}
              <span className="g-subword">
                <span className="lg-gold">f</span>
                <span className="lg-clay">o</span>
                <span className="lg-navy">r</span>
                <span className="lg-teal">M</span>
                <span className="lg-green">a</span>
              </span>
            </h1>
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
                <Icon name="bar-chart-3" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom1_count')}</span>
              </div>
              <h3>{t('dom1_h')}</h3>
              <p>{t('dom1_p')}</p>
              <Link href="/alatere-forma/webmarketing">{t('dom_see')}</Link>
            </article>
            <article className="f-domain">
              <div className="f-domain__top">
                <Icon name="sparkles" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom2_count')}</span>
              </div>
              <h3>{t('dom2_h')}</h3>
              <p>{t('dom2_p')}</p>
              <Link href="/alatere-forma/intelligence-artificielle">{t('dom_see')}</Link>
            </article>
            <article className="f-domain">
              <div className="f-domain__top">
                <Icon name="languages" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom3_count')}</span>
              </div>
              <h3>{t('dom3_h')}</h3>
              <p>{t('dom3_p')}</p>
              <Link href="/alatere-forma/langues">{t('dom_see')}</Link>
            </article>
            <article className="f-domain">
              <div className="f-domain__top">
                <Icon name="megaphone" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom4_count')}</span>
              </div>
              <h3>{t('dom4_h')}</h3>
              <p>{t('dom4_p')}</p>
              <Link href="/alatere-forma/communication-digitale">{t('dom_see')}</Link>
            </article>
            <article className="f-domain">
              <div className="f-domain__top">
                <Icon name="building-2" className="f-domain__icon" />
                <span className="f-domain__count">{t('dom5_count')}</span>
              </div>
              <h3>{t('dom5_h')}</h3>
              <p>{t('dom5_p')}</p>
              <Link href="/alatere-forma/immobilier">{t('dom_see')}</Link>
            </article>
            <article className="f-domain f-domain--catalog">
              <Icon name="book-open" className="f-domain__icon" />
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
            <div className="fm-avatar fm-avatar--lg" aria-hidden="true">
              <Icon name="users" />
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
                  <span className="f-mod__ic">
                    <Icon name="users" />
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
                  <span className="f-mod__ic">
                    <Icon name="clock" />
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
                  <span className="f-mod__ic">
                    <Icon name="wallet" />
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
                <div className="f-step__n">01</div>
                <h3>{t('step1_h')}</h3>
                <p>{t('step1_p')}</p>
              </div>
              <div className="f-step">
                <div className="f-step__n">02</div>
                <h3>{t('step2_h')}</h3>
                <p>{t('step2_p')}</p>
              </div>
              <div className="f-step">
                <div className="f-step__n">03</div>
                <h3>{t('step3_h')}</h3>
                <p>{t('step3_p')}</p>
              </div>
              <div className="f-step">
                <div className="f-step__n">04</div>
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
            {['faq1', 'faq2', 'faq3', 'faq4', 'faq5'].map((k) => (
              <details key={k}>
                <summary>{t(`${k}_q`)}</summary>
                <div className="g-faq__a">{t(`${k}_a`)}</div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <GoogleReviews pole="forma" />

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
