'use client';

import Link from '@/components/grommet/LocalizedLink';
import { useLang } from '@/components/grommet/lang';

/**
 * Corps de l'article « Comparatif des services de domiciliation à Antibes » - bilingue FR/EN.
 *
 * Tarifs relevés le 8 septembre 2026 sur les sources publiques de chaque prestataire.
 * Règle de publication : un tarif non affiché publiquement reste « non communiqué ».
 * Ne jamais publier un prix estimé pour un concurrent nommé, ni baliser un avis le concernant.
 */
export default function ComparatifDomiciliationAntibes() {
  const { lang } = useLang();
  return lang === 'en' ? <En /> : <Fr />;
}

/** Prestataires comparés - source unique du tableau FR et EN. */
type Row = { name: string; address: string; price: string[]; note: string };

const ROWS_FR: Row[] = [
  {
    name: 'Alatere doMo',
    address: '9 bd Albert 1er, Antibes (immeuble La Caravelle)',
    price: ['30 € HT / mois (siège social)', '25 € HT (boîte aux lettres seule)', '50 € HT (scan et réexpédition inclus)'],
    note: 'Hyper-centre, sans engagement, frais de dossier de 50 €, coworking et salle de réunion sur place, équipe multilingue',
  },
  {
    name: 'Riviera Secrétariat',
    address: '46 bd Président Wilson, Antibes',
    price: ['30 € HT (EI, association, SCI)', '35 € HT (SARL, SAS, SASU, EURL, SA)', '45 € HT (société étrangère)'],
    note: 'Agrément n° 2020/13, secrétariat externalisé, réexpédition ou numérisation hebdomadaire à 10 € HT',
  },
  {
    name: 'Centre d’Affaires Antibes',
    address: '540 1ère Avenue, Antibes',
    price: ['25 € HT / mois'],
    note: 'Le tarif de siège social le plus bas relevé à Antibes, agrément préfectoral affiché, hors centre-ville piéton',
  },
  {
    name: 'Centre d’Affaires Wilson',
    address: '82 bd Président Wilson, Antibes',
    price: ['non communiqué'],
    note: 'Domiciliation, boîtes privées, secrétariat et traductions, locaux accessibles PMR',
  },
  {
    name: 'SelfBuro',
    address: '92 bd Président Wilson, Antibes / Juan-les-Pins',
    price: ['non communiqué'],
    note: 'Centre d’affaires, environ huit salles de réunion modulables',
  },
  {
    name: 'Na&Co Fontonne',
    address: '256 route de Nice, Antibes',
    price: ['à partir de 27,50 € HT / mois', '13,75 € HT (société en sommeil)'],
    note: 'Boîte accessible 24h/24, parking gratuit, accès RN7 et A8, gestion des colis et recommandés',
  },
  {
    name: 'Mail Boxes Etc. Antibes',
    address: '2793 chemin de Saint-Claude, Antibes',
    price: ['30 € HT / mois', 'engagement 6 ou 12 mois', '2 mois offerts en paiement annuel'],
    note: 'Réseau international, équipe bilingue, services d’expédition et de reprographie',
  },
  {
    name: 'Na&Co Sophia',
    address: '1856 chemin de Saint-Bernard, Vallauris',
    price: ['à partir de 27,50 € HT / mois'],
    note: 'Adresse en lisière de la technopole, mêmes services qu’à la Fontonne',
  },
  {
    name: 'Baya Axess',
    address: '400 av. de Roumanille, Biot (Green Side)',
    price: ['non communiqué'],
    note: '55 bureaux, coworking, 160 places de parking, centre de vie Saint-Philippe à proximité',
  },
  {
    name: 'Pearl Partner',
    address: '535 route des Lucioles, Valbonne (Les Aqueducs)',
    price: ['non communiqué'],
    note: 'Smart building à énergie positive, packs incluant scan quotidien et permanence téléphonique',
  },
  {
    name: 'Starter Business Center',
    address: '2000 route des Lucioles, Biot (Les Algorithmes)',
    price: ['non communiqué'],
    note: 'Adresse 06410 Sophia Antipolis, voisinage de grands groupes, parking gratuit',
  },
  {
    name: 'Dom Box Services',
    address: '1609 chemin de Saint-Bernard, Vallauris',
    price: ['30 € HT / mois', '50 € HT (réexpédition hebdomadaire)'],
    note: 'Structure à taille humaine, ouverture de compte bancaire et démarches d’immatriculation accompagnées',
  },
  {
    name: 'Centre d’Affaires du Loup',
    address: '806 av. des Plans, Villeneuve-Loubet',
    price: ['30 € HT (association, SCI, micro-entrepreneur)', '37 à 43 € HT (sociétés, selon la périodicité)', 'engagement 3 mois'],
    note: 'Agrément n° 2021/13, numérisation incluse, aide à la création d’entreprise, relais colis',
  },
  {
    name: 'Acceptis',
    address: '240 chemin des Prés, Villeneuve-Loubet',
    price: ['non communiqué'],
    note: 'Domiciliation de sièges sociaux, cadre confidentiel adossé à une activité comptable',
  },
  {
    name: 'Azur Secrétariat Services',
    address: '60 av. de Nice, Cagnes-sur-Mer',
    price: ['non communiqué'],
    note: 'Agréé préfecture, accès aux boîtes 7j/7, proximité de l’aéroport de Nice',
  },
];

