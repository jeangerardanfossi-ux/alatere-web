'use client';

/**
 * Page « Clients & Réalisations ».
 * Portée du wireframe Claude Design « Clients & Réalisations - Wireframes.dc.html »,
 * turn 3 / option 3a — direction A « éditorial sobre » : hero court + mur de logos,
 * barre d'ancres collante, un gabarit de pôle répété quatre fois (bandeau + trois
 * études de cas + CTA), bandeau de confiance sombre, puis quatre sorties de conversion.
 *
 * En-tête et pied de page mutualisés (le chrome du wireframe n'est pas porté).
 * Le contenu des études de cas vit dans `lib/realisations.ts`.
 */

import { useEffect, useState } from 'react';
import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useLang, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon, ImageSlot } from '@/components/grommet/icons';
import { BrandName, BrandSuffix } from '@/components/grommet/BrandName';
import { Email } from '@/components/grommet/Email';
import { company } from '@/lib/site';
import {
  CASES,
  CLIENT_LOGOS,
  LOGO_SLOTS,
  STATS,
  type Bi,
  type ClientLogo,
  type PoleKey,
} from '@/lib/realisations';

export const CLIENTS_TITLE = {
  fr: 'Clients & Réalisations - Alatere Web, Antibes',
  en: 'Clients & Case Studies - Alatere Web, Antibes',
};

const CATALOG = 'https://alatere-web.catalogueformpro.com';

/** Couleurs de pôle : identification seulement (filet, pastille, puce, chiffre). */
type Accent = { '--accent': string; '--accent-soft': string; '--accent-ink': string };

type PoleDef = {
  key: PoleKey;
  accent: Accent;
  tag: Bi;
  /** Libellé court de la barre d'ancres (la version longue reste sur le bandeau). */
  anchorTag: Bi;
  baseline: Bi;
  href: string;
  linkLabel: Bi;
  imageCaption: Bi;
  ctaHint: Bi;
  cta: Bi;
  ctaHref: string;
  ctaExternal?: boolean;
  ctaSecondary: Bi;
  ctaSecondaryHref: string;
  convTitle: Bi;
  convLine: Bi;
};

