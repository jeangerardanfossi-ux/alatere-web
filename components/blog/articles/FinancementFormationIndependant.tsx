'use client';

import Link from '@/components/grommet/LocalizedLink';

/**
 * Corps de l'article « Financer sa formation quand on est indépendant » - FR uniquement.
 *
 * ⚠️ AVANT PUBLICATION : les plafonds et critères de prise en charge changent chaque
 * année et par fonds. Les cellules marquées « à confirmer » doivent être renseignées
 * depuis le site officiel du fonds concerné (millesime 2026) avant mise en ligne.
 * Ne rien publier de chiffré qui n'ait pas été vérifié à la source.
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
        <h2>OPCO, FAF : deux mots qu&rsquo;on confond tout le temps</h2>
        <p>
          Un <strong>OPCO</strong> - opérateur de compétences - finance la formation des{' '}
          <strong>salariés</strong> d&rsquo;une entreprise. C&rsquo;est l&rsquo;employeur qui monte
          le dossier, et c&rsquo;est le plan de développement des compétences de la société qui est
          engagé.
        </p>
        <p>
          Un <strong>FAF</strong> - fonds d&rsquo;assurance formation - finance la formation des{' '}
          <strong>travailleurs non salariés</strong> : professions libérales, artisans,
          commerçants, dirigeants non salariés. C&rsquo;est vous qui déposez la demande, en votre
          nom propre.
        </p>
        <p>
          Si vous êtes gérant majoritaire, profession libérale ou micro-entrepreneur, c&rsquo;est
          donc un FAF qui vous concerne, pas un OPCO - même si les moteurs de recherche vous
          renvoient massivement vers le second. Nous détaillons la logique générale des deux
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
          C&rsquo;est le point qui fait perdre le plus de temps. Ce n&rsquo;est ni votre forme
          sociale ni votre régime fiscal qui détermine votre fonds, mais la nature de votre
          activité, telle qu&rsquo;elle est enregistrée - votre code APE et votre affiliation.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Votre situation</th>
                <th>Votre fonds</th>
                <th>Plafond annuel indicatif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profession libérale (hors médicale) : consultant, architecte, avocat, kiné, ostéopathe, traducteur&hellip;</td>
                <td><strong>FIFPL</strong> - Fonds interprofessionnel de formation des professionnels libéraux</td>
                <td>à confirmer (millésime 2026)</td>
              </tr>
              <tr>
                <td>Dirigeant non salarié du commerce, de l&rsquo;industrie ou des services, et son conjoint collaborateur</td>
                <td><strong>AGEFICE</strong></td>
                <td>à confirmer (millésime 2026)</td>
              </tr>
              <tr>
                <td>Artisan inscrit au répertoire des métiers</td>
                <td><strong>FAFCEA</strong>, et selon les cas le <strong>Conseil de la formation</strong> régional</td>
                <td>à confirmer (millésime 2026)</td>
              </tr>
              <tr>
                <td>Profession médicale libérale</td>
                <td><strong>FAF-PM</strong> (médecins) ou fonds dédié à la profession</td>
                <td>à confirmer (millésime 2026)</td>
              </tr>
              <tr>
                <td>Salarié d&rsquo;une TPE ou PME</td>
                <td>L&rsquo;<strong>OPCO</strong> de la branche de votre employeur (OPCO EP, Atlas, Akto&hellip;)</td>
                <td>selon le plan de développement des compétences de l&rsquo;entreprise</td>
              </tr>
              <tr>
                <td>Exploitant agricole</td>
                <td><strong>VIVEA</strong></td>
                <td>à confirmer (millésime 2026)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Deux cas particuliers reviennent souvent. Le <strong>micro-entrepreneur</strong> relève du
          même fonds que les autres indépendants de son secteur, à condition d&rsquo;avoir
          effectivement versé la CFP - donc d&rsquo;avoir déclaré du chiffre d&rsquo;affaires. Le{' '}
          <strong>dirigeant assimilé salarié</strong> - président de SAS, gérant minoritaire -
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
            imposé. C&rsquo;est ici que se joue l&rsquo;essentiel : la plupart des fonds exigent le
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
        <h2>Deux cas concrets</h2>
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
          formations transversales - gestion, commercial, numérique. La distinction compte : le
          même artisan ne dépose pas au même endroit selon le thème de sa formation.
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
          nous vous indiquons votre fonds, le délai de dépôt applicable et les pièces à réunir -
          que vous vous formiez avec nous ou ailleurs.
        </p>
        <p>
          <Link href="/contact?pole=forma" className="g-inline">
            Nous poser la question &rarr;
          </Link>
        </p>
      </section>

      <section>
        <h2>Pour aller plus loin</h2>
        <ul>
          <li>
            <Link href="/blog/financer-formation-opco-faf" className="g-inline">
              Financer sa formation professionnelle : OPCO et FAF, le guide
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
