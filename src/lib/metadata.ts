import { Metadata } from 'next';
import { site } from '@/content/site';
import type { Project } from '@/content/projects';

const defaultTitle = `${site.name}: Public Health Student and Founder of VitaLink`;

export const siteMetadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    site.name,
    'VitaLink',
    'Public Health',
    'Miva Open University',
    'Health technology',
    'Web Developer',
    'Abuja',
    'Nigeria',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: defaultTitle,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Per-page metadata with matching Open Graph and Twitter fields. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, siteName: site.name, type: 'website' },
    twitter: { card: 'summary_large_image', title: `${title} | ${site.name}`, description },
  };
}

/** Metadata for a project detail page under `basePath` ('/work' or '/design'). */
export function projectMetadata(project: Project | undefined, basePath: string): Metadata {
  if (!project) return { title: 'Project Not Found' };
  const image = project.hoverImage || project.images[0];
  const base = pageMetadata({
    title: project.title,
    description: project.description,
    path: `${basePath}/${project.slug}`,
  });
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [{ url: image, width: 1200, height: 630, alt: project.title }] },
    twitter: { ...base.twitter, images: [image] },
  };
}
