/**
 * Traitement des demandes du formulaire de contact (côté serveur uniquement).
 *  1. Aiguillage par pôle (ecoM / forMa / doMo / coWo / toDo / Autre)
 *  2. Enregistrement dans la base Notion « Demandes site Alatere Web »
 *  3. Notification interne (reply-to = visiteur) à la bonne adresse
 *  4. Accusé de réception brandé au visiteur (FR/EN) + délai + lien utile
 *
 * Secrets lus dans les variables d'environnement (jamais en dur) :
 *   - BREVO_API_KEY       (Brevo / ex-Sendinblue)
 *   - NOTION_TOKEN        (intégration interne Notion)
 *   - NOTION_DATABASE_ID  (= 410d1aae922741edbe82bc6e52f56e42)
 */

const SITE = 'https://www.alatere-web.com';
const BADGE = `${SITE}/alatere-web-badge.png`;

export type PoleKey = 'ecom' | 'forma' | 'domo' | 'cowo' | 'todo' | 'autre';
const KEYS: PoleKey[] = ['ecom', 'forma', 'domo', 'cowo', 'todo', 'autre'];

type PoleConf = {
  notion: string; // libellé de l'option Notion
  name: string; // nom de marque (expéditeur / signature)
  notify: string; // adresse interne notifiée
  color: string; // accent e-mail
  link: { fr: string; en: string; url: string };
};

export const POLES: Record<PoleKey, PoleConf> = {
  ecom: {
    notion: 'ecoM', name: 'Alatere ecoM', notify: 'contact@alatere-web.com', color: '#163a6e',
    link: { fr: 'Découvrir notre savoir-faire e-commerce', en: 'Discover our e-commerce expertise', url: `${SITE}/alatere-ecom` },
  },
  forma: {
    notion: 'forMa', name: 'Alatere forMa', notify: 'formations@alatere-web.com', color: '#a87f33',
    link: { fr: 'Consulter notre catalogue de formations', en: 'Browse our training catalog', url: 'https://alatere-web.catalogueformpro.com' },
  },
  domo: {
    notion: 'doMo', name: 'Alatere doMo', notify: 'domiciliation@alatere-web.com', color: '#2f7d52',
    link: { fr: 'Voir nos formules de domiciliation', en: 'See our business-address plans', url: `${SITE}/alatere-domo` },
  },
  cowo: {
    notion: 'coWo', name: 'Alatere coWo', notify: 'coworking@alatere-web.com', color: '#b86137',
    link: { fr: "Découvrir l'espace de coworking", en: 'Discover the coworking space', url: `${SITE}/alatere-cowo` },
  },
  todo: {
    notion: 'toDo', name: 'Alatere toDo', notify: 'domiciliation@alatere-web.com', color: '#163a6e',
    link: { fr: 'En savoir plus sur Alatere toDo', en: 'Learn more about Alatere toDo', url: `${SITE}/alatere-todo.html` },
  },
  autre: {
    notion: 'Autre', name: 'Alatere Web', notify: 'contact@alatere-web.com', color: '#163a6e',
    link: { fr: 'Découvrir Alatere Web', en: 'Discover Alatere Web', url: SITE },
  },
};

export function poleFromKey(k?: string): PoleKey {
  const v = (k || '').toLowerCase().trim() as PoleKey;
  return KEYS.includes(v) ? v : 'autre';
}

export type Demande = {
  nom: string;
  societe: string;
  email: string;
  message: string;
  lang: 'fr' | 'en';
  page: string;
  consent: boolean;
  pole: PoleKey;
  now: string; // ISO
};

function esc(s: string): string {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ----------------------------- Notion ----------------------------- */
export async function saveToNotion(d: Demande): Promise<boolean> {
  const token = process.env.NOTION_TOKEN;
  const db = process.env.NOTION_DATABASE_ID;
  if (!token || !db) return false;
  const p = POLES[d.pole];
  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      parent: { database_id: db },
      properties: {
        Nom: { title: [{ text: { content: d.nom.slice(0, 200) } }] },
        'Pôle': { select: { name: p.notion } },
        'E-mail': { email: d.email },
        'Société': { rich_text: [{ text: { content: d.societe.slice(0, 200) } }] },
        Message: { rich_text: [{ text: { content: d.message.slice(0, 1900) } }] },
        Langue: { select: { name: d.lang === 'en' ? 'EN' : 'FR' } },
        "Page d'origine": { rich_text: [{ text: { content: d.page.slice(0, 200) } }] },
        Statut: { select: { name: 'Nouveau' } },
        'Reçu le': { date: { start: d.now } },
        Consentement: { checkbox: d.consent },
      },
    }),
  });
  if (!res.ok) console.error('[notion]', res.status, await res.text().catch(() => ''));
  return res.ok;
}

