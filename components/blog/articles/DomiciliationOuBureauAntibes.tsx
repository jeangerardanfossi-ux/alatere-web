'use client';

import Link from '@/components/grommet/LocalizedLink';
import { useLang } from '@/components/grommet/lang';

/** Corps de l'article « Domiciliation ou location de bureau à Antibes » - bilingue FR/EN. */
export default function DomiciliationOuBureauAntibes() {
  const { lang } = useLang();
  return lang === 'en' ? <En /> : <Fr />;
}

function Fr() {
  return (
    <>
      <p>
        Faut-il <strong>domicilier</strong> son entreprise ou <strong>louer un bureau</strong> ? Pour
        une création, un transfert de siège ou une activité qui démarre à Antibes, le bon choix dépend
        surtout de votre budget et du nombre de jours où vous avez besoin d&rsquo;un lieu de
        travail.
      </p>

      <section>
        <h2>Domiciliation et bureau : quelle différence ?</h2>
        <p>
          La <strong>domiciliation</strong> fournit une <strong>adresse de siège social</strong> (et
          la gestion du courrier) sans espace de travail dédié. La <strong>location de bureau</strong>{' '}
          fournit un espace physique, mais avec un bail, des charges et un engagement. Le{' '}
          <strong>coworking</strong> se situe entre les deux : un poste flexible, sans bail long.
        </p>
      </section>

      <section>
        <h2>Le comparatif</h2>
        <table>
          <thead>
            <tr>
              <th>Critère</th>
              <th>Domiciliation</th>
              <th>Bureau / coworking</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Coût mensuel</td><td>À partir de 30 €</td><td>Plus élevé (loyer + charges)</td></tr>
            <tr><td>Engagement</td><td>Souple, renouvelable</td><td>Bail (ou abonnement coworking)</td></tr>
            <tr><td>Adresse professionnelle</td><td>Oui</td><td>Oui</td></tr>
            <tr><td>Espace de travail</td><td>Non</td><td>Oui</td></tr>
            <tr><td>Gestion du courrier</td><td>Incluse</td><td>Selon l&rsquo;offre</td></tr>
            <tr><td>Pour qui</td><td>Création, télétravail, siège</td><td>Présence quotidienne, équipe</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Le vrai coût : domiciliation, bureau ou coworking ?</h2>
        <p>Les prix à Antibes :</p>
        <ul>
          <li>
            <strong>Domiciliation</strong> : à partir de <strong>25 € HT/mois</strong> (boîte aux
            lettres) ou <strong>30 € HT/mois</strong> pour une adresse de siège social, plus 50 € HT de
            frais de dossier une seule fois. Aucune charge, aucun bail.
          </li>
          <li>
            <strong>Coworking</strong> : <strong>30 € TTC la journée</strong> ou{' '}
            <strong>360 € TTC/mois</strong> en open-space illimité, sans engagement long.
          </li>
          <li>
            <strong>Location de bureau</strong> : un loyer mensuel (souvent plusieurs centaines
            d&rsquo;euros), auquel s&rsquo;ajoutent les charges, l&rsquo;assurance, l&rsquo;internet et
            un bail (généralement 3-6-9).
          </li>
        </ul>
        <p>
          Si vous n&rsquo;avez pas besoin d&rsquo;un espace physique tous les jours, la
          domiciliation (pour l&rsquo;adresse) éventuellement complétée par le coworking (pour les jours
          de présence) coûte une fraction d&rsquo;un bureau loué à l&rsquo;année.
        </p>
      </section>

      <section>
        <h2>Quand choisir la domiciliation ?</h2>
        <p>
          Choisissez la domiciliation si vous <strong>travaillez de chez vous ou en déplacement</strong>,
          que vous démarrez votre activité, ou que vous voulez une <strong>adresse professionnelle</strong>{' '}
          séparée de votre domicile à moindre coût. Elle convient aussi à un{' '}
          <strong>transfert de siège</strong> vers Antibes.
        </p>
      </section>

      <section>
        <h2>Quand préférer un bureau (ou le coworking) ?</h2>
        <p>
          Si vous avez besoin d&rsquo;une <strong>présence physique quotidienne</strong>, de recevoir
          du public ou d&rsquo;installer une équipe, il vous faut un espace dédié. Le{' '}
          <Link className="g-inline" href="/alatere-cowo">
            coworking
          </Link>{' '}
          vous donne un poste de travail sans bail long.
        </p>
      </section>

      <section>
        <h2>Combiner domiciliation et coworking</h2>
        <p>
          Vous pouvez <strong>combiner les deux</strong> au même endroit : domicilier votre siège{' '}
          <em>et</em> prendre un poste de coworking les jours où vous en avez besoin. À Antibes,
          Alatere propose{' '}
          <Link className="g-inline" href="/alatere-domo">
            domiciliation
          </Link>
          , coworking et secrétariat externalisé avec un seul interlocuteur.
        </p>
        <p>
          Si vous penchez pour la domiciliation, notre{' '}
          <Link className="g-inline" href="/blog/comparatif-domiciliation-antibes">comparatif des prestataires de domiciliation à Antibes</Link> passe en revue quinze prestataires du secteur, adresses et tarifs
          affichés à l&rsquo;appui.
        </p>
        <p>
          Une question sur votre cas ?{' '}
          <Link className="g-inline" href="/contact?pole=domo">
            Contactez-nous
          </Link>{' '}
          : réponse sous 48 heures.
        </p>
      </section>

      <section>
        <h2>Questions fréquentes</h2>

        <h3>Quelle est la différence entre domiciliation et location de bureau ?</h3>
        <p>
          La domiciliation fournit une adresse de siège social et la gestion du courrier, sans espace
          de travail dédié. La location de bureau fournit un espace physique, mais avec un bail, des
          charges et un engagement. Le coworking est intermédiaire : un poste flexible, sans bail long.
        </p>

        <h3>Qu&rsquo;est-ce qui coûte le moins cher, domiciliation ou bureau ?</h3>
        <p>
          La domiciliation, nettement : à partir de 30 € HT par mois chez Alatere doMo, contre un loyer
          plus charges pour un bureau. Le coworking se situe entre les deux.
        </p>

        <h3>Quand choisir la domiciliation plutôt qu&rsquo;un bureau ?</h3>
        <p>
          Si vous travaillez de chez vous ou en déplacement, que vous démarrez votre activité, ou que
          vous voulez une adresse professionnelle séparée de votre domicile à moindre coût.
          Elle convient aussi à un transfert de siège vers Antibes.
        </p>

        <h3>Peut-on combiner domiciliation et coworking ?</h3>
        <p>
          Oui, et c&rsquo;est souvent le plus pratique : domicilier son siège et disposer d&rsquo;un
          poste de coworking au même endroit, à Antibes. Alatere réunit domiciliation, coworking et
          secrétariat externalisé sous un seul interlocuteur.
        </p>
      </section>
    </>
  );
}

