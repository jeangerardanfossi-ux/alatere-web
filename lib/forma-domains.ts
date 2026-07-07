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

export type FormaDomain = {
  slug: string;
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

export const FORMA_DOMAINS: FormaDomain[] = [
  {
    slug: 'webmarketing',
    icon: 'bar-chart-3',
    metaTitle: {
      fr: 'Alatere forMa - Webmarketing : SEO, SEA & acquisition',
      en: 'Alatere forMa - Web marketing: SEO, SEA & acquisition',
    },
    metaDescription:
      'Formations webmarketing à Antibes : SEO, SEA, AEO, social ads, analytics et e-commerce. Organisme certifié Qualiopi, financement OPCO.',
    name: { fr: 'Webmarketing', en: 'Web marketing' },
    tag: { fr: 'Notre métier historique', en: 'Our core business' },
    lead: {
      fr: "Le webmarketing est le métier fondateur d'Alatere Web, opéré en propre depuis 2003. Nous transmettons par la pratique les leviers d'acquisition qui font réellement croître une activité : référencement, publicité, mesure et conversion.",
      en: "Web marketing is Alatere Web's founding business, run in-house since 2003. We teach, through practice, the acquisition levers that truly grow a business: search, advertising, measurement and conversion.",
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
      { fr: "Adapter son référencement à l'ère de l'IA (AEO / GEO)", en: 'Adapt search to the AI era (AEO / GEO)' },
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
      fr: 'Alatere forMa - Intelligence artificielle pour les pros',
      en: 'Alatere forMa - Artificial intelligence for professionals',
    },
    metaDescription:
      'Formations intelligence artificielle à Antibes : IA générative, prompt engineering, automatisation, intégration métier. Certifié Qualiopi.',
    name: { fr: 'Intelligence artificielle', en: 'Artificial intelligence' },
    tag: { fr: "Monter à bord de l'IA", en: 'Getting on board with AI' },
    lead: {
      fr: "L'IA générative transforme le quotidien des entreprises. Nos formations, sans jargon, vous apprennent à l'utiliser concrètement : gagner du temps, produire mieux et intégrer ces outils dans vos métiers - en toute maîtrise.",
      en: 'Generative AI is transforming everyday business. Our jargon-free courses teach you to use it concretely: save time, produce better and embed these tools into your work - with full control.',
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
      fr: 'Alatere forMa - Langues professionnelles',
      en: 'Alatere forMa - Professional languages',
    },
    metaDescription:
      'Formations en langues à Antibes : anglais, italien et espagnol professionnels, en individuel ou petit groupe. Certifié Qualiopi, CPF.',
    name: { fr: 'Langues', en: 'Languages' },
    tag: { fr: 'Communiquer sans frontière', en: 'Communicate without borders' },
    lead: {
      fr: "Anglais, italien, espagnol : nos parcours de langues sont centrés sur l'usage professionnel réel. Positionnement initial, rythme adapté et petits effectifs pour progresser vite et durablement.",
      en: 'English, Italian, Spanish: our language paths focus on real professional use. Initial assessment, adapted pace and small groups to progress quickly and lastingly.',
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
      fr: 'Alatere forMa - Communication digitale',
      en: 'Alatere forMa - Digital communication',
    },
    metaDescription:
      'Formations communication digitale à Antibes : réseaux sociaux, brand content, stratégie éditoriale, création de contenu. Certifié Qualiopi.',
    name: { fr: 'Communication digitale', en: 'Digital communication' },
    tag: { fr: 'Gagner en visibilité', en: 'Grow your visibility' },
    lead: {
      fr: 'Réseaux sociaux, contenus, ligne éditoriale : apprenez à construire une présence digitale cohérente et à créer des contenus qui engagent votre audience, avec des outils accessibles à tous.',
      en: 'Social media, content, editorial line: learn to build a consistent digital presence and create content that engages your audience, with tools accessible to everyone.',
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
      fr: 'Alatere forMa - Formations immobilier (loi ALUR)',
      en: 'Alatere forMa - Real-estate training (ALUR law)',
    },
    metaDescription:
      'Formations professionnelles immobilier à Antibes : formation continue loi ALUR, déontologie, marketing digital immobilier. Certifié Qualiopi.',
    name: { fr: 'Immobilier', en: 'Real estate' },
    tag: { fr: 'Répondre à vos obligations', en: 'Meet your obligations' },
    lead: {
      fr: "Des formations dédiées aux professionnels de l'immobilier : satisfaites à vos obligations de formation continue (loi ALUR) tout en développant vos compétences digitales et commerciales.",
      en: 'Training dedicated to real-estate professionals: meet your continuing-education requirements (ALUR law) while developing your digital and commercial skills.',
    },
    facts: [
      { fr: '35 programmes au catalogue', en: '35 programs in the catalog' },
      { fr: "Conforme à l'obligation loi ALUR", en: 'Compliant with the ALUR law requirement' },
      { fr: 'Présentiel à Antibes ou distanciel', en: 'In person in Antibes or remote' },
      { fr: 'Finançable OPCO', en: 'OPCO funding' },
      { fr: 'Attestation de formation continue', en: 'Continuing-education certificate' },
    ],
    skills: [
      { fr: 'Actualiser ses connaissances juridiques et déontologiques', en: 'Update your legal and ethical knowledge' },
      { fr: 'Maîtriser le cadre légal de la transaction', en: 'Master the legal framework of transactions' },
      { fr: 'Déployer un marketing digital immobilier efficace', en: 'Deploy effective real-estate digital marketing' },
      { fr: 'Utiliser les outils numériques (visite virtuelle, CRM)', en: 'Use digital tools (virtual tours, CRM)' },
      { fr: 'Renforcer sa relation client et sa négociation', en: 'Strengthen client relations and negotiation' },
    ],
    programs: [
      { fr: 'Formation continue loi ALUR (14 h)', en: 'ALUR-law continuing education (14 h)' },
      { fr: "Déontologie & cadre légal de l'agent immobilier", en: 'Ethics & legal framework for estate agents' },
      { fr: "Marketing digital pour l'immobilier", en: 'Digital marketing for real estate' },
    ],
    audiences: [
      { fr: 'Agents et négociateurs immobiliers', en: 'Estate agents and negotiators' },
      { fr: 'Mandataires et conseillers', en: 'Sales agents and advisors' },
      { fr: "Responsables d'agence", en: 'Agency managers' },
    ],
    prereqs: [
      { fr: "Exercer une activité dans l'immobilier", en: 'Working in the real-estate sector' },
      { fr: 'Aucun prérequis technique', en: 'No technical prerequisite' },
    ],
    outcomes: [
      { fr: 'Valider son obligation de formation ALUR', en: 'Validate your ALUR training obligation' },
      { fr: 'Sécuriser ses pratiques professionnelles', en: 'Make your professional practices more secure' },
      { fr: 'Moderniser son approche commerciale', en: 'Modernize your commercial approach' },
    ],
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
        en: 'No. Everyday use of the web and a computer is enough: no development background is required. After an initial assessment, the course is tailored to your level, one-to-one or in a small group (1–8).',
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
        en: 'Through an initial placement test. No minimum level is required: the pace and content are tailored to your level and goals, one-to-one or in a small group (1–8).',
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
        fr: 'Oui. Les parcours sont concrets : vous travaillez sur vos propres réseaux et contenus - stratégie et ligne éditoriale, visuels avec Canva, formats vidéo courts, community management et e-réputation.',
        en: 'Yes. The courses are hands-on: you work on your own channels and content - strategy and editorial line, visuals with Canva, short video formats, community management and e-reputation.',
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
      q: {
        fr: "Vos formations répondent-elles à l'obligation de formation loi ALUR ?",
        en: 'Do your courses meet the ALUR-law training requirement?',
      },
      a: {
        fr: "Oui. Nos formations immobilier permettent de satisfaire à votre obligation de formation continue (loi ALUR) et donnent lieu à une attestation de formation continue.",
        en: 'Yes. Our real-estate courses help you meet your continuing-education requirement (ALUR law) and lead to a continuing-education certificate.',
      },
    },
    {
      q: {
        fr: "À qui s'adressent ces formations immobilier ?",
        en: 'Who are these real-estate courses for?',
      },
      a: {
        fr: "Aux agents et négociateurs immobiliers, mandataires, conseillers et responsables d'agence. Le seul prérequis est d'exercer une activité dans l'immobilier ; aucun prérequis technique n'est demandé.",
        en: 'Estate agents and negotiators, sales agents, advisors and agency managers. The only prerequisite is working in the real-estate sector; no technical prerequisite is required.',
      },
    },
    {
      q: {
        fr: 'Les formations sont-elles finançables et où ont-elles lieu ?',
        en: 'Can the courses be funded and where do they take place?',
      },
      a: {
        fr: 'Elles sont finançables par votre OPCO, en présentiel à Antibes ou en distanciel. Organisme certifié Qualiopi sous le n° 93.06.07588.06.',
        en: 'They can be funded by your OPCO, in person in Antibes or remotely. Qualiopi-certified provider under no. 93.06.07588.06.',
      },
    },
  ],
};
