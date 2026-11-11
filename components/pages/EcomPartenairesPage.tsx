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
import { ImgIcon } from '@/components/grommet/ImgIcon';
import { Email } from '@/components/grommet/Email';
import { company } from '@/lib/site';
import { partenairesFaqTx, faqPairs } from '@/lib/faq';
import { PARTENAIRES_UPDATED } from '@/lib/ecom-partenaires';

export const PARTENAIRES_TITLE = {
  fr: 'Sous-traitance e-commerce en marque blanche pour agences | Alatere ecoM',
  en: 'White-label e-commerce subcontracting for agencies | Alatere ecoM',
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
  ['comparatif', 'Recruter ou sous-traiter', 'Hire or subcontract'],
  ['international', "Se développer à l'étranger", 'Expanding abroad'],
  ['boutiques', 'Nos boutiques', 'Our stores'],
  ['modalites', 'Comment on travaille', 'How we work with you'],
  ['deroulement', 'Démarrer une mission', 'Starting an assignment'],
  ['equipe', "L'équipe", 'The team'],
  ['faq', 'Questions fréquentes', 'FAQ'],
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

/** Comparatif : lignes (clé) x colonnes recruter / freelance / Alatere ecoM. */
const COMPARE = ['engage', 'langs', 'contin', 'skills', 'contract', 'training'];

/** Étapes de démarrage d'une mission. */
const STEPS = ['step1', 'step2', 'step3', 'step4'];

/** Boutiques opérées en propre (mêmes sites que la page Alatere ecoM). */
const STORES: { url: string; k: string }[] = [
  { url: 'https://repro-tableaux.com', k: 'store1' },
  { url: 'https://www.copia-di-arte.com', k: 'store2' },
];
const OTHER_STORES = [
  { url: 'https://www.reprodart.com', label: 'reprodart.com' },
  { url: 'https://www.art-prints-on-demand.com', label: 'art-prints-on-demand.com' },
];

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
    fr: "Sous-traitance e-commerce en marque blanche pour agences web : nous prenons en charge l'acquisition, le SEO, le contenu, la relation client et la logistique des boutiques de vos clients, sous votre nom, dans cinq langues.",
    en: "White-label e-commerce subcontracting for web agencies: we take on the acquisition, SEO, content, customer care and logistics of your clients' stores, under your name, in five languages.",
  },
  updated: { fr: 'Mis à jour le', en: 'Updated' },
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
    fr: 'Vos clients vendent souvent dans plusieurs langues',
    en: 'Your clients often sell in several languages',
  },
  constat_p1: {
    fr: "Une agence sait concevoir un site. Le faire tourner au quotidien (campagnes, fiches produits, avis, client qui écrit en italien un samedi soir) demande d'autres bras et d'autres langues.",
    en: 'An agency knows how to build a site. Running it day to day (campaigns, product pages, reviews, a customer writing in Italian on a Saturday evening) takes other hands and other languages.',
  },
  constat_p2: {
    fr: "Alatere ecoM est le pôle e-commerce d'Alatere Web SAS, à Antibes. Nous exploitons nos propres boutiques en ligne depuis 2003 et nous faisons le même travail pour les clients des agences, sous leur marque.",
    en: 'Alatere ecoM is the e-commerce arm of Alatere Web SAS, in Antibes. We have run our own online stores since 2003, and we do the same work for agencies’ clients, under the agency’s brand.',
  },

  scope_label: { fr: 'Périmètre', en: 'Scope' },
  scope_h2: {
    fr: 'Services e-commerce en marque blanche : ce que vous pouvez nous confier',
    en: 'White-label e-commerce services: what you can hand over to us',
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
    fr: 'Fiches produits, pages, newsletters, réseaux sociaux : rédigés ou traduits par notre équipe, sans traduction automatique.',
    en: 'Product pages, landing pages, newsletters, social media: written or translated by our team, without machine translation.',
  },
  care_h: { fr: 'Relation client', en: 'Customer care' },
  care_p: {
    fr: 'Conseil avant-vente, devis, suivi des commandes, litiges. En français, anglais, italien et espagnol.',
    en: 'Pre-sales advice, quotes, order follow-up, disputes. In French, English, Italian and Spanish.',
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
    fr: 'Formation de vos clients (organisme certifié Qualiopi)',
    en: 'Training your clients (Qualiopi-certified provider)',
  },
  forma_p: {
    fr: "Former les équipes de vos clients à leur outil, avec un financement OPCO ou FAF quand il est mobilisable. Vous gardez la relation, nous gérons l'administratif de la formation.",
    en: "Training your clients' teams on their own tools, with OPCO or FAF funding where it can be mobilised. You keep the relationship, we handle the training paperwork.",
  },

  intl_label: { fr: 'International', en: 'International' },
  intl_h2: {
    fr: "Vendre en Italie, en Espagne, en Allemagne et en Europe centrale sans recruter",
    en: 'Selling in Italy, Spain, Germany and Central Europe without hiring',
  },
  intl_p: {
    fr: 'Pour ouvrir un marché, il faut aussi répondre aux clients dans leur langue, adapter les campagnes et connaître les usages locaux. Chaque langue ci-dessous est native ou courante chez l’un de nous.',
    en: 'Opening a market also means answering customers in their language, adapting the campaigns and knowing local habits. Each language below is native or fluent for one of us.',
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
    fr: 'Modalités de sous-traitance : marque blanche, régie, forfait, co-traitance',
    en: 'Subcontracting terms: white label, time and materials, fixed price, joint contracting',
  },
  wl_h: { fr: 'Marque blanche', en: 'White label' },
  wl_p: {
    fr: "Nous n'apparaissons nulle part. Vous restez l'interlocuteur unique de votre client, nous livrons sous votre nom.",
    en: 'Our name appears nowhere. You remain your client’s single point of contact, and we deliver under your name.',
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

  cmp_label: { fr: 'Comparatif', en: 'Comparison' },
  cmp_h2: {
    fr: 'Recruter, prendre un freelance ou sous-traiter à Alatere ecoM',
    en: 'Hiring, using a freelancer or subcontracting to Alatere ecoM',
  },
  cmp_p: {
    fr: "Pour faire tourner les boutiques de vos clients, trois options s'offrent à une agence. Voici ce qui les distingue.",
    en: "To run your clients' stores, an agency has three options. Here is what sets them apart.",
  },
  cmp_crit: { fr: 'Critère', en: 'Criterion' },
  cmp_c1: { fr: 'Recruter', en: 'Hire' },
  cmp_c2: { fr: 'Freelance', en: 'Freelancer' },
  cmp_c3: { fr: 'Alatere ecoM', en: 'Alatere ecoM' },
  engage_h: { fr: 'Engagement', en: 'Commitment' },
  engage_1: { fr: 'Contrat de travail, coût fixe', en: 'Employment contract, fixed cost' },
  engage_2: { fr: 'Mission ponctuelle', en: 'One-off assignment' },
  engage_3: { fr: 'Régie mensuelle ou forfait', en: 'Monthly time and materials or fixed price' },
  langs_h: { fr: 'Langues', en: 'Languages' },
  langs_1: { fr: 'Celles de la personne recrutée', en: 'Those of the person hired' },
  langs_2: { fr: 'Celles du freelance', en: "The freelancer's own" },
  langs_3: {
    fr: 'Français, anglais, italien, espagnol, allemand, slovaque, tchèque',
    en: 'French, English, Italian, Spanish, German, Slovak, Czech',
  },
  contin_h: { fr: 'Congés et absences', en: 'Holidays and absences' },
  contin_1: { fr: 'Dépend d’une personne', en: 'Depends on one person' },
  contin_2: { fr: 'Dépend d’une personne', en: 'Depends on one person' },
  contin_3: { fr: 'Équipe de trois personnes', en: 'Team of three' },
  skills_h: { fr: 'Compétences', en: 'Skills' },
  skills_1: { fr: 'Un profil', en: 'One profile' },
  skills_2: { fr: 'Un profil', en: 'One profile' },
  skills_3: {
    fr: 'Acquisition, SEO, contenu, service client, logistique',
    en: 'Acquisition, SEO, content, customer care, logistics',
  },
  contract_h: { fr: 'Cadre contractuel', en: 'Contract' },
  contract_1: { fr: 'Contrat de travail', en: 'Employment contract' },
  contract_2: { fr: 'Contrat de prestation', en: 'Service agreement' },
  contract_3: {
    fr: 'Sous-traitance ou co-traitance, SAS assurée en RC pro',
    en: 'Subcontracting or joint contracting, SAS with professional liability insurance',
  },
  training_h: {
    fr: 'Formation des clients finançable (OPCO, FAF)',
    en: 'Fundable client training (OPCO, FAF)',
  },
  training_1: { fr: 'Non', en: 'No' },
  training_2: { fr: 'Seulement s’il est certifié Qualiopi', en: 'Only if Qualiopi-certified' },
  training_3: { fr: 'Oui, organisme certifié Qualiopi', en: 'Yes, Qualiopi-certified provider' },

  stores_label: { fr: 'Références', en: 'Track record' },
  stores_h2: {
    fr: 'Nos propres boutiques en ligne, depuis 2003',
    en: 'Our own online stores, since 2003',
  },
  stores_p: {
    fr: 'Ce que nous proposons aux agences, nous le faisons chaque jour sur nos boutiques : campagnes, SEO, fiches produits en plusieurs langues, service client et expéditions en Europe.',
    en: 'What we offer agencies, we do every day on our own stores: campaigns, SEO, product pages in several languages, customer care and shipping across Europe.',
  },
  store1_d: {
    fr: 'Reproductions de tableaux sur toile. Notre première boutique, lancée en 2003 sur le marché français.',
    en: 'Canvas reproductions of paintings. Our first store, launched in 2003 for the French market.',
  },
  store2_d: {
    fr: "Ouverture à l'Europe : sites multilingues, ciblage par pays, fiscalité de l'Union européenne.",
    en: 'Expansion to Europe: multilingual sites, country targeting, EU taxation.',
  },
  stores_other: { fr: 'Également :', en: 'Also:' },
  stores_more: { fr: 'Voir le pôle Alatere ecoM', en: 'See the Alatere ecoM page' },

  steps_label: { fr: 'Déroulement', en: 'Process' },
  steps_h2: {
    fr: 'Comment démarre une mission de sous-traitance',
    en: 'How a subcontracting assignment starts',
  },
  step1_h: { fr: 'Vous décrivez le besoin', en: 'You describe the need' },
  step1_p: {
    fr: 'Sur le formulaire de contact, sujet « E-commerce - Alatere ecoM » : la boutique, les marchés, les langues, les tâches à confier. Nous répondons sous 48 heures.',
    en: 'On the contact form, subject "E-commerce - Alatere ecoM": the store, the markets, the languages, the tasks to hand over. We reply within 48 hours.',
  },
  step2_h: { fr: 'Nous proposons un cadre', en: 'We propose a framework' },
  step2_p: {
    fr: 'Régie (un volume de jours par mois) ou forfait (périmètre, prix ferme, calendrier), en marque blanche ou en co-traitance.',
    en: 'Time and materials (a monthly volume of days) or fixed price (scope, firm price, schedule), white-label or as joint contractor.',
  },
  step3_h: { fr: 'Nous travaillons sous votre nom', en: 'We work under your name' },
  step3_p: {
    fr: 'Vous nous ouvrez les accès nécessaires (comptes publicitaires, back-office, messagerie du service client) et nous intervenons sous votre marque.',
    en: 'You give us the access we need (ad accounts, back office, customer-care inbox) and we work under your brand.',
  },
  step4_h: { fr: 'Vous gardez la relation', en: 'You keep the relationship' },
  step4_p: {
    fr: 'Nous rendons compte à votre agence. C’est vous qui présentez le travail et les résultats à votre client.',
    en: 'We report to your agency. You are the one who presents the work and the results to your client.',
  },

  faq_label: { fr: 'FAQ', en: 'FAQ' },
  faq_h2: {
    fr: 'Questions fréquentes sur la sous-traitance e-commerce',
    en: 'Frequently asked questions about e-commerce subcontracting',
  },

  team_label: { fr: "L'équipe", en: 'The team' },
  team_h2: { fr: 'Qui fait le travail', en: 'Who does the work' },
  team_p: {
    fr: 'Alatere Web est une SAS : nous pouvons absorber un surcroît de charge et co-traiter.',
    en: 'Alatere Web is a French SAS company: we can take on extra workload and contract jointly.',
  },
  jga_n: { fr: 'Jean-Gérard Anfossi', en: 'Jean-Gérard Anfossi' },
  jga_r: {
    fr: 'Dirigeant, acquisition et formation',
    en: 'Managing director, acquisition and training',
  },
  jga_s1: {
    fr: 'Plus de 25 ans en e-commerce et webmarketing',
    en: '25+ years in e-commerce and web marketing',
  },
  jga_s2: { fr: 'SEO et SEA, agence Google Partner', en: 'SEO and SEA, Google Partner agency' },
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
    fr: 'Associée, opérations e-commerce et relation client',
    en: 'Partner, e-commerce operations and customer care',
  },
  isa_s1: {
    fr: 'Plus de 15 ans en service clients multi-pays',
    en: '15+ years in multi-country customer service',
  },
  isa_s2: { fr: 'Supply chain et logistique', en: 'Supply chain and logistics' },
  isa_s3: { fr: 'CRM : Emarsys, SAP', en: 'CRM: Emarsys, SAP' },
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
    fr: 'Campagnes Meta Ads et Google Ads (certifiée)',
    en: 'Meta Ads and Google Ads campaigns (certified)',
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
    fr: 'Nous contacter',
    en: 'Contact us',
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
  const updatedLabel = new Date(PARTENAIRES_UPDATED).toLocaleDateString(
    lang === 'fr' ? 'fr-FR' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' },
  );

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
        <p className="pt-hero__updated">
          {t('updated')} <time dateTime={PARTENAIRES_UPDATED}>{updatedLabel}</time>
        </p>
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

          {/* COMPARATIF */}
          <section id="comparatif" className="pt-section">
            <span className="g-label">{t('cmp_label')}</span>
            <h2>{t('cmp_h2')}</h2>
            <p>{t('cmp_p')}</p>
            <div className="pt-cmp">
              <table>
                <thead>
                  <tr>
                    <th scope="col">{t('cmp_crit')}</th>
                    <th scope="col">{t('cmp_c1')}</th>
                    <th scope="col">{t('cmp_c2')}</th>
                    <th scope="col" className="is-us">
                      {t('cmp_c3')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r}>
                      <th scope="row">{t(`${r}_h`)}</th>
                      <td>{t(`${r}_1`)}</td>
                      <td>{t(`${r}_2`)}</td>
                      <td className="is-us">{t(`${r}_3`)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

          {/* BOUTIQUES EN PROPRE */}
          <section id="boutiques" className="pt-section">
            <span className="g-label">{t('stores_label')}</span>
            <h2>{t('stores_h2')}</h2>
            <p>{t('stores_p')}</p>
            <div className="pt-stores">
              {STORES.map((st) => (
                <div className="pt-store" key={st.k}>
                  <a href={st.url} target="_blank" rel="noopener noreferrer">
                    {st.url.replace(/^https:\/\/(www\.)?/, '')} <span aria-hidden="true">↗</span>
                  </a>
                  <p>{t(`${st.k}_d`)}</p>
                </div>
              ))}
            </div>
            <p className="pt-stores__more">
              {t('stores_other')}{' '}
              {OTHER_STORES.map((o, i) => (
                <span key={o.url}>
                  {i > 0 && ', '}
                  <a href={o.url} target="_blank" rel="noopener noreferrer">
                    {o.label}
                  </a>
                </span>
              ))}
              {' · '}
              <Link href="/alatere-ecom">{t('stores_more')}</Link>
            </p>
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

          {/* DÉROULEMENT */}
          <section id="deroulement" className="pt-section">
            <span className="g-label">{t('steps_label')}</span>
            <h2>{t('steps_h2')}</h2>
            <ol className="pt-steps">
              {STEPS.map((st) => (
                <li key={st}>
                  <h3>{t(`${st}_h`)}</h3>
                  <p>{t(`${st}_p`)}</p>
                </li>
              ))}
            </ol>
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

          {/* FAQ (miroir exact du FAQPage de lib/jsonld.ts) */}
          <section id="faq" className="pt-section">
            <span className="g-label">{t('faq_label')}</span>
            <h2>{t('faq_h2')}</h2>
            <div className="g-faq">
              {faqPairs(partenairesFaqTx, lang).map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <div className="g-faq__a">{a}</div>
                </details>
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
              <ImgIcon name="email" ext="svg" dir="cowo-icons" className="pt-card__ic" />
              <Email user="contact" />
            </div>
            <div className="pt-card__row">
              <ImgIcon name="telephone" ext="svg" dir="cowo-icons" className="pt-card__ic" />
              <a href="tel:+33761564556">07 61 56 45 56</a>
            </div>
            <div className="pt-card__row pt-card__row--addr">
              <ImgIcon name="localisation" ext="svg" dir="cowo-icons" className="pt-card__ic" />
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
