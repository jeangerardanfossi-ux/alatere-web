'use client';

/** Politique de confidentialité — page prose (handoff Grommet, sans accent). */

import Link from 'next/link';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Email } from '@/components/grommet/Email';

const TITLE = {
  fr: 'Politique de confidentialité — Alatere Web',
  en: 'Privacy policy — Alatere Web',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_self: { fr: 'Confidentialité', en: 'Privacy' },
  page_title: { fr: 'Politique de confidentialité', en: 'Privacy policy' },
  page_sub: {
    fr: 'Comment nous collectons, utilisons et protégeons vos données personnelles, conformément au RGPD.',
    en: 'How we collect, use and protect your personal data, in compliance with the GDPR.',
  },

  s1_t: { fr: 'Responsable du traitement', en: 'Data controller' },
  s1_p_a: {
    fr: 'Le responsable du traitement des données est ',
    en: 'The data controller is ',
  },
  s1_p_strong: { fr: 'Alatere Web SAS', en: 'Alatere Web SAS' },
  s1_p_b: {
    fr: ', 9 Boulevard Albert 1er, 06600 Antibes. Pour toute question relative à vos données : ',
    en: ', 9 Boulevard Albert 1er, 06600 Antibes, France. For any question about your data: ',
  },
  s1_p_c: {
    fr: '.',
    en: '.',
  },

  s2_t: { fr: 'Données collectées', en: 'Data collected' },
  s2_p: {
    fr: 'Nous collectons uniquement les données que vous nous transmettez volontairement :',
    en: 'We only collect the data you voluntarily provide:',
  },
  s2_l1_strong: { fr: 'Via le formulaire de contact', en: 'Via the contact form' },
  s2_l1_rest: {
    fr: ' : nom, société, adresse e-mail, sujet et contenu de votre message.',
    en: ': name, company, email address, subject and content of your message.',
  },
  s2_l2_strong: { fr: 'Via une demande de formation', en: 'Via a training request' },
  s2_l2_rest: {
    fr: ' : informations nécessaires au montage du dossier (besoins, financement OPCO, coordonnées).',
    en: ': information needed to build the file (needs, OPCO funding, contact details).',
  },
  s2_l3_strong: {
    fr: 'Via une demande de domiciliation',
    en: 'Via a business-address request',
  },
  s2_l3_rest: {
    fr: " : éléments d'identification de l'entreprise requis par la réglementation.",
    en: ': company identification details required by regulation.',
  },

  s3_t: { fr: 'Finalités et base légale', en: 'Purposes and legal basis' },
  s3_p_a: {
    fr: 'Vos données sont traitées pour répondre à vos demandes, établir des devis et conventions, et assurer le suivi de la relation commerciale. La base légale est votre ',
    en: 'Your data is processed to answer your requests, issue quotes and agreements, and manage the commercial relationship. The legal basis is your ',
  },
  s3_p_strong1: { fr: 'consentement', en: 'consent' },
  s3_p_mid: {
    fr: " et, le cas échéant, l'",
    en: ' and, where applicable, the ',
  },
  s3_p_strong2: {
    fr: 'exécution de mesures précontractuelles',
    en: 'performance of pre-contractual measures',
  },
  s3_p_b: {
    fr: " ou d'un contrat.",
    en: ' or a contract.',
  },

  s4_t: { fr: 'Durée de conservation', en: 'Retention period' },
  s4_p_a: {
    fr: 'Les données des prospects sont conservées au maximum ',
    en: 'Prospect data is kept for a maximum of ',
  },
  s4_p_strong: { fr: '3 ans', en: '3 years' },
  s4_p_b: {
    fr: " après le dernier contact. Les données contractuelles et comptables sont conservées conformément aux obligations légales (jusqu'à 10 ans pour les pièces comptables).",
    en: ' after the last contact. Contractual and accounting data is kept in accordance with legal obligations (up to 10 years for accounting records).',
  },

  s5_t: { fr: 'Destinataires', en: 'Recipients' },
  s5_p_a: {
    fr: "Vos données sont destinées aux seuls services internes d'Alatere Web. Elles ne sont ",
    en: "Your data is intended solely for Alatere Web's internal departments. It is ",
  },
  s5_p_strong: { fr: 'jamais vendues', en: 'never sold' },
  s5_p_b: {
    fr: ". Elles peuvent être transmises à nos sous-traitants techniques (hébergeur, outil d'e-mailing) dans le strict cadre de la prestation, et aux financeurs (OPCO) pour les dossiers de formation.",
    en: '. It may be shared with our technical subcontractors (host, emailing tool) strictly within the scope of the service, and with funders (OPCO) for training files.',
  },

  s6_t: { fr: 'Cookies', en: 'Cookies' },
  s6_p: {
    fr: "Le site utilise uniquement des cookies strictement nécessaires à son fonctionnement et, le cas échéant, des cookies de mesure d'audience anonymisée. Aucun cookie publicitaire tiers n'est déposé sans votre consentement préalable. Le formulaire de contact est protégé contre les envois automatisés par le service reCAPTCHA de Google : à cette fin, Google peut collecter des données techniques et déposer un cookie, conformément à sa politique de confidentialité et à ses conditions d'utilisation.",
    en: 'The site only uses cookies strictly necessary for its operation and, where applicable, anonymized audience-measurement cookies. No third-party advertising cookie is placed without your prior consent. The contact form is protected against automated submissions by Google’s reCAPTCHA service: for this purpose, Google may collect technical data and set a cookie, in accordance with its privacy policy and terms of use.',
  },

  s7_t: { fr: 'Vos droits', en: 'Your rights' },
  s7_p: {
    fr: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Vous pouvez les exercer à tout moment :",
    en: 'Under the GDPR, you have the right to access, rectify, erase, restrict, object to and port your data. You can exercise these rights at any time:',
  },
  kv_email: { fr: 'E-mail', en: 'Email' },
  kv_post: { fr: 'Courrier', en: 'Mail' },
  kv_cnil: { fr: 'Réclamation', en: 'Complaint' },
  kv_cnil_v: {
    fr: 'Vous pouvez saisir la CNIL (www.cnil.fr)',
    en: 'You may refer the matter to the CNIL (www.cnil.fr)',
  },

  cta_t: {
    fr: 'Une demande concernant vos données ?',
    en: 'A request about your data?',
  },
  cta_p: {
    fr: 'Nous traitons votre demande dans les meilleurs délais.',
    en: 'We handle your request as soon as possible.',
  },
  cta_btn: { fr: 'Nous contacter', en: 'Contact us' },
};