const POLES: PoleDef[] = [
  {
    key: 'ecom',
    accent: { '--accent': '#163a6e', '--accent-soft': '#eef3fa', '--accent-ink': '#0f2a52' },
    tag: { fr: 'E-commerce · SEO / SEA', en: 'E-commerce · SEO / SEA' },
    anchorTag: { fr: 'E-commerce', en: 'E-commerce' },
    baseline: {
      fr: 'Vingt ans à concevoir, opérer et référencer nos propres boutiques en ligne — et celles de nos clients.',
      en: 'Twenty years designing, running and ranking our own online stores — and our clients’.',
    },
    href: '/alatere-ecom',
    linkLabel: { fr: 'Le savoir-faire ecoM', en: 'The ecoM know-how' },
    imageCaption: {
      fr: 'Capture — page produit du site livré',
      en: 'Screenshot — product page of the delivered store',
    },
    ctaHint: {
      fr: 'Un projet de boutique en ligne ou une refonte à chiffrer ?',
      en: 'An online store project or a redesign to quote?',
    },
    cta: { fr: 'Demander un devis pour mon site marchand', en: 'Request a quote for my online store' },
    ctaHref: '/contact?pole=ecom',
    ctaSecondary: { fr: 'Voir nos sites propriétaires', en: 'See the stores we own' },
    ctaSecondaryHref: '/alatere-ecom',
    convTitle: { fr: 'Vendre en ligne', en: 'Sell online' },
    convLine: {
      fr: 'Création, refonte, SEO/SEA et exploitation quotidienne.',
      en: 'Build, redesign, SEO/SEA and day-to-day operations.',
    },
  },
  {
    key: 'forma',
    accent: { '--accent': 'var(--gold)', '--accent-soft': '#faf5e9', '--accent-ink': '#7a5c22' },
    tag: { fr: 'Formation professionnelle · Qualiopi', en: 'Professional training · Qualiopi' },
    anchorTag: { fr: 'Formation · Qualiopi', en: 'Training · Qualiopi' },
    baseline: {
      fr: `Organisme certifié Qualiopi depuis ${company.qualiopiSince} (n° ${company.formationNumber}). Groupes de 1 à 8, à Antibes ou à distance, financement OPCO / FAF.`,
      en: `Qualiopi-certified provider since ${company.qualiopiSince} (no. ${company.formationNumber}). Groups of 1 to 8, in Antibes or remote, OPCO / FAF funding.`,
    },
    href: '/alatere-forma',
    linkLabel: { fr: 'Les formations professionnelles', en: 'Professional training courses' },
    imageCaption: {
      fr: 'Photo — session de formation, salle Antibes',
      en: 'Photo — training session, Antibes room',
    },
    ctaHint: {
      fr: 'Webmarketing, IA, langues, immobilier, bureautique.',
      en: 'Digital marketing, AI, languages, real estate, office software.',
    },
    cta: { fr: 'Consulter le catalogue de formations', en: 'Browse the training catalog' },
    ctaHref: CATALOG,
    ctaExternal: true,
    ctaSecondary: { fr: 'Étudier mon financement', en: 'Check my funding options' },
    ctaSecondaryHref: '/contact?pole=forma',
    convTitle: { fr: 'Former mes équipes', en: 'Train my team' },
    convLine: {
      fr: 'Parcours sur mesure, prise en charge OPCO ou FAF.',
      en: 'Tailored programmes, OPCO or FAF funding.',
    },
  },
  {
    key: 'domo',
    accent: { '--accent': 'var(--green)', '--accent-soft': '#eaf3ed', '--accent-ink': '#246040' },
    tag: { fr: 'Domiciliation · agréée préfecture', en: 'Registered office · prefecture-approved' },
    anchorTag: { fr: 'Domiciliation', en: 'Business address' },
    baseline: {
      fr: 'Une adresse de siège social en centre-ville d’Antibes : courrier reçu, numérisé, réexpédié.',
      en: 'A registered-office address in central Antibes: mail received, scanned and forwarded.',
    },
    href: '/alatere-domo',
    linkLabel: { fr: 'La domiciliation à Antibes', en: 'Business address in Antibes' },
    imageCaption: {
      fr: 'Photo — courrier client, poste de numérisation',
      en: 'Photo — client mail, scanning desk',
    },
    ctaHint: {
      fr: 'Création de société ou transfert de siège.',
      en: 'New company or registered-office transfer.',
    },
    cta: { fr: 'Voir les tarifs de domiciliation', en: 'See business-address pricing' },
    ctaHref: '/alatere-domo',
    ctaSecondary: { fr: 'Transférer mon siège social', en: 'Move my registered office' },
    ctaSecondaryHref: '/contact?pole=domo',
    convTitle: { fr: 'Domicilier ma société', en: 'Register my company' },
    convLine: {
      fr: 'Adresse agréée, courrier traité, formalités simples.',
      en: 'Approved address, mail handled, simple paperwork.',
    },
  },
  {
    key: 'cowo',
    accent: { '--accent': 'var(--clay)', '--accent-soft': '#faf0e9', '--accent-ink': '#9a4d26' },
    tag: { fr: 'Coworking · salles de réunion', en: 'Coworking · meeting rooms' },
    anchorTag: { fr: 'Coworking', en: 'Coworking' },
    baseline: {
      fr: 'Postes nomades, bureaux fermés et salles de réunion à deux pas du port Vauban, avec des événements business chaque mois.',
      en: 'Hot desks, private offices and meeting rooms a stone’s throw from Port Vauban, with business events every month.',
    },
    href: '/alatere-cowo',
    linkLabel: { fr: 'L’espace de coworking à Antibes', en: 'The coworking space in Antibes' },
    imageCaption: {
      fr: 'Photo — espace coworking, lumière naturelle',
      en: 'Photo — coworking space, natural light',
    },
    ctaHint: {
      fr: 'Venez travailler une journée avant de vous décider.',
      en: 'Come and work for a day before you decide.',
    },
    cta: { fr: 'Réserver une visite de l’espace', en: 'Book a tour of the space' },
    ctaHref: '/contact?pole=cowo',
    ctaSecondary: { fr: 'Réserver une salle de réunion', en: 'Book a meeting room' },
    ctaSecondaryHref: '/alatere-cowo',
    convTitle: { fr: 'Travailler à Antibes', en: 'Work in Antibes' },
    convLine: {
      fr: 'Poste nomade, bureau fermé, salle de réunion.',
      en: 'Hot desk, private office, meeting room.',
    },
  },
];

