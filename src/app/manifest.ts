import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { siteDescription } from '@/lib/metadata';
import { BRAND } from '@/lib/brand';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.firstName,
    description: siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: BRAND.ink,
    theme_color: BRAND.accent,
    icons: [
      { src: '/icon/small', sizes: '32x32', type: 'image/png' },
      { src: '/icon/large', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
