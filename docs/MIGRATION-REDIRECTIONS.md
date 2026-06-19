# Migration WordPress → nouveau site (Vercel) — précautions redirections

Contexte : le domaine `alatere-web.com` (IONOS) pointe aujourd'hui vers un site
WordPress. La bascule vers le nouveau site Next.js (Vercel) **remplace** ce
WordPress. Objectif : ne perdre **aucun référencement** ni aucun visiteur.

---

## 1. AVANT la bascule — inventaire & sauvegarde

- [ ] **Sauvegarder le WordPress** (fichiers + base) avant toute opération.
- [ ] **Lister les anciennes URLs** qui ont de la valeur :
  - `alatere-web.com/sitemap.xml` ou `/wp-sitemap.xml` (toutes les pages indexées) ;
  - **Google Search Console** → pages indexées + requêtes (ce qui amène du trafic) ;
  - Analytics → pages les plus visitées ;
  - les pages qui ont des **backlinks** (liens entrants depuis d'autres sites).
- [ ] **Construire la table de correspondance** « ancienne URL → nouvelle page ».

## 2. Les redirections (le cœur)

- [ ] Toute ancienne URL **qui n'existe pas à l'identique** sur le nouveau site
      doit être redirigée en **301 (permanente)** — c'est ce qui transmet le
      référencement à la nouvelle page.
- [ ] **Rediriger vers la page la plus pertinente**, pas tout vers l'accueil
      (ça dilue le SEO et frustre le visiteur). Exemple :
  - `/nos-formations` → `/alatere-forma`
  - `/domiciliation` → `/alatere-domo`
  - `/coworking` → `/alatere-cowo`
  - `/contact-2` → `/contact`
- [ ] **1 seul saut** par redirection : éviter les chaînes A → B → C.
- [ ] **Pas de boucle** de redirection (A → A).
- [ ] **Pages supprimées sans équivalent** : 301 vers la rubrique parente la
      plus proche (ou, si vraiment retirée définitivement, code **410 Gone**).
- [ ] **Anciens fichiers** (images, PDF en `/wp-content/uploads/…`) référencés
      ailleurs : rediriger vers l'équivalent, ou les remettre à la même adresse.
- [ ] **Cas WordPress fréquents à traiter** : `/?p=123`, `/category/…`,
      `/tag/…`, `/author/…`, `/feed/…` (flux RSS). `/wp-admin`, `/wp-login.php`
      peuvent rester en 404.

**Où les déclarer sur Vercel** : dans `next.config.ts` via `async redirects()`
(versionné dans le code, recommandé) — ou un `vercel.json`. Format :

```ts
async redirects() {
  return [
    { source: '/nos-formations', destination: '/alatere-forma', permanent: true },
    { source: '/domiciliation',  destination: '/alatere-domo',  permanent: true },
    // …
  ];
}
```

> `permanent: true` = 301. **✅ FAIT** : les redirections ci-dessous sont déjà
> codées dans `next.config.ts` (elles s'activeront automatiquement au déploiement
> Vercel). Testées en local : `/ancienne-url` → 308 vers la bonne page.

### Table de correspondance réalisée (sitemap WordPress du 18/06/2026)

| Ancienne URL WordPress | → Nouvelle page |
|---|---|
| `/` · `/mentions-legales` · `/conditions-generales-de-vente` · `/accessibilite-et-handicap` | *identiques (aucune redirection)* |
| `/qui-sommes-nous` | `/organisme-de-formation` |
| `/agence-de-webmarketing-et-communication-digitale` | `/alatere-ecom` |
| `/formations-professionnelles` | `/alatere-forma` |
| `/domiciliation-d-entreprises-antibes-juan-les-pins` · `/domiciliation-commerciale-centre-ville-antibes` | `/alatere-domo` |
| `/espace-de-coworking` | `/alatere-cowo` |
| `/secretariat` | `/alatere-todo.html` |
| `/formulaire-de-contact-et-demande-information` · `/formulaire-de-contact-general` | `/contact` |
| `/formulaire-de-contact-formations` · `/landing-page-formulaire-de-contact-formations` | `/contact?pole=forma` |
| `/landing-page-formulaire-coworking` | `/contact?pole=cowo` |
| `/financement-formation-professionnelle` · `/diagnostic-financements-formation` · `/calcul-buget-de-formation-entreprise-opco` | `/blog/financer-formation-opco-faf` |
| **~30 pages de formations individuelles** (Notion, Canva, Photoshop, SEO, Google/Facebook Ads, web-to-store, immobilier : LAB-FT, location meublée, fiscalité foncière, copropriété, démembrement, cession de fonds, gestion locative…), `/nos-dernieres-formations`, `/planning-…`, `/partenariat-…`, `/formateurs-…` | `/alatere-forma` |
| `/category/immobilier` · `/category/langues` · `/category/webmarketing` · `/category/outils-numeriques` | `/alatere-forma` (wildcard `/category/:slug*`) |

> Détail des cours individuels regroupé sur `/alatere-forma` car le détail de
> chaque formation vit désormais sur le **catalogue externe** (catalogueformpro.com).

## 3. www vs sans-www (une seule version canonique)

- [ ] Le site est canonique sur **`www.alatere-web.com`** (metadataBase + sitemap).
- [ ] Dans Vercel, ajouter les **deux** domaines et configurer
      `alatere-web.com` → **redirection 301 vers** `www.alatere-web.com`.
- [ ] Forcer **http → https** (automatique sur Vercel).

## 4. DNS & messagerie — précautions CRITIQUES (IONOS)

- [ ] **NE PAS toucher aux enregistrements `MX`** → ta messagerie
      `@alatere-web.com` (et Brevo) doit continuer de fonctionner.
- [ ] **Garder les DNS chez IONOS** : ne changer que les enregistrements du
      **site web** (A pour la racine + CNAME pour `www`) vers les valeurs que
      Vercel indique. **Ne pas basculer vers les nameservers de Vercel**
      (sinon il faudrait recréer MX, DKIM/SPF Brevo, etc.).
- [ ] **Baisser le TTL** des enregistrements A/CNAME du site à ~300 s
      **24–48 h avant** la bascule → propagation rapide. Le remonter ensuite.

## 5. Tester AVANT et APRÈS

- [ ] **Avant** : tout valider sur l'URL gratuite `…vercel.app` (pages,
      formulaire réel, blog) **sans toucher au domaine**.
