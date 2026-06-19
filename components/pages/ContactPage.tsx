'use client';

/** Contact — page dédiée (handoff Grommet). Formulaire câblé sur /api/contact. */

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { LangProvider, useLang, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';
import { useAntispam, Honeypot, RecaptchaNotice } from '@/components/grommet/antispam';

const MAP_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=7.1163%2C43.5764%2C7.1283%2C43.5824&layer=mapnik&marker=43.5793777%2C7.122309';

const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=9+Boulevard+Albert+1er+06600+Antibes';

type Status = 'idle' | 'sending' | 'success' | 'error';

const TITLE = {
  fr: 'Contact — Alatere Web, Antibes',
  en: 'Contact — Alatere Web, Antibes',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_self: { fr: 'Contact', en: 'Contact' },
  page_title: { fr: 'Parlons de votre projet.', en: "Let's talk about your project." },
  page_sub: {
    fr: 'E-commerce, formation, domiciliation ou coworking : un seul interlocuteur, une réponse sous 48 heures.',
    en: 'E-commerce, training, business address or coworking: a single point of contact, a reply within 48 hours.',
  },
  info_t: { fr: 'Nous trouver', en: 'Find us' },
  info_addr_l: { fr: 'Adresse', en: 'Address' },
  info_country: { fr: 'France', en: 'France' },
  info_phone_l: { fr: 'Téléphone', en: 'Phone' },
  info_email_l: { fr: 'E-mail', en: 'Email' },
  info_hours_l: { fr: 'Horaires', en: 'Opening hours' },
  day_mon_fri: { fr: 'Lun – Ven', en: 'Mon – Fri' },
  day_sat: { fr: 'Samedi', en: 'Saturday' },
  by_appt: { fr: 'sur rendez-vous', en: 'by appointment' },
  day_sun: { fr: 'Dimanche', en: 'Sunday' },
  closed: { fr: 'fermé', en: 'closed' },
  info_itinerary: { fr: 'Itinéraire Google Maps', en: 'Directions on Google Maps' },
  form_t: { fr: 'Envoyer une demande', en: 'Send a request' },
  form_name: { fr: 'Nom', en: 'Name' },
  form_name_ph: { fr: 'Votre nom', en: 'Your name' },
  form_company: { fr: 'Société', en: 'Company' },
  form_company_ph: { fr: 'Votre société', en: 'Your company' },
  form_email: { fr: 'E-mail', en: 'Email' },
  form_phone: { fr: 'Téléphone', en: 'Phone' },
  form_phone_ph: { fr: 'Optionnel', en: 'Optional' },
  form_subject: { fr: 'Sujet', en: 'Subject' },
  form_opt1: { fr: 'E-commerce — Alatere ecoM', en: 'E-commerce — Alatere ecoM' },
  form_opt2: { fr: 'Formation — Alatere forMa', en: 'Training — Alatere forMa' },
  form_opt3: { fr: 'Domiciliation — Alatere doMo', en: 'Business address — Alatere doMo' },
  form_opt4: { fr: 'Coworking — Alatere coWo', en: 'Coworking — Alatere coWo' },
  form_opt_todo: {
    fr: 'Secrétariat & conciergerie — Alatere toDo',
    en: 'Secretariat & concierge — Alatere toDo',
  },
  form_opt5: { fr: 'Autre demande', en: 'Other request' },
  form_message: { fr: 'Message', en: 'Message' },
  form_message_ph: {
    fr: 'Décrivez votre besoin en quelques lignes',
    en: 'Describe your need in a few lines',
  },
  form_consent: {
    fr: "J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la politique de confidentialité.",
    en: 'I agree that my data may be used to process my request, in accordance with the privacy policy.',
  },
  form_send: { fr: 'Envoyer ma demande', en: 'Send my request' },
  // Statuts d'envoi (alignés sur ContactSection de la home)
  form_sending: { fr: 'Envoi…', en: 'Sending…' },
  form_ok: { fr: 'Message envoyé.', en: 'Message sent.' },
  form_ok_sub: {
    fr: 'Merci, nous revenons vers vous sous 48 heures.',
    en: 'Thank you, we will reply within 48 hours.',
  },
  form_again: { fr: 'Envoyer un autre message', en: 'Send another message' },
  form_err: {
    fr: "L'envoi a échoué. Réessayez ou écrivez-nous directement.",
    en: 'Sending failed. Please retry or email us directly.',
  },
};

export default function ContactPage() {
  return (
    <div className="g-home">
      <LangProvider titles={TITLE}>
        <Header />
        <Body />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Body() {
  const t = useT(TX);
  return (
    <main>
      <div className="g-pagehero">
        <div className="g-breadcrumb">
          <Link href="/">{t('bc_home')}</Link> <span>/</span> <span>{t('bc_self')}</span>
        </div>
        <h1>{t('page_title')}</h1>
        <p className="g-page-sub">{t('page_sub')}</p>
      </div>

      <div className="g-contactpage">
        {/* Colonne infos */}
        <aside className="g-infocard">
          <h2>{t('info_t')}</h2>
          <div className="g-infoitem">
            <Icon name="map-pin" />
            <div>
              <div className="g-infoitem__l">{t('info_addr_l')}</div>
              <div className="g-infoitem__v">
                9 Boulevard Albert 1er
                <br />
                06600 Antibes, <span>{t('info_country')}</span>
              </div>
            </div>
          </div>
          <div className="g-infoitem">
            <Icon name="phone" />
            <div>
              <div className="g-infoitem__l">{t('info_phone_l')}</div>
              <div className="g-infoitem__v">
                <a href="tel:+33761564556">07 61 56 45 56</a>
              </div>
            </div>
          </div>
          <div className="g-infoitem">
            <Icon name="mail" />
            <div>
              <div className="g-infoitem__l">{t('info_email_l')}</div>
              <div className="g-infoitem__v">
                <Email user="contact" />
              </div>
            </div>
          </div>
          <div className="g-infoitem">
            <Icon name="clock" />
            <div>
              <div className="g-infoitem__l">{t('info_hours_l')}</div>
              <div className="g-hours">
                <span>{t('day_mon_fri')}</span>
                <span>9h – 18h</span>
                <span>{t('day_sat')}</span>
                <span>{t('by_appt')}</span>
                <span>{t('day_sun')}</span>
                <span>{t('closed')}</span>
              </div>
            </div>
          </div>
          <iframe
            className="g-map"
            src={MAP_SRC}
            loading="lazy"
            title="Plan — 9 Boulevard Albert 1er, Antibes"
          />
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="g-anchor"
            style={{ marginTop: 12, display: 'inline-flex' }}
          >
            <span>{t('info_itinerary')}</span> ↗
          </a>
        </aside>

        {/* Colonne formulaire */}
        <section id="form">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}

const POLE_KEYS = ['ecom', 'forma', 'domo', 'cowo', 'todo', 'autre'];

function ContactForm() {
  const { lang } = useLang();
  const t = useT(TX);
  const { getToken, elapsedMs } = useAntispam();
  const [status, setStatus] = useState<Status>('idle');
  const [pole, setPole] = useState('ecom');
  // [clé de pôle stable, clé de traduction du libellé]
  const subjects: [string, string][] = [
    ['ecom', 'form_opt1'],
    ['forma', 'form_opt2'],
    ['domo', 'form_opt3'],
    ['cowo', 'form_opt4'],
    ['todo', 'form_opt_todo'],
    ['autre', 'form_opt5'],
  ];

  // Pré-sélection du pôle depuis l'URL (?pole=forma) — liens des pages pôles.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('pole');
    if (p && POLE_KEYS.includes(p)) setPole(p);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const tel = (fd.get('telephone') as string)?.trim();
    let message = (fd.get('message') as string)?.trim() || '';
    if (tel) message += `\n\nTéléphone : ${tel}`;
    setStatus('sending');
    try {
      const recaptcha = await getToken('contact_page');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: fd.get('nom'),
          societe: fd.get('societe'),
          email: fd.get('email'),
          sujet: fd.get('sujet'),
          message,
          consent: fd.get('consent') === 'on',
          lang,
          page: typeof window !== 'undefined' ? window.location.pathname : '/contact',
          website: fd.get('website'),
          elapsed: elapsedMs(),
          recaptcha,
        }),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="g-infocard" style={{ background: '#fff', boxShadow: 'inset 0 0 0 1px var(--border)' }}>
      <h2>{t('form_t')}</h2>
      {status === 'success' ? (
        <div
          className="g-form"
          role="status"
          style={{
            justifyContent: 'center',
            background: 'var(--green-soft)',
            borderRadius: 12,
            padding: 24,
            gap: 8,
          }}
        >
          <strong style={{ color: 'var(--green-dark)', fontSize: 20 }}>{t('form_ok')}</strong>
          <span style={{ color: 'var(--dark-2)', fontSize: 15 }}>{t('form_ok_sub')}</span>
          <button
            type="button"
            className="g-btn g-btn--secondary g-btn--sm"
            style={{ alignSelf: 'flex-start', marginTop: 8 }}
            onClick={() => setStatus('idle')}
          >
            {t('form_again')}
          </button>
        </div>
      ) : (
        <form className="g-form" onSubmit={onSubmit}>
          <Honeypot />
          <div className="row2">
            <label>
              <span>{t('form_name')}</span>{' '}
              <input type="text" name="nom" placeholder={t('form_name_ph')} required />
            </label>
            <label>
              <span>{t('form_company')}</span>{' '}
              <input type="text" name="societe" placeholder={t('form_company_ph')} />
            </label>
          </div>
          <div className="row2">
            <label>
              <span>{t('form_email')}</span>{' '}
              <input type="email" name="email" placeholder="vous@exemple.com" required />
            </label>
            <label>
              <span>{t('form_phone')}</span>{' '}
              <input type="tel" name="telephone" placeholder={t('form_phone_ph')} />
            </label>
          </div>
          <label>
            <span>{t('form_subject')}</span>
            <select name="sujet" value={pole} onChange={(e) => setPole(e.target.value)}>
              {subjects.map(([key, tkey]) => (
                <option key={key} value={key}>
                  {t(tkey)}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>{t('form_message')}</span>{' '}
            <textarea name="message" rows={5} placeholder={t('form_message_ph')} required />
          </label>
          <label style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, fontWeight: 400 }}>
            <input type="checkbox" name="consent" required style={{ width: 'auto', marginTop: 3 }} />
            <span className="g-text--sm">{t('form_consent')}</span>
          </label>
          {status === 'error' && (
            <span style={{ color: 'var(--clay-dark)', fontSize: 13, fontWeight: 600 }}>
              {t('form_err')}
            </span>
          )}
          <button
            type="submit"
            className="g-btn g-btn--primary g-btn--lg"
            disabled={status === 'sending'}
          >
            <span>{status === 'sending' ? t('form_sending') : t('form_send')}</span>{' '}
            <span className="g-arrow">→</span>
          </button>
          <RecaptchaNotice lang={lang} />
        </form>
      )}
    </div>
  );
}
