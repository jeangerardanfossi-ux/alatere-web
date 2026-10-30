'use client';

/** À propos - page « entreprise familiale » (handoff Grommet, page de contenu). */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { ImageSlot } from '@/components/grommet/icons';

const TITLE = {
  fr: 'À propos - Alatere Web, entreprise familiale à Antibes',
  en: 'About - Alatere Web, a family business in Antibes',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_self: { fr: 'À propos', en: 'About' },
  page_title: {
    fr: 'Une entreprise familiale, depuis 2002.',
    en: 'A family business since 2002.',
  },
  page_sub: {
    fr: "Créée à Paris en 2002, installée à Antibes depuis 2008, Alatere Web est l'entreprise familiale d'Iveta et Jean-Gérard Anfossi. Elle regroupe quatre activités : e-commerce, formation, domiciliation et coworking.",
    en: 'Founded in Paris in 2002 and based in Antibes since 2008, Alatere Web is the family business of Iveta and Jean-Gérard Anfossi. It runs four activities: e-commerce, training, business address and coworking.',
  },
  st1: { fr: 'Création, à Paris', en: 'Founded, in Paris' },
  st2: { fr: "Boutiques d'art en ligne (Europe & USA)", en: 'Online art stores (Europe & USA)' },
  st3: { fr: 'Activités', en: 'Activities' },
  st4: { fr: 'Organisme de formation certifié', en: 'Certified training provider' },
  s1_t: { fr: 'Notre histoire', en: 'Our story' },
  s1_p1: {
    fr: "En 2002, à Paris, Jean-Gérard Anfossi fonde la SARL MesRecherches et met en ligne repro-tableaux.com, l'une des premières boutiques françaises de reproductions d'œuvres d'art sur toile. Les tableaux sont fabriqués en Allemagne par KunstKopie.de, la société hambourgeoise de Hardy Schulz, qui gère aussi le catalogue d'images d'art. Ce partenariat franco-allemand dure toujours.",
    en: "In 2002, in Paris, Jean-Gérard Anfossi founded MesRecherches SARL and launched repro-tableaux.com, one of the first French online stores for art reproductions on canvas. The canvases are made in Germany by KunstKopie.de, Hardy Schulz's Hamburg company, which also manages the catalogue of art images. The Franco-German partnership is still going.",
  },
  s1_p2: {
    fr: "En 2007, copia-di-arte.com ouvre pour l'Italie, suivi de reprodart.com (Espagne) et art-prints-on-demand.com (États-Unis), puis de myartprints.cz (République tchèque) en 2011. KunstKopie.de fabrique toujours les tableaux et fournit le catalogue. En 2008, l'entreprise quitte Paris pour Antibes et Iveta Anfossi devient associée : l'entreprise devient familiale.",
    en: 'In 2007 we opened copia-di-arte.com for Italy, followed by reprodart.com (Spain) and art-prints-on-demand.com (USA), then myartprints.cz (Czech Republic) in 2011. KunstKopie.de still makes the canvases and supplies the catalogue. In 2008 the company moved from Paris to Antibes and Iveta Anfossi became a partner: from then on it was a family business.',
  },
  s1_p3: {
    fr: "En 2014, l'entreprise change de nom et de statut : la SARL MesRecherches devient Alatere Web SAS. Alatere signifie « aux côtés de » en latin. La même année, après plus de dix ans de web, elle lance ses formations professionnelles en webmarketing : Jean-Gérard y enseigne aux chefs d'entreprise ce qu'il a appris sur ses propres sites.",
    en: 'In 2014 the company changed its name and legal form: MesRecherches SARL became Alatere Web SAS. Alatere means "at the side of" in Latin. The same year, after more than ten years on the web, it launched professional web-marketing training, where Jean-Gérard teaches business owners what he learned running his own sites.',
  },
  s1_p4: {
    fr: "En 2020, l'achat des locaux du 9 boulevard Albert 1er permet d'ouvrir l'espace de coworking Alatere coWo. En 2022, l'activité de formation obtient la certification Qualiopi, qui la rend finançable par les OPCO. Fin 2024, nous lançons la domiciliation d'entreprise Alatere doMo, à la même adresse.",
    en: 'In 2020, buying the premises at 9 boulevard Albert 1er let us open the Alatere coWo coworking space. In 2022 the training business obtained Qualiopi certification, which makes it eligible for OPCO funding. In late 2024 we launched Alatere doMo, a business-address service at the same address.',
  },
  s1_p5: {
    fr: "En 2026, ce site regroupe les quatre pôles : Alatere ecoM (le e-commerce d'art, notre métier d'origine), Alatere forMa (la formation), Alatere doMo (la domiciliation) et Alatere coWo (le coworking). S'y ajoute une activité subsidiaire, Alatere toDo, service de secrétariat virtuel géré par Asnov.fr.",
    en: 'In 2026 this website brings the four divisions together: Alatere ecoM (art e-commerce, our original business), Alatere forMa (training), Alatere doMo (business address) and Alatere coWo (coworking). There is also a subsidiary activity, Alatere toDo, a virtual-secretariat service run by Asnov.fr.',
  },
  s2_t: { fr: 'Alatere, « aux côtés de »', en: 'Alatere, "at the side of"' },
  s2_p_1: {
    fr: 'Concrètement, nous avons choisi de ',
    en: 'In practice, we chose to ',
  },
  s2_p_strong: {
    fr: 'servir un nombre limité de clients',
    en: 'serve a limited number of clients',
  },
  s2_p_2: {
    fr: ", pour rester disponibles et suivre chaque dossier de près. La personne qui vous répond connaît votre dossier, votre métier et votre contexte. Les quatre activités sont au même endroit, avec la même équipe.",
    en: ', so we stay available and follow each file closely. The person who answers knows your file, your trade and your context. All four activities are in one place, with the same team.',
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
    fr: "Lancement de ce site réunissant les quatre marques - Alatere ecoM, forMa, doMo et coWo - et l'activité subsidiaire Alatere toDo (secrétariat virtuel, géré par Asnov.fr).",
    en: 'Launch of this website bringing together the four brands - Alatere ecoM, forMa, doMo and coWo - plus the subsidiary activity Alatere toDo (virtual secretariat, run by Asnov.fr).',
  },
  s3_t: { fr: "L'équipe fondatrice", en: 'The founding team' },
  f1_cap: { fr: 'Photo Iveta', en: 'Photo Iveta' },
  f1_role: { fr: 'Associée, cofondatrice', en: 'Partner, co-founder' },
  f1_p: {
    fr: "Associée depuis 2008, elle pilote les opérations e-commerce et la relation client.",
    en: "A partner since 2008, she runs e-commerce operations and client relations.",
  },
  f2_cap: { fr: 'Photo Jean-Gérard', en: 'Photo Jean-Gérard' },
  f2_role: { fr: 'Fondateur, président', en: 'Founder, president' },
  f2_p: {
    fr: "Fondateur de l'entreprise en 2002, il dirige la stratégie digitale et anime les formations. Il participe à la vie économique et associative d'Antibes.",
    en: "He founded the company in 2002, runs its digital strategy and teaches the training courses. He takes part in Antibes's business and community life.",
  },
  s4_t: { fr: 'À Antibes', en: 'In Antibes' },
  s4_p: {
    fr: "Le 9 Boulevard Albert 1er accueille nos bureaux, notre espace de coworking et la domiciliation de nos clients. Nous travaillons avec de nombreuses entreprises du bassin antibois et, depuis 2025, nous sponsorisons le club de basket féminin OAJLP (NF2).",
    en: "9 Boulevard Albert 1er houses our offices, our coworking space and our clients' registered addresses. We work with many businesses in the Antibes area and, since 2025, we have sponsored the OAJLP women's basketball club (NF2).",
  },
  cta_t: { fr: 'Passer nous voir', en: 'Come and see us' },
  cta_p: {
    fr: "Prenez rendez-vous et venez prendre un café au 9 boulevard Albert 1er.",
    en: 'Book a time and come for a coffee at 9 Boulevard Albert 1er.',
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
