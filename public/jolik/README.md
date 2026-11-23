# Jolik · Feuille de marque

Application web installable (PWA) pour tenir le score du jeu de cartes Jolik, de 2 à 4 joueurs.
Elle est 100 % statique : aucun build, aucune dépendance. Next.js sert le dossier `public/jolik/` tel quel.

- Adresse : `/jolik` (redirige vers `/jolik/index.html`, voir `next.config.ts`)
- Fonctionne hors connexion après la première visite (service worker `sw.js`)
- Les parties sont enregistrées dans le navigateur de l'appareil (`localStorage`)
- Page non indexée par les moteurs (`noindex`), absente du sitemap

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Toute l'application (HTML, CSS, JS) |
| `manifest.webmanifest` | Nom, couleurs et icônes pour l'installation |
| `sw.js` | Cache hors connexion |
| `icons/` | Icônes 192, 512, maskable et Apple |

## Règles par défaut (modifiables dans l'app)

- Ne pas dépasser 500 points : au-delà, le joueur est éliminé, le dernier en jeu gagne
- A fini : −10 · Main pleine : 100
- Posé d'un coup : −20 · Main pleine : 200

## Mettre à jour

Après une modification de `index.html`, changer `VERSION` dans `sw.js` (par exemple `jolik-v2`)
pour que les téléphones qui ont installé l'app récupèrent la nouvelle version.

## Tester en local

```bash
npx serve public/jolik
```
