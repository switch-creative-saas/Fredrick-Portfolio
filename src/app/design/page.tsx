import PageShell from '@/components/shared/PageShell';
import PlaceholderSection from '@/components/shared/PlaceholderSection';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Design',
  description: 'Design work by Fredrick Akojuru.',
  path: '/design',
});

export default function DesignPage() {
  return (
    <PageShell>
      <PlaceholderSection heading={[{ t: 'DESIGN' }, { t: 'work', serif: true }]} note="Coming in next step" />
    </PageShell>
  );
}
