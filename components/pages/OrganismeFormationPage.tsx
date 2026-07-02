'use client';

/** Organisme de formation - présentation + certificat Qualiopi téléchargeable (FR/EN). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon } from '@/components/grommet/icons';
import { company } from '@/lib/site';

const CATALOG = 'https://alatere-web.catalogueformpro.com';
const CERT_PDF = '/documents/Certificat-Qualiopi-Alatere-Web.pdf';

const TITLE = {
  fr: 'Organisme de formation - Alatere Web (certifié Qualiopi)',
  en: 'Training provider - Alatere Web (Qualiopi-certified)',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_self: { fr: 'Organisme de formation', en: 'Training provider' },
  page_title: { fr: 'Organisme de formation', en: 'Training provider' },
  page_sub: {
    fr: "Alatere Web est un organisme de formation professionnelle certifié Qualiopi, enregistré sous le numéro 93.06.07588.06.",
    en: 'Alatere Web is a professional training provider, Qualiopi-certified, registered under number 93.06.07588.06.',
  },

  s1_t: { fr: 'Enseignement et organisme de formation', en: 'Teaching and training provider' },
  s1_p1: {
    fr: "Fort de son expérience d'entrepreneur du web, Jean-Gérard Anfossi a commencé à enseigner le webmarketing en 2014 à la faculté de Nice et dans les écoles de commerce de la région, avant de créer un organisme de formation professionnelle.",
    en: 'Drawing on his experience as a web entrepreneur, Jean-Gérard Anfossi began teaching web marketing in 2014 at the University of Nice and in regional business schools, before founding a professional training organization.',
  },
  s1_p2_a: { fr: "L'organisme de formation Alatere Web a été enregistré le ", en: 'The Alatere Web training organization was registered on ' },
  s1_p2_strong: { fr: '29 mai 2015 sous le numéro 93.06.07588.06', en: '29 May 2015 under number 93.06.07588.06' },
  s1_p2_b: {
    fr: " auprès de la préfecture de région Provence-Alpes-Côte d'Azur. Cet enregistrement ne vaut pas agrément de l'État.",
    en: ' with the Provence-Alpes-Côte d’Azur regional prefecture. This registration does not constitute state approval.',
  },

  s2_t: { fr: 'Un formateur formé à la pédagogie', en: 'A trainer trained in pedagogy' },
  s2_p1: {
    fr: "Jean-Gérard Anfossi réunit une triple expérience : entrepreneur en e-commerce, enseignant dans l'enseignement supérieur et formateur professionnel. Cette double culture - terrain et pédagogie - garantit des formations concrètes, à jour des pratiques du marché et pensées pour une montée en compétences réelle des apprenants.",
    en: 'Jean-Gérard Anfossi combines a threefold experience: e-commerce entrepreneur, higher-education teacher and professional trainer. This dual culture - field and pedagogy - ensures hands-on training, up to date with market practices and designed for genuine skill development.',
  },
  s2_link: { fr: 'Voir le profil LinkedIn', en: 'View the LinkedIn profile' },

  s3_t: { fr: 'Certificat Qualiopi', en: 'Qualiopi certificate' },
  s3_p1: {
    fr: "Alatere Web est certifié Qualiopi au titre de la catégorie « Actions de formation ». La certification Qualiopi atteste de la qualité du processus mis en œuvre et permet le financement de nos formations par les fonds publics et mutualisés (OPCO, FAF pour les travailleurs non-salariés, France Travail).",
    en: 'Alatere Web is Qualiopi-certified for the “Training actions” category. The Qualiopi certification attests to the quality of the process implemented and allows our training to be funded by public and pooled funds (OPCO, FAF for self-employed workers, France Travail).',
  },
  s3_dl: { fr: 'Télécharger le certificat Qualiopi (PDF)', en: 'Download the Qualiopi certificate (PDF)' },

  s4_t: { fr: 'Nos engagements qualité', en: 'Our quality commitments' },
  s4_p: {
    fr: 'Dans le cadre de sa démarche qualité, Alatere Web s’engage à :',
    en: 'As part of its quality approach, Alatere Web is committed to:',
  },
  e1: { fr: 'Analyser les besoins et conseiller chaque client', en: 'Analyzing needs and advising each client' },
  e2: { fr: 'Faire preuve de réactivité pédagogique, commerciale et administrative', en: 'Demonstrating pedagogical, commercial and administrative responsiveness' },
  e3: { fr: 'Concevoir des programmes cohérents avec les objectifs visés', en: 'Designing programs consistent with the targeted objectives' },
  e4: { fr: 'Adapter nos formations aux contraintes des stagiaires (dont les situations de handicap)', en: 'Adapting our training to learners’ constraints (including disability situations)' },
  e5: { fr: 'Animer de façon interactive et impliquer les apprenants', en: 'Delivering interactive sessions and involving learners' },
  e6: { fr: 'Mesurer en continu la qualité de nos prestations', en: 'Continuously measuring the quality of our services' },
  e7: { fr: 'Assurer une veille réglementaire, pédagogique et technologique', en: 'Maintaining regulatory, pedagogical and technological monitoring' },

  cta_t: { fr: 'Envie de vous former avec nous ?', en: 'Want to train with us?' },
  cta_p: {
    fr: 'Programmes, durées, prérequis, tarifs et dates sont publiés sur notre catalogue dédié.',
    en: 'Programs, durations, prerequisites, prices and dates are published in our dedicated catalog.',
  },
  cta_btn: { fr: 'Voir le catalogue de formations', en: 'See the training catalog' },
  cta_btn2: { fr: 'Découvrir Alatere forMa', en: 'Discover Alatere forMa' },
};

export default function OrganismeFormationPage() {
  return (
    <div className="g-home">
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
  const engagements = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7'] as const;
  return (
    <main>
      <div className="g-pagehero">
        <div className="g-breadcrumb">
          <Link href="/">{t('bc_home')}</Link> <span>/</span> <span>{t('bc_self')}</span>
        </div>
        <h1>{t('page_title')}</h1>
        <p className="g-page-sub">{t('page_sub')}</p>
      </div>

      <div className="g-prose">
        <section>
          <h2>
            <span className="g-num">1.</span> {t('s1_t')}
          </h2>
          <p>{t('s1_p1')}</p>
          <p>
            {t('s1_p2_a')}
            <strong>{t('s1_p2_strong')}</strong>
            {t('s1_p2_b')}
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">2.</span> {t('s2_t')}
          </h2>
          <p>{t('s2_p1')}</p>
          <p>
            <a className="g-inline" href={company.linkedin} target="_blank" rel="noopener noreferrer">
              {t('s2_link')} <Icon name="external-link" />
            </a>
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">3.</span> {t('s3_t')}
          </h2>
          <p>{t('s3_p1')}</p>
          <a className="g-dlcard" href={CERT_PDF} download target="_blank" rel="noopener noreferrer">
            <span className="g-dlcard__ic">
              <Icon name="badge-check" />
            </span>
            <span className="g-dlcard__txt">{t('s3_dl')}</span>
            <Icon name="file-text" />
          </a>
        </section>

        <section>
          <h2>
            <span className="g-num">4.</span> {t('s4_t')}
          </h2>
          <p>{t('s4_p')}</p>
          <ul className="g-checklist">
            {engagements.map((e) => (
              <li key={e}>
                <Icon name="check" /> {t(e)}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="g-pagecta">
        <div className="g-pagecta__inner">
          <div>
            <h2>{t('cta_t')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={CATALOG} target="_blank" rel="noopener noreferrer" className="g-btn g-btn--light g-btn--lg">
              {t('cta_btn')} <span className="g-arrow">→</span>
            </a>
            <Link href="/alatere-forma" className="g-btn g-btn--ghost-light g-btn--lg">
              {t('cta_btn2')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
