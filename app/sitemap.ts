import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { SITE_URL } from '@/utils/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: {path: string;priority: number;changeFrequency: 'weekly' | 'monthly' | 'yearly';}[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/outreaches', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/partner', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' }];


  return [
  ...pages.map((p) => ({ url: `${SITE_URL}${p.path}`, lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority })),
  ...articles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
    images: [`${SITE_URL}${a.image}`]
  }))];

}