const ROWS_EN: Row[] = [
  {
    name: 'Alatere doMo',
    address: '9 bd Albert 1er, Antibes (La Caravelle building)',
    price: ['€30 excl. VAT / month (registered office)', '€25 (mailbox only)', '€50 (scanning and forwarding included)'],
    note: 'Town centre, no commitment, €50 one-off set-up fee, coworking and meeting room on site, multilingual team',
  },
  {
    name: 'Riviera Secrétariat',
    address: '46 bd Président Wilson, Antibes',
    price: ['€30 (sole trader, association, SCI)', '€35 (SARL, SAS, SASU, EURL, SA)', '€45 (foreign company)'],
    note: 'Approval no. 2020/13, outsourced secretarial services, weekly forwarding or scanning at €10',
  },
  {
    name: 'Centre d’Affaires Antibes',
    address: '540 1ère Avenue, Antibes',
    price: ['€25 excl. VAT / month'],
    note: 'The lowest registered-office price found in Antibes, prefectural approval displayed, outside the pedestrian centre',
  },
  {
    name: 'Centre d’Affaires Wilson',
    address: '82 bd Président Wilson, Antibes',
    price: ['not published'],
    note: 'Business address, private mailboxes, secretarial services and translation, step-free access',
  },
  {
    name: 'SelfBuro',
    address: '92 bd Président Wilson, Antibes / Juan-les-Pins',
    price: ['not published'],
    note: 'Business centre with around eight modular meeting rooms',
  },
  {
    name: 'Na&Co Fontonne',
    address: '256 route de Nice, Antibes',
    price: ['from €27.50 excl. VAT / month', '€13.75 (dormant company)'],
    note: '24/7 mailbox access, free parking, direct RN7 and A8 access, parcels and registered mail handled',
  },
  {
    name: 'Mail Boxes Etc. Antibes',
    address: '2793 chemin de Saint-Claude, Antibes',
    price: ['€30 excl. VAT / month', '6- or 12-month term', '2 months free when paid annually'],
    note: 'International network, bilingual team, shipping and reprographics services',
  },
  {
    name: 'Na&Co Sophia',
    address: '1856 chemin de Saint-Bernard, Vallauris',
    price: ['from €27.50 excl. VAT / month'],
    note: 'Address on the edge of the technology park, same services as the Fontonne site',
  },
  {
    name: 'Baya Axess',
    address: '400 av. de Roumanille, Biot (Green Side)',
    price: ['not published'],
    note: '55 offices, coworking, 160 parking spaces, Saint-Philippe amenities nearby',
  },
  {
    name: 'Pearl Partner',
    address: '535 route des Lucioles, Valbonne (Les Aqueducs)',
    price: ['not published'],
    note: 'Energy-positive smart building, packages including daily scanning and call answering',
  },
  {
    name: 'Starter Business Center',
    address: '2000 route des Lucioles, Biot (Les Algorithmes)',
    price: ['not published'],
    note: '06410 Sophia Antipolis address, major corporate neighbours, free parking',
  },
  {
    name: 'Dom Box Services',
    address: '1609 chemin de Saint-Bernard, Vallauris',
    price: ['€30 excl. VAT / month', '€50 (weekly mail forwarding)'],
    note: 'Small independent operator, support with bank account opening and registration formalities',
  },
  {
    name: 'Centre d’Affaires du Loup',
    address: '806 av. des Plans, Villeneuve-Loubet',
    price: ['€30 (association, SCI, micro-entrepreneur)', '€37 to €43 (companies, depending on billing period)', '3-month term'],
    note: 'Approval no. 2021/13, scanning included, company-formation support, parcel pick-up point',
  },
  {
    name: 'Acceptis',
    address: '240 chemin des Prés, Villeneuve-Loubet',
    price: ['not published'],
    note: 'Registered-office services in a discreet setting, attached to an accountancy practice',
  },
  {
    name: 'Azur Secrétariat Services',
    address: '60 av. de Nice, Cagnes-sur-Mer',
    price: ['not published'],
    note: 'Prefecture-approved, 7-day mailbox access, close to Nice airport',
  },
];

/**
 * Sources publiques consultées pour le relevé du 8 septembre 2026.
 * `url: null` = aucune source publique atteignable à cette date : on le dit,
 * plutôt que de publier un lien mort ou une source de seconde main.
 */
const SOURCES: { name: string; url: string | null; noteFr?: string; noteEn?: string }[] = [
  { name: 'Riviera Secrétariat', url: 'https://rivierasecretariat.fr/domiciliation/' },
  { name: 'Centre d’Affaires Antibes', url: 'https://centre-affaires-antibes.com/' },
  {
    name: 'Centre d’Affaires Wilson',
    url: 'https://workin.space/fr/france/antibes/centre-d-affaires-wilson',
    noteFr: 'fiche Workin.space',
    noteEn: 'Workin.space listing',
  },
  { name: 'SelfBuro', url: 'https://www.selfburo.fr/' },
  {
    name: 'Na&Co',
    url: 'https://domiciliation-antibes.fr/',
    noteFr: 'Fontonne et Sophia',
    noteEn: 'Fontonne and Sophia sites',
  },
  { name: 'Mail Boxes Etc. Antibes', url: 'https://www.domiciliationantibes.fr/nos-tarifs' },
  { name: 'Baya Axess', url: 'https://www.baya-axess.com/' },
  { name: 'Pearl Partner', url: 'https://www.pearlpartner.com/' },
  { name: 'Starter Business Center', url: 'https://starter-business.fr/' },
  {
    name: 'Dom Box Services',
    url: null,
    noteFr: 'domboxservices.com, injoignable au 8 septembre 2026 ; tarifs relevés sur la version indexée du site',
    noteEn: 'domboxservices.com, unreachable on 8 September 2026; prices taken from the indexed version of the site',
  },
  {
    name: 'Centre d’Affaires du Loup',
    url: 'https://www.centre-affaires-du-loup.fr/domiciliation.php',
  },
  {
    name: 'Acceptis',
    url: null,
    noteFr: 'aucune source publique trouvée à cette date',
    noteEn: 'no public source found at that date',
  },
  { name: 'Azur Secrétariat Services', url: 'https://azur-secretariat-services.fr/' },
];

