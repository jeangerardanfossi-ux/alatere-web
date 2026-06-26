'use client';

/** Index du blog « Ressources » (liste des articles) — bilingue FR/EN. */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useLang } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { BrandName } from '@/components/grommet/BrandName';
import { posts, formatDate, localizePost } from '@/lib/blog';

const TITLES = {
  fr: 'Ressources & guides — Alatere Web',
  en: 'Resources & guides — Alatere Web',
};

export default function BlogIndex() {
  return (
    <div className="g-home">
      <LangProvider titles={TITLES}>
        <Header />
        <BlogList />
        <Footer />
      </LangProvider>
    </div>
  );
}

function BlogList() {
  const { lang } = useLang();
  const t = (fr: string, en: string) => (lang === 'en' ? en : fr);

  return (
    <main>
      <div className="g-pagehero">
        <div className="g-breadcrumb">
          <Link href="/">{t('Accueil', 'Home')}</Link> <span>›</span>{' '}
          <span>{t('Ressources', 'Resources')}</span>
        </div>
        <h1>{t('Ressources & guides', 'Resources & guides')}</h1>
        <p className="g-page-sub">
          {t(
            'Nos guides pratiques sur l’e-commerce, la formation, la domiciliation et le coworking à Antibes.',
            'Our practical guides on e-commerce, training, business address services and coworking in Antibes.',
          )}
        </p>
      </div>

      <div className="blog-list">
        {posts.map((post) => {
          const p = localizePost(post, lang);
          return (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
              <div className="blog-card__top">
                <span className="blog-card__pole">
                  <BrandName pole={post.pole} />
                </span>
                <span className="blog-tag">{p.category}</span>
              </div>
              <h2>{p.title}</h2>
              <p>{p.excerpt}</p>
              <span className="blog-card__meta">
                <time dateTime={p.date}>
                  {t('Publié le', 'Published')} {formatDate(p.date, lang)}
                </time>{' '}
                · {p.readingMin} min · {t('Lire l’article', 'Read the article')}{' '}
                <span className="g-arrow">→</span>
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
