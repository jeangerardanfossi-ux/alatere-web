'use client';

/** À propos — page « entreprise familiale » (handoff Grommet, page de contenu). */

import Link from '@/components/grommet/LocalizedLink';
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
    fr: 'À vos côtés, depuis 2002.',
    en: 'At your side, since 2002.',
  },
  page_sub: {
    fr: "Née à Paris en 2002, installée à Antibes depuis 2008, Alatere Web est l'entreprise familiale d'Iveta et Jean-Gérard Anfossi. Quatre métiers, une même idée : être à vos côtés, avec un accompagnement humain et sur mesure.",
    en: 'Born in Paris in 2002, settled in Antibes since 2008, Alatere Web is the family business of Iveta and Jean-Gérard Anfossi. Four trades, one idea: to be at your side, with human, tailor-made support.',
  },
  st1: { fr: 'Création, à Paris', en: 'Founded, in Paris' },
  st2: { fr: "Boutiques d'art en ligne (Europe & USA)", en: 'Online art stores (Europe & USA)' },
  st3: { fr: 'Activités complémentaires', en: 'Complementary activities' },
  st4: { fr: 'Organisme de formation certifié', en: 'Certified training provider' },
  s1_t: { fr: 'Notre histoire', en: 'Our story' },
  s1_p1: {
    fr: "L'aventure commence à Paris, en 2002. Jean-Gérard Anfossi fonde la SARL MesRecherches et met en ligne repro-tableaux.com, l'une des premières boutiques françaises de reproductions d'œuvres d'art sur toile. Dès le départ, c'est une histoire de partenariat : les tableaux sont fabriqués en Allemagne par KunstKopie.de, la société hambourgeoise de Hardy Schulz, qui gère le catalogue d'images d'art. Une collaboration franco-allemande qui dure encore aujourd'hui.",
    en: 'The adventure began in Paris, in 2002. Jean-Gérard Anfossi founded MesRecherches SARL and launched repro-tableaux.com, one of the first French online stores for art reproductions on canvas. From the very start it was a story of partnership: the canvases are made in Germany by KunstKopie.de, the Hamburg company of Hardy Schulz, which manages the catalogue of art images — a Franco-German collaboration that still endures today.',
  },
  s1_p2: {
    fr: "Le succès appelle l'international. En 2007 naît copia-di-arte.com pour l'Italie, bientôt suivi de reprodart.com (Espagne) et art-prints-on-demand.com (États-Unis), puis de myartprints.cz (République tchèque) en 2011 — toujours en partenariat avec KunstKopie.de, qui fabrique les tableaux et fournit le catalogue d'art. Entre-temps, en 2008, l'entreprise quitte Paris pour Antibes — et Iveta Anfossi rejoint l'aventure comme associée. D'un couple naît une entreprise familiale.",
    en: 'Success called for going international. In 2007 came copia-di-arte.com for Italy, soon followed by reprodart.com (Spain) and art-prints-on-demand.com (USA), then myartprints.cz (Czech Republic) in 2011 — still in partnership with KunstKopie.de, which makes the canvases and supplies the art catalogue. Meanwhile, in 2008, the company left Paris for Antibes — and Iveta Anfossi joined the venture as a partner. From a couple grew a family business.',
  },
  s1_p3: {
    fr: "En 2014, l'entreprise change de nom et de statut : la SARL MesRecherches devient Alatere Web SAS. Alatere, en latin, signifie « aux côtés de ». Tout un programme. Car cette année-là, forte de plus de dix ans d'expérience du web, elle lance son activité de formation professionnelle en webmarketing : Jean-Gérard se met aux côtés des chefs d'entreprise pour leur transmettre ce qu'il a appris sur le terrain.",
    en: 'In 2014, the company changed both its name and its legal form: MesRecherches SARL became Alatere Web SAS. Alatere, in Latin, means "at the side of". A whole programme in one word. For that year, with more than ten years of web experience behind it, the company launched its professional web-marketing training: Jean-Gérard set himself at the side of business leaders to pass on what he had learned in the field.',
  },
  s1_p4: {
    fr: "Le mot prend tout son sens au fil des années. En 2020, l'achat des locaux du 9 boulevard Albert 1er ouvre l'espace de coworking Alatere coWo : être aux côtés des entrepreneurs qui partagent ses bureaux. En 2022, l'activité de formation décroche la certification Qualiopi, qui la rend finançable par les OPCO. Et fin 2024, le lancement de la domiciliation Alatere doMo prolonge la même idée : être aux côtés des entreprises qu'elle héberge. Aux côtés de KunstKopie.de depuis le premier jour, des dirigeants qu'elle forme, des indépendants qu'elle accueille, des sociétés qu'elle domicilie — Alatere n'a jamais cessé d'être fidèle à son nom.",
    en: 'The word took on its full meaning over the years. In 2020, the purchase of the premises at 9 boulevard Albert 1er opened the Alatere coWo coworking space: being at the side of the entrepreneurs who share its offices. In 2022, the training business earned Qualiopi certification, making it OPCO-fundable. And in late 2024, the launch of Alatere doMo business-address services extended the same idea: being at the side of the companies it hosts. At the side of KunstKopie.de since day one, of the leaders it trains, the freelancers it welcomes, the companies it domiciles — Alatere has never stopped living up to its name.',
  },
  s1_p5: {
    fr: "Aujourd'hui, en 2026, Alatere Web réunit ses quatre pôles sous un même toit numérique avec ce nouveau site : Alatere ecoM (son métier historique de e-commerce d'art), Alatere forMa (la formation), Alatere doMo (la domiciliation) et Alatere coWo (le coworking). S'y ajoute une activité subsidiaire, Alatere toDo, service de secrétariat virtuel géré par Asnov.fr.",
    en: 'Today, in 2026, Alatere Web brings its four divisions together under one digital roof with this new website: Alatere ecoM (its historic art e-commerce business), Alatere forMa (training), Alatere doMo (business address) and Alatere coWo (coworking). Alongside them sits a subsidiary activity, Alatere toDo, a virtual-secretariat service run by Asnov.fr.',
  },
  s2_t: { fr: 'Alatere, « aux côtés de »', en: 'Alatere, "at your side"' },
  s2_p_1: {
    fr: 'Un nom, une promesse. Être à vos côtés n\'est pas une formule : c\'est un choix d\'organisation. Nous avons décidé de ',
    en: 'A name, a promise. Being at your side is not a slogan: it is a way of organising ourselves. We chose to ',
  },
  s2_p_strong: {
    fr: 'servir un nombre limité de clients',
    en: 'serve a limited number of clients',
  },
  s2_p_2: {
    fr: ", pour garantir une vraie disponibilité et des conseils personnalisés. Pas de centre d'appels, pas de réponse standardisée — un interlocuteur qui connaît votre dossier, votre métier et votre contexte. Quatre activités, un même lieu, une même équipe, et la même exigence : avancer à vos côtés.",
    en: ', to guarantee genuine availability and personalised advice. No call center, no canned answers — one contact who knows your file, your trade and your context. Four activities, one place, one team, and the same standard: moving forward at your side.',
  },
  t1_t: { fr: "Naissance à Paris", en: 'Born in Paris' },
  t1_p: {
    fr: "Jean-Gérard Anfossi fonde la SARL MesRecherches et lance repro-tableaux.com, en partenariat avec la société allemande KunstKopie.de.",
    en: 'Jean-Gérard Anfossi founds MesRecherches SARL and launches repro-tableaux.com, in partnership with the German company KunstKopie.de.',
  },
  t2_t: { fr: "Cap sur l'international", en: 'Going international' },
  t2_p: {
    fr: "Lancement de copia-di-arte.com (Italie), reprodart.com (Espagne) et art-prints-on-demand.com (USA), toujours en partenariat avec la société allemande KunstKopie.de.",
    en: 'Launch of copia-di-arte.com (Italy), reprodart.com (Spain) and art-prints-on-demand.com (USA), still in partnership with the German company KunstKopie.de.',
  },
  t3_t: { fr: "Installation à Antibes", en: 'Settling in Antibes' },
  t3_p: {
    fr: "L'entreprise s'installe sur la Côte d'Azur ; Iveta Anfossi la rejoint comme associée.",
    en: 'The company settles on the French Riviera; Iveta Anfossi joins as a partner.',
  },
  t4_t: { fr: "Cinquième boutique d'art", en: 'Fifth art store' },
  t4_p: {
    fr: 'Ouverture de myartprints.cz pour le marché tchèque.',
    en: 'Launch of myartprints.cz for the Czech market.',
  },
  t5_t: { fr: "Naissance d'Alatere Web", en: 'Alatere Web is born' },
  t5_p: {
    fr: "MesRecherches SARL devient Alatere Web SAS (« aux côtés de » en latin) et lance la formation professionnelle en webmarketing (forMa).",
    en: 'MesRecherches SARL becomes Alatere Web SAS ("at the side of" in Latin) and launches professional web-marketing training (forMa).',
  },
  t6_t: { fr: "L'espace de coworking coWo", en: 'The coWo coworking space' },
  t6_p: {
    fr: "Achat du 9 boulevard Albert 1er à Antibes et ouverture de l'espace de coworking Alatere coWo.",
    en: 'Purchase of 9 boulevard Albert 1er in Antibes and opening of the Alatere coWo coworking space.',
  },
  t7_t: { fr: "Certification Qualiopi", en: 'Qualiopi certification' },
  t7_p: {
    fr: "Alatere forMa devient organisme de formation certifié Qualiopi, finançable par les OPCO.",
    en: 'Alatere forMa becomes a Qualiopi-certified training provider, fundable by the OPCOs.',
  },
  t8_t: { fr: "La domiciliation doMo", en: 'doMo business address' },
  t8_p: {
    fr: "Fin 2024, lancement du service de domiciliation d'entreprise Alatere doMo.",
    en: 'In late 2024, launch of the Alatere doMo business-address service.',
  },
  t9_t: { fr: "Le nouveau site & les 4 pôles", en: 'The new site & four divisions' },
  t9_p: {
    fr: "Lancement de ce site réunissant les quatre marques — Alatere ecoM, forMa, doMo et coWo — et l'activité subsidiaire Alatere toDo (secrétariat virtuel, géré par Asnov.fr).",
    en: 'Launch of this website bringing together the four brands — Alatere ecoM, forMa, doMo and coWo — plus the subsidiary activity Alatere toDo (virtual secretariat, run by Asnov.fr).',
  },
  s3_t: { fr: "L'équipe fondatrice", en: 'The founding team' },
  f1_cap: { fr: 'Photo Iveta', en: 'Photo Iveta' },
  f1_role: { fr: 'Associée, cofondatrice', en: 'Partner, co-founder' },
  f1_p: {
    fr: "Associée depuis 2008, elle pilote les opérations e-commerce et la relation client. Garante de l'exigence de service qui fait la signature d'Alatere.",
    en: "A partner since 2008, she leads e-commerce operations and client relations. Guardian of the service standard that is Alatere's signature.",
  },
  f2_cap: { fr: 'Photo Jean-Gérard', en: 'Photo Jean-Gérard' },
  f2_role: { fr: 'Fondateur, président', en: 'Founder, president' },
  f2_p: {
    fr: "Fondateur de l'entreprise en 2002, il dirige la stratégie digitale et anime les formations. Engagé dans le tissu économique et associatif d'Antibes.",
    en: 'Founder of the company in 2002, he drives digital strategy and leads the training. Active in the economic and community life of Antibes.',
  },
  s4_t: { fr: 'Ancrés à Antibes', en: 'Rooted in Antibes' },
  s4_p: {
    fr: "Implantés au cœur d'Antibes, nous sommes profondément ancrés dans le tissu local, par notre situation comme par notre engagement. Nous accompagnons de nombreuses entreprises du bassin et soutenons, depuis 2025, le club de basket féminin OAJLP (NF2) en sponsoring sportif. Notre adresse du 9 Boulevard Albert 1er accueille aussi bien nos bureaux que notre espace de coworking et la domiciliation de nos clients.",
    en: "Based in the heart of Antibes, we are deeply rooted in the local fabric — through our location as much as our commitment. We support many businesses in the area and, since 2025, sponsor the OAJLP women's basketball club (NF2). Our address at 9 Boulevard Albert 1er hosts our offices as well as our coworking space and our clients' business address.",
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
          <strong>5</strong>
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
          <p>{t('s1_p3')}</p>
          <p>{t('s1_p4')}</p>
          <p>{t('s1_p5')}</p>
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
          ['2007', t('t2_t'), t('t2_p')],
          ['2008', t('t3_t'), t('t3_p')],
          ['2011', t('t4_t'), t('t4_p')],
          ['2014', t('t5_t'), t('t5_p')],
          ['2020', t('t6_t'), t('t6_p')],
          ['2022', t('t7_t'), t('t7_p')],
          ['2024', t('t8_t'), t('t8_p')],
          ['2026', t('t9_t'), t('t9_p')],
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
          <Link href="/contact" className="g-btn g-btn--light g-btn--lg">
            <span>{t('cta_btn')}</span> <span className="g-arrow">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
