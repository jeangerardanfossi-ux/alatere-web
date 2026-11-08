import type { NextConfig } from "next";

/**
 * Redirections 301 depuis les anciennes URL WordPress (alatere-web.com)
 * vers les pages du nouveau site. À conserver après la mise en ligne pour
 * préserver le référencement et ne pas casser les liens existants.
 *
 * Les pages dont l'URL est identique (/, /mentions-legales,
 * /conditions-generales-de-vente, /accessibilite-et-handicap) ne sont pas
 * listées : le nouveau site les sert déjà au même chemin.
 */
const wpRedirects = [
  // --- Identité ---
  { from: "/qui-sommes-nous", to: "/organisme-de-formation" },

  // --- Les 4 pôles + toDo ---
  { from: "/agence-de-webmarketing-et-communication-digitale", to: "/alatere-ecom" },
  { from: "/formations-professionnelles", to: "/alatere-forma" },
  { from: "/domiciliation-d-entreprises-antibes-juan-les-pins", to: "/alatere-domo" },
  { from: "/domiciliation-commerciale-centre-ville-antibes", to: "/alatere-domo" },
  { from: "/espace-de-coworking", to: "/alatere-cowo" },
  { from: "/secretariat", to: "/alatere-todo.html" },

  // --- Formulaires de contact ---
  { from: "/formulaire-de-contact-et-demande-information", to: "/contact" },
  { from: "/formulaire-de-contact-general", to: "/contact" },
  { from: "/formulaire-de-contact-formations", to: "/contact?pole=forma" },
  { from: "/landing-page-formulaire-de-contact-formations", to: "/contact?pole=forma" },
  { from: "/landing-page-formulaire-coworking", to: "/contact?pole=cowo" },

  // --- Financement ---
  { from: "/financement-formation-professionnelle", to: "/blog/financer-formation-opco-faf" },
  { from: "/diagnostic-financements-formation", to: "/blog/financer-formation-opco-faf" },
  { from: "/calcul-buget-de-formation-entreprise-opco", to: "/blog/financer-formation-opco-faf" },

  // --- Pages de formations individuelles (détail désormais sur le catalogue) ---
  { from: "/nos-dernieres-formations", to: "/alatere-forma" },
  { from: "/planning-des-formations-professionnelles", to: "/alatere-forma" },
  { from: "/formation-professionnelle-sur-mesure", to: "/alatere-forma" },
  { from: "/formations-en-webmarketing-communication-digitale", to: "/alatere-forma/webmarketing" },
  { from: "/formations-en-webmarketing-documentation", to: "/alatere-forma/webmarketing" },
  { from: "/formations-en-langues", to: "/alatere-forma/langues" },
  { from: "/formations-en-communication-digitale", to: "/alatere-forma/communication-digitale" },
  { from: "/formations-en-intelligence-artificielle", to: "/alatere-forma/intelligence-artificielle" },
  { from: "/formations", to: "/alatere-forma" },
  { from: "/nos-formations", to: "/alatere-forma" },
  { from: "/catalogue-des-formations", to: "/alatere-forma" },
  { from: "/formations-en-immobilier", to: "/alatere-forma/immobilier" },
  { from: "/partenariat-ecoles-centres-et-organismes-de-formation", to: "/alatere-forma" },
  { from: "/formateurs-en-webmarketig-communication-digitale", to: "/alatere-forma/formateurs" },
  { from: "/devenir-plus-productif-grace-formation-notion", to: "/alatere-forma" },
  { from: "/formation-wordpress-avec-richard-solaro", to: "/alatere-forma/webmarketing" },
  { from: "/formation-canva-creation-de-contenu-visuel", to: "/alatere-forma/communication-digitale" },
  { from: "/photoshop-initiation-a-la-retouche-montage-photo", to: "/alatere-forma/communication-digitale" },
  { from: "/photoshop-creer-des-supports-de-communication", to: "/alatere-forma/communication-digitale" },
  { from: "/ameliorer-sa-visibilite-grace-aux-reseaux-sociaux", to: "/alatere-forma/communication-digitale" },
  { from: "/utiliser-les-fonctionnalites-automatisees-de-google-ads", to: "/alatere-forma/webmarketing" },
  { from: "/se-promouvoir-avec-facebook-ads", to: "/alatere-forma/webmarketing" },
  { from: "/se-promouvoir-sur-google-avec-google-ads", to: "/alatere-forma/webmarketing" },
  { from: "/les-principes-de-bases-du-referencement-et-seo", to: "/alatere-forma/webmarketing" },
  { from: "/mettre-en-place-une-strategie-web-to-store", to: "/alatere-forma/webmarketing" },
  // Immobilier
  { from: "/demembrement-de-la-propriete", to: "/alatere-forma/immobilier" },
  { from: "/copropriete-charges-travaux-et-contentieux", to: "/alatere-forma/immobilier" },
  { from: "/les-fondamentaux-reglementaires-de-la-profession-dagent-immobilier-reviser-et-actualiser-ses-connaissances", to: "/alatere-forma/immobilier" },
  { from: "/lessentiel-juridique-de-la-vente-immobiliere", to: "/alatere-forma/immobilier" },
  { from: "/reglementation-et-deontologie-des-professions-de-limmobilier", to: "/alatere-forma/immobilier" },
  { from: "/la-cession-dun-fonds-de-commerce", to: "/alatere-forma/immobilier" },
  { from: "/la-gestion-des-revenus-locatifs-de-la-conclusion-du-bail-au-recouvrement-des-loyers-et-contentieux", to: "/alatere-forma/immobilier" },
  { from: "/maitriser-le-cadre-juridique-de-la-location-meublee-et-de-la-location-saisonniere", to: "/alatere-forma/immobilier" },
  // Slugs avec ligatures typographiques (ﬁ = U+FB01, ﬀ = U+FB00).
  // Le `source` doit être écrit **percent-encodé** : le navigateur et les
  // crawlers envoient ces caractères sous la forme %EF%AC%81 / %EF%AC%80, et
  // Next.js compare le chemin brut. Avec la ligature littérale, la règle ne
  // matchait jamais et l'URL tombait en 404.
  { from: "/trac%EF%AC%81n-la-lutte-contre-le-blanchiment-dargent-et-le-%EF%AC%81nancement-du-terrorisme-en-immobilier-lab-ft", to: "/alatere-forma/immobilier" },
  { from: "/la-fiscalite-des-revenus-fonciers-lies-aux-biens-a%EF%AC%80ectes-a-lhabitation", to: "/alatere-forma/immobilier" },
];

