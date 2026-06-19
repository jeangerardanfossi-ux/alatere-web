import Link from 'next/link';

/** Corps de l'article « Domiciliation ou location de bureau à Antibes ». */
export default function DomiciliationOuBureauAntibes() {
  return (
    <>
      <p>
        Faut-il <strong>domicilier</strong> son entreprise ou <strong>louer un bureau</strong> ? Pour
        une création, un transfert de siège ou une activité qui démarre à Antibes, le bon choix dépend
        de vos coûts, de votre besoin de présence physique et de l&rsquo;image visée. Voici un
        comparatif clair.
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
            <tr><td>Adresse de prestige</td><td>Oui</td><td>Oui</td></tr>
            <tr><td>Espace de travail</td><td>Non</td><td>Oui</td></tr>
            <tr><td>Gestion du courrier</td><td>Incluse</td><td>Selon l&rsquo;offre</td></tr>
            <tr><td>Idéal pour</td><td>Création, télétravail, siège</td><td>Présence quotidienne, équipe</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Quand choisir la domiciliation ?</h2>
        <p>
          La domiciliation est idéale si vous <strong>travaillez de chez vous ou en déplacement</strong>,
          que vous démarrez votre activité, ou que vous voulez une <strong>adresse professionnelle</strong>{' '}
          séparée de votre domicile à moindre coût. C&rsquo;est aussi la solution pour un{' '}
          <strong>transfert de siège</strong> vers Antibes.
        </p>
      </section>

      <section>
        <h2>Quand préférer un bureau (ou le coworking) ?</h2>
        <p>
          Si vous avez besoin d&rsquo;une <strong>présence physique quotidienne</strong>, de recevoir
          du public ou d&rsquo;installer une équipe, un espace dédié s&rsquo;impose. Le{' '}
          <Link className="g-inline" href="/alatere-cowo">
            coworking
          </Link>{' '}
          offre alors le meilleur compromis : un vrai lieu de travail, mais flexible et sans bail
          long.
        </p>
      </section>

      <section>
        <h2>La solution la plus souple à Antibes</h2>
        <p>
          Le plus simple est de <strong>combiner les deux</strong> au même endroit : domicilier son
          siège <em>et</em> disposer d&rsquo;un poste de coworking quand c&rsquo;est utile. À Antibes,
          Alatere réunit{' '}
          <Link className="g-inline" href="/alatere-domo">
            domiciliation
          </Link>
          , coworking et secrétariat externalisé sous un seul interlocuteur.
        </p>
        <p>
          Une question sur votre cas ?{' '}
          <Link className="g-inline" href="/contact?pole=domo">
            Contactez-nous
          </Link>{' '}
          — réponse sous 48 heures.
        </p>
      </section>
    </>
  );
}
