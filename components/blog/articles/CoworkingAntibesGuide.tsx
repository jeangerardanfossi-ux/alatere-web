import Link from 'next/link';

/** Corps de l'article « Coworking à Antibes : guide ». */
export default function CoworkingAntibesGuide() {
  return (
    <>
      <p>
        Le <strong>coworking</strong> séduit indépendants, télétravailleurs et petites équipes à la
        recherche d&rsquo;un cadre professionnel sans les contraintes d&rsquo;un bail. À Antibes, près
        du port Vauban, voici pour qui c&rsquo;est fait, ce que ça apporte et comment choisir son
        espace.
      </p>

      <section>
        <h2>Qu&rsquo;est-ce que le coworking ?</h2>
        <p>
          Le coworking est un <strong>espace de travail partagé</strong> : vous louez un poste, un
          bureau ou une salle, à la journée ou au mois, avec les services inclus (wifi fibre, café,
          impression, salles de réunion). C&rsquo;est une alternative souple au bureau classique et au
          travail à domicile.
        </p>
      </section>

      <section>
        <h2>À qui s&rsquo;adresse le coworking ?</h2>
        <ul>
          <li><strong>Indépendants et freelances</strong> qui veulent sortir de chez eux ;</li>
          <li><strong>Télétravailleurs</strong> en quête d&rsquo;un cadre calme et professionnel ;</li>
          <li><strong>Petites équipes</strong> et entreprises en création ;</li>
          <li><strong>Professionnels de passage</strong> sur la Côte d&rsquo;Azur, le temps d&rsquo;un rendez-vous.</li>
        </ul>
      </section>

      <section>
        <h2>Les avantages du coworking</h2>
        <ul>
          <li><strong>Flexibilité</strong> : pas de bail long, on adapte selon l&rsquo;activité ;</li>
          <li><strong>Coûts maîtrisés</strong> : charges, internet et café inclus ;</li>
          <li><strong>Productivité</strong> : un cadre dédié, loin des distractions du domicile ;</li>
          <li><strong>Réseau</strong> : une communauté d&rsquo;entrepreneurs et des événements ;</li>
          <li><strong>Image</strong> : des salles de réunion pour recevoir vos clients.</li>
        </ul>
      </section>

      <section>
        <h2>Quelles formules choisir ?</h2>
        <ul>
          <li><strong>Pass à la journée</strong> : pour un besoin ponctuel ;</li>
          <li><strong>Abonnement mensuel en open-space</strong> : pour un usage régulier ;</li>
          <li><strong>Bureau privatif à l&rsquo;année</strong> : pour une équipe ou plus d&rsquo;intimité ;</li>
          <li><strong>Location de salle de réunion</strong> à la journée (selon disponibilité), membre ou non.</li>
        </ul>
        <p>
          Chez Alatere coWo, les cinq salles sont climatisées et la fibre est à disposition.
        </p>
      </section>

      <section>
        <h2>Combien coûte un coworking à Antibes ?</h2>
        <p>
          À titre de repère, voici les tarifs pratiqués chez Alatere coWo, près du port Vauban :
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
              <td>Besoin ponctuel, de passage</td>
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
          au-delà de 12 journées par mois, l&rsquo;abonnement mensuel (360 €) revient moins cher que le
          pass à la journée (360 ÷ 30 = 12). En dessous, le pass reste le plus économique.
        </p>
        <p>
          Vous venez juste pour une journée ? Tous les détails (ce qui est inclus, comment passer un
          appel, comment réserver) sont dans notre{' '}
          <Link className="g-inline" href="/blog/coworking-antibes-journee">
            guide du coworking à la journée à Antibes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Comment choisir son espace à Antibes ?</h2>
        <ul>
          <li><strong>L&rsquo;emplacement</strong> : proximité gare, port, parking ;</li>
          <li><strong>Les services réellement inclus</strong> (salles, impression, café) ;</li>
          <li><strong>La flexibilité</strong> des formules et de l&rsquo;engagement ;</li>
          <li><strong>L&rsquo;ambiance</strong> et la taille de la communauté ;</li>
          <li><strong>Les services annexes</strong> : domiciliation, secrétariat…</li>
        </ul>
      </section>

      <section>
        <h2>Coworking + domiciliation : le bon combo</h2>
        <p>
          À Antibes, vous pouvez aussi <strong>domicilier votre entreprise</strong> sur place :
          travailler et avoir son adresse de siège au même endroit simplifie tout. Les membres du
          coworking bénéficient de conditions avantageuses sur la{' '}
          <Link className="g-inline" href="/alatere-domo">
            domiciliation
          </Link>
          .
        </p>
        <p>
          Envie de découvrir l&rsquo;espace ? Voir{' '}
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
        <h2>Questions fréquentes</h2>

        <h3>Qu&rsquo;est-ce que le coworking ?</h3>
        <p>
          Le coworking est un espace de travail partagé : on loue un poste, un bureau ou une salle, à
          la journée ou au mois, avec les services inclus (wifi fibre, café, salles de réunion).
          C&rsquo;est une alternative souple au bureau classique et au travail à domicile.
        </p>

        <h3>Pour qui le coworking est-il intéressant ?</h3>
        <p>
          Pour les indépendants et freelances, les télétravailleurs en quête d&rsquo;un cadre
          professionnel, les petites équipes et entreprises en création, ainsi que les professionnels
          de passage sur la Côte d&rsquo;Azur.
        </p>

        <h3>Quelles formules de coworking existe-t-il à Antibes ?</h3>
        <p>
          Pass à la journée pour un besoin ponctuel, abonnement mensuel en open-space pour un usage
          régulier, bureau privatif à l&rsquo;année, et location de salle de réunion à la journée. Chez
          Alatere coWo, le pass journée est à 30 € TTC et l&rsquo;abonnement mensuel à 360 € TTC.
        </p>

        <h3>Comment choisir son espace de coworking à Antibes ?</h3>
        <p>
          Regardez l&rsquo;emplacement (proximité gare, port, parking), les services réellement
          inclus, la flexibilité des formules et de l&rsquo;engagement, l&rsquo;ambiance et la taille
          de la communauté, et les services annexes comme la domiciliation.
        </p>

        <h3>Peut-on domicilier son entreprise dans un espace de coworking ?</h3>
        <p>
          Oui. Chez Alatere coWo, vous pouvez domicilier le siège social de votre entreprise sur place
          via Alatere doMo, avec des conditions avantageuses pour les membres du coworking.
        </p>
      </section>
    </>
  );
}
