'use client';

/** Mentions légales — page prose (handoff Grommet, sans accent). */

import Link from 'next/link';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Email } from '@/components/grommet/Email';

const TITLE = {
  fr: 'Mentions légales — Alatere Web',
  en: 'Legal notice — Alatere Web',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_self: { fr: 'Mentions légales', en: 'Legal notice' },
  page_title: { fr: 'Mentions légales', en: 'Legal notice' },
  page_sub: {
    fr: "Informations légales relatives au site alatere-web.com et à son éditeur.",
    en: 'Legal information about the alatere-web.com website and its publisher.',
  },

  s1_t: { fr: 'Éditeur du site', en: 'Site publisher' },
  s1_p_a: { fr: 'Le site ', en: 'The website ' },
  s1_p_b: { fr: ' est édité par :', en: ' is published by:' },
  kv_company: { fr: 'Société', en: 'Company' },
  kv_form: { fr: 'Forme', en: 'Legal form' },
  kv_form_v: {
    fr: 'Société par actions simplifiée (SAS)',
    en: 'Simplified joint-stock company (SAS)',
  },
  kv_addr: { fr: 'Siège social', en: 'Registered office' },
  kv_country: { fr: 'France', en: 'France' },
  kv_siret: { fr: 'SIRET', en: 'SIRET' },
  kv_rcs: { fr: 'RCS', en: 'Trade register' },
  kv_rcs_v: { fr: 'Antibes', en: 'Antibes (France)' },
  kv_tva: { fr: 'N° TVA', en: 'VAT number' },
  kv_contact: { fr: 'Contact', en: 'Contact' },
  s1_note: {
    fr: "Les informations marquées « XX » sont à compléter avec les données officielles définitives.",
    en: 'Items marked “XX” are to be completed with the final official data.',
  },

  s2_t: { fr: 'Direction de la publication', en: 'Publication management' },
  s2_p_a: {
    fr: "Le directeur de la publication est le représentant légal d'Alatere Web SAS, ",
    en: 'The publication director is the legal representative of Alatere Web SAS, ',
  },
  s2_p_strong: { fr: 'M. Jean-Gérard Anfossi', en: 'Mr Jean-Gérard Anfossi' },
  s2_p_b: {
    fr: ', en sa qualité de président.',
    en: ', as president.',
  },

  s3_t: { fr: 'Hébergement', en: 'Hosting' },
  s3_p_a: {
    fr: "Le site est hébergé par un prestataire situé dans l'Union européenne. Les coordonnées complètes de l'hébergeur (raison sociale, adresse, téléphone) sont disponibles sur simple demande à ",
    en: "The site is hosted by a provider located within the European Union. The host's full details (company name, address, phone) are available on request at ",
  },
  s3_p_b: {
    fr: '.',
    en: '.',
  },

  s4_t: { fr: 'Propriété intellectuelle', en: 'Intellectual property' },
  s4_p1: {
    fr: "L'ensemble des éléments figurant sur le site (textes, logos « Alatere », marques ecoM, forMa, doMo, coWo, visuels, mise en page) est protégé par le droit de la propriété intellectuelle et reste la propriété exclusive d'Alatere Web SAS, sauf mention contraire.",
    en: 'All elements on the site (texts, “Alatere” logos, the ecoM, forMa, doMo, coWo marks, visuals, layout) are protected by intellectual property law and remain the exclusive property of Alatere Web SAS, unless stated otherwise.',
  },
  s4_p2: {
    fr: "Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.",
    en: 'Any reproduction, representation or distribution, in whole or in part, without prior written authorization, is prohibited and would constitute infringement punishable under the Intellectual Property Code.',
  },

  s5_t: { fr: 'Données personnelles', en: 'Personal data' },
  s5_p_a: {
    fr: 'Le traitement des données personnelles collectées via les formulaires du site est décrit dans notre ',
    en: "The processing of personal data collected via the site's forms is described in our ",
  },
  s5_p_link: {
    fr: 'politique de confidentialité',
    en: 'privacy policy',
  },
  s5_p_b: {
    fr: ', conforme au Règlement général sur la protection des données (RGPD).',
    en: ', compliant with the General Data Protection Regulation (GDPR).',
  },

  s6_t: { fr: 'Activité de formation', en: 'Training activity' },
  s6_p_a: {
    fr: "Au titre de son activité Alatere forMa, Alatere Web SAS est enregistrée comme organisme de formation (déclaration d'activité n° XXXXXXXX auprès de la préfecture de région) et certifiée ",
    en: 'For its Alatere forMa activity, Alatere Web SAS is registered as a training provider (activity declaration no. XXXXXXXX with the regional prefecture) and ',
  },
  s6_p_strong: { fr: 'Qualiopi', en: 'Qualiopi' },
  s6_p_b: {
    fr: " au titre des actions de formation. Cet enregistrement ne vaut pas agrément de l'État.",
    en: '-certified for training actions. This registration does not constitute state approval.',
  },

  s7_t: { fr: 'Liens hypertextes', en: 'Hyperlinks' },
  s7_p: {
    fr: "Le site peut contenir des liens vers des sites tiers (notamment repro-tableaux.com, copia-di-arte.com et le catalogue de formations). Alatere Web SAS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
    en: 'The site may contain links to third-party sites (notably repro-tableaux.com, copia-di-arte.com and the training catalog). Alatere Web SAS has no control over these sites and disclaims any responsibility for their content.',
  },

  cta_t: {
    fr: 'Une question juridique ou administrative ?',
    en: 'A legal or administrative question?',
  },
  cta_p: {
    fr: 'Notre équipe vous répond sous 48 heures.',
    en: 'Our team replies within 48 hours.',
  },
  cta_btn: { fr: 'Nous contacter', en: 'Contact us' },
};

