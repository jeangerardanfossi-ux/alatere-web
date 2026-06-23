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
          Chez Alatere coWo, les cinq salles sont climatisées et la fibre est à disposition. Les
          tarifs sont communiqués selon votre besoin.
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
    </>
  );
}
