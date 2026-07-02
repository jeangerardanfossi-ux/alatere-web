'use client';

/** Alatere forMa - page « Nos formateurs » (handoff Grommet, accent or). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useLang, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon, BrandIcon } from '@/components/grommet/icons';
import type { ReactNode } from 'react';

const ACCENT = {
  '--accent': 'var(--gold)',
  '--accent-dark': 'var(--gold-dark)',
  '--accent-soft': 'var(--gold-soft)',
} as React.CSSProperties;

export const FORMATEURS_TITLE = {
  fr: 'Alatere forMa - Nos formateurs',
  en: 'Alatere forMa - Our trainers',
};

type Formateur = {
  initials: string;
  name: string;
  role: { fr: string; en: string };
  linkedin: string;
  bio: { fr: ReactNode; en: ReactNode };
};

/** Présentations à compléter - transmises par le client (titre, spécialité, bio courte). */
const FORMATEURS: Formateur[] = [
  {
    initials: 'JA',
    name: 'Jean-Gérard Anfossi',
    role: { fr: 'Formateur', en: 'Trainer' },
    linkedin: 'https://www.linkedin.com/in/jeangerardanfossi/',
    bio: {
      fr: (
        <>
          <em>Présentation à compléter :</em> parcours, domaines d&apos;intervention et formations
          animées au sein d&apos;Alatere forMa.
        </>
      ),
      en: (
        <>
          <em>Bio to be completed:</em> background, fields of work and courses delivered at Alatere
          forMa.
        </>
      ),
    },
  },
  {
    initials: 'SB',
    name: 'Simona Ballatore',
    role: { fr: 'Formatrice', en: 'Trainer' },
    linkedin: 'https://www.linkedin.com/in/simona-ballatore-4287355b/',
    bio: {
      fr: (
        <>
          <em>Présentation à compléter :</em> parcours, domaines d&apos;intervention et formations
          animées au sein d&apos;Alatere forMa.
        </>
      ),
      en: (
        <>
          <em>Bio to be completed:</em> background, fields of work and courses delivered at Alatere
          forMa.
        </>
      ),
    },
  },
  {
    initials: 'HM',
    name: 'Hélène Michailou',
    role: { fr: 'Formatrice', en: 'Trainer' },
    linkedin: 'https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-michailou-74b1a81/',
    bio: {
      fr: (
        <>
          <em>Présentation à compléter :</em> parcours, domaines d&apos;intervention et formations
          animées au sein d&apos;Alatere forMa.
        </>
      ),
      en: (
        <>
          <em>Bio to be completed:</em> background, fields of work and courses delivered at Alatere
          forMa.
        </>
      ),
    },
  },
  {
    initials: 'BA',
    name: 'Barbara Arcadu',
    role: { fr: 'Formatrice', en: 'Trainer' },
    linkedin: 'https://www.linkedin.com/in/barbara-arcadu-58601732/',
    bio: {
      fr: (
        <>
          <em>Présentation à compléter :</em> parcours, domaines d&apos;intervention et formations
          animées au sein d&apos;Alatere forMa.
        </>
      ),
      en: (
        <>
          <em>Bio to be completed:</em> background, fields of work and courses delivered at Alatere
          forMa.
        </>
      ),
    },
  },
  {
    initials: 'RS',
    name: 'Richard Solaro',
    role: { fr: 'Consultant webmarketing', en: 'Web marketing consultant' },
    linkedin: 'https://www.linkedin.com/in/richard-solaro-consultant-webmarketing/',
    bio: {
      fr: (
        <>
          Consultant en webmarketing - référent du domaine <strong>Webmarketing</strong> (SEO, SEA,
          acquisition). <em>Présentation détaillée à compléter.</em>
        </>
      ),
      en: (
        <>
          Web marketing consultant - lead for the field <strong>Web marketing</strong> (SEO, SEA,
          acquisition). <em>Detailed bio to be completed.</em>
        </>
      ),
    },
  },
  {
    initials: 'VH',
    name: 'Vincent Huot',
    role: { fr: 'Coach professionnel & formateur', en: 'Professional coach & trainer' },
    linkedin: 'https://www.linkedin.com/in/vincent-huot-coaching/',
    bio: {
      fr: (
        <>
          Coach professionnel et formateur. <em>Présentation détaillée à compléter :</em> approche,
          domaines d&apos;intervention et formations animées.
        </>
      ),
      en: (
        <>
          Professional coach and trainer. <em>Detailed bio to be completed:</em> approach, fields of
          work and courses delivered.
        </>
      ),
    },
  },
];

