import { renderMonogram } from '@/lib/og';

export const contentType = 'image/png';

export function generateImageMetadata() {
  return [
    { id: 'small', size: { width: 32, height: 32 }, contentType },
    { id: 'large', size: { width: 512, height: 512 }, contentType },
  ];
}

export default async function Icon({ id }: { id: Promise<string> | string }) {
  const resolved = await id;
  return renderMonogram(resolved === 'large' ? 512 : 32);
}