const nextConfig: NextConfig = {
  // Enable the SWC styled-components transform (ssr + displayName).
  // Required so Grommet's styled-components styles hydrate without a flash.
  compiler: {
    styledComponents: true,
  },

  // SEO : on désactive la redirection automatique « /page/ → /page » de
  // Next.js pour qu'une ancienne URL WordPress (qui finissait par « / »)
  // atteigne sa nouvelle page en UN SEUL saut, au lieu de deux
  // (/ancienne/ → /ancienne → /nouvelle). La règle générique en fin de
  // liste rétablit ensuite le comportement normal pour toutes les autres URL.
  skipTrailingSlashRedirect: true,

  async redirects() {
    // On force le code **301** au lieu du 308 renvoyé par `permanent: true`.
    // Les deux disent « déménagement définitif » et Google les traite à
    // l'identique, mais 301 est le seul que lisent sans ambiguïté tous les
    // crawlers, outils d'audit SEO et clients HTTP anciens.
    // `statusCode` et `permanent` sont mutuellement exclusifs.
    const rules: { source: string; destination: string; statusCode: 301 }[] = [];
    const to301 = (source: string, destination: string) => {
      rules.push({ source, destination, statusCode: 301 });
    };

    for (const r of wpRedirects) {
      // Les deux variantes (avec et sans « / » final) vont directement à la cible.
      to301(r.from, r.to);
      to301(`${r.from}/`, r.to);
    }

    // Catégories WordPress → page forMa (wildcard, avec ou sans « / » final)
    to301("/category/:slug*/", "/alatere-forma");
    to301("/category/:slug*", "/alatere-forma");

    // Filet de sécurité SEO : toute ancienne URL de type « /formation(s)-… »
    // non listée plus haut (variantes, slugs oubliés du sitemap WordPress)
    // part sur le pôle forMa au lieu de renvoyer un 404. Un 404 laisse l'URL
    // vivre dans l'index et concurrencer /alatere-forma ; un 301 lui transfère
    // son référencement. Les règles explicites ci-dessus restent prioritaires
    // car elles sont déclarées avant.
    to301("/:slug(formations?-.*)/", "/alatere-forma");
    to301("/:slug(formations?-.*)", "/alatere-forma");

    // Règle générique (doit rester la dernière) : « /page/ » → « /page »,
    // équivalent de la redirection par défaut de Next.js désactivée ci-dessus.
    to301("/:path+/", "/:path+");
    return rules;
  },
};

export default nextConfig;
