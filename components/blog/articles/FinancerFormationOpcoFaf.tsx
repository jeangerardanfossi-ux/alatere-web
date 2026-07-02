'use client';

import Link from '@/components/grommet/LocalizedLink';
import { useLang } from '@/components/grommet/lang';

const CATALOG = 'https://alatere-web.catalogueformpro.com';

/** Corps de l'article « Financer sa formation : OPCO et FAF » - bilingue FR/EN. */
export default function FinancerFormationOpcoFaf() {
  const { lang } = useLang();
  return lang === 'en' ? <En /> : <Fr />;
}

function Fr() {
  return (
    <>
      <p>
        Faire financer sa <strong>formation professionnelle</strong> est souvent plus simple
        qu&rsquo;on ne le pense. Selon votre statut - salarié ou travailleur non-salarié - deux
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
          le début de la formation. Pour identifier l&rsquo;OPCO de votre branche, utilisez l&rsquo;outil
          officiel{' '}
          <a
            className="g-inline"
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/R63043"
            target="_blank"
            rel="noopener noreferrer"
          >
            « Trouver son opérateur de compétences » (service-public.gouv.fr)
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Le FAF, pour les travailleurs non-salariés</h2>
        <p>
          Le <strong>FAF</strong> (Fonds d&rsquo;Assurance Formation) concerne les{' '}
          <strong>travailleurs non-salariés</strong> : indépendants, professions libérales,
          dirigeants non-salariés. Il prend en charge la formation continue des
          non-salariés, selon des plafonds annuels propres à chaque fonds. La demande se dépose
          auprès du FAF dont vous relevez, en règle générale <strong>avant</strong> la formation. Les
          deux principaux sont le{' '}
          <a className="g-inline" href="https://www.fifpl.fr" target="_blank" rel="noopener noreferrer">
            FIF PL
          </a>{' '}
          (professions libérales) et l&rsquo;AGEFICE (commerçants, dirigeants non-salariés).
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
            <tr>
              <td>Demandeur d&rsquo;emploi</td>
              <td>
                <a
                  className="g-inline"
                  href="https://www.francetravail.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  France Travail
                </a>
              </td>
            </tr>
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
          - réponse sous 48 heures.
        </p>
      </section>

      <section>
        <h2>Questions fréquentes</h2>

        <h3>Qui finance ma formation professionnelle ?</h3>
        <p>
          Selon votre statut : l&rsquo;OPCO (opérateur de compétences) pour les salariés, le FAF (Fonds
          d&rsquo;Assurance Formation) pour les travailleurs non-salariés, et France Travail pour les
          demandeurs d&rsquo;emploi.
        </p>

        <h3>Quelle différence entre OPCO et FAF ?</h3>
        <p>
          L&rsquo;OPCO finance la formation des salariés dans le cadre du plan de développement des
          compétences de l&rsquo;employeur. Le FAF finance la formation continue des travailleurs
          non-salariés - indépendants, professions libérales (FIF PL, AGEFICE…) - selon des plafonds
          annuels propres à chaque fonds.
        </p>

        <h3>Comment faire financer sa formation sans reste à charge ?</h3>
        <p>
          Obtenez un devis et un programme détaillé, identifiez votre financeur (OPCO de votre branche
          ou FAF des non-salariés), déposez la demande de prise en charge avant le début de la
          formation, obtenez l&rsquo;accord, puis transmettez les justificatifs après la formation.
        </p>

        <h3>Faut-il un organisme certifié Qualiopi pour être financé ?</h3>
        <p>
          Oui. Seuls les organismes certifiés Qualiopi ouvrent droit aux financements publics et
          mutualisés (OPCO, FAF…). Alatere Web SAS (marque Alatere forMa) est certifié Qualiopi,
          enregistré sous le n° 93.06.07588.06.
        </p>

        <h3>Combien de temps prend un dossier de financement ?</h3>
        <p>
          Un dossier OPCO ou FAF demande souvent plusieurs semaines d&rsquo;instruction. Chez Alatere
          forMa, le devis personnalisé est envoyé sous 48 heures et le démarrage intervient en moyenne
          sous 14 jours une fois le financement validé.
        </p>
      </section>
    </>
  );
}

