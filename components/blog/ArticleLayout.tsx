'use client';

/** Gabarit d'article de blog (charte Grommet, prose). */

import Link from 'next/link';
import type { ReactNode } from 'react';
import { LangProvider } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { BrandName, POLE_HREF } from '@/components/grommet/BrandName';
import type { Post } from '@/lib/blog';

const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

function frDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function ArticleLayout({ post, children }: { post: Post; children: ReactNode }) {
  return (
    <div className="g-home">
      <LangProvider titles={{ fr: post.metaTitle, en: post.metaTitle }}>
        <Header />
        <main>
          <div className="g-pagehero">
            <div className="g-breadcrumb">
              <Link href="/">Accueil</Link> <span>›</span>{' '}
              <Link href="/blog">Ressources</Link> <span>›</span> <span>{post.category}</span>
            </div>
            <Link href={POLE_HREF[post.pole]} className="article-pole">
              <BrandName pole={post.pole} />
            </Link>
            <h1>{post.title}</h1>
            <p className="g-page-sub">{post.excerpt}</p>
            <div className="blog-meta">
              <span className="blog-tag">{post.category}</span>
              {post.author && (
                <span>
                  Par{' '}
                  <a
                    href={post.author.url}
                    target="_blank"
                    rel="author noopener noreferrer"
                    className="blog-author-link"
                  >
                    {post.author.name}
                  </a>
                </span>
              )}
              <span>· Mis à jour le {frDate(post.updated)}</span>
              <span>· {post.readingMin} min de lecture</span>
            </div>
          </div>

          <article className="g-prose">
            {children}
            {post.author?.bio && (
              <aside className="article-author">
                <p className="article-author__name">
                  À propos de l&rsquo;auteur — {post.author.name}
                </p>
                <p>
                  {post.author.bio}{' '}
                  <a
                    href={post.author.url}
                    target="_blank"
                    rel="author noopener noreferrer"
                    className="g-inline"
                  >
                    Profil LinkedIn
                  </a>
                </p>
              </aside>
            )}
          </article>

          <div className="g-pagecta">
            <div className="g-pagecta__inner">
              <div>
                <h2>Un projet ou une question ?</h2>
                <p>Un seul interlocuteur, une réponse sous 48 heures.</p>
              </div>
              <Link href="/contact" className="g-btn g-btn--light g-btn--lg">
                Nous contacter <span className="g-arrow">→</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </LangProvider>
    </div>
  );
}
