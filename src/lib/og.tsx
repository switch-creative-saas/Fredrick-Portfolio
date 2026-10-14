import { ImageResponse } from 'next/og';
import { BRAND } from '@/lib/brand';

export const OG_SIZE = { width: 1200, height: 630 };

interface OgProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

/** Shared 1200x630 Open Graph card in the site colours. */
export function renderOg({ eyebrow, title, subtitle }: OgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: BRAND.ink,
          color: BRAND.cream,
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 6, textTransform: 'uppercase', color: BRAND.accent }}>
          {eyebrow}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: title.length > 18 ? 96 : 128, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
            {title}
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 40, color: BRAND.muted, maxWidth: 1000, lineHeight: 1.3 }}>
            {subtitle}
          </div>
        </div>
        <div style={{ display: 'flex', height: 6, width: 160, background: BRAND.accent }} />
      </div>
    ),
    OG_SIZE
  );
}

/** "FA" monogram used for the favicon and app icons. */
export function renderMonogram(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: BRAND.ink,
          borderRadius: size * 0.22,
          fontSize: size * 0.5,
          fontWeight: 800,
          letterSpacing: -size * 0.02,
        }}
      >
        <span style={{ color: BRAND.cream }}>F</span>
        <span style={{ color: BRAND.accent }}>A</span>
      </div>
    ),
    { width: size, height: size }
  );
}
