import Link from '@/components/grommet/LocalizedLink';
import { Email } from '@/components/grommet/Email';
import { company } from '@/lib/site';

/** Corps de l'article « Coworking à la journée à Antibes ». */
export default function CoworkingAntibesJournee() {
  return (
    <>
      <p>
        À Antibes, un <strong>coworking à la journée</strong>{' '}
        coûte 30 € TTC : vous réservez un poste
        en open-space, café, fibre et Wi-Fi inclus, sans engagement. Alatere coWo se trouve au 9
        boulevard Albert 1er, à deux pas du port Vauban et à dix minutes à pied de la gare SNCF —
        l&rsquo;option simple pour travailler le temps d&rsquo;une journée, entre deux rendez-vous ou
        loin de chez soi.
      </p>

      <section>
        <h2>Combien coûte un coworking à la journée à Antibes ?</h2>
        <p>
          Le pass journée est à <strong>30 € TTC</strong>, café compris. Si vous revenez
          régulièrement, deux autres formules prennent le relais :
        </p>
        <table>
          <thead>
            <tr>
              <th>Formule</th>
              <th>Tarif</th>
              <th>Idéal pour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pass journée</td>
              <td>30 € TTC / jour, café inclus</td>
              <td>Travailler ponctuellement, de passage</td>
            </tr>
            <tr>
              <td>Abonnement mensuel</td>
              <td>360 € TTC / mois, open-space illimité</td>
              <td>Présence régulière sur Antibes</td>
            </tr>
            <tr>
              <td>Salle de réunion</td>
              <td>180 € TTC / jour — 80 € TTC après 16 h</td>
              <td>Réunion, atelier, entretien — sur réservation</td>
            </tr>
          </tbody>
        </table>
        <p className="g-callout">
          <strong>Repère utile :</strong>{' '}
          au-delà de 12 journées par mois, l&rsquo;abonnement mensuel
          (360 €) revient moins cher que le pass à la journée (360 ÷ 30 = 12). En dessous, le pass
          reste le plus économique.
        </p>
        <p className="g-callout">
          <strong>Salle de réunion : pensez à réserver.</strong>{' '}
          Nos salles sont, pour la plupart,
          louées à l&rsquo;année par des entreprises : la disponibilité à la journée est donc
          limitée. Prévenez quelques jours à l&rsquo;avance pour garantir votre créneau — ou optez
          pour le créneau de fin de journée (après 16 h) à 80 € TTC au lieu de 180 €.
        </p>
      </section>

      <section>
        <h2>Ce qui est inclus dans le pass journée</h2>
        <p>
          Un poste en open-space ne se résume pas à une chaise et une table. Le pass donne accès à :
        </p>
        <ul>
          <li>
            <strong>Fibre haut-débit et Wi-Fi sécurisé</strong>{' '}
            dans tout l&rsquo;espace — de quoi tenir une visio sans coupure.
          </li>
          <li><strong>Café à volonté</strong> et coin pause partagé.</li>
          <li>
            <strong>Un espace pour les appels</strong>{' '}
            : la grande salle à bureau partagé sert de coin appels, et le bar de la cuisine permet de
            s&rsquo;isoler (voir ci-dessous).
          </li>
          <li>
            <strong>Une communauté</strong>{' '}
            d&rsquo;entrepreneurs et de freelances locaux, avec des événements business chaque mois.
          </li>
        </ul>
      </section>

      <section>
        <h2>Passer un appel ou une visio : comment ça se passe, concrètement</h2>
        <p>
          La plupart de nos salles fermées sont louées à l&rsquo;année par des entreprises — la
          rançon du succès. Pour un appel ou une visio improvisés, nos membres ont deux solutions
          éprouvées :
        </p>
        <ul>
          <li>
            <strong>La grande salle à bureau partagé</strong> (jusqu&rsquo;à 5 places) fait office de
            coin appels : on s&rsquo;y installe pour téléphoner ou suivre une visio. Le port d&rsquo;un
            casque audio est vivement recommandé, par respect pour les voisins de table.
          </li>
          <li>
            <strong>Le bar de la cuisine</strong>, un peu à l&rsquo;écart, permet de s&rsquo;isoler le
            temps d&rsquo;un échange plus court.
          </li>
        </ul>
        <p>
          Pour une vraie réunion fermée et au calme, mieux vaut réserver une salle à l&rsquo;avance
          (180 € TTC la journée, ou 80 € après 16 h).
        </p>
      </section>

      <section>
        <h2>Coworking, café ou lobby d&rsquo;hôtel : où travailler à Antibes quand on est de passage ?</h2>
        <p>
          Pour une journée de travail loin du bureau, trois options reviennent souvent. Voici comment
          elles se comparent concrètement :
        </p>
        <table>
          <thead>
            <tr>
              <th>Critère</th>
              <th>Coworking (pass jour)</th>
              <th>Café</th>
              <th>Lobby d&rsquo;hôtel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coût d&rsquo;une journée</td>
              <td>30 €, poste dédié</td>
              <td>5–10 € de consommations</td>
              <td>Variable, réservé aux clients</td>
            </tr>
            <tr>
              <td>Wi-Fi fiable et sécurisé</td>
              <td>Oui (fibre)</td>
              <td>Aléatoire, réseau partagé</td>
              <td>Aléatoire</td>
            </tr>
            <tr>
              <td>Vraie table + prises</td>
              <td>Oui</td>
              <td>Rarement</td>
              <td>Rarement</td>
            </tr>
            <tr>
              <td>Appels / visios</td>
              <td>Oui — coin appels dédié, casque conseillé</td>
              <td>Non</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>Salle de réunion possible</td>
              <td>Oui, sur réservation</td>
              <td>Non</td>
              <td>Parfois, coûteux</td>
            </tr>
            <tr>
              <td>Rencontrer d&rsquo;autres pros</td>
              <td>Oui (communauté)</td>
              <td>Non</td>
              <td>Non</td>
            </tr>
          </tbody>
        </table>
        <p>
          Le café dépanne une heure ; au-delà, le coworking offre le confort, un endroit prévu pour
          téléphoner et une connexion sur laquelle on peut compter.
        </p>
      </section>

      <section>
        <h2>Pour qui ? Freelances de passage, nomades, salariés en déplacement</h2>
        <p>
          Le pass à la journée s&rsquo;adresse aux <strong>freelances de passage</strong> sur la Côte
          d&rsquo;Azur, aux <strong>télétravailleurs</strong> qui veulent sortir de chez eux, aux{' '}
          <strong>salariés en déplacement</strong> à Antibes ou à Sophia Antipolis, et à tous ceux qui
          ont un rendez-vous dans le coin et quelques heures à occuper utilement entre deux.
        </p>
      </section>

      <section>
        <h2>Venir travailler chez Alatere coWo</h2>
        <p>
          L&rsquo;espace est au <strong>9 boulevard Albert 1er</strong> (immeuble La Caravelle), 06600
          Antibes — port Vauban à deux pas, gare SNCF à dix minutes à pied (700 m). Le pass est sans
          engagement : un appel au <strong>{company.phoneDisplay}</strong> ou un message à{' '}
          <Email className="g-inline" user="coworking" /> suffit à s&rsquo;assurer un poste pour le
          jour voulu. Café offert si vous venez d&rsquo;abord visiter.
        </p>
        <p>
          Découvrir l&rsquo;espace :{' '}
          <Link className="g-inline" href="/alatere-cowo">
            Alatere coWo
          </Link>{' '}
          ou{' '}
          <Link className="g-inline" href="/contact?pole=cowo">
            réserver une visite
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Besoin d&rsquo;une adresse à Antibes, pas seulement d&rsquo;un bureau ?</h2>
        <p>
          Si votre passage révèle un besoin plus durable — installer le siège social de votre
          entreprise à Antibes —, la{' '}
          <Link className="g-inline" href="/alatere-domo">
            domiciliation Alatere doMo
          </Link>{' '}
          prend le relais à la même adresse, et les membres du coworking bénéficient de conditions
          avantageuses. Un seul lieu pour travailler aujourd&rsquo;hui et domicilier demain.
        </p>
        <p>
          Pour aller plus loin : si vous hésitez encore entre les formules et cherchez à comparer les
          espaces, lisez notre{' '}
          <Link className="g-inline" href="/blog/coworking-antibes-guide">
            guide pour choisir un coworking à Antibes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Questions fréquentes</h2>

        <h3>Combien coûte une journée de coworking à Antibes ?</h3>
        <p>
          Le pass à la journée est à 30 € TTC chez Alatere coWo : un poste en open-space, café, fibre
          et Wi-Fi inclus, sans engagement.
        </p>

        <h3>Peut-on venir sans abonnement ?</h3>
        <p>
          Oui. Le pass journée est sans engagement. Un appel ou un e-mail la veille permet de
          s&rsquo;assurer qu&rsquo;un poste est disponible le jour souhaité.
        </p>

        <h3>Y a-t-il le Wi-Fi et de quoi passer des appels ?</h3>
        <p>
          Oui : fibre haut-débit et Wi-Fi sécurisé partout. Pour les appels et visios, la grande salle
          à bureau partagé sert de coin appels (casque recommandé) et le bar de la cuisine permet de
          s&rsquo;isoler ; les salles fermées, en majorité louées à l&rsquo;année, se réservent à
          l&rsquo;avance.
        </p>

        <h3>Peut-on louer une salle de réunion juste pour la journée ?</h3>
        <p>
          Oui, mais la disponibilité est limitée : la plupart de nos salles sont louées à l&rsquo;année
          par des entreprises. Mieux vaut réserver quelques jours à l&rsquo;avance. Tarif : 180 € TTC
          la journée, ou 80 € TTC en fin de journée (après 16 h).
        </p>

        <h3>Où se situe l&rsquo;espace et comment y accéder ?</h3>
        <p>
          Au 9 boulevard Albert 1er (immeuble La Caravelle), 06600 Antibes, à deux pas du port Vauban
          et à dix minutes à pied (700 m) de la gare SNCF.
        </p>

        <h3>Peut-on aussi y domicilier son entreprise ?</h3>
        <p>
          Oui, via Alatere doMo. Les membres du coworking profitent de conditions avantageuses sur la
          domiciliation.
        </p>
      </section>
    </>
  );
}
