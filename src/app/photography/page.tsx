import PageShell from '@/components/shared/PageShell';
import PlaceholderSection from '@/components/shared/PlaceholderSection';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Photography',
  description: 'Photography by Fredrick Akojuru.',
  path: '/photography',
});

export default function PhotographyPage() {
  return (
    <PageShell>
      <PlaceholderSection heading={[{ t: 'PHOTO' }, { t: 'graphy', serif: true }]} note="Coming in next step" />
    </PageShell>
  );
}
