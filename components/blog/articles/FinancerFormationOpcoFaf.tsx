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
        Pour faire financer votre <strong>formation professionnelle</strong>, deux dispositifs
        principaux existent selon votre statut : l&rsquo;<strong>OPCO</strong> si vous êtes
        salarié, le <strong>FAF</strong> si vous êtes travailleur non-salarié. Voici comment ils
        fonctionnent et comment les mobiliser, idéalement sans reste à charge.
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

      <aside className="g-updated">
        Vous êtes indépendant ou profession libérale ? Le FIFPL, l&rsquo;AGEFICE et le FAFCEA, les
        pièces à fournir et les erreurs qui font refuser un dossier sont détaillés dans{' '}
        <Link className="g-inline" href="/blog/financement-formation-independant-fifpl-agefice">
          FIFPL ou OPCO : qui finance la formation d&rsquo;un indépendant ?
        </Link>
      </aside>

      <section>
        <h2>Qui finance votre formation ? Le tableau par profil</h2>
        <p>
          Ce n&rsquo;est pas votre statut juridique qui décide, c&rsquo;est la façon dont vous
          cotisez : les salariés sont couverts par l&rsquo;OPCO de leur employeur, les non-salariés
          par le fonds d&rsquo;assurance formation de leur activité.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Votre situation</th>
                <th>Qui finance</th>
                <th>Qui dépose la demande</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Salarié du privé</td><td>L&rsquo;OPCO de votre employeur (plan de développement des compétences)</td><td>L&rsquo;employeur</td></tr>
              <tr><td>Président ou directeur général de SAS ou SASU rémunéré (assimilé salarié)</td><td>En principe l&rsquo;OPCO de l&rsquo;entreprise, si celle-ci cotise pour lui</td><td>L&rsquo;entreprise</td></tr>
              <tr><td>Gérant majoritaire de SARL, commerçant en entreprise individuelle</td><td>AGEFICE, ou le fonds de votre activité</td><td>Vous-même</td></tr>
              <tr><td>Profession libérale (consultant, formateur, architecte, agent immobilier libéral&hellip;)</td><td><a className="g-inline" href="https://www.fifpl.fr" target="_blank" rel="noopener noreferrer">FIFPL</a></td><td>Vous-même</td></tr>
              <tr><td>Médecin libéral</td><td>FAF-PM</td><td>Vous-même</td></tr>
              <tr><td>Artisan inscrit au répertoire des métiers</td><td>FAFCEA, ou Conseil de la formation de la chambre de métiers, selon le thème</td><td>Vous-même</td></tr>
              <tr><td>Micro-entrepreneur</td><td>Le fonds de votre activité (FIFPL, AGEFICE ou FAFCEA), si vous avez déclaré un chiffre d&rsquo;affaires et payé la contribution à la formation professionnelle</td><td>Vous-même</td></tr>
              <tr><td>Exploitant agricole</td><td>VIVEA</td><td>Vous-même</td></tr>
              <tr>
                <td>Demandeur d&rsquo;emploi</td>
                <td>
                  <a className="g-inline" href="https://www.francetravail.fr" target="_blank" rel="noopener noreferrer">
                    France Travail
                  </a>
                  , et votre CPF
                </td>
                <td>Vous, avec votre conseiller</td>
              </tr>
              <tr><td>Toute personne active, pour un projet personnel</td><td>Le CPF (compte personnel de formation), pour une formation certifiante</td><td>Vous-même</td></tr>
            </tbody>
          </table>
        </div>
        <p className="g-updated">
          Les plafonds de prise en charge changent chaque année et dépendent de votre code NAF :
          vérifiez-les sur le site de votre fonds avant de vous inscrire (le FIFPL, par exemple,
          publie ses critères profession par profession).
        </p>
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
          Alatere forMa) est certifié Qualiopi, enregistré sous le numéro 93.06.07588.06 : les
          formations suivies chez nous sont donc <strong>finançables</strong>.
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
          Nous vous aidons à monter le dossier. Voyez nos{' '}
          <Link className="g-inline" href="/alatere-forma">
            formations certifiées Qualiopi
          </Link>{' '}
          et le{' '}
          <a className="g-inline" href={CATALOG} target="_blank" rel="noopener noreferrer">
            catalogue
          </a>
          , ou{' '}
          <Link className="g-inline" href="/contact?pole=forma">
            demandez un devis
          </Link>{' '}
          : réponse sous 48 heures.
        </p>
        <ul>
          <li><Link className="g-inline" href="/alatere-forma/immobilier">Formations immobilier</Link> (formation continue des agents immobiliers)</li>
          <li><Link className="g-inline" href="/alatere-forma/webmarketing">Webmarketing et référencement</Link></li>
          <li><Link className="g-inline" href="/alatere-forma/communication-digitale">Communication digitale</Link></li>
          <li><Link className="g-inline" href="/alatere-forma/intelligence-artificielle">Intelligence artificielle générative</Link></li>
          <li><Link className="g-inline" href="/alatere-forma/langues">Langues</Link></li>
        </ul>
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
          non-salariés, indépendants et professions libérales (FIF PL, AGEFICE…), selon des plafonds
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

        <h3>Je suis dirigeant et j&rsquo;ai des salariés : qui finance quoi ?</h3>
        <p>
          Deux financeurs différents. Votre propre formation relève de votre FAF (FIFPL, AGEFICE ou
          FAFCEA) si vous êtes non-salarié ; celle de vos salariés relève de l&rsquo;OPCO de votre
          entreprise. Une même formation suivie avec votre équipe peut donc être financée par deux
          dossiers.
        </p>

        <h3>Un micro-entrepreneur peut-il faire financer sa formation ?</h3>
        <p>
          Oui, par le FAF de son activité, à condition d&rsquo;avoir déclaré un chiffre
          d&rsquo;affaires et payé la contribution à la formation professionnelle (CFP).
          L&rsquo;attestation est disponible sur l&rsquo;espace URSSAF.
        </p>

        <h3>Le CPF peut-il compléter un financement OPCO ou FAF ?</h3>
        <p>
          Oui, pour une formation certifiante inscrite au RNCP ou au Répertoire spécifique : le CPF
          peut alors couvrir le reste à charge.
        </p>
      </section>
    </>
  );
}

function En() {
  return (
    <>
      <p>
        To get your <strong>professional training</strong> funded, there are two main schemes
        depending on your status: the <strong>OPCO</strong> if you are an employee, the{' '}
        <strong>FAF</strong> if you are self-employed. Here is how they work and how to draw on
        them, ideally with no out-of-pocket cost.
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
          Qualiopi-certified, registered under number 93.06.07588.06: the courses you take with us
          are therefore <strong>fundable</strong>.
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
          We help you put the application together. See our{' '}
          <Link className="g-inline" href="/alatere-forma">
            Qualiopi-certified training courses
          </Link>{' '}
          and the{' '}
          <a className="g-inline" href={CATALOG} target="_blank" rel="noopener noreferrer">
            catalogue
          </a>
          , or{' '}
          <Link className="g-inline" href="/contact?pole=forma">
            request a quote
          </Link>
          : we reply within 48 hours.
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
          The FAF funds the continuing training of the self-employed, sole traders and the liberal
          professions (FIF PL, AGEFICE, etc.), within annual ceilings specific to each fund.
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
