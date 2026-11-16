'use client';

import Link from '@/components/grommet/LocalizedLink';
import { faqOrganismeQualiopi } from '@/lib/faq-organisme-qualiopi';

/**
 * Corps de l'article « Organisme Qualiopi : pourquoi c'est la condition d'une formation
 * financée par l'OPCO » - FR uniquement. Plan SEO S47, article A1, requête « qualiopi ».
 *
 * Sources : France compétences, DREETS PACA (obligation, financeurs, validité, audits) ;
 * décret n° 2026-728 du 1er août 2026 (référentiel actualisé au 1er novembre 2026).
 * Alatere forMa ne fait pas de CPF : ne jamais présenter le CPF comme une option.
 */
export default function OrganismeQualiopiFormationOpco() {
  return (
    <>
      <p>
        Avant de comparer des programmes de formation pour un salarié, vérifiez une chose :
        l&rsquo;organisme est-il <strong>certifié Qualiopi</strong> ? Sans cette certification,
        votre OPCO ne peut pas financer la formation, quelle que soit sa qualité. C&rsquo;est la
        première question à poser, avant même le prix.
      </p>

      <section>
        <h2>Qualiopi, ce que c&rsquo;est</h2>
        <p>
          Qualiopi est la marque de certification qualité des prestataires de formation. Elle
          atteste qu&rsquo;un organisme respecte le référentiel national qualité fixé par
          l&rsquo;État : 7 critères, vérifiés par des indicateurs précis.
        </p>
        <p>
          La certification est délivrée par un organisme certificateur accrédité par le Cofrac,
          après un audit. Elle est valable 3 ans, avec un audit de surveillance en cours de cycle,
          puis un audit de renouvellement.
        </p>
        <p>
          Elle couvre quatre catégories d&rsquo;actions : les actions de formation, les bilans de
          compétences, la VAE et l&rsquo;apprentissage. Un organisme est certifié pour une ou
          plusieurs de ces catégories, et son certificat les mentionne.
        </p>
      </section>

      <section>
        <h2>Pourquoi l&rsquo;OPCO exige un organisme certifié</h2>
        <p>
          Depuis le 1er janvier 2022, seuls les organismes certifiés Qualiopi peuvent recevoir des
          fonds publics ou mutualisés. Sont concernés :
        </p>
        <ul>
          <li>
            les opérateurs de compétences (OPCO), qui financent le plan de développement des
            compétences des entreprises ;
          </li>
          <li>la Caisse des dépôts, pour les formations éligibles au CPF ;</li>
          <li>France Travail, les Régions et l&rsquo;État ;</li>
          <li>les associations Transitions Pro et l&rsquo;Agefiph.</li>
        </ul>
        <p>
          Concrètement, si vous choisissez un organisme non certifié, la demande de prise en charge
          est refusée et l&rsquo;entreprise paie la formation en totalité.
        </p>
      </section>

      <section>
        <h2>Ce que Qualiopi garantit pour vous</h2>
        <p>Les 7 critères du référentiel se traduisent par des engagements concrets :</p>
        <ol>
          <li>
            une information claire avant l&rsquo;inscription : programme, prérequis, durée, prix,
            délais d&rsquo;accès, résultats obtenus ;
          </li>
          <li>des objectifs définis et adaptés à chaque stagiaire, avec un positionnement de départ ;</li>
          <li>un suivi pendant la formation et une évaluation des acquis à la fin ;</li>
          <li>
            des moyens pédagogiques et techniques adaptés, y compris pour les personnes en situation
            de handicap ;
          </li>
          <li>des formateurs qualifiés, dont les compétences sont tenues à jour ;</li>
          <li>une veille sur la réglementation, les métiers et les pratiques pédagogiques ;</li>
          <li>
            le recueil des avis des stagiaires et des entreprises, et leur prise en compte pour
            s&rsquo;améliorer.
          </li>
        </ol>
      </section>

      <section>
        <h2>Un référentiel actualisé au 1er novembre 2026</h2>
        <p>
          Le référentiel a été actualisé le 1er novembre 2026, par un décret du 1er août 2026. Il
          ajoute un indicateur réservé aux CFA et précise plusieurs exigences existantes. Les
          certifications en cours restent valables : pour vous, la règle ne change pas, seul un
          organisme certifié peut être financé par l&rsquo;OPCO.
        </p>
      </section>

      <section>
        <h2>Comment vérifier qu&rsquo;un organisme est certifié</h2>
        <ul>
          <li>
            Demandez son certificat Qualiopi : il indique les catégories couvertes et la date de fin
            de validité.
          </li>
          <li>
            Consultez la{' '}
            <a
              className="g-inline"
              href="https://www.data.gouv.fr/fr/datasets/582c8978c751df788ec0bb7e/"
              target="_blank"
              rel="noopener noreferrer"
            >
              liste publique des organismes de formation
            </a>{' '}
            publiée par le ministère du Travail sur data.gouv.fr.
          </li>
          <li>
            Pour un financement OPCO d&rsquo;une formation, vérifiez que la catégorie « actions de
            formation » figure bien sur le certificat.
          </li>
        </ul>
      </section>

      <section>
        <h2>Et si vous êtes indépendant ?</h2>
        <p>
          Les travailleurs non salariés ne dépendent pas d&rsquo;un OPCO mais d&rsquo;un fonds
          d&rsquo;assurance formation (FAF), comme le FIFPL ou l&rsquo;AGEFICE. Les règles de prise
          en charge diffèrent : nous les détaillons dans notre article{' '}
          <Link href="/blog/financement-formation-independant-fifpl-agefice" className="g-inline">
            Formation FIFPL ou OPCO ?
          </Link>
        </p>
      </section>

      <section>
        <h2>Alatere forMa, organisme certifié Qualiopi depuis 2022</h2>
        <p>
          Alatere forMa, l&rsquo;offre de formation d&rsquo;Alatere Web SAS à Antibes, est certifié
          Qualiopi depuis 2022 pour la catégorie « actions de formation », sous le numéro
          d&rsquo;enregistrement 93.06.07588.06. Nos formations en webmarketing, intelligence
          artificielle, communication digitale, langues et immobilier peuvent donc être financées
          par votre OPCO, au titre du plan de développement des compétences, ou par votre FAF. Elles
          ne sont pas éligibles au CPF.
        </p>
        <p>
          Nous vous aidons à monter le dossier de prise en charge, y compris en subrogation pour
          toutes nos formations, dès lors que votre OPCO ou votre FAF l&rsquo;accepte : il nous paie
          alors directement, sans avance de votre part.
        </p>
        <p>
          <Link href="/alatere-forma" className="g-inline">
            Les formations Alatere forMa &rarr;
          </Link>
          {' · '}
          <Link href="/organisme-de-formation" className="g-inline">
            Notre certificat Qualiopi
          </Link>
        </p>
      </section>

      <section>
        <h2>Questions fréquentes</h2>
        {faqOrganismeQualiopi.map((f) => (
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
            <Link href="/blog/financer-formation-opco-faf" className="g-inline">
              Financer sa formation professionnelle : OPCO et FAF expliqués
            </Link>
          </li>
          <li>
            <Link href="/blog/financement-formation-independant-fifpl-agefice" className="g-inline">
              FIFPL ou OPCO ? Qui finance la formation d&rsquo;un travailleur indépendant
            </Link>
          </li>
          <li>
            <Link href="/alatere-forma/webmarketing" className="g-inline">
              Les formations webmarketing Alatere forMa
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
