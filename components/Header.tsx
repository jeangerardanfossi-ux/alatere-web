'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import Logo from './Logo';
import { nav } from '@/lib/site';
import styles from './Header.module.css';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brandLink} aria-label="Alatere Web — accueil">
          <Logo size={46} />
        </a>

        <nav className={styles.nav} aria-label="Navigation principale">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta}>
            Prendre rendez-vous →
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon color="brand" /> : <MenuIcon color="brand" />}
        </button>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link href="#contact" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Prendre rendez-vous →
          </Link>
        </div>
      )}
    </header>
  );
}