/** Liste des sources du relevé, en fin de section « Méthodologie ». */
function Sources({ lang }: { lang: 'fr' | 'en' }) {
  const fr = lang === 'fr';
  return (
    <>
      <h3>{fr ? 'Sources du relevé' : 'Sources of the survey'}</h3>
      <ul className="g-sources">
        <li>
          Alatere doMo -{' '}
          <Link href="/alatere-domo" className="g-inline">
            {fr ? 'notre page tarifs' : 'our own pricing page'}
          </Link>
        </li>
        {SOURCES.map((src) => {
          const note = fr ? src.noteFr : src.noteEn;
          return (
            <li key={src.name}>
              {src.name} -{' '}
              {src.url ? (
                <>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="g-inline"
                  >
                    {src.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                  </a>
                  {note ? ` (${note})` : null}
                </>
              ) : (
                <em>{note}</em>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

/**
 * Carte des zones comparées (public/blog/carte-domiciliation-antibes*.svg).
 * ⚠️ Les compteurs et la légende de la carte reprennent le tableau ci-dessous :
 * toute modification de ROWS_FR doit être répercutée dans les deux SVG.
 */
function MapFigure({ lang }: { lang: 'fr' | 'en' }) {
  const fr = lang === 'fr';
  const src = fr ? '/blog/carte-domiciliation-antibes.svg' : '/blog/carte-domiciliation-antibes-en.svg';
  return (
    <figure className="g-figure">
      <div className="g-figure__frame">
        {/* SVG statique servi depuis public/ : next/image n'apporte rien (cf. « unoptimized » pour les SVG). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={1300}
          height={900}
          loading="lazy"
          decoding="async"
          alt={
            fr
              ? 'Carte d’Antibes, Vallauris, Biot, Valbonne, Villeneuve-Loubet et Cagnes-sur-Mer situant les quinze prestataires de domiciliation comparés, répartis en cinq zones.'
              : 'Map of Antibes, Vallauris, Biot, Valbonne, Villeneuve-Loubet and Cagnes-sur-Mer showing the fifteen business-address providers compared, grouped into five areas.'
          }
        />
      </div>
      <figcaption>
        {fr ? (
          <>
            Les quinze prestataires comparés, répartis en cinq zones autour d’Antibes. Alatere doMo,
            notre propre service, est au 9 boulevard Albert 1er. Relevé du 8 septembre 2026 - fond
            de carte : contours communaux IGN / Etalab.{' '}
            <a href={src} target="_blank" rel="noopener noreferrer" className="g-inline">
              Ouvrir la carte en grand
            </a>
          </>
        ) : (
          <>
            The fifteen providers compared, grouped into five areas around Antibes. Alatere doMo,
            our own service, is at 9 boulevard Albert 1er. Surveyed 8 September 2026 - base map:
            French commune boundaries, IGN / Etalab.{' '}
            <a href={src} target="_blank" rel="noopener noreferrer" className="g-inline">
              Open the full-size map
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}

/** Tableau comparatif - défilement horizontal sur mobile. */
function Table({ rows, headers }: { rows: Row[]; headers: [string, string, string, string] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>{r.name === 'Alatere doMo' ? <strong>{r.name}</strong> : r.name}</td>
              <td>{r.address}</td>
              <td>
                {r.price.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </td>
              <td>{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Fr() {
  return (
    <>
      <p>
        Choisir une <strong>société de domiciliation</strong> autour d&rsquo;Antibes, c&rsquo;est
        arbitrer entre une adresse qui parle à vos clients, une accessibilité quotidienne et un
        budget mensuel. Nous exploitons nous-mêmes un service de domiciliation en centre-ville,
        et nous avons relevé l&rsquo;offre de quinze prestataires du secteur - Antibes centre,
        Fontonne, Saint-Claude, Sophia Antipolis, Vallauris et Villeneuve-Loubet. Voici ce que
        nous avons trouvé, y compris les cas où un autre prestataire sera un meilleur choix que le
        nôtre.
      </p>

      <p>
        <strong>L&rsquo;essentiel.</strong> Quinze prestataires proposent une domiciliation
        d&rsquo;entreprise à Antibes et dans un rayon d&rsquo;une quinzaine de kilomètres. Parmi
        ceux qui affichent leur grille, une adresse de siège social se situe entre 25 et
        43 &euro; HT par mois selon la formule et le statut juridique, et jusqu&rsquo;à
        45 &euro; pour une société étrangère ; les offres de simple boîte aux lettres démarrent au
        même niveau, autour de 25 &euro;. Plusieurs centres d&rsquo;affaires ne publient pas leurs
        prix. Le critère qui départage n&rsquo;est presque jamais le montant mensuel, mais la
        localisation - centre-ville, axe routier ou technopole - et la présence ou non de services
        sur place. Tous doivent être agréés par la préfecture pour délivrer une attestation
        acceptée par le greffe.
      </p>

      <section>
        <h2>Les six critères qui comptent vraiment</h2>
        <p>
          Une adresse de siège social se garde plusieurs années et se change au prix d&rsquo;une
          formalité au greffe. Mieux vaut arbitrer sur les bons critères dès le départ.
        </p>
        <ul>
          <li>
            <strong>L&rsquo;emplacement et l&rsquo;image</strong> : une adresse en centre-ville, en
            technopole ou en zone d&rsquo;activités ne raconte pas la même histoire sur votre
            Kbis, vos devis et vos factures.
          </li>
          <li>
            <strong>L&rsquo;accessibilité</strong> : y passerez-vous chercher votre courrier ?
            Alors la question du bus, de la gare, de l&rsquo;A8 et du stationnement devient
            centrale. Si tout passe par la réexpédition, elle ne compte plus.
          </li>
          <li>
            <strong>L&rsquo;environnement immédiat</strong> : recevoir un client dans un quartier
            avec restaurants et commerces n&rsquo;est pas la même expérience qu&rsquo;au fond
            d&rsquo;une zone d&rsquo;entreprises.
          </li>
          <li>
            <strong>Les services associés</strong> : réception du courrier, boîte accessible en
            dehors des horaires, numérisation, réexpédition, permanence téléphonique, salles de
            réunion, coworking, secrétariat.
          </li>
          <li>
            <strong>Les tarifs et les conditions</strong> : le prix mensuel HT, mais aussi les
            frais de dossier, la durée d&rsquo;engagement et ce qui est facturé en supplément.
          </li>
          <li>
            <strong>La réputation et la réactivité</strong> : un domiciliataire lent à transmettre
            un recommandé de l&rsquo;URSSAF ou du greffe vous coûtera bien plus que la différence
            de quelques euros mensuels.
          </li>
        </ul>
      </section>

      <section>
        <h2>Ce que la loi impose au domiciliataire</h2>
        <p>
          La domiciliation d&rsquo;entreprise est une activité réglementée. Seule une société{' '}
          <strong>agréée par la préfecture</strong> peut vous délivrer l&rsquo;
          <strong>attestation de domiciliation</strong> exigée par le greffe du tribunal de
          commerce. Le contrat porte sur une durée minimale de trois mois, renouvelable par tacite
          reconduction, et le domiciliataire est tenu de conserver vos justificatifs et de vous
          transmettre le courrier de l&rsquo;administration.
        </p>
        <p>
          Concrètement : demandez systématiquement le <strong>numéro d&rsquo;agrément
          préfectoral</strong> avant de signer. Une adresse fournie par un prestataire non agréé
          sera refusée au greffe, et vous perdrez des semaines sur votre immatriculation.
        </p>
      </section>

      <section>
        <h2>Le comparatif, prestataire par prestataire</h2>
        <MapFigure lang="fr" />
        <p>
          Tarifs relevés le 8 septembre 2026 auprès des sources publiques de chaque prestataire.
          Lorsque le prix n&rsquo;est pas affiché publiquement, nous l&rsquo;indiquons comme non
          communiqué plutôt que de l&rsquo;estimer. Vérifiez toujours auprès du prestataire avant
          de vous décider.
        </p>
        <Table
          rows={ROWS_FR}
          headers={['Prestataire', 'Adresse', 'Tarif indicatif', 'Ce qui le distingue']}
        />
      </section>

      <section>
        <h2>Antibes centre : l&rsquo;image et la logistique du quotidien</h2>
        <p>
          Domicilier au c&oelig;ur d&rsquo;Antibes, c&rsquo;est une adresse que vos clients situent
          immédiatement, et une logistique fluide : banques, administrations, restaurants et
          transports à quelques minutes à pied. C&rsquo;est aussi le segment où les prestataires
          proposent le plus de services sur place - et celui où les écarts de prix sont les plus
          faibles.
        </p>
        <p>
          <strong>Alatere doMo</strong> occupe le 9 boulevard Albert 1er, dans l&rsquo;immeuble Art
          nouveau La Caravelle, à cent mètres de la place de Gaulle et à un quart d&rsquo;heure à
          pied de la gare. Trois formules sans engagement : 25 &euro; HT pour une boîte aux
          lettres seule, 30 &euro; HT pour une adresse de siège social avec réception du courrier,
          50 &euro; HT avec numérisation et réexpédition incluses. Frais de dossier de 50 &euro; en
          une seule fois. Espace de coworking et salle de réunion accessibles sur place.
        </p>
        <p>
          <strong>Riviera Secrétariat</strong>, au 46 boulevard du Président Wilson, joue une autre
          partition : la domiciliation y vient avec un vrai secrétariat externalisé - permanence
          téléphonique, assistance administrative, rédaction de documents. Sa grille est publique
          et segmentée par statut, de 30 &euro; HT pour une entreprise individuelle à 45 &euro; HT
          pour une société étrangère, avec un agrément préfectoral n&deg; 2020/13. Si votre besoin
          est autant administratif que postal, c&rsquo;est un choix cohérent.
        </p>
        <p>
          Le <strong>Centre d&rsquo;Affaires Antibes</strong>, au 540 de la 1ère Avenue, affiche
          25 &euro; HT par mois pour un siège social : c&rsquo;est, à notre connaissance, le tarif
          le plus bas d&rsquo;Antibes, et il est inférieur au nôtre. L&rsquo;adresse est en
          revanche hors du centre piéton, à une quinzaine de minutes de Sophia Antipolis en
          voiture. Si le budget commande et que vous ne passerez pas chercher votre courrier à
          pied, la comparaison ne joue pas en notre faveur.
        </p>
        <p>
          Deux centres d&rsquo;affaires se partagent le boulevard du Président Wilson sans être
          liés : le <strong>Centre d&rsquo;Affaires Wilson</strong> au 82, qui ajoute au courrier
          des services de secrétariat, de traduction et de démarches en ligne dans des locaux
          accessibles PMR, et <strong>SelfBuro</strong> au 92, dont l&rsquo;atout est un parc
          d&rsquo;environ huit salles de réunion modulables. Ni l&rsquo;un ni l&rsquo;autre ne
          publie sa grille de domiciliation.
        </p>
      </section>

      <section>
        <h2>Fontonne et Saint-Claude : le budget et la voiture</h2>
        <p>
          Plus excentré, mais redoutablement efficace si vous êtes souvent en déplacement ou si vos
          clients viennent en voiture.
        </p>
        <p>
          <strong>Na&amp;Co</strong>, au 256 route de Nice, affiche l&rsquo;un des meilleurs
          rapports prix-services du secteur, avec un parking gratuit, un accès direct à la RN7 et à
          l&rsquo;A8, une boîte accessible 24h/24 et la gestion des colis et recommandés. Détail
          utile si vous mettez une structure en veille plutôt que de la fermer : les sociétés en
          sommeil bénéficient de 50 % de remise, soit 13,75 &euro; HT par mois.
        </p>
        <p>
          <strong>Mail Boxes Etc.</strong>, chemin de Saint-Claude, ajoute l&rsquo;infrastructure
          d&rsquo;un réseau international et une équipe bilingue - un atout réel si vous recevez
          des envois de l&rsquo;étranger ou si vos interlocuteurs ne parlent pas français. Le tarif
          affiché est de 30 &euro; HT par mois, mais contre un engagement de six ou douze mois,
          avec deux mois offerts en paiement annuel.
        </p>
      </section>

      <section>
        <h2>Sophia Antipolis : l&rsquo;adresse technopole</h2>
        <p>
          Si votre enjeu est d&rsquo;être associé à l&rsquo;écosystème innovation, l&rsquo;adresse
          06410 a une valeur de signal que le centre d&rsquo;Antibes n&rsquo;a pas. Trois profils
          distincts s&rsquo;y côtoient, et aucun ne publie de grille de domiciliation : comptez un
          devis personnalisé.
        </p>
        <p>
          <strong>Baya Axess</strong>, au village d&rsquo;entreprises Green Side à Biot, propose un
          lieu de travail complet - bureaux de 10 à 150 m&sup2;, salles équipées, coworking, 160
          places de parking - dans un environnement verdoyant proche du centre de vie
          Saint-Philippe.
        </p>
        <p>
          <strong>Pearl Partner</strong>, route des Lucioles à Valbonne, occupe un smart building à
          énergie positive et propose des packs administratifs complets, jusqu&rsquo;au scan
          quotidien et à la permanence téléphonique.
        </p>
        <p>
          <strong>Starter Business Center</strong>, dans le parc des Algorithmes, est plus
          fonctionnel que prestigieux, mais l&rsquo;adresse est au c&oelig;ur de la technopole, au
          voisinage de grands groupes, avec parking gratuit.
        </p>
        <p>
          À noter : <strong>Na&amp;Co</strong> dispose d&rsquo;une seconde implantation chemin de
          Saint-Bernard à Vallauris, en lisière de Sophia, qui permet une adresse technopole sur
          une grille tarifaire économique et publique.
        </p>
      </section>

      <section>
        <h2>Vallauris et Villeneuve-Loubet</h2>
        <p>
          <strong>Dom Box Services</strong>, chemin de Saint-Bernard à Vallauris, est une structure
          à taille humaine dans une zone d&rsquo;activités, adaptée aux entreprises locales qui
          veulent une adresse simple et des services de base fiables : 30 &euro; HT par mois pour
          la domiciliation et la réception du courrier, 50 &euro; HT avec réexpédition
          hebdomadaire.
        </p>
        <p>
          Le <strong>Centre d&rsquo;Affaires du Loup</strong>, à Villeneuve-Loubet, est le
          principal acteur de la zone : agréé sous le n&deg; 2021/13, tarifé selon le statut
          juridique - 30 &euro; HT pour une association, une SCI ou un micro-entrepreneur, de 37 à
          43 &euro; HT pour une société selon que vous payez à l&rsquo;année ou au trimestre - avec
          numérisation incluse, secrétariat, permanence téléphonique, aide à la création
          d&rsquo;entreprise et location de bureaux, en bordure de RN7 et à proximité de
          l&rsquo;A8. À Villeneuve-Loubet et Cagnes-sur-Mer existent aussi{' '}
          <strong>Acceptis</strong> et <strong>Azur Secrétariat Services</strong>, utiles si votre
          activité gravite plutôt vers Nice.
        </p>
      </section>

      <section>
        <h2>Quel prestataire selon votre profil</h2>
        <p>
          Nous sommes juge et partie, alors soyons précis sur les cas où nous ne sommes pas le bon
          choix.
        </p>
        <ul>
          <li>
            <strong>Le budget avant tout, à Antibes</strong> : le Centre d&rsquo;Affaires Antibes,
            à 25 &euro; HT, est moins cher que notre formule siège social. Nous ne pouvons pas
            prétendre l&rsquo;inverse.
          </li>
          <li>
            <strong>Vous êtes véhiculé et le budget prime</strong> : Na&amp;Co à la Fontonne ou
            Mail Boxes Etc. à Saint-Claude. Parking, accès autoroutier, tarif serré. Nous ne
            serons ni moins chers ni plus commodes en voiture.
          </li>
          <li>
            <strong>Vous voulez l&rsquo;adresse Sophia Antipolis</strong> : Baya, Pearl Partner ou
            Starter selon le niveau de services attendu, Na&amp;Co Sophia si le budget commande.
            Une adresse antiboise ne produira pas le même signal auprès d&rsquo;un investisseur ou
            d&rsquo;un donneur d&rsquo;ordre tech.
          </li>
          <li>
            <strong>Votre besoin est autant administratif que postal</strong> : Riviera
            Secrétariat, le Centre d&rsquo;Affaires Wilson ou le Centre d&rsquo;Affaires du Loup,
            dont c&rsquo;est le métier principal.
          </li>
          <li>
            <strong>Vous organisez régulièrement des sessions de formation</strong> : SelfBuro,
            avec son parc de salles, ou Baya à Sophia.
          </li>
          <li>
            <strong>Vous voulez une adresse en centre-ville, sans engagement, et pouvoir
            travailler sur place</strong> : c&rsquo;est notre créneau, et c&rsquo;est là que nous
            sommes objectivement les mieux placés à Antibes.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cinq questions à poser avant de signer</h2>
        <ol>
          <li>
            Quel est votre <strong>numéro d&rsquo;agrément préfectoral</strong>, et depuis quelle
            date ?
          </li>
          <li>
            Quelle est la <strong>durée d&rsquo;engagement</strong> réelle, et que se passe-t-il si
            je transfère mon siège avant l&rsquo;échéance ?
          </li>
          <li>
            Que couvre exactement le tarif mensuel, et qu&rsquo;est-ce qui est{' '}
            <strong>facturé en supplément</strong> - scan, réexpédition, recommandés, colis
            volumineux ?
          </li>
          <li>
            Sous quel <strong>délai</strong> obtenez-vous l&rsquo;attestation de domiciliation, et
            sous quel délai un recommandé de l&rsquo;administration m&rsquo;est-il signalé ?
          </li>
          <li>
            Y a-t-il des <strong>frais de dossier</strong>, de résiliation, ou de restitution du
            courrier en fin de contrat ?
          </li>
        </ol>
      </section>

      <section>
        <h2>Méthodologie et transparence</h2>
        <p>
          Ce comparatif a été établi à partir des informations publiques de chaque prestataire -
          sites web, grilles tarifaires affichées, annuaires professionnels - complétées par notre
          connaissance du terrain à Antibes. Les tarifs ont été relevés le 8 septembre 2026 et
          peuvent avoir évolué depuis ; ceux qui ne sont pas publiés ne sont pas estimés, ils sont
          signalés comme non communiqués. Un prestataire de Golfe-Juan figurant dans notre
          première version a été retiré, faute de source publique vérifiable à cette date.
        </p>
        <p>
          Alatere doMo, cité dans ce comparatif, est notre propre service de domiciliation. Nous
          avons choisi de nommer les cas où un autre prestataire répond mieux à un besoin donné, y
          compris lorsqu&rsquo;un concurrent est moins cher que nous : un comparatif qui conclurait
          invariablement en notre faveur n&rsquo;aurait aucune valeur pour vous. Si vous constatez
          une information inexacte concernant votre établissement,{' '}
          <Link href="/contact" className="g-inline">écrivez-nous</Link> et nous la corrigerons.
        </p>
        <Sources lang="fr" />
      </section>

      <section>
        <h2>Questions fréquentes</h2>

        <h3>Quel est le prix d&rsquo;une domiciliation d&rsquo;entreprise à Antibes ?</h3>
        <p>
          Parmi les prestataires dont le tarif est affiché publiquement, une adresse de siège
          social se situe entre 25 et 43 &euro; HT par mois selon la formule et le statut
          juridique, et jusqu&rsquo;à 45 &euro; pour une société étrangère ; les offres de simple
          boîte aux lettres, qui ne permettent pas d&rsquo;y domicilier un siège, démarrent
          également autour de 25 &euro;. Plusieurs centres d&rsquo;affaires ne publient pas leur
          grille. À ce montant s&rsquo;ajoutent parfois des frais de dossier et des options
          facturées séparément : numérisation, réexpédition, gestion des recommandés.
        </p>

        <h3>Une société de domiciliation doit-elle être agréée par la préfecture ?</h3>
        <p>
          Oui. La domiciliation d&rsquo;entreprise est une activité réglementée : seule une société
          agréée peut délivrer l&rsquo;attestation de domiciliation exigée par le greffe du tribunal
          de commerce. Demandez le numéro d&rsquo;agrément avant de signer - une adresse fournie par
          un prestataire non agréé sera refusée au greffe.
        </p>

        <h3>Quelle est la durée minimale d&rsquo;un contrat de domiciliation ?</h3>
        <p>
          Trois mois, renouvelable par tacite reconduction. Certains prestataires imposent un
          engagement plus long ou une facturation annuelle : c&rsquo;est un point à vérifier avant
          de signer, en même temps que les conditions de sortie si vous transférez votre siège.
        </p>

        <h3>Vaut-il mieux domicilier à Antibes centre ou à Sophia Antipolis ?</h3>
        <p>
          Le droit ne fait aucune différence, le signal commercial oui. Une adresse en centre-ville
          d&rsquo;Antibes parle à une clientèle locale et facilite le passage pour récupérer le
          courrier. Une adresse à Sophia Antipolis associe votre entreprise à l&rsquo;écosystème
          technologique, ce qui compte pour une activité tech ou une levée de fonds.
        </p>

        <h3>Peut-on changer de société de domiciliation en cours de route ?</h3>
        <p>
          Oui. C&rsquo;est un transfert de siège social : décision de l&rsquo;associé unique ou de
          l&rsquo;assemblée, publication d&rsquo;une annonce légale, dépôt au guichet unique de
          l&rsquo;INPI. Comptez quelques jours et un coût de formalité. Vérifiez au préalable les
          conditions de résiliation de votre contrat en cours.
        </p>
      </section>

      <section>
        <h2>Pour aller plus loin</h2>
        <ul>
          <li>
            <Link href="/blog/domicilier-entreprise-antibes" className="g-inline">
              Domicilier son entreprise à Antibes : les étapes
            </Link>
          </li>
          <li>
            <Link href="/blog/domiciliation-ou-bureau-antibes" className="g-inline">
              Domiciliation ou bureau : comment choisir
            </Link>
          </li>
          <li>
            <Link href="/blog/creer-son-entreprise-antibes" className="g-inline">
              Créer son entreprise à Antibes : les 6 étapes
            </Link>
          </li>
          <li>
            <Link href="/alatere-domo" className="g-inline">
              Notre service de domiciliation au 9 bd Albert 1er
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

function En() {
  return (
    <>
      <p>
        Choosing a <strong>registered-office provider</strong> around Antibes means balancing an
        address your clients recognise, day-to-day access and a monthly budget. We run a
        town-centre business-address service ourselves, and we surveyed fifteen providers across
        the area - central Antibes, La Fontonne, Saint-Claude, Sophia Antipolis, Vallauris and
        Villeneuve-Loubet. Here is what we found, including the cases where another provider suits
        you better than we do.
      </p>

      <p>
        <strong>In short.</strong> Fifteen providers offer a registered business address in Antibes
        and within about fifteen kilometres. Among those that publish their rates, a registered
        office costs between &euro;25 and &euro;43 excl. VAT per month depending on the package and
        your legal form - up to &euro;45 for a foreign company; plain mailbox plans start at around
        the same &euro;25. Several business centres do not publish prices at all. What usually
        decides the matter is not the monthly figure but the location - town centre, main road or
        technology park - and whether services are available on site. All providers must hold
        prefectural approval to issue a certificate the commercial court registry will accept.
      </p>

      <section>
        <h2>The six criteria that actually matter</h2>
        <p>
          A registered office address tends to stay with you for years, and changing it costs a
          registry formality. Better to weigh the right criteria from the start.
        </p>
        <ul>
          <li>
            <strong>Location and image</strong>: a town-centre address, a technology-park address
            and an industrial-estate address do not tell the same story on your company registration
            extract, quotes and invoices.
          </li>
          <li>
            <strong>Access</strong>: will you collect your own mail? Then buses, the railway
            station, the A8 and parking matter a great deal. If everything is forwarded, they do
            not matter at all.
          </li>
          <li>
            <strong>The immediate surroundings</strong>: meeting a client in a neighbourhood with
            restaurants and shops is not the same experience as the far end of a business park.
          </li>
          <li>
            <strong>Services</strong>: mail reception, out-of-hours mailbox access, scanning,
            forwarding, call answering, meeting rooms, coworking, secretarial support.
          </li>
          <li>
            <strong>Prices and terms</strong>: the monthly rate excluding VAT, but also set-up
            fees, the minimum term and what is billed on top.
          </li>
          <li>
            <strong>Reputation and responsiveness</strong>: a provider slow to pass on a registered
            letter from the tax office or the registry will cost you far more than a few euros a
            month.
          </li>
        </ul>
      </section>

      <section>
        <h2>What the law requires of the provider</h2>
        <p>
          Providing a registered business address is a regulated activity in France. Only a company{' '}
          <strong>approved by the préfecture</strong> can issue the{' '}
          <strong>certificate of domiciliation</strong> required by the commercial court registry.
          The contract runs for a minimum of three months, renewable by tacit agreement, and the
          provider must keep your supporting documents and pass on official correspondence.
        </p>
        <p>
          In practice: always ask for the <strong>prefectural approval number</strong> before you
          sign. An address supplied by an unapproved provider will be rejected by the registry, and
          you will lose weeks on your registration.
        </p>
      </section>

      <section>
        <h2>The comparison, provider by provider</h2>
        <MapFigure lang="en" />
        <p>
          Prices recorded on 8 September 2026 from each provider&rsquo;s public sources. Where a
          price is not published, we say so rather than estimate it. Always check with the provider
          before deciding.
        </p>
        <Table
          rows={ROWS_EN}
          headers={['Provider', 'Address', 'Indicative price', 'What sets it apart']}
        />
      </section>

      <section>
        <h2>Central Antibes: image and everyday logistics</h2>
        <p>
          A registered address in the heart of Antibes is one your clients place immediately, with
          smooth logistics: banks, public offices, restaurants and transport a few minutes&rsquo;
          walk away. It is also the segment where providers offer the most on-site services - and
          where price gaps are narrowest.
        </p>
        <p>
          <strong>Alatere doMo</strong> occupies 9 boulevard Albert 1er, in the Art Nouveau La
          Caravelle building, a hundred metres from place de Gaulle and fifteen minutes&rsquo; walk
          from the station. Three plans, no commitment: &euro;25 excl. VAT for a mailbox only,
          &euro;30 for a registered office address with mail reception, &euro;50 with scanning and
          forwarding included. A one-off &euro;50 set-up fee. Coworking space and meeting room
          available on site.
        </p>
        <p>
          <strong>Riviera Secrétariat</strong>, at 46 boulevard du Président Wilson, plays a
          different tune: the address comes with genuine outsourced secretarial services - call
          answering, administrative support, document drafting. Its rates are public and tiered by
          legal form, from &euro;30 excl. VAT for a sole trader to &euro;45 for a foreign company,
          under prefectural approval no. 2020/13. If your need is as much administrative as postal,
          it is a coherent choice.
        </p>
        <p>
          <strong>Centre d&rsquo;Affaires Antibes</strong>, at 540 1ère Avenue, advertises
          &euro;25 excl. VAT a month for a registered office: as far as we know, the lowest price in
          Antibes, and lower than ours. The address is, however, outside the pedestrian centre,
          about fifteen minutes from Sophia Antipolis by car. If budget decides and you will not be
          collecting mail on foot, the comparison does not favour us.
        </p>
        <p>
          Two unrelated business centres share boulevard du Président Wilson:{' '}
          <strong>Centre d&rsquo;Affaires Wilson</strong> at no. 82, which adds secretarial work,
          translation and online formalities to mail handling in step-free premises, and{' '}
          <strong>SelfBuro</strong> at no. 92, whose strength is a set of around eight modular
          meeting rooms. Neither publishes its business-address rates.
        </p>
      </section>

      <section>
        <h2>La Fontonne and Saint-Claude: budget and the car</h2>
        <p>
          Further out, but highly effective if you are often on the road or if your clients arrive
          by car.
        </p>
        <p>
          <strong>Na&amp;Co</strong>, at 256 route de Nice, offers one of the best price-to-service
          ratios in the area: free parking, direct access to the RN7 and the A8, 24/7 mailbox
          access and handling of parcels and registered mail. A useful detail if you are mothballing
          a company rather than closing it: dormant companies get a 50 % discount, i.e. &euro;13.75
          excl. VAT a month.
        </p>
        <p>
          <strong>Mail Boxes Etc.</strong>, on chemin de Saint-Claude, adds the infrastructure of an
          international network and a bilingual team - a real advantage if you receive shipments
          from abroad or your contacts do not speak French. The advertised rate is &euro;30 excl.
          VAT a month, but against a six- or twelve-month term, with two months free when paid
          annually.
        </p>
      </section>

      <section>
        <h2>Sophia Antipolis: the technology-park address</h2>
        <p>
          If what matters is being associated with the innovation ecosystem, the 06410 postcode
          carries a signal that central Antibes does not. Three distinct profiles sit side by side,
          and none publishes business-address rates: expect a bespoke quote.
        </p>
        <p>
          <strong>Baya Axess</strong>, in the Green Side business village in Biot, offers a complete
          workplace - offices from 10 to 150 m&sup2;, equipped rooms, coworking, 160 parking spaces
          - in green surroundings close to the Saint-Philippe amenities centre.
        </p>
        <p>
          <strong>Pearl Partner</strong>, on route des Lucioles in Valbonne, occupies an
          energy-positive smart building and offers full administrative packages, up to daily
          scanning and call answering.
        </p>
        <p>
          <strong>Starter Business Center</strong>, in the Algorithmes park, is more functional than
          prestigious, but the address sits at the heart of the technology park, among major
          corporate neighbours, with free parking.
        </p>
        <p>
          Worth noting: <strong>Na&amp;Co</strong> has a second site on chemin de Saint-Bernard in
          Vallauris, on the edge of Sophia, which gives you a technology-park address on a low,
          published price list.
        </p>
      </section>

      <section>
        <h2>Vallauris and Villeneuve-Loubet</h2>
        <p>
          <strong>Dom Box Services</strong>, on chemin de Saint-Bernard in Vallauris, is a small
          operator on a business estate, suited to local companies wanting a simple address and
          reliable basic services: &euro;30 excl. VAT a month for the address and mail reception,
          &euro;50 with weekly forwarding.
        </p>
        <p>
          <strong>Centre d&rsquo;Affaires du Loup</strong>, in Villeneuve-Loubet, is the main player
          in the area: approved under no. 2021/13 and priced by legal form - &euro;30 excl. VAT for
          an association, an SCI or a micro-entrepreneur, &euro;37 to &euro;43 for a company
          depending on whether you pay annually or quarterly - with scanning included, secretarial
          services, call answering, company-formation support and office rental, beside the RN7 and
          close to the A8. <strong>Acceptis</strong> and{' '}
          <strong>Azur Secrétariat Services</strong> also operate in Villeneuve-Loubet and
          Cagnes-sur-Mer, useful if your business gravitates towards Nice.
        </p>
      </section>

      <section>
        <h2>Which provider suits which profile</h2>
        <p>
          We are both judge and party here, so let us be precise about the cases where we are not
          the right choice.
        </p>
        <ul>
          <li>
            <strong>Budget first, staying in Antibes</strong>: Centre d&rsquo;Affaires Antibes, at
            &euro;25 excl. VAT, is cheaper than our registered-office plan. We cannot pretend
            otherwise.
          </li>
          <li>
            <strong>You drive and budget decides</strong>: Na&amp;Co at La Fontonne or Mail Boxes
            Etc. at Saint-Claude. Parking, motorway access, tight pricing. We will be neither
            cheaper nor more convenient by car.
          </li>
          <li>
            <strong>You want the Sophia Antipolis address</strong>: Baya, Pearl Partner or Starter
            depending on the level of service you expect, Na&amp;Co Sophia if budget decides. An
            Antibes address will not send the same signal to an investor or a tech client.
          </li>
          <li>
            <strong>Your need is as administrative as it is postal</strong>: Riviera Secrétariat,
            Centre d&rsquo;Affaires Wilson or Centre d&rsquo;Affaires du Loup, for whom that is the
            core business.
          </li>
          <li>
            <strong>You run training sessions regularly</strong>: SelfBuro, with its meeting rooms,
            or Baya in Sophia.
          </li>
          <li>
            <strong>You want a town-centre address, no commitment, and somewhere to work on
            site</strong>: that is our niche, and it is where we are objectively best placed in
            Antibes.
          </li>
        </ul>
      </section>

      <section>
        <h2>Five questions to ask before signing</h2>
        <ol>
          <li>
            What is your <strong>prefectural approval number</strong>, and since when?
          </li>
          <li>
            What is the real <strong>minimum term</strong>, and what happens if I move my
            registered office before it ends?
          </li>
          <li>
            What exactly does the monthly rate cover, and what is <strong>billed on top</strong> -
            scanning, forwarding, registered letters, bulky parcels?
          </li>
          <li>
            How quickly do you issue the certificate of domiciliation, and how quickly am I told
            about a registered letter from the authorities?
          </li>
          <li>
            Are there <strong>set-up fees</strong>, cancellation fees, or charges for returning mail
            at the end of the contract?
          </li>
        </ol>
      </section>

      <section>
        <h2>Method and transparency</h2>
        <p>
          This comparison was built from each provider&rsquo;s public information - websites,
          published price lists, business directories - together with our own knowledge of the
          ground in Antibes. Prices were recorded on 8 September 2026 and may have changed since;
          those that are not published are not estimated, they are marked as not published. One
          Golfe-Juan provider listed in our first version has been removed, for lack of a verifiable
          public source at that date.
        </p>
        <p>
          Alatere doMo, cited in this comparison, is our own business-address service. We chose to
          name the cases where another provider answers a given need better, including where a
          competitor is cheaper than we are: a comparison that always concluded in our favour would
          be worthless to you. If you spot inaccurate information about your own business,{' '}
          <Link href="/contact" className="g-inline">write to us</Link> and we will correct it.
        </p>
        <Sources lang="en" />
      </section>

      <section>
        <h2>Frequently asked questions</h2>

        <h3>How much does a registered business address in Antibes cost?</h3>
        <p>
          Among providers that publish their rates, a registered office costs between &euro;25 and
          &euro;43 excl. VAT per month depending on the package and legal form, and up to &euro;45
          for a foreign company; plain mailbox plans, which cannot host a registered office, also
          start at around &euro;25. Several business centres do not publish a price list. Set-up
          fees and separately billed options - scanning, forwarding, registered-mail handling - are
          sometimes added on top.
        </p>

        <h3>Must a business-address provider be approved by the préfecture?</h3>
        <p>
          Yes. Providing a registered business address is a regulated activity: only an approved
          company can issue the certificate of domiciliation required by the commercial court
          registry. Ask for the approval number before signing - an address supplied by an
          unapproved provider will be rejected by the registry.
        </p>

        <h3>What is the minimum term of a domiciliation contract?</h3>
        <p>
          Three months, renewable by tacit agreement. Some providers impose a longer term or annual
          billing: check that before signing, along with the exit terms if you move your registered
          office.
        </p>

        <h3>Is it better to register in central Antibes or in Sophia Antipolis?</h3>
        <p>
          The law draws no distinction; the commercial signal does. A central Antibes address speaks
          to local clients and makes collecting mail easy. A Sophia Antipolis address associates
          your company with the technology ecosystem, which counts for a tech business or a
          fundraising round.
        </p>

        <h3>Can you change business-address provider along the way?</h3>
        <p>
          Yes. It is a transfer of registered office: a decision by the sole shareholder or the
          general meeting, publication of a legal notice, and filing with the INPI one-stop shop.
          Allow a few days and a formality fee. Check the cancellation terms of your current
          contract first.
        </p>
      </section>

      <section>
        <h2>Read next</h2>
        <ul>
          <li>
            <Link href="/blog/domicilier-entreprise-antibes" className="g-inline">
              How to register your company&rsquo;s address in Antibes
            </Link>
          </li>
          <li>
            <Link href="/blog/domiciliation-ou-bureau-antibes" className="g-inline">
              Business address or office: how to choose
            </Link>
          </li>
          <li>
            <Link href="/alatere-domo" className="g-inline">
              Our business-address service at 9 bd Albert 1er
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