/* ----------------------------- Brevo ------------------------------ */
async function sendBrevo(opts: {
  senderName: string;
  senderEmail: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
}): Promise<boolean> {
  const key = process.env.BREVO_API_KEY;
  if (!key) return false;
  const payload = JSON.stringify({
    sender: { name: opts.senderName, email: opts.senderEmail },
    to: [{ email: opts.to }],
    ...(opts.replyTo ? { replyTo: { email: opts.replyTo } } : {}),
    subject: opts.subject,
    htmlContent: opts.html,
  });
  // 2 tentatives : on relance une fois sur erreur serveur/réseau (incident passager Brevo).
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': key, 'Content-Type': 'application/json', accept: 'application/json' },
        body: payload,
      });
      if (res.ok) return true;
      console.error('[brevo]', res.status, await res.text().catch(() => ''));
      if (res.status < 500 || attempt === 2) return false; // 4xx = erreur définitive
    } catch (e) {
      console.error('[brevo] exception', String(e));
      if (attempt === 2) return false;
    }
    await new Promise((r) => setTimeout(r, 700));
  }
  return false;
}

/* --------------------------- Gabarits ----------------------------- */
function shell(accent: string, inner: string): string {
  return `<div style="background:#f2f3f4;padding:24px 0;font-family:'Helvetica Neue',Arial,sans-serif;color:#1a1f27">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(20,30,45,.08)">
    <div style="height:6px;background:${accent}"></div>
    <div style="padding:28px 30px">${inner}</div>
    <div style="padding:18px 30px;border-top:1px solid #eee;font-size:12px;color:#6b7686">
      Alatere Web SAS · 9 Boulevard Albert 1er, 06600 Antibes · 07 61 56 45 56<br>
      <a href="${SITE}" style="color:#6b7686">alatere-web.com</a>
    </div>
  </div>
</div>`;
}

/** Notification interne (équipe) - reply-to = visiteur. */
export async function sendInternal(d: Demande): Promise<boolean> {
  const p = POLES[d.pole];
  const rows = [
    ['Pôle', p.name],
    ['Nom', d.nom],
    ['Société', d.societe || '-'],
    ['E-mail', d.email],
    ['Langue', d.lang.toUpperCase()],
    ['Page', d.page || '-'],
    ['Consentement RGPD', d.consent ? 'Oui' : 'Non'],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 10px 4px 0;color:#6b7686;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:4px 0"><b>${esc(v)}</b></td></tr>`,
    )
    .join('');
  const inner = `
    <p style="margin:0 0 6px;font-size:13px;color:${p.color};font-weight:700;letter-spacing:.04em;text-transform:uppercase">Nouvelle demande · ${esc(p.name)}</p>
    <h1 style="margin:0 0 18px;font-size:21px">${esc(d.nom)} vous a écrit</h1>
    <table style="font-size:14px;border-collapse:collapse;margin-bottom:16px">${rows}</table>
    <div style="background:#f7f8f9;border-radius:10px;padding:14px 16px;font-size:14px;line-height:1.55;white-space:pre-wrap">${esc(d.message)}</div>
    <p style="margin:18px 0 0;font-size:13px;color:#6b7686">Répondez directement à cet e-mail pour contacter ${esc(d.nom)}.</p>`;
  return sendBrevo({
    senderName: 'Formulaire site Alatere Web',
    senderEmail: 'contact@alatere-web.com',
    to: p.notify,
    replyTo: d.email,
    subject: `Nouvelle demande ${p.name} - ${d.nom}`,
    html: shell(p.color, inner),
  });
}

/**
 * Bloc « Pièces à fournir » inséré dans l'accusé de réception - uniquement
 * pour les demandes de domiciliation (doMo).
 */
