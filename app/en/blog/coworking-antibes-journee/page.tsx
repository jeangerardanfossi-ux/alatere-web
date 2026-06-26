import type { Metadata } from 'next';
import ArticleLayout from '@/components/blog/ArticleLayout';
import Body from '@/components/blog/articles/CoworkingAntibesJournee';
import JsonLd from '@/components/JsonLd';
import { blogPostingLd, breadcrumbLd, cowoJourneeFaqLd } from '@/lib/jsonld';
import { postBySlug, localizePost } from '@/lib/blog';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../../grommet-home.css';
import '../../../grommet-pages.css';

const post = postBySlug('coworking-antibes-journee')!;
const FR = `/blog/${post.slug}`;
const p = localizePost(post, 'en');

export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.excerpt,
  alternates: pageAlternates(FR, 'en'),
  openGraph: { title: p.metaTitle, description: p.excerpt, type: 'article', url: enPath(FR), locale: 'en_US' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogPostingLd(p, 'en'),
          cowoJourneeFaqLd('en'),
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
