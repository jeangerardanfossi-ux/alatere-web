'use client';

/** Accessibilité et handicap - page prose (charte Grommet). Exigence Qualiopi. */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useT, type Dict } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Email } from '@/components/grommet/Email';

const TITLE = {
  fr: 'Accessibilité et handicap - Alatere forMa',
  en: 'Accessibility & disability - Alatere forMa',
};

const TX: Dict = {
  bc_home: { fr: 'Accueil', en: 'Home' },
  bc_forma: { fr: 'Alatere forMa', en: 'Alatere forMa' },
  bc_self: { fr: 'Accessibilité et handicap', en: 'Accessibility & disability' },
  page_title: { fr: 'Accessibilité et handicap', en: 'Accessibility & disability' },
  page_sub: {
    fr: "Alatere forMa s'engage à rendre ses formations accessibles à toutes et tous, y compris aux personnes en situation de handicap.",
    en: 'Alatere forMa is committed to making its training accessible to everyone, including people with disabilities.',
  },

  s1_t: { fr: 'Notre engagement', en: 'Our commitment' },
  s1_p: {
    fr: "Conformément au référentiel national qualité (Qualiopi) et à la loi du 11 février 2005, nous mettons tout en œuvre pour que chaque personne, quelle que soit sa situation, puisse suivre nos formations dans les meilleures conditions. Aucune candidature n'est écartée en raison d'un handicap : nous recherchons systématiquement les adaptations possibles.",
    en: 'In line with the national quality framework (Qualiopi) and the French law of 11 February 2005, we do everything possible so that every person, whatever their situation, can attend our training under the best conditions. No application is rejected because of a disability: we systematically look for possible adjustments.',
  },

  s2_t: { fr: 'Accessibilité des locaux', en: 'Premises accessibility' },
  s2_p: {
    fr: "Nos sessions en présentiel se tiennent au 9 Boulevard Albert 1er, 06600 Antibes, en centre-ville, à proximité de la gare SNCF et du port Vauban. Pour toute question sur l'accès aux locaux ou un besoin d'aménagement spécifique (stationnement, accès, salle), contactez-nous en amont : nous étudions chaque demande et proposons, si nécessaire, une solution alternative (autre salle accessible ou modalité à distance).",
    en: 'Our in-person sessions take place at 9 Boulevard Albert 1er, 06600 Antibes, in the town centre, near the SNCF station and Port Vauban. For any question about access to the premises or a specific accommodation need (parking, access, room), contact us beforehand: we review each request and, if needed, offer an alternative solution (another accessible room or a remote format).',
  },

  s3_t: { fr: 'Adaptation des formations', en: 'Adapting the training' },
  s3_p: {
    fr: 'Selon les besoins identifiés, nous pouvons adapter :',
    en: 'Depending on the needs identified, we can adapt:',
  },
  s3_l1: {
    fr: 'les supports pédagogiques (formats accessibles, contrastes, taille de police, versions audio ou numériques) ;',
    en: 'teaching materials (accessible formats, contrast, font size, audio or digital versions);',
  },
  s3_l2: {
    fr: 'le rythme et la durée (séquençage, pauses, temps majoré) ;',
    en: 'pace and duration (sequencing, breaks, extended time);',
  },
  s3_l3: {
    fr: 'les modalités (présentiel, distanciel synchrone ou parcours mixte, individualisation) ;',
    en: 'delivery (in person, synchronous remote or blended, individualization);',
  },
  s3_l4: {
    fr: "les modalités d'évaluation (aménagements adaptés au handicap).",
    en: 'assessment methods (adjustments suited to the disability).',
  },

  s4_t: { fr: 'Votre référent handicap', en: 'Your disability liaison' },
  s4_p: {
    fr: "Un référent handicap dédié est votre interlocuteur pour étudier votre situation, en toute confidentialité, et construire avec vous les aménagements nécessaires - idéalement avant le démarrage de la formation.",
    en: 'A dedicated disability liaison is your point of contact to review your situation, in full confidentiality, and build the necessary accommodations with you - ideally before the training starts.',
  },
  kv_ref: { fr: 'Référente handicap', en: 'Disability liaison' },
  kv_ref_v: { fr: 'Iveta Anfossi', en: 'Iveta Anfossi' },
  kv_mail: { fr: 'E-mail', en: 'Email' },
  kv_phone: { fr: 'Téléphone', en: 'Phone' },

  s5_t: { fr: 'Comment signaler un besoin', en: 'How to flag a need' },
  s5_p_a: {
    fr: "Indiquez-nous votre besoin dès la prise de contact ou lors de l'entretien de positionnement, par e-mail à ",
    en: 'Tell us about your need from first contact or during the assessment interview, by email at ',
  },
  s5_p_b: {
    fr: ' ou par téléphone. Plus la demande est anticipée, plus nous pouvons mobiliser les ressources et partenaires adaptés dans de bonnes conditions.',
    en: ' or by phone. The earlier the request, the better we can mobilize the right resources and partners under good conditions.',
  },

  s6_t: { fr: 'Ressources et partenaires', en: 'Resources and partners' },
  s6_p: {
    fr: "Lorsque la situation le nécessite, nous nous appuyons sur les acteurs spécialisés : l'Agefiph et les Ressources Handicap Formation (RHF) de la région, le réseau Cap emploi, ainsi que la Maison départementale des personnes handicapées (MDPH) des Alpes-Maritimes.",
    en: 'When needed, we rely on specialized stakeholders: Agefiph and the regional Disability Training Resources (RHF), the Cap emploi network, and the departmental disability office (MDPH) of the Alpes-Maritimes.',
  },

  cta_t: { fr: 'Un besoin spécifique ? Parlons-en.', en: 'A specific need? Let’s talk.' },
  cta_p: {
    fr: 'Notre référent handicap revient vers vous sous 48 heures.',
    en: 'Our disability liaison gets back to you within 48 hours.',
  },
  cta_b: { fr: 'Nous contacter', en: 'Contact us' },
};

