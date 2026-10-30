'use client';

import Link from '@/components/grommet/LocalizedLink';
import { useLang } from '@/components/grommet/lang';

/** Corps de l'article « Coworking à Antibes : guide » - bilingue FR/EN. */
export default function CoworkingAntibesGuide() {
  const { lang } = useLang();
  return lang === 'en' ? <En /> : <Fr />;
}

function Fr() {
  return (
    <>
      <p>
        Le <strong>coworking</strong> permet de travailler dans un vrai bureau sans signer de bail.
        Voici pour qui c&rsquo;est fait, ce que ça coûte à Antibes, près du port Vauban, et comment
        choisir son espace.
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
          <li>Pas de bail long : vous ajustez la formule à votre activité ;</li>
          <li>Charges, internet et café sont compris dans le prix ;</li>
          <li>Vous travaillez hors de chez vous, sans les distractions de la maison ;</li>
          <li>Vous croisez d&rsquo;autres entrepreneurs ;</li>
          <li>Vous recevez vos clients dans une salle de réunion.</li>
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
              <th>Pour qui</th>
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
              <td>180 € TTC / jour ; 80 € TTC après 16 h</td>
              <td>Réunion, atelier, entretien (sur réservation)</td>
            </tr>
          </tbody>
        </table>
        <p className="g-callout">
          <strong>Repère utile :</strong>{' '}
          au-delà de 12 journées par mois, l&rsquo;abonnement mensuel (360 €) revient moins cher que le
          pass à la journée (360 ÷ 30 = 12). En dessous, le pass reste le plus économique.
        </p>
        <p>
          Les deux se réservent et se paient en ligne sur{' '}
          <a className="g-inline" href="https://reservations.alatere-web.com/reserver" target="_blank" rel="noopener noreferrer">
            reservations.alatere-web.com
          </a>
          , en choisissant la date et le poste.
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
          <li>L&rsquo;emplacement : distance de la gare et du port, parking ;</li>
          <li>Les services réellement inclus (salles, impression, café) ;</li>
          <li>La durée d&rsquo;engagement de chaque formule ;</li>
          <li>L&rsquo;ambiance et le nombre de membres ;</li>
          <li>Les services proposés à côté : domiciliation, secrétariat.</li>
        </ul>
      </section>

      <section>
        <h2>Coworking et domiciliation au même endroit</h2>
        <p>
          Vous pouvez aussi <strong>domicilier votre entreprise</strong> à l&rsquo;adresse où vous
          travaillez. Les membres du
          coworking bénéficient de conditions avantageuses sur la{' '}
          <Link className="g-inline" href="/alatere-domo">
            domiciliation
          </Link>
          .
        </p>
        <p>
          Pour voir l&rsquo;espace : la page{' '}
          <Link className="g-inline" href="/alatere-cowo">
            Alatere coWo
          </Link>
          , ou{' '}
          <Link className="g-inline" href="/contact?pole=cowo">
            réservez une visite
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

function En() {
  return (
    <>
      <p>
        <strong>Coworking</strong> lets you work in a proper office without signing a lease. Here is
        who it suits, what it costs in Antibes, near Port Vauban, and how to choose a space.
      </p>

      <section>
        <h2>What is coworking?</h2>
        <p>
          Coworking is a <strong>shared workspace</strong>: you rent a desk, an office or a room, by
          the day or by the month, with services included (fibre wifi, coffee, printing, meeting
          rooms). It is a flexible alternative to a conventional office and to working from home.
        </p>
      </section>

      <section>
        <h2>Who is coworking for?</h2>
        <ul>
          <li><strong>Independent workers and freelancers</strong> who want to get out of the house;</li>
          <li><strong>Remote workers</strong> looking for a quiet, professional setting;</li>
          <li><strong>Small teams</strong> and start-ups;</li>
          <li><strong>Professionals passing through</strong> the Côte d&rsquo;Azur, just for a meeting.</li>
        </ul>
      </section>

      <section>
        <h2>The benefits of coworking</h2>
        <ul>
          <li>No long lease: you change plans as your activity changes;</li>
          <li>Utilities, internet and coffee are included in the price;</li>
          <li>You work away from home and its distractions;</li>
          <li>You meet other entrepreneurs;</li>
          <li>You see clients in a meeting room.</li>
        </ul>
      </section>

      <section>
        <h2>Which plan should you choose?</h2>
        <ul>
          <li><strong>Day pass</strong>: for an occasional need;</li>
          <li><strong>Monthly open space subscription</strong>: for regular use;</li>
          <li><strong>Private office on a yearly basis</strong>: for a team or more privacy;</li>
          <li><strong>Meeting-room rental</strong> by the day (subject to availability), member or not.</li>
        </ul>
        <p>
          At Alatere coWo, the five rooms are air-conditioned and fibre is available.
        </p>
      </section>

      <section>
        <h2>How much does coworking cost in Antibes?</h2>
        <p>
          For reference, here are the rates at Alatere coWo, near Port Vauban:
        </p>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Price</th>
              <th>Who it suits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Day pass</td>
              <td>€30 incl. VAT / day, coffee included</td>
              <td>Occasional need, passing through</td>
            </tr>
            <tr>
              <td>Monthly subscription</td>
              <td>€360 incl. VAT / month, unlimited open space</td>
              <td>Regular presence in Antibes</td>
            </tr>
            <tr>
              <td>Meeting room</td>
              <td>€180 incl. VAT / day; €80 incl. VAT after 4 pm</td>
              <td>Meeting, workshop, interview (booking required)</td>
            </tr>
          </tbody>
        </table>
        <p className="g-callout">
          <strong>Useful benchmark:</strong>{' '}
          beyond 12 days per month, the monthly subscription (€360) works out cheaper than the day
          pass (360 ÷ 30 = 12). Below that, the pass remains the most economical.
        </p>
        <p>
          Coming just for a day? All the details (what is included, how to take a call, how to book)
          are in our{' '}
          <Link className="g-inline" href="/blog/coworking-antibes-journee">
            guide to coworking by the day in Antibes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>How do you choose your space in Antibes?</h2>
        <ul>
          <li>Location: distance to the station and the port, parking;</li>
          <li>The services actually included (rooms, printing, coffee);</li>
          <li>How long each plan commits you for;</li>
          <li>The atmosphere and the number of members;</li>
          <li>Other services on offer: business address, secretarial support.</li>
        </ul>
      </section>

      <section>
        <h2>Coworking and a business address in one place</h2>
        <p>
          You can also <strong>register your company&rsquo;s address</strong> where you work.
          Coworking members enjoy favourable terms on the{' '}
          <Link className="g-inline" href="/alatere-domo">
            business address
          </Link>
          .
        </p>
        <p>
          To see the space: the{' '}
          <Link className="g-inline" href="/alatere-cowo">
            Alatere coWo
          </Link>{' '}
          page, or{' '}
          <Link className="g-inline" href="/contact?pole=cowo">
            book a visit
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>

        <h3>What is coworking?</h3>
        <p>
          Coworking is a shared workspace: you rent a desk, an office or a room, by the day or by the
          month, with services included (fibre wifi, coffee, meeting rooms). It&rsquo;s a flexible
          alternative to a conventional office and to working from home.
        </p>

        <h3>Who is coworking useful for?</h3>
        <p>
          For independent workers and freelancers, remote workers looking for a professional setting,
          small teams and start-ups, as well as professionals passing through the Côte d&rsquo;Azur.
        </p>

        <h3>What coworking plans are available in Antibes?</h3>
        <p>
          A day pass for occasional needs, a monthly open-space subscription for regular use, a
          private office on a yearly basis, and meeting-room rental by the day. At Alatere coWo, the
          day pass is €30 incl. VAT and the monthly subscription €360 incl. VAT.
        </p>

        <h3>How do you choose a coworking space in Antibes?</h3>
        <p>
          Look at the location (proximity to the station, the port, parking), the services actually
          included, the flexibility of the plans and commitment, the atmosphere and size of the
          community, and add-on services such as a business address.
        </p>

        <h3>Can you register your company&rsquo;s address at a coworking space?</h3>
        <p>
          Yes. At Alatere coWo, you can register your company&rsquo;s head office on site through
          Alatere doMo, with favourable terms for coworking members.
        </p>
      </section>
    </>
  );
}
