'use client';

/** Gabarit d'article de blog (charte Grommet, prose) — bilingue FR/EN. */

import Link from '@/components/grommet/LocalizedLink';
import type { ReactNode } from 'react';
import { LangProvider, useLang } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { BrandName, POLE_HREF } from '@/components/grommet/BrandName';
import { formatDate, localizePost, type Post } from '@/lib/blog';

export default function ArticleLayout({ post, children }: { post: Post; children: ReactNode }) {
  return (
    <div className="g-home">
      <LangProvider titles={post.metaTitle}>
        <Header />
        <ArticleBody post={post}>{children}</ArticleBody>
        <Footer />
      </LangProvider>
    </div>
  );
}

function ArticleBody({ post, children }: { post: Post; children: ReactNode }) {
  const { lang } = useLang();
  const p = localizePost(post, lang);
  const t = (fr: string, en: string) => (lang === 'en' ? en : fr);

  return (
    <main>
      <div className="g-pagehero">
        <div className="g-breadcrumb">
          <Link href="/">{t('Accueil', 'Home')}</Link> <span>›</span>{' '}
          <Link href="/blog">{t('Ressources', 'Resources')}</Link> <span>›</span>{' '}
          <span>{p.category}</span>
        </div>
        <Link href={POLE_HREF[post.pole]} className="article-pole">
          <BrandName pole={post.pole} />
        </Link>
        <h1>{p.title}</h1>
        <p className="g-page-sub">{p.excerpt}</p>
        <div className="blog-meta">
          <span className="blog-tag">{p.category}</span>
          {p.author && (
            <span>
              {t('Par', 'By')}{' '}
              <a
                href={p.author.url}
                target="_blank"
                rel="author noopener noreferrer"
                className="blog-author-link"
              >
                {p.author.name}
              </a>
            </span>
          )}
          <span>
            · {t('Publié le', 'Published')} <time dateTime={p.date}>{formatDate(p.date, lang)}</time>
          </span>
          {p.updated !== p.date && (
            <span>
              · {t('Mis à jour le', 'Updated')}{' '}
              <time dateTime={p.updated}>{formatDate(p.updated, lang)}</time>
            </span>
          )}
          <span>· {t(`${p.readingMin} min de lecture`, `${p.readingMin} min read`)}</span>
        </div>
      </div>

      <article className="g-prose">
        {children}
        {p.author?.bio && (
          <aside className="article-author">
            <p className="article-author__name">
              {t('À propos de l’auteur', 'About the author')} — {p.author.name}
            </p>
            <p>
              {p.author.bio}{' '}
              <a
                href={p.author.url}
                target="_blank"
                rel="author noopener noreferrer"
                className="g-inline"
              >
                {t('Profil LinkedIn', 'LinkedIn profile')}
              </a>
            </p>
          </aside>
        )}
      </article>

      <div className="g-pagecta">
        <div className="g-pagecta__inner">
          <div>
            <h2>{t('Un projet ou une question ?', 'A project or a question?')}</h2>
            <p>
              {t(
                'Un seul interlocuteur, une réponse sous 48 heures.',
                'A single point of contact, a reply within 48 hours.',
              )}
            </p>
          </div>
          <Link href="/contact" className="g-btn g-btn--light g-btn--lg">
            {t('Nous contacter', 'Contact us')} <span className="g-arrow">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
