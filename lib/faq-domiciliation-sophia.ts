/**
 * FAQ de l'article « Domicilier son entreprise à Sophia Antipolis ou à Mougins ».
 * Partagée entre le corps de l'article (FAQ visible) et le JSON-LD FAQPage de la page :
 * les deux doivent rester identiques.
 */
export const faqDomiciliationSophia: { q: string; a: string }[] = [
  {
    q: 'Puis-je écrire « Sophia Antipolis » dans mon adresse si je suis domicilié à Antibes centre ?',
    a: "Non, et nous vous le déconseillons. Sophia Antipolis n'est pas une commune : votre extrait Kbis indique la commune réelle de votre siège, ici 06600 Antibes. Les entreprises installées dans le parc ajoutent souvent « Sophia Antipolis » après le nom de leur commune, mais pour une adresse en centre-ville d'Antibes, cette mention induirait vos clients en erreur.",
  },
  {
    q: "J'habite à Mougins et je travaille à Sophia Antipolis : domicile ou société de domiciliation ?",
    a: "Le domicile est gratuit, mais votre adresse personnelle devient publique (Kbis, factures, annuaires d'entreprises) et votre bail ou votre règlement de copropriété peut l'interdire. Une société de domiciliation agréée vous donne une adresse professionnelle distincte pour quelques dizaines d'euros par mois, et vous évite un transfert de siège si vous déménagez.",
  },
  {
    q: "Combien de temps faut-il pour obtenir l'attestation de domiciliation ?",
    a: "Chez Alatere doMo, l'attestation de domiciliation est transmise sous 48 heures une fois le dossier complet. C'est la pièce que le guichet unique de l'INPI demande pour immatriculer votre entreprise ou transférer votre siège.",
  },
  {
    q: 'Puis-je recevoir mes clients à mon adresse de domiciliation ?',
    a: "Oui, au 9 boulevard Albert 1er, les salles de réunion et l'espace de coworking Alatere coWo se réservent à la demande. C'est utile quand vos clients ou vos partenaires préfèrent un rendez-vous en ville plutôt que dans le parc.",
  },
  {
    q: 'La commune de domiciliation change-t-elle quelque chose à la CFE ?',
    a: "La cotisation foncière des entreprises dépend de la commune où vous disposez de locaux, et une adresse de domiciliation vous rattache à la commune du domiciliataire. Les règles de calcul varient selon votre situation : c'est un point à valider avec votre expert-comptable avant de choisir.",
  },
];
