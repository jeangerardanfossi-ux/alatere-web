'use client';

import Link from '@/components/grommet/LocalizedLink';
import { faqFifplOpco } from '@/lib/faq-fifpl-opco';

/**
 * Corps de l'article « FIFPL ou OPCO ? Qui finance la formation d'un indépendant » - FR uniquement.
 * Requête visée depuis le 09/11/2026 : « opco fifpl » (plan SEO, A7).
 *
 * Les plafonds changent chaque année et par code NAF : ne rien publier de chiffré qui
 * n'ait pas été vérifié à la source ; on renvoie vers le site de chaque fonds.
 */
export default function FinancementFormationIndependant() {
  return (
    <>
      <p>
        Si vous êtes <strong>travailleur indépendant</strong>, vous cotisez déjà pour votre
        formation. Cette contribution s&rsquo;appelle la <strong>CFP</strong>, la contribution à la
        formation professionnelle, et elle est prélevée avec vos cotisations sociales, que vous
        vous formiez ou non. L&rsquo;argent existe donc, il est à votre nom, et il est perdu si
        vous ne le demandez pas. Reste à savoir <em>quel</em> fonds gère votre enveloppe, et{' '}
        <em>comment</em> la mobiliser sans se faire refuser le dossier.
      </p>

      <section>
        <h2>FIFPL ou OPCO : la réponse en 30 secondes</h2>
        <p>
          <strong>
            Si vous êtes profession libérale non salariée, votre formation relève du FIFPL, pas
            d&rsquo;un OPCO.
          </strong>{' '}
          Les OPCO ne financent que des salariés. Le FIFPL (Fonds interprofessionnel de formation
          des professionnels libéraux) finance les libéraux qui versent la CFP avec leurs
          cotisations URSSAF.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>FIFPL</th>
                <th>OPCO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pour qui</td>
                <td>Le professionnel libéral lui-même, non salarié (y compris en micro-entreprise)</td>
                <td>Les salariés d&rsquo;une entreprise, y compris ceux d&rsquo;un cabinet libéral</td>
              </tr>
              <tr>
                <td>Financé par</td>
                <td>La CFP versée avec vos cotisations URSSAF</td>
                <td>Les contributions formation de l&rsquo;employeur sur la masse salariale</td>
              </tr>
              <tr>
                <td>Qui dépose la demande</td>
                <td>Vous, en ligne sur le site du FIFPL</td>
                <td>L&rsquo;employeur</td>
              </tr>
              <tr>
                <td>Montant pris en charge</td>
                <td>Plafond annuel fixé par profession (code NAF), publié chaque année</td>
                <td>Selon les règles de l&rsquo;OPCO et la taille de l&rsquo;entreprise</td>
              </tr>
              <tr>
                <td>Condition commune</td>
                <td colSpan={2}>Un organisme certifié Qualiopi et une demande déposée dans les délais</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Vous êtes libéral et employeur ?</strong> Vous avez droit aux deux, pour des
          personnes différentes : le FIFPL pour vous, l&rsquo;OPCO de votre cabinet pour vos
          salariés (pour la plupart des cabinets libéraux, l&rsquo;OPCO EP). Vérifiez le vôtre avec
          l&rsquo;
          <a
            className="g-inline"
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/R63043"
            target="_blank"
            rel="noopener noreferrer"
          >
            outil officiel « Trouver son opérateur de compétences »
          </a>
          .
        </p>
      </section>

      <section>
        <h2>OPCO, FAF : deux mots qu&rsquo;on confond tout le temps</h2>
        <p>
          Un <strong>OPCO</strong> (opérateur de compétences) finance la formation des{' '}
          <strong>salariés</strong> d&rsquo;une entreprise. C&rsquo;est l&rsquo;employeur qui monte
          le dossier, et c&rsquo;est le plan de développement des compétences de la société qui est
          engagé.
        </p>
        <p>
          Un <strong>FAF</strong> (fonds d&rsquo;assurance formation) finance la formation des{' '}
          <strong>travailleurs non salariés</strong> : professions libérales, artisans,
          commerçants, dirigeants non salariés. C&rsquo;est vous qui déposez la demande, en votre
          nom propre.
        </p>
        <p>
          Si vous êtes gérant majoritaire, profession libérale ou micro-entrepreneur, c&rsquo;est
          donc un FAF qui vous concerne, même si les moteurs de recherche vous renvoient surtout
          vers les OPCO. Nous détaillons la logique générale des deux
          dispositifs dans notre{' '}
          <Link href="/blog/financer-formation-opco-faf" className="g-inline">
            guide du financement de la formation
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Trouver votre fonds : cela dépend de votre activité, pas de votre statut juridique</h2>
        <p>
          Votre fonds dépend de la nature de votre activité telle qu&rsquo;elle est enregistrée
          (code APE et affiliation), et non de votre forme sociale ou de votre régime fiscal.
          C&rsquo;est le point qui fait perdre le plus de temps.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Votre situation</th>
                <th>Votre fonds</th>
                <th>Plafond annuel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profession libérale (hors médicale) : consultant, architecte, avocat, kiné, ostéopathe, traducteur&hellip;</td>
                <td><strong>FIFPL</strong> (Fonds interprofessionnel de formation des professionnels libéraux)</td>
                <td>fixé chaque année par le fonds, selon votre activité</td>
              </tr>
              <tr>
                <td>Dirigeant non salarié du commerce, de l&rsquo;industrie ou des services, et son conjoint collaborateur</td>
                <td><strong>AGEFICE</strong></td>
                <td>fixé chaque année par le fonds, selon votre activité</td>
              </tr>
              <tr>
                <td>Artisan inscrit au répertoire des métiers</td>
                <td><strong>FAFCEA</strong>, et selon les cas le <strong>Conseil de la formation</strong> régional</td>
                <td>fixé chaque année par le fonds, selon votre activité</td>
              </tr>
              <tr>
                <td>Profession médicale libérale</td>
                <td><strong>FAF-PM</strong> (médecins) ou fonds dédié à la profession</td>
                <td>fixé chaque année par le fonds, selon votre activité</td>
              </tr>
              <tr>
                <td>Salarié d&rsquo;une TPE ou PME</td>
                <td>L&rsquo;<strong>OPCO</strong> de la branche de votre employeur (OPCO EP, Atlas, Akto&hellip;)</td>
                <td>selon le plan de développement des compétences de l&rsquo;entreprise</td>
              </tr>
              <tr>
                <td>Exploitant agricole</td>
                <td><strong>VIVEA</strong></td>
                <td>fixé chaque année par le fonds, selon votre activité</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Deux cas particuliers reviennent souvent. Le <strong>micro-entrepreneur</strong> relève du
          même fonds que les autres indépendants de son secteur, à condition d&rsquo;avoir
          effectivement versé la CFP, donc d&rsquo;avoir déclaré du chiffre d&rsquo;affaires. Le{' '}
          <strong>dirigeant assimilé salarié</strong> (président de SAS, gérant minoritaire)
          relève de l&rsquo;OPCO de son entreprise, comme n&rsquo;importe quel salarié.
        </p>
      </section>

      <section>
        <h2>La procédure, dans l&rsquo;ordre</h2>
        <ol>
          <li>
            <strong>Vérifier votre éligibilité</strong> : être à jour de vos cotisations, et avoir
            versé la CFP sur l&rsquo;exercice concerné. Une attestation de versement de la CFP est
            délivrée par l&rsquo;URSSAF.
          </li>
          <li>
            <strong>Choisir un organisme certifié Qualiopi</strong>. Sans cette certification, le
            fonds refuse le dossier, quel que soit le contenu de la formation. Demandez le numéro
            de déclaration d&rsquo;activité et le certificat.
          </li>
          <li>
            <strong>Réunir les pièces</strong> : devis ou convention de formation, programme
            détaillé, attestation URSSAF, justificatif d&rsquo;affiliation.
          </li>
          <li>
            <strong>Déposer la demande sur le portail du fonds</strong>, en respectant le délai
            imposé. C&rsquo;est l&rsquo;étape décisive : la plupart des fonds exigent le
            dépôt <strong>avant le début de la formation</strong>.
          </li>
          <li>
            <strong>Suivre la formation</strong>, puis transmettre l&rsquo;attestation de présence
            et la facture acquittée pour déclencher le remboursement.
          </li>
        </ol>
        <p className="g-updated">
          Les délais de dépôt et les modalités de remboursement diffèrent d&rsquo;un fonds à
          l&rsquo;autre. Vérifiez toujours la règle en vigueur sur le portail de votre fonds avant
          de vous engager.
        </p>
      </section>

      <section>
        <h2>Les cinq erreurs qui font refuser un dossier</h2>
        <ul>
          <li>
            <strong>Déposer après le début de la formation.</strong> C&rsquo;est de loin le premier
            motif de refus, et il n&rsquo;est presque jamais rattrapable.
          </li>
          <li>
            <strong>Choisir un organisme non certifié Qualiopi.</strong> Le fonds ne regarde même
            pas le contenu pédagogique.
          </li>
          <li>
            <strong>Ne pas être à jour de ses cotisations.</strong> L&rsquo;attestation URSSAF est
            systématiquement demandée.
          </li>
          <li>
            <strong>Se tromper de fonds.</strong> Un dossier déposé chez le mauvais organisme
            n&rsquo;est pas réorienté : il est classé sans suite, et le temps perdu peut vous faire
            dépasser le délai.
          </li>
          <li>
            <strong>Viser un thème hors priorités.</strong> Chaque fonds publie une liste annuelle
            de thématiques prioritaires. Une formation hors liste peut être prise en charge à un
            taux inférieur, voire pas du tout.
          </li>
        </ul>
      </section>

      <section>
        <h2>Trois cas concrets</h2>
        <h3>Une architecte d&rsquo;intérieur installée à Antibes</h3>
        <p>
          Profession libérale, affiliée à l&rsquo;URSSAF, elle relève du FIFPL. Elle souhaite se
          former à la création de contenu visuel pour développer sa visibilité. Elle demande le
          devis et le certificat Qualiopi à l&rsquo;organisme, dépose son dossier sur le portail du
          FIFPL avant le premier jour de formation, suit les deux journées, puis transmet
          l&rsquo;attestation de présence et la facture acquittée. Le remboursement intervient sur
          son compte personnel, dans la limite du plafond annuel de sa profession.
        </p>
        <h3>Un artisan de la Fontonne</h3>
        <p>
          Inscrit au répertoire des métiers, il relève du FAFCEA pour les formations techniques
          liées à son métier, et du Conseil de la formation de sa chambre de métiers pour les
          formations transversales (gestion, commercial, numérique). La distinction compte : le
          même artisan ne dépose pas au même endroit selon le thème de sa formation.
        </p>
        <h3>Une agente immobilière libérale et son assistante salariée</h3>
        <p>
          Agente commerciale en immobilier installée en entreprise individuelle, elle emploie une
          assistante à temps partiel. Pour sa formation continue obligatoire, elle dépose
          elle-même un dossier au FIFPL, qui publie des critères spécifiques aux agents
          immobiliers. La formation de son assistante est demandée par l&rsquo;employeur, donc
          par elle, à l&rsquo;OPCO. Les deux peuvent suivre la même session : deux dossiers, deux
          financeurs.
        </p>
      </section>

      <section>
        <h2>Pourquoi la certification Qualiopi conditionne tout</h2>
        <p>
          Qualiopi est la certification qualité obligatoire pour tout organisme qui souhaite faire
          financer ses formations par un fonds public ou mutualisé. Elle ne dit rien de la qualité
          pédagogique perçue, mais elle atteste que l&rsquo;organisme respecte un référentiel de
          processus : information du public, adaptation aux bénéficiaires, qualification des
          formateurs, recueil des appréciations, prise en compte des situations de handicap.
        </p>
        <p>
          Sans elle, votre demande de financement est refusée avant même d&rsquo;être instruite.
          C&rsquo;est la première question à poser à un organisme, avant même le prix.{' '}
          <Link href="/organisme-de-formation" className="g-inline">
            Alatere Web est certifié Qualiopi
          </Link>{' '}
          et déclaré sous le numéro d&rsquo;activité 93.06.07588.06.
        </p>
      </section>

      <section>
        <h2>Vous ne savez pas de quel fonds vous relevez ?</h2>
        <p>
          C&rsquo;est la question que l&rsquo;on nous pose le plus souvent, et elle se règle en
          quelques minutes à partir de votre statut et de votre code APE. Dites-nous les deux, et
          nous vous indiquons votre fonds, le délai de dépôt applicable et les pièces à réunir,
          que vous vous formiez avec nous ou ailleurs.
        </p>
        <p>
          <Link href="/contact?pole=forma" className="g-inline">
            Nous poser la question &rarr;
          </Link>
        </p>
      </section>

      <section>
        <h2>Questions fréquentes</h2>
        {faqFifplOpco.map((f) => (
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
              OPCO ou FAF : le tableau par profil (salarié, dirigeant de SAS, gérant de SARL…)
            </Link>
          </li>
          <li>
            <Link href="/alatere-forma/immobilier" className="g-inline">
              La formation continue des agents immobiliers chez Alatere forMa
            </Link>
          </li>
          <li>
            <Link href="/alatere-forma" className="g-inline">
              Le catalogue de formations Alatere forMa
            </Link>
          </li>
          <li>
            <Link href="/organisme-de-formation" className="g-inline">
              Notre certification Qualiopi et nos engagements qualité
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