- [ ] **Après** la bascule :
  - HTTPS actif (certificat auto Vercel) ;
  - un **échantillon d'anciennes URLs** renvoie bien un **301** vers la bonne
    page (test : `curl -I https://www.alatere-web.com/ancienne-url` ou
    httpstatus.io) ;
  - aucune boucle / aucune chaîne de redirection ;
  - **tester l'e-mail** : envoyer + recevoir sur une boîte `@alatere-web.com`.

## 6. APRÈS la bascule — SEO

- [ ] **Soumettre le nouveau `sitemap.xml`** dans Google Search Console (+ Bing).
- [ ] Demander la **réindexation** des pages clés.
- [ ] Surveiller le rapport **« Pages / 404 »** dans GSC pendant 4–6 semaines →
      ajouter les redirections manquantes au fur et à mesure.
- [ ] **Conserver les redirections 301 au moins 12 mois** (idéalement à demeure).
- [ ] Vérifier que les **liens internes** pointent vers les nouvelles URLs
      (déjà le cas sur le nouveau site).
- [ ] Les **profils externes** (Google Business, réseaux, annuaires) : le domaine
      ne change pas → rien à modifier, sauf si une URL de page précise y figure.

## 7. Rappel : variables d'environnement (Vercel)

À renseigner dans Vercel (Project → Settings → Environment Variables) avant la
mise en service — voir `.env.example` :
- `BREVO_API_KEY` — envoi des e-mails du formulaire
- `NOTION_TOKEN` · `NOTION_DATABASE_ID` — enregistrement des demandes
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` · `RECAPTCHA_SECRET_KEY` — anti-spam reCAPTCHA v3
- `GOOGLE_PLACES_API_KEY` — affichage des avis Google (optionnel)

> Dans la console reCAPTCHA, ajouter les domaines `alatere-web.com` et
> `www.alatere-web.com`. Dans Brevo, le domaine doit rester authentifié (DKIM/SPF).

---

### État
- ✅ Sitemap WordPress récupéré, **table de correspondance validée** (ci-dessus).
- ✅ Bloc **`redirects()`** codé dans `next.config.ts` et testé en local.
- ⏳ Reste à faire au déploiement : sauvegarde WP, ajout des variables d'env sur
  Vercel, bascule DNS (A/CNAME, sans toucher aux MX), soumission du sitemap en GSC.