function En() {
  return (
    <>
      <p>
        Should you set up a <strong>business address</strong> for your company or{' '}
        <strong>rent an office</strong>? When forming a company, transferring a head office or
        starting up an activity in Antibes, the right choice depends mostly on your budget and on how
        many days you need a place to work.
      </p>

      <section>
        <h2>Business address and office: what&rsquo;s the difference?</h2>
        <p>
          A <strong>business address</strong> provides a <strong>registered head-office address</strong>{' '}
          (and mail handling) with no dedicated workspace. <strong>Renting an office</strong> provides
          a physical space, but with a lease, charges and a commitment. <strong>Coworking</strong>{' '}
          sits in between: a flexible desk, without a long lease.
        </p>
      </section>

      <section>
        <h2>The comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Criterion</th>
              <th>Business address</th>
              <th>Office / coworking</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Monthly cost</td><td>From €30</td><td>Higher (rent + charges)</td></tr>
            <tr><td>Commitment</td><td>Flexible, renewable</td><td>Lease (or coworking subscription)</td></tr>
            <tr><td>Business address</td><td>Yes</td><td>Yes</td></tr>
            <tr><td>Workspace</td><td>No</td><td>Yes</td></tr>
            <tr><td>Mail handling</td><td>Included</td><td>Depending on the offer</td></tr>
            <tr><td>Who it suits</td><td>Company formation, remote working, head office</td><td>Daily presence, a team</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>The real cost: business address, office or coworking?</h2>
        <p>Prices in Antibes:</p>
        <ul>
          <li>
            <strong>Business address</strong>: from <strong>€25 excl. VAT/month</strong> (mailbox) or{' '}
            <strong>€30 excl. VAT/month</strong> for a registered head-office address, plus a one-off
            €50 excl. VAT set-up fee. No charges, no lease.
          </li>
          <li>
            <strong>Coworking</strong>: <strong>€30 incl. VAT per day</strong> or{' '}
            <strong>€360 incl. VAT/month</strong> for unlimited open-space access, with no long-term
            commitment.
          </li>
          <li>
            <strong>Office rental</strong>: a monthly rent (often several hundred euros), on top of
            which come the charges, insurance, internet and a lease (typically the French 3-6-9).
          </li>
        </ul>
        <p>
          If you don&rsquo;t need a physical space every day, a business address (for
          the address) possibly supplemented by coworking (for the days you&rsquo;re on site) costs a
          fraction of an office rented by the year.
        </p>
      </section>

      <section>
        <h2>When should you choose a business address?</h2>
        <p>
          Choose a business address if you <strong>work from home or on the move</strong>, are just
          starting out, or want a <strong>professional address</strong> separate from your home at low
          cost. It also suits a <strong>head-office transfer</strong> to Antibes.
        </p>
      </section>

      <section>
        <h2>When is an office (or coworking) the better option?</h2>
        <p>
          If you need a <strong>daily physical presence</strong>, to receive the public or to set up a
          team, you need a dedicated space.{' '}
          <Link className="g-inline" href="/alatere-cowo">
            Coworking
          </Link>{' '}
          gives you a desk without a long lease.
        </p>
      </section>

      <section>
        <h2>Combining a business address and coworking</h2>
        <p>
          You can <strong>combine the two</strong> in the same place: register your head office{' '}
          <em>and</em> take a coworking desk on the days you need one. In Antibes, Alatere offers{' '}
          <Link className="g-inline" href="/alatere-domo">
            business address
          </Link>
          , coworking and outsourced secretarial services with a single point of contact.
        </p>
        <p>
          If you are leaning towards a business address, our{' '}
          <Link className="g-inline" href="/blog/comparatif-domiciliation-antibes">comparison of business-address providers in Antibes</Link> reviews fifteen providers in the area,
          with their addresses and published prices.
        </p>
        <p>
          Have a question about your situation?{' '}
          <Link className="g-inline" href="/contact?pole=domo">
            Contact us
          </Link>
          : we reply within 48 hours.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>

        <h3>What&rsquo;s the difference between a business address and renting an office?</h3>
        <p>
          A business address provides a registered head-office address and mail handling, with no
          dedicated workspace. Renting an office provides a physical space, but with a lease, charges
          and a commitment. Coworking sits in between: a flexible desk, without a long lease.
        </p>

        <h3>Which is cheaper, a business address or an office?</h3>
        <p>
          A business address, by far: from €30 excl. VAT per month at Alatere doMo, versus rent plus
          charges for an office. Coworking sits between the two.
        </p>

        <h3>When should you choose a business address rather than an office?</h3>
        <p>
          If you work from home or on the move, are just starting out, or want a professional address
          separate from your home at low cost. It also suits a head-office transfer to Antibes.
        </p>

        <h3>Can you combine a business address and coworking?</h3>
        <p>
          Yes, and it&rsquo;s often the most practical option: register your head office and have a
          coworking desk in the same place, in Antibes. Alatere brings together business address,
          coworking and outsourced secretarial services under a single point of contact.
        </p>
      </section>
    </>
  );
}
