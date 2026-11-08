/**
 * Contenu des sous-pages « domaines » d'Alatere forMa (bilingue FR/EN).
 * Porté depuis le handoff Grommet - rendu par <FormaDomainPage>.
 */

export type Bi = { fr: string; en: string };

export type FormaReferent = {
  /** Initiales affichées dans l'avatar monogramme. */
  initials: string;
  name: string;
  /** Sous-titre sous le nom (ex. « Consultant webmarketing - SEO… »). */
  detail: Bi;
  linkedin: string;
};

/** Programme lié à sa fiche du catalogue (durée affichée en badge). */
export type FormaProgram = Bi & { url?: string; hours?: string };

/** Groupe thématique de programmes (pages domaines riches). */
export type FormaProgramGroup = { title: Bi; intro?: Bi; items: FormaProgram[] };

/** Bloc éditorial optionnel (ex. obligation réglementaire). */
export type FormaExplainer = { tag: Bi; title: Bi; paras: Bi[]; bullets?: Bi[]; after?: Bi[] };

export type FormaDomain = {
  slug: string;
  /** H1 si différent du nom court (fil d'Ariane). */
  h1?: Bi;
  /** Bloc éditorial affiché après le hero. */
  explainer?: FormaExplainer;
  /** Si présent : programmes par thème, à la place de la liste simple. */
  programGroups?: FormaProgramGroup[];
  /** Nom d'icône (composant <Icon>). */
  icon: string;
  metaTitle: Bi;
  metaDescription: string;
  /** Feuille du fil d'Ariane + titre H1. */
  name: Bi;
  tag: Bi;
  lead: Bi;
  facts: Bi[];
  skills: Bi[];
  programs: Bi[];
  audiences: Bi[];
  prereqs: Bi[];
  outcomes: Bi[];
  /** Si présent : bloc « formateur référent » nominatif (sinon bloc équipe générique). */
  referent?: FormaReferent;
};

const CAT = 'https://alatere-web.catalogueformpro.com';

