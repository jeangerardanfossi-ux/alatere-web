/**
 * Article « Louer un bureau à Antibes : quel bail choisir ? ».
 * La FAQ est partagée entre le rendu visible et le JSON-LD FAQPage : les deux
 * doivent rester identiques.
 */

/** Loyers de bureaux constatés à Antibes, en €/m²/an. */
export const MARKET = {
  low: 130,
  avg: 215,
  high: 377,
  source: 'BureauxLocaux, juin 2026',
};

export const faqLouerBureauBail: { q: string; a: string }[] = [
  {
    q: 'Quel bail signer pour louer un bureau ?',
    a: "La plupart des activités de bureau (conseil, agence, services) relèvent du bail commercial 3-6-9. Les professions libérales et les activités non commerciales peuvent signer un bail professionnel de 6 ans minimum. Pour un besoin de moins de trois ans, le bail dérogatoire est possible, et le contrat de prestation de services d'un centre d'affaires ou d'un coworking évite tout bail.",
  },
  {
    q: 'Peut-on quitter un bail commercial avant 9 ans ?',
    a: "Oui, à la fin de chaque période de trois ans, en donnant congé six mois à l'avance. En dehors de ces échéances, il faut l'accord du bailleur ou une clause particulière.",
  },
  {
    q: 'Le coworking est-il un bail ?',
    a: "Non. L'abonnement à un coworking ou à un centre d'affaires est un contrat de prestation de services. La Cour de cassation l'a rappelé le 27 juin 2024 : un tel contrat n'est pas soumis au statut des baux commerciaux. Il n'ouvre donc pas de droit au renouvellement, mais il n'impose pas non plus d'engagement de plusieurs années.",
  },
  {
    q: 'Combien coûte un bureau à Antibes ?',
    a: "Les annonces de bureaux à Antibes affichent en moyenne 215 € HT par m² et par an hors charges, de 130 à 377 € selon l'emplacement et l'état (BureauxLocaux, juin 2026). Un bureau de 15 m² au prix moyen revient à environ 270 € HT par mois de loyer seul, avant charges, taxe foncière, internet et assurance.",
  },
];
