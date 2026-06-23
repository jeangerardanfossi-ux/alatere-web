'use client';

/**
 * Home « Grommet » — implémentation fidèle du handoff Claude Design
 * (« Home Alatere (Grommet).html »). CSS porté verbatim (app/grommet-home.css) ;
 * header / footer / langue / icônes mutualisés dans components/grommet/*.
 */

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { LangProvider, useLang, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon, ImageSlot } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';
import { BrandSuffix } from '@/components/grommet/BrandName';
import { useAntispam, Honeypot, RecaptchaNotice } from '@/components/grommet/antispam';

const BADGE = '/alatere-web-badge.webp';
const CATALOG = 'https://alatere-web.catalogueformpro.com';

const TITLE = {
  fr: "Alatere Web — Agence, formation Qualiopi & centre d'affaires à Antibes",
  en: 'Alatere Web — Agency, Qualiopi training & business center in Antibes',
};

const TX: Dict = {
  hero_eyebrow: { fr: 'Antibes · depuis 2002', en: 'Antibes · since 2002' },
  hero_title: {
    fr: "E-commerce, formations et centre d'affaires",
    en: 'E-commerce, training and business center',
  },
  hero_lead: {
    fr: "Au cœur d'Antibes, nous accompagnons dirigeants de PME et entrepreneurs avec un service sur mesure et un nombre limité de clients. Quatre activités complémentaires, un seul interlocuteur.",
    en: 'In the heart of Antibes, we support SME leaders and entrepreneurs with a tailored service and a limited number of clients. Four complementary activities, a single point of contact.',
  },
  hero_cta1: { fr: 'Découvrir nos activités', en: 'Explore our activities' },
  hero_cta2: { fr: 'Nous rencontrer', en: 'Meet us' },
  bento_eyebrow: { fr: 'Nos activités', en: 'Our activities' },
  bento_title: { fr: 'Quatre métiers, une même exigence.', en: 'Four businesses, one standard.' },
  bento_link: { fr: 'Un seul interlocuteur →', en: 'A single point of contact →' },
  ecom_tag: { fr: 'E-commerce', en: 'E-commerce' },
  ecom_activity: {
    fr: 'Sites marchands opérés en propre · depuis 2003',
    en: 'Online stores we run ourselves · since 2003',
  },
  ecom_copy: {
    fr: "Vingt ans à concevoir, opérer et référencer nos propres boutiques d'art — notre meilleure démonstration de savoir-faire SEO, SEA et opérations.",
    en: 'Twenty years designing, running and ranking our own art stores — our best proof of SEO, SEA and operations expertise.',
  },
  ecom_meta2: { fr: 'UE · 4 langues', en: 'EU · 4 languages' },
  ecom_link: { fr: 'Découvrir le savoir-faire →', en: 'Explore the expertise →' },
  forma_tag: { fr: 'Certifié Qualiopi', en: 'Qualiopi-certified' },
  forma_activity: {
    fr: 'Organisme de formation professionnelle',
    en: 'Professional training provider',
  },
  forma_copy: {
    fr: 'Cinq grands domaines de compétences, parcours sur mesure et financement OPCO. Programmes détaillés sur notre catalogue dédié.',
    en: 'Five major fields of expertise, tailored programs and OPCO funding. Detailed programs on our dedicated catalog.',
  },
  forma_d1: { fr: 'Webmarketing', en: 'Web marketing' },
  forma_d2: { fr: 'Intelligence artificielle', en: 'Artificial intelligence' },
  forma_d3: { fr: 'Langues', en: 'Languages' },
  forma_d4: { fr: 'Communication digitale', en: 'Digital communication' },
  forma_d5: { fr: 'Immobilier', en: 'Real estate' },
  forma_d6: { fr: 'Bureautique', en: 'Office software' },
  forma_photo: { fr: 'Photo paysage (formation)', en: 'Landscape photo (training)' },
  forma_link: { fr: 'Voir le catalogue ↗', en: 'View the catalog ↗' },
  domo_tag: { fr: 'Agréé préfecture', en: 'Prefecture-approved' },
  domo_activity: { fr: "Domiciliation d'entreprise à Antibes", en: 'Business address in Antibes' },
  domo_copy: {
    fr: 'Une adresse de prestige au 9 Boulevard Albert 1er pour votre siège social. Réception du courrier, scan, réexpédition — idéal SIRET et transfert de siège.',
    en: 'A prestigious address at 9 Boulevard Albert 1er for your registered office. Mail handling, scanning, forwarding — ideal for SIRET registration and head-office transfer.',
  },
  domo_p0: { fr: 'Offre Dropbox · boîte aux lettres', en: 'Dropbox plan · mailbox' },
  domo_p1: { fr: 'Offre Headquarters · siège social', en: 'Headquarters plan · registered office' },
  domo_p2: { fr: 'Offre Forward · scan & réexpédition', en: 'Forward plan · scan & forwarding' },
  domo_p3: { fr: 'Frais de dossier · une fois', en: 'Setup fee · one-time' },
  domo_photo: { fr: 'Photo carrée', en: 'Square photo' },
  domo_link: { fr: 'Voir les formules →', en: 'View the plans →' },
  cowo_tag: { fr: 'Communauté', en: 'Community' },
  cowo_activity: { fr: 'Espace de coworking à Antibes', en: 'Coworking space in Antibes' },
  cowo_copy: {
    fr: "Postes nomades, bureaux fermés, salles de réunion. Café, fibre et événements business mensuels — à deux pas du port Vauban. Venez nous rendre visite au 9 boulevard Albert 1er à Antibes.",
    en: 'Hot desks, private offices, meeting rooms. Coffee, fiber and monthly business events — steps from Port Vauban. Come visit us at 9 Boulevard Albert 1er in Antibes.',
  },
  cowo_photo: { fr: "Photo de l'espace de coworking", en: 'Photo of the coworking space' },
  cowo_link: { fr: 'Réserver une visite →', en: 'Book a visit →' },
  mani_eyebrow: { fr: 'Notre façon de travailler', en: 'The way we work' },
  mani_title: {
    fr: 'Un service sur mesure, pour un nombre limité de clients.',
    en: 'A tailored service, for a limited number of clients.',
  },
  mani_p1t: { fr: 'Accompagnement humain', en: 'Human support' },
  mani_p1d: {
    fr: "Un interlocuteur dédié qui connaît votre dossier, pas un centre d'appels.",
    en: 'A dedicated contact who knows your case, not a call center.',
  },
  mani_p2t: { fr: 'Écosystème complet', en: 'Complete ecosystem' },
  mani_p2d: {
    fr: 'Agence, formation, domiciliation et coworking — tout au même endroit.',
    en: 'Agency, training, business address and coworking — all in one place.',
  },
  mani_p3t: { fr: 'Ancrage local', en: 'Local roots' },
  mani_p3d: {
    fr: 'Implantés à Antibes, engagés dans le tissu économique et associatif.',
    en: 'Based in Antibes, committed to the local economy and community.',
  },
  mani_p4t: { fr: 'Expertise éprouvée', en: 'Proven expertise' },
  mani_p4d: {
    fr: 'Vingt ans à opérer nos propres sites e-commerce, au bénéfice de nos clients.',
    en: "Twenty years running our own e-commerce sites, for our clients' benefit.",
  },
  contact_eyebrow: { fr: 'Contact', en: 'Contact' },
  contact_title: { fr: 'Parlons de votre projet.', en: "Let's talk about your project." },
  contact_lead: {
    fr: 'Webmarketing, formation, domiciliation ou coworking : dites-nous votre besoin, nous revenons vers vous rapidement (48h max).',
    en: "Web marketing, training, business address or coworking: tell us what you need, we'll get back to you quickly (within 48h).",
  },
  form_name: { fr: 'Nom', en: 'Name' },
  form_name_ph: { fr: 'Votre nom', en: 'Your name' },
  form_company: { fr: 'Société', en: 'Company' },
  form_company_ph: { fr: 'Votre société', en: 'Your company' },
  form_email: { fr: 'E-mail', en: 'Email' },
  form_subject: { fr: 'Sujet', en: 'Subject' },
  form_opt1: { fr: 'E-commerce — Alatere ecoM', en: 'E-commerce — Alatere ecoM' },
  form_opt2: { fr: 'Formation — Alatere forMa', en: 'Training — Alatere forMa' },
  form_opt3: { fr: 'Domiciliation — Alatere doMo', en: 'Business address — Alatere doMo' },
  form_opt4: { fr: 'Coworking — Alatere coWo', en: 'Coworking — Alatere coWo' },
  form_opt_todo: {
    fr: 'Secrétariat & conciergerie — Alatere toDo',
    en: 'Secretariat & concierge — Alatere toDo',
  },
  form_opt5: { fr: 'Autre demande', en: 'Other request' },
  form_message: { fr: 'Message', en: 'Message' },
  form_message_ph: {
    fr: 'Décrivez votre besoin en quelques lignes',
    en: 'Describe your need in a few lines',
  },
  form_send: { fr: 'Envoyer ma demande', en: 'Send my request' },
  form_consent: {
    fr: "J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la politique de confidentialité.",
    en: 'I agree that my data may be used to process my request, in line with the privacy policy.',
  },
  form_ok: { fr: 'Merci, votre demande est partie ✔', en: 'Thanks, your request has been sent ✔' },
  form_ok_sub: {
    fr: 'Nous revenons vers vous sous 48 heures à l’adresse indiquée.',
    en: "We'll get back to you within 48 hours at the address provided.",
  },
  form_err_a: {
    fr: 'Une erreur est survenue. Réessayez ou écrivez-nous à ',
    en: 'Something went wrong. Try again or email us at ',
  },
  form_err_b: {
    fr: '.',
    en: '.',
  },
  form_sending: { fr: 'Envoi…', en: 'Sending…' },
  form_again: { fr: 'Envoyer une autre demande', en: 'Send another request' },

  faq_eyebrow: { fr: 'FAQ', en: 'FAQ' },
  faq_title: { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
  faq1_q: { fr: "Qu'est-ce qu'Alatere Web ?", en: 'What is Alatere Web?' },
  faq1_a: {
    fr: "Alatere Web est une entreprise familiale installée à Antibes depuis 2002. Elle réunit quatre métiers complémentaires — e-commerce (Alatere ecoM), formation certifiée Qualiopi (Alatere forMa), domiciliation d'entreprise (Alatere doMo) et coworking (Alatere coWo) — avec un seul interlocuteur.",
    en: 'Alatere Web is a family business based in Antibes since 2002. It brings together four complementary services — e-commerce (Alatere ecoM), Qualiopi-certified training (Alatere forMa), business address (Alatere doMo) and coworking (Alatere coWo) — with a single point of contact.',
  },
  faq2_q: { fr: 'Où se situe Alatere Web ?', en: 'Where is Alatere Web located?' },
  faq2_a: {
    fr: 'Au 9 Boulevard Albert 1er, 06600 Antibes, à deux pas du port Vauban et à environ dix minutes à pied (700 m) de la gare SNCF.',
    en: 'At 9 Boulevard Albert 1er, 06600 Antibes, steps from Port Vauban and about a ten-minute walk (700 m) from the SNCF station.',
  },
  faq3_q: {
    fr: 'Alatere forMa est-il un organisme de formation certifié Qualiopi ?',
    en: 'Is Alatere forMa a Qualiopi-certified training provider?',
  },
  faq3_a: {
    fr: "Oui. L'organisme de formation est Alatere Web SAS, dont Alatere forMa est la marque : il est certifié Qualiopi et enregistré sous le numéro 93.06.07588.06. Les formations peuvent être financées par votre OPCO ou, pour les travailleurs non-salariés, par votre FAF (Fonds d'Assurance Formation).",
    en: 'Yes. The training provider is Alatere Web SAS, of which Alatere forMa is the brand: it is Qualiopi-certified and registered under number 93.06.07588.06. Courses can be funded by your OPCO or, for self-employed workers, by your FAF (training insurance fund).',
  },
  faq4_q: {
    fr: "Combien coûte la domiciliation d'entreprise à Antibes ?",
    en: 'How much does business domiciliation in Antibes cost?',
  },
  faq4_a: {
    fr: "La domiciliation commence à 25 € HT par mois (offre Dropbox, boîte aux lettres), 30 € HT par mois (offre Headquarters, adresse de siège social) et 50 € HT par mois (offre Forward, numérisation et réexpédition incluses), avec 50 € HT de frais de dossier réglés une seule fois à l'ouverture. L'adresse est agréée par la préfecture.",
    en: 'Domiciliation starts at €25 excl. VAT per month (Dropbox plan, mailbox only), €30 excl. VAT per month (Headquarters plan, registered-office address) and €50 excl. VAT per month (Forward plan, scanning and forwarding included), with a €50 excl. VAT setup fee paid once when the file is opened. The address is prefecture-approved.',
  },
  faq5_q: { fr: 'Comment contacter Alatere Web ?', en: 'How do I contact Alatere Web?' },
  faq5_a: {
    fr: 'Par le formulaire de contact du site ou au 07 61 56 45 56. Nous répondons sous 48 heures.',
    en: 'Through the website contact form or at +33 7 61 56 45 56. We reply within 48 hours.',
  },
};

/* Déclinaison lettre-par-lettre des suffixes de marque (couleurs du logo). */
const BRAND: Record<string, [string, string][]> = {
  ecom: [['e', 'lg-navy'], ['c', 'lg-teal'], ['o', 'lg-gold'], ['M', 'lg-clay']],
  forma: [['f', 'lg-gold'], ['o', 'lg-clay'], ['r', 'lg-navy'], ['M', 'lg-teal'], ['a', 'lg-green']],
  domo: [['d', 'lg-teal'], ['o', 'lg-teal'], ['M', 'lg-green'], ['o', 'lg-gold']],
  cowo: [['c', 'lg-gold'], ['o', 'lg-green'], ['W', 'lg-navy'], ['o', 'lg-clay']],
};

const BRAND_HREF: Record<string, string> = {
  ecom: '/alatere-ecom',
  forma: '/alatere-forma',
  domo: '/alatere-domo',
  cowo: '/alatere-cowo',
};

function BrandName({ k }: { k: keyof typeof BRAND }) {
  return (
    <h3 className="g-card__brandname">
      <Link href={BRAND_HREF[k]} className="g-card__brandlink">
        Alatere{' '}
        <span className="g-subword">
          {BRAND[k].map(([ch, c], i) => (
            <span key={i} className={c}>
              {ch}
            </span>
          ))}
        </span>
      </Link>
    </h3>
  );
}

export default function HomeGrommet() {
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
    <main id="top">
      {/* ===================== HERO ===================== */}
      <section className="g-hero">
        <div>
          <span className="g-label">
            <span className="g-tag g-tag--ok" style={{ padding: '2px 10px' }}>
              {t('hero_eyebrow')}
            </span>
          </span>
          <h1 className="g-h1">{t('hero_title')}</h1>
          <p className="g-lead">{t('hero_lead')}</p>
          <div className="g-hero__cta">
            <a href="#bento" className="g-btn g-btn--primary g-btn--lg">
              <span>{t('hero_cta1')}</span> <span className="g-arrow">→</span>
            </a>
            <a href="#contact" className="g-btn g-btn--secondary g-btn--lg">
              {t('hero_cta2')}
            </a>
          </div>
        </div>
        <div className="g-hero__badge">
          <div className="g-hero__halo" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BADGE}
            alt="Alatere Web"
            width={800}
            height={800}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="g-hero__chips">
            <Link className="g-tag g-tag--pole" href="/alatere-ecom">
              <BrandSuffix pole="ecom" />
            </Link>
            <Link className="g-tag g-tag--pole" href="/alatere-forma">
              <BrandSuffix pole="forma" />
            </Link>
            <Link className="g-tag g-tag--pole" href="/alatere-domo">
              <BrandSuffix pole="domo" />
            </Link>
            <Link className="g-tag g-tag--pole" href="/alatere-cowo">
              <BrandSuffix pole="cowo" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== BENTO ===================== */}
      <div className="g-wrap" id="bento">
        <div className="g-sechead">
          <div>
            <span className="g-label">
              <span className="g-tag g-tag--ok" style={{ padding: '2px 10px' }}>
                {t('bento_eyebrow')}
              </span>
            </span>
            <h2 className="g-h2">{t('bento_title')}</h2>
          </div>
          <a href="#contact" className="g-anchor">
            {t('bento_link')}
          </a>
        </div>

        <div className="g-bento g-bento--quad">
          {/* ECOM */}
          <section className="g-card g-card--brand" id="ecom">
            <div className="g-card__header">
              <span className="g-card__hash">#savoir-faire-ecommerce</span>
              <span className="g-tag g-tag--brand">{t('ecom_tag')}</span>
            </div>
            <div className="g-card__body">
              <BrandName k="ecom" />
              <p className="g-card__activity">{t('ecom_activity')}</p>
              <p className="g-card__copy">{t('ecom_copy')}</p>
              <div className="g-shots">
                <div className="g-shot">
                  <ImageSlot variant="shot" cap="repro-tableaux.com" src="/photos/ecom-repro.webp" />
                  <div className="g-shot__row">
                    <span className="g-shot__url">repro-tableaux.com</span>
                    <span className="g-shot__meta">FR</span>
                  </div>
                </div>
                <div className="g-shot">
                  <ImageSlot variant="shot" cap="copia-di-arte.com" src="/photos/ecom-copia.webp" />
                  <div className="g-shot__row">
                    <span className="g-shot__url">copia-di-arte.com</span>
                    <span className="g-shot__meta">{t('ecom_meta2')}</span>
                  </div>
                </div>
              </div>
              <div className="g-card__footer">
                <Link href="/alatere-ecom" className="g-anchor" style={{ color: 'var(--brand)' }}>
                  {t('ecom_link')}
                </Link>
              </div>
            </div>
          </section>

          {/* FORMA */}
          <section className="g-card g-card--gold" id="forma">
            <div className="g-card__header">
              <span className="g-card__hash">#formations</span>
              <span className="g-tag g-tag--gold">{t('forma_tag')}</span>
            </div>
            <div className="g-card__body">
              <BrandName k="forma" />
              <p className="g-card__activity">{t('forma_activity')}</p>
              <p className="g-card__copy">{t('forma_copy')}</p>
              <ul className="g-list g-list--2col">
                <li>
                  <Icon name="bar-chart-3" /> <span>{t('forma_d1')}</span>
                </li>
                <li>
                  <Icon name="sparkles" /> <span>{t('forma_d2')}</span>
                </li>
                <li>
                  <Icon name="languages" /> <span>{t('forma_d3')}</span>
                </li>
                <li>
                  <Icon name="megaphone" /> <span>{t('forma_d4')}</span>
                </li>
                <li>
                  <Icon name="building-2" /> <span>{t('forma_d5')}</span>
                </li>
                <li>
                  <Icon name="file-text" /> <span>{t('forma_d6')}</span>
                </li>
              </ul>
              <ImageSlot
                variant="land2"
                cap={t('forma_photo')}
                src="/photos/forma.webp"
                objectPosition="50% 15%"
              />
              <div className="g-card__footer">
                <a
                  href={CATALOG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="g-anchor"
                  style={{ color: 'var(--gold-dark)' }}
                >
                  {t('forma_link')}
                </a>
              </div>
            </div>
          </section>

          {/* DOMO */}
          <section className="g-card g-card--green" id="domo">
            <div className="g-card__header">
              <span className="g-card__hash">#domiciliation-antibes</span>
              <span className="g-tag g-tag--green">{t('domo_tag')}</span>
            </div>
            <div className="g-card__body">
              <BrandName k="domo" />
              <p className="g-card__activity">{t('domo_activity')}</p>
              <p className="g-card__copy">{t('domo_copy')}</p>
              <div className="g-split g-split--domo">
                <div className="g-prices g-prices--col">
                  <div className="g-price">
                    <strong>
                      25 € HT <span className="g-price__per">/ mois</span>
                    </strong>
                    <span>{t('domo_p0')}</span>
                  </div>
                  <div className="g-price">
                    <strong>
                      30 € HT <span className="g-price__per">/ mois</span>
                    </strong>
                    <span>{t('domo_p1')}</span>
                  </div>
                  <div className="g-price is-featured">
                    <strong>
                      50 € HT <span className="g-price__per">/ mois</span>
                    </strong>
                    <span>{t('domo_p2')}</span>
                  </div>
                  <div className="g-price">
                    <strong>50 € HT</strong>
                    <span>{t('domo_p3')}</span>
                  </div>
                </div>
                <ImageSlot variant="grow" cap={t('domo_photo')} src="/photos/domo.webp" />
              </div>
              <div className="g-card__footer">
                <Link href="/alatere-domo" className="g-anchor" style={{ color: 'var(--green-dark)' }}>
                  {t('domo_link')}
                </Link>
              </div>
            </div>
          </section>

          {/* COWO */}
          <section className="g-card g-card--clay" id="cowo">
            <div className="g-card__header">
              <span className="g-card__hash">#coworking-antibes</span>
              <span className="g-tag g-tag--clay">{t('cowo_tag')}</span>
            </div>
            <div className="g-card__body">
              <BrandName k="cowo" />
              <p className="g-card__activity">{t('cowo_activity')}</p>
              <p className="g-card__copy">{t('cowo_copy')}</p>
              <ImageSlot variant="photo" cap={t('cowo_photo')} src="/photos/cowo.webp" />
              <div className="g-card__footer">
                <a href="#contact" className="g-anchor" style={{ color: 'var(--clay-dark)' }}>
                  {t('cowo_link')}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ===================== MANIFESTO ===================== */}
      <section className="g-manifesto" id="manifesto">
        <div className="g-manifesto__pattern" />
        <div className="g-manifesto__inner">
          <span className="g-label" style={{ color: 'var(--gold)' }}>
            {t('mani_eyebrow')}
          </span>
          <h2 className="g-h2" style={{ marginTop: 8 }}>
            {t('mani_title')}
          </h2>
          <div className="g-pillars">
            <div>
              <Icon name="hand-heart" />
              <h4>{t('mani_p1t')}</h4>
              <p>{t('mani_p1d')}</p>
            </div>
            <div>
              <Icon name="layers" />
              <h4>{t('mani_p2t')}</h4>
              <p>{t('mani_p2d')}</p>
            </div>
            <div>
              <Icon name="map-pin" />
              <h4>{t('mani_p3t')}</h4>
              <p>{t('mani_p3d')}</p>
            </div>
            <div>
              <Icon name="trending-up" />
              <h4>{t('mani_p4t')}</h4>
              <p>{t('mani_p4d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="g-wrap g-faqwrap" id="faq">
        <div className="g-sechead">
          <div>
            <span className="g-label">
              <span className="g-tag g-tag--ok" style={{ padding: '2px 10px' }}>
                {t('faq_eyebrow')}
              </span>
            </span>
            <h2 className="g-h2">{t('faq_title')}</h2>
          </div>
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

      {/* ===================== CONTACT ===================== */}
      <ContactSection />
    </main>
  );
}

