import { renderOg, OG_SIZE } from '@/lib/og';
import { site } from '@/content/site';

export const alt = `${site.name}: ${site.tagline}`;
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function OpengraphImage() {
  return renderOg({ eyebrow: site.location, title: site.name, subtitle: site.tagline });
}