export default function AccessibilitePage() {
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
    <main id="top">
      <div className="g-pagehero">
        <div className="g-breadcrumb">
          <Link href="/">{t('bc_home')}</Link> <span>›</span>{' '}
          <Link href="/alatere-forma">{t('bc_forma')}</Link> <span>›</span>{' '}
          <span>{t('bc_self')}</span>
        </div>
        <h1>{t('page_title')}</h1>
        <p className="g-page-sub">{t('page_sub')}</p>
      </div>

      <div className="g-prose">
        <section>
          <h2>{t('s1_t')}</h2>
          <p>{t('s1_p')}</p>
        </section>

        <section>
          <h2>{t('s2_t')}</h2>
          <p>{t('s2_p')}</p>
        </section>

        <section>
          <h2>{t('s3_t')}</h2>
          <p>{t('s3_p')}</p>
          <ul>
            <li>{t('s3_l1')}</li>
            <li>{t('s3_l2')}</li>
            <li>{t('s3_l3')}</li>
            <li>{t('s3_l4')}</li>
          </ul>
        </section>

        <section>
          <h2>{t('s4_t')}</h2>
          <p>{t('s4_p')}</p>
          <dl className="g-kv">
            <dt>{t('kv_ref')}</dt>
            <dd>{t('kv_ref_v')}</dd>
            <dt>{t('kv_mail')}</dt>
            <dd>
              <Email className="g-inline" user="handicap" />
            </dd>
            <dt>{t('kv_phone')}</dt>
            <dd>07 61 56 45 56</dd>
          </dl>
        </section>

        <section>
          <h2>{t('s5_t')}</h2>
          <p>{t('s5_p_a')}<Email user="handicap" />{t('s5_p_b')}</p>
        </section>

        <section>
          <h2>{t('s6_t')}</h2>
          <p>{t('s6_p')}</p>
        </section>
      </div>

      <div className="g-pagecta">
        <div className="g-pagecta__inner">
          <div>
            <h2>{t('cta_t')}</h2>
            <p>{t('cta_p')}</p>
          </div>
          <Link href="/contact" className="g-btn g-btn--light g-btn--lg">
            {t('cta_b')} <span className="g-arrow">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