export default function ConfidentialitePage() {
  return (
    <div className="g-home">
      <LangProvider titles={TITLE}>
        <Header />
        <Body />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Body() {
  const t = useT(TX);
  return (
    <main>
      <div className="g-pagehero">
        <div className="g-breadcrumb">
          <Link href="/">{t('bc_home')}</Link> <span>/</span>{' '}
          <span>{t('bc_self')}</span>
        </div>
        <h1>{t('page_title')}</h1>
        <p className="g-page-sub">{t('page_sub')}</p>
      </div>

      <div className="g-prose">
        <section>
          <h2>
            <span className="g-num">1.</span> {t('s1_t')}
          </h2>
          <p>
            {t('s1_p_a')}
            <strong>{t('s1_p_strong')}</strong>
            {t('s1_p_b')}<Email user="contact" />{t('s1_p_c')}
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">2.</span> {t('s2_t')}
          </h2>
          <p>{t('s2_p')}</p>
          <ul>
            <li>
              <strong>{t('s2_l1_strong')}</strong>
              {t('s2_l1_rest')}
            </li>
            <li>
              <strong>{t('s2_l2_strong')}</strong>
              {t('s2_l2_rest')}
            </li>
            <li>
              <strong>{t('s2_l3_strong')}</strong>
              {t('s2_l3_rest')}
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <span className="g-num">3.</span> {t('s3_t')}
          </h2>
          <p>
            {t('s3_p_a')}
            <strong>{t('s3_p_strong1')}</strong>
            {t('s3_p_mid')}
            <strong>{t('s3_p_strong2')}</strong>
            {t('s3_p_b')}
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">4.</span> {t('s4_t')}
          </h2>
          <p>
            {t('s4_p_a')}
            <strong>{t('s4_p_strong')}</strong>
            {t('s4_p_b')}
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">5.</span> {t('s5_t')}
          </h2>
          <p>
            {t('s5_p_a')}
            <strong>{t('s5_p_strong')}</strong>
            {t('s5_p_b')}
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">6.</span> {t('s6_t')}
          </h2>
          <p>{t('s6_p')}</p>
        </section>

        <section>
          <h2>
            <span className="g-num">7.</span> {t('s7_t')}
          </h2>
          <p>{t('s7_p')}</p>
          <dl className="g-kv">
            <dt>{t('kv_email')}</dt>
            <dd><Email user="contact" /></dd>
            <dt>{t('kv_post')}</dt>
            <dd>Alatere Web SAS — 9 Bd Albert 1er, 06600 Antibes</dd>
            <dt>{t('kv_cnil')}</dt>
            <dd>{t('kv_cnil_v')}</dd>
          </dl>
        </section>
      </div>

      <div className="g-pagecta">
        <div className="g-pagecta__inner">
          <div>
            <h2>{t('cta_t')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <Link href="/contact" className="g-btn g-btn--light g-btn--lg">
            {t('cta_btn')} <span className="g-arrow">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