const TX: Dict = {
  bc_root: { fr: 'Alatere Web', en: 'Alatere Web' },
  bc_forma: { fr: 'Alatere forMa', en: 'Alatere forMa' },
  bc_leaf: { fr: 'Nos formateurs', en: 'Our trainers' },

  hero_tag: { fr: "L'équipe pédagogique", en: 'The teaching team' },
  hero_h1: { fr: 'Nos formateurs', en: 'Our trainers' },
  hero_lead: {
    fr: "Derrière chaque formation, des praticiens. Notre équipe réunit des intervenants expérimentés, choisis pour leur expertise de terrain et leur sens de la transmission - du webmarketing à l'intelligence artificielle, des langues à l'immobilier.",
    en: 'Behind every course, practitioners. Our team brings together experienced trainers, chosen for their hands-on expertise and their gift for teaching - from web marketing to artificial intelligence, from languages to real estate.',
  },
  hero_cta1: { fr: 'Voir les domaines', en: 'View the fields' },
  hero_cta2: { fr: 'Nous contacter', en: 'Contact us' },

  aside_label: { fr: "L'équipe en bref", en: 'The team at a glance' },
  fact1_strong: { fr: '6 formateurs', en: '6 trainers' },
  fact1_rest: { fr: ' praticiens', en: ' practitioners' },
  fact2: { fr: '5 domaines de compétences couverts', en: '5 fields of expertise covered' },
  fact3: {
    fr: 'Basés à Antibes, interventions à distance',
    en: 'Based in Antibes, remote sessions available',
  },
  fact4: { fr: 'Organisme certifié Qualiopi', en: 'Qualiopi-certified provider' },

  team_label: { fr: "L'équipe", en: 'The team' },
  team_h2: { fr: 'Celles et ceux qui vous forment', en: 'The people who train you' },
  team_p: {
    fr: 'Six intervenants, une même exigence pédagogique. Cliquez sur un profil LinkedIn pour en savoir plus sur leur parcours.',
    en: 'Six trainers, one shared teaching standard. Click a LinkedIn profile to learn more about their background.',
  },
  linkedin_btn: { fr: 'Profil LinkedIn ↗', en: 'LinkedIn profile ↗' },
  note: {
    fr: 'Les présentations ci-dessus sont des emplacements à compléter. Transmettez-nous le titre, la spécialité et une courte biographie de chaque formateur (2 à 3 phrases) et nous les intégrerons.',
    en: "The bios above are placeholders to be completed. Send us each trainer's title, specialty and a short biography (2–3 sentences) and we'll add them.",
  },

  cta_h: { fr: "Envie de rejoindre l'équipe ?", en: 'Want to join the team?' },
  cta_p: {
    fr: 'Vous êtes formateur et notre approche vous parle ? Écrivons la suite ensemble.',
    en: "Are you a trainer and our approach resonates with you? Let's write the next chapter together.",
  },
  cta_b1: { fr: 'Nous écrire', en: 'Write to us' },
  cta_b2: { fr: 'Retour à forMa', en: 'Back to forMa' },
};

export default function FormateursPage() {
  return (
    <div className="g-home" style={ACCENT}>
      <LangProvider titles={FORMATEURS_TITLE}>
        <Header active="forma" />
        <Body />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Body() {
  const t = useT(TX);
  const { lang } = useLang();

  return (
    <>
      <main id="top">
        {/* HERO */}
        <section className="f-hero">
          <div>
            <div className="f-breadcrumb">
              <Link href="/">{t('bc_root')}</Link> <span>›</span>{' '}
              <Link href="/alatere-forma">{t('bc_forma')}</Link> <span>›</span>{' '}
              <span>{t('bc_leaf')}</span>
            </div>
            <span className="g-label">
              <span className="g-tag g-tag--gold">{t('hero_tag')}</span>
            </span>
            <h1 className="g-h1" style={{ marginTop: 10 }}>
              {t('hero_h1')}
            </h1>
            <p className="g-lead">{t('hero_lead')}</p>
            <div className="f-hero__cta">
              <Link href="/alatere-forma#domaines" className="g-btn g-btn--primary g-btn--lg">
                {t('hero_cta1')} <span className="g-arrow">→</span>
              </Link>
              <Link href="/contact?pole=forma" className="g-btn g-btn--secondary g-btn--lg">
                {t('hero_cta2')}
              </Link>
            </div>
          </div>
          <aside className="fd-aside">
            <span className="g-label">{t('aside_label')}</span>
            <div className="fd-facts">
              <div className="fd-fact">
                <Icon name="users" />
                <span>
                  <strong>{t('fact1_strong')}</strong>
                  {t('fact1_rest')}
                </span>
              </div>
              <div className="fd-fact">
                <Icon name="layers" />
                <span>{t('fact2')}</span>
              </div>
              <div className="fd-fact">
                <Icon name="map-pin" />
                <span>{t('fact3')}</span>
              </div>
              <div className="fd-fact">
                <Icon name="badge-check" />
                <span>{t('fact4')}</span>
              </div>
            </div>
          </aside>
        </section>

        {/* GRILLE FORMATEURS */}
        <section className="f-section">
          <div className="f-head">
            <span className="g-label">
              <span className="g-tag g-tag--gold">{t('team_label')}</span>
            </span>
            <h2 className="g-h2">{t('team_h2')}</h2>
            <p>{t('team_p')}</p>
          </div>

          <div className="fm-grid">
            {FORMATEURS.map((f) => (
              <article className="fm-card" key={f.initials}>
                <div className="fm-card__head">
                  <div className="fm-avatar">{f.initials}</div>
                  <div className="fm-card__id">
                    <h3>{f.name}</h3>
                    <p className="fm-role">{f.role[lang]}</p>
                  </div>
                </div>
                <p className="fm-bio">{f.bio[lang]}</p>
                <a className="fm-link" href={f.linkedin} target="_blank" rel="noopener noreferrer">
                  <BrandIcon name="linkedin" /> {t('linkedin_btn')}
                </a>
              </article>
            ))}
          </div>

          <div className="fm-note">
            <Icon name="pencil" />
            <span>{t('note')}</span>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="f-cta" id="contact">
        <div className="f-cta__in">
          <div>
            <h2>{t('cta_h')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <div className="f-cta__btns">
            <Link href="/contact?pole=forma" className="g-btn g-btn--light g-btn--lg">
              {t('cta_b1')} <span className="g-arrow">→</span>
            </Link>
            <Link href="/alatere-forma" className="g-btn g-btn--ghost-light g-btn--lg">
              {t('cta_b2')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
