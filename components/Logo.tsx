import styles from './Logo.module.css';

/**
 * Marque Alatere Web.
 *
 * Pour l'instant : monogramme typographique « AW » dans une pastille claire
 * (le logo PNG fourni a un fond blanc opaque, mal adapté en grand).
 *
 * 👉 Pour utiliser le logo vectoriel définitif : déposer `public/logo-alatere.svg`
 *    et remplacer le <span> par <img src="/logo-alatere.svg" .../> (ou next/image).
 */
export default function Logo({
  size = 46,
  withWordmark = true,
  variant = 'light',
}: {
  size?: number;
  withWordmark?: boolean;
  variant?: 'light' | 'dark';
}) {
  return (
    <span className={`${styles.brand} ${variant === 'dark' ? styles.dark : ''}`}>
      <span
        className={styles.badge}
        style={{ width: size, height: size, fontSize: size * 0.42 }}
        aria-hidden="true"
      >
        AW
      </span>
      {withWordmark && (
        <span className={styles.words}>
          <span className={styles.name}>Alatere&nbsp;Web</span>
          <span className={styles.tagline}>Antibes · depuis 2002</span>
        </span>
      )}
    </span>
  );
}
