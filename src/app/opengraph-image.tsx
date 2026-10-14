import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
          background: '#0A0F0D',
          color: '#E2E8E4',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 6, textTransform: 'uppercase', color: '#34D399' }}>
          {site.location}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 128, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 40, color: '#A3B3AA', maxWidth: 980, lineHeight: 1.3 }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ display: 'flex', height: 6, width: 160, background: '#34D399' }} />
      </div>
    ),
    size
  );
}
