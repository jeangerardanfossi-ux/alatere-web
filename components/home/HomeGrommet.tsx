'use client';

/**
 * Home « Grommet » - implémentation fidèle du handoff Claude Design
 * (« Home Alatere (Grommet).html »). CSS porté verbatim (app/grommet-home.css) ;
 * header / footer / langue / icônes mutualisés dans components/grommet/*.
 */

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useLang, useReservations, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';
import { BrandChip, BrandTitle } from '@/components/grommet/BrandName';
import { CLIENT_LOGOS } from '@/lib/client-logos';
import { useAntispam, Honeypot, RecaptchaNotice } from '@/components/grommet/antispam';

const BADGE = '/alatere-web-badge.webp';

const TITLE = {
  fr: "Alatere Web - Agence, formation Qualiopi & centre d'affaires à Antibes",
  en: 'Alatere Web - Agency, Qualiopi training & business center in Antibes',
};

const TX: Dict = {
  hero_eyebrow: { fr: 'Fondée en 2002 · à Antibes depuis 2008', en: 'Founded 2002 · in Antibes since 2008' },
  hero_title: {
    fr: "E-commerce, formations et centre d'affaires",
    en: 'E-commerce, training and business center',
  },
  hero_lead: {
    fr: "Nous travaillons pour des dirigeants de PME et des entrepreneurs, avec un nombre limité de clients à la fois. La même personne suit votre dossier dans nos quatre activités.",
    en: 'We work for SME owners and entrepreneurs, with a limited number of clients at a time. The same person handles your file across all four of our activities.',
  },
  hero_cta1: { fr: 'Voir nos activités', en: 'See our activities' },
  hero_cta2: { fr: 'Nous rencontrer', en: 'Meet us' },
  hero_baseline: { fr: '9 boulevard Albert 1er, Antibes', en: '9 Boulevard Albert 1er, Antibes' },
  bento_eyebrow: { fr: 'ecoM · forMa · doMo · coWo', en: 'ecoM · forMa · doMo · coWo' },
  bento_title: { fr: 'Quatre activités sous le même toit, à Antibes.', en: 'Four activities under one roof in Antibes.' },
  bento_link: { fr: 'Nous écrire →', en: 'Write to us →' },
  ecom_tag: { fr: 'E-commerce', en: 'E-commerce' },
  ecom_activity: {
    fr: 'Sites marchands opérés en propre · depuis 2003',
    en: 'Online stores we run ourselves · since 2003',
  },
  ecom_copy: {
    fr: "Depuis 2003 nous concevons, exploitons et référençons nos propres boutiques d'art. Le SEO et la gestion vendus à nos clients tournent d'abord chez nous.",
    en: 'Since 2003 we have designed, run and ranked our own art stores. The SEO and operations we sell to clients run on our own sites first.',
  },
  ecom_k1: { fr: 'Boutiques en propre', en: 'Own online stores' },
  ecom_v1: { fr: '5', en: '5' },
  ecom_k2: { fr: 'Première boutique', en: 'First store' },
  ecom_v2: { fr: '2003', en: '2003' },
  ecom_k3: { fr: 'Marchés', en: 'Markets' },
  ecom_v3: { fr: 'France et UE', en: 'France & EU' },
  ecom_link: { fr: 'Voir le pôle e-commerce →', en: 'See the e-commerce page →' },
  ecom_alt: {
    fr: 'Illustration : travail sur la boutique repro-tableaux.com, entouré de reproductions encadrées',
    en: 'Illustration: working on the repro-tableaux.com store, surrounded by framed reproductions',
  },
  forma_tag: { fr: 'Certifié Qualiopi', en: 'Qualiopi-certified' },
  forma_activity: {
    fr: 'Organisme de formation professionnelle',
    en: 'Professional training provider',
  },
  forma_copy: {
    fr: 'Webmarketing, intelligence artificielle, langues, communication digitale, immobilier et bureautique. Chaque formation démarre par un positionnement.',
    en: 'Web marketing, artificial intelligence, languages, digital communication, real estate and office software. Each course starts with an assessment.',
  },
  forma_photo: { fr: 'Photo paysage (formation)', en: 'Landscape photo (training)' },
  forma_k1: { fr: 'Catalogue', en: 'Catalog' },
  forma_v1: { fr: '59 programmes', en: '59 programs' },
  forma_k2: { fr: 'Modalités', en: 'Formats' },
  forma_v2: { fr: 'Antibes ou à distance', en: 'Antibes or remote' },
  forma_k3: { fr: 'Financement', en: 'Funding' },
  forma_v3: { fr: 'OPCO ou FAF', en: 'OPCO or FAF' },
  forma_link: { fr: 'Découvrir notre organisme →', en: 'Discover our training provider →' },
  forma_alt: {
    fr: 'Illustration : une personne anime une session de formation devant un écran de statistiques',
    en: 'Illustration: someone leading a training session in front of a screen of charts',
  },
  domo_tag: { fr: 'Agréé préfecture', en: 'Prefecture-approved' },
  domo_activity: { fr: "Domiciliation d'entreprise à Antibes", en: 'Business address in Antibes' },
  domo_copy: {
    fr: 'Votre siège social au 9 Boulevard Albert 1er. Nous recevons, numérisons et réexpédions votre courrier. Tarifs mensuels HT, sans engagement.',
    en: 'Your registered office at 9 Boulevard Albert 1er. We receive, scan and forward your mail. Monthly prices excl. VAT, no commitment.',
  },
  domo_photo: { fr: 'Photo carrée', en: 'Square photo' },
  domo_k1: { fr: 'Boîte aux lettres', en: 'Mailbox' },
  domo_v1: { fr: '25 € / mois', en: '€25 / mo' },
  domo_k2: { fr: 'Siège social', en: 'Registered office' },
  domo_v2: { fr: '30 € / mois', en: '€30 / mo' },
  domo_k3: { fr: 'Scan et réexpédition', en: 'Scan & forwarding' },
  domo_v3: { fr: '50 € / mois', en: '€50 / mo' },
  domo_link: { fr: 'Voir les formules →', en: 'View the plans →' },
  domo_alt: {
    fr: 'Illustration : tri du courrier devant les boîtes aux lettres de la domiciliation',
    en: 'Illustration: sorting mail at the business-address letterboxes',
  },
  cowo_tag: { fr: 'Communauté', en: 'Community' },
  cowo_activity: { fr: 'Espace de coworking à Antibes', en: 'Coworking space in Antibes' },
  cowo_copy: {
    fr: 'Postes nomades, bureaux fermés et salles de réunion à deux pas du port Vauban, avec café, fibre et un événement business par mois. Tarifs TTC.',
    en: 'Hot desks, private offices and meeting rooms steps from Port Vauban, with coffee, fiber and a monthly business event. Prices incl. VAT.',
  },
  cowo_photo: { fr: "Photo de l'espace de coworking", en: 'Photo of the coworking space' },
  cowo_k1: { fr: 'Pass journée', en: 'Day pass' },
  cowo_v1: { fr: '30 €', en: '€30' },
  cowo_k2: { fr: 'Abonnement mensuel', en: 'Monthly membership' },
  cowo_v2: { fr: '360 €', en: '€360' },
  cowo_k3: { fr: 'Salle de réunion', en: 'Meeting room' },
  cowo_v3: { fr: '180 € / jour', en: '€180 / day' },
  cowo_link: { fr: 'Réserver un poste →', en: 'Book a desk →' },
  cowo_alt: {
    fr: "Illustration : plusieurs personnes au travail dans l'espace de coworking",
    en: 'Illustration: several people working in the coworking space',
  },
  clients_aria: { fr: 'Nos clients', en: 'Our clients' },
  clients_prev: { fr: 'Logos précédents', en: 'Previous logos' },
  clients_next: { fr: 'Logos suivants', en: 'Next logos' },
  mani_eyebrow: { fr: 'Iveta et Jean-Gérard Anfossi', en: 'Iveta and Jean-Gérard Anfossi' },
  mani_title: {
    fr: 'Nous suivons un nombre limité de clients.',
    en: 'We take on a limited number of clients.',
  },
  mani_p1t: { fr: 'Le même contact', en: 'The same contact' },
  mani_p1d: {
    fr: 'La personne qui vous répond connaît votre dossier.',
    en: 'The person who answers knows your file.',
  },
  mani_p2t: { fr: 'Une seule adresse', en: 'One address' },
  mani_p2d: {
    fr: 'Agence, formation, domiciliation et coworking au 9 boulevard Albert 1er.',
    en: 'Agency, training, business address and coworking at 9 Boulevard Albert 1er.',
  },
  mani_p3t: { fr: 'À Antibes depuis 2008', en: 'In Antibes since 2008' },
  mani_p3d: {
    fr: 'Nous participons à la vie économique et associative de la ville.',
    en: "We take part in the town's business and community life.",
  },
  mani_p4t: { fr: "Vingt ans d'e-commerce", en: 'Twenty years of e-commerce' },
  mani_p4d: {
    fr: 'Nous gérons nos propres boutiques en ligne depuis 2003. Nos clients profitent de ce que nous y apprenons.',
    en: 'We have run our own online stores since 2003. Our clients benefit from what we learn there.',
  },
  contact_eyebrow: { fr: 'Réponse sous 48 h', en: 'Reply within 48 hours' },
  contact_title: { fr: 'Nous contacter', en: 'Contact us' },
  contact_lead: {
    fr: 'Webmarketing, formation, domiciliation ou coworking : dites-nous ce dont vous avez besoin. Vous pouvez aussi appeler ou passer au bureau.',
    en: 'Web marketing, training, business address or coworking: tell us what you need. You can also call or come by the office.',
  },
  form_name: { fr: 'Nom', en: 'Name' },
  form_name_ph: { fr: 'Votre nom', en: 'Your name' },
  form_company: { fr: 'Société', en: 'Company' },
  form_company_ph: { fr: 'Votre société', en: 'Your company' },
  form_email: { fr: 'E-mail', en: 'Email' },
  form_subject: { fr: 'Sujet', en: 'Subject' },
  form_opt1: { fr: 'E-commerce - Alatere ecoM', en: 'E-commerce - Alatere ecoM' },
  form_opt2: { fr: 'Formation - Alatere forMa', en: 'Training - Alatere forMa' },
  form_opt3: { fr: 'Domiciliation - Alatere doMo', en: 'Business address - Alatere doMo' },
  form_opt4: { fr: 'Coworking - Alatere coWo', en: 'Coworking - Alatere coWo' },
  form_opt_todo: {
    fr: 'Secrétariat & conciergerie - Alatere toDo',
    en: 'Secretariat & concierge - Alatere toDo',
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
  form_ok: { fr: 'Merci, votre demande est partie.', en: 'Thanks, your request has been sent.' },
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
    fr: "Alatere Web est une entreprise familiale créée à Paris en 2002 et installée à Antibes depuis 2008. Elle réunit quatre métiers complémentaires - e-commerce (Alatere ecoM), formation certifiée Qualiopi (Alatere forMa), domiciliation d'entreprise (Alatere doMo) et coworking (Alatere coWo) - avec un seul interlocuteur.",
    en: 'Alatere Web is a family business founded in Paris in 2002 and based in Antibes since 2008. It brings together four complementary services - e-commerce (Alatere ecoM), Qualiopi-certified training (Alatere forMa), business address (Alatere doMo) and coworking (Alatere coWo) - with a single point of contact.',
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

/**
 * Bande de logos clients. Le défilement n'est plus automatique : il est
 * actionné par une flèche à chaque extrémité, qui pousse la bande d'environ
 * une largeur d'écran. Les flèches se désactivent en bout de course.
 */
function ClientStrip() {
  const t = useT(TX);
  const viewport = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 1);
      setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    // On surveille le conteneur (redimensionnement de la fenêtre) *et* son
    // contenu : la largeur du conteneur ne bouge pas quand les logos arrivent.
    const ro = new ResizeObserver(update);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, []);

  const nudge = (direction: 1 | -1) => {
    const el = viewport.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.max(240, el.clientWidth * 0.8) });
  };

  return (
    <section className="g-strip" aria-label={t('clients_aria')}>
      <button
        type="button"
        className="g-strip__arrow"
        onClick={() => nudge(-1)}
        aria-label={t('clients_prev')}
        disabled={atStart}
      >
        ←
      </button>
      <div className="g-strip__viewport" ref={viewport}>
        <ul className="g-strip__set">
          {CLIENT_LOGOS.map((logo) => (
            <li className="g-strip__item" key={logo.src}>
              {/* Vignette blanche : elle neutralise les fonds incrustés dans les
                  fichiers (blancs pour les uns, plaques pleines pour Laforêt et
                  MAV), comme le mur de logos de la page Réalisations. */}
              {logo.href ? (
                <a className="g-strip__cell" href={logo.href} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.name} loading="lazy" decoding="async" />
                </a>
              ) : (
                <span className="g-strip__cell">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.name} loading="lazy" decoding="async" />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="g-strip__arrow"
        onClick={() => nudge(1)}
        aria-label={t('clients_next')}
        disabled={atEnd}
      >
        →
      </button>
    </section>
  );
}

function Body() {
  const t = useT(TX);
  const resa = useReservations();

  /* Révélation des cartes à leur entrée dans l'écran (le volet sur
     l'illustration suit la même classe, cf. grommet-home.css). */
  useEffect(() => {
    const cards = document.querySelectorAll('.g-poles [data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);
  return (
    <main id="top">
      {/* ===================== HERO (immersif — photo salle floutée + voile navy) ===================== */}
      <section className="g-hero g-hero--immersive g-hero--salle">
        <div className="g-hero__bg" />
        <div className="g-hero__veil" />
        <div className="g-hero__inner">
          <div className="g-hero__copy">
            <span className="g-label" data-reveal>
              <span className="g-tag g-hero__eyebrow" style={{ padding: '3px 12px' }}>
                {t('hero_eyebrow')}
              </span>
            </span>
            <h1 className="g-h1">
              {(() => {
                const [first, ...rest] = t('hero_title').split(' ');
                return (
                  <>
                    <span className="g-nowrap">{first}</span> {rest.join(' ')}
                  </>
                );
              })()}
            </h1>
            <p className="g-lead" data-reveal data-delay="1">
              {t('hero_lead')}
            </p>
            <div className="g-hero__cta" data-reveal data-delay="2">
              <a href="#bento" className="g-btn g-btn--gold g-btn--lg">
                <span>{t('hero_cta1')}</span> <span className="g-arrow">→</span>
              </a>
              <a href="#contact" className="g-btn g-btn--ghost-light g-btn--lg">
                {t('hero_cta2')}
              </a>
            </div>
          </div>
          <div className="g-hero__badge" data-reveal data-delay="3">
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
            <p className="g-hero__baseline">{t('hero_baseline')}</p>
            <div className="g-hero__chips">
              <Link className="g-hero__chip" href="/alatere-ecom">
                <BrandChip pole="ecom" />
              </Link>
              <Link className="g-hero__chip" href="/alatere-forma">
                <BrandChip pole="forma" />
              </Link>
              <Link className="g-hero__chip" href="/alatere-domo">
                <BrandChip pole="domo" />
              </Link>
              <Link className="g-hero__chip" href="/alatere-cowo">
                <BrandChip pole="cowo" />
              </Link>
            </div>
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

        <div className="g-poles">
          {/* ECOM */}
          <article className="g-pole g-pole--brand" id="ecom" data-reveal>
            <div className="g-pole__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/home-ecom.webp"
                alt={t('ecom_alt')}
                width={753}
                height={497}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="g-pole__body">
              <span className="g-tag g-tag--brand">{t('ecom_tag')}</span>
              <h3 className="g-pole__title">
                <Link href="/alatere-ecom" className="g-card__brandlink">
                  <BrandTitle pole="ecom" />
                </Link>
              </h3>
              <p className="g-pole__activity">{t('ecom_activity')}</p>
              <p className="g-pole__copy">{t('ecom_copy')}</p>
              <ul className="g-pole__meta">
                <li>
                  <span className="g-pole__meta-k">{t('ecom_k1')}</span>
                  <span className="g-pole__meta-v">{t('ecom_v1')}</span>
                </li>
                <li>
                  <span className="g-pole__meta-k">{t('ecom_k2')}</span>
                  <span className="g-pole__meta-v">{t('ecom_v2')}</span>
                </li>
                <li>
                  <span className="g-pole__meta-k">{t('ecom_k3')}</span>
                  <span className="g-pole__meta-v">{t('ecom_v3')}</span>
                </li>
              </ul>
              <div className="g-pole__cta">
                <Link href="/alatere-ecom" className="g-btn g-btn--primary">
                  {t('ecom_link')}
                </Link>
              </div>
            </div>
          </article>

          {/* FORMA */}
          <article className="g-pole g-pole--gold" id="forma" data-reveal data-delay="1">
            <div className="g-pole__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/home-forma.webp"
                alt={t('forma_alt')}
                width={753}
                height={497}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="g-pole__body">
              <span className="g-tag g-tag--gold">{t('forma_tag')}</span>
              <h3 className="g-pole__title">
                <Link href="/alatere-forma" className="g-card__brandlink">
                  <BrandTitle pole="forma" />
                </Link>
              </h3>
              <p className="g-pole__activity">{t('forma_activity')}</p>
              <p className="g-pole__copy">{t('forma_copy')}</p>
              <ul className="g-pole__meta">
                <li>
                  <span className="g-pole__meta-k">{t('forma_k1')}</span>
                  <span className="g-pole__meta-v">{t('forma_v1')}</span>
                </li>
                <li>
                  <span className="g-pole__meta-k">{t('forma_k2')}</span>
                  <span className="g-pole__meta-v">{t('forma_v2')}</span>
                </li>
                <li>
                  <span className="g-pole__meta-k">{t('forma_k3')}</span>
                  <span className="g-pole__meta-v">{t('forma_v3')}</span>
                </li>
              </ul>
              <div className="g-pole__cta">
                <Link href="/alatere-forma" className="g-btn g-btn--gold">
                  {t('forma_link')}
                </Link>
              </div>
            </div>
          </article>

          {/* DOMO */}
          <article className="g-pole g-pole--green" id="domo" data-reveal data-delay="2">
            <div className="g-pole__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/home-domo.webp"
                alt={t('domo_alt')}
                width={753}
                height={497}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="g-pole__body">
              <span className="g-tag g-tag--green">{t('domo_tag')}</span>
              <h3 className="g-pole__title">
                <Link href="/alatere-domo" className="g-card__brandlink">
                  <BrandTitle pole="domo" />
                </Link>
              </h3>
              <p className="g-pole__activity">{t('domo_activity')}</p>
              <p className="g-pole__copy">{t('domo_copy')}</p>
              <ul className="g-pole__meta">
                <li>
                  <span className="g-pole__meta-k">{t('domo_k1')}</span>
                  <span className="g-pole__meta-v">{t('domo_v1')}</span>
                </li>
                <li>
                  <span className="g-pole__meta-k">{t('domo_k2')}</span>
                  <span className="g-pole__meta-v">{t('domo_v2')}</span>
                </li>
                <li>
                  <span className="g-pole__meta-k">{t('domo_k3')}</span>
                  <span className="g-pole__meta-v">{t('domo_v3')}</span>
                </li>
              </ul>
              <div className="g-pole__cta">
                <Link href="/alatere-domo" className="g-btn g-btn--green">
                  {t('domo_link')}
                </Link>
              </div>
            </div>
          </article>

          {/* COWO */}
          <article className="g-pole g-pole--clay" id="cowo" data-reveal data-delay="3">
            <div className="g-pole__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/home-cowo.webp"
                alt={t('cowo_alt')}
                width={753}
                height={497}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="g-pole__body">
              <span className="g-tag g-tag--clay">{t('cowo_tag')}</span>
              <h3 className="g-pole__title">
                <Link href="/alatere-cowo" className="g-card__brandlink">
                  <BrandTitle pole="cowo" />
                </Link>
              </h3>
              <p className="g-pole__activity">{t('cowo_activity')}</p>
              <p className="g-pole__copy">{t('cowo_copy')}</p>
              <ul className="g-pole__meta">
                <li>
                  <span className="g-pole__meta-k">{t('cowo_k1')}</span>
                  <span className="g-pole__meta-v">{t('cowo_v1')}</span>
                </li>
                <li>
                  <span className="g-pole__meta-k">{t('cowo_k2')}</span>
                  <span className="g-pole__meta-v">{t('cowo_v2')}</span>
                </li>
                <li>
                  <span className="g-pole__meta-k">{t('cowo_k3')}</span>
                  <span className="g-pole__meta-v">{t('cowo_v3')}</span>
                </li>
              </ul>
              <div className="g-pole__cta">
                <a href={resa()} target="_blank" rel="noopener noreferrer" className="g-btn g-btn--clay">
                  {t('cowo_link')}
                </a>
                <Link href="/alatere-cowo" className="g-anchor" style={{ color: 'var(--clay-dark)' }}>
                  {t('cowo_link2')}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ===================== BANDE DE LOGOS CLIENTS ===================== */}
      <ClientStrip />

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