export default function MentionsPage() {
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
            <strong>alatere-web.com</strong>
            {t('s1_p_b')}
          </p>
          <dl className="g-kv">
            <dt>{t('kv_company')}</dt>
            <dd>Alatere Web SAS</dd>
            <dt>{t('kv_form')}</dt>
            <dd>{t('kv_form_v')}</dd>
            <dt>{t('kv_addr')}</dt>
            <dd>
              9 Boulevard Albert 1er, 06600 Antibes, <span>{t('kv_country')}</span>
            </dd>
            <dt>{t('kv_siret')}</dt>
            <dd>443 421 334 00030</dd>
            <dt>{t('kv_rcs')}</dt>
            <dd>{t('kv_rcs_v')}</dd>
            <dt>{t('kv_tva')}</dt>
            <dd>FR XX 443 421 334</dd>
            <dt>{t('kv_contact')}</dt>
            <dd>07 61 56 45 56 · <Email user="contact" /></dd>
          </dl>
          <p className="g-updated">{t('s1_note')}</p>
        </section>

        <section>
          <h2>
            <span className="g-num">2.</span> {t('s2_t')}
          </h2>
          <p>
            {t('s2_p_a')}
            <strong>{t('s2_p_strong')}</strong>
            {t('s2_p_b')}
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">3.</span> {t('s3_t')}
          </h2>
          <p>{t('s3_p_a')}<Email user="contact" />{t('s3_p_b')}</p>
        </section>

        <section>
          <h2>
            <span className="g-num">4.</span> {t('s4_t')}
          </h2>
          <p>{t('s4_p1')}</p>
          <p>{t('s4_p2')}</p>
        </section>

        <section>
          <h2>
            <span className="g-num">5.</span> {t('s5_t')}
          </h2>
          <p>
            {t('s5_p_a')}
            <Link className="g-inline" href="/confidentialite">
              {t('s5_p_link')}
            </Link>
            {t('s5_p_b')}
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">6.</span> {t('s6_t')}
          </h2>
          <p>
            {t('s6_p_a')}
            <strong>{t('s6_p_strong')}</strong>
            {t('s6_p_b')}
          </p>
        </section>

        <section>
          <h2>
            <span className="g-num">7.</span> {t('s7_t')}
          </h2>
          <p>{t('s7_p')}</p>
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
