# Visuels de la page de démonstration : brief Seedream

Cinq emplacements. Chacun est aujourd'hui une plaque technique dans la page
(`.hero__plate`, `.act__media`), repérée par `data-slot`. Remplacer une plaque
revient à poser une `<img>` au même endroit et à retirer le bloc `.plate__*`.

Les prompts sont écrits pour **Seedream**, en anglais, parce que le modèle y
répond mieux. Ils visent une photographie plausible : un appareil, une focale,
une heure, une matière. Pas de vocabulaire de rendu.

## Règles communes, pour éviter l'AI slop

- **Jamais de texte dans l'image.** Seedream déforme les lettres. Les enseignes,
  étiquettes et écrans doivent rester illisibles ou hors cadre.
- **Jamais de logo**, ni réel ni inventé.
- **Pas de visage au premier plan.** Personnes à mi-distance, de dos ou de
  trois quarts, mains hors cadre ou posées à plat.
- **Bannir** : `8k`, `ultra detailed`, `hyperrealistic`, `masterpiece`,
  `cinematic lighting`, `award winning`, `trending`. Ces mots produisent le
  lissage qu'on cherche à éviter.
- **Demander** : une focale, une ouverture, une source de lumière réelle, une
  heure de la journée, un défaut (poussière, reflet, câble visible).
- Lumière méditerranéenne : dure en journée, dorée en fin d'après-midi. Antibes,
  pas la Californie.
- Palette à respecter : marine `#0C306C`, crème `#F7F3EA`, or `#C0934A`,
  sarcelle `#186C60`. Pas de cyan ni de magenta.

## Paramètres

| Voie | Modèle | Paramètres obligatoires |
|---|---|---|
| Higgsfield (MCP) | Seedream 5.0 Pro, 2K max | à relever sur le connecteur une fois autorisé |
| kie.ai | `seedream/5-pro-text-to-image` | `prompt`, `aspect_ratio`, `quality`, `output_format` (les quatre, sinon rejet) |

Seedream refuse la plupart des ratios non standard sans le dire. S'en tenir à
`21:9`, `4:5`, `1:1`, `16:9`.

---

## Slot 01 · héros, façade · 21:9

> Late afternoon photograph of a four storey pale stone apartment building on a
> boulevard in Antibes, southern France. Shallow balconies with thin black iron
> railings, closed pale blue wooden shutters, a plane tree on the left edge
> casting hard shadows on the facade. Shot on a 35mm lens at f/5.6 from across
> the street, slightly low angle. Warm low sun raking across the stone, deep
> shadow in the doorway. Dust and grain visible, no signage, no people.

Cadrage : le bâtiment occupe les deux tiers droits, le ciel reste lisible à
gauche pour que le titre se pose dessus. La plaque est en `opacity: .55` avec un
dégradé vers le bas : prévoir une image qui supporte d'être assombrie.

## Slot 02 · ecoM, atelier d'impression · 4:5

> Interior of a small fine art print workshop. A wide format inkjet printer
> feeding a sheet of cotton rag paper, stacks of printed art reproductions on a
> steel table, a paper trimmer, rolls of paper standing against the wall.
> Overhead fluorescent light mixed with daylight from a high window. Shot on a
> 50mm lens at f/2.8, focus on the paper leaving the printer. Visible dust,
> power cables along the floor, no text on the prints, no people.

## Slot 03 · forMa, salle de formation · 4:5

> Six adults seated around a pale wood table in a small training room, seen from
> the back of the room. Open laptops, paper notebooks, coffee cups. A projector
> screen at the far end showing a blurred blue rectangle with no readable text.
> Daylight through a side window with half closed white blinds. Shot on a 35mm
> lens at f/4, natural colour, no faces towards the camera.

## Slot 04 · doMo, courrier · 4:5

> Close photograph of a wall of wooden pigeonhole mail slots in a small office,
> each slot holding a few white envelopes. Blank paper labels, no readable text.
> A flatbed scanner on a counter in the lower right, slightly out of focus.
> Warm side light from a window out of frame. Shot on an 85mm lens at f/2,
> focus on the middle row of envelopes. Visible wood grain and wear.

## Slot 05 · coWo, plateau de coworking · 4:5

> Morning photograph of a small coworking floor, sixteen desks in pale wood with
> black task chairs, three people working at a distance, seen from behind. A
> glass walled meeting room in the background. Air conditioning unit visible
> high on the wall, a cable tray under one desk. Hard morning light through tall
> windows casting long shadows across the floor. Shot on a 28mm lens at f/5.6,
> eye level, no faces, no screens showing readable content.

---

## Après génération

1. Enregistrer en WebP dans `demo/assets/`, nommé `slot-01.webp` … `slot-05.webp`.
2. Dans `index.html`, remplacer le contenu de la plaque par
   `<img src="assets/slot-02.webp" alt="" width="1280" height="1600" loading="lazy">`
   et retirer `data-slot`, `.plate__crosshair`, `.plate__tag`.
3. Garder un `alt` vide sur les visuels décoratifs : l'information est dans le
   texte, pas dans l'image.
4. Vérifier le contraste du titre sur le slot 01 après remplacement.

---

# Suite : ce qui a été tenté le 27/10/2026

Higgsfield étant resté en `needs_auth`, les cinq visuels ont été générés avec
le connecteur Canva, à partir des prompts ci-dessus, sans les modifier. Les
cinq générations ont réussi.

**Mais les fichiers n'ont pas pu être récupérés.** Le connecteur ne redescend
que des vignettes de 200 px, et les images ne sont exposées nulle part dans
l'interface Canva (Projets, filtre Images, Importations, bibliothèque IA,
panneau Importer de l'éditeur : tous vérifiés). La voie de contournement par
export d'un design s'est heurtée à un `permission_denied` du connecteur.

Le détail et les aperçus basse résolution sont dans `assets/apercus/A-LIRE.md`.

## État actuel de la page

Les cinq emplacements affichent leur plaque technique : grille, mire, repères
d'angle et légende annonçant le sujet. C'est un état assumé, pas une panne.

`scroll.js` cherche `assets/slot-01.jpg` … `slot-05.jpg` à chaque chargement.
Déposer un de ces fichiers suffit à remplacer la plaque correspondante, sans
toucher au HTML. Les prompts ci-dessus restent valables pour n'importe quel
modèle.
