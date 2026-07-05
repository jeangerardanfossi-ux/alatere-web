'use client';

/** Alatere doMo - page « domiciliation d'entreprise » (handoff Grommet, accent vert). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import GoogleReviews from '@/components/grommet/GoogleReviews';
import { Icon } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';

const TODO = '/alatere-todo.html';
const MAP_SRC =
  'https://www.google.com/maps?q=9%20Boulevard%20Albert%201er%2C%2006600%20Antibes&z=16&output=embed';

const TITLE = {
  fr: "Alatere doMo - Domiciliation d'entreprise à Antibes (agréée préfecture)",
  en: 'Alatere doMo - Business address in Antibes (prefecture-approved)',
};

const ACCENT = {
  '--accent': '#2f7d52',
  '--accent-dark': '#246040',
  '--accent-soft': '#e3f1e9',
} as React.CSSProperties;

const TX: Dict = {
  // Header actions
  hd_home: { fr: '← Accueil', en: '← Home' },
  hd_cta: { fr: 'Souscrire', en: 'Subscribe' },

  // Bandeau agrément
  stripe_badge: {
    fr: 'Société de domiciliation agréée',
    en: 'Approved business-address provider',
  },
  stripe_1: {
    fr: 'Agrément préfectoral n° 2022/12 du 20/09/2022',
    en: 'Prefecture approval no. 2022/12 of 20/09/2022',
  },
  stripe_2: {
    fr: 'Plus de 50 entreprises domiciliées',
    en: 'Over 50 companies registered',
  },

  // Fil d'Ariane
  bc_root: { fr: 'Alatere Web', en: 'Alatere Web' },
  bc_1: { fr: "Centre d'affaires", en: 'Business center' },

  // Hero
  hero_tag: {
    fr: "Domiciliation d'entreprise à Antibes",
    en: 'Business address in Antibes',
  },
  hero_lead: {
    fr: "Une adresse de prestige au 9 Boulevard Albert 1er, en plein cœur d'Antibes, pour le siège social de votre entreprise. Réception du courrier, numérisation et réexpédition - l'adresse idéale pour une création, un transfert de siège ou une implantation sur la Côte d'Azur.",
    en: "A prestigious address at 9 Boulevard Albert 1er, in the heart of Antibes, for your company's registered office. Mail handling, scanning and forwarding - the ideal address for a new company, a head-office transfer or setting up on the French Riviera.",
  },
  hero_cta1: { fr: 'Voir les formules', en: 'View the plans' },
  hero_cta2: { fr: 'Être rappelé', en: 'Get a callback' },

  // NAP aside
  nap_label: { fr: 'Votre adresse de domiciliation', en: 'Your business address' },
  nap_addr_l: { fr: 'Adresse', en: 'Address' },
  nap_addr_v: {
    fr: '9 Boulevard Albert 1er, 06600 Antibes',
    en: '9 Boulevard Albert 1er, 06600 Antibes',
  },
  nap_phone_l: { fr: 'Téléphone', en: 'Phone' },
  nap_phone_v: { fr: '07 61 56 45 56', en: '07 61 56 45 56' },
  nap_mail_l: { fr: 'E-mail', en: 'Email' },
  nap_hours_l: { fr: 'Horaires', en: 'Hours' },
  nap_hours_v: { fr: 'Lun – Ven · 9h – 17h', en: 'Mon – Fri · 9am – 5pm' },
  nap_access_l: { fr: 'Accès', en: 'Access' },
  nap_access_v: {
    fr: 'Port Vauban à deux pas, gare SNCF à 10 min à pied',
    en: 'Port Vauban steps away, train station 10-min walk',
  },

  // Bénéfices
  ben_label: { fr: 'Pourquoi nous choisir', en: 'Why choose us' },
  ben_title: {
    fr: 'Une adresse qui valorise votre entreprise',
    en: 'An address that enhances your company',
  },
  ben_p: {
    fr: 'Une domiciliation conforme, rapide à mettre en place, gérée par une équipe locale qui connaît votre dossier.',
    en: 'A compliant business address, quick to set up, managed by a local team that knows your file.',
  },
  ben1_h: { fr: 'Adresse de prestige', en: 'Prestigious address' },
  ben1_p: {
    fr: "Le centre d'Antibes sur votre Kbis et vos documents commerciaux.",
    en: 'Central Antibes on your registration certificate and business documents.',
  },
  ben2_h: { fr: 'Agréée préfecture', en: 'Prefecture-approved' },
  ben2_p: {
    fr: 'Société de domiciliation reconnue (agrément n° 2022/12), contrat conforme.',
    en: 'Recognized business-address provider (approval no. 2022/12), compliant contract.',
  },
  ben3_h: { fr: 'Gestion du courrier', en: 'Mail handling' },
  ben3_p: {
    fr: 'Réception, tri, numérisation et réexpédition selon votre formule.',
    en: 'Reception, sorting, scanning and forwarding depending on your plan.',
  },
  ben4_h: { fr: 'Mise en place rapide', en: 'Quick setup' },
  ben4_p: {
    fr: 'Contrat signé et attestation de domiciliation sous 24 à 48 heures.',
    en: 'Signed contract and address certificate within 24 to 48 hours.',
  },

  // Formules
  plans_label: { fr: 'Nos formules', en: 'Our plans' },
  plans_title: { fr: 'Des offres claires, sans surprise', en: 'Clear offers, no surprises' },
  plans_p: {
    fr: 'Tarifs HT. Sans engagement de longue durée - vous faites évoluer votre formule à tout moment.',
    en: 'Prices excl. VAT. No long-term commitment - change your plan at any time.',
  },
  plan0_name: { fr: 'Offre Dropbox', en: 'Dropbox plan' },
  plan0_tag: { fr: 'Boîte aux lettres', en: 'Mailbox' },
  plan0_f1: { fr: 'Réception & stockage du courrier', en: 'Mail reception & storage' },
  plan0_f2: { fr: 'Notification par e-mail', en: 'Email notification' },
  plan0_note: {
    fr: "Adresse non utilisable comme siège social.",
    en: 'Address cannot be used as a registered office.',
  },
  plan0_btn: { fr: 'Choisir Dropbox', en: 'Choose Dropbox' },
  plan1_name: { fr: 'Offre Headquarters', en: 'Headquarters plan' },
  plan1_tag: { fr: 'Siège social', en: 'Registered office' },
  plan_month: { fr: '/ mois', en: '/ month' },
  plan1_f1: {
    fr: 'Adresse commerciale & siège social',
    en: 'Business & registered-office address',
  },
  plan1_f2: { fr: 'Réception du courrier', en: 'Mail reception' },
  plan1_f3: { fr: 'Mise à disposition mensuelle', en: 'Monthly pickup' },
  plan1_f4: { fr: 'Notification par e-mail', en: 'Email notification' },
  plan1_btn: { fr: 'Choisir Headquarters', en: 'Choose Headquarters' },
  plan_ribbon: { fr: 'Le plus demandé', en: 'Most popular' },
  plan2_name: { fr: 'Offre Forward', en: 'Forward plan' },
  plan2_tag: { fr: 'Siège social et numérisation du courrier', en: 'Registered office & mail scanning' },
  plan2_f1: { fr: "Tout l'offre Headquarters", en: 'Everything in Headquarters' },
  plan2_f2: { fr: 'Numérisation du courrier', en: 'Mail scanning' },
  plan2_f3: { fr: 'Réexpédition hebdomadaire', en: 'Weekly forwarding' },
  plan2_f4: {
    fr: 'Accès salles de réunion (à la carte)',
    en: 'Meeting-room access (à la carte)',
  },
  plan2_btn: { fr: 'Choisir Forward', en: 'Choose Forward' },
  setup_label: { fr: 'Frais de dossier', en: 'Setup fee' },
  setup_once: {
    fr: "une seule fois, à l'ouverture du dossier",
    en: 'one-time, when the file is opened',
  },
  setup_f1: {
    fr: 'Ouverture & vérification du dossier',
    en: 'File opening & verification',
  },
  setup_f2: {
    fr: 'Rédaction du contrat de domiciliation',
    en: 'Drafting of the domiciliation contract',
  },
  setup_f3: { fr: 'Attestation pour le greffe', en: 'Certificate for the registry' },
  chip1: { fr: 'Réexpédition express', en: 'Express forwarding' },
  chip2: { fr: 'Standard téléphonique', en: 'Phone answering' },
  chip3: { fr: 'Permanence pendant les congés', en: 'Holiday cover' },
  chip4: { fr: 'Salle de réunion · à la carte', en: 'Meeting room · à la carte' },
  chip5: { fr: 'Bureau ponctuel', en: 'Occasional office' },

  // Démarches
  steps_label: { fr: 'Comment ça marche', en: 'How it works' },
  steps_title: {
    fr: 'Domicilier votre entreprise en quatre étapes',
    en: "Register your company's address in four steps",
  },
  step1_h: { fr: 'Choix de la formule', en: 'Choose the plan' },
  step1_p: {
    fr: "En ligne ou par téléphone, nous validons l'offre adaptée à votre activité.",
    en: 'Online or by phone, we confirm the plan suited to your business.',
  },
  step2_h: { fr: 'Contrat & pièces', en: 'Contract & documents' },
  step2_p: {
    fr: "Signature du contrat de domiciliation, Kbis et pièce d'identité du dirigeant.",
    en: "Signing the domiciliation contract, company registration and director's ID.",
  },
  step3_h: { fr: 'Attestation', en: 'Certificate' },
  step3_p: {
    fr: 'Vous recevez votre attestation de domiciliation pour le greffe sous 24-48 h.',
    en: 'You receive your address certificate for the registry within 24–48 h.',
  },
  step4_h: { fr: 'Démarches RCS', en: 'Registry formalities' },
  step4_p: {
    fr: 'Création ou transfert de siège : nous vous guidons dans vos formalités.',
    en: 'Company creation or head-office transfer: we guide you through the formalities.',
  },

  // Pièces à fournir
  docs_eyebrow: { fr: 'Préparez votre dossier', en: 'Prepare your file' },
  docs_title: { fr: 'Les pièces à fournir', en: 'Documents to provide' },
  docs_p: {
    fr: 'Pour une mise en place rapide de votre domiciliation, réunissez ces quatre documents avant de nous contacter.',
    en: 'For a quick setup of your business address, gather these four documents before contacting us.',
  },
  doc1_t: { fr: 'Extrait Kbis', en: 'Kbis certificate' },
  doc1_s: {
    fr: "ou projet de statuts pour une entreprise en cours de création",
    en: 'or draft articles of association for a company being formed',
  },
  doc2_t: { fr: "Pièce d'identité", en: 'ID document' },
  doc2_s: { fr: 'du dirigeant', en: 'of the director' },
  doc3_t: { fr: 'Justificatif de domicile', en: 'Proof of address' },
  doc3_s: { fr: 'du dirigeant', en: 'of the director' },
  doc4_t: { fr: "RIB de l'entreprise", en: 'Company bank details (RIB)' },
  doc4_s: {
    fr: 'pour la mise en place du prélèvement SEPA',
    en: 'to set up the SEPA direct debit',
  },
  docs_note: {
    fr: 'Vous pouvez nous transmettre ces pièces par e-mail - nous vous accompagnons à chaque étape.',
    en: 'You can send us these documents by email - we guide you at every step.',
  },

  // FAQ
  faq_label: { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
  faq_title: { fr: 'Tout ce que vous devez savoir', en: 'Everything you need to know' },
  faq1_q: {
    fr: "Combien coûte une domiciliation d'entreprise à Antibes ?",
    en: 'How much does a business address in Antibes cost?',
  },
  faq1_a: {
    fr: "L'offre Dropbox (boîte aux lettres) démarre à 25 € HT par mois. L'offre Headquarters est à 30 € HT par mois (adresse de siège social + courrier) et l'offre Forward à 50 € HT par mois (numérisation et réexpédition incluses). Des frais de dossier de 50 € HT s'appliquent une seule fois, à l'ouverture du dossier.",
    en: 'The Dropbox plan (mailbox only) starts at €25 excl. VAT per month. The Headquarters plan is €30 excl. VAT per month (registered-office address + mail) and the Forward plan €50 excl. VAT per month (scanning and forwarding included). A €50 excl. VAT setup fee applies once, when the file is opened.',
  },
  faq2_q: {
    fr: 'Puis-je domicilier le siège social de ma société chez vous ?',
    en: "Can I register my company's head office with you?",
  },
  faq2_a: {
    fr: "Oui. En tant que société de domiciliation agréée par la préfecture (n° 2022/12 du 20/09/2022), nous délivrons une attestation conforme aux exigences du greffe et du RCS d'Antibes.",
    en: 'Yes. As a prefecture-approved business-address provider (no. 2022/12 of 20/09/2022), we issue a certificate compliant with the requirements of the Antibes trade registry.',
  },
  faq3_q: { fr: 'Quel est le délai de mise en place ?', en: 'How long does setup take?' },
  faq3_a: {
    fr: 'Une fois le contrat signé et les pièces transmises, votre attestation de domiciliation est émise sous 24 à 48 heures.',
    en: 'Once the contract is signed and documents provided, your address certificate is issued within 24 to 48 hours.',
  },
  faq4_q: {
    fr: 'Puis-je transférer le siège de mon entreprise existante ?',
    en: 'Can I transfer the head office of my existing company?',
  },
  faq4_a: {
    fr: 'Oui. Nous vous accompagnons dans les formalités de transfert de siège auprès du greffe et la mise à jour de vos statuts.',
    en: 'Yes. We support you with the head-office transfer formalities at the registry and the update of your articles of association.',
  },
  faq5_q: { fr: 'Y a-t-il un engagement de durée ?', en: 'Is there a minimum commitment?' },
  faq5_a: {
    fr: 'Le contrat est renouvelable et résiliable avec préavis. Vous pouvez faire évoluer votre formule à tout moment, sans pénalité.',
    en: 'The contract is renewable and can be cancelled with notice. You can change your plan at any time, with no penalty.',
  },

  // Localisation
  loc_label: { fr: 'Nous situer', en: 'Find us' },
  loc_title: { fr: "Au cœur d'Antibes", en: 'In the heart of Antibes' },
  loc_card_label: {
    fr: "Alatere doMo · centre d'affaires",
    en: 'Alatere doMo · business center',
  },
  loc_addr_l: { fr: 'Adresse', en: 'Address' },
  loc_addr_v: {
    fr: '9 Boulevard Albert 1er, 06600 Antibes, France',
    en: '9 Boulevard Albert 1er, 06600 Antibes, France',
  },
  loc_phone_l: { fr: 'Téléphone', en: 'Phone' },
  loc_phone_v: { fr: '07 61 56 45 56', en: '07 61 56 45 56' },
  loc_mail_l: { fr: 'E-mail', en: 'Email' },
  loc_siret_l: { fr: 'SIRET', en: 'SIRET' },
  loc_siret_v: {
    fr: '443 421 334 00030 · RCS Antibes',
    en: '443 421 334 00030 · RCS Antibes',
  },
  loc_appr_l: { fr: 'Agrément', en: 'Approval' },
  loc_appr_v: {
    fr: 'Préfecture n° 2022/12 du 20/09/2022',
    en: 'Prefecture no. 2022/12 of 20/09/2022',
  },
  loc_btn: { fr: 'Planifier une visite', en: 'Schedule a visit' },
  loc_maps: { fr: 'Voir sur Google Maps', en: 'View on Google Maps' },

  // Cross-sell toDo
  todo_eyebrow: {
    fr: 'Exclusif domiciliés · Alatere toDo',
    en: 'Members exclusive · Alatere toDo',
  },
  todo_h1: { fr: 'Vous déléguez,', en: 'You delegate,' },
  todo_h2: { fr: "on s'en occupe.", en: 'we handle it.' },
  todo_p_a: {
    fr: "Alatere toDo, c'est une assistante virtuelle dédiée, basée à Antibes, qui prend en main votre administratif : courrier, relances, factures, agenda. Parce que vous êtes domicilié chez doMo, vous profitez de l'offre ",
    en: "Alatere toDo is a dedicated virtual assistant, based in Antibes, who takes your admin off your plate: mail, reminders, invoices, calendar. Because you're registered with doMo, you get the ",
  },
  todo_p_strong: {
    fr: '13 h pour le prix de 10',
    en: '13 hours for the price of 10',
  },
  todo_p_b: {
    fr: ' - soit 3 h offertes sur le forfait Starter.',
    en: ' offer - i.e. 3 free hours on the Starter plan.',
  },
  todo_cta1: { fr: 'Découvrir Alatere toDo', en: 'Discover Alatere toDo' },
  todo_cta2: { fr: 'Voir les forfaits', en: 'See the plans' },
  todo_li1: { fr: '13 h pour le prix de 10', en: '13 hours for the price of 10' },
  todo_li2: { fr: 'Courrier & e-mails', en: 'Mail & email' },
  todo_li3: { fr: 'Devis, factures & relances', en: 'Quotes, invoices & reminders' },
  todo_li4: { fr: 'Agenda & rendez-vous', en: 'Calendar & appointments' },
  todo_li5: { fr: 'Une interlocutrice attitrée', en: 'A dedicated contact' },
  todo_li6: { fr: 'Sans engagement', en: 'No commitment' },

  // CTA
  cta_title: {
    fr: 'Prêt à domicilier votre entreprise ?',
    en: "Ready to register your company's address?",
  },
  cta_p: {
    fr: 'Souscription simple, attestation sous 24-48 h. Une équipe locale à votre écoute.',
    en: 'Simple subscription, certificate within 24–48 h. A local team at your service.',
  },
  cta_b1: { fr: 'Nous contacter', en: 'Contact us' },
  cta_b2: { fr: 'Découvrir le coworking', en: 'Discover coworking' },
};

export default function DomoPage() {
  return (
    <div className="g-home" style={ACCENT}>
      <LangProvider titles={TITLE}>
        <Header active="domo" />
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
      {/* BANDEAU AGRÉMENT */}
      <div className="d-stripe">
        <div className="d-stripe__in">
          <span className="d-stripe__badge">
            <Icon name="shield-check" /> {t('stripe_badge')}
          </span>
          <a
            href="/documents/Agrement-prefectoral-2022-12-Alatere-doMo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="d-stripe__link"
          >
            {t('stripe_1')}
          </a>
          <span className="d-stripe__sep">·</span>
          <span>{t('stripe_2')}</span>
        </div>
      </div>

      <main id="top">
        {/* HERO */}
        <section className="d-hero">
          <div>
            <div className="d-breadcrumb">
              <Link href="/">{t('bc_root')}</Link> <span>›</span> <span>{t('bc_1')}</span>{' '}
              <span>›</span> <span>Alatere doMo</span>
            </div>
            <span className="g-label">
              <span className="g-tag g-tag--green">{t('hero_tag')}</span>
            </span>
            <h1 className="g-h1 g-titlelogo" style={{ marginTop: 14 }}>
              Alatere{' '}
              <span className="g-subword">
                <span className="lg-teal">d</span>
                <span className="lg-teal">o</span>
                <span className="lg-green">M</span>
                <span className="lg-gold">o</span>
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/domo-cowo-badge.webp" alt="Alatere doMo · coWo" className="g-titlebadge" width={400} height={400} decoding="async" />
            </h1>
            <p className="g-lead">{t('hero_lead')}</p>
            <div className="d-hero__cta">
              <a href="#formules" className="g-btn d-btn-green g-btn--lg">
                {t('hero_cta1')} <span className="g-arrow">→</span>
              </a>
              <a href="#contact" className="g-btn g-btn--secondary g-btn--lg">
                {t('hero_cta2')}
              </a>
            </div>
          </div>
          <aside className="d-nap">
            <span className="g-label">{t('nap_label')}</span>
            <div className="d-nap__rows">
              <div>
                <Icon name="map-pin" />
                <span>
                  <strong>{t('nap_addr_l')}</strong>
                  {t('nap_addr_v')}
                </span>
              </div>
              <div>
                <Icon name="phone" />
                <span>
                  <strong>{t('nap_phone_l')}</strong>
                  {t('nap_phone_v')}
                </span>
              </div>
              <div>
                <Icon name="mail" />
                <span>
                  <strong>{t('nap_mail_l')}</strong>
                  <Email user="domiciliation" />
                </span>
              </div>
              <div>
                <Icon name="clock" />
                <span>
                  <strong>{t('nap_hours_l')}</strong>
                  {t('nap_hours_v')}
                </span>
              </div>
              <div>
                <Icon name="navigation" />
                <span>
                  <strong>{t('nap_access_l')}</strong>
                  {t('nap_access_v')}
                </span>
              </div>
            </div>
          </aside>
        </section>

        {/* BÉNÉFICES */}
        <section className="d-section">
          <div className="d-head">
            <span className="g-label">
              <span className="g-tag g-tag--green">{t('ben_label')}</span>
            </span>
            <h2 className="g-h2">{t('ben_title')}</h2>
            <p>{t('ben_p')}</p>
          </div>
          <div className="d-benefits">
            <div className="d-benefit">
              <div className="d-benefit__ic">
                <Icon name="landmark" />
              </div>
              <h3>{t('ben1_h')}</h3>
              <p>{t('ben1_p')}</p>
            </div>
            <div className="d-benefit">
              <div className="d-benefit__ic">
                <Icon name="shield-check" />
              </div>
              <h3>{t('ben2_h')}</h3>
              <p>{t('ben2_p')}</p>
            </div>
            <div className="d-benefit">
              <div className="d-benefit__ic">
                <Icon name="mailbox" />
              </div>
              <h3>{t('ben3_h')}</h3>
              <p>{t('ben3_p')}</p>
            </div>
            <div className="d-benefit">
              <div className="d-benefit__ic">
                <Icon name="zap" />
              </div>
              <h3>{t('ben4_h')}</h3>
              <p>{t('ben4_p')}</p>
            </div>
          </div>
        </section>

        {/* FORMULES */}
        <section className="d-section--alt" id="formules">
          <div className="d-inner">
            <div className="d-head">
              <span className="g-label">
                <span className="g-tag g-tag--green">{t('plans_label')}</span>
              </span>
              <h2 className="g-h2">{t('plans_title')}</h2>
              <p>{t('plans_p')}</p>
            </div>
            <div className="d-plans">
              <div className="d-plan">
                <div className="d-plan__name">{t('plan0_name')}</div>
                <div className="d-plan__tag">{t('plan0_tag')}</div>
                <div className="d-plan__price">
                  25 €<span> HT {t('plan_month')}</span>
                </div>
                <ul>
                  <li>
                    <Icon name="check" /> {t('plan0_f1')}
                  </li>
                  <li>
                    <Icon name="check" /> {t('plan0_f2')}
                  </li>
                </ul>
                <p className="d-plan__note">{t('plan0_note')}</p>
                <a href="#contact" className="g-btn g-btn--secondary">
                  {t('plan0_btn')}
                </a>
              </div>
              <div className="d-plan">
                <div className="d-plan__name">{t('plan1_name')}</div>
                <div className="d-plan__tag">{t('plan1_tag')}</div>
                <div className="d-plan__price">
                  30 €<span> HT {t('plan_month')}</span>
                </div>
                <ul>
                  <li>
                    <Icon name="check" /> {t('plan1_f1')}
                  </li>
                  <li>
                    <Icon name="check" /> {t('plan1_f2')}
                  </li>
                  <li>
                    <Icon name="check" /> {t('plan1_f3')}
                  </li>
                  <li>
                    <Icon name="check" /> {t('plan1_f4')}
                  </li>
                </ul>
                <a href="#contact" className="g-btn g-btn--secondary">
                  {t('plan1_btn')}
                </a>
              </div>
              <div className="d-plan is-featured">
                <div className="d-plan__ribbon">{t('plan_ribbon')}</div>
                <div className="d-plan__name">{t('plan2_name')}</div>
                <div className="d-plan__tag">{t('plan2_tag')}</div>
                <div className="d-plan__price">
                  50 €<span> HT {t('plan_month')}</span>
                </div>
                <ul>
                  <li>
                    <Icon name="check" /> {t('plan2_f1')}
                  </li>
                  <li>
                    <Icon name="check" /> {t('plan2_f2')}
                  </li>
                  <li>
                    <Icon name="check" /> {t('plan2_f3')}
                  </li>
                  <li>
                    <Icon name="check" /> {t('plan2_f4')}
                  </li>
                </ul>
                <a href="#contact" className="g-btn d-btn-green">
                  {t('plan2_btn')}
                </a>
              </div>
            </div>
            <div className="d-setup">
              <div className="d-setup__head">
                <span className="d-setup__label">{t('setup_label')}</span>
                <span className="d-setup__price">
                  50 € <small>HT</small>
                </span>
                <span className="d-setup__once">{t('setup_once')}</span>
              </div>
              <ul className="d-setup__list">
                <li>
                  <Icon name="check" /> {t('setup_f1')}
                </li>
                <li>
                  <Icon name="check" /> {t('setup_f2')}
                </li>
                <li>
                  <Icon name="check" /> {t('setup_f3')}
                </li>
              </ul>
            </div>
            <div className="d-carte">
              <span className="d-chip">{t('chip1')}</span>
              <span className="d-chip">{t('chip2')}</span>
              <span className="d-chip">{t('chip3')}</span>
              <span className="d-chip">{t('chip4')}</span>
              <span className="d-chip">{t('chip5')}</span>
            </div>
          </div>
        </section>

        {/* DÉMARCHES */}
        <section className="d-section">
          <div className="d-head">
            <span className="g-label">
              <span className="g-tag g-tag--green">{t('steps_label')}</span>
            </span>
            <h2 className="g-h2">{t('steps_title')}</h2>
          </div>
          <div className="d-steps">
            <div className="d-step">
              <div className="d-step__n">01</div>
              <h3>{t('step1_h')}</h3>
              <p>{t('step1_p')}</p>
            </div>
            <div className="d-step">
              <div className="d-step__n">02</div>
              <h3>{t('step2_h')}</h3>
              <p>{t('step2_p')}</p>
            </div>
            <div className="d-step">
              <div className="d-step__n">03</div>
              <h3>{t('step3_h')}</h3>
              <p>{t('step3_p')}</p>
            </div>
            <div className="d-step">
              <div className="d-step__n">04</div>
              <h3>{t('step4_h')}</h3>
              <p>{t('step4_p')}</p>
            </div>
          </div>
        </section>

        {/* PIÈCES À FOURNIR */}
        <section className="d-docs-band" id="pieces">
          <div className="d-inner">
            <div className="d-head">
              <span className="g-label">
                <span className="g-tag g-tag--green">{t('docs_eyebrow')}</span>
              </span>
              <h2 className="g-h2">{t('docs_title')}</h2>
              <p>{t('docs_p')}</p>
            </div>
            <div className="d-docs-grid">
              <div className="d-doc">
                <div className="d-doc__ic">
                  <Icon name="landmark" />
                </div>
                <h3>{t('doc1_t')}</h3>
                <p>{t('doc1_s')}</p>
              </div>
              <div className="d-doc">
                <div className="d-doc__ic">
                  <Icon name="user-round-check" />
                </div>
                <h3>{t('doc2_t')}</h3>
                <p>{t('doc2_s')}</p>
              </div>
              <div className="d-doc">
                <div className="d-doc__ic">
                  <Icon name="map-pin" />
                </div>
                <h3>{t('doc3_t')}</h3>
                <p>{t('doc3_s')}</p>
              </div>
              <div className="d-doc">
                <div className="d-doc__ic">
                  <Icon name="wallet" />
                </div>
                <h3>{t('doc4_t')}</h3>
                <p>{t('doc4_s')}</p>
              </div>
            </div>
            <p className="d-docs-note">
              <Icon name="info" /> {t('docs_note')}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="d-section--alt">
          <div className="d-inner">
            <div className="d-head">
              <span className="g-label">
                <span className="g-tag g-tag--green">{t('faq_label')}</span>
              </span>
              <h2 className="g-h2">{t('faq_title')}</h2>
            </div>
            <div className="d-faq">
              <details open>
                <summary>{t('faq1_q')}</summary>
                <div className="d-ans">{t('faq1_a')}</div>
              </details>
              <details>
                <summary>{t('faq2_q')}</summary>
                <div className="d-ans">{t('faq2_a')}</div>
              </details>
              <details>
                <summary>{t('faq3_q')}</summary>
                <div className="d-ans">{t('faq3_a')}</div>
              </details>
              <details>
                <summary>{t('faq4_q')}</summary>
                <div className="d-ans">{t('faq4_a')}</div>
              </details>
              <details>
                <summary>{t('faq5_q')}</summary>
                <div className="d-ans">{t('faq5_a')}</div>
              </details>
            </div>
          </div>
        </section>

        {/* LOCALISATION */}
        <section className="d-section">
          <div className="d-head">
            <span className="g-label">
              <span className="g-tag g-tag--green">{t('loc_label')}</span>
            </span>
            <h2 className="g-h2">{t('loc_title')}</h2>
          </div>
          <div className="d-loc">
            <iframe
              className="d-loc__map"
              src={MAP_SRC}
              loading="lazy"
              title="Plan - 9 Boulevard Albert 1er, Antibes"
            />
            <div className="d-loc__card">
              <span className="g-label" style={{ color: 'var(--green-dark)' }}>
                {t('loc_card_label')}
              </span>
              <div className="d-nap__rows" style={{ marginTop: 14 }}>
                <div>
                  <Icon name="map-pin" />
                  <span>
                    <strong>{t('loc_addr_l')}</strong>
                    {t('loc_addr_v')}
                  </span>
                </div>
                <div>
                  <Icon name="phone" />
                  <span>
                    <strong>{t('loc_phone_l')}</strong>
                    {t('loc_phone_v')}
                  </span>
                </div>
                <div>
                  <Icon name="mail" />
                  <span>
                    <strong>{t('loc_mail_l')}</strong>
                    <Email user="domiciliation" />
                  </span>
                </div>
                <div>
                  <Icon name="building-2" />
                  <span>
                    <strong>{t('loc_siret_l')}</strong>
                    {t('loc_siret_v')}
                  </span>
                </div>
                <div>
                  <Icon name="shield-check" />
                  <span>
                    <strong>{t('loc_appr_l')}</strong>
                    {t('loc_appr_v')}
                  </span>
                </div>
              </div>
              <a
                href="#contact"
                className="g-btn d-btn-green g-btn--sm"
                style={{ marginTop: 18 }}
              >
                {t('loc_btn')} <span className="g-arrow">→</span>
              </a>
              <div style={{ marginTop: 12 }}>
                <a
                  href="https://maps.app.goo.gl/SCqBr1ZPwbbb7sq7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="g-anchor"
                  style={{ color: 'var(--green-dark)', fontSize: 14 }}
                >
                  <Icon name="map-pin" /> {t('loc_maps')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CROSS-SELL : Alatere toDo */}
        <section className="x-todo" id="todo">
          <div className="x-todo__card">
            <div>
              <span className="g-label x-todo__eyebrow">{t('todo_eyebrow')}</span>
              <h2>
                {t('todo_h1')} <em>{t('todo_h2')}</em>
              </h2>
              <p>
                {t('todo_p_a')}
                <strong>{t('todo_p_strong')}</strong>
                {t('todo_p_b')}
              </p>
              <div className="x-todo__cta">
                <a href={TODO} className="g-btn t-btn-navy">
                  {t('todo_cta1')} <span className="g-arrow">→</span>
                </a>
                <a href={`${TODO}#tarifs`} className="g-btn g-btn--secondary">
                  {t('todo_cta2')}
                </a>
              </div>
            </div>
            <ul className="x-todo__list">
              <li>
                <Icon name="gift" /> {t('todo_li1')}
              </li>
              <li>
                <Icon name="mail" /> {t('todo_li2')}
              </li>
              <li>
                <Icon name="file-text" /> {t('todo_li3')}
              </li>
              <li>
                <Icon name="calendar-check" /> {t('todo_li4')}
              </li>
              <li>
                <Icon name="user-round-check" /> {t('todo_li5')}
              </li>
              <li>
                <Icon name="shield-check" /> {t('todo_li6')}
              </li>
            </ul>
          </div>
        </section>
      </main>

      <GoogleReviews pole="domo" />

      {/* CTA */}
      <section className="d-cta" id="contact">
        <div className="d-cta__in">
          <div>
            <h2>{t('cta_title')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <div className="d-cta__btns">
            <Link href="/contact?pole=domo" className="g-btn g-btn--light g-btn--lg">
              {t('cta_b1')} <span className="g-arrow">→</span>
            </Link>
            <Link href="/#cowo" className="g-btn g-btn--ghost-light g-btn--lg">
              {t('cta_b2')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
