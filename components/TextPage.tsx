import SiteHeader from './Header';
import SiteFooter from './SiteFooter';
import styles from './TextPage.module.css';

export default function TextPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className={styles.inner}>
          <h1 className={styles.h1}>{title}</h1>
          <div className={styles.prose}>{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
