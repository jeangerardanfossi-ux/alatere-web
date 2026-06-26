'use client';

import Link from '@/components/grommet/LocalizedLink';
import { Email } from '@/components/grommet/Email';
import { company } from '@/lib/site';
import { useLang } from '@/components/grommet/lang';

/** Corps de l'article « Coworking à la journée à Antibes » — bilingue FR/EN. */
export default function CoworkingAntibesJournee() {
  const { lang } = useLang();
  return lang === 'en' ? <En /> : <Fr />;
}

function Fr() {
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

function En() {
  return (
    <>
      <p>
        In Antibes, a <strong>day of coworking</strong>{' '}
        costs €30 incl. VAT: you book an open space
        desk, with coffee, fibre and Wi-Fi included, and no commitment. Alatere coWo is located at 9
        boulevard Albert 1er, a stone&rsquo;s throw from Port Vauban and a ten-minute walk from the SNCF
        train station — the simple option for working for a single day, between two meetings or
        away from home.
      </p>

      <section>
        <h2>How much does a day of coworking in Antibes cost?</h2>
        <p>
          The day pass is <strong>€30 incl. VAT</strong>, coffee included. If you come back
          regularly, two other plans take over:
        </p>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Price</th>
              <th>Ideal for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Day pass</td>
              <td>€30 incl. VAT / day, coffee included</td>
              <td>Working occasionally, passing through</td>
            </tr>
            <tr>
              <td>Monthly membership</td>
              <td>€360 incl. VAT / month, unlimited open space</td>
              <td>A regular presence in Antibes</td>
            </tr>
            <tr>
              <td>Meeting room</td>
              <td>€180 incl. VAT / day — €80 incl. VAT after 4 pm</td>
              <td>Meeting, workshop, interview — by reservation</td>
            </tr>
          </tbody>
        </table>
        <p className="g-callout">
          <strong>Handy benchmark:</strong>{' '}
          beyond 12 days a month, the monthly membership
          (€360) works out cheaper than the day pass (360 ÷ 30 = 12). Below that, the pass
          remains the most economical.
        </p>
        <p className="g-callout">
          <strong>Meeting room: remember to book.</strong>{' '}
          Most of our rooms are
          rented by the year by companies: availability on a day-by-day basis is therefore
          limited. Let us know a few days ahead to secure your slot — or opt
          for the late-day slot (after 4 pm) at €80 incl. VAT instead of €180.
        </p>
      </section>

      <section>
        <h2>What&rsquo;s included in the day pass</h2>
        <p>
          An open space desk is more than just a chair and a table. The pass gives you access to:
        </p>
        <ul>
          <li>
            <strong>High-speed fibre and secure Wi-Fi</strong>{' '}
            throughout the space — enough to hold a video call without dropouts.
          </li>
          <li><strong>Unlimited coffee</strong> and a shared break area.</li>
          <li>
            <strong>A space for calls</strong>{' '}
            : the large shared-desk room serves as a call corner, and the kitchen bar lets you
            step aside (see below).
          </li>
          <li>
            <strong>A community</strong>{' '}
            of local entrepreneurs and freelancers, with business events every month.
          </li>
        </ul>
      </section>

      <section>
        <h2>Making a call or a video meeting: how it works, in practice</h2>
        <p>
          Most of our closed rooms are rented by the year by companies — the price of
          success. For an impromptu call or video meeting, our members have two tried-and-tested
          solutions:
        </p>
        <ul>
          <li>
            <strong>The large shared-desk room</strong> (up to 5 seats) acts as a
            call corner: you settle in there to make calls or join a video meeting. Wearing
            headphones is strongly recommended, out of respect for those at neighbouring desks.
          </li>
          <li>
            <strong>The kitchen bar</strong>, slightly off to the side, lets you step aside for
            a shorter exchange.
          </li>
        </ul>
        <p>
          For a genuine closed-door, quiet meeting, it&rsquo;s best to book a room in advance
          (€180 incl. VAT for the day, or €80 after 4 pm).
        </p>
      </section>

      <section>
        <h2>Coworking, café or hotel lobby: where to work in Antibes when you&rsquo;re passing through?</h2>
        <p>
          For a day of work away from the office, three options often come up. Here is how
          they compare in practice:
        </p>
        <table>
          <thead>
            <tr>
              <th>Criterion</th>
              <th>Coworking (day pass)</th>
              <th>Café</th>
              <th>Hotel lobby</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cost of a day</td>
              <td>€30, dedicated desk</td>
              <td>€5–10 in purchases</td>
              <td>Variable, for guests only</td>
            </tr>
            <tr>
              <td>Reliable, secure Wi-Fi</td>
              <td>Yes (fibre)</td>
              <td>Hit or miss, shared network</td>
              <td>Hit or miss</td>
            </tr>
            <tr>
              <td>A real table + power sockets</td>
              <td>Yes</td>
              <td>Rarely</td>
              <td>Rarely</td>
            </tr>
            <tr>
              <td>Calls / video meetings</td>
              <td>Yes — dedicated call corner, headphones advised</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Meeting room available</td>
              <td>Yes, by reservation</td>
              <td>No</td>
              <td>Sometimes, costly</td>
            </tr>
            <tr>
              <td>Meeting other professionals</td>
              <td>Yes (community)</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
        <p>
          A café will do for an hour; beyond that, coworking offers comfort, a place set up for
          making calls and a connection you can count on.
        </p>
      </section>

      <section>
        <h2>Who is it for? Freelancers passing through, nomads, employees on the move</h2>
        <p>
          The day pass is aimed at <strong>freelancers passing through</strong> on the Côte
          d&rsquo;Azur, <strong>remote workers</strong> who want to get out of the house, {' '}
          <strong>employees on a business trip</strong> in Antibes or Sophia Antipolis, and anyone who
          has a meeting in the area and a few hours to put to good use in between.
        </p>
      </section>

      <section>
        <h2>Come and work at Alatere coWo</h2>
        <p>
          The space is at <strong>9 boulevard Albert 1er</strong> (La Caravelle building), 06600
          Antibes — Port Vauban a stone&rsquo;s throw away, the SNCF train station a ten-minute walk (700 m)
          away. The pass involves no commitment: a call to <strong>{company.phoneDisplay}</strong> or a message to{' '}
          <Email className="g-inline" user="coworking" /> is enough to secure a desk for the
          day you want. Free coffee if you come to visit first.
        </p>
        <p>
          Discover the space:{' '}
          <Link className="g-inline" href="/alatere-cowo">
            Alatere coWo
          </Link>{' '}
          or{' '}
          <Link className="g-inline" href="/contact?pole=cowo">
            book a visit
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Need an address in Antibes, not just a desk?</h2>
        <p>
          If your visit reveals a more lasting need — setting up your company&rsquo;s registered
          office in Antibes —, the{' '}
          <Link className="g-inline" href="/alatere-domo">
            Alatere doMo business address service
          </Link>{' '}
          takes over at the same address, and coworking members enjoy favourable
          terms. A single place to work today and register your address tomorrow.
        </p>
        <p>
          To go further: if you&rsquo;re still hesitating between the plans and want to compare the
          spaces, read our{' '}
          <Link className="g-inline" href="/blog/coworking-antibes-guide">
            guide to choosing a coworking space in Antibes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>

        <h3>How much does a day of coworking in Antibes cost?</h3>
        <p>
          The day pass is €30 incl. VAT at Alatere coWo: an open-space desk, coffee, fibre and Wi-Fi
          included, with no commitment.
        </p>

        <h3>Can you come without a subscription?</h3>
        <p>
          Yes. The day pass has no commitment. A call or an email the day before is enough to make
          sure a desk is available on the day you want.
        </p>

        <h3>Is there Wi-Fi and somewhere to take calls?</h3>
        <p>
          Yes: high-speed fibre and secure Wi-Fi everywhere. For calls and video meetings, the large
          shared-desk room serves as a call corner (headset recommended) and the kitchen bar lets you
          step aside; the closed rooms, mostly rented by the year, are booked in advance.
        </p>

        <h3>Can you rent a meeting room just for the day?</h3>
        <p>
          Yes, but availability is limited: most of our rooms are rented by the year by companies.
          It&rsquo;s best to book a few days ahead. Rate: €180 incl. VAT for the day, or €80 incl.
          VAT late in the day (after 4 pm).
        </p>

        <h3>Where is the space and how do you get there?</h3>
        <p>
          At 9 boulevard Albert 1er (La Caravelle building), 06600 Antibes, a stone&rsquo;s throw from
          Port Vauban and a ten-minute walk (700 m) from the SNCF train station.
        </p>

        <h3>Can you also register your company&rsquo;s address there?</h3>
        <p>
          Yes, through Alatere doMo. Coworking members enjoy favourable terms on the business address.
        </p>
      </section>
    </>
  );
}
