import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/content/projects';
import { getAllDesigns } from '@/content/designs';
import { site } from '@/content/site';
import { PAGE_ROUTES } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = PAGE_ROUTES.map((route) => ({
    url: route === '/' ? site.url : `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '/' ? 1 : 0.9,
  }));

  const details = [
    ...getAllProjects().map((p) => `/work/${p.slug}`),
    ...getAllDesigns().map((d) => `/design/${d.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...pages, ...details];
}
