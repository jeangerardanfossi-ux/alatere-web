import type { Metadata } from 'next';
import ArticleLayout from '@/components/blog/ArticleLayout';
import Body from '@/components/blog/articles/ComparatifDomiciliationAntibes';
import JsonLd from '@/components/JsonLd';
import {
  blogPostingLd,
  breadcrumbLd,
  comparatifDomiciliationFaqLd,
  comparatifDomiciliationItemListLd,
} from '@/lib/jsonld';
import { postBySlug, localizePost } from '@/lib/blog';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../../grommet-home.css';
import '../../../grommet-pages.css';

const post = postBySlug('comparatif-domiciliation-antibes')!;
const FR = `/blog/${post.slug}`;
const p = localizePost(post, 'en');

export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.excerpt,
  alternates: pageAlternates(FR, 'en'),
  openGraph: {
    type: 'article',
    url: enPath(FR),
    locale: 'en_US',
    title: p.metaTitle,
    description: p.excerpt,
    publishedTime: post.date,
    modifiedTime: post.updated,
    authors: ['https://www.linkedin.com/in/jeangerardanfossi/'],
    section: p.category,
    tags: ['business address', 'Antibes', 'Sophia Antipolis', 'registered office'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogPostingLd(p, 'en'),
          comparatifDomiciliationFaqLd('en'),
          comparatifDomiciliationItemListLd,
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Resources', path: enPath('/blog') },
            { name: p.title, path: enPath(FR) },
          ]),
        ]}
      />
      <ArticleLayout post={post}>
        <Body />
      </ArticleLayout>
    </>
  );
}