function En() {
  return (
    <>
      <p>
        Getting your <strong>professional training</strong> funded is often simpler than people
        think. Depending on your status - employee or self-employed - there are two main schemes:
        the <strong>OPCO</strong> and the <strong>FAF</strong>. Here is how they work and how to
        draw on them, ideally with no out-of-pocket cost.
      </p>

      <section>
        <h2>The OPCO, for employees</h2>
        <p>
          The <strong>OPCO</strong> (skills operator) funds the training of employees. Each
          professional sector comes under an OPCO that covers all or part of the course costs, as
          part of the company&rsquo;s <strong>skills-development plan</strong>. It is the employer
          who submits the request, <strong>before</strong> the training starts. To identify your
          sector&rsquo;s OPCO, use the official tool{' '}
          <a
            className="g-inline"
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/R63043"
            target="_blank"
            rel="noopener noreferrer"
          >
            « Trouver son opérateur de compétences » (service-public.gouv.fr)
          </a>
          .
        </p>
      </section>

      <section>
        <h2>The FAF, for the self-employed</h2>
        <p>
          The <strong>FAF</strong> (training insurance fund / Fonds d&rsquo;Assurance Formation)
          concerns <strong>the self-employed</strong>: sole traders, the liberal professions,
          self-employed company directors. It covers the continuing training of the self-employed,
          subject to annual ceilings specific to each fund. The request is submitted to the FAF you
          come under, generally <strong>before</strong> the training. The two main ones are{' '}
          <a className="g-inline" href="https://www.fifpl.fr" target="_blank" rel="noopener noreferrer">
            FIF PL
          </a>{' '}
          (the liberal professions) and AGEFICE (traders, self-employed company directors).
        </p>
      </section>

      <section>
        <h2>Which scheme for whom?</h2>
        <table>
          <thead>
            <tr>
              <th>Your situation</th>
              <th>Main scheme</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Employee</td><td>OPCO (skills-development plan)</td></tr>
            <tr><td>Sole trader / liberal profession</td><td>FAF (FIF PL, AGEFICE…)</td></tr>
            <tr><td>Director treated as an employee</td><td>OPCO</td></tr>
            <tr>
              <td>Jobseeker</td>
              <td>
                <a
                  className="g-inline"
                  href="https://www.francetravail.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  France Travail
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>The steps to get your training funded</h2>
        <ol>
          <li>Define your need and obtain a detailed <strong>quote + programme</strong>.</li>
          <li>Identify your funder (your sector&rsquo;s OPCO or the self-employed FAF).</li>
          <li>Submit the <strong>funding request before the start</strong> of the training.</li>
          <li>Obtain funding approval.</li>
          <li>Attend the training (attendance sheet), then send the supporting documents.</li>
        </ol>
      </section>

      <section>
        <h2>Why Qualiopi certification matters</h2>
        <p>
          Only <strong>Qualiopi-certified</strong> providers give access to public and pooled
          funding (OPCO, FAF, etc.). The training provider Alatere Web SAS (Alatere forMa brand) is
          Qualiopi-certified, registered under number 93.06.07588.06: your training courses are
          therefore <strong>fundable</strong>.
        </p>
      </section>

      <section>
        <h2>Plan for the lead times</h2>
        <p>
          An OPCO or FAF application often takes several weeks to process. At Alatere forMa, the
          personalised quote is sent <strong>within 48 hours</strong> and training starts on average{' '}
          <strong>within 14 days</strong> once funding is approved.
        </p>
        <p>
          Need help putting together your application? Discover our{' '}
          <Link className="g-inline" href="/alatere-forma">
            Qualiopi-certified training courses
          </Link>
          , browse the{' '}
          <a className="g-inline" href={CATALOG} target="_blank" rel="noopener noreferrer">
            catalogue
          </a>{' '}
          or{' '}
          <Link className="g-inline" href="/contact?pole=forma">
            request a quote
          </Link>{' '}
          - reply within 48 hours.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>

        <h3>Who funds my professional training?</h3>
        <p>
          It depends on your status: the OPCO (skills operator) for employees, the FAF (training
          insurance fund) for the self-employed, and France Travail for jobseekers.
        </p>

        <h3>What&rsquo;s the difference between OPCO and FAF?</h3>
        <p>
          The OPCO funds employee training as part of the employer&rsquo;s skills-development plan.
          The FAF funds the continuing training of the self-employed - sole traders, the liberal
          professions (FIF PL, AGEFICE, etc.) - within annual ceilings specific to each fund.
        </p>

        <h3>How can you get your training funded with nothing to pay out of pocket?</h3>
        <p>
          Get a quote and a detailed programme, identify your funder (your sector&rsquo;s OPCO or the
          self-employed FAF), submit the funding request before the training starts, obtain approval,
          then send the supporting documents after the training.
        </p>

        <h3>Do you need a Qualiopi-certified provider to get funding?</h3>
        <p>
          Yes. Only Qualiopi-certified providers give access to public and pooled funding (OPCO, FAF,
          etc.). Alatere Web SAS (Alatere forMa brand) is Qualiopi-certified, registered under no.
          93.06.07588.06.
        </p>

        <h3>How long does a funding application take?</h3>
        <p>
          An OPCO or FAF application often takes several weeks to process. At Alatere forMa, the
          personalised quote is sent within 48 hours and training starts on average within 14 days
          once funding is approved.
        </p>
      </section>
    </>
  );
}
