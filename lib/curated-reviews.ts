/**
 * Avis Google sélectionnés, affichés en HTML statique (lus par Google et les IA).
 *
 * Source : fiches Google Business Profile d'Alatere (relevé du 13/11/2026).
 * Règles :
 *  - texte reproduit sans modification (coupes signalées par […]) ;
 *  - pas de balisage schema.org AggregateRating / Review (avis auto-attribués) ;
 *  - mentions L111-7-2 / D111-17 C. conso : date de l'avis, date de l'expérience
 *    si connue, critère de sélection, absence de vérification par Google.
 *  - les avis rédigés en français sont traduits pour la version anglaise (signalé),
 *    l'avis de Maurice B. est rédigé en anglais (texte original en EN, traduit en FR).
 *
 * Mise à jour : chaque trimestre (avis affichés, note, nombre d'avis).
 */

export type Bi = { fr: string; en: string };

export type CuratedReview = {
  author: string;
  text: Bi;
  /** Langue d'origine de l'avis : sert à afficher « traduit de … ». */
  original: 'fr' | 'en';
  meta: Bi;
  tag: Bi;
};

export type CuratedPlace = {
  rating: string; // affichage, ex. « 4,9 »
  ratingEn: string; // ex. « 4.9 »
  total: number;
  mapsUrl: string;
  label: Bi;
  title: Bi;
  legal: Bi;
  reviews: CuratedReview[];
};

const LEGAL_SUFFIX: Bi = {
  fr: 'reproduits sans modification ([…] signale un passage abrégé). Sélection réalisée par Alatere Web ; Google ne vérifie pas ces avis.',
  en: 'reproduced without changes ([…] marks a shortened passage). Selected by Alatere Web; Google does not verify these reviews.',
};

