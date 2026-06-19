'use client';

/** Conditions générales de vente — page prose (charte Grommet). Modèle à faire valider. */

import Link from 'next/link';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Email } from '@/components/grommet/Email';

const TITLE = {
  fr: 'Conditions générales de vente — Alatere Web',
  en: 'Terms and conditions of sale — Alatere Web',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_self: { fr: 'Conditions générales de vente', en: 'Terms of sale' },
  page_title: { fr: 'Conditions générales de vente', en: 'Terms and conditions of sale' },
  page_sub: {
    fr: "Les présentes conditions régissent les prestations d'Alatere Web SAS, notamment les actions de formation (Alatere forMa) et les services associés.",
    en: 'These terms govern the services of Alatere Web SAS, in particular training activities (Alatere forMa) and related services.',
  },
  updated: { fr: 'Dernière mise à jour : juin 2026.', en: 'Last updated: June 2026.' },

  s1_t: { fr: '1. Objet et champ d’application', en: '1. Purpose and scope' },
  s1_p: {
    fr: "Les présentes conditions générales de vente (CGV) s'appliquent à toute commande de prestations conclue avec Alatere Web SAS (9 Boulevard Albert 1er, 06600 Antibes — SIRET 443 421 334 00030), ci-après « le Prestataire ». Elles prévalent sur tout autre document du client, sauf dérogation écrite. Toute commande implique l'adhésion sans réserve aux présentes CGV.",
    en: 'These general terms and conditions of sale (GTC) apply to any order of services concluded with Alatere Web SAS (9 Boulevard Albert 1er, 06600 Antibes — SIRET 443 421 334 00030), hereinafter “the Provider”. They prevail over any other client document, save written derogation. Any order implies unreserved acceptance of these GTC.',
  },

  s2_t: { fr: '2. Inscription et formation du contrat', en: '2. Registration and contract formation' },
  s2_p: {
    fr: "Toute prestation fait l'objet d'un devis ou d'une proposition détaillée. Pour les actions de formation, une convention (client professionnel) ou un contrat de formation (client particulier) est établi conformément aux articles L.6353-1 et suivants du Code du travail. Le contrat est formé à réception du devis daté, signé et revêtu de la mention « bon pour accord ».",
    en: 'Each service is subject to a quote or a detailed proposal. For training activities, a training agreement (professional client) or a training contract (individual client) is drawn up in accordance with articles L.6353-1 et seq. of the French Labour Code. The contract is formed upon receipt of the dated, signed quote bearing the wording “bon pour accord”.',
  },

  s3_t: { fr: '3. Prix', en: '3. Prices' },
  s3_p: {
    fr: "Les prix sont indiqués en euros. Alatere Web SAS précise sur chaque devis si les montants sont exprimés hors taxes ou nets de taxe (les actions de formation pouvant relever de l'exonération de TVA prévue à l'article 261-4-4° a du CGI). Les frais éventuels (déplacement, supports spécifiques) sont précisés au devis.",
    en: 'Prices are stated in euros. Alatere Web SAS specifies on each quote whether amounts are exclusive of tax or tax-exempt (training activities may fall under the VAT exemption of article 261-4-4° a of the French Tax Code). Any additional costs (travel, specific materials) are stated in the quote.',
  },

  s4_t: { fr: '4. Modalités de paiement', en: '4. Payment terms' },
  s4_p: {
    fr: "Sauf accord particulier, les factures sont payables à 30 jours par virement. Conformément aux articles L.441-10 et D.441-5 du Code de commerce, tout retard de paiement entraîne des pénalités au taux légal en vigueur ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement.",
    en: 'Unless otherwise agreed, invoices are payable within 30 days by bank transfer. In accordance with articles L.441-10 and D.441-5 of the French Commercial Code, any late payment results in penalties at the applicable legal rate and a fixed recovery indemnity of €40.',
  },

  s5_t: { fr: '5. Prise en charge et financement', en: '5. Funding' },
  s5_p: {
    fr: "Lorsque la formation est financée par un OPCO ou un autre organisme, il appartient au client d'effectuer la demande de prise en charge avant le début de la formation et de communiquer l'accord de financement. En cas de subrogation acceptée par le Prestataire, le client reste redevable des sommes non prises en charge par le financeur.",
    en: 'When the training is funded by an OPCO or another body, it is the client’s responsibility to request funding before the training starts and to provide the funding agreement. Where subrogation is accepted by the Provider, the client remains liable for any amounts not covered by the funder.',
  },

  s6_t: { fr: '6. Annulation, report et abandon', en: '6. Cancellation, postponement and withdrawal' },
  s6_l1: {
    fr: "Annulation par le client moins de 10 jours ouvrés avant le démarrage : une indemnité, précisée au devis, peut être facturée (non imputable au financeur).",
    en: 'Cancellation by the client less than 10 working days before the start: an indemnity, stated in the quote, may be charged (not chargeable to the funder).',
  },
  s6_l2: {
    fr: "Abandon en cours de formation : seules les heures réellement suivies sont dues, sauf cas de force majeure dûment justifié.",
    en: 'Withdrawal during the training: only the hours actually attended are due, except in a duly justified case of force majeure.',
  },
  s6_l3: {
    fr: "Le Prestataire se réserve le droit de reporter ou d'annuler une session (effectif insuffisant, indisponibilité du formateur) ; il en informe le client au plus tôt et propose une nouvelle date ou le remboursement des sommes versées.",
    en: 'The Provider reserves the right to postpone or cancel a session (insufficient attendance, trainer unavailability); it informs the client as soon as possible and offers a new date or a refund of amounts paid.',
  },

  s7_t: { fr: '7. Droit de rétractation', en: '7. Right of withdrawal' },
  s7_p: {
    fr: "Pour les contrats conclus à distance ou hors établissement avec un client consommateur, celui-ci dispose d'un délai de rétractation de quatorze (14) jours à compter de la signature, conformément aux articles L.221-18 et suivants du Code de la consommation. Pour le contrat de formation professionnelle, l'article L.6353-5 du Code du travail prévoit un délai de rétractation de dix (10) jours.",
    en: 'For contracts concluded remotely or off-premises with a consumer client, the latter has a fourteen (14) day withdrawal period from signature, in accordance with articles L.221-18 et seq. of the French Consumer Code. For professional training contracts, article L.6353-5 of the Labour Code provides a ten (10) day withdrawal period.',
  },

  s8_t: { fr: '8. Obligations et responsabilité', en: '8. Obligations and liability' },
  s8_p: {
    fr: "Le Prestataire est tenu d'une obligation de moyens. Sa responsabilité ne saurait être engagée pour une inexécution due au client, à un tiers ou à un cas de force majeure. En tout état de cause, la responsabilité du Prestataire est limitée au montant des sommes effectivement perçues au titre de la prestation concernée.",
    en: 'The Provider is bound by an obligation of means. It cannot be held liable for non-performance attributable to the client, a third party or force majeure. In any event, the Provider’s liability is limited to the amounts actually received for the service concerned.',
  },

  s9_t: { fr: '9. Force majeure', en: '9. Force majeure' },
  s9_p: {
    fr: "Aucune des parties ne pourra être tenue responsable d'un manquement à ses obligations résultant d'un cas de force majeure au sens de l'article 1218 du Code civil et de la jurisprudence française.",
    en: 'Neither party may be held liable for a failure to perform its obligations resulting from force majeure within the meaning of article 1218 of the French Civil Code and French case law.',
  },

  s10_t: { fr: '10. Propriété intellectuelle', en: '10. Intellectual property' },
  s10_p: {
    fr: "Les supports pédagogiques, contenus et méthodes restent la propriété exclusive du Prestataire. Le client s'interdit toute reproduction, diffusion ou exploitation, totale ou partielle, sans autorisation écrite préalable.",
    en: 'Teaching materials, content and methods remain the exclusive property of the Provider. The client undertakes not to reproduce, distribute or exploit them, in whole or in part, without prior written authorization.',
  },

  s11_t: { fr: '11. Données personnelles', en: '11. Personal data' },
  s11_p_a: {
    fr: 'Les données collectées sont traitées conformément au RGPD. Pour en savoir plus, consultez notre ',
    en: 'Collected data is processed in accordance with the GDPR. To learn more, see our ',
  },
  s11_link: { fr: 'politique de confidentialité', en: 'privacy policy' },
  s11_p_b: { fr: '.', en: '.' },

  s12_t: { fr: '12. Réclamations et médiation', en: '12. Complaints and mediation' },
  s12_p_a: {
    fr: 'Toute réclamation peut être adressée à ',
    en: 'Any complaint may be sent to ',
  },
  s12_p_b: {
    fr: ". Conformément aux articles L.612-1 et suivants du Code de la consommation, le client consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige.",
    en: '. In accordance with articles L.612-1 et seq. of the French Consumer Code, a consumer client may use a consumer mediator free of charge to seek an amicable resolution of a dispute.',
  },

  s13_t: { fr: '13. Droit applicable et juridiction', en: '13. Governing law and jurisdiction' },
  s13_p: {
    fr: "Les présentes CGV sont soumises au droit français. À défaut de résolution amiable, tout litige relève des tribunaux compétents du ressort d'Antibes, sous réserve des règles impératives applicables aux consommateurs.",
    en: 'These GTC are governed by French law. Failing an amicable resolution, any dispute falls under the competent courts of the Antibes jurisdiction, subject to the mandatory rules applicable to consumers.',
  },
};

