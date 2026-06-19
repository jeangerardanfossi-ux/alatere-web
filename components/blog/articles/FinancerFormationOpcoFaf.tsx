import Link from 'next/link';

const CATALOG = 'https://alatere-web.catalogueformpro.com';

/** Corps de l'article « Financer sa formation : OPCO et FAF ». */
export default function FinancerFormationOpcoFaf() {
  return (
    <>
      <p>
        Faire financer sa <strong>formation professionnelle</strong> est souvent plus simple
        qu&rsquo;on ne le pense. Selon votre statut — salarié ou travailleur non-salarié — deux
        dispositifs principaux existent : l&rsquo;<strong>OPCO</strong> et le <strong>FAF</strong>.
        Voici comment ils fonctionnent et comment les mobiliser, idéalement sans reste à charge.
      </p>

      <section>
        <h2>L&rsquo;OPCO, pour les salariés</h2>
        <p>
          L&rsquo;<strong>OPCO</strong> (opérateur de compétences) finance la formation des salariés.
          Chaque branche professionnelle dépend d&rsquo;un OPCO qui prend en charge tout ou partie des
          coûts pédagogiques, dans le cadre du <strong>plan de développement des compétences</strong>{' '}
          de l&rsquo;entreprise. C&rsquo;est l&rsquo;employeur qui dépose la demande, <strong>avant</strong>{' '}
          le début de la formation.
        </p>
      </section>

      <section>
        <h2>Le FAF, pour les travailleurs non-salariés</h2>
        <p>
          Le <strong>FAF</strong> (Fonds d&rsquo;Assurance Formation) concerne les{' '}
          <strong>travailleurs non-salariés</strong> : indépendants, professions libérales,
          dirigeants non-salariés (FIF PL, AGEFICE…). Il prend en charge la formation continue des
          non-salariés, selon des plafonds annuels propres à chaque fonds. La demande se dépose
          auprès du FAF dont vous relevez, en règle générale <strong>avant</strong> la formation.
        </p>
      </section>

      <section>
        <h2>Quel dispositif pour qui ?</h2>
        <table>
          <thead>
            <tr>
              <th>Votre situation</th>
              <th>Dispositif principal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Salarié</td><td>OPCO (plan de développement des compétences)</td></tr>
            <tr><td>Indépendant / profession libérale</td><td>FAF (FIF PL, AGEFICE…)</td></tr>
            <tr><td>Dirigeant assimilé salarié</td><td>OPCO</td></tr>
            <tr><td>Demandeur d&rsquo;emploi</td><td>France Travail</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Les étapes pour faire financer sa formation</h2>
        <ol>
          <li>Définir votre besoin et obtenir un <strong>devis + programme</strong> détaillé.</li>
          <li>Identifier votre financeur (OPCO de votre branche ou FAF des non-salariés).</li>
          <li>Déposer la <strong>demande de prise en charge avant le début</strong> de la formation.</li>
          <li>Obtenir l&rsquo;accord de financement.</li>
          <li>Suivre la formation (émargement), puis transmettre les justificatifs.</li>
        </ol>
      </section>

      <section>
        <h2>Pourquoi la certification Qualiopi compte</h2>
        <p>
          Seuls les organismes <strong>certifiés Qualiopi</strong> ouvrent droit aux financements
          publics et mutualisés (OPCO, FAF…). L&rsquo;organisme de formation Alatere Web SAS (marque
          Alatere forMa) est certifié Qualiopi, enregistré sous le numéro 93.06.07588.06 : vos
          formations sont donc <strong>finançables</strong>.
        </p>
      </section>

      <section>
        <h2>Anticiper les délais</h2>
        <p>
          Un dossier OPCO ou FAF demande souvent plusieurs semaines d&rsquo;instruction. Chez Alatere
          forMa, le devis personnalisé est envoyé <strong>sous 48 heures</strong> et le démarrage
          intervient en moyenne <strong>sous 14 jours</strong> une fois le financement validé.
        </p>
        <p>
          Besoin d&rsquo;aide pour monter votre dossier ? Découvrez nos{' '}
          <Link className="g-inline" href="/alatere-forma">
            formations certifiées Qualiopi
          </Link>
          , consultez le{' '}
          <a className="g-inline" href={CATALOG} target="_blank" rel="noopener noreferrer">
            catalogue
          </a>{' '}
          ou{' '}
          <Link className="g-inline" href="/contact?pole=forma">
            demandez un devis
          </Link>{' '}
          — réponse sous 48 heures.
        </p>
      </section>
    </>
  );
}