export const FORMA_DOMAINS: FormaDomain[] = [
  {
    slug: 'webmarketing',
    icon: 'bar-chart-3',
    metaTitle: {
      fr: "Formation webmarketing financée par l'OPCO | Alatere forMa",
      en: 'Web marketing training funded by your OPCO | Alatere forMa',
    },
    metaDescription:
      'Formations webmarketing à Antibes : SEO, SEA, social ads, analytics. Organisme Qualiopi, prise en charge OPCO. Devis sous 48 h.',
    name: { fr: 'Webmarketing', en: 'Web marketing' },
    tag: { fr: 'Notre métier historique', en: 'Our core business' },
    lead: {
      fr: "Le webmarketing est le premier métier d'Alatere Web, exercé en propre depuis 2003. Nous enseignons ce que nous pratiquons : référencement, publicité en ligne, mesure d'audience et conversion.",
      en: "Web marketing is Alatere Web's original business, run in-house since 2003. We teach what we practise: search, online advertising, analytics and conversion.",
    },
    facts: [
      { fr: '11 programmes au catalogue', en: '11 programs in the catalog' },
      { fr: 'Présentiel à Antibes ou distanciel', en: 'In person in Antibes or remote' },
      { fr: 'Individuel ou petit groupe (1 à 8)', en: 'One-to-one or small group (1–8)' },
      { fr: 'Finançable OPCO / CPF*', en: 'OPCO / CPF funding*' },
      { fr: 'Cas pratiques sur vos propres outils', en: 'Hands-on cases on your own tools' },
    ],
    skills: [
      { fr: 'Construire et piloter une stratégie de référencement naturel (SEO)', en: 'Build and run a natural search (SEO) strategy' },
      { fr: 'Créer, optimiser et suivre des campagnes Google Ads (SEA)', en: 'Create, optimize and track Google Ads (SEA) campaigns' },
      { fr: 'Concevoir des campagnes de publicité sur les réseaux sociaux', en: 'Design social media advertising campaigns' },
      { fr: 'Analyser la performance avec Google Analytics 4', en: 'Analyze performance with Google Analytics 4' },
      { fr: 'Adapter son référencement aux moteurs de réponse IA (AEO / GEO)', en: 'Adapt search to AI answer engines (AEO / GEO)' },
      { fr: "Améliorer le taux de conversion d'un site e-commerce", en: "Improve an e-commerce site's conversion rate" },
    ],
    programs: [
      { fr: 'Fondamentaux du référencement naturel (SEO)', en: 'SEO fundamentals' },
      { fr: 'SEO avancé : technique & contenu', en: 'Advanced SEO: technical & content' },
      { fr: 'Google Ads (SEA) : créer et piloter ses campagnes', en: 'Google Ads (SEA): build and run campaigns' },
      { fr: 'Publicité sur les réseaux sociaux (Social Ads)', en: 'Social media advertising (Social Ads)' },
      { fr: 'Google Analytics 4 & pilotage de la performance', en: 'Google Analytics 4 & performance tracking' },
      { fr: "AEO / GEO : le référencement à l'ère de l'IA", en: 'AEO / GEO: search in the AI era' },
      { fr: 'Stratégie e-commerce & taux de conversion', en: 'E-commerce strategy & conversion rate' },
      { fr: "Refonte de site & stratégie d'acquisition", en: 'Website redesign & acquisition strategy' },
    ],
    audiences: [
      { fr: 'Dirigeants et indépendants', en: 'Directors and freelancers' },
      { fr: 'Responsables marketing et communication', en: 'Marketing and communication managers' },
      { fr: 'E-commerçants et porteurs de projet', en: 'E-merchants and project owners' },
      { fr: "Équipes souhaitant internaliser l'acquisition", en: 'Teams looking to bring acquisition in-house' },
    ],
    prereqs: [
      { fr: "Usage courant du web et d'un ordinateur", en: 'Everyday use of the web and a computer' },
      { fr: 'Aucun prérequis technique en développement', en: 'No technical development prerequisite' },
    ],
    outcomes: [
      { fr: 'Piloter son SEO/SEA en autonomie', en: 'Run your own SEO/SEA independently' },
      { fr: 'Dialoguer efficacement avec une agence', en: 'Work effectively with an agency' },
      { fr: 'Monter en compétence en interne', en: 'Build skills in-house' },
    ],
    referent: {
      initials: 'RS',
      name: 'Richard Solaro',
      detail: {
        fr: 'Consultant webmarketing - SEO, SEA & acquisition',
        en: 'Web marketing consultant - SEO, SEA & acquisition',
      },
      linkedin: 'https://www.linkedin.com/in/richard-solaro-consultant-webmarketing/',
    },
  },

  {
    slug: 'intelligence-artificielle',
    icon: 'sparkles',
    metaTitle: {
      fr: 'Formation IA financée par votre OPCO | Alatere forMa',
      en: 'AI training funded by your OPCO | Alatere forMa',
    },
    metaDescription:
      'Formations intelligence artificielle à Antibes : IA générative, prompts, automatisation. Organisme Qualiopi, prise en charge OPCO. Devis sous 48 h.',
    name: { fr: 'Intelligence artificielle', en: 'Artificial intelligence' },
    tag: { fr: 'Sans prérequis technique', en: 'No technical prerequisite' },
    lead: {
      fr: "Des formations sans jargon pour utiliser l'IA générative au travail : rédiger des prompts, automatiser les tâches répétitives, produire textes et visuels, dans le respect de vos données (RGPD).",
      en: 'Jargon-free courses on using generative AI at work: writing prompts, automating repetitive tasks, producing text and visuals, while protecting your data (GDPR).',
    },
    facts: [
      { fr: '7 programmes au catalogue', en: '7 programs in the catalog' },
      { fr: 'Présentiel à Antibes ou distanciel', en: 'In person in Antibes or remote' },
      { fr: 'Aucune connaissance technique requise', en: 'No technical knowledge required' },
      { fr: 'Finançable OPCO', en: 'OPCO funding' },
      { fr: "Ateliers sur des cas réels d'entreprise", en: 'Workshops on real business cases' },
    ],
    skills: [
      { fr: "Comprendre les usages et limites de l'IA générative", en: 'Understand the uses and limits of generative AI' },
      { fr: 'Rédiger des prompts efficaces et réutilisables', en: 'Write effective, reusable prompts' },
      { fr: 'Automatiser des tâches répétitives du quotidien', en: 'Automate repetitive everyday tasks' },
      { fr: "Produire du contenu texte et visuel avec l'IA", en: 'Produce text and visual content with AI' },
      { fr: "Intégrer l'IA dans ses outils métiers existants", en: 'Integrate AI into your existing work tools' },
      { fr: 'Adopter une démarche responsable (données, RGPD)', en: 'Adopt a responsible approach (data, GDPR)' },
    ],
    programs: [
      { fr: "Découvrir l'IA générative pour les professionnels", en: 'Discovering generative AI for professionals' },
      { fr: 'Maîtriser le prompt engineering', en: 'Mastering prompt engineering' },
      { fr: "Automatiser ses tâches avec l'IA", en: 'Automating your tasks with AI' },
      { fr: "Intégrer l'IA dans ses outils métiers", en: 'Integrating AI into your work tools' },
    ],
    audiences: [
      { fr: 'Tous métiers et tous secteurs', en: 'All roles and sectors' },
      { fr: 'Dirigeants et managers', en: 'Directors and managers' },
      { fr: 'Équipes marketing, commerciales et administratives', en: 'Marketing, sales and admin teams' },
      { fr: 'Indépendants souhaitant gagner en productivité', en: 'Freelancers seeking productivity gains' },
    ],
    prereqs: [
      { fr: 'Aucune connaissance technique en IA', en: 'No technical AI knowledge' },
      { fr: "Usage courant d'un ordinateur et d'internet", en: 'Everyday use of a computer and the internet' },
    ],
    outcomes: [
      { fr: "Intégrer l'IA dans son quotidien professionnel", en: 'Embed AI into your daily work' },
      { fr: 'Gagner en productivité et en qualité', en: 'Gain in productivity and quality' },
      { fr: 'Diffuser de bonnes pratiques dans son équipe', en: 'Spread best practices across your team' },
    ],
  },

  {
    slug: 'langues',
    icon: 'languages',
    metaTitle: {
      fr: "Formations en langues financées par l'OPCO | Alatere forMa",
      en: 'Language courses funded by your OPCO | Alatere forMa',
    },
    metaDescription:
      'Anglais, italien et espagnol professionnels à Antibes, en individuel ou en groupe de 8. Organisme Qualiopi, prise en charge OPCO. Devis sous 48 h.',
    name: { fr: 'Langues', en: 'Languages' },
    tag: { fr: 'Usage professionnel', en: 'For professional use' },
    lead: {
      fr: "Anglais, italien et espagnol pour le travail : réunions, e-mails, négociation, vocabulaire de votre secteur. Un test de positionnement fixe votre point de départ, puis le rythme s'adapte, en individuel ou en groupe de 8 au plus.",
      en: 'English, Italian and Spanish for work: meetings, emails, negotiation, the vocabulary of your sector. A placement test sets your starting point, then the pace adapts, one-to-one or in groups of up to 8.',
    },
    facts: [
      { fr: '6 programmes au catalogue', en: '6 programs in the catalog' },
      { fr: 'Test de positionnement initial', en: 'Initial placement test' },
      { fr: 'Individuel ou petit groupe (1 à 8)', en: 'One-to-one or small group (1–8)' },
      { fr: 'Finançable OPCO / CPF*', en: 'OPCO / CPF funding*' },
      { fr: 'Présentiel à Antibes ou en visio', en: 'In person in Antibes or video' },
    ],
    skills: [
      { fr: 'Tenir une conversation professionnelle avec aisance', en: 'Hold a professional conversation with ease' },
      { fr: 'Rédiger e-mails et documents professionnels', en: 'Write professional emails and documents' },
      { fr: 'Maîtriser le vocabulaire technique de son secteur', en: "Master your sector's technical vocabulary" },
      { fr: 'Conduire une réunion ou une négociation', en: 'Run a meeting or a negotiation' },
      { fr: "Gagner en confiance à l'oral", en: 'Build confidence speaking' },
      { fr: 'Préparer un test ou une certification de langue', en: 'Prepare for a language test or certification' },
    ],
    programs: [
      { fr: 'Anglais professionnel - tous niveaux', en: 'Professional English - all levels' },
      { fr: 'Anglais commercial & relation client', en: 'Business English & customer relations' },
      { fr: 'Anglais technique du web & du marketing', en: 'Technical English for web & marketing' },
      { fr: 'Italien professionnel', en: 'Professional Italian' },
      { fr: 'Espagnol professionnel', en: 'Professional Spanish' },
      { fr: 'Préparation aux tests de langue', en: 'Language test preparation' },
    ],
    audiences: [
      { fr: 'Salariés et dirigeants', en: 'Employees and directors' },
      { fr: 'Indépendants en relation internationale', en: 'Freelancers working internationally' },
      { fr: 'Équipes commerciales et support', en: 'Sales and support teams' },
      { fr: 'Tout niveau, du débutant au confirmé', en: 'All levels, beginner to advanced' },
    ],
    prereqs: [
      { fr: 'Test de positionnement préalable', en: 'Prior placement test' },
      { fr: 'Aucun niveau minimum imposé', en: 'No minimum level required' },
    ],
    outcomes: [
      { fr: 'Travailler et échanger en langue étrangère', en: 'Work and communicate in a foreign language' },
      { fr: "Élargir son périmètre professionnel à l'international", en: 'Broaden your professional scope internationally' },
      { fr: 'Valoriser une certification de langue', en: 'Showcase a language certification' },
    ],
  },

  {
    slug: 'communication-digitale',
    icon: 'megaphone',
    metaTitle: {
      fr: "Communication digitale financée par l'OPCO | Alatere forMa",
      en: 'Digital communication funded by your OPCO | Alatere forMa',
    },
    metaDescription:
      'Réseaux sociaux et contenu à Antibes : ligne éditoriale, visuels Canva, vidéo courte. Organisme Qualiopi, prise en charge OPCO. Devis sous 48 h.',
    name: { fr: 'Communication digitale', en: 'Digital communication' },
    tag: { fr: 'Gagner en visibilité', en: 'Grow your visibility' },
    lead: {
      fr: 'Ligne éditoriale, animation des réseaux sociaux, visuels sur Canva, vidéos courtes : pendant la formation, vous travaillez sur vos propres comptes, avec des outils simples.',
      en: 'Editorial line, running social channels, visuals in Canva, short videos: during the course you work on your own accounts, with simple tools.',
    },
    facts: [
      { fr: '10 programmes au catalogue', en: '10 programs in the catalog' },
      { fr: 'Présentiel à Antibes ou distanciel', en: 'In person in Antibes or remote' },
      { fr: 'Individuel ou petit groupe (1 à 8)', en: 'One-to-one or small group (1–8)' },
      { fr: 'Finançable OPCO', en: 'OPCO funding' },
      { fr: 'Travail sur vos propres réseaux', en: 'Work on your own channels' },
    ],
    skills: [
      { fr: 'Définir une stratégie et une ligne éditoriale', en: 'Define a strategy and an editorial line' },
      { fr: 'Animer ses réseaux sociaux professionnels', en: 'Run your professional social channels' },
      { fr: 'Créer des visuels avec des outils simples (Canva)', en: 'Create visuals with simple tools (Canva)' },
      { fr: 'Concevoir du brand content et du storytelling', en: 'Design brand content and storytelling' },
      { fr: 'Produire des formats vidéo courts', en: 'Produce short video formats' },
      { fr: 'Gérer sa e-réputation et sa communauté', en: 'Manage your e-reputation and community' },
    ],
    programs: [
      { fr: 'Animer ses réseaux sociaux professionnels', en: 'Running your professional social channels' },
      { fr: 'Stratégie & ligne éditoriale', en: 'Strategy & editorial line' },
      { fr: 'Brand content & storytelling de marque', en: 'Brand content & brand storytelling' },
      { fr: 'Créer ses visuels avec Canva', en: 'Creating visuals with Canva' },
      { fr: 'Community management & e-réputation', en: 'Community management & e-reputation' },
    ],
    audiences: [
      { fr: 'TPE, PME et indépendants', en: 'Micro-businesses, SMEs and freelancers' },
      { fr: 'Chargés de communication et marketing', en: 'Communication and marketing officers' },
      { fr: 'Créateurs et porteurs de projet', en: 'Creators and project owners' },
      { fr: 'Toute personne en charge des réseaux', en: 'Anyone managing social channels' },
    ],
    prereqs: [
      { fr: 'Usage courant des réseaux sociaux', en: 'Everyday use of social media' },
      { fr: 'Aucun prérequis en création graphique', en: 'No graphic design prerequisite' },
    ],
    outcomes: [
      { fr: 'Gérer sa communication digitale en autonomie', en: 'Run your digital communication independently' },
      { fr: 'Structurer une présence de marque cohérente', en: 'Build a consistent brand presence' },
      { fr: 'Créer des contenus qui engagent', en: 'Create content that engages' },
    ],
  },

  {
    slug: 'immobilier',
    icon: 'building-2',
    metaTitle: {
      fr: 'Formation loi ALUR et droit immobilier à Antibes | Alatere forMa',
      en: 'ALUR-law and real-estate law training in Antibes | Alatere forMa',
    },
    metaDescription:
      '35 formations pour agents immobiliers : formation continue loi ALUR, droit immobilier, contentieux, marketing digital. Qualiopi, finançables OPCO, à Antibes.',
    name: { fr: 'Immobilier', en: 'Real estate' },
    h1: {
      fr: "Formations pour les professionnels de l'immobilier à Antibes",
      en: 'Training for real-estate professionals in Antibes',
    },
    tag: { fr: 'Formation continue loi ALUR', en: 'ALUR-law continuing education' },
    lead: {
      fr: "Agents immobiliers, négociateurs, gestionnaires locatifs et syndics : 35 formations pour valider votre formation continue obligatoire, sécuriser vos actes et développer votre agence. Chaque programme est adapté à votre activité et à votre niveau, dans nos locaux ou directement dans votre agence.",
      en: 'Estate agents, negotiators, letting managers and co-ownership managers: 35 courses to meet your mandatory continuing education, secure your transactions and grow your agency. Each program is adapted to your business and level, at our premises or in your agency.',
    },
    facts: [
      { fr: '35 programmes au catalogue', en: '35 programs in the catalog' },
      { fr: '14 h par an exigées pour la carte professionnelle', en: '14 h a year required for the professional card' },
      { fr: 'Présentiel à Antibes, en intra ou en format mixte', en: 'In person in Antibes, in-house or blended' },
      { fr: 'Finançable OPCO ou FAF', en: 'OPCO or FAF funding' },
      { fr: 'Attestation de formation continue remise', en: 'Continuing-education certificate provided' },
    ],
    explainer: {
      tag: { fr: 'Obligation légale', en: 'Legal requirement' },
      title: {
        fr: 'La formation continue obligatoire des agents immobiliers',
        en: 'Mandatory continuing education for estate agents',
      },
      paras: [
        {
          fr: 'Depuis la loi ALUR et le décret n° 2016-173 du 18 février 2016, le renouvellement de la carte professionnelle (transaction, gestion, syndic) est conditionné à une formation continue :',
          en: 'Since the ALUR law and decree no. 2016-173 of 18 February 2016, renewing the professional card (transactions, property management, co-ownership management) requires continuing education:',
        },
      ],
      bullets: [
        {
          fr: '14 heures par an, ou 42 heures sur trois années consécutives d\'exercice ;',
          en: '14 hours a year, or 42 hours over three consecutive years of practice;',
        },
        {
          fr: "dont, sur ces trois ans, au moins 2 heures de déontologie et au moins 2 heures sur la non-discrimination dans l'accès au logement (décret n° 2020-1259 du 14 octobre 2020) ;",
          en: 'including, over those three years, at least 2 hours of professional ethics and at least 2 hours on non-discrimination in access to housing (decree no. 2020-1259 of 14 October 2020);',
        },
        {
          fr: "pour les titulaires de la carte, mais aussi pour les personnes qu'ils habilitent : négociateurs salariés et agents commerciaux.",
          en: 'for card holders, and also for the people they authorize: salaried negotiators and commercial agents.',
        },
      ],
      after: [
        {
          fr: 'À l\'issue de chaque formation, nous remettons une attestation précisant les heures suivies et les thèmes traités, à joindre à votre demande de renouvellement auprès de la CCI.',
          en: 'After each course we issue a certificate stating the hours and topics covered, to attach to your renewal application with the CCI.',
        },
        {
          fr: 'Notre module Déontologie et non-discrimination (4 h) couvre en une demi-journée les deux thèmes obligatoires. Complété par un programme juridique de 7 h ou de 14 h, il vous permet de boucler vos heures de l\'année.',
          en: 'Our Ethics and non-discrimination module (4 h) covers both mandatory topics in half a day. Combined with a 7 h or 14 h legal course, it completes your hours for the year.',
        },
      ],
    },
    skills: [
      { fr: 'Valider ses heures de formation continue pour le renouvellement de la carte', en: 'Complete your continuing-education hours for card renewal' },
      { fr: 'Actualiser ses connaissances en droit immobilier et en déontologie', en: 'Update your knowledge of real-estate law and ethics' },
      { fr: 'Sécuriser ses mandats, ventes et baux', en: 'Secure your mandates, sales and leases' },
      { fr: 'Prévenir et gérer le contentieux locatif et de copropriété', en: 'Prevent and handle lettings and co-ownership disputes' },
      { fr: 'Respecter ses obligations LAB/FT (Tracfin)', en: 'Meet your AML/CFT (Tracfin) obligations' },
      { fr: "Développer son agence avec le marketing digital et l'IA", en: 'Grow your agency with digital marketing and AI' },
    ],
    programs: [],
    programGroups: [
      {
        title: { fr: 'Réglementation et déontologie', en: 'Regulation and professional ethics' },
        items: [
          { fr: "Les fondamentaux réglementaires de la profession d'agent immobilier", en: 'Regulatory fundamentals of the estate-agent profession', hours: '14 h', url: `${CAT}/8/immobilier/1512452/les-fondamentaux-reglementaires-de-la-profession-dagent-immobilier` },
          { fr: 'Déontologie et non-discrimination', en: 'Professional ethics and non-discrimination', hours: '4 h', url: `${CAT}/8/immobilier/1604576/formation-de-deontologie-et-non-discrimination` },
          { fr: 'Lutte contre le blanchiment et le financement du terrorisme (LAB/FT)', en: 'Anti-money-laundering and counter-terrorist financing (AML/CFT)', hours: '4 h', url: `${CAT}/8/immobilier/2333592/lutte-contre-le-blanchiment-dargent-et-le-financement-du-terrorisme-labft-immobilier` },
          { fr: 'Tracfin : vos obligations de vigilance LAB/FT en immobilier', en: 'Tracfin: your AML/CFT due-diligence duties in real estate', hours: '7 h', url: `${CAT}/8/immobilier/1522104/tracn-la-lutte-contre-le-blanchiment-dargent-et-le-nancement-du-terrorisme-en-immobilier-lab-ft` },
        ],
      },
      {
        title: { fr: 'Droit immobilier et transaction', en: 'Real-estate law and transactions' },
        items: [
          { fr: "Droit des contrats appliqué à l'immobilier", en: 'Contract law applied to real estate', hours: '14 h', url: `${CAT}/8/immobilier/1513918/droit-des-contrats-en-droit-immobilier-maitriser-les-fondamentaux-appliques-a-limmobilier` },
          { fr: "Les essentiels des contrats de vente, de location et d'urbanisme", en: 'Essentials of sale, lease and planning contracts', hours: '14 h', url: `${CAT}/8/immobilier/1512485/les-essentiels-des-contrats-de-vente-de-location-et-durbanisme` },
          { fr: "L'essentiel juridique de la vente immobilière", en: 'Legal essentials of property sales', hours: '7 h', url: `${CAT}/8/immobilier/1589997/lessentiel-juridique-de-la-vente-immobiliere` },
          { fr: "Vente en état futur d'achèvement (VEFA)", en: 'Off-plan sales (VEFA)', hours: '7 h', url: `${CAT}/8/immobilier/1590429/maitriser-les-fondamentaux-de-la-vente-en-etat-futur-dachevement-vefa` },
          { fr: 'La vente en viager', en: 'Life-annuity sales (viager)', hours: '7 h', url: `${CAT}/8/immobilier/1512495/la-vente-en-viager` },
          { fr: 'Le démembrement de propriété', en: 'Split ownership (usufruct and bare ownership)', hours: '7 h', url: `${CAT}/8/immobilier/1506382/demembrement-de-la-propriete` },
          { fr: 'Transmission de patrimoine immobilier et droits de succession', en: 'Passing on real-estate assets and inheritance tax', hours: '7 h', url: `${CAT}/8/immobilier/1590149/connaitre-les-fondamentaux-de-la-transmission-de-patrimoine-immobilier-a-titre-gratuit-et-des-droits` },
          { fr: 'Les diagnostics immobiliers', en: 'Property surveys and diagnostics', hours: '7 h', url: `${CAT}/8/immobilier/1451149/les-diagnostics-immobiliers` },
          { fr: "Les documents d'urbanisme à l'échelle communale", en: 'Local planning documents', hours: '7 h', url: `${CAT}/8/immobilier/1512435/lessentiel-des-documents-durbanisme-a-lechelle-communale` },
        ],
      },
      {
        title: { fr: 'Gestion locative, copropriété et contentieux', en: 'Lettings, co-ownership and disputes' },
        intro: { fr: "Sur la Côte d'Azur, la location saisonnière et la copropriété concentrent une grande partie des litiges : ces formations donnent les réflexes pour prévenir un impayé, conduire un recouvrement et gérer un désaccord en assemblée générale.", en: "On the Côte d'Azur, holiday lets and co-ownership account for many disputes: these courses give you the reflexes to prevent unpaid rent, run a recovery procedure and handle disagreements at general meetings." },
        items: [
          { fr: 'Gestion des revenus locatifs : du bail au recouvrement et au contentieux', en: 'Rental income: from the lease to rent recovery and disputes', hours: '7 h', url: `${CAT}/8/immobilier/1453141/la-gestion-des-revenus-locatifs-de-la-conclusion-du-bail-au-recouvrement-des-loyers-et-contentieux` },
          { fr: 'Copropriété : charges, travaux et contentieux', en: 'Co-ownership: service charges, works and disputes', hours: '7 h', url: `${CAT}/8/immobilier/1506372/copropriete-charges-travaux-et-contentieux` },
          { fr: 'Location meublée et location saisonnière : le cadre juridique', en: 'Furnished and holiday lets: the legal framework', hours: '7 h', url: `${CAT}/8/immobilier/1512491/maitriser-le-cadre-juridique-de-la-location-meublee-et-de-la-location-saisonniere` },
        ],
      },
      {
        title: { fr: 'Marketing digital et intelligence artificielle', en: 'Digital marketing and artificial intelligence' },
        items: [
          { fr: "Google Ads pour l'immobilier - niveau débutant", en: 'Google Ads for real estate - beginner', hours: '7 h', url: `${CAT}/0/webmarketing/1611369/promouvoir-une-agence-immobiliere-sur-google-avec-google-ads-niveau-debutant` },
          { fr: "Google Ads pour l'immobilier - niveau avancé", en: 'Google Ads for real estate - advanced', hours: '7 h', url: `${CAT}/0/webmarketing/1645440/promouvoir-une-agence-immobiliere-sur-google-avec-google-ads-niveau-avance` },
          { fr: 'Attirer de nouveaux clients avec Google Ads - parcours complet', en: 'Win new clients with Google Ads - full course', hours: '21 h', url: `${CAT}/0/webmarketing/3213846/attirer-de-nouveaux-clients-dans-limmobilier-avec-google-ads` },
          { fr: "Facebook et Instagram Ads pour l'activité immobilière", en: 'Facebook and Instagram Ads for real estate', hours: '7 h', url: `${CAT}/0/webmarketing/1645421/promouvoir-son-activite-immobiliere-sur-facebook-et-instagram-avec-facebook-ads-et-meta-business-man` },
          { fr: "Référencement SEO pour l'immobilier - débutant", en: 'SEO for real estate - beginner', hours: '7 h', url: `${CAT}/0/webmarketing/1611197/les-principes-de-bases-du-referencement-et-seo-pour-le-secteur-de-limmobilier-niveau-debutant` },
          { fr: 'SEO local et fiche Google Business Profile pour une agence', en: 'Local SEO and Google Business Profile for an agency', hours: '7 h', url: `${CAT}/8/immobilier/1974769/optimisation-du-seo-local-et-google-my-business-pour-le-secteur-immobilier` },
          { fr: 'Réseaux sociaux pour le secteur immobilier', en: 'Social media for real estate', hours: '7 h', url: `${CAT}/8/immobilier/1974699/reseaux-sociaux-pour-le-secteur-immobilier` },
          { fr: 'Photographie immobilière au smartphone', en: 'Real-estate photography with a smartphone', hours: '7 h', url: `${CAT}/6/outils-numeriques/1746708/reussir-ses-photographies-immobilieres-avec-son-smartphone` },
          { fr: 'Photos immobilières au smartphone et diffusion sur les réseaux', en: 'Smartphone property photos and social-media publishing', hours: '14 h', url: `${CAT}/0/webmarketing/1746753/reussir-ses-photographies-immobilier-avec-son-smartphone-et-les-diffuser-sur-les-reseaux-sociaux` },
          { fr: 'Canva : créer les visuels de votre agence', en: "Canva: create your agency's visuals", hours: '7 h', url: `${CAT}/8/immobilier/1953198/canva-et-immobilier-creation-de-visuels-attractifs-pour-votre-agence` },
          { fr: "Booster vos annonces et votre trafic web avec l'IA", en: 'Boost your listings and web traffic with AI', hours: '10 h', url: `${CAT}/8/immobilier/1988812/revolutionnez-votre-marketing-immobilier-boostez-annonces-et-trafic-web-avec-lia` },
          { fr: "Déployer l'intelligence artificielle dans votre agence", en: 'Deploying AI in your agency', hours: '7 h', url: `${CAT}/6/outils-numeriques/1629708/deployer-lintelligence-artificielle-au-sein-de-son-agence-immobiliere` },
          { fr: "L'intelligence artificielle au cœur de votre agence immobilière", en: 'AI at the heart of your real-estate agency', url: `${CAT}/8/immobilier/1645657/deployer-lintelligence-artificielle-au-coeur-de-votre-agence-immobiliere` },
          { fr: 'Claude AI pour la gestion immobilière, la relation client et le syndic', en: 'Claude AI for property management, client relations and co-ownership management', hours: '10 h', url: `${CAT}/1/management/3079755/maitriser-claude-ai-pour-optimiser-la-gestion-immobiliere-la-relation-client-et-les-taches-de-syndic` },
          { fr: 'Organiser votre agence avec Notion', en: 'Organizing your agency with Notion', hours: '25 h', url: `${CAT}/8/immobilier/2287297/optimisez-la-gestion-de-votre-agence-immobiliere-avec-notion` },
        ],
      },
      {
        title: { fr: 'Langues et relation client', en: 'Languages and client relations' },
        items: [
          { fr: 'Anglais immobilier pour une clientèle internationale', en: 'Real-estate English for international clients', hours: '32 h', url: `${CAT}/8/immobilier/2002916/anglais-immobilier-maitrisez-la-langue-pour-reussir-avec-une-clientele-internationale` },
          { fr: "Anglais professionnel pour l'immobilier", en: 'Professional English for real estate', hours: '7 h', url: `${CAT}/2/langues/1645428/anglais-professionnel-pour-limmobilier` },
          { fr: "Italien professionnel pour l'immobilier", en: 'Professional Italian for real estate', hours: '7 h', url: `${CAT}/8/immobilier/1977428/italien-professionnel-pour-limmobilier` },
          { fr: 'Mieux gérer la communication et les conflits avec vos clients', en: 'Better handling of communication and conflict with clients', hours: '7 h', url: `${CAT}/8/immobilier/1820759/mieux-gerer-la-communication-et-les-conflits-pour-les-agents-immobiliers-par-le-bien-etre-et-lhypnos` },
        ],
      },
    ],
    audiences: [
      { fr: 'Agents immobiliers et responsables d\'agence', en: 'Estate agents and agency managers' },
      { fr: 'Négociateurs salariés et agents commerciaux', en: 'Salaried negotiators and commercial agents' },
      { fr: 'Gestionnaires locatifs et syndics de copropriété', en: 'Letting managers and co-ownership managers' },
      { fr: 'Assistants et collaborateurs d\'agence', en: 'Agency assistants and staff' },
    ],
    prereqs: [
      { fr: "Exercer une activité dans l'immobilier", en: 'Working in the real-estate sector' },
      { fr: 'Aucun prérequis technique', en: 'No technical prerequisite' },
    ],
    outcomes: [
      { fr: 'Renouveler sa carte professionnelle sereinement', en: 'Renew your professional card with peace of mind' },
      { fr: 'Sécuriser ses pratiques et ses dossiers', en: 'Make your practices and files more secure' },
      { fr: 'Moderniser son approche commerciale', en: 'Modernize your commercial approach' },
    ],
    referent: {
      initials: 'HM',
      name: 'Hélène Michailou',
      detail: {
        fr: 'Juriste - formatrice en droit immobilier et déontologie',
        en: 'Lawyer - trainer in real-estate law and professional ethics',
      },
      linkedin: 'https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-michailou-74b1a81/',
    },
  },
];

