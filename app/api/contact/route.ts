import { NextResponse } from 'next/server';
import { poleFromKey, saveToNotion, sendInternal, sendAck, type Demande } from '@/lib/contact';

type Payload = {
  nom?: string;
  societe?: string;
  email?: string;
  sujet?: string; // clé de pôle stable : ecom | forma | domo | cowo | todo | autre
  message?: string;
  lang?: string;
  page?: string;
  consent?: boolean;
  website?: string; // honeypot : doit rester vide
  elapsed?: number; // ms depuis l'affichage du formulaire (piège temporel)
  recaptcha?: string; // jeton reCAPTCHA v3
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_ELAPSED_MS = 2000; // un envoi humain prend toujours plus de 2 s

/** Vérifie le jeton reCAPTCHA v3 auprès de Google (no-op si non configuré). */
async function verifyRecaptcha(token?: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // reCAPTCHA non activé → on ne bloque pas
  if (!token) return false;
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean; score?: number };
    return !!data.success && (typeof data.score !== 'number' || data.score >= 0.5);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  // Anti-spam silencieux : on renvoie « ok » pour ne pas renseigner le robot,
  // mais on n'envoie ni e-mail ni enregistrement Notion.
  if (body.website && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }
  if (typeof body.elapsed === 'number' && body.elapsed >= 0 && body.elapsed < MIN_ELAPSED_MS) {
    return NextResponse.json({ ok: true });
  }

  const nom = body.nom?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!nom || !email || !message) {
    return NextResponse.json(
      { error: 'Nom, e-mail et message sont requis.' },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Adresse e-mail invalide.' }, { status: 422 });
  }

  // reCAPTCHA v3 : vérification serveur (no-op si la clé secrète n'est pas définie).
  if (!(await verifyRecaptcha(body.recaptcha))) {
    return NextResponse.json(
      { error: 'Vérification anti-robot échouée. Merci de réessayer.' },
      { status: 403 },
    );
  }

  const demande: Demande = {
    nom,
    societe: body.societe?.trim() || '',
    email,
    message,
    lang: body.lang === 'en' ? 'en' : 'fr',
    page: (body.page || '').slice(0, 200),
    consent: !!body.consent,
    pole: poleFromKey(body.sujet),
    now: new Date().toISOString(),
  };

  // Best-effort : on tente les 3 actions en parallèle, sans qu'un échec
  // (clé manquante, panne d'API) bloque les autres ni ne perde la demande.
  const [notionOk, internalOk, ackOk] = await Promise.all([
    saveToNotion(demande).catch(() => false),
    sendInternal(demande).catch(() => false),
    sendAck(demande).catch(() => false),
  ]);

  // Trace serveur — filet de sécurité si une intégration tombe.
  console.log('[contact]', {
    pole: demande.pole,
    email: demande.email,
    notionOk,
    internalOk,
    ackOk,
  });

  // La notification interne est la voie critique : si elle échoue, on signale
  // une erreur pour que le front affiche le repli « écrivez-nous directement ».
  if (!internalOk) {
    return NextResponse.json({ error: 'Envoi impossible.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true, notionOk, ackOk });
}
