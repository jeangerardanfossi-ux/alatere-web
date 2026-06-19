'use client';

/** À propos — page « entreprise familiale » (handoff Grommet, page de contenu). */

import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { ImageSlot } from '@/components/grommet/icons';

const TITLE = {
  fr: 'À propos — Alatere Web, entreprise familiale à Antibes',
  en: 'About — Alatere Web, a family business in Antibes',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_self: { fr: 'À propos', en: 'About' },
  page_title: {
    fr: 'Une entreprise familiale, depuis 2002.',
    en: 'A family business, since 2002.',
  },
  page_sub: {
    fr: "Fondée à Antibes par Iveta et Jean-Gérard Anfossi, Alatere Web réunit quatre métiers autour d'une même idée : un accompagnement humain et sur mesure, pour un nombre limité de clients.",
    en: 'Founded in Antibes by Iveta and Jean-Gérard Anfossi, Alatere Web brings together four businesses around one idea: human, tailored support for a limited number of clients.',
  },
  st1: { fr: 'Année de fondation à Antibes', en: 'Founded in Antibes' },
  st2: { fr: "Ans d'opération e-commerce", en: 'Years of e-commerce operation' },
  st3: { fr: 'Activités complémentaires', en: 'Complementary activities' },
  st4: { fr: 'Organisme de formation certifié', en: 'Certified training provider' },
  s1_t: { fr: 'Notre histoire', en: 'Our story' },
  s1_p1: {
    fr: "Tout commence en 2002, lorsque Iveta et Jean-Gérard Anfossi lancent leur première boutique d'art en ligne depuis Antibes. Vingt ans plus tard, repro-tableaux.com et copia-di-arte.com sont toujours opérés en propre — un laboratoire grandeur nature qui nourrit chacun de nos métiers.",
    en: 'It all began in 2002, when Iveta and Jean-Gérard Anfossi launched their first online art store from Antibes. Twenty years later, repro-tableaux.com and copia-di-arte.com are still run in-house — a real-world lab that feeds every one of our businesses.',
  },
  s1_p2: {
    fr: "De cette expertise e-commerce sont nées trois autres activités : la formation professionnelle (Alatere forMa), la domiciliation d'entreprise (Alatere doMo) et l'espace de coworking (Alatere coWo). Quatre métiers, un même lieu, une même équipe.",
    en: 'From this e-commerce expertise grew three other activities: professional training (Alatere forMa), business address services (Alatere doMo) and the coworking space (Alatere coWo). Four businesses, one place, one team.',
  },
  s2_t: { fr: 'Notre conviction', en: 'Our conviction' },
  s2_p_1: {
    fr: 'Nous avons fait un choix simple : ',
    en: 'We made a simple choice: ',
  },
  s2_p_strong: {
    fr: 'servir un nombre limité de clients',
    en: 'serve a limited number of clients',
  },
  s2_p_2: {
    fr: ', pour garantir une disponibilité réelle et des conseils personnalisés. Pas de centre d\'appels, pas de réponse standardisée — un interlocuteur qui connaît votre dossier et votre contexte.',
    en: ', to guarantee genuine availability and personalized advice. No call center, no canned answers — one contact who knows your file and your context.',
  },
  t1_t: { fr: "Création d'Alatere Web", en: 'Alatere Web is born' },
  t1_p: {
    fr: "Lancement à Antibes et mise en ligne de la première boutique de reproductions d'art.",
    en: 'Launch in Antibes and the first art-reproduction store goes live.',
  },
  t2_t: { fr: "Ouverture à l'Europe", en: 'Opening up to Europe' },
  t2_p: {
    fr: 'Lancement de copia-di-arte.com et apprentissage du e-commerce multilingue.',
    en: 'Launch of copia-di-arte.com and learning multilingual e-commerce.',
  },
  t3_t: { fr: "L'agence webmarketing", en: 'The web-marketing agency' },
  t3_p: {
    fr: "Notre savoir-faire SEO/SEA est mis au service de clients PME de la Côte d'Azur.",
    en: 'Our SEO/SEA know-how is put to work for SME clients on the French Riviera.',
  },
  t4_t: { fr: "Centre d'affaires", en: 'Business center' },
  t4_p: {
    fr: "Ouverture de la domiciliation (doMo) et de l'espace de coworking (coWo) au 9 Bd Albert 1er.",
    en: 'Opening of the business-address (doMo) and coworking (coWo) services at 9 Bd Albert 1er.',
  },
  t5_t: { fr: 'Certification Qualiopi', en: 'Qualiopi certification' },
  t5_p: {
    fr: 'Alatere forMa devient organisme de formation certifié, finançable OPCO.',
    en: 'Alatere forMa becomes a certified training provider, OPCO-fundable.',
  },
  s3_t: { fr: "L'équipe fondatrice", en: 'The founding team' },
  f1_cap: { fr: 'Photo Iveta', en: 'Photo Iveta' },
  f1_role: { fr: 'Cofondatrice', en: 'Co-founder' },
  f1_p: {
    fr: "Pilote les opérations e-commerce et la relation client. Garante de l'exigence de service qui fait la signature d'Alatere.",
    en: "Leads e-commerce operations and client relations. Guardian of the service standard that is Alatere's signature.",
  },
  f2_cap: { fr: 'Photo Jean-Gérard', en: 'Photo Jean-Gérard' },
  f2_role: { fr: 'Président, cofondateur', en: 'President, co-founder' },
  f2_p: {
    fr: "Dirige la stratégie digitale et les formations. Engagé dans le tissu économique et associatif d'Antibes.",
    en: 'Drives digital strategy and training. Active in the economic and community life of Antibes.',
  },
  s4_t: { fr: 'Ancrés à Antibes', en: 'Rooted in Antibes' },
  s4_p: {
    fr: "Implantés au cœur d'Antibes, nous sommes engagés localement : sponsoring associatif, participation à la vie économique et à la commission culturelle. Notre adresse du 9 Boulevard Albert 1er accueille aussi bien nos bureaux que notre espace de coworking et la domiciliation de nos clients.",
    en: 'Based in the heart of Antibes, we are locally committed: association sponsorship, involvement in economic life and the cultural commission. Our address at 9 Boulevard Albert 1er hosts our offices as well as our coworking space and our clients\' business address.',
  },
  cta_t: { fr: "Envie d'en savoir plus ?", en: 'Want to know more?' },
  cta_p: {
    fr: "Rencontrons-nous autour d'un café, au cœur d'Antibes.",
    en: "Let's meet over a coffee, in the heart of Antibes.",
  },
  cta_btn: { fr: 'Nous rencontrer', en: 'Meet us' },
};