export const FORMA_DOMAIN_BY_SLUG: Record<string, FormaDomain> = Object.fromEntries(
  FORMA_DOMAINS.map((d) => [d.slug, d]),
);

/**
 * FAQ par domaine (visible + FAQPage JSON-LD). Questions en langage naturel,
 * réponses auto-portantes - format privilégié par les moteurs IA.
 */
export const FORMA_FAQ: Record<string, { q: Bi; a: Bi }[]> = {
  webmarketing: [
    {
      q: {
        fr: 'Les formations webmarketing sont-elles finançables par mon OPCO ou le CPF ?',
        en: 'Can the web marketing courses be funded by my OPCO or the CPF?',
      },
      a: {
        fr: "Oui. Nos formations webmarketing sont finançables par votre OPCO (plan de développement des compétences) et certaines sont éligibles au CPF. Alatere Web SAS (marque Alatere forMa) est certifié Qualiopi sous le n° 93.06.07588.06, condition d'accès aux financements publics et mutualisés.",
        en: 'Yes. Our web marketing courses can be funded by your OPCO (skills development plan) and some are CPF-eligible. Alatere Web SAS (Alatere forMa brand) is Qualiopi-certified under no. 93.06.07588.06, a requirement to access public and pooled funding.',
      },
    },
    {
      q: {
        fr: 'Faut-il des prérequis techniques pour se former au SEO ou au SEA ?',
        en: 'Are technical prerequisites required to learn SEO or SEA?',
      },
      a: {
        fr: "Non. Un usage courant du web et d'un ordinateur suffit : aucun prérequis en développement n'est demandé. Après un positionnement initial, le parcours est adapté à votre niveau, en individuel ou en petit groupe (1 à 8).",
        en: 'No. Everyday use of the web and a computer is enough: no development background is required. After an initial assessment, the course is adapted to your level, one-to-one or in a small group (1–8).',
      },
    },
    {
      q: {
        fr: 'Les formations ont-elles lieu à Antibes ou à distance ?',
        en: 'Are the courses held in Antibes or remotely?',
      },
      a: {
        fr: 'Les deux : en présentiel à Antibes (9 Bd Albert 1er), en intra-entreprise ou en distanciel synchrone. Le devis personnalisé est envoyé sous 48 heures et le démarrage intervient en moyenne sous 14 jours.',
        en: 'Both: in person in Antibes (9 Bd Albert 1er), on company premises or via synchronous remote sessions. The personalized quote is sent within 48 hours and courses start within 14 days on average.',
      },
    },
  ],
  'intelligence-artificielle': [
    {
      q: {
        fr: 'Faut-il des connaissances techniques pour suivre une formation en intelligence artificielle ?',
        en: 'Do I need technical knowledge to take an artificial intelligence course?',
      },
      a: {
        fr: "Non, aucune. Nos formations IA s'adressent à tous les métiers, sans prérequis technique : un usage courant d'un ordinateur et d'internet suffit. Les ateliers s'appuient sur des cas réels d'entreprise.",
        en: 'No, none. Our AI courses are open to all roles, with no technical prerequisite: everyday use of a computer and the internet is enough. Workshops are based on real business cases.',
      },
    },
    {
      q: {
        fr: "Quels usages de l'IA apprend-on concrètement ?",
        en: 'What concrete uses of AI do you learn?',
      },
      a: {
        fr: "Nos parcours couvrent l'IA générative (texte et image), le prompt engineering, l'automatisation des tâches répétitives et l'intégration de l'IA dans vos outils métiers, avec une démarche responsable (données, RGPD).",
        en: 'Our courses cover generative AI (text and image), prompt engineering, automation of repetitive tasks and embedding AI into your work tools, with a responsible approach (data, GDPR).',
      },
    },
    {
      q: {
        fr: 'Ces formations en IA sont-elles finançables ?',
        en: 'Can these AI courses be funded?',
      },
      a: {
        fr: 'Oui, par votre OPCO dans le cadre du plan de développement des compétences. Alatere forMa (Alatere Web SAS) est certifié Qualiopi sous le n° 93.06.07588.06. Devis sous 48 heures, démarrage sous 14 jours en moyenne.',
        en: 'Yes, through your OPCO as part of the skills development plan. Alatere forMa (Alatere Web SAS) is Qualiopi-certified under no. 93.06.07588.06. Quote within 48 hours, start within 14 days on average.',
      },
    },
  ],
  langues: [
    {
      q: {
        fr: 'Quelles langues proposez-vous et à quel niveau ?',
        en: 'Which languages do you offer and at what level?',
      },
      a: {
        fr: "Anglais, italien et espagnol, axés sur l'usage professionnel : conversation, e-mails, vocabulaire technique, réunions et négociation. Du débutant au confirmé, avec préparation possible aux tests de langue.",
        en: 'English, Italian and Spanish, focused on professional use: conversation, emails, technical vocabulary, meetings and negotiation. From beginner to advanced, with optional language-test preparation.',
      },
    },
    {
      q: {
        fr: 'Comment mon niveau de départ est-il déterminé ?',
        en: 'How is my starting level determined?',
      },
      a: {
        fr: "Par un test de positionnement initial. Aucun niveau minimum n'est imposé : le rythme et le contenu sont adaptés à votre niveau et à vos objectifs, en individuel ou en petit groupe (1 à 8).",
        en: 'Through an initial placement test. No minimum level is required: the pace and content are adapted to your level and goals, one-to-one or in a small group (1–8).',
      },
    },
    {
      q: {
        fr: 'Les formations en langues sont-elles éligibles au CPF ?',
        en: 'Are the language courses CPF-eligible?',
      },
      a: {
        fr: 'Selon le programme : nos formations en langues sont finançables par votre OPCO et certaines sont éligibles au CPF. Organisme certifié Qualiopi sous le n° 93.06.07588.06.',
        en: 'Depending on the program: our language courses can be funded by your OPCO and some are CPF-eligible. Qualiopi-certified provider under no. 93.06.07588.06.',
      },
    },
  ],
  'communication-digitale': [
    {
      q: {
        fr: "À qui s'adressent les formations en communication digitale ?",
        en: 'Who are the digital communication courses for?',
      },
      a: {
        fr: "Aux TPE, PME et indépendants, aux chargés de communication et marketing, aux créateurs et à toute personne en charge des réseaux sociaux. Aucun prérequis en création graphique n'est nécessaire.",
        en: 'Micro-businesses, SMEs and freelancers, communication and marketing officers, creators and anyone managing social channels. No graphic design prerequisite is needed.',
      },
    },
    {
      q: {
        fr: 'Travaille-t-on sur mes propres réseaux pendant la formation ?',
        en: 'Do we work on my own channels during the course?',
      },
      a: {
        fr: 'Oui. Vous travaillez sur vos propres réseaux et contenus : stratégie et ligne éditoriale, visuels avec Canva, formats vidéo courts, community management et e-réputation.',
        en: 'Yes. You work on your own channels and content: strategy and editorial line, visuals with Canva, short video formats, community management and e-reputation.',
      },
    },
    {
      q: {
        fr: 'Ces formations sont-elles finançables OPCO ?',
        en: 'Can these courses be funded by an OPCO?',
      },
      a: {
        fr: 'Oui, par votre OPCO (plan de développement des compétences). Alatere forMa (Alatere Web SAS) est certifié Qualiopi sous le n° 93.06.07588.06. Devis personnalisé sous 48 heures.',
        en: 'Yes, through your OPCO (skills development plan). Alatere forMa (Alatere Web SAS) is Qualiopi-certified under no. 93.06.07588.06. Personalized quote within 48 hours.',
      },
    },
  ],
  immobilier: [
    {
      q: { fr: "Combien d'heures de formation un agent immobilier doit-il suivre ?", en: 'How many hours of training must an estate agent complete?' },
      a: { fr: "14 heures par an ou 42 heures sur trois années consécutives d'exercice, dont au moins 2 heures de déontologie et 2 heures sur la non-discrimination dans l'accès au logement sur la période (décret n° 2016-173 modifié).", en: '14 hours a year or 42 hours over three consecutive years of practice, including at least 2 hours of professional ethics and 2 hours on non-discrimination in access to housing over the period (amended decree no. 2016-173).' },
    },
    {
      q: { fr: "Qui est concerné par l'obligation de formation continue ?", en: 'Who is subject to the continuing-education requirement?' },
      a: { fr: "Les titulaires de la carte professionnelle (transaction, gestion immobilière, syndic) et les personnes qu'ils habilitent à négocier pour leur compte : négociateurs salariés et agents commerciaux.", en: 'Holders of the professional card (transactions, property management, co-ownership management) and the people they authorize to negotiate on their behalf: salaried negotiators and commercial agents.' },
    },
    {
      q: { fr: 'Vos formations sont-elles prises en compte pour le renouvellement de ma carte ?', en: 'Do your courses count towards renewing my card?' },
      a: { fr: "Nos programmes portent sur l'activité des professionnels de l'immobilier. Chaque participant reçoit une attestation mentionnant la durée et les thèmes traités, à joindre au dossier de renouvellement déposé auprès de la CCI.", en: 'Our programs cover the work of real-estate professionals. Each participant receives a certificate stating the duration and topics covered, to attach to the renewal application filed with the CCI.' },
    },
    {
      q: { fr: 'Comment faire financer ma formation immobilier ?', en: 'How can I get my real-estate training funded?' },
      a: { fr: "Pour un salarié, par l'OPCO de l'agence ; pour un indépendant ou un agent commercial, par le fonds d'assurance formation dont il dépend. Alatere forMa (Alatere Web SAS) est certifié Qualiopi sous le n° 93.06.07588.06, condition de cette prise en charge, et nous préparons la demande avec vous.", en: "For employees, through the agency's OPCO; for freelancers and commercial agents, through their training insurance fund (FAF). Alatere forMa (Alatere Web SAS) is Qualiopi-certified under no. 93.06.07588.06, a condition for this funding, and we prepare the application with you." },
    },
    {
      q: { fr: 'Pouvez-vous former toute mon équipe dans mon agence ?', en: 'Can you train my whole team at my agency?' },
      a: { fr: 'Oui. En intra, nous adaptons le programme, les exemples et le calendrier à votre agence, sur un ou plusieurs thèmes. Les sessions inter-entreprises ont lieu dans nos locaux au 9 boulevard Albert 1er à Antibes, et plusieurs programmes existent en format mixte.', en: 'Yes. In-house, we adapt the program, examples and schedule to your agency, on one or several topics. Inter-company sessions take place at our premises, 9 boulevard Albert 1er in Antibes, and several programs are available in blended format.' },
    },
    {
      q: { fr: 'Proposez-vous des formations en droit immobilier et en contentieux ?', en: 'Do you offer training in real-estate law and disputes?' },
      a: { fr: "Oui : droit des contrats, vente, VEFA, viager, démembrement, succession, ainsi que le contentieux locatif et de copropriété. Ces programmes, animés par notre formatrice juriste, s'adressent aux agents, gestionnaires et syndics qui veulent sécuriser leurs dossiers.", en: 'Yes: contract law, sales, off-plan sales, life annuities, split ownership, inheritance, as well as lettings and co-ownership disputes. These programs, taught by our lawyer trainer, are for agents, managers and co-ownership managers who want to secure their files.' },
    },
  ],
};
