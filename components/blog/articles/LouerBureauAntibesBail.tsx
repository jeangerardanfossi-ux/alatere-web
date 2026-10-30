'use client';

import Link from '@/components/grommet/LocalizedLink';
import { BAIL_FAQ, MARKET } from '@/lib/bureaux-content';

/**
 * Corps de l'article « Louer un bureau à Antibes : bail commercial, professionnel ou bureau
 * flexible ? » - FR uniquement.
 *
 * Sources vérifiées le 30/10/2026 : service-public.gouv.fr (bail professionnel, F39641),
 * Code de commerce L145-5 (bail dérogatoire), Cass. 3e civ. 27 juin 2024 n° 22-22.823
 * (prestation de services ≠ bail), BureauxLocaux (loyers affichés à Antibes, juin 2026).
 * Mettre à jour les loyers de marché (lib/bureaux-content.ts → MARKET) une fois par an.
 */
export default function LouerBureauAntibesBail() {
  return (
    <>
      <p>
        Vous cherchez un bureau à louer à Antibes ? Avant de comparer les surfaces et les
        emplacements, regardez le <strong>contrat</strong>. Selon votre activité et la durée dont
        vous avez besoin, vous signerez un bail commercial, un bail professionnel, un bail
        dérogatoire ou un simple contrat de prestation de services. Ces contrats ne vous engagent
        pas sur la même durée et ne coûtent pas la même chose à l&rsquo;entrée. Voici comment
        choisir.
      </p>

      <section>
        <h2>Le marché des bureaux à Antibes en 2026</h2>
        <p>
          Selon les annonces publiées sur BureauxLocaux, les bureaux d&rsquo;Antibes se louent en
          moyenne <strong>{MARKET.avg} € HT par m² et par an</strong>, hors charges. Les prix vont
          de {MARKET.low} € pour les locaux les moins bien placés à {MARKET.high} € pour les
          meilleurs emplacements ({MARKET.source}). Les loyers affichés ont progressé
          d&rsquo;environ 10 % en un an.
        </p>
        <p>
          Le loyer n&rsquo;est qu&rsquo;une partie de la dépense. Dans les annonces antiboises, on
          trouve en plus :
        </p>
        <ul>
          <li>
            un <strong>dépôt de garantie</strong>, d&rsquo;un à trois mois de loyer ;
          </li>
          <li>
            des <strong>honoraires d&rsquo;agence</strong> à la charge du locataire ;
          </li>
          <li>
            des <strong>charges locatives</strong> et, très souvent, la{' '}
            <strong>taxe foncière</strong> refacturée au locataire ;
          </li>
          <li>
            l&rsquo;électricité, internet, l&rsquo;assurance, le ménage et le mobilier, que vous
            payez vous-même.
          </li>
        </ul>
      </section>

      <section>
        <h2>Le bail commercial 3-6-9</h2>
        <p>
          C&rsquo;est le contrat par défaut pour louer un bureau. Il ne concerne pas seulement les
          boutiques : la plupart des activités de bureau (conseil, agence, prestations de services)
          en relèvent.
        </p>
        <ul>
          <li>
            <strong>Durée</strong>&nbsp;: 9 ans minimum. Vous pouvez partir à la fin de chaque période de
            trois ans, en donnant congé six mois à l&rsquo;avance.
          </li>
          <li>
            <strong>Avantage</strong>&nbsp;: vous avez droit au renouvellement du bail, et le
            propriétaire qui refuse de le renouveler vous doit en principe une indemnité
            d&rsquo;éviction.
          </li>
          <li>
            <strong>Inconvénient</strong>&nbsp;: vous êtes engagé trois ans au minimum. Partir avant
            demande l&rsquo;accord du bailleur ou une clause particulière.
          </li>
        </ul>
      </section>

      <section>
        <h2>Le bail professionnel</h2>
        <p>
          Il s&rsquo;adresse aux activités non commerciales, notamment les{' '}
          <strong>professions libérales</strong>&nbsp;: avocats, architectes, experts-comptables,
          professionnels de santé, consultants en libéral.
        </p>
        <ul>
          <li>
            <strong>Durée</strong>&nbsp;: 6 ans minimum, renouvelés tacitement pour la même durée.
          </li>
          <li>
            <strong>Avantage</strong>&nbsp;: vous pouvez résilier à tout moment, avec un préavis de six
            mois envoyé en lettre recommandée. Le bailleur, lui, reste engagé pendant toute la durée
            du bail.
          </li>
          <li>
            <strong>Inconvénient</strong>&nbsp;: à l&rsquo;échéance, vous n&rsquo;avez pas de droit au
            renouvellement ni d&rsquo;indemnité si le propriétaire reprend les locaux.
          </li>
        </ul>
      </section>

      <section>
        <h2>Le bail dérogatoire (ou bail précaire)</h2>
        <p>
          Prévu par l&rsquo;article L145-5 du Code de commerce, il permet de louer un local
          commercial <strong>pour trois ans au maximum</strong>, renouvellements compris, sans
          appliquer le statut des baux commerciaux. Il sert souvent à tester une activité.
        </p>
        <p>
          Attention : si vous restez dans les lieux au-delà de trois ans, le contrat devient
          automatiquement un bail commercial de neuf ans. Et ce dispositif n&rsquo;existe pas pour
          le bail professionnel.
        </p>
      </section>

      <section>
        <h2>Le contrat de prestation de services : bureau flexible et coworking</h2>
        <p>
          Les centres d&rsquo;affaires et les espaces de coworking ne signent pas de bail. Ils vous
          vendent un <strong>service</strong>&nbsp;: un poste ou un bureau, avec internet, le mobilier,
          le café et l&rsquo;accès aux salles de réunion. La Cour de cassation l&rsquo;a rappelé
          dans un arrêt du 27 juin 2024 (3e chambre civile, n° 22-22.823) : ce type de contrat
          n&rsquo;est pas soumis au statut des baux commerciaux.
        </p>
        <ul>
          <li>
            <strong>Avantage</strong>&nbsp;: pas d&rsquo;engagement sur plusieurs années, pas de frais
            d&rsquo;entrée, un prix qui inclut les charges. Vous pouvez commencer à la journée.
          </li>
          <li>
            <strong>Inconvénient</strong>&nbsp;: vous n&rsquo;avez aucun droit au renouvellement, et
            l&rsquo;espace est souvent partagé.
          </li>
        </ul>
      </section>

      <section>
        <h2>Les quatre contrats en un coup d&rsquo;œil</h2>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Contrat</th>
                <th>Durée</th>
                <th>Sortie pour le locataire</th>
                <th>Pour qui</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bail commercial</td>
                <td>9 ans minimum</td>
                <td>Tous les 3 ans, préavis de 6 mois</td>
                <td>Activités commerciales et la plupart des activités de bureau</td>
              </tr>
              <tr>
                <td>Bail professionnel</td>
                <td>6 ans minimum</td>
                <td>À tout moment, préavis de 6 mois</td>
                <td>Professions libérales, activités non commerciales</td>
              </tr>
              <tr>
                <td>Bail dérogatoire</td>
                <td>3 ans maximum</td>
                <td>Selon le contrat</td>
                <td>Test d&rsquo;activité, besoin temporaire</td>
              </tr>
              <tr>
                <td>Prestation de services (coworking)</td>
                <td>Journée, mois, année</td>
                <td>Selon le contrat, souvent au mois</td>
                <td>Indépendants, petites équipes, besoins variables</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Faire le calcul : un exemple à Antibes</h2>
        <p>
          Prenons un indépendant qui cherche une quinzaine de mètres carrés. Au prix moyen de{' '}
          {MARKET.avg} € HT par m² et par an, le loyer seul revient à environ{' '}
          <strong>270 € HT par mois</strong>. Il faut y ajouter les charges, la part de taxe
          foncière, l&rsquo;électricité, internet et l&rsquo;assurance. À l&rsquo;entrée, il faut
          aussi verser le dépôt de garantie et les honoraires d&rsquo;agence, et acheter le
          mobilier. Le tout pour un engagement de trois ans au minimum.
        </p>
        <p>
          Chez{' '}
          <Link className="g-inline" href="/alatere-cowo/bureaux-a-louer-antibes">
            Alatere coWo
          </Link>
          , l&rsquo;abonnement mensuel coûte <strong>360 € TTC, soit 300 € HT</strong>, sans rien à
          ajouter : charges, fibre, café et accès 24 h/24 compris, sans dépôt ni durée minimale. La
          différence : vous travaillez en open-space partagé, pas dans un bureau fermé à votre nom.
        </p>
        <p>
          Le bail classique reste le meilleur choix si vous avez besoin d&rsquo;un local fermé,
          d&rsquo;une équipe installée ou de recevoir du public tous les jours. Pour démarrer, ou
          tant que votre activité n&rsquo;est pas stabilisée, le bureau flexible vous évite
          d&rsquo;immobiliser plusieurs milliers d&rsquo;euros.
        </p>
      </section>

      <section>
        <h2>Avant de signer un bail : les points à vérifier</h2>
        <ul>
          <li>
            <strong>La destination des lieux</strong>&nbsp;: le bail doit autoriser votre activité, sans
            quoi vous ne pourrez pas l&rsquo;exercer ni, souvent, y fixer votre siège.
          </li>
          <li>
            <strong>La répartition des charges</strong>&nbsp;: demandez la liste des charges, impôts et
            taxes refacturés, et notamment si la taxe foncière est à votre charge.
          </li>
          <li>
            <strong>L&rsquo;indexation du loyer</strong>&nbsp;: l&rsquo;indice retenu et la date de
            révision.
          </li>
          <li>
            <strong>Les travaux</strong>&nbsp;: qui paie quoi, et dans quel état vous devrez rendre les
            locaux.
          </li>
          <li>
            <strong>La sortie</strong>&nbsp;: les dates auxquelles vous pouvez partir et la forme du
            congé.
          </li>
        </ul>
        <p>
          Un bail engage sur des années : faites-le relire par un avocat ou un notaire avant de
          signer.
        </p>
      </section>

      <section>
        <h2>Une adresse pour votre siège, même sans bureau</h2>
        <p>
          Vous n&rsquo;avez pas besoin d&rsquo;un bureau tous les jours, mais d&rsquo;une adresse
          professionnelle pour votre entreprise ? La{' '}
          <Link className="g-inline" href="/alatere-domo">
            domiciliation Alatere doMo
          </Link>{' '}
          vous donne un siège social au 9 boulevard Albert 1er dès 30 € HT par mois, et se combine
          avec un poste de coworking au même endroit. Notre article{' '}
          <Link className="g-inline" href="/blog/domiciliation-ou-bureau-antibes">
            domiciliation ou location de bureau
          </Link>{' '}
          vous aide à choisir.
        </p>
      </section>

      <section>
        <h2>Questions fréquentes</h2>
        {BAIL_FAQ.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>
    </>
  );
}
