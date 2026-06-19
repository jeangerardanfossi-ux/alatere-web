# Alatere Web — site vitrine

Site vitrine corporate d'**Alatere Web SAS** (Antibes) réunissant ses quatre
métiers : **ecoM** (e-commerce), **forMa** (formation Qualiopi), **doMo**
(domiciliation) et **coWo** (coworking).

Construit avec **Next.js 16** (App Router) + **TypeScript**, **Grommet** comme
design-system/thème, **styled-components** (registry SSR), et des **CSS Modules**
pour les sections au rendu sur-mesure (héros, cartes, bloc sombre, footer).

---

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000 (ici lancé sur 3100 via launch.json)
```

Autres commandes :

```bash
npm run build    # build de production + type-check
npm run start    # sert le build de production
npm run lint     # ESLint
```

---

## Structure

```
app/
  layout.tsx            # <html lang="fr">, polices next/font, registry + thème Grommet, metadata
  providers.tsx         # 'use client' — enveloppe l'app avec <Grommet theme={alatereTheme}>
  page.tsx              # accueil (Hero + Activities + WorkValues + Contact + Footer)
  alatere-ecom/         # \
  alatere-forma/        #  } pages de pôle (SEO), via <PolePage>
  alatere-domo/         #  }
  alatere-cowo/         # /
  contact/              # page contact (réutilise <Contact>)
  mentions-legales/     # \ pages légales (noindex)
  confidentialite/      # /
  api/contact/route.ts  # endpoint du formulaire (validation + TODO provider)
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt
  icon.svg              # favicon (monogramme AW)
  globals.css           # reset + variables CSS de la charte + focus visible

components/             # Header, Hero, Activities, WorkValues, Contact(+Form),
                        # SiteFooter, PolePage, TextPage, Logo, Container, JsonLd
                        # (chaque composant a son .module.css)

lib/
  registry.tsx          # registry styled-components pour le SSR
  site.ts               # DONNÉES SOCIÉTÉ (source unique) + nav + pôles
  poles-content.ts      # contenu des pages de pôle
  jsonld.ts             # données structurées schema.org

theme/
  alatere.ts            # THÈME GROMMET + palette + couleurs par pôle
```

---

## Où modifier…

### Les couleurs / la typo (charte)
- **Thème Grommet** : `theme/alatere.ts` (objet `alatereTheme`, `palette`, `poleColors`).
- **Miroir CSS** pour les CSS Modules : variables `:root` dans `app/globals.css`
  (`--brand`, `--gold`, `--forest`, `--teal`, `--gold-ink`, …).
  > ⚠️ Garder les deux en cohérence : `palette` (TS) et les variables `:root` (CSS).
- **Polices** : `app/layout.tsx` (`next/font` Poppins + Mulish → variables
  `--font-poppins` / `--font-mulish`, injectées dans le thème).

### Les contenus
- **Données société** (adresse, SIRET, n° formation, agrément…) : `lib/site.ts`.
- **Textes des pages de pôle** : `lib/poles-content.ts`.
- **Sections de l'accueil** : directement dans les composants correspondants
  (`components/Hero.tsx`, `Activities.tsx`, `WorkValues.tsx`, `Contact.tsx`,
  `SiteFooter.tsx`).

### Le logo
Pour l'instant un **monogramme « AW »** typographique (`components/Logo.tsx`).
Pour utiliser le logo vectoriel définitif : déposer `public/logo-alatere.svg`
puis remplacer le `<span>` du composant par une `<img>` / `next/image`.

### Le formulaire de contact
`app/api/contact/route.ts` valide les champs puis logge la demande (fallback).
Un `TODO` indique où brancher un vrai envoi (ex. **Resend**) ; ajouter alors la
clé `RESEND_API_KEY` dans les variables d'environnement.

---

## Éléments encore à compléter (`[À COMPLÉTER]`)
- N° de **certificat Qualiopi** (`lib/site.ts` → `qualiopiCert`).
- Durée de conservation des données (`app/confidentialite`).
- Brancher le **provider d'e-mail** du formulaire.
- Fournir un **logo SVG** propre + photos réelles (placeholders `next/image`
  prévus dans les cartes forMa / coWo).

---

## Déploiement Vercel

1. Pousser le repo sur GitHub/GitLab.
2. Sur [vercel.com](https://vercel.com) → **New Project** → importer le repo.
   Next.js est détecté automatiquement (build `next build`).
3. Ajouter les variables d'environnement (ex. `RESEND_API_KEY`) si le
   formulaire est branché.
4. Renseigner le domaine (`www.alatere-web.com`) — déjà utilisé comme
   `metadataBase`, dans le sitemap et les données structurées ; l'adapter dans
   `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `lib/jsonld.ts` si besoin.
