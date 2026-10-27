# Aperçus des cinq visuels générés le 27/10/2026

Ces cinq PNG de 200 px sont **tout ce qui a pu être récupéré** des images
générées avec le connecteur Canva. Ils sont conservés comme trace de ce qui a
été produit : ne pas les utiliser dans la page, ils y seraient affichés trois
fois plus grands qu'ils ne le sont.

| Emplacement | Taille réelle | Sujet |
|---|---|---|
| slot-01 (héros) | 1776 × 896 | façade, Antibes |
| slot-02 (ecoM) | 1136 × 1408 | atelier d'impression |
| slot-03 (forMa) | 1136 × 1408 | salle de formation |
| slot-04 (doMo) | 1136 × 1408 | casiers de courrier |
| slot-05 (coWo) | 1136 × 1408 | plateau de coworking |

## Pourquoi les originaux ne sont pas là

Les images existent dans le compte Canva en pleine résolution : l'API les liste
avec leurs dimensions. Mais elles ne sont **exposées nulle part dans
l'interface Canva** : ni dans Projets, ni avec le filtre Type → Images, ni dans
le dossier Importations, ni dans la bibliothèque IA Canva, ni dans le panneau
Importer de l'éditeur. Vérifié le 27/10/2026 sur un compte connecté.

Le connecteur, lui, ne redescend que des vignettes de 200 px, et il n'a pas
l'autorisation d'ouvrir une transaction d'édition sur un design créé à la main
(`permission_denied`), ce qui ferme la voie « poser l'image dans un design puis
l'exporter ».

Conclusion : ces fichiers ne sont récupérables ni par Claude ni à la main.

## Si vous voulez des visuels plus tard

Trois voies, par ordre de simplicité :

1. **Autoriser le connecteur Higgsfield** (`/mcp`), et générer avec Seedream
   comme prévu au départ. La page est déjà câblée pour les recevoir.
2. **Régénérer dans l'éditeur Canva** avec Magic Media, à partir des prompts de
   `demo/VISUELS-SEEDREAM.md`, puis télécharger le design en JPG.
3. **Photographier vos propres locaux.** C'est le 9 boulevard Albert 1er qui
   est le sujet : une vraie photo vaut mieux qu'une image générée plausible.

Dans tous les cas, déposer les fichiers nommés `slot-01.jpg` … `slot-05.jpg`
dans `demo/assets/` suffit : `scroll.js` les détecte au chargement.
