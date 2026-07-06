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

/** Présentations rédigées d'après le profil LinkedIn de chaque formateur. */
const FORMATEURS: Formateur[] = [
  {
    initials: 'JA',
    name: 'Jean-Gérard Anfossi',
    role: { fr: 'Fondateur & formateur', en: 'Founder & trainer' },
    linkedin: 'https://www.linkedin.com/in/jeangerardanfossi/',
    bio: {
      fr: (
        <>
          Fondateur d&apos;Alatere Web, Jean-Gérard forme depuis plus de vingt ans dirigeants et
          équipes à la communication digitale, au webmarketing et à l&apos;intelligence artificielle
          appliquée à leur métier. Certifié Google Ads et Meta Blueprint, il privilégie des
          formations concrètes, du référencement à l&apos;usage quotidien des outils IA.
        </>
      ),
      en: (
        <>
          Founder of Alatere Web, Jean-Gérard has spent over twenty years training leaders and teams
          in digital communication, web marketing and AI applied to their business. Google Ads and
          Meta Blueprint certified, he favours hands-on courses, from SEO to the everyday use of AI
          tools.
        </>
      ),
    },
  },
  {
    initials: 'SB',
    name: 'Simona Ballatore',
    role: { fr: 'Formatrice réseaux sociaux & Canva', en: 'Social media & Canva trainer' },
    linkedin: 'https://www.linkedin.com/in/simona-ballatore-4287355b/',
    bio: {
      fr: (
        <>
          Simona forme à la gestion des réseaux sociaux et à la création visuelle avec Canva. Elle
          aide dirigeants et équipes à gagner en autonomie sur leur communication en ligne :
          planification des publications, identité visuelle et contenus qui engagent.
        </>
      ),
      en: (
        <>
          Simona trains in social media management and visual content creation with Canva. She helps
          leaders and teams become self-sufficient in their online communication: content planning,
          visual identity and engaging posts.
        </>
      ),
    },
  },
  {
    initials: 'HM',
    name: 'Hélène Michailou',
    role: { fr: 'Juriste & formatrice', en: 'Lawyer & trainer' },
    linkedin: 'https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-michailou-74b1a81/',
    bio: {
      fr: (
        <>
          Juriste et formatrice spécialisée en droit immobilier, Hélène transmet à des publics
          variés, des créateurs d&apos;entreprise aux cadres dirigeants, un socle juridique concret :
          droit du travail, droit des affaires, propriété intellectuelle, responsabilité civile et
          pénale.
        </>
      ),
      en: (
        <>
          A lawyer and legal trainer specialising in real estate law, Hélène teaches a wide range of
          audiences, from business founders to senior managers, a practical legal grounding:
          employment law, business law, intellectual property, and civil and criminal liability.
        </>
      ),
    },
  },
  {
    initials: 'BA',
    name: 'Barbara Arcadu',
    role: { fr: 'Consultante SEA & formatrice', en: 'SEA consultant & trainer' },
    linkedin: 'https://www.linkedin.com/in/barbara-arcadu-58601732/',
    bio: {
      fr: (
        <>
          Consultante SEA senior, Barbara pilote depuis des années des campagnes Google Ads et
          Microsoft Ads à forts budgets (voyage, mode, B2B, mobilier). Certifiée Google Ads, Google
          Analytics et Microsoft Ads, elle forme au référencement payant et à la publicité en ligne
          avec une exigence de résultats mesurables.
        </>
      ),
      en: (
        <>
          A senior SEA consultant, Barbara has managed high-budget Google Ads and Microsoft Ads
          campaigns for years (travel, fashion, B2B, furniture). Google Ads, Google Analytics and
          Microsoft Ads certified, she trains in paid search and online advertising with a focus on
          measurable results.
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
          Consultant webmarketing indépendant à Antibes, Richard accompagne depuis 2020 les
          dirigeants de TPE-PME dans leur visibilité en ligne. Référent du domaine{' '}
          <strong>Webmarketing</strong> chez Alatere forMa, il forme au référencement naturel (SEO),
          à la publicité Google (SEA), à Google Business Profile et aux réseaux sociaux.
        </>
      ),
      en: (
        <>
          An independent web marketing consultant in Antibes, Richard has supported small-business
          leaders with their online visibility since 2020. Lead for the{' '}
          <strong>Web marketing</strong> field at Alatere forMa, he trains in SEO, Google Ads (SEA),
          Google Business Profile and social media.
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
          Coach professionnel, Vincent accompagne dirigeants et équipes sur la Côte d&apos;Azur.
          Formé au management, aux sciences humaines et à la PNL, il intervient sur le développement
          personnel et professionnel : communication, gestion du stress et des conflits, confiance en
          soi, posture managériale et motivation.
        </>
      ),
      en: (
        <>
          A professional coach, Vincent supports leaders and teams across the French Riviera. Trained
          in management, human sciences and NLP, he works on personal and professional development:
          communication, stress and conflict management, self-confidence, managerial posture and
          motivation.
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
