'use client';

/** Pied de page « Grommet » partagé (FR/EN). */

import Link from 'next/link';
import { useT, useLang, localizePath, type Dict } from './lang';
import { Icon, BrandIcon } from './icons';
import { company } from '@/lib/site';
import { Email } from '@/components/grommet/Email';

const BADGE = '/alatere-web-badge.webp';
const CATALOG = 'https://alatere-web.catalogueformpro.com';

const FOOT: Dict = {
  foot_country: { fr: 'France', en: 'France' },
  foot_col1: { fr: 'Activités', en: 'Activities' },
  foot_a1: { fr: 'Alatere ecoM', en: 'Alatere ecoM' },
  foot_a2: { fr: 'Alatere forMa', en: 'Alatere forMa' },
  foot_a3: { fr: 'Alatere doMo', en: 'Alatere doMo' },
  foot_a4: { fr: 'Alatere coWo', en: 'Alatere coWo' },
  foot_a5: { fr: 'Alatere toDo', en: 'Alatere toDo' },
  foot_col2: { fr: 'Liens utiles', en: 'Useful links' },
  foot_l1: { fr: 'Catalogue formations', en: 'Training catalog' },
  foot_l3: { fr: 'Nos formateurs', en: 'Our trainers' },
  foot_l2: { fr: 'À propos', en: 'About' },
  foot_l6: { fr: 'Ressources (blog)', en: 'Resources (blog)' },
  foot_l5: { fr: 'Secrétariat externalisé', en: 'Outsourced secretariat' },
  foot_l4: { fr: 'Nous contacter', en: 'Contact us' },
  foot_col3: { fr: 'Informations légales', en: 'Legal information' },
  foot_g1: { fr: 'Mentions légales', en: 'Legal notice' },
  foot_g2: { fr: 'Confidentialité', en: 'Privacy' },
  foot_g6: { fr: 'CGV', en: 'Terms of sale' },
  foot_g4: { fr: 'Accessibilité et handicap', en: 'Accessibility' },
  foot_g3: { fr: 'Certification Qualiopi', en: 'Qualiopi certification' },
  foot_g7: { fr: 'Plan du site', en: 'Sitemap' },
  foot_rights: {
    fr: '© 2026 Alatere Web SAS — Tous droits réservés',
    en: '© 2026 Alatere Web SAS — All rights reserved',
  },
  foot_legal2: {
    fr: 'SIRET 443 421 334 00030 · RCS Antibes · Organisme de formation enregistré sous le numéro 93.06.07588.06',
    en: 'SIRET 443 421 334 00030 · RCS Antibes · Registered training provider no. 93.06.07588.06',
  },
  follow_title: { fr: 'Suivez-nous', en: 'Follow us' },
  foot_maps: { fr: 'Nous trouver sur Google Maps', en: 'Find us on Google Maps' },
};

/** Réseaux sociaux par entité de marque. */
const SOCIALS = [
  {
    label: 'Alatere Web',
    facebook: 'https://www.facebook.com/alatereweb',
    linkedin: 'https://www.linkedin.com/company/alatere-web/',
  },
  {
    label: 'Alatere doMo · coWo',
    facebook: 'https://www.facebook.com/alateredomo/',
    linkedin: 'https://www.linkedin.com/showcase/alatere-domo/',
  },
];

export default function Footer() {
  const t = useT(FOOT);
  const { lang } = useLang();
  const lp = (h: string) => localizePath(h, lang);
  return (
    <footer className="g-footer">
      <div className="g-footer__top">
        <div className="g-footer__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BADGE} alt="Alatere Web" width={800} height={800} loading="lazy" decoding="async" />
          <div>
            <div className="g-footer__name">Alatere Web SAS</div>
            <div className="g-footer__addr">
              9 Boulevard Albert 1er
              <br />
              06600 Antibes — {t('foot_country')}
              <br />
              07 61 56 45 56 · <Email user="contact" />
            </div>

            <a
              className="g-footer__maps"
              href={company.mapsForma}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="map-pin" /> <span>{t('foot_maps')}</span>
            </a>

            <div className="g-social">
              <span className="g-social__title">{t('follow_title')}</span>
              {SOCIALS.map((s) => (
                <div className="g-social__group" key={s.label}>
                  <span className="g-social__label">{s.label}</span>
                  <div className="g-social__icons">
                    <a
                      href={s.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} sur Facebook`}
                    >
                      <BrandIcon name="facebook" />
                    </a>
                    <a
                      href={s.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} sur LinkedIn`}
                    >
                      <BrandIcon name="linkedin" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="g-footer__cols">
          <div>
            <span className="g-label">{t('foot_col1')}</span>
            <Link href={lp('/alatere-ecom')}>
              <Icon name="shopping-bag" /> <span>{t('foot_a1')}</span>
            </Link>
            <Link href={lp('/alatere-forma')}>
              <Icon name="graduation-cap" /> <span>{t('foot_a2')}</span>
            </Link>
            <Link href={lp('/alatere-domo')}>
              <Icon name="map-pin" /> <span>{t('foot_a3')}</span>
            </Link>
            <Link href={lp('/alatere-cowo')}>
              <Icon name="users-round" /> <span>{t('foot_a4')}</span>
            </Link>
            <a href="/alatere-todo.html">
              <Icon name="clipboard-check" /> <span>{t('foot_a5')}</span>
            </a>
          </div>
          <div>
            <span className="g-label">{t('foot_col2')}</span>
            <a href={CATALOG} target="_blank" rel="noopener noreferrer">
              <Icon name="external-link" /> <span>{t('foot_l1')}</span>
            </a>
            <Link href={lp('/alatere-forma/formateurs')}>
              <Icon name="users" /> <span>{t('foot_l3')}</span>
            </Link>
            <Link href={lp('/a-propos')}>
              <Icon name="info" /> <span>{t('foot_l2')}</span>
            </Link>
            <Link href={lp('/blog')}>
              <Icon name="book-open" /> <span>{t('foot_l6')}</span>
            </Link>
            <a href="/alatere-todo.html">
              <Icon name="clipboard-check" /> <span>{t('foot_l5')}</span>
            </a>
            <a href="https://repro-tableaux.com" target="_blank" rel="noopener noreferrer">
              <Icon name="external-link" /> <span>repro-tableaux.com</span>
            </a>
            <Link href={lp('/contact')}>
              <Icon name="mail" /> <span>{t('foot_l4')}</span>
            </Link>
          </div>
          <div>
            <span className="g-label">{t('foot_col3')}</span>
            <Link href={lp('/mentions-legales')}>
              <Icon name="file-text" /> <span>{t('foot_g1')}</span>
            </Link>
            <Link href={lp('/confidentialite')}>
              <Icon name="shield" /> <span>{t('foot_g2')}</span>
            </Link>
            <Link href={lp('/conditions-generales-de-vente')}>
              <Icon name="file-text" /> <span>{t('foot_g6')}</span>
            </Link>
            <Link href={lp('/accessibilite-et-handicap')}>
              <Icon name="accessibility" /> <span>{t('foot_g4')}</span>
            </Link>
            <Link href={lp('/organisme-de-formation')}>
              <Icon name="badge-check" /> <span>{t('foot_g3')}</span>
            </Link>
            <Link href={lp('/plan-du-site')}>
              <Icon name="navigation" /> <span>{t('foot_g7')}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="g-footer__legal">
        <span>{t('foot_rights')}</span>
        <span>{t('foot_legal2')}</span>
      </div>
    </footer>
  );
}
