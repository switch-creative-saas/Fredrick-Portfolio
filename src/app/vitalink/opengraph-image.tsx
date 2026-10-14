import { renderOg, OG_SIZE } from '@/lib/og';
import { vitalink } from '@/content/vitalink';
import { site } from '@/content/site';

export const alt = `${vitalink.name}: ${vitalink.summary}`;
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function VitalinkOpengraphImage() {
  return renderOg({ eyebrow: `${site.name} · Founder`, title: vitalink.name, subtitle: vitalink.summary });
}
