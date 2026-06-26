'use client';

/** Plan du site — liste lisible de toutes les pages (FR/EN). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useT, useLang, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';

const TITLE = {
  fr: 'Plan du site — Alatere Web',
  en: 'Sitemap — Alatere Web',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_self: { fr: 'Plan du site', en: 'Sitemap' },
  page_title: { fr: 'Plan du site', en: 'Sitemap' },
  page_sub: {
    fr: "Toutes les pages du site alatere-web.com, regroupées par thème.",
    en: 'All pages of alatere-web.com, grouped by theme.',
  },

  g1: { fr: 'Nos activités', en: 'Our activities' },
  g2: { fr: 'Pages principales', en: 'Main pages' },
  g3: { fr: 'Ressources & Guides', en: 'Resources & Guides' },
  g4: { fr: 'Informations légales', en: 'Legal information' },

  // Activités
  ecom: { fr: 'Alatere ecoM — e-commerce', en: 'Alatere ecoM — e-commerce' },
  forma: { fr: 'Alatere forMa — formations', en: 'Alatere forMa — training' },
  domo: { fr: 'Alatere doMo — domiciliation', en: 'Alatere doMo — business address' },
  cowo: { fr: 'Alatere coWo — coworking', en: 'Alatere coWo — coworking' },
  todo: { fr: 'Alatere toDo — secrétariat externalisé', en: 'Alatere toDo — outsourced secretariat' },

  // Principales
  home: { fr: 'Accueil', en: 'Home' },
  apropos: { fr: 'À propos', en: 'About' },
  organisme: { fr: 'Organisme de formation', en: 'Training provider' },
  contact: { fr: 'Contact', en: 'Contact' },
  catalog: { fr: 'Catalogue de formations', en: 'Training catalog' },

  // Blog
  blog: { fr: 'Tous les articles', en: 'All articles' },
  art1: { fr: "Domicilier son entreprise à Antibes", en: 'Registering a business address in Antibes' },
  art2: { fr: 'Financer une formation (OPCO, FAF)', en: 'Funding training (OPCO, FAF)' },
  art3: { fr: 'Coworking à Antibes — le guide', en: 'Coworking in Antibes — the guide' },
  art4: { fr: 'Domiciliation ou bureau à Antibes ?', en: 'Business address or office in Antibes?' },

  // Légales
  mentions: { fr: 'Mentions légales', en: 'Legal notice' },
  confid: { fr: 'Politique de confidentialité', en: 'Privacy policy' },
  cgv: { fr: 'Conditions générales de vente', en: 'Terms of sale' },
  access: { fr: 'Accessibilité et handicap', en: 'Accessibility' },
};

export default function PlanDuSitePage() {
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

const CATALOG = 'https://alatere-web.catalogueformpro.com';

function Body() {
  const t = useT(TX);
  const { lang } = useLang();
  const ext = lang === 'fr' ? 'nouvel onglet' : 'new tab';

  return (
    <main>
      <div className="g-pagehero">
        <div className="g-breadcrumb">
          <Link href="/">{t('bc_home')}</Link> <span>/</span> <span>{t('bc_self')}</span>
        </div>
        <h1>{t('page_title')}</h1>
        <p className="g-page-sub">{t('page_sub')}</p>
      </div>

      <div className="g-prose">
        <section>
          <h2>{t('g1')}</h2>
          <ul className="g-sitemap">
            <li><Link href="/alatere-ecom">{t('ecom')}</Link></li>
            <li><Link href="/alatere-forma">{t('forma')}</Link></li>
            <li><Link href="/alatere-domo">{t('domo')}</Link></li>
            <li><Link href="/alatere-cowo">{t('cowo')}</Link></li>
            <li><a href="/alatere-todo.html">{t('todo')}</a></li>
          </ul>
        </section>

        <section>
          <h2>{t('g2')}</h2>
          <ul className="g-sitemap">
            <li><Link href="/">{t('home')}</Link></li>
            <li><Link href="/a-propos">{t('apropos')}</Link></li>
            <li><Link href="/organisme-de-formation">{t('organisme')}</Link></li>
            <li><Link href="/contact">{t('contact')}</Link></li>
            <li>
              <a href={CATALOG} target="_blank" rel="noopener noreferrer">
                {t('catalog')} <span className="g-sitemap__ext">↗ {ext}</span>
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>{t('g3')}</h2>
          <ul className="g-sitemap">
            <li><Link href="/blog">{t('blog')}</Link></li>
            <li><Link href="/blog/domicilier-entreprise-antibes">{t('art1')}</Link></li>
            <li><Link href="/blog/financer-formation-opco-faf">{t('art2')}</Link></li>
            <li><Link href="/blog/coworking-antibes-guide">{t('art3')}</Link></li>
            <li><Link href="/blog/domiciliation-ou-bureau-antibes">{t('art4')}</Link></li>
          </ul>
        </section>

        <section>
          <h2>{t('g4')}</h2>
          <ul className="g-sitemap">
            <li><Link href="/mentions-legales">{t('mentions')}</Link></li>
            <li><Link href="/confidentialite">{t('confid')}</Link></li>
            <li><Link href="/conditions-generales-de-vente">{t('cgv')}</Link></li>
            <li><Link href="/accessibilite-et-handicap">{t('access')}</Link></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
