/**
 * FAQ visibles des pages de pôle - source unique de vérité.
 *
 * Ces dictionnaires alimentent À LA FOIS le rendu visible (via `useT` dans les
 * composants de page) et le balisage FAQPage de `lib/jsonld.ts`. Google exige
 * que le JSON-LD reflète exactement la FAQ affichée : en partant d'une seule
 * source, les deux ne peuvent plus diverger.
 *
 * Ne pas ajouter ici de question qui n'est pas affichée sur la page.
 */

/** Même forme que `Dict` (components/grommet/lang), redéfinie ici pour rester
 *  hors du graphe client : ce fichier est lu côté serveur par lib/jsonld.ts. */
export type FaqDict = Record<string, { fr: string; en: string }>;

export type Lang = 'fr' | 'en';

/**
 * Reconstitue les paires question/réponse d'un dictionnaire FAQ, dans l'ordre
 * (`faq1_q`/`faq1_a`, `faq2_q`/`faq2_a`, ...), pour la langue demandée.
 */
export function faqPairs(tx: FaqDict, lang: Lang = 'fr'): { q: string; a: string }[] {
  const pairs: { q: string; a: string }[] = [];
  for (let i = 1; tx[`faq${i}_q`]; i++) {
    const q = tx[`faq${i}_q`];
    const a = tx[`faq${i}_a`];
    if (q && a) pairs.push({ q: q[lang], a: a[lang] });
  }
  return pairs;
}

