/**
 * Contenu partagé de la page « Bureaux à louer à Antibes » (/alatere-cowo/bureaux-a-louer-antibes).
 * La FAQ sert à la fois à l'affichage et au JSON-LD FAQPage : une seule source de vérité.
 */
import type { Bi } from '@/lib/blog';

export const BUREAUX_PATH = '/alatere-cowo/bureaux-a-louer-antibes';

/** Loyer moyen affiché des bureaux à Antibes, BureauxLocaux, juin 2026 (€ HT HC / m² / an). */
export const MARKET = {
  low: 130,
  avg: 215,
  high: 377,
  source: 'BureauxLocaux, juin 2026',
};

export const BUREAUX_FAQ: { q: Bi; a: Bi }[] = [
  {
    q: {
      fr: 'Combien coûte la location d’un bureau à Antibes ?',
      en: 'How much does it cost to rent an office in Antibes?',
    },
    a: {
      fr: 'Chez Alatere coWo, un poste à la journée coûte 30 € TTC et l’abonnement mensuel 360 € TTC, charges, fibre et café compris. Sur le marché classique, les bureaux d’Antibes se louent en moyenne 215 € HT par m² et par an hors charges (BureauxLocaux, juin 2026), auxquels s’ajoutent charges, taxe foncière, dépôt de garantie et frais d’agence.',
      en: 'At Alatere coWo, a desk for the day costs €30 incl. VAT and the monthly membership €360 incl. VAT, with utilities, fibre and coffee included. On the conventional market, offices in Antibes rent for an average of €215 excl. VAT per m² per year before charges (BureauxLocaux, June 2026), plus service charges, property tax, deposit and agency fees.',
    },
  },
  {
    q: {
      fr: 'Faut-il signer un bail pour louer un bureau chez vous ?',
      en: 'Do I need to sign a lease to rent an office with you?',
    },
    a: {
      fr: 'Non. Le pass journée et l’abonnement mensuel se réservent en ligne, sans bail commercial ni bail professionnel, et sans dépôt de garantie. Vous n’êtes pas engagé sur trois, six ou neuf ans.',
      en: 'No. The day pass and the monthly membership are booked online, with no commercial or professional lease and no deposit. You are not tied in for three, six or nine years.',
    },
  },
  {
    q: {
      fr: 'Avez-vous des bureaux privatifs fermés disponibles ?',
      en: 'Do you have private, closed offices available?',
    },
    a: {
      fr: 'Nos bureaux privatifs se louent à l’année et sont actuellement tous occupés. Contactez-nous pour être prévenu de la prochaine disponibilité. En attendant, l’abonnement mensuel en open-space vous donne un poste de travail immédiatement.',
      en: 'Our private offices are rented on a yearly basis and are currently all taken. Contact us to hear about the next availability. In the meantime, the monthly open-area membership gives you a desk straight away.',
    },
  },
  {
    q: {
      fr: 'Peut-on louer un bureau à Antibes pour une seule journée ?',
      en: 'Can I rent an office in Antibes for just one day?',
    },
    a: {
      fr: 'Oui. Le pass journée à 30 € TTC donne accès à un poste en open-space de 9 h à 18 h, du lundi au vendredi, café compris. Il se réserve en ligne, la veille ou le matin même selon les places libres.',
      en: 'Yes. The €30 day pass gives you an open-area desk from 9 am to 6 pm, Monday to Friday, coffee included. It is booked online, the day before or the same morning depending on availability.',
    },
  },
  {
    q: {
      fr: 'Puis-je recevoir des clients ?',
      en: 'Can I meet clients there?',
    },
    a: {
      fr: 'Oui, dans l’une de nos salles de réunion climatisées : 180 € TTC la journée ou 80 € TTC après 16 h, que vous soyez abonné ou non. La plupart des salles sont louées à l’année, mieux vaut réserver quelques jours à l’avance.',
      en: 'Yes, in one of our air-conditioned meeting rooms: €180 incl. VAT per day or €80 after 4 pm, whether or not you are a member. Most rooms are rented yearly, so it is best to book a few days ahead.',
    },
  },
  {
    q: {
      fr: 'Peut-on accéder aux bureaux le soir et le week-end ?',
      en: 'Can I access the offices in the evening and at weekends?',
    },
    a: {
      fr: 'Les abonnés mensuels reçoivent un badge d’accès à l’immeuble et peuvent venir travailler 24 h/24, 7 j/7. Le pass journée donne accès de 9 h à 18 h en semaine.',
      en: 'Monthly members get a building access badge and can work 24/7. The day pass gives access from 9 am to 6 pm on weekdays.',
    },
  },
  {
    q: {
      fr: 'Puis-je aussi domicilier mon entreprise à cette adresse ?',
      en: 'Can I also register my company at this address?',
    },
    a: {
      fr: 'Oui, avec Alatere doMo, notre service de domiciliation agréé par la préfecture, dès 30 € HT par mois. Les membres du coworking bénéficient de conditions avantageuses.',
      en: 'Yes, with Alatere doMo, our préfecture-approved business address service, from €30 excl. VAT per month. Coworking members get preferential terms.',
    },
  },
];

/** FAQ de l'article « Louer un bureau à Antibes : quel bail choisir ? » (FR uniquement, miroir du FAQPage). */
export const BAIL_FAQ: { q: string; a: string }[] = [
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