const TX: Dict = {
  bc_root: { fr: 'Accueil', en: 'Home' },
  bc_leaf: { fr: 'Clients & Réalisations', en: 'Clients & Case Studies' },

  hero_eyebrow: { fr: 'Clients & réalisations', en: 'Clients & case studies' },
  hero_h1: {
    fr: `Ils nous confient leur croissance depuis ${company.since}.`,
    en: `They have trusted us with their growth since ${company.since}.`,
  },
  hero_lead: {
    fr: 'E-commerce, formation, domiciliation, coworking : nos quatre pôles accompagnent la même entreprise à des moments différents de sa vie. Voici ce que nous avons fait, pôle par pôle.',
    en: 'E-commerce, training, business address, coworking: our four divisions support the same company at different points in its life. Here is what we have done, division by division.',
  },

  logos_h2: {
    fr: 'Plus de cent entreprises de la Côte d’Azur',
    en: 'More than a hundred companies on the French Riviera',
  },
  logos_all: { fr: 'Voir tous nos clients', en: 'See all our clients' },
  logos_note: {
    fr: 'Logos affichés avec l’accord de nos clients.',
    en: 'Logos shown with our clients’ permission.',
  },
  logo_slot: { fr: 'Logo client', en: 'Client logo' },

  anchors_label: { fr: 'Nos réalisations par pôle', en: 'Our work by division' },

  case_kind: { fr: 'Étude de cas', en: 'Case study' },
  case_did: { fr: 'Ce que nous avons fait', en: 'What we did' },
  case_more: { fr: 'Lire l’étude de cas', en: 'Read the case study' },
  fold_more: { fr: 'Voir la 3e réalisation', en: 'Show the third project' },
  fold_less: { fr: 'Masquer la 3e réalisation', en: 'Hide the third project' },

  trust1_t: { fr: 'Certifié Qualiopi', en: 'Qualiopi certified' },
  trust2_t: { fr: 'Domiciliation agréée préfecture', en: 'Prefecture-approved business address' },
  trust2_s: { fr: 'Alpes-Maritimes', en: 'Alpes-Maritimes, France' },
  trust3_t: { fr: `Depuis ${company.since}`, en: `Since ${company.since}` },
  trust3_s: { fr: 'Entreprise familiale à Antibes', en: 'A family business in Antibes' },
  trust4_t: { fr: 'Financements OPCO / FAF', en: 'OPCO / FAF funding' },
  trust4_s: {
    fr: 'Prise en charge étudiée avec vous',
    en: 'Funding reviewed together with you',
  },

  conv_h2: { fr: 'Parlons de votre projet.', en: 'Let’s talk about your project.' },
  conv_p: {
    fr: 'Quatre portes d’entrée, un seul interlocuteur. Choisissez le pôle concerné : nous répondons sous 48 heures.',
    en: 'Four ways in, one single contact. Pick the division you need: we reply within 48 hours.',
  },
};

