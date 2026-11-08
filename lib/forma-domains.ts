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
      fr: 'Formation SEO et webmarketing à Antibes | Alatere forMa',
      en: 'SEO and web marketing training in Antibes | Alatere forMa',
    },
    metaDescription:
      'Formation SEO, Google Ads et marketing digital à Antibes, sur votre propre site. Organisme Qualiopi, finançable OPCO ou FAF. Devis sous 48 h.',
    name: { fr: 'Webmarketing', en: 'Web marketing' },
    h1: {
      fr: 'Formations SEO et webmarketing à Antibes',
      en: 'SEO and web marketing training in Antibes',
    },
    tag: { fr: 'Notre métier depuis 2003', en: 'Our business since 2003' },
    lead: {
      fr: 'Votre site existe, mais vos clients le trouvent-ils ? Nos formations en marketing digital vous apprennent à attirer des visiteurs qualifiés et à les transformer en clients : référencement naturel (SEO), Google Ads, publicité sur les réseaux sociaux, site WordPress et prospection automatisée. Nous enseignons ce que nous pratiquons sur nos propres sites depuis 2003.',
      en: 'Your website exists, but can your customers find it? Our digital marketing courses teach you to attract qualified visitors and turn them into customers: SEO, Google Ads, social media advertising, WordPress sites and automated prospecting. We teach what we have practised on our own websites since 2003.',
    },
    facts: [
      { fr: '11 programmes au catalogue', en: '11 programs in the catalog' },
      { fr: 'Présentiel à Antibes, en intra ou en format mixte', en: 'In person in Antibes, in-house or blended' },
      { fr: 'Individuel ou petit groupe (1 à 8)', en: 'One-to-one or small group (1–8)' },
      { fr: 'Finançable OPCO ou FAF', en: 'OPCO or FAF funding' },
      { fr: 'Exercices sur votre propre site', en: 'Exercises on your own website' },
    ],
    explainer: {
      tag: { fr: 'Formation SEO', en: 'SEO training' },
      title: { fr: 'Formation SEO à Antibes : les principes de base du référencement', en: 'SEO training in Antibes: the fundamentals of search optimization' },
      paras: [
        { fr: "Le référencement naturel est la fondation d'une présence en ligne durable : contrairement à la publicité, une page bien positionnée continue d'attirer des clients des années après sa publication. Notre formation « Les principes de base du référencement et du SEO » vous donne la méthode, en travaillant directement sur votre site. En une journée (7 heures), vous apprenez à :", en: 'Organic search is the foundation of a lasting online presence: unlike advertising, a well-ranked page keeps bringing in customers for years after it is published. Our course “SEO fundamentals” gives you the method, working directly on your own website. In one day (7 hours), you learn to:' },
      ],
      bullets: [
        { fr: 'comprendre comment Google explore, indexe et classe les pages ;', en: 'understand how Google crawls, indexes and ranks pages;' },
        { fr: 'choisir les mots-clés qui correspondent à vos clients ;', en: 'choose the keywords that match your customers;' },
        { fr: 'optimiser vos pages : balises, contenus, adresses (URL) ;', en: 'optimize your pages: tags, content, URLs;' },
        { fr: 'développer des liens de qualité vers votre site ;', en: 'build quality links to your site;' },
        { fr: 'suivre vos résultats avec Google Search Console et Google Analytics.', en: 'track your results with Google Search Console and Google Analytics.' },
      ],
      after: [
        { fr: 'Tarif : 245 € HT la journée, en présentiel à Antibes ou en format mixte ; un programme sur mesure peut être construit pour votre entreprise. Commerçant, profession libérale ou entreprise de services locale ? Nous ajoutons sur demande le référencement local (fiche Google Business Profile, avis clients) et la visibilité dans les moteurs de réponse IA comme ChatGPT ou Google AI Overviews (AEO / GEO).', en: 'Price: €245 excl. VAT for the day, in person in Antibes or blended; a tailor-made program can be built for your company. Retailer, liberal profession or local service business? On request we add local SEO (Google Business Profile, customer reviews) and visibility in AI answer engines such as ChatGPT or Google AI Overviews (AEO / GEO).' },
        { fr: 'Pour Google Ads, deux formats : une journée pour lancer une première campagne, ou trois jours pour construire et piloter un compte complet, avec les mots-clés, les annonces, le budget et le suivi des conversions.', en: 'For Google Ads, two formats: one day to launch a first campaign, or three days to build and run a complete account, with keywords, ads, budget and conversion tracking.' },
      ],
    },
    skills: [
      { fr: 'Construire et piloter une stratégie de référencement naturel (SEO)', en: 'Build and run an SEO strategy' },
      { fr: 'Optimiser sa fiche Google Business Profile et son référencement local', en: 'Optimize your Google Business Profile and local SEO' },
      { fr: 'Créer, optimiser et suivre des campagnes Google Ads (SEA)', en: 'Create, optimize and track Google Ads (SEA) campaigns' },
      { fr: 'Lancer des publicités Facebook et Instagram (Social Ads)', en: 'Run Facebook and Instagram ads (Social Ads)' },
      { fr: 'Créer et faire évoluer un site WordPress avec Elementor', en: 'Build and update a WordPress site with Elementor' },
      { fr: "Automatiser sa prospection commerciale avec l'IA", en: 'Automate sales prospecting with AI' },
    ],
    programs: [],
    programGroups: [
      {
        title: { fr: 'Référencement naturel (SEO)', en: 'Search engine optimization (SEO)' },
        items: [
          { fr: 'Les principes de base du référencement et du SEO - niveau débutant', en: 'SEO fundamentals - beginner', hours: '7 h', url: `${CAT}/0/webmarketing/1132412/les-principes-de-bases-du-referencement-et-seo-niveau-debutant` },
          { fr: "Référencement SEO pour l'immobilier - niveau débutant", en: 'SEO for real estate - beginner', hours: '7 h', url: `${CAT}/0/webmarketing/1611197/les-principes-de-bases-du-referencement-et-seo-pour-le-secteur-de-limmobilier-niveau-debutant` },
          { fr: 'SEO local et fiche Google Business Profile (secteur immobilier)', en: 'Local SEO and Google Business Profile (real estate)', hours: '7 h', url: `${CAT}/8/immobilier/1974769/optimisation-du-seo-local-et-google-my-business-pour-le-secteur-immobilier` },
        ],
      },
      {
        title: { fr: 'Publicité Google Ads (SEA)', en: 'Google Ads advertising (SEA)' },
        items: [
          { fr: 'Se promouvoir sur Google avec Google Ads - niveau débutant', en: 'Promote your business with Google Ads - beginner', hours: '7 h', url: `${CAT}/0/webmarketing/1132093/se-promouvoir-sur-google-avec-google-ads-niveau-debutant` },
          { fr: 'Promouvoir mon entreprise sur Google avec Google Ads - parcours complet', en: 'Promote your company with Google Ads - full course', hours: '21 h', url: `${CAT}/0/webmarketing/2182119/promouvoir-mon-enterprise-sur-google-avec-google-ads` },
          { fr: 'Google Ads pour une agence immobilière - niveau débutant', en: 'Google Ads for a real-estate agency - beginner', hours: '7 h', url: `${CAT}/0/webmarketing/1611369/promouvoir-une-agence-immobiliere-sur-google-avec-google-ads-niveau-debutant` },
          { fr: 'Google Ads pour une agence immobilière - niveau avancé', en: 'Google Ads for a real-estate agency - advanced', hours: '7 h', url: `${CAT}/0/webmarketing/1645440/promouvoir-une-agence-immobiliere-sur-google-avec-google-ads-niveau-avance` },
          { fr: "Attirer de nouveaux clients dans l'immobilier avec Google Ads", en: 'Win new real-estate clients with Google Ads', hours: '21 h', url: `${CAT}/0/webmarketing/3213846/attirer-de-nouveaux-clients-dans-limmobilier-avec-google-ads` },
        ],
      },
      {
        title: { fr: 'Réseaux sociaux, site web et prospection', en: 'Social ads, website and prospecting' },
        items: [
          { fr: 'Publicité Facebook et Instagram avec Meta Business Manager (immobilier)', en: 'Facebook and Instagram ads with Meta Business Manager (real estate)', hours: '7 h', url: `${CAT}/0/webmarketing/1645421/promouvoir-son-activite-immobiliere-sur-facebook-et-instagram-avec-facebook-ads-et-meta-business-man` },
          { fr: 'Maîtriser Elementor, constructeur de pages WordPress', en: 'Mastering Elementor, the WordPress page builder', hours: '7 h', url: `${CAT}/6/outils-numeriques/1403966/apprendre-a-maitriser-elementor-constructeur-de-pages-wordpress` },
          { fr: "Automatiser la prospection commerciale avec l'IA et Notion", en: 'Automating sales prospecting with AI and Notion', hours: '21 h', url: `${CAT}/0/webmarketing/2187149/automatiser-la-prospection-commerciale-avec-lia-et-notion` },
        ],
      },
    ],
    audiences: [
      { fr: 'Dirigeants, commerçants et indépendants', en: 'Directors, retailers and freelancers' },
      { fr: 'Responsables marketing et communication', en: 'Marketing and communication managers' },
      { fr: 'E-commerçants et porteurs de projet', en: 'E-merchants and project owners' },
      { fr: "Équipes souhaitant internaliser l'acquisition", en: 'Teams looking to bring acquisition in-house' },
    ],
    prereqs: [
      { fr: "Être à l'aise avec un ordinateur et le web", en: 'Comfortable with a computer and the web' },
      { fr: "Disposer de préférence d'un site à analyser", en: 'Ideally, a website to work on' },
      { fr: 'Aucun prérequis technique en développement', en: 'No development prerequisite' },
    ],
    outcomes: [
      { fr: 'Piloter son SEO et ses campagnes Google Ads en autonomie', en: 'Run your SEO and Google Ads campaigns independently' },
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
      fr: 'Formation IA générative à Antibes | Alatere forMa',
      en: 'Generative AI training for businesses in Antibes | Alatere forMa',
    },
    metaDescription:
      "Formation intelligence artificielle à Antibes : Claude, ChatGPT, prompts, automatisation, site internet avec l'IA. Qualiopi, finançable OPCO. Devis 48 h.",
    name: { fr: 'Intelligence artificielle', en: 'Artificial intelligence' },
    h1: {
      fr: "Formations à l'intelligence artificielle pour les entreprises, à Antibes",
      en: 'Artificial intelligence training for businesses in Antibes',
    },
    tag: { fr: 'Sans prérequis technique', en: 'No technical prerequisite' },
    lead: {
      fr: "Des formations concrètes pour utiliser l'IA générative au travail : rédiger avec Claude ou ChatGPT, automatiser vos tâches répétitives et votre prospection, créer votre site internet avec l'aide de l'IA. Vous repartez avec des méthodes appliquées à vos propres dossiers, dans le respect de vos données.",
      en: 'Practical courses on using generative AI at work: writing with Claude or ChatGPT, automating repetitive tasks and prospecting, building your website with the help of AI. You leave with methods applied to your own files, while protecting your data.',
    },
    facts: [
      { fr: '7 programmes au catalogue', en: '7 programs in the catalog' },
      { fr: 'Présentiel à Antibes, en intra ou en format mixte', en: 'In person in Antibes, in-house or blended' },
      { fr: 'Aucune connaissance technique requise', en: 'No technical knowledge required' },
      { fr: 'Finançable OPCO ou FAF', en: 'OPCO or FAF funding' },
      { fr: "Ateliers sur vos cas réels d'entreprise", en: 'Workshops on your real business cases' },
    ],
    explainer: {
      tag: { fr: 'Former ses équipes', en: 'Training your teams' },
      title: { fr: "Pourquoi former vos salariés à l'IA générative", en: 'Why train your staff in generative AI' },
      paras: [
        { fr: "La plupart des salariés utilisent déjà ChatGPT ou un autre assistant, souvent sans méthode et parfois avec des données confidentielles. Une formation leur donne les bons réflexes et transforme ces essais isolés en gains de temps mesurables pour l'entreprise. Nos programmes couvrent trois usages :", en: 'Most employees already use ChatGPT or another assistant, often without a method and sometimes with confidential data. Training gives them the right habits and turns these isolated attempts into measurable time savings for the business. Our programs cover three uses:' },
      ],
      bullets: [
        { fr: 'produire plus vite : e-mails, comptes rendus, annonces, contenus marketing, synthèses de documents ;', en: 'produce faster: emails, minutes, listings, marketing content, document summaries;' },
        { fr: "automatiser : prospection commerciale, suivi client et tâches répétitives, en reliant l'IA à des outils comme Notion ;", en: 'automate: sales prospecting, client follow-up and repetitive tasks, by connecting AI to tools such as Notion;' },
        { fr: "utiliser l'IA de façon responsable : confidentialité, RGPD, vérification des réponses, limites des outils.", en: 'use AI responsibly: confidentiality, GDPR, checking answers, tool limitations.' },
      ],
      after: [
        { fr: "Créer votre site internet grâce à l'IA : nous accompagnons aussi les dirigeants et indépendants qui veulent construire ou refaire leur site avec l'aide de l'IA, de la rédaction des pages à leur mise en ligne, en appliquant dès le départ les règles du référencement. Ce programme est construit sur mesure : demandez-nous un devis.", en: 'Building your website with AI: we also support directors and freelancers who want to build or redo their website with the help of AI, from writing the pages to putting them online, applying SEO rules from the start. This program is tailor-made: ask us for a quote.' },
        { fr: "Nos formateurs utilisent ces outils au quotidien dans nos propres activités (e-commerce, coworking, domiciliation, formation) : les exemples viennent du terrain, pas d'une démonstration.", en: 'Our trainers use these tools every day in our own businesses (e-commerce, coworking, business address, training): the examples come from real work, not demos.' },
      ],
    },
    skills: [
      { fr: "Comprendre les usages et les limites de l'IA générative", en: 'Understand the uses and limits of generative AI' },
      { fr: 'Rédiger des prompts efficaces et réutilisables', en: 'Write effective, reusable prompts' },
      { fr: "Maîtriser l'écosystème Claude AI (projets, documents, automatisations)", en: 'Master the Claude AI ecosystem (projects, documents, automations)' },
      { fr: 'Automatiser sa prospection et ses tâches répétitives', en: 'Automate prospecting and repetitive tasks' },
      { fr: "Créer son site internet avec l'aide de l'IA", en: 'Build your website with the help of AI' },
      { fr: 'Adopter une démarche responsable (données, RGPD)', en: 'Adopt a responsible approach (data, GDPR)' },
    ],
    programs: [],
    programGroups: [
      {
        title: { fr: "L'IA générative pour toutes les entreprises", en: 'Generative AI for every business' },
        items: [
          { fr: "Maîtriser l'écosystème Claude AI", en: 'Mastering the Claude AI ecosystem', hours: '28 h', url: `${CAT}/1/management/2889120/maitriser-lecosysteme-claude-ai` },
          { fr: "Automatiser la prospection commerciale avec l'IA et Notion", en: 'Automating sales prospecting with AI and Notion', hours: '21 h', url: `${CAT}/0/webmarketing/2187149/automatiser-la-prospection-commerciale-avec-lia-et-notion` },
          { fr: "Exploiter le Big Data et l'IA : techniques avancées et applications pratiques", en: 'Big data and AI: advanced techniques and practical applications', hours: '21 h', url: `${CAT}/1/management/1846920/exploiter-le-big-data-et-lia-techniques-avancees-et-applications-pratiques` },
        ],
      },
      {
        title: { fr: "L'IA pour les agences immobilières", en: 'AI for real-estate agencies' },
        intro: { fr: 'Des parcours dédiés aux agents, gestionnaires et syndics, qui peuvent aussi compter dans leurs heures de formation continue.', en: 'Courses dedicated to agents, property managers and co-ownership managers, which can also count towards their continuing-education hours.' },
        items: [
          { fr: "Déployer l'intelligence artificielle au sein de son agence immobilière", en: 'Deploying AI in your real-estate agency', hours: '7 h', url: `${CAT}/6/outils-numeriques/1629708/deployer-lintelligence-artificielle-au-sein-de-son-agence-immobiliere` },
          { fr: "L'intelligence artificielle au cœur de votre agence immobilière", en: 'AI at the heart of your real-estate agency', url: `${CAT}/8/immobilier/1645657/deployer-lintelligence-artificielle-au-coeur-de-votre-agence-immobiliere` },
          { fr: 'Claude AI pour la gestion immobilière, la relation client et le syndic', en: 'Claude AI for property management, client relations and co-ownership management', hours: '10 h', url: `${CAT}/1/management/3079755/maitriser-claude-ai-pour-optimiser-la-gestion-immobiliere-la-relation-client-et-les-taches-de-syndic` },
          { fr: "Booster vos annonces et votre trafic web avec l'IA", en: 'Boost your listings and web traffic with AI', hours: '10 h', url: `${CAT}/8/immobilier/1988812/revolutionnez-votre-marketing-immobilier-boostez-annonces-et-trafic-web-avec-lia` },
        ],
      },
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
      { fr: 'Gagner du temps sur les tâches répétitives', en: 'Save time on repetitive tasks' },
      { fr: 'Diffuser de bonnes pratiques dans son équipe', en: 'Spread best practices across your team' },
    ],
  },

  {
    slug: 'langues',
    icon: 'languages',
    metaTitle: {
      fr: 'Formation anglais professionnel à Antibes | Alatere forMa',
      en: 'Business English training in Antibes | Alatere forMa',
    },
    metaDescription:
      'Anglais professionnel, italien et espagnol à Antibes, en individuel ou en groupe de 8. Organisme Qualiopi, prise en charge OPCO. Devis sous 48 h.',
    name: { fr: 'Anglais professionnel et langues', en: 'Business English and languages' },
    tag: { fr: 'Usage professionnel', en: 'For professional use' },
    lead: {
      fr: "Anglais, italien et espagnol pour le travail : réunions, e-mails, négociation, vocabulaire de votre secteur. Un test de positionnement fixe votre point de départ, puis le rythme s'adapte, en individuel ou en groupe de 8 au plus.",
      en: 'English, Italian and Spanish for work: meetings, emails, negotiation, the vocabulary of your sector. A placement test sets your starting point, then the pace adapts, one-to-one or in groups of up to 8.',
    },
    facts: [
      { fr: '6 programmes au catalogue', en: '6 programs in the catalog' },
      { fr: 'Test de positionnement initial', en: 'Initial placement test' },
      { fr: 'Individuel ou petit groupe (1 à 8)', en: 'One-to-one or small group (1–8)' },
      { fr: 'Finançable OPCO ou FAF', en: 'OPCO or FAF funding' },
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
      fr: 'Formation communication digitale à Antibes | Alatere forMa',
      en: 'Digital communication training in Antibes | Alatere forMa',
    },
    metaDescription:
      'Formation communication à Antibes : réseaux sociaux, visuels Canva et Photoshop, photo au smartphone. Qualiopi, finançable OPCO ou FAF. Devis sous 48 h.',
    name: { fr: 'Communication digitale', en: 'Digital communication' },
    h1: {
      fr: 'Formations en communication digitale à Antibes',
      en: 'Digital communication training in Antibes',
    },
    tag: { fr: 'Gagner en visibilité', en: 'Grow your visibility' },
    lead: {
      fr: 'Réseaux sociaux, visuels, photos et vidéos : nos formations en communication vous rendent autonome pour faire connaître votre entreprise. Pendant la formation, vous travaillez sur vos propres comptes et vos propres contenus, avec des outils simples comme Canva.',
      en: 'Social media, visuals, photos and videos: our communication courses make you independent in promoting your business. During the course you work on your own accounts and content, with simple tools such as Canva.',
    },
    facts: [
      { fr: '10 programmes au catalogue', en: '10 programs in the catalog' },
      { fr: 'Présentiel à Antibes, en intra ou en format mixte', en: 'In person in Antibes, in-house or blended' },
      { fr: 'Individuel ou petit groupe (1 à 8)', en: 'One-to-one or small group (1–8)' },
      { fr: 'Finançable OPCO ou FAF', en: 'OPCO or FAF funding' },
      { fr: 'Travail sur vos propres réseaux', en: 'Work on your own channels' },
    ],
    explainer: {
      tag: { fr: 'Se former à Antibes', en: 'Training in Antibes' },
      title: { fr: 'Une formation communication pensée pour les TPE et les indépendants', en: 'Communication training designed for small businesses and freelancers' },
      paras: [
        { fr: "Dans une petite entreprise, la communication repose souvent sur une seule personne, qui n'a ni le temps ni le budget d'une agence. Nos formations lui donnent une méthode simple et des outils accessibles pour publier régulièrement, avec des contenus qui ressemblent à l'entreprise. Concrètement, vous apprenez à :", en: 'In a small business, communication often rests on one person, who has neither the time nor the budget for an agency. Our courses give that person a simple method and accessible tools to publish regularly, with content that reflects the business. In practice, you learn to:' },
      ],
      bullets: [
        { fr: 'choisir les réseaux sociaux adaptés à vos clients et définir une ligne éditoriale ;', en: 'choose the social networks that suit your customers and define an editorial line;' },
        { fr: 'créer des visuels professionnels avec Canva, puis retoucher vos photos avec Photoshop ;', en: 'create professional visuals with Canva, then retouch your photos with Photoshop;' },
        { fr: 'réussir vos photos au smartphone et préparer des formats courts ;', en: 'take good smartphone photos and prepare short formats;' },
        { fr: 'programmer vos publications sur Facebook et Instagram et mesurer ce qui fonctionne.', en: 'schedule your Facebook and Instagram posts and measure what works.' },
      ],
      after: [
        { fr: "Chaque formation est personnalisable : nous partons de votre activité, de vos comptes et de vos objectifs, en individuel ou en petit groupe. Pour aller plus loin vers l'acquisition de clients (référencement, publicité Google), consultez aussi nos formations webmarketing.", en: 'Every course can be customized: we start from your business, your accounts and your goals, one-to-one or in a small group. To go further into customer acquisition (SEO, Google advertising), see also our web marketing courses.' },
      ],
    },
    skills: [
      { fr: 'Définir une stratégie et une ligne éditoriale', en: 'Define a strategy and an editorial line' },
      { fr: 'Animer ses réseaux sociaux professionnels', en: 'Run your professional social channels' },
      { fr: 'Créer des visuels avec Canva', en: 'Create visuals with Canva' },
      { fr: 'Retoucher photos et supports de communication avec Photoshop', en: 'Retouch photos and communication materials with Photoshop' },
      { fr: 'Réussir ses photos au smartphone et les diffuser', en: 'Take and publish good smartphone photos' },
      { fr: 'Mieux gérer la communication avec ses clients', en: 'Handle client communication better' },
    ],
    programs: [],
    programGroups: [
      {
        title: { fr: 'Réseaux sociaux et contenus', en: 'Social media and content' },
        items: [
          { fr: 'Améliorer sa visibilité grâce aux réseaux sociaux', en: 'Improving your visibility with social media', hours: '7 h', url: `${CAT}/0/webmarketing/1133237/ameliorer-sa-visibilite-grace-aux-reseaux-sociaux` },
          { fr: 'Création de contenu pour les réseaux sociaux avec Canva', en: 'Creating social media content with Canva', hours: '7 h', url: `${CAT}/0/webmarketing/1132846/creation-de-contenu-pour-les-reseaux-sociaux-avec-canva` },
          { fr: 'Contenus Canva et programmation sur Facebook et Instagram', en: 'Canva content and scheduling on Facebook and Instagram', hours: '7 h', url: `${CAT}/0/webmarketing/1133827/creation-de-contenu-pour-les-reseaux-sociaux-avec-canva-et-programmation-de-leur-diffusion-sur-faceb` },
          { fr: 'Réseaux sociaux pour le secteur immobilier', en: 'Social media for real estate', hours: '7 h', url: `${CAT}/8/immobilier/1974699/reseaux-sociaux-pour-le-secteur-immobilier` },
          { fr: 'Canva : créer les visuels de votre agence immobilière', en: "Canva: create your real-estate agency's visuals", hours: '7 h', url: `${CAT}/8/immobilier/1953198/canva-et-immobilier-creation-de-visuels-attractifs-pour-votre-agence` },
        ],
      },
      {
        title: { fr: 'Image, photo et supports', en: 'Images, photos and materials' },
        items: [
          { fr: 'Photoshop I : initiation à la retouche et au montage photo', en: 'Photoshop I: introduction to photo retouching and editing', hours: '7 h', url: `${CAT}/6/outils-numeriques/1307824/photoshop-i-initiation-a-la-retouche-montage-photo` },
          { fr: 'Photoshop II : créer des supports de communication', en: 'Photoshop II: creating communication materials', hours: '7 h', url: `${CAT}/6/outils-numeriques/1307725/photoshop-ii-creer-des-supports-de-communication` },
          { fr: 'Réussir ses photographies immobilières avec son smartphone', en: 'Great real-estate photos with your smartphone', hours: '7 h', url: `${CAT}/6/outils-numeriques/1746708/reussir-ses-photographies-immobilieres-avec-son-smartphone` },
          { fr: 'Photos au smartphone et diffusion sur les réseaux sociaux', en: 'Smartphone photos and social-media publishing', hours: '14 h', url: `${CAT}/0/webmarketing/1746753/reussir-ses-photographies-immobilier-avec-son-smartphone-et-les-diffuser-sur-les-reseaux-sociaux` },
        ],
      },
      {
        title: { fr: 'Communication et relation client', en: 'Communication and client relations' },
        items: [
          { fr: 'Mieux gérer la communication et les conflits avec vos clients', en: 'Better handling of communication and conflict with clients', hours: '7 h', url: `${CAT}/8/immobilier/1820759/mieux-gerer-la-communication-et-les-conflits-pour-les-agents-immobiliers-par-le-bien-etre-et-lhypnos` },
        ],
      },
    ],
    audiences: [
      { fr: 'TPE, PME, commerçants et indépendants', en: 'Micro-businesses, SMEs, retailers and freelancers' },
      { fr: 'Chargés de communication et marketing', en: 'Communication and marketing officers' },
      { fr: 'Associations et clubs', en: 'Associations and clubs' },
      { fr: 'Toute personne en charge des réseaux sociaux', en: 'Anyone managing social channels' },
    ],
    prereqs: [
      { fr: 'Usage courant des réseaux sociaux', en: 'Everyday use of social media' },
      { fr: 'Aucun prérequis en création graphique', en: 'No graphic design prerequisite' },
    ],
    outcomes: [
      { fr: 'Gérer sa communication digitale en autonomie', en: 'Run your digital communication independently' },
      { fr: 'Publier régulièrement des contenus cohérents', en: 'Publish consistent content regularly' },
      { fr: 'Créer des visuels qui donnent envie', en: 'Create visuals that attract attention' },
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
      q: { fr: 'Quelle formation SEO choisir pour débuter ?', en: 'Which SEO course should I choose as a beginner?' },
      a: { fr: "« Les principes de base du référencement et du SEO » : en une journée, vous apprenez le fonctionnement de Google, le choix des mots-clés, l'optimisation des pages et le suivi des résultats dans Search Console. Pour une agence immobilière, une version dédiée au secteur existe.", en: '“SEO fundamentals”: in one day you learn how Google works, how to choose keywords, optimize pages and track results in Search Console. A version dedicated to real-estate agencies is also available.' },
    },
    {
      q: { fr: 'La formation SEO couvre-t-elle le référencement local et les moteurs IA ?', en: 'Does the SEO course cover local SEO and AI answer engines?' },
      a: { fr: 'Oui, sur demande. Chaque formation est personnalisable : nous pouvons ajouter la fiche Google Business Profile, les avis clients, la cohérence de vos informations sur le web, ainsi que la visibilité dans les réponses de ChatGPT ou de Google AI Overviews (AEO / GEO).', en: 'Yes, on request. Every course can be customized: we can add your Google Business Profile, customer reviews, consistency of your information across the web, and visibility in ChatGPT or Google AI Overviews answers (AEO / GEO).' },
    },
    {
      q: { fr: 'Les formations webmarketing sont-elles finançables ?', en: 'Can the web marketing courses be funded?' },
      a: { fr: "Oui, par l'OPCO de votre entreprise pour les salariés, ou par le fonds d'assurance formation (FAF) de votre statut pour les dirigeants non salariés et les indépendants. Alatere Web SAS (marque Alatere forMa, déclaration d'activité n° 93.06.07588.06) est certifié Qualiopi, condition de cette prise en charge. Nos formations ne sont pas éligibles au CPF.", en: "Yes, through your company's OPCO for employees, or through the training insurance fund (FAF) of your status for non-salaried directors and freelancers. Alatere Web SAS (Alatere forMa brand, training-provider registration no. 93.06.07588.06) is Qualiopi-certified, a condition for this funding. Our courses are not CPF-eligible." },
    },
    {
      q: { fr: 'Faut-il des prérequis techniques pour se former au SEO ou à Google Ads ?', en: 'Do I need technical skills to learn SEO or Google Ads?' },
      a: { fr: "Non. Être à l'aise avec un ordinateur suffit, et il est utile de venir avec votre propre site ou votre compte publicitaire : nous travaillons dessus pendant la formation. Le contenu est adapté à votre niveau après un positionnement initial.", en: 'No. Being comfortable with a computer is enough, and it helps to bring your own website or ad account: we work on it during the course. Content is adapted to your level after an initial assessment.' },
    },
    {
      q: { fr: 'Les formations ont-elles lieu à Antibes ?', en: 'Are the courses held in Antibes?' },
      a: { fr: "Oui : dans nos locaux de l'immeuble La Caravelle, 9 boulevard Albert 1er, en centre-ville d'Antibes, ou en intra dans votre entreprise. Plusieurs programmes existent en format mixte, en partie à distance. Nous accueillons aussi des stagiaires de Nice, Cannes, Sophia Antipolis et du Var.", en: 'Yes: at our premises in the La Caravelle building, 9 boulevard Albert 1er, in central Antibes, or in-house at your company. Several programs are available in blended format, partly remote. We also welcome trainees from Nice, Cannes, Sophia Antipolis and the Var.' },
    },
    {
      q: { fr: 'Combien de temps pour obtenir un devis et démarrer ?', en: 'How long does it take to get a quote and start?' },
      a: { fr: 'Le devis personnalisé est envoyé sous 48 heures, avec les démarches de financement. Le démarrage intervient en moyenne sous 14 jours, selon le délai de réponse de votre financeur.', en: "The personalized quote is sent within 48 hours, with the funding steps. Courses start within 14 days on average, depending on your funder's response time." },
    },
  ],
  'intelligence-artificielle': [
    {
      q: { fr: 'Faut-il des connaissances techniques pour suivre une formation en intelligence artificielle ?', en: 'Do I need technical knowledge to take an AI course?' },
      a: { fr: "Non, aucune. Nos formations IA s'adressent à tous les métiers : un usage courant d'un ordinateur et d'internet suffit. Les ateliers s'appuient sur vos propres documents et cas d'entreprise.", en: 'No, none. Our AI courses are open to all roles: everyday use of a computer and the internet is enough. Workshops are based on your own documents and business cases.' },
    },
    {
      q: { fr: "Quels outils d'IA utilise-t-on pendant la formation ?", en: 'Which AI tools are used during the course?' },
      a: { fr: "Principalement Claude (Anthropic) et ChatGPT (OpenAI), ainsi que des outils d'organisation comme Notion pour les automatisations. Si votre entreprise a déjà choisi un outil, comme Microsoft Copilot ou Google Gemini, nous adaptons les exercices.", en: 'Mainly Claude (Anthropic) and ChatGPT (OpenAI), plus organization tools such as Notion for automations. If your company has already chosen a tool, such as Microsoft Copilot or Google Gemini, we adapt the exercises.' },
    },
    {
      q: { fr: "Pouvez-vous former toute une équipe à l'IA générative ?", en: 'Can you train a whole team in generative AI?' },
      a: { fr: "Oui. En intra, nous construisons le programme à partir des tâches réelles de votre équipe (commercial, administratif, marketing) et définissons ensemble des règles d'usage : quelles données partager, comment vérifier les réponses.", en: "Yes. In-house, we build the program around your team's real tasks (sales, admin, marketing) and define usage rules together: which data to share, how to check answers." },
    },
    {
      q: { fr: "Proposez-vous une formation pour créer son site internet avec l'IA ?", en: 'Do you offer a course on building a website with AI?' },
      a: { fr: "Oui, sur mesure. Nous accompagnons les dirigeants et indépendants qui veulent construire ou refaire leur site avec l'aide de l'IA : structure, rédaction des pages, mise en ligne et règles de référencement. Demandez un devis en précisant votre projet.", en: 'Yes, tailor-made. We support directors and freelancers who want to build or redo their website with the help of AI: structure, page writing, publishing and SEO rules. Ask for a quote describing your project.' },
    },
    {
      q: { fr: 'Ces formations en IA sont-elles finançables ?', en: 'Can these AI courses be funded?' },
      a: { fr: "Oui, par l'OPCO de votre entreprise pour les salariés, ou par votre fonds d'assurance formation (FAF) si vous êtes indépendant ou dirigeant non salarié. Alatere Web SAS (marque Alatere forMa, déclaration d'activité n° 93.06.07588.06) est certifié Qualiopi. Nos formations ne sont pas éligibles au CPF.", en: "Yes, through your company's OPCO for employees, or your training insurance fund (FAF) if you are a freelancer or non-salaried director. Alatere Web SAS (Alatere forMa brand, training-provider registration no. 93.06.07588.06) is Qualiopi-certified. Our courses are not CPF-eligible." },
    },
    {
      q: { fr: 'Où ont lieu les formations IA ?', en: 'Where are the AI courses held?' },
      a: { fr: 'À Antibes, dans nos locaux du 9 boulevard Albert 1er, en centre-ville, ou en intra dans vos locaux. Plusieurs programmes existent en format mixte. Devis sous 48 heures, démarrage sous 14 jours en moyenne.', en: 'In Antibes, at our premises at 9 boulevard Albert 1er in the town centre, or in-house at your premises. Several programs are available in blended format. Quote within 48 hours, start within 14 days on average.' },
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
        fr: 'Comment financer une formation en langues ?',
        en: 'How can language training be funded?',
      },
      a: {
        fr: "Par l'OPCO de votre entreprise pour les salariés, ou par votre fonds d'assurance formation (FAF) si vous êtes indépendant ou dirigeant non salarié. Alatere Web SAS (marque Alatere forMa, déclaration d'activité n° 93.06.07588.06) est certifié Qualiopi. Nos formations ne sont pas éligibles au CPF.",
        en: "Through your company's OPCO for employees, or your training insurance fund (FAF) if you are a freelancer or non-salaried director. Alatere Web SAS (Alatere forMa brand, training-provider registration no. 93.06.07588.06) is Qualiopi-certified. Our courses are not CPF-eligible.",
      },
    },
  ],
  'communication-digitale': [
    {
      q: { fr: "À qui s'adresse la formation communication digitale ?", en: 'Who is the digital communication training for?' },
      a: { fr: "Aux TPE, PME, commerçants et indépendants, aux chargés de communication, aux associations et à toute personne qui gère les réseaux sociaux d'une structure. Aucun prérequis en création graphique n'est nécessaire.", en: "Micro-businesses, SMEs, retailers and freelancers, communication officers, associations and anyone running an organization's social channels. No graphic design prerequisite is needed." },
    },
    {
      q: { fr: 'Travaille-t-on sur mes propres réseaux pendant la formation ?', en: 'Do we work on my own channels during the course?' },
      a: { fr: 'Oui. Vous venez avec vos comptes et vos contenus : nous définissons votre ligne éditoriale, créons vos premiers visuels sur Canva et préparons vos prochaines publications pendant la formation.', en: 'Yes. You bring your accounts and content: we define your editorial line, create your first visuals in Canva and prepare your next posts during the course.' },
    },
    {
      q: { fr: 'Quels réseaux sociaux sont abordés ?', en: 'Which social networks are covered?' },
      a: { fr: "Ceux qui comptent pour vos clients : le plus souvent Facebook, Instagram et LinkedIn, ainsi que la fiche Google de l'entreprise. Le programme est adapté à votre activité : un commerce de proximité et un cabinet de conseil n'ont pas les mêmes priorités.", en: "The ones that matter to your customers: most often Facebook, Instagram and LinkedIn, plus the company's Google listing. The program is adapted to your business: a local shop and a consultancy have different priorities." },
    },
    {
      q: { fr: 'Faut-il savoir utiliser Canva ou Photoshop ?', en: 'Do I need to know Canva or Photoshop?' },
      a: { fr: "Non. Les formations Canva partent de zéro. Pour Photoshop, le niveau I est une initiation, le niveau II s'adresse à ceux qui veulent créer des supports de communication complets (affiches, flyers, visuels).", en: 'No. The Canva courses start from scratch. For Photoshop, level I is an introduction; level II is for those who want to create complete communication materials (posters, flyers, visuals).' },
    },
    {
      q: { fr: 'Ces formations en communication sont-elles finançables ?', en: 'Can these communication courses be funded?' },
      a: { fr: "Oui, par l'OPCO de votre entreprise pour les salariés, ou par votre fonds d'assurance formation (FAF) si vous êtes indépendant ou dirigeant non salarié. Alatere Web SAS (marque Alatere forMa, déclaration d'activité n° 93.06.07588.06) est certifié Qualiopi. Nos formations ne sont pas éligibles au CPF.", en: "Yes, through your company's OPCO for employees, or your training insurance fund (FAF) if you are a freelancer or non-salaried director. Alatere Web SAS (Alatere forMa brand, training-provider registration no. 93.06.07588.06) is Qualiopi-certified. Our courses are not CPF-eligible." },
    },
    {
      q: { fr: 'Où se déroule la formation communication à Antibes ?', en: 'Where does the communication training take place in Antibes?' },
      a: { fr: "Dans nos locaux de l'immeuble La Caravelle, 9 boulevard Albert 1er, en centre-ville d'Antibes, à quelques minutes de la gare. Nous pouvons aussi intervenir dans votre entreprise. Devis sous 48 heures.", en: 'At our premises in the La Caravelle building, 9 boulevard Albert 1er, in central Antibes, a few minutes from the station. We can also train at your company. Quote within 48 hours.' },
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
      a: { fr: "Pour un salarié, par l'OPCO de l'agence ; pour un indépendant ou un agent commercial, par le fonds d'assurance formation dont il dépend. Alatere forMa (Alatere Web SAS) est certifié Qualiopi (déclaration d'activité n° 93.06.07588.06), condition de cette prise en charge, et nous préparons la demande avec vous.", en: "For employees, through the agency's OPCO; for freelancers and commercial agents, through their training insurance fund (FAF). Alatere forMa (Alatere Web SAS) is Qualiopi-certified (training-provider registration no. 93.06.07588.06), a condition for this funding, and we prepare the application with you." },
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
