'use client';

import Link from '@/components/grommet/LocalizedLink';
import { useLang } from '@/components/grommet/lang';

/** Corps de l'article « Domicilier son entreprise à Antibes » - bilingue FR/EN. */
export default function DomicilierEntrepriseAntibes() {
  const { lang } = useLang();
  return lang === 'en' ? <En /> : <Fr />;
}

function Fr() {
  return (
    <>
      <p>
        La <strong>domiciliation d&rsquo;entreprise</strong> consiste à attribuer à votre société
        une adresse de <strong>siège social</strong>, distincte de votre domicile personnel. À
        Antibes, elle permet d&rsquo;obtenir une adresse professionnelle de prestige tout en
        déléguant la gestion du courrier. Voici, étape par étape, comment domicilier votre
        entreprise.
      </p>

      <section>
        <h2>Qu&rsquo;est-ce que la domiciliation d&rsquo;entreprise ?</h2>
        <p>
          Domicilier une entreprise, c&rsquo;est lui donner une adresse administrative et fiscale
          officielle. Cette adresse figure sur le Kbis, les factures et les documents légaux. La
          prestation est encadrée : seule une <strong>société de domiciliation agréée par la
          préfecture</strong> peut délivrer une <strong>attestation de domiciliation</strong>,
          exigée par le greffe du tribunal de commerce et le RCS.
        </p>
      </section>

      <section>
        <h2>Pourquoi domicilier son entreprise à Antibes ?</h2>
        <ul>
          <li>
            <strong>Une adresse de prestige</strong> en plein centre d&rsquo;Antibes, à deux pas du
            port Vauban.
          </li>
          <li>
            <strong>Séparer vie privée et professionnelle</strong> : votre domicile reste
            confidentiel.
          </li>
          <li>
            <strong>Une image crédible</strong> auprès de vos clients, partenaires et banques.
          </li>
          <li>
            <strong>Des services associés</strong> : réception du courrier, numérisation et
            réexpédition.
          </li>
          <li>
            <strong>Un écosystème complet</strong> sur place : coworking, salles de réunion et
            secrétariat externalisé.
          </li>
        </ul>
      </section>

      <section>
        <h2>Les étapes pour domicilier son entreprise</h2>
        <ol>
          <li>Choisir une société de domiciliation <strong>agréée préfecture</strong>.</li>
          <li>Signer le <strong>contrat de domiciliation</strong> (3 mois minimum, renouvelable).</li>
          <li>Transmettre les <strong>pièces justificatives</strong> demandées.</li>
          <li>Recevoir votre <strong>attestation de domiciliation</strong>.</li>
          <li>
            Déclarer l&rsquo;adresse au <strong>greffe</strong> (lors de la création ou du transfert
            de siège).
          </li>
        </ol>
        <p>
          Chez Alatere doMo, l&rsquo;attestation est émise <strong>sous 24 à 48 heures</strong> une
          fois le dossier complet.
        </p>
      </section>

      <section>
        <h2>Quels documents fournir ?</h2>
        <ul>
          <li>Une pièce d&rsquo;identité du dirigeant ;</li>
          <li>Un justificatif de domicile personnel récent ;</li>
          <li>Les statuts ou le Kbis (pour une société déjà immatriculée) ;</li>
          <li>Un RIB pour le mandat de prélèvement.</li>
        </ul>
        <p>La liste exacte peut varier selon la forme juridique et votre situation.</p>
      </section>

      <section>
        <h2>Combien coûte une domiciliation à Antibes ?</h2>
        <p>Chez Alatere doMo, les tarifs sont clairs et sans engagement de longue durée :</p>
        <ul>
          <li>
            <strong>Offre Dropbox - 25 € HT / mois</strong> : boîte aux lettres (réception et
            stockage du courrier), sans utilisation comme siège social ;
          </li>
          <li>
            <strong>Offre Headquarters - 30 € HT / mois</strong> : adresse de siège social +
            réception du courrier ;
          </li>
          <li>
            <strong>Offre Forward - 50 € HT / mois</strong> : numérisation et réexpédition incluses ;
          </li>
          <li>
            <strong>Frais de dossier - 50 € HT</strong>, une seule fois, à l'ouverture du dossier.
          </li>
        </ul>
        <p>
          Découvrez le détail sur la page{' '}
          <Link className="g-inline" href="/alatere-domo">
            Alatere doMo - domiciliation à Antibes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Domiciliation et transfert de siège social</h2>
        <p>
          Vous avez déjà une entreprise ? La domiciliation s&rsquo;accompagne d&rsquo;un{' '}
          <strong>transfert de siège</strong> : nous vous aidons pour les formalités auprès du greffe
          et la mise à jour de vos statuts. L&rsquo;adresse est utilisable dès l&rsquo;attestation
          émise.
        </p>
      </section>

      <section>
        <h2>Aller plus loin : déléguer aussi l&rsquo;administratif</h2>
        <p>
          La domiciliation génère naturellement des tâches (courrier, relances, formalités). Avec{' '}
          <a className="g-inline" href="/alatere-todo.html">
            Alatere toDo
          </a>
          , une assistante dédiée prend en charge votre secrétariat - avec des conditions
          avantageuses pour les entreprises domiciliées.
        </p>
        <p>
          Une question sur votre projet de domiciliation ?{' '}
          <Link className="g-inline" href="/contact?pole=domo">
            Contactez-nous
          </Link>{' '}
          : nous répondons sous 48 heures.
        </p>
      </section>

      <section>
        <h2>Questions fréquentes</h2>

        <h3>Qu&rsquo;est-ce que la domiciliation d&rsquo;entreprise ?</h3>
        <p>
          Domicilier une entreprise, c&rsquo;est lui attribuer une adresse de siège social officielle,
          distincte du domicile personnel. Cette adresse figure sur le Kbis, les factures et les
          documents légaux. Seule une société de domiciliation agréée par la préfecture peut délivrer
          l&rsquo;attestation exigée par le greffe et le RCS.
        </p>

        <h3>Combien coûte une domiciliation d&rsquo;entreprise à Antibes ?</h3>
        <p>
          Chez Alatere doMo : offre Dropbox (boîte aux lettres) à 25 € HT/mois, offre Headquarters
          (adresse de siège social) à 30 € HT/mois, offre Forward (numérisation et réexpédition
          incluses) à 50 € HT/mois, plus 50 € HT de frais de dossier réglés une seule fois à
          l&rsquo;ouverture.
        </p>

        <h3>Quels documents faut-il pour domicilier son entreprise ?</h3>
        <p>
          Une pièce d&rsquo;identité du dirigeant, un justificatif de domicile personnel récent, les
          statuts ou le Kbis pour une société déjà immatriculée, et un RIB pour le mandat de
          prélèvement. La liste exacte varie selon la forme juridique et la situation.
        </p>

        <h3>Combien de temps faut-il pour domicilier son entreprise ?</h3>
        <p>
          Chez Alatere doMo, l&rsquo;attestation de domiciliation est émise sous 24 à 48 heures une
          fois le dossier complet. L&rsquo;adresse est utilisable dès l&rsquo;attestation émise.
        </p>

        <h3>Peut-on transférer le siège d&rsquo;une entreprise existante ?</h3>
        <p>
          Oui. La domiciliation s&rsquo;accompagne d&rsquo;un transfert de siège : nous vous aidons
          pour les formalités auprès du greffe et la mise à jour de vos statuts.
        </p>
      </section>
    </>
  );
}

