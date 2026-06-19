# Formulaire de contact — traitement des demandes

À chaque envoi du formulaire (accueil `/#contact` ou page `/contact`), la route
serveur `app/api/contact/route.ts` exécute **3 actions** (en parallèle, best-effort) :

1. **Enregistrement Notion** — une ligne dans la base *« Demandes site Alatere Web »*
   (`Centre de pilotage — Alatere Web`), ID `410d1aae922741edbe82bc6e52f56e42`.
2. **Notification interne** à l'adresse du pôle, avec **Reply-To = e-mail du visiteur**.
3. **Accusé de réception** brandé au visiteur (FR/EN) + délai 48 h + lien utile.

## Aiguillage par pôle (champ « Sujet »)

| Sujet choisi | Notification interne |
|---|---|
| E-commerce — **ecoM** | contact@alatere-web.com |
| Formation — **forMa** | formations@alatere-web.com |
| Domiciliation — **doMo** | domiciliation@alatere-web.com |
| Coworking — **coWo** | coworking@alatere-web.com |
| Secrétariat & conciergerie — **toDo** | domiciliation@alatere-web.com |
| **Autre** demande | contact@alatere-web.com |

La pré-sélection du pôle est automatique quand on arrive depuis une page pôle
(lien `/contact?pole=forma`, etc.).

## Mise en service (3 variables d'environnement)

Voir `.env.example`. À définir dans l'hébergeur :

- `BREVO_API_KEY` — clé API Brevo (et **authentifier le domaine** alatere-web.com dans Brevo : DKIM/SPF chez IONOS, sinon les e-mails partiront en spam).
- `NOTION_TOKEN` — secret d'une **intégration interne** Notion.
- `NOTION_DATABASE_ID` — déjà connu (`410d1aae922741edbe82bc6e52f56e42`). **Partager la base** avec l'intégration (menu ••• → Connections).

> Tant que ces clés ne sont pas définies, le formulaire renvoie une erreur
> contrôlée (message « réessayez ou écrivez-nous directement ») et rien n'est perdu.

## Pré-requis adresses e-mail

Les boîtes `formations@`, `domiciliation@`, `coworking@`, `contact@`
doivent exister chez IONOS (ou rediriger vers une boîte relevée) pour recevoir
les notifications internes.
