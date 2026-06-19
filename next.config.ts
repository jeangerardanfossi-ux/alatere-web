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
  { from: "/formations-en-webmarketing-communication-digitale", to: "/alatere-forma" },
  { from: "/formations-en-webmarketing-documentation", to: "/alatere-forma" },
  { from: "/formations-en-immobilier", to: "/alatere-forma" },
  { from: "/partenariat-ecoles-centres-et-organismes-de-formation", to: "/alatere-forma" },
  { from: "/formateurs-en-webmarketig-communication-digitale", to: "/alatere-forma" },
  { from: "/devenir-plus-productif-grace-formation-notion", to: "/alatere-forma" },
  { from: "/formation-canva-creation-de-contenu-visuel", to: "/alatere-forma" },
  { from: "/photoshop-initiation-a-la-retouche-montage-photo", to: "/alatere-forma" },
  { from: "/photoshop-creer-des-supports-de-communication", to: "/alatere-forma" },
  { from: "/ameliorer-sa-visibilite-grace-aux-reseaux-sociaux", to: "/alatere-forma" },
  { from: "/utiliser-les-fonctionnalites-automatisees-de-google-ads", to: "/alatere-forma" },
  { from: "/se-promouvoir-avec-facebook-ads", to: "/alatere-forma" },
  { from: "/se-promouvoir-sur-google-avec-google-ads", to: "/alatere-forma" },
  { from: "/les-principes-de-bases-du-referencement-et-seo", to: "/alatere-forma" },
  { from: "/mettre-en-place-une-strategie-web-to-store", to: "/alatere-forma" },
  // Immobilier
  { from: "/demembrement-de-la-propriete", to: "/alatere-forma" },
  { from: "/copropriete-charges-travaux-et-contentieux", to: "/alatere-forma" },
  { from: "/les-fondamentaux-reglementaires-de-la-profession-dagent-immobilier-reviser-et-actualiser-ses-connaissances", to: "/alatere-forma" },
  { from: "/lessentiel-juridique-de-la-vente-immobiliere", to: "/alatere-forma" },
  { from: "/reglementation-et-deontologie-des-professions-de-limmobilier", to: "/alatere-forma" },
  { from: "/la-cession-dun-fonds-de-commerce", to: "/alatere-forma" },
  { from: "/la-gestion-des-revenus-locatifs-de-la-conclusion-du-bail-au-recouvrement-des-loyers-et-contentieux", to: "/alatere-forma" },
  { from: "/maitriser-le-cadre-juridique-de-la-location-meublee-et-de-la-location-saisonniere", to: "/alatere-forma" },
  // Slugs avec ligatures typographiques (ﬁ / ﬀ)
  { from: "/tracﬁn-la-lutte-contre-le-blanchiment-dargent-et-le-ﬁnancement-du-terrorisme-en-immobilier-lab-ft", to: "/alatere-forma" },
  { from: "/la-fiscalite-des-revenus-fonciers-lies-aux-biens-aﬀectes-a-lhabitation", to: "/alatere-forma" },
];

const nextConfig: NextConfig = {
  // Enable the SWC styled-components transform (ssr + displayName).
  // Required so Grommet's styled-components styles hydrate without a flash.
  compiler: {
    styledComponents: true,
  },

  async redirects() {
    const rules = wpRedirects.map((r) => ({
      source: r.from,
      destination: r.to,
      permanent: true,
    }));
    // Catégories WordPress → page forMa (wildcard)
    rules.push({ source: "/category/:slug*", destination: "/alatere-forma", permanent: true });
    return rules;
  },
};

export default nextConfig;