/** Accueil - les quatre pôles d'Alatere Web. */
export const homeFaqTx: FaqDict = {
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

/** Alatere ecoM - e-commerce. */
export const ecomFaqTx: FaqDict = {
  faq1_q: { fr: 'Que fait Alatere ecoM ?', en: 'What does Alatere ecoM do?' },
  faq1_a: {
    fr: "Alatere ecoM conçoit, exploite et référence des sites e-commerce. Depuis 2003, nous gérons nos propres boutiques d'art en ligne (repro-tableaux.com, copia-di-arte.com). Le SEO, le SEA et les méthodes d'exploitation rodés sur ces sites, nous les appliquons à ceux de nos clients.",
    en: "Alatere ecoM designs, runs and ranks e-commerce sites. Since 2003 we have run our own online art stores (repro-tableaux.com, copia-di-arte.com). The SEO, SEA and operating methods tested on those sites are the ones we apply to our clients' sites.",
  },
  faq2_q: {
    fr: 'Proposez-vous du référencement SEO et de la publicité SEA ?',
    en: 'Do you offer SEO and SEA advertising?',
  },
  faq2_a: {
    fr: 'Oui : référencement naturel (SEO), publicité en ligne (SEA sur Google, Microsoft et Meta) et acquisition. Nous les pratiquons sur nos propres sites depuis 2003.',
    en: 'Yes: organic search (SEO), online advertising (SEA on Google, Microsoft and Meta) and acquisition. We have been doing this on our own sites since 2003.',
  },
  faq3_q: { fr: "Travaillez-vous pour l'international ?", en: 'Do you work internationally?' },
  faq3_a: {
    fr: 'Oui. Nous opérons des sites multilingues (hreflang, ciblage géographique, fiscalité UE), notamment via copia-di-arte.com pour les marchés européens.',
    en: 'Yes. We run multilingual sites (hreflang, geo-targeting, EU taxation), notably via copia-di-arte.com for European markets.',
  },
  faq4_q: {
    fr: 'Comment démarrer un projet e-commerce avec vous ?',
    en: 'How do I start an e-commerce project with you?',
  },
  faq4_a: {
    fr: 'Contactez-nous via le formulaire ou au 07 61 56 45 56. Nous échangeons sur votre besoin et revenons vers vous sous 48 heures avec une première proposition.',
    en: 'Contact us via the form or at +33 7 61 56 45 56. We discuss your need and get back to you within 48 hours with a first proposal.',
  },
};

/** Alatere forMa - formation certifiée Qualiopi. */
export const formaFaqTx: FaqDict = {
  faq1_q: { fr: 'Alatere forMa est-il certifié Qualiopi ?', en: 'Is Alatere forMa Qualiopi-certified?' },
  faq1_a: {
    fr: "Oui. L'organisme de formation est Alatere Web SAS (marque Alatere forMa), certifié Qualiopi et enregistré sous le numéro 93.06.07588.06. La certification Qualiopi atteste de la qualité de nos processus et conditionne l'accès aux financements publics et mutualisés.",
    en: 'Yes. The training provider is Alatere Web SAS (Alatere forMa brand), Qualiopi-certified and registered under number 93.06.07588.06. Qualiopi certification attests to the quality of our processes and is required to access public and pooled funding.',
  },
  faq2_q: { fr: 'Mes formations peuvent-elles être financées ?', en: 'Can my training be funded?' },
  faq2_a: {
    fr: "Oui. Selon votre situation, nos formations sont finançables par votre OPCO (plan de développement des compétences) ou, pour les travailleurs non-salariés, par votre FAF (Fonds d'Assurance Formation). Nous vous accompagnons dans le montage du dossier de financement.",
    en: 'Yes. Depending on your situation, our courses can be funded by your OPCO (skills development plan) or, for self-employed workers, by your FAF (training insurance fund). We help you set up the funding file.',
  },
  faq3_q: { fr: 'Quels domaines de formation proposez-vous ?', en: 'What training fields do you offer?' },
  faq3_a: {
    fr: "Cinq grands domaines : formation webmarketing (SEO, SEA, e-commerce), formation IA, anglais professionnel et langues, communication digitale et immobilier. Le détail des programmes est publié sur notre catalogue dédié.",
    en: 'Five major fields: web marketing training (SEO, SEA, e-commerce), AI training, business English and languages, digital communication and real estate. Program details are published in our dedicated catalog.',
  },
  faq4_q: {
    fr: 'Les formations sont-elles en présentiel ou à distance ?',
    en: 'Are courses in person or remote?',
  },
  faq4_a: {
    fr: "Les deux. Nous proposons du présentiel à Antibes (9 Bd Albert 1er), de l'intra-entreprise et du distanciel synchrone. Les parcours sont individualisés, en groupes de 1 à 8 personnes.",
    en: 'Both. We offer in-person training in Antibes (9 Bd Albert 1er), on-site company training and synchronous remote courses. Paths are individualized, in groups of 1 to 8.',
  },
  faq5_q: { fr: 'Quel est le délai pour démarrer une formation ?', en: 'How long before a course starts?' },
  faq5_a: {
    fr: 'Comptez en moyenne 14 jours entre la demande et le démarrage, selon le dossier de financement et les disponibilités. Le devis personnalisé est envoyé sous 48 heures.',
    en: 'On average 14 days between request and start, depending on the funding file and availability. The personalized quote is sent within 48 hours.',
  },
  faq6_q: {
    fr: 'Faites-vous de la création de site internet ou du référencement pour mon entreprise ?',
    en: 'Do you build websites or handle SEO for my company?',
  },
  faq6_a: {
    fr: "Pas sous la marque Alatere forMa, dont le métier est de former vos équipes. Les prestations d'agence web - création de site internet, référencement SEO, SEA et e-commerce - sont assurées par notre pôle Alatere ecoM.",
    en: 'Not under the Alatere forMa brand, whose job is to train your teams. Web agency work - website design, SEO, SEA and e-commerce - is handled by our Alatere ecoM division.',
  },
};

/** Alatere doMo - domiciliation d'entreprise. */
export const domoFaqTx: FaqDict = {
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

  faq6_q: {
    fr: 'Une micro-entreprise peut-elle se domicilier chez vous ?',
    en: 'Can a micro-enterprise use your address?',
  },
  faq6_a: {
    fr: "Oui. Les micro-entrepreneurs et entrepreneurs individuels peuvent domicilier leur activité à notre adresse avec l'offre Headquarters ou Forward. Cela évite de faire figurer votre adresse personnelle sur vos factures et dans les annuaires d'entreprises.",
    en: 'Yes. Micro-entrepreneurs and sole traders can register their business at our address with the Headquarters or Forward plan. This keeps your home address off your invoices and business directories.',
  },
  faq7_q: {
    fr: 'Comment récupérer mon courrier ?',
    en: 'How do I collect my mail?',
  },
  faq7_a: {
    fr: "Votre courrier est conservé à l'accueil, où vous pouvez le retirer du lundi au vendredi, de 9 h à 17 h. Avec l'offre Forward, il est aussi numérisé et réexpédié chaque semaine à l'adresse de votre choix.",
    en: 'Your mail is kept at reception, where you can collect it Monday to Friday, 9 am to 5 pm. With the Forward plan, it is also scanned and forwarded weekly to the address of your choice.',
  },
  faq8_q: {
    fr: "Puis-je recevoir mes clients à l'adresse de domiciliation ?",
    en: 'Can I meet clients at the business address?',
  },
  faq8_a: {
    fr: "Oui, sur réservation. Les salles de réunion climatisées de notre espace de coworking se louent à la journée ou en fin de journée, et vous pouvez réserver un poste de travail à la journée.",
    en: 'Yes, by booking. The air-conditioned meeting rooms of our coworking space can be rented by the day or late afternoon, and you can book a desk by the day.',
  },
  faq9_q: {
    fr: 'Quelle différence entre domiciliation commerciale et boîte aux lettres ?',
    en: 'What is the difference between a business address and a mailbox?',
  },
  faq9_a: {
    fr: "La domiciliation commerciale (offres Headquarters et Forward) vous donne une adresse de siège social inscrite au registre du commerce. L'offre Dropbox est une simple boîte aux lettres : elle reçoit votre courrier mais ne peut pas servir de siège social.",
    en: 'A business address (Headquarters and Forward plans) gives you a registered-office address recorded in the trade register. The Dropbox plan is a simple mailbox: it receives your mail but cannot be used as a registered office.',
  },
};

/** Alatere coWo - coworking. */
export const cowoFaqTx: FaqDict = {
  faq1_q: {
    fr: "Où se situe l'espace de coworking ?",
    en: 'Where is the coworking space located?',
  },
  faq1_a: {
    fr: 'Au 9 Boulevard Albert 1er, 06600 Antibes, à deux pas du port Vauban et à environ dix minutes à pied (700 m) de la gare SNCF.',
    en: 'At 9 Boulevard Albert 1er, 06600 Antibes, steps from Port Vauban and about a ten-minute walk (700 m) from the train station.',
  },
  faq2_q: { fr: 'Quelles formules proposez-vous ?', en: 'What plans do you offer?' },
  faq2_a: {
    fr: "Pass à la journée (30 € TTC), abonnement mensuel en open-space (360 € TTC par mois), location de salles de réunion (180 € TTC la journée) et bureau privatif à l'année, selon disponibilité. Le pass, l'abonnement et les salles se réservent en ligne.",
    en: 'Day pass (€30 incl. VAT), monthly open-area membership (€360 incl. VAT per month), meeting-room rental (€180 incl. VAT per day) and yearly private offices, subject to availability. Passes, memberships and rooms can be booked online.',
  },
  faq3_q: {
    fr: 'Puis-je réserver une salle de réunion sans être abonné ?',
    en: 'Can I book a meeting room without a membership?',
  },
  faq3_a: {
    fr: 'Oui, que vous soyez membre ou non. La disponibilité est toutefois limitée : la plupart de nos salles sont louées à l’année par des entreprises, mieux vaut donc réserver quelques jours à l’avance. Tarif : 180 € TTC la journée, ou 80 € TTC en fin de journée (après 16 h).',
    en: 'Yes, member or not. Availability is limited, though: most of our rooms are rented yearly by companies, so it’s best to book a few days ahead. Rate: €180 incl. VAT per day, or €80 incl. VAT for the late slot (after 4 pm).',
  },
  faq4_q: {
    fr: 'Puis-je aussi y domicilier mon entreprise ?',
    en: "Can I also register my company's address here?",
  },
  faq4_a: {
    fr: 'Oui, via notre offre Alatere doMo. Les membres du coworking bénéficient de conditions avantageuses sur la domiciliation.',
    en: 'Yes, through our Alatere doMo service. Coworking members enjoy preferential terms on business address services.',
  },
  faq5_q: { fr: "Quels sont les horaires d'accès ?", en: 'What are the opening hours?' },
  faq5_a: {
    fr: "Le pass journée donne accès à l'espace de 9 h à 18 h, du lundi au vendredi. Les abonnés mensuels disposent d'un badge d'accès à l'immeuble et peuvent venir travailler 24 h/24, 7 j/7.",
    en: 'The day pass gives access from 9 am to 6 pm, Monday to Friday. Monthly members get a building access badge and can work 24/7.',
  },
  faq6_q: { fr: 'Combien de personnes travaillent dans l’espace ?', en: 'How many people work in the space?' },
  faq6_a: {
    fr: "L'espace compte 15 postes de travail répartis dans 5 salles : une ambiance calme et à taille humaine, loin des grands plateaux bruyants.",
    en: 'The space has 15 workstations across 5 rooms: a calm, human-scale setting, far from large noisy open floors.',
  },
  faq7_q: { fr: 'Peut-on déjeuner sur place ?', en: 'Can I have lunch on site?' },
  faq7_a: {
    fr: 'Oui. Une cuisine équipée avec un comptoir est à la disposition de tous les coworkers : vous pouvez y conserver votre repas au frais et déjeuner sur place.',
    en: 'Yes. An equipped kitchen with a counter is available to all coworkers: you can keep your lunch in the fridge and eat on site.',
  },
};

/**
 * Alatere ecoM - page « Partenaires agences » (sous-traitance en marque blanche).
 * Affichée dans EcomPartenairesPage et balisée en FAQPage sur /alatere-ecom/partenaires
 * et /en/alatere-ecom/partners. Ne contient aucun prix : la page n'en affiche pas.
 */
export const partenairesFaqTx: FaqDict = {
  faq1_q: {
    fr: "Qu'est-ce que la sous-traitance e-commerce en marque blanche ?",
    en: 'What is white-label e-commerce subcontracting?',
  },
  faq1_a: {
    fr: "C'est le fait de confier à un prestataire l'exploitation d'une boutique en ligne (campagnes, SEO, fiches produits, service client, logistique) qui travaille sous le nom de l'agence. Le client final ne voit que l'agence. Alatere ecoM est le pôle e-commerce d'Alatere Web SAS, à Antibes : nous exploitons nos propres boutiques depuis 2003 et faisons ce travail pour des agences.",
    en: "It means handing the day-to-day running of an online store (campaigns, SEO, product pages, customer care, logistics) to a provider that works under the agency's name. The end client only sees the agency. Alatere ecoM is the e-commerce arm of Alatere Web SAS, in Antibes: we have run our own stores since 2003 and do this work for agencies.",
  },
  faq2_q: {
    fr: 'Mon client saura-t-il que vous intervenez ?',
    en: 'Will my client know you are involved?',
  },
  faq2_a: {
    fr: "Non, en marque blanche notre nom n'apparaît nulle part : vous restez l'interlocuteur unique et nous livrons sous votre nom. Si le projet le demande, nous pouvons aussi intervenir en co-traitance et signer avec vous devant le client final.",
    en: 'No. In white label our name appears nowhere: you remain the single point of contact and we deliver under your name. If the project calls for it, we can also work as joint contractor and sign alongside you before the end client.',
  },
  faq3_q: {
    fr: 'Quelles missions une agence peut-elle vous confier ?',
    en: 'Which tasks can an agency hand over to you?',
  },
  faq3_a: {
    fr: "Six domaines : acquisition payante (Google Ads, Meta Ads), SEO, contenu et traduction, relation client, avis et e-réputation, back-office et logistique. Nous pouvons aussi former les équipes de vos clients, en tant qu'organisme certifié Qualiopi.",
    en: "Six areas: paid acquisition (Google Ads, Meta Ads), SEO, content and translation, customer care, reviews and online reputation, back office and logistics. We can also train your clients' teams, as a Qualiopi-certified training provider.",
  },
  faq4_q: {
    fr: 'Dans quelles langues travaillez-vous ?',
    en: 'Which languages do you work in?',
  },
  faq4_a: {
    fr: "Le service client est assuré en français, anglais, italien et espagnol. Pour les contenus et les marchés, l'équipe couvre aussi l'allemand, le slovaque et le tchèque. Les textes sont rédigés ou traduits par nous, sans traduction automatique.",
    en: 'Customer care is handled in French, English, Italian and Spanish. For content and markets, the team also covers German, Slovak and Czech. Texts are written or translated by us, without machine translation.',
  },
  faq5_q: {
    fr: 'Sur quels marchés européens intervenez-vous ?',
    en: 'Which European markets do you cover?',
  },
  faq5_a: {
    fr: "Nous opérons déjà la France (boutiques en propre), l'Italie et l'Espagne (vente et service client), la Tchéquie et la Slovaquie (vente et service client) et l'Allemagne (supply chain et expédition).",
    en: 'We already operate in France (our own stores), Italy and Spain (sales and customer care), Czechia and Slovakia (sales and customer care) and Germany (supply chain and shipping).',
  },
  faq6_q: {
    fr: 'Comment est facturée la sous-traitance ?',
    en: 'How is the subcontracting billed?',
  },
  faq6_a: {
    fr: "Le plus souvent, par un fixe mensuel à partir de 290 € HT par boutique, plus une part indexée sur les ventes générées : vous ne payez la croissance que si elle a lieu. Le budget publicitaire reste payé par votre client. Pour une mission ponctuelle, nous travaillons en régie ou au forfait. Nous vous facturons, vous facturez votre client. Décrivez votre besoin sur le formulaire de contact : nous répondons sous 48 heures avec une première proposition.",
    en: 'Usually through a monthly fee from €290 excl. VAT per store, plus a share indexed on the sales generated: you only pay for growth if it happens. Your client pays the ad budget directly. For one-off assignments, we work on a day-rate or fixed-price basis. We invoice you, you invoice your client. Describe your need on the contact form: we reply within 48 hours with a first proposal.',
  },
  faq7_q: {
    fr: "Pouvez-vous co-traiter un projet ou un appel d'offres ?",
    en: 'Can you contract jointly on a project or a tender?',
  },
  faq7_a: {
    fr: "Oui. Alatere Web est une SAS, assurée en responsabilité civile professionnelle, qui travaille sous contrat de sous-traitance ou de co-traitance. En co-traitance, nous assumons notre part devant le client final.",
    en: 'Yes. Alatere Web is a French SAS company, covered by professional liability insurance, working under a subcontracting or joint-contracting agreement. As joint contractor, we answer for our share before the end client.',
  },
  faq8_q: {
    fr: 'La formation des équipes de mes clients peut-elle être financée ?',
    en: "Can the training of my clients' teams be funded?",
  },
  faq8_a: {
    fr: "Oui, quand un financement est mobilisable : par l'OPCO de l'entreprise pour les salariés, ou par le FAF pour les dirigeants non-salariés. Alatere Web SAS est certifié Qualiopi et enregistré sous le n° 93.06.07588.06. Vous gardez la relation, nous gérons l'administratif de la formation.",
    en: "Yes, when funding can be mobilised: through the company's OPCO for employees, or through the FAF for self-employed managers. Alatere Web SAS is Qualiopi-certified and registered under no. 93.06.07588.06. You keep the relationship, we handle the training paperwork.",
  },
  faq9_q: {
    fr: 'Qui réalise le travail ?',
    en: 'Who does the work?',
  },
  faq9_a: {
    fr: "Une équipe de trois personnes à Antibes : Jean-Gérard Anfossi (acquisition et formation, plus de 25 ans en e-commerce et webmarketing), Iveta Siskova Anfossi (opérations e-commerce et relation client, plus de 15 ans en service clients multi-pays) et Simona Ballatore (marketing digital et relation client multilingue).",
    en: 'A team of three in Antibes: Jean-Gérard Anfossi (acquisition and training, 25+ years in e-commerce and web marketing), Iveta Siskova Anfossi (e-commerce operations and customer care, 15+ years in multi-country customer service) and Simona Ballatore (digital marketing and multilingual customer care).',
  },
};