export default function CGVPage() {
  return (
    <div className="g-home">
      <LangProvider titles={TITLE}>
        <Header />
        <Body />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Body() {
  const t = useT(TX);
  return (
    <main id="top">
      <div className="g-pagehero">
        <div className="g-breadcrumb">
          <Link href="/">{t('bc_home')}</Link> <span>›</span> <span>{t('bc_self')}</span>
        </div>
        <h1>{t('page_title')}</h1>
        <p className="g-page-sub">{t('page_sub')}</p>
      </div>

      <div className="g-prose">
        <section>
          <h2>{t('s1_t')}</h2>
          <p>{t('s1_p')}</p>
        </section>
        <section>
          <h2>{t('s2_t')}</h2>
          <p>{t('s2_p')}</p>
        </section>
        <section>
          <h2>{t('s3_t')}</h2>
          <p>{t('s3_p')}</p>
        </section>
        <section>
          <h2>{t('s4_t')}</h2>
          <p>{t('s4_p')}</p>
        </section>
        <section>
          <h2>{t('s5_t')}</h2>
          <p>{t('s5_p')}</p>
        </section>
        <section>
          <h2>{t('s6_t')}</h2>
          <ul>
            <li>{t('s6_l1')}</li>
            <li>{t('s6_l2')}</li>
            <li>{t('s6_l3')}</li>
          </ul>
        </section>
        <section>
          <h2>{t('s7_t')}</h2>
          <p>{t('s7_p')}</p>
        </section>
        <section>
          <h2>{t('s8_t')}</h2>
          <p>{t('s8_p')}</p>
        </section>
        <section>
          <h2>{t('s9_t')}</h2>
          <p>{t('s9_p')}</p>
        </section>
        <section>
          <h2>{t('s10_t')}</h2>
          <p>{t('s10_p')}</p>
        </section>
        <section>
          <h2>{t('s11_t')}</h2>
          <p>
            {t('s11_p_a')}
            <Link className="g-inline" href="/confidentialite">
              {t('s11_link')}
            </Link>
            {t('s11_p_b')}
          </p>
        </section>
        <section>
          <h2>{t('s12_t')}</h2>
          <p>{t('s12_p_a')}<Email user="contact" />{t('s12_p_b')}</p>
        </section>
        <section>
          <h2>{t('s13_t')}</h2>
          <p>{t('s13_p')}</p>
          <p className="g-updated">{t('updated')}</p>
        </section>
      </div>
    </main>
  );
}