function docsBlock(pole: PoleKey, accent: string, en: boolean): string {
  if (pole !== 'domo') return '';
  const title = en ? 'Documents to prepare' : 'Pièces à fournir';
  const intro = en
    ? 'To set up your business-address file, please prepare the following documents:'
    : 'Pour constituer votre dossier de domiciliation, merci de préparer les pièces suivantes :';
  const items = en
    ? [
        'The company registration certificate (Kbis), or the draft articles of association for a company being formed',
        "The manager's ID document",
        "The manager's proof of address",
        'The company bank details (RIB), to set up a SEPA direct debit',
      ]
    : [
        "L'extrait Kbis, ou le projet de statuts pour une entreprise en cours de création",
        'La pièce identifiante du gérant',
        'Le justificatif de domicile du gérant',
        "Le RIB de l'entreprise, pour mettre en place un prélèvement SEPA",
      ];
  const lis = items
    .map(
      (it) =>
        `<li style="margin:0 0 8px;padding-left:22px;position:relative;line-height:1.5"><span style="position:absolute;left:0;color:${accent};font-weight:700">✓</span>${esc(it)}</li>`,
    )
    .join('');
  return `<div style="border:1px solid #e4e9e6;border-radius:10px;padding:16px 18px;margin-bottom:18px">
      <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:${accent}">${title}</p>
      <p style="margin:0 0 12px;font-size:13.5px;color:#404a57;line-height:1.5">${intro}</p>
      <ul style="margin:0;padding:0;list-style:none;font-size:13.5px;color:#1a1f27">${lis}</ul>
    </div>`;
}

/** Accusé de réception brandé au visiteur (FR/EN). */
export async function sendAck(d: Demande): Promise<boolean> {
  const p = POLES[d.pole];
  const en = d.lang === 'en';
  const subject = en
    ? `We received your request - ${p.name}`
    : `Votre demande a bien été reçue - ${p.name}`;
  const inner = en
    ? `
    <p style="margin:0 0 6px;font-size:13px;color:${p.color};font-weight:700;letter-spacing:.04em;text-transform:uppercase">${esc(p.name)}</p>
    <h1 style="margin:0 0 14px;font-size:22px">Thank you, ${esc(d.nom)} 👋</h1>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#404a57">We have received your request and a dedicated contact will get back to you <b>within 48 hours</b>.</p>
    <div style="background:#f7f8f9;border-radius:10px;padding:14px 16px;font-size:14px;line-height:1.55;color:#404a57;margin-bottom:18px"><b>Your message:</b><br>${esc(d.message)}</div>
    ${docsBlock(d.pole, p.color, true)}
    <a href="${p.link.url}" style="display:inline-block;background:${p.color};color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:11px 20px;border-radius:18px">${esc(p.link.en)} →</a>
    <p style="margin:22px 0 0;font-size:14px;color:#404a57">The ${esc(p.name)} team · Alatere Web</p>`
    : `
    <p style="margin:0 0 6px;font-size:13px;color:${p.color};font-weight:700;letter-spacing:.04em;text-transform:uppercase">${esc(p.name)}</p>
    <h1 style="margin:0 0 14px;font-size:22px">Merci, ${esc(d.nom)} 👋</h1>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#404a57">Nous avons bien reçu votre demande. Un interlocuteur dédié revient vers vous <b>sous 48 heures</b>.</p>
    <div style="background:#f7f8f9;border-radius:10px;padding:14px 16px;font-size:14px;line-height:1.55;color:#404a57;margin-bottom:18px"><b>Votre message :</b><br>${esc(d.message)}</div>
    ${docsBlock(d.pole, p.color, false)}
    <a href="${p.link.url}" style="display:inline-block;background:${p.color};color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:11px 20px;border-radius:18px">${esc(p.link.fr)} →</a>
    <p style="margin:22px 0 0;font-size:14px;color:#404a57">L'équipe ${esc(p.name)} · Alatere Web</p>`;
  return sendBrevo({
    senderName: p.name,
    senderEmail: p.notify,
    to: d.email,
    subject,
    html: shell(p.color, inner),
  });
}

// Badge dispo pour usage futur dans les gabarits.
export const EMAIL_BADGE = BADGE;
