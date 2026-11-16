/**
 * FAQ de la page « Salle de réunion à Antibes ».
 * Partagée entre la FAQ visible et le JSON-LD FAQPage : les deux doivent rester identiques.
 * Mêmes tarifs que coWo, Bureaux et lib/faq.ts (180 € TTC la journée, 80 € TTC après 16 h) :
 * les modifier partout. Samedi = journée majorée de 30 % (234 € TTC), validé le 16/11/2026.
 */
export const SALLE_TITLE = 'Salle de réunion à Antibes pour 6 personnes, dès 80 € | Alatere coWo';

export const faqSalleReunionAntibes: { q: string; a: string }[] = [
  {
    q: 'Combien de personnes la salle peut-elle accueillir ?',
    a: 'Six personnes, assises autour d’une table ovale modulable.',
  },
  {
    q: 'Quels sont les horaires de location ?',
    a: 'Du lundi au vendredi, à la journée de 8 h 30 à 20 h, ou en fin de journée de 16 h à 20 h. Le samedi, sur demande. La salle ne se loue pas à l’heure ni le dimanche.',
  },
  {
    q: 'Combien coûte la location ?',
    a: '180 € TTC la journée, 80 € TTC de 16 h à 20 h, et 234 € TTC la journée du samedi (tarif de la journée majoré de 30 %). Les équipements et le café sont compris.',
  },
  {
    q: 'La salle est-elle adaptée aux visioconférences ?',
    a: 'Oui : elle dispose d’un écran digital mural, de 6 écrans de bureau et du Wi-Fi.',
  },
  {
    q: 'La salle est-elle climatisée ?',
    a: 'Oui. Vous avez aussi accès à la cuisine et à la salle de bain pendant la location.',
  },
  {
    q: 'Comment réserver ?',
    a: 'Par téléphone au 07 61 56 45 56, en indiquant la date et la formule souhaitées. Pensez à réserver quelques jours à l’avance.',
  },
  {
    q: 'Où se trouve la salle ?',
    a: "Dans l'immeuble La Caravelle, 9 boulevard Albert 1er, 06600 Antibes : à 100 m de la place de Gaulle et à 700 m de la gare SNCF.",
  },
];
