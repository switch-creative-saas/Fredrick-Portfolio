import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.firstName,
    description: site.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0F0D',
    theme_color: '#34D399',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