function En() {
  return (
    <>
      <p>
        <strong>Company address registration (domiciliation)</strong> means giving your company a{' '}
        <strong>registered office</strong> address, separate from your personal home. In Antibes, it
        lets you obtain a prestigious business address while delegating the handling of your mail.
        Here, step by step, is how to register your company&rsquo;s address.
      </p>

      <section>
        <h2>What is company address registration (domiciliation)?</h2>
        <p>
          Registering a company&rsquo;s address means giving it an official administrative and tax
          address. This address appears on the Kbis, invoices and legal documents. The service is
          regulated: only a <strong>business-address company approved by the préfecture</strong> can
          issue a <strong>business-address certificate</strong>, required by the commercial court
          registry and the RCS.
        </p>
      </section>

      <section>
        <h2>Why register your company&rsquo;s address in Antibes?</h2>
        <ul>
          <li>
            <strong>A prestigious address</strong> in the heart of Antibes, a stone&rsquo;s throw
            from the Port Vauban.
          </li>
          <li>
            <strong>Separate your private and professional life</strong>: your home address stays
            confidential.
          </li>
          <li>
            <strong>A credible image</strong> in the eyes of your clients, partners and banks.
          </li>
          <li>
            <strong>Associated services</strong>: mail reception, scanning and forwarding.
          </li>
          <li>
            <strong>A complete ecosystem</strong> on site: coworking, meeting rooms and outsourced
            secretarial support.
          </li>
        </ul>
      </section>

      <section>
        <h2>The steps to register your company&rsquo;s address</h2>
        <ol>
          <li>Choose a <strong>préfecture-approved</strong> business-address company.</li>
          <li>
            Sign the <strong>business-address agreement</strong> (3 months minimum, renewable).
          </li>
          <li>Submit the <strong>supporting documents</strong> requested.</li>
          <li>Receive your <strong>business-address certificate</strong>.</li>
          <li>
            Declare the address to the <strong>commercial court registry</strong> (when setting up or
            transferring the head office).
          </li>
        </ol>
        <p>
          At Alatere doMo, the certificate is issued{' '}
          <strong>within 24 to 48 hours</strong> once the file is complete.
        </p>
      </section>

      <section>
        <h2>What documents do you need to provide?</h2>
        <ul>
          <li>Proof of ID for the director;</li>
          <li>A recent proof of personal address;</li>
          <li>The articles of association or the Kbis (for an already-registered company);</li>
          <li>Bank details (RIB) for the direct-debit mandate.</li>
        </ul>
        <p>The exact list may vary with the legal form and your situation.</p>
      </section>

      <section>
        <h2>How much does company address registration in Antibes cost?</h2>
        <p>At Alatere doMo, pricing is clear, with no long-term commitment:</p>
        <ul>
          <li>
            <strong>Dropbox plan - €25 excl. VAT / month</strong>: letterbox (mail reception and
            storage), without use as a head office;
          </li>
          <li>
            <strong>Headquarters plan - €30 excl. VAT / month</strong>: head-office address + mail
            reception;
          </li>
          <li>
            <strong>Forward plan - €50 excl. VAT / month</strong>: scanning and forwarding included;
          </li>
          <li>
            <strong>Set-up fee - €50 excl. VAT</strong>, one-off, when opening the file.
          </li>
        </ul>
        <p>
          Find out more on the{' '}
          <Link className="g-inline" href="/alatere-domo">
            Alatere doMo - company address registration in Antibes
          </Link>{' '}
          page.
        </p>
      </section>

      <section>
        <h2>Address registration and head-office transfer</h2>
        <p>
          Do you already have a company? A business address comes with a{' '}
          <strong>head-office transfer</strong>: we help you with the formalities at the commercial
          court registry and with updating your articles of association. The address can be used as
          soon as the certificate is issued.
        </p>
      </section>

      <section>
        <h2>Going further: delegate the admin too</h2>
        <p>
          A business address naturally generates tasks (mail, follow-ups, formalities). With{' '}
          <a className="g-inline" href="/alatere-todo.html">
            Alatere toDo
          </a>
          , a dedicated assistant takes care of your secretarial work - with favourable terms for
          companies with a registered business address.
        </p>
        <p>
          A question about your company address registration project?{' '}
          <Link className="g-inline" href="/contact?pole=domo">
            Contact us
          </Link>{' '}
          : we reply within 48 hours.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>

        <h3>What is company address registration (domiciliation)?</h3>
        <p>
          Registering a company&rsquo;s address means giving it an official head-office address,
          separate from your personal home. This address appears on the Kbis, invoices and legal
          documents. Only a business-address company approved by the préfecture can issue the
          certificate required by the commercial court registry and the RCS.
        </p>

        <h3>How much does a business address in Antibes cost?</h3>
        <p>
          At Alatere doMo: the Dropbox plan (letterbox) at €25 excl. VAT/month, the Headquarters plan
          (head-office address) at €30 excl. VAT/month, the Forward plan (scanning and forwarding
          included) at €50 excl. VAT/month, plus a one-off €50 excl. VAT set-up fee at opening.
        </p>

        <h3>What documents do you need to register a company&rsquo;s address?</h3>
        <p>
          Proof of ID for the director, a recent proof of personal address, the articles of
          association or the Kbis for an already-registered company, and bank details (RIB) for the
          direct-debit mandate. The exact list varies with the legal form and the situation.
        </p>

        <h3>How long does it take to register a company&rsquo;s address?</h3>
        <p>
          At Alatere doMo, the business-address certificate is issued within 24 to 48 hours once the
          file is complete. The address can be used as soon as the certificate is issued.
        </p>

        <h3>Can you transfer the head office of an existing company?</h3>
        <p>
          Yes. A business address comes with a head-office transfer: we help you with the formalities
          at the court registry and with updating your articles of association.
        </p>
      </section>
    </>
  );
}