type Status = 'idle' | 'sending' | 'success' | 'error';

function ContactSection() {
  const { lang } = useLang();
  const t = useT(TX);
  const { prime, getToken, elapsedMs } = useAntispam();
  const [status, setStatus] = useState<Status>('idle');
  // [clé de pôle stable, clé de traduction du libellé]
  const subjects: [string, string][] = [
    ['ecom', 'form_opt1'],
    ['forma', 'form_opt2'],
    ['domo', 'form_opt3'],
    ['cowo', 'form_opt4'],
    ['todo', 'form_opt_todo'],
    ['autre', 'form_opt5'],
  ];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus('sending');
    try {
      const recaptcha = await getToken('contact_home');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: fd.get('nom'),
          societe: fd.get('societe'),
          email: fd.get('email'),
          sujet: fd.get('sujet'),
          message: fd.get('message'),
          consent: fd.get('consent') === 'on',
          lang,
          page: typeof window !== 'undefined' ? window.location.pathname : '/',
          website: fd.get('website'),
          elapsed: elapsedMs(),
          recaptcha,
        }),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="g-contact" id="contact">
      <div className="g-contact__card">
        <div>
          <span className="g-label">
            <span className="g-tag g-tag--ok" style={{ padding: '2px 10px' }}>
              {t('contact_eyebrow')}
            </span>
          </span>
          <h2 className="g-h2" style={{ marginTop: 12 }}>
            {t('contact_title')}
          </h2>
          <p className="g-lead" style={{ marginBottom: 0 }}>
            {t('contact_lead')}
          </p>
          <div className="g-contact__meta">
            <div>
              <Icon name="map-pin" /> 9 Boulevard Albert 1er, 06600 Antibes
            </div>
            <div>
              <Icon name="phone" /> 07 61 56 45 56
            </div>
            <div>
              <Icon name="mail" /> <Email user="contact" />
            </div>
          </div>
        </div>

        {status === 'success' ? (
          <div
            className="g-form"
            role="status"
            style={{
              justifyContent: 'center',
              background: 'var(--green-soft)',
              borderRadius: 12,
              padding: 24,
              gap: 8,
            }}
          >
            <strong style={{ color: 'var(--green-dark)', fontSize: 20 }}>{t('form_ok')}</strong>
            <span style={{ color: 'var(--dark-2)', fontSize: 15 }}>{t('form_ok_sub')}</span>
            <button
              type="button"
              className="g-btn g-btn--secondary g-btn--sm"
              style={{ alignSelf: 'flex-start', marginTop: 8 }}
              onClick={() => setStatus('idle')}
            >
              {t('form_again')}
            </button>
          </div>
        ) : (
          <form className="g-form" onSubmit={onSubmit} onFocusCapture={prime}>
            <Honeypot />
            <div className="row2">
              <label>
                <span>{t('form_name')}</span>{' '}
                <input type="text" name="nom" placeholder={t('form_name_ph')} required />
              </label>
              <label>
                <span>{t('form_company')}</span>{' '}
                <input type="text" name="societe" placeholder={t('form_company_ph')} />
              </label>
            </div>
            <label>
              <span>{t('form_email')}</span>{' '}
              <input type="email" name="email" placeholder="vous@exemple.com" required />
            </label>
            <label>
              <span>{t('form_subject')}</span>
              <select name="sujet" defaultValue="ecom">
                {subjects.map(([key, tkey]) => (
                  <option key={key} value={key}>
                    {t(tkey)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>{t('form_message')}</span>{' '}
              <textarea name="message" rows={3} placeholder={t('form_message_ph')} required />
            </label>
            <label
              style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8, fontWeight: 400 }}
            >
              <input type="checkbox" name="consent" required style={{ marginTop: 3 }} />
              <span style={{ fontSize: 12.5, color: 'var(--dark-2)', lineHeight: 1.4 }}>
                {t('form_consent')}
              </span>
            </label>
            {status === 'error' && (
              <span style={{ color: 'var(--clay-dark)', fontSize: 13, fontWeight: 600 }}>
                {t('form_err_a')}<Email user="contact" />{t('form_err_b')}
              </span>
            )}
            <button
              type="submit"
              className="g-btn g-btn--primary g-btn--lg"
              disabled={status === 'sending'}
            >
              <span>{status === 'sending' ? t('form_sending') : t('form_send')}</span>{' '}
              <span className="g-arrow">→</span>
            </button>
            <RecaptchaNotice lang={lang} />
          </form>
        )}
      </div>
    </section>
  );
}
