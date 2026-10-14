import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/content/projects';
import { getAllDesigns } from '@/content/designs';
import { isPromoted, showDesign, site } from '@/content/site';
import { SITEMAP_ROUTES } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = SITEMAP_ROUTES.filter(isPromoted).map((route) => ({
    url: route === '/' ? site.url : `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '/' ? 1 : 0.8,
  }));

  const details = [
    ...getAllProjects()
      .filter((p) => p.category === 'dev')
      .map((p) => `/work/${p.slug}`),
    ...(showDesign ? getAllDesigns().map((d) => `/design/${d.slug}`) : []),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...pages, ...details];
}
