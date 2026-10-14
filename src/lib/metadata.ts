import { Metadata } from 'next';
import { site } from '@/content/site';
import type { Project } from '@/content/projects';

/** Default description, built from content. */
export const siteDescription = `${site.name} is a public health student at Miva Open University, founder of VitaLink, a healthcare infrastructure platform for Africa, and a web developer based in ${site.location}.`;

export const siteMetadata: Metadata = {
  // Driven by NEXT_PUBLIC_SITE_URL. Never point this at a domain that is not live yet.
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: siteDescription,
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
  // Google Search Console ownership. Must stay.
  verification: { google: 'HaetaunXr6F5Bazo61bJvG1fZZCzG2twWksKBtXZJzU' },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: site.name,
    description: siteDescription,
    url: '/',
    siteName: site.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: siteDescription,
    creator: site.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const DEFAULT_OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, alt: site.name };

/** Per-page metadata with its own canonical and matching Open Graph and Twitter fields. */
export function pageMetadata({
  title,
  description,
  path,
  ownOgImage = false,
}: {
  title: string;
  description: string;
  path: string;
  /** True when the route has its own opengraph-image file, which must not be overridden here. */
  ownOgImage?: boolean;
}): Metadata {
  const ogImages = ownOgImage ? {} : { images: [DEFAULT_OG_IMAGE] };
  const twitterImages = ownOgImage ? {} : { images: [DEFAULT_OG_IMAGE.url] };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, siteName: site.name, locale: 'en_NG', type: 'website', ...ogImages },
    twitter: { card: 'summary_large_image', title: `${title} | ${site.name}`, description, creator: site.twitterHandle, ...twitterImages },
  };
}

/** Metadata for a project detail page under `basePath` ('/work' or '/design'). */
export function projectMetadata(project: Project | undefined, basePath: string): Metadata {
  if (!project) return { title: 'Project Not Found' };
  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `${basePath}/${project.slug}`,
    // /work/[slug] has its own generated OG image; /design/[slug] uses the default.
    ownOgImage: basePath === '/work',
  });
}
