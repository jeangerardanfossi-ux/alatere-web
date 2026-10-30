/**
 * Logos clients — source unique, isolée de `realisations.ts` (40 Ko) pour que
 * la bannière de l'accueil n'embarque pas tout le dossier des réalisations
 * dans le bundle client.
 */
/**
 * Mur de logos — « affichés avec l'accord de nos clients ».
 * Tant que la liste est vide, la maquette affiche des emplacements vides.
 */
export type ClientLogo = { name: string; src: string; href?: string };
export const CLIENT_LOGOS: ClientLogo[] = [
  // Chaque logo pointe vers le site officiel du client, ouvert dans un nouvel onglet
  // (voir le rendu du mur dans `ClientsRealisationsPage`). `href` absent = logo non
  // cliquable : on ne lie que les URL vérifiées.
  {
    name: 'Laforêt Immobilier Antibes',
    src: '/logos/laforet.png',
    href: 'https://www.laforet.com/agence-immobiliere/antibes',
  },
  { name: 'Datalinx', src: '/logos/datalinx.png', href: 'https://www.datalinx.fr/' },
  {
    name: 'MAV Développement Immobilier',
    src: '/logos/mav.png',
    href: 'https://mav-developpement-immobilier.fr/fr/',
  },
  // URL reprise du logotype lui-même, qui porte la mention « www.2iarchitecture.com ».
  {
    name: '2i Architecture',
    src: '/logos/2i-architecture.png',
    href: 'https://2iarchitecture.com/',
  },
  {
    name: 'Rocher Mistral',
    src: '/logos/rocher-mistral.png',
    href: 'https://www.rochermistral.com',
  },
  {
    name: 'AXEO Services Antibes - Cagnes-sur-Mer',
    src: '/logos/axeo-services.png',
    href: 'https://www.axeoservices.fr/agency/400-axeo-services-antibes',
  },
  {
    name: 'Kiwanis Antibes Juan-les-Pins',
    src: '/logos/kiwanis-antibes.png',
    href: 'https://www.kiwanis.fr/club/antibes-juan-les-pins/',
  },
  { name: 'Logic Santé', src: '/logos/logic-sante.png', href: 'https://www.logicsante.com/' },
  // bestofbrain.fr redirige vers le domaine .eu : on pointe directement la cible.
  { name: 'Best of Brain', src: '/logos/best-of-brain.png', href: 'https://bestofbrain.eu/' },
  {
    name: 'Julien de Savignac',
    src: '/logos/julien-de-savignac.png',
    href: 'https://www.julien-de-savignac.com/fr/',
  },
  { name: 'ASNOV - Assistante virtuelle', src: '/logos/asnov.png', href: 'https://www.asnov.fr' },
  // Logo vectoriel officiel repris du site du client (vernassa.fr/images/logo.svg),
  // signe + logotype. Recoloré en noir : le SVG publié est blanc, destiné à un
  // fond sombre, et disparaîtrait sur le fond clair du mur.
  { name: 'Vernassa Électricité', src: '/logos/vernassa.svg', href: 'https://www.vernassa.fr' },
  // Logo repris de la page publique du client ; l'habillage carré gris ajouté par
  // Facebook autour du disque a été remplacé par du blanc, le logo n'est pas retouché.
  // Agence MMA de Nicolas Bohême : sa vitrine est la page d'agence du réseau MMA.
  {
    name: 'Bohême Assurances - MMA Antibes',
    src: '/logos/boheme-assurances.png',
    href: 'https://agence.mma.fr/antibes/',
  },
  // Marque officielle reprise de lunetierducap.com/favicon.svg : leur site ne
  // publie pas de logotype, seulement ce monogramme.
  {
    name: 'Lunetier du Cap',
    src: '/logos/lunetier-du-cap.png',
    href: 'https://lunetierducap.com/',
  },
  // Logotype officiel repris de logeazur.fr, recoloré en sombre : la version
  // publiée est blanche, faite pour leur en-tête, et disparaîtrait sur le mur.
  { name: 'Logéazur', src: '/logos/logeazur.png', href: 'https://www.logeazur.fr/' },
  { name: 'AS Elec by Tony', src: '/logos/as-elec.png', href: 'https://www.aselec06.fr/' },
  {
    name: 'Christel Pocachard Yachting',
    src: '/logos/cpy-yachting.svg',
    href: 'https://www.christelpocachardyachting.com/',
  },
  // Logotype officiel repris de scapedesign.com, recoloré en sombre : la version
  // publiée est blanche, prévue pour leur en-tête photo.
  { name: 'Scape Design', src: '/logos/scape-design.png', href: 'https://www.scapedesign.com/en/' },
  {
    name: 'Pergola Riviera',
    src: '/logos/pergola-riviera.png',
    href: 'https://www.pergolariviera.com/',
  },
  {
    name: 'Nice Fenêtres',
    src: '/logos/nice-fenetres.svg',
    href: 'https://www.nicefenetres-avis.com/',
  },
  {
    name: 'La Dimension Créative',
    src: '/logos/la-dimension-creative.png',
    href: 'https://www.la-dimension-creative.com/',
  },
  // Logotype officiel repris de la boutique du client, détouré du fond blanc.
  {
    name: 'TerraBella Inspiration',
    src: '/logos/terrabella.png',
    href: 'https://www.terrabella-inspiration.fr/',
  },
  // Logo repris du site du client, publié en clair sur fond noir : détouré et
  // recoloré en sombre pour le fond clair du mur, l'or de la lettre Z est conservé.
  {
    name: 'AZ Chef Signature',
    src: '/logos/az-chef.png',
    href: 'https://azchef-signature.eatbu.com/',
  },
  // Client ecoM. Pas de `href` : la société a été revendue en 2016 et vinazur.fr
  // ne répond plus — on ne lie que des URL vérifiées.
  { name: 'Vinazur - vins de Provence', src: '/logos/vinazur.png' },
];

/** Nombre minimal d'emplacements affichés : les logos manquants restent en pointillés. */
export const LOGO_SLOTS = 18;