export default function ClientsRealisationsPage() {
  return (
    <div className="g-home cr-page">
      <LangProvider titles={CLIENTS_TITLE}>
        <Header active="clients" />
        <Inner />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Inner() {
  const t = useT(TX);
  const { lang } = useLang();
  const L = (b: Bi) => b[lang];
  const [current, setCurrent] = useState<PoleKey>('ecom');

  // Barre d'ancres : l'état actif suit le bloc de pôle visible (pastille +
  // libellé foncé + soulignement, pour ne pas dépendre de la couleur seule).
  useEffect(() => {
    const sections = POLES.map((p) => document.getElementById(p.key)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrent(visible.target.id as PoleKey);
      },
      { rootMargin: '-140px 0px -55% 0px', threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Le mur garde ses dix-huit cases tant que les logos ne les remplissent pas :
  // les emplacements restants s'affichent en pointillés.
  const logos: (ClientLogo | null)[] = [
    ...CLIENT_LOGOS,
    ...Array.from({ length: Math.max(0, LOGO_SLOTS - CLIENT_LOGOS.length) }, () => null),
  ];

  return (
    <>
      {/* FIL D'ARIANE */}
      <div className="cr-bcbar">
        <nav className="cr-bc" aria-label={t('bc_leaf')}>
          <Link href="/">{t('bc_root')}</Link>
          <span className="cr-bc__sep">/</span>
          <span className="cr-bc__leaf">{t('bc_leaf')}</span>
        </nav>
      </div>

      {/* HERO — court, sans visuel : le mur de logos apparaît au premier scroll */}
      <section className="cr-hero">
        <span className="g-label">{t('hero_eyebrow')}</span>
        <h1>{t('hero_h1')}</h1>
        <p className="cr-hero__lead">{t('hero_lead')}</p>

        <div className="cr-stats">
          {STATS.map((s) => (
            <div
              key={s.label.fr}
              className={`cr-stat${s.value === null ? ' cr-stat--todo' : ''}`}
            >
              <div className="cr-stat__n">{s.value ?? '[00]'}</div>
              <div className="cr-stat__l">{L(s.label)}</div>
              <div className="cr-stat__h">{L(s.hint)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MUR DE LOGOS */}
      <section className="cr-logos">
        <div className="cr-logos__in">
          <div className="cr-logos__hd">
            <h2>{t('logos_h2')}</h2>
            <Link href="/contact" className="cr-logos__all">
              {t('logos_all')}
            </Link>
          </div>
          <div className="cr-logogrid">
            {logos.map((logo, i) =>
              logo ? (
                logo.href ? (
                  <a
                    className="cr-logo"
                    key={logo.name}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.name} loading="lazy" decoding="async" />
                  </a>
                ) : (
                  <div className="cr-logo" key={logo.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.name} loading="lazy" decoding="async" />
                  </div>
                )
              ) : (
                <div className="cr-logo cr-logo--empty" key={i}>
                  <Icon name="image" />
                  <span>{t('logo_slot')}</span>
                </div>
              ),
            )}
          </div>
          <p className="cr-logos__note">{t('logos_note')}</p>
        </div>
      </section>

      {/* BARRE D'ANCRES — colonne vertébrale de la page */}
      <nav className="cr-anchors" aria-label={t('anchors_label')}>
        <div className="cr-anchors__in">
          <span className="cr-anchors__lbl">{t('anchors_label')}</span>
          {POLES.map((p) => (
            <a
              key={p.key}
              href={`#${p.key}`}
              style={p.accent as React.CSSProperties}
              className={`cr-anchor${current === p.key ? ' is-current' : ''}`}
              aria-current={current === p.key ? 'true' : undefined}
            >
              <span className="cr-anchor__dot" />
              <span className="cr-anchor__name">
                <BrandSuffix pole={p.key} />
              </span>
              <span className="cr-anchor__tag">{L(p.anchorTag)}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* UN SEUL GABARIT, RÉPÉTÉ QUATRE FOIS */}
      {POLES.map((p) => (
        <PoleBlock key={p.key} pole={p} />
      ))}

      {/* BANDEAU DE CONFIANCE — seule inversion de la page */}
      <section className="cr-trust">
        <div className="cr-trust__in">
          <div className="cr-trust__item cr-trust__item--gold">
            <Icon name="badge-check" />
            <div>
              <div className="cr-trust__t">{t('trust1_t')}</div>
              <div className="cr-trust__s">n° {company.formationNumber}</div>
            </div>
          </div>
          <span className="cr-trust__sep" />
          <div className="cr-trust__item">
            <Icon name="landmark" />
            <div>
              <div className="cr-trust__t">{t('trust2_t')}</div>
              <div className="cr-trust__s">{t('trust2_s')}</div>
            </div>
          </div>
          <span className="cr-trust__sep" />
          <div className="cr-trust__item">
            <Icon name="calendar-days" />
            <div>
              <div className="cr-trust__t">{t('trust3_t')}</div>
              <div className="cr-trust__s">{t('trust3_s')}</div>
            </div>
          </div>
          <span className="cr-trust__sep" />
          <div className="cr-trust__item">
            <Icon name="wallet" />
            <div>
              <div className="cr-trust__t">{t('trust4_t')}</div>
              <div className="cr-trust__s">{t('trust4_s')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVERSION — quatre sorties, pas une */}
      <section className="cr-conv" id="contact">
        <div className="cr-conv__in">
          <h2>{t('conv_h2')}</h2>
          <p className="cr-conv__p">{t('conv_p')}</p>
          <div className="cr-convgrid">
            {POLES.map((p) => (
              <div className="cr-convcard" key={p.key} style={p.accent as React.CSSProperties}>
                <div className="cr-convcard__hd">
                  <span className="cr-chip__dot" />
                  <span>
                    <BrandSuffix pole={p.key} />
                  </span>
                </div>
                <div className="cr-convcard__t">{L(p.convTitle)}</div>
                <div className="cr-convcard__l">{L(p.convLine)}</div>
                <Link href={`/contact?pole=${p.key}`} className="g-btn g-btn--primary">
                  {L(p.cta)}
                </Link>
              </div>
            ))}
          </div>
          <div className="cr-conv__foot">
            <span>
              {company.address}, {company.postalCode} {company.city}
            </span>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phoneDisplay}</a>
            <Email user="contact" />
          </div>
        </div>
      </section>
    </>
  );
}

/** Bandeau d'entrée + trois études de cas + CTA — identique pour les quatre pôles. */
function PoleBlock({ pole }: { pole: PoleDef }) {
  const t = useT(TX);
  const { lang } = useLang();
  const L = (b: Bi) => b[lang];
  /** Champ qui peut être neutre (« 2024 ») ou bilingue (« Depuis 2019 », « 7 ans »). */
  const LV = (x: string | Bi) => (typeof x === 'string' ? x : L(x));
  const [open, setOpen] = useState(false);
  const cases = CASES[pole.key];

  return (
    <section className="cr-pole" id={pole.key} style={pole.accent as React.CSSProperties}>
      <div className="cr-band">
        <div>
          <span className="cr-chip">
            <span className="cr-chip__dot" />
            <span>{L(pole.tag)}</span>
          </span>
          <h2>
            <BrandName pole={pole.key} />
          </h2>
          <p className="cr-band__base">{L(pole.baseline)}</p>
        </div>
        <Link href={pole.href} className="cr-band__link">
          {L(pole.linkLabel)} <span className="g-arrow">→</span>
        </Link>
      </div>

      <div className={`cr-cards${open ? '' : ' is-folded'}`}>
        {cases.map((c, i) => (
          <article className="cr-case" key={`${pole.key}-${i}`}>
            <div className="cr-case__hd">
              <span className="cr-case__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="cr-case__kind">{t('case_kind')}</span>
            </div>

            <div>
              <div className="cr-case__client">{c.client}</div>
              <div className="cr-case__meta">
                {L(c.secteur)} · {LV(c.annee)}
              </div>
            </div>

            <ImageSlot
              variant="photo"
              cap={L(c.imageCaption ?? pole.imageCaption)}
              src={c.image}
            />

            <p className="cr-case__ctx">{L(c.contexte)}</p>

            <div>
              <span className="g-label">{t('case_did')}</span>
              <div className="cr-bullets">
                {c.bullets.map((b, j) => (
                  <span className="cr-bullet" key={j}>
                    <span>{L(b)}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="cr-res">
              {c.results.map((r, j) => (
                <div key={j}>
                  <div className="cr-res__v">{LV(r.v)}</div>
                  <div className="cr-res__l">{L(r.l)}</div>
                </div>
              ))}
            </div>

            {c.quote ? (
              <figure className="cr-quote">
                <blockquote>
                  <p>{L(c.quote)}</p>
                </blockquote>
                <figcaption className="cr-quote__who">
                  {c.portrait ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="cr-quote__av" src={c.portrait} alt={c.nom ?? ''} loading="lazy" />
                  ) : (
                    <span className="cr-quote__av" />
                  )}
                  <span>
                    <span className="cr-quote__n">{c.nom}</span>
                    <span className="cr-quote__f">{c.fonction ? L(c.fonction) : null}</span>
                  </span>
                </figcaption>
              </figure>
            ) : null}

            {c.href ? (
              <Link href={c.href} className="cr-case__more">
                {t('case_more')} <span className="g-arrow">→</span>
              </Link>
            ) : null}
          </article>
        ))}

        {cases.length > 2 ? (
          <button
            type="button"
            className="cr-fold g-btn g-btn--secondary"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? t('fold_less') : t('fold_more')}
          </button>
        ) : null}
      </div>

      <div className="cr-polecta">
        <span className="cr-polecta__hint">{L(pole.ctaHint)}</span>
        <div className="cr-polecta__btns">
          <Link href={pole.ctaSecondaryHref} className="g-btn g-btn--secondary">
            {L(pole.ctaSecondary)}
          </Link>
          {pole.ctaExternal ? (
            <a
              href={pole.ctaHref}
              className="g-btn g-btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {L(pole.cta)} <span className="g-arrow">→</span>
            </a>
          ) : (
            <Link href={pole.ctaHref} className="g-btn g-btn--primary">
              {L(pole.cta)} <span className="g-arrow">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
