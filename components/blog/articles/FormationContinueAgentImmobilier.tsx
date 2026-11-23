'use client';

import Link from '@/components/grommet/LocalizedLink';
import { faqFormationContinueImmobilier } from '@/lib/faq-formation-continue-immobilier';

/**
 * Corps de l'article « Formation continue obligatoire des agents immobiliers : thèmes, durée,
 * financement » - FR uniquement. Plan SEO S48, article A2, requêtes « formation immobilier
 * contentieux », « formation droit immobilier ».
 *
 * Sources : CCI Paris Île-de-France (FAQ formation continue, non-discrimination, MAJ 2026) ;
 * décret n° 2016-173 du 18 février 2016 ; décret n° 2020-1259 du 14 octobre 2020.
 * Références clients : publications de la page Facebook Alatere Web (avril 2024, mars 2025,
 * mai 2026). Alatere forMa ne fait pas de CPF : ne jamais présenter le CPF comme une option.
 */
export default function FormationContinueAgentImmobilier() {
  return (
    <>
      <p>
        Pas de formation, pas de renouvellement de carte. Combien d&rsquo;heures suivre, quels
        modules sont imposés, quels thèmes comptent &mdash; du droit immobilier au contentieux
        locatif &mdash; et comment les faire financer par votre OPCO ou votre FAF.
      </p>

      <section>
        <h2>Qui est concerné ?</h2>
        <p>
          L&rsquo;obligation s&rsquo;applique à tous ceux qui exercent sous une carte
          professionnelle « transaction », « gestion » ou « syndic » :
        </p>
        <ul>
          <li>
            les titulaires de la carte (agents immobiliers, administrateurs de biens, syndics de
            copropriété) ;
          </li>
          <li>les directeurs d&rsquo;agence ou d&rsquo;établissement ;</li>
          <li>
            les collaborateurs habilités par le titulaire, qu&rsquo;ils soient salariés ou agents
            commerciaux indépendants.
          </li>
        </ul>
        <p>
          En pratique, toute personne qui négocie, s&rsquo;entremet ou s&rsquo;engage pour le
          compte d&rsquo;une agence doit se former.
        </p>
      </section>

      <section>
        <h2>Combien d&rsquo;heures faut-il suivre ?</h2>
        <p>
          Depuis la loi ALUR et le décret n° 2016-173 du 18 février 2016, la règle est la suivante :
        </p>
        <ul>
          <li>
            <strong>14 heures par an</strong>, ou <strong>42 heures sur trois années
            consécutives</strong> d&rsquo;exercice ;
          </li>
          <li>
            dont <strong>au moins 2 heures de déontologie</strong> sur la période de trois ans ;
          </li>
          <li>
            et, depuis le 1er janvier 2021 (décret n° 2020-1259 du 14 octobre 2020),{' '}
            <strong>au moins 2 heures sur la non-discrimination dans l&rsquo;accès au
            logement</strong>.
          </li>
        </ul>
        <p>
          La formation peut être suivie en présentiel ou à distance. Les colloques comptent dans la
          limite de 2 heures par an, sur attestation de présence.
        </p>
      </section>

      <section>
        <h2>Quels thèmes sont valables ?</h2>
        <p>
          La formation doit avoir un lien direct avec votre activité. Les domaines reconnus sont
          juridiques, économiques, commerciaux, la déontologie, les techniques de construction,
          l&rsquo;habitation, l&rsquo;urbanisme et la transition énergétique. Concrètement, quatre
          familles reviennent le plus souvent :
        </p>
        <ol>
          <li>
            <strong>Réglementation et déontologie</strong> : code de déontologie,
            non-discrimination, lutte contre le blanchiment et Tracfin.
          </li>
          <li>
            <strong>Droit immobilier et transaction</strong> : mandats et avant-contrats, vente,
            VEFA, viager, démembrement, succession, diagnostics, urbanisme.
          </li>
          <li>
            <strong>Gestion locative, copropriété et contentieux</strong> : impayés de loyer,
            procédure d&rsquo;expulsion, litiges de copropriété, recouvrement des charges.
          </li>
          <li>
            <strong>Compétences commerciales</strong> : prospection, marketing digital, langues à
            usage professionnel, outils et logiciels métier.
          </li>
        </ol>
        <p>
          Le contentieux immobilier est souvent négligé, alors qu&rsquo;il pèse lourd en gestion et
          en syndic : un impayé mal traité ou un vice de procédure coûte bien plus cher qu&rsquo;une
          journée de formation.
        </p>
      </section>

      <section>
        <h2>Quels justificatifs fournir, et à qui ?</h2>
        <p>
          La carte professionnelle est valable trois ans. Pour la renouveler auprès de la CCI, le
          titulaire joint à sa demande les attestations de formation de toute la période. Chaque
          attestation, remise par l&rsquo;organisme, doit indiquer :
        </p>
        <ul>
          <li>les objectifs et le contenu détaillé de la formation ;</li>
          <li>sa durée ;</li>
          <li>sa date ou ses dates.</li>
        </ul>
        <p>
          Le titulaire doit aussi pouvoir justifier de la formation de ses collaborateurs habilités.
          Sans ces justificatifs, la carte n&rsquo;est pas renouvelée.
        </p>
      </section>

      <section>
        <h2>Comment la faire financer ?</h2>
        <p>Le financement dépend de votre statut :</p>
        <ul>
          <li>
            <strong>Salariés d&rsquo;agence</strong> : la branche de l&rsquo;immobilier relève de
            l&rsquo;<strong>OPCO EP</strong>. L&rsquo;employeur dépose la demande de prise en charge
            avant le début de la formation.
          </li>
          <li>
            <strong>Dirigeants non salariés et agents commerciaux indépendants</strong> : la prise
            en charge passe par le fonds d&rsquo;assurance formation (FAF) auquel vous cotisez via
            l&rsquo;URSSAF, souvent l&rsquo;AGEFICE. Votre attestation de contribution à la
            formation professionnelle (CFP) indique lequel.
          </li>
        </ul>
        <p>
          Dans les deux cas, l&rsquo;organisme doit être certifié Qualiopi : c&rsquo;est la
          condition de toute prise en charge (
          <Link href="/blog/organisme-qualiopi-formation-financee-opco" className="g-inline">
            pourquoi Qualiopi conditionne le financement
          </Link>
          ). Pour le détail des démarches, consultez notre guide{' '}
          <Link href="/blog/financer-formation-opco-faf" className="g-inline">
            financer une formation avec l&rsquo;OPCO ou le FAF
          </Link>
          .
        </p>
        <p>
          À noter : chez Alatere forMa, ces formations ne passent pas par le CPF. Le financement se
          fait par l&rsquo;OPCO ou le FAF, avec subrogation de paiement dès que votre financeur le
          permet : vous n&rsquo;avancez pas les frais.
        </p>
      </section>

      <section>
        <h2>Se former à Antibes avec Alatere forMa</h2>
        <p>
          Alatere forMa, organisme certifié Qualiopi depuis 2022, propose plus de 30 programmes pour
          les professionnels de l&rsquo;immobilier, en présentiel à Antibes ou en intra dans votre
          agence :
        </p>
        <ul>
          <li>
            Déontologie et non-discrimination (4 h) &mdash; de quoi couvrir les deux modules imposés
            en une demi-journée ;
          </li>
          <li>Lutte contre le blanchiment (4 h) et Tracfin (7 h) ;</li>
          <li>droit immobilier et transaction : de 7 à 14 heures par programme ;</li>
          <li>gestion locative, copropriété et contentieux (7 h chacun) ;</li>
          <li>marketing digital, IA et langues pour développer votre activité.</li>
        </ul>
        <p>
          Chaque programme est adapté au profil des participants, et une attestation conforme est
          remise à l&rsquo;issue de la formation.
        </p>
        <p>
          <Link href="/alatere-forma/immobilier" className="g-inline">
            Voir les formations immobilier &rarr;
          </Link>
        </p>
      </section>

      <section>
        <h2>Ils se sont formés avec nous</h2>
        <h3>Laforêt Immobilier Antibes : l&rsquo;anglais de la transaction</h3>
        <p>
          En avril 2024, Julien Janser et trois collègues de l&rsquo;agence ont suivi dans nos
          locaux d&rsquo;Antibes une journée de 7 heures d&rsquo;anglais professionnel pour
          l&rsquo;immobilier : description des biens, copropriété, négociation, vocabulaire
          juridique et financier, loi ALUR expliquée à un client anglophone. Nous avons monté les
          dossiers de prise en charge auprès de l&rsquo;AGEFICE et de l&rsquo;OPCO EP.
        </p>
        <h3>Cabinet Deliquaire, syndic à Juan-les-Pins : quatre formations en un mois</h3>
        <p>
          En mars 2025, Bernard Deliquaire a suivi quatre formations adaptées au métier de syndic.
          Il a commencé par la déontologie et la non-discrimination avec Hélène Michailou. Ont suivi
          l&rsquo;anglais des assemblées générales et des sinistres, Canva et les réseaux sociaux,
          puis la numérisation de son activité avec l&rsquo;IA : synthèse des règlements de
          copropriété, comparaison de devis, préparation des AG.
        </p>
        <h3>MT Agency Immobilier &amp; Commerce, Menton : English for Real Estate</h3>
        <p>
          Au printemps 2026, deux négociatrices de l&rsquo;agence ont suivi 7 heures d&rsquo;anglais
          immobilier à distance, en deux matinées, pour passer du niveau B1 au B2. Au programme : le
          parcours complet d&rsquo;une vente en anglais, les diagnostics obligatoires et les faux
          amis qui font perdre en crédibilité face à un acheteur britannique ou américain.
        </p>
        <p>
          Les agences Agence Guynemer, Riviera King, Azur&rsquo;Estate, ExpertImo Grasse et MAV nous
          ont aussi confié la formation de leurs équipes.
        </p>
      </section>

      <section>
        <h2>Questions fréquentes</h2>
        {faqFormationContinueImmobilier.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Pour aller plus loin</h2>
        <ul>
          <li>
            <Link href="/alatere-forma/immobilier" className="g-inline">
              Les formations Alatere forMa pour l&rsquo;immobilier
            </Link>
          </li>
          <li>
            <Link href="/blog/organisme-qualiopi-formation-financee-opco" className="g-inline">
              Organisme Qualiopi : pourquoi c&rsquo;est la condition d&rsquo;une formation financée
              par l&rsquo;OPCO
            </Link>
          </li>
          <li>
            <Link href="/blog/financer-formation-opco-faf" className="g-inline">
              Financer sa formation professionnelle : OPCO et FAF expliqués
            </Link>
          </li>
          <li>
            <Link href="/blog/financement-formation-independant-fifpl-agefice" className="g-inline">
              FIFPL ou OPCO ? Qui finance la formation d&rsquo;un travailleur indépendant
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