export const CURATED_REVIEWS: Record<'forma' | 'cowo' | 'domo', CuratedPlace> = {
  forma: {
    rating: '4,9',
    ratingEn: '4.9',
    total: 38,
    mapsUrl: 'https://maps.google.com/?cid=15050771545922754825',
    label: { fr: 'Avis de stagiaires', en: 'Trainee reviews' },
    title: { fr: 'Ils se sont formés chez Alatere forMa', en: 'They trained with Alatere forMa' },
    legal: {
      fr: `Avis publiés par nos stagiaires sur notre fiche Google Alatere forMa, ${LEGAL_SUFFIX.fr} Les indicateurs ci-dessus proviennent de nos questionnaires de fin de formation.`,
      en: `Reviews posted by our trainees on our Alatere forMa Google listing, ${LEGAL_SUFFIX.en} The indicators above come from our end-of-course questionnaires.`,
    },
    reviews: [
      {
        author: 'Angelo P.',
        original: 'fr',
        text: {
          fr: "Merci à Alatere Web d'avoir monté le dossier de financement et tout organisé pour que la formation sur les réseaux sociaux se déroule dans les meilleures conditions possibles.",
          en: 'Thanks to Alatere Web for putting together the funding application and organising everything so that the social media training ran in the best possible conditions.',
        },
        meta: {
          fr: 'Formation suivie en septembre 2026 · avis publié en novembre 2026',
          en: 'Training in September 2026 · review posted November 2026',
        },
        tag: { fr: 'Financement géré', en: 'Funding handled' },
      },
      {
        author: 'Jean K., opticien',
        original: 'fr',
        text: {
          fr: 'Grâce à Alatere et Jean Gerard, nous avons pu nous former à l’anglais professionnel spécifique à notre métier d’opticien. Avec mise en situations et jeux de rôle. Merci beaucoup pour cette formation, financée en totalité grâce à l’OPCO.',
          en: 'Thanks to Alatere and Jean Gerard, we were able to train in professional English specific to our job as opticians, with real-life scenarios and role plays. Many thanks for this training, fully funded by our OPCO.',
        },
        meta: {
          fr: 'Formation suivie en août 2023 · avis publié en 2023',
          en: 'Training in August 2023 · review posted 2023',
        },
        tag: { fr: '100 % OPCO', en: '100% OPCO-funded' },
      },
      {
        author: 'Delfine, assistante virtuelle',
        original: 'fr',
        text: {
          fr: "Formation sur Claude AI, un vrai plaisir ! À l'écoute et pédagogue, Jean-Gérard a su adapter ses explications à mon métier d'assistante virtuelle. Je repars avec des outils concrets et directement utilisables au quotidien.",
          en: 'Claude AI training, a real pleasure! Attentive and a good teacher, Jean-Gérard tailored his explanations to my work as a virtual assistant. I leave with concrete tools I can use every day.',
        },
        meta: {
          fr: 'Formation suivie en juin 2026 · avis publié en juin 2026',
          en: 'Training in June 2026 · review posted June 2026',
        },
        tag: { fr: 'Claude AI', en: 'Claude AI' },
      },
      {
        author: 'Fabrice C.',
        original: 'fr',
        text: {
          fr: "Jean-Gérard est formateur dynamique, compétent et à l'écoute. A noter la qualité de ses locaux et des espaces de travail. Je le recommande vivement.",
          en: 'Jean-Gérard is a dynamic, skilled and attentive trainer. The premises and workspaces are of high quality. I highly recommend him.',
        },
        meta: {
          fr: 'Formation suivie en mars 2024 · avis publié en 2024',
          en: 'Training in March 2024 · review posted 2024',
        },
        tag: { fr: 'Google Ads', en: 'Google Ads' },
      },
    ],
  },

  cowo: {
    rating: '4,9',
    ratingEn: '4.9',
    total: 113,
    mapsUrl: 'https://maps.google.com/?cid=3302187286506097829',
    label: { fr: 'Avis de coworkers', en: 'Coworker reviews' },
    title: { fr: '113 avis, une moyenne de 4,9 sur 5', en: '113 reviews, rated 4.9 out of 5' },
    legal: {
      fr: `Avis publiés sur notre fiche Google Alatere coWo, ${LEGAL_SUFFIX.fr} Sélection parmi les avis les plus récents.`,
      en: `Reviews posted on our Alatere coWo Google listing, ${LEGAL_SUFFIX.en} Chosen among the most recent reviews.`,
    },
    reviews: [
      {
        author: 'Maurice B.',
        original: 'en',
        text: {
          fr: "J'ai utilisé l'espace de coworking Alatere pendant plusieurs semaines cet été et c'était exactement ce dont j'avais besoin : une excellente connexion Wi-Fi […] ; les locaux étaient toujours propres, calmes et bien entretenus […]. Comme je travaillais souvent tôt et tard, j'ai pu avoir ma propre clé.",
          en: 'I used the Alatere co-working space for several weeks this summer and it was exactly what I needed: excellent wi-fi bandwidth […]; the facilities were always clean, quiet and well-maintained […]. As I often started early and ended late I was able to have my own key and access to the facility as needed.',
        },
        meta: { fr: 'Avis publié en septembre 2026', en: 'Review posted September 2026' },
        tag: { fr: 'Plusieurs semaines', en: 'Several weeks' },
      },
      {
        author: 'Marion P.',
        original: 'fr',
        text: {
          fr: 'Très bon accueil, grande disponibilité et réactivité ! Lieu très sympa et agréable pour un coworking (réservation pour une journée).',
          en: 'Very warm welcome, very available and responsive! A really nice, pleasant place for coworking (booked for one day).',
        },
        meta: { fr: 'Avis publié en juin 2026', en: 'Review posted June 2026' },
        tag: { fr: 'À la journée', en: 'Day pass' },
      },
      {
        author: 'Maxime T.',
        original: 'fr',
        text: {
          fr: "A recommander, très pratique en venant de la gare pour une journée de télétravail à l'improviste en venant de la gare à pied.",
          en: 'Recommended, very handy for an impromptu day of remote work, walking over from the station.',
        },
        meta: { fr: 'Avis publié en octobre 2026', en: 'Review posted October 2026' },
        tag: { fr: 'Télétravail', en: 'Remote work' },
      },
      {
        author: 'Antoine N.',
        original: 'fr',
        text: {
          fr: "J'ai fortement apprécié travaillé en CoWorking chez Alatere coWo. Locaux assez conviviaux et des gérants très gentils et disponibles. Bien situé à quelques minutes de la gare d'Antibes.",
          en: 'I really enjoyed coworking at Alatere coWo. Friendly premises and very kind, available managers. Well located, a few minutes from Antibes station.',
        },
        meta: { fr: 'Avis publié en février 2026', en: 'Review posted February 2026' },
        tag: { fr: 'Centre-ville', en: 'Town centre' },
      },
    ],
  },

  domo: {
    rating: '5,0',
    ratingEn: '5.0',
    total: 11,
    mapsUrl: 'https://maps.google.com/?cid=16341834779049558877',
    label: { fr: "Avis d'entreprises domiciliées", en: 'Reviews from registered companies' },
    title: {
      fr: 'Ils ont domicilié leur société chez Alatere doMo',
      en: 'They registered their company with Alatere doMo',
    },
    legal: {
      fr: `Avis publiés par nos clients sur notre fiche Google Alatere doMo, ${LEGAL_SUFFIX.fr}`,
      en: `Reviews posted by our clients on our Alatere doMo Google listing, ${LEGAL_SUFFIX.en}`,
    },
    reviews: [
      {
        author: 'Gil C., Datalinx',
        original: 'fr',
        text: {
          fr: 'Ma société Datalinx est domiciliée depuis avril 2023 chez Alatere doMo. Ils ont pris en charge toutes les démarches administratives pour le changement de siège social et ont perms à mon entreprise d’avoir une adresse en plein centre-ville d’Antibes dans un très bel immeuble […]. Je recommande vivement !',
          en: 'My company Datalinx has been registered with Alatere doMo since April 2023. They handled all the paperwork for the change of registered office and gave my business an address in the heart of Antibes, in a very fine building […]. Highly recommended!',
        },
        meta: {
          fr: 'Client depuis avril 2023 · avis mis à jour en 2025',
          en: 'Client since April 2023 · review updated 2025',
        },
        tag: { fr: 'Transfert de siège', en: 'Office transfer' },
      },
      {
        author: 'Dessy K.',
        original: 'fr',
        text: {
          fr: "J'utilise leur service de domiciliation pour mon entreprise, et j'en suis très satisfaite. Leur employés sont toujours très accueillants et professionnels. Ils vous informent directement dès que vous avez du courrier.",
          en: 'I use their business address service for my company and I am very satisfied. Their staff are always very welcoming and professional. They let you know straight away when you have mail.',
        },
        meta: { fr: 'Avis publié en 2025', en: 'Review posted 2025' },
        tag: { fr: 'Gestion du courrier', en: 'Mail handling' },
      },
      {
        author: 'Angelo P.',
        original: 'fr',
        text: {
          fr: "j'ai fait appel aux services de domiciliation pendant quelques mois, offre Dropbox, et tout s'est très bien passé. Je recommande;",
          en: 'I used the business address services for a few months, Dropbox plan, and everything went very well. I recommend them.',
        },
        meta: { fr: 'Avis publié en novembre 2026', en: 'Review posted November 2026' },
        tag: { fr: 'Formule Dropbox', en: 'Dropbox plan' },
      },
      {
        author: 'Adonis',
        original: 'fr',
        text: {
          fr: 'Meilleur service de domiciliation de société entre Cannes et Antibes',
          en: 'Best company address service between Cannes and Antibes',
        },
        // Année estimée (« il y a 2 ans » au 13/11/2026) : à confirmer sur la fiche.
        meta: { fr: 'Avis publié en 2024', en: 'Review posted 2024' },
        tag: { fr: 'Cannes – Antibes', en: 'Cannes – Antibes' },
      },
    ],
  },
};
