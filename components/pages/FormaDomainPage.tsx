'use client';

/** Alatere forMa - sous-page « domaine » générique (handoff Grommet, accent or). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useLang, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon } from '@/components/grommet/icons';
import { FORMA_FAQ, type FormaDomain, type Bi } from '@/lib/forma-domains';

const CATALOG = 'https://alatere-web.catalogueformpro.com';

const ACCENT = {
  '--accent': 'var(--gold)',
  '--accent-dark': 'var(--gold-dark)',
  '--accent-soft': 'var(--gold-soft)',
} as React.CSSProperties;

/** Libellés constants, partagés par toutes les sous-pages domaines. */
const TX: Dict = {
  bc_root: { fr: 'Alatere Web', en: 'Alatere Web' },
  bc_forma: { fr: 'Alatere forMa', en: 'Alatere forMa' },

  hero_cta1: { fr: 'Voir les programmes au catalogue', en: 'View the programs in the catalog' },
  hero_cta2: { fr: 'Demander un devis', en: 'Request a quote' },
  enbref: { fr: 'En bref', en: 'In brief' },

  comp_tag: { fr: 'Compétences', en: 'Skills' },
  comp_h: { fr: 'Compétences visées', en: 'Target skills' },
  comp_p: {
    fr: "À l'issue des parcours de ce domaine, vous serez en capacité de :",
    en: "By the end of this field's courses, you will be able to:",
  },
  prog_tag: { fr: 'Programmes', en: 'Programs' },
  prog_h: { fr: 'Formations de ce domaine', en: 'Courses in this field' },
  prog_p: {
    fr: 'Sélection de programmes. Objectifs, durées, prérequis, tarifs et dates sur le catalogue.',
    en: 'A selection of programs. Objectives, durations, prerequisites, prices and dates on the catalog.',
  },
  prog_note: {
    fr: "Liste non exhaustive - consultez le catalogue pour l'ensemble des sessions.",
    en: 'Non-exhaustive list - see the catalog for all sessions.',
  },

  pourqui: { fr: 'Pour qui', en: 'Who for' },
  meta_h: { fr: 'Publics, prérequis & débouchés', en: 'Audiences, prerequisites & outcomes' },
  publics: { fr: 'Publics visés', en: 'Target audiences' },
  prereq: { fr: 'Prérequis', en: 'Prerequisites' },
  debouches: { fr: 'Débouchés', en: 'Outcomes' },

  quiforme: { fr: 'Qui forme', en: 'Who teaches' },
  votreform: { fr: 'Votre formateur sur ce domaine', en: 'Your trainer in this field' },
  ref_role_team: { fr: 'Équipe pédagogique', en: 'Teaching team' },
  ref_h_team: {
    fr: 'Des formateurs experts de leur domaine',
    en: 'Trainers who are experts in their field',
  },
  ref_p_team: {
    fr: "Ce domaine est animé par des intervenants praticiens, sélectionnés pour leur expérience de terrain. Découvrez l'équipe qui vous accompagne.",
    en: 'This field is led by practitioner trainers, chosen for their hands-on experience. Meet the team supporting you.',
  },
  voir_formateurs: { fr: 'Voir nos formateurs', en: 'Meet our trainers' },
  ref_role_lead: { fr: 'Formateur référent', en: 'Lead trainer' },
  tous_formateurs: { fr: 'Tous les formateurs', en: 'All trainers' },
  linkedin: { fr: 'Profil LinkedIn ↗', en: 'LinkedIn profile ↗' },

  cta_h: { fr: 'Un besoin de formation ?', en: 'Need training?' },
  cta_p: {
    fr: 'Devis sous 48 heures, démarrage sous 14 jours. Financement OPCO accompagné.',
    en: 'Quote within 48 hours, start within 14 days. OPCO funding supported.',
  },
  cta_b1: { fr: 'Demander un devis', en: 'Request a quote' },
  cta_b2: { fr: 'Voir le catalogue ↗', en: 'View the catalog ↗' },

  faq_label: { fr: 'FAQ', en: 'FAQ' },
  faq_title: { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
};

export default function FormaDomainPage({ domain }: { domain: FormaDomain }) {
  return (
    <div className="g-home" style={ACCENT}>
      <LangProvider titles={domain.metaTitle}>
        <Header active="forma" />
        <Body domain={domain} />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Body({ domain }: { domain: FormaDomain }) {
  const t = useT(TX);
  const { lang } = useLang();
  const L = (b: Bi) => b[lang];
  const faqs = FORMA_FAQ[domain.slug] ?? [];

  return (
    <>
      <main id="top">
        {/* HERO */}
        <section className="f-hero">
          <div>
            <div className="f-breadcrumb">
              <Link href="/">{t('bc_root')}</Link> <span>›</span>{' '}
              <Link href="/alatere-forma">{t('bc_forma')}</Link> <span>›</span>{' '}
              <span>{L(domain.name)}</span>
            </div>
            <Icon name={domain.icon} className="fd-hero__ic" />
            <span className="g-label">
              <span className="g-tag g-tag--gold">{L(domain.tag)}</span>
            </span>
            <h1 className="g-h1" style={{ marginTop: 10 }}>
              {L(domain.name)}
            </h1>
            <p className="g-lead">{L(domain.lead)}</p>
            <div className="f-hero__cta">
              <a
                href={CATALOG}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn g-btn--primary g-btn--lg"
              >
                {t('hero_cta1')} <span className="g-arrow">↗</span>
              </a>
              <a href="#contact" className="g-btn g-btn--secondary g-btn--lg">
                {t('hero_cta2')}
              </a>
            </div>
          </div>
          <aside className="fd-aside">
            <span className="g-label">{t('enbref')}</span>
            <div className="fd-facts">
              {domain.facts.map((f) => (
                <div className="fd-fact" key={f.fr}>
                  <Icon name="info" />
                  <span>{L(f)}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* COMPÉTENCES / PROGRAMMES */}
        <section className="f-section">
          <div className="fd-split">
            <div className="fd-block">
              <span className="g-label">
                <span className="g-tag g-tag--gold">{t('comp_tag')}</span>
              </span>
              <h2>{t('comp_h')}</h2>
              <p>{t('comp_p')}</p>
              <ul className="fd-skills">
                {domain.skills.map((s) => (
                  <li key={s.fr}>
                    <Icon name="check" /> <span>{L(s)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fd-block">
              <span className="g-label">
                <span className="g-tag g-tag--gold">{t('prog_tag')}</span>
              </span>
              <h2>{t('prog_h')}</h2>
              <p>{t('prog_p')}</p>
              <ul className="fd-progs">
                {domain.programs.map((p) => (
                  <a
                    className="fd-prog"
                    key={p.fr}
                    href={CATALOG}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{L(p)}</span>
                    <Icon name="external-link" />
                  </a>
                ))}
              </ul>
              <p className="fd-progs__note">{t('prog_note')}</p>
            </div>
          </div>
        </section>

        {/* PUBLICS / PRÉREQUIS / DÉBOUCHÉS */}
        <section className="f-section--alt">
          <div className="f-inner">
            <div className="f-head">
              <span className="g-label">
                <span className="g-tag g-tag--gold">{t('pourqui')}</span>
              </span>
              <h2 className="g-h2">{t('meta_h')}</h2>
            </div>
            <div className="fd-meta">
              <div className="fd-metacard">
                <h3>
                  <Icon name="users" /> {t('publics')}
                </h3>
                <ul>
                  {domain.audiences.map((a) => (
                    <li key={a.fr}>{L(a)}</li>
                  ))}
                </ul>
              </div>
              <div className="fd-metacard">
                <h3>
                  <Icon name="list-checks" /> {t('prereq')}
                </h3>
                <ul>
                  {domain.prereqs.map((p) => (
                    <li key={p.fr}>{L(p)}</li>
                  ))}
                </ul>
              </div>
              <div className="fd-metacard">
                <h3>
                  <Icon name="trending-up" /> {t('debouches')}
                </h3>
                <ul>
                  {domain.outcomes.map((o) => (
                    <li key={o.fr}>{L(o)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FORMATEUR */}
        <section className="f-section">
          <div className="f-head">
            <span className="g-label">
              <span className="g-tag g-tag--gold">{t('quiforme')}</span>
            </span>
            <h2 className="g-h2">{t('votreform')}</h2>
          </div>
          {domain.referent ? (
            <div className="fd-ref">
              <div className="fm-avatar fm-avatar--lg">{domain.referent.initials}</div>
              <div className="fd-ref__txt">
                <div className="fd-ref__role">{t('ref_role_lead')}</div>
                <h3>{domain.referent.name}</h3>
                <p>{L(domain.referent.detail)}</p>
              </div>
              <a
                href={domain.referent.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn g-btn--secondary"
              >
                {t('linkedin')}
              </a>
              <Link href="/alatere-forma/formateurs" className="g-btn g-btn--primary">
                {t('tous_formateurs')} <span className="g-arrow">→</span>
              </Link>
            </div>
          ) : (
            <div className="fd-ref">
              <div className="fm-avatar fm-avatar--lg" aria-hidden="true">
                <Icon name="users" />
              </div>
              <div className="fd-ref__txt">
                <div className="fd-ref__role">{t('ref_role_team')}</div>
                <h3>{t('ref_h_team')}</h3>
                <p>{t('ref_p_team')}</p>
              </div>
              <Link href="/alatere-forma/formateurs" className="g-btn g-btn--primary">
                {t('voir_formateurs')} <span className="g-arrow">→</span>
              </Link>
            </div>
          )}
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="f-section" id="faq">
            <div className="f-head">
              <span className="g-label">
                <span className="g-tag g-tag--gold">{t('faq_label')}</span>
              </span>
              <h2 className="g-h2">{t('faq_title')}</h2>
            </div>
            <div className="g-faq">
              {faqs.map((f) => (
                <details key={f.q.fr}>
                  <summary>{L(f.q)}</summary>
                  <div className="g-faq__a">{L(f.a)}</div>
                </details>
              ))}
            </div>
          </section>
        )}
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
            <a
              href={CATALOG}
              target="_blank"
              rel="noopener noreferrer"
              className="g-btn g-btn--ghost-light g-btn--lg"
            >
              {t('cta_b2')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
