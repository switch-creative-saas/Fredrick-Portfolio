import { Metadata } from 'next';
import { site } from '@/content/site';

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