export default function AProposPage() {
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
          <a href="/">{t('bc_home')}</a> <span>/</span> <span>{t('bc_self')}</span>
        </div>
        <h1>{t('page_title')}</h1>
        <p className="g-page-sub">{t('page_sub')}</p>
      </div>

      <div className="ab-stats">
        <div className="ab-stat">
          <strong>2002</strong>
          <span>{t('st1')}</span>
        </div>
        <div className="ab-stat">
          <strong>20+</strong>
          <span>{t('st2')}</span>
        </div>
        <div className="ab-stat">
          <strong>4</strong>
          <span>{t('st3')}</span>
        </div>
        <div className="ab-stat">
          <strong>Qualiopi</strong>
          <span>{t('st4')}</span>
        </div>
      </div>

      <div className="g-prose">
        <section>
          <h2>{t('s1_t')}</h2>
          <p>{t('s1_p1')}</p>
          <p>{t('s1_p2')}</p>
        </section>

        <section>
          <h2>{t('s2_t')}</h2>
          <p>
            {t('s2_p_1')}
            <strong>{t('s2_p_strong')}</strong>
            {t('s2_p_2')}
          </p>
        </section>
      </div>

      <div className="ab-timeline">
        {[
          ['2002', t('t1_t'), t('t1_p')],
          ['2008', t('t2_t'), t('t2_p')],
          ['2015', t('t3_t'), t('t3_p')],
          ['2020', t('t4_t'), t('t4_p')],
          ['2023', t('t5_t'), t('t5_p')],
        ].map(([yr, h, p]) => (
          <div className="ab-row" key={yr}>
            <div className="ab-yr">{yr}</div>
            <div className="ab-ev">
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="g-prose">
        <section>
          <h2>{t('s3_t')}</h2>
        </section>
      </div>
      <div className="ab-founders">
        <div className="ab-founder">
          <ImageSlot cap={t('f1_cap')} src="/photos/iveta.webp" />
          <div>
            <h3>Iveta Anfossi</h3>
            <div className="ab-role">{t('f1_role')}</div>
            <p>{t('f1_p')}</p>
          </div>
        </div>
        <div className="ab-founder">
          <ImageSlot cap={t('f2_cap')} src="/photos/jean-gerard.webp" />
          <div>
            <h3>Jean-Gérard Anfossi</h3>
            <div className="ab-role">{t('f2_role')}</div>
            <p>{t('f2_p')}</p>
          </div>
        </div>
      </div>

      <div className="g-prose">
        <section>
          <h2>{t('s4_t')}</h2>
          <p>{t('s4_p')}</p>
        </section>
      </div>

      <div className="g-pagecta">
        <div className="g-pagecta__inner">
          <div>
            <h2>{t('cta_t')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <a href="/contact" className="g-btn g-btn--light g-btn--lg">
            <span>{t('cta_btn')}</span> <span className="g-arrow">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
