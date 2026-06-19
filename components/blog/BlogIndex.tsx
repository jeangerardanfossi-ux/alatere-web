'use client';

/** Index du blog « Ressources » (liste des articles). */

import Link from 'next/link';
import { LangProvider } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { BrandName } from '@/components/grommet/BrandName';
import { posts } from '@/lib/blog';

const TITLES = {
  fr: 'Ressources & guides — Alatere Web',
  en: 'Resources & guides — Alatere Web',
};

export default function BlogIndex() {
  return (
    <div className="g-home">
      <LangProvider titles={TITLES}>
        <Header />
        <main>
          <div className="g-pagehero">
            <div className="g-breadcrumb">
              <Link href="/">Accueil</Link> <span>›</span> <span>Ressources</span>
            </div>
            <h1>Ressources &amp; guides</h1>
            <p className="g-page-sub">
              Nos guides pratiques sur l&rsquo;e-commerce, la formation, la domiciliation et le
              coworking à Antibes.
            </p>
          </div>

          <div className="blog-list">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card__top">
                  <span className="blog-card__pole">
                    <BrandName pole={p.pole} />
                  </span>
                  <span className="blog-tag">{p.category}</span>
                </div>
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                <span className="blog-card__meta">
                  {p.readingMin} min · Lire l&rsquo;article <span className="g-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </LangProvider>
    </div>
  );
}
