import PageShell from '@/components/shared/PageShell';
import PlaceholderSection from '@/components/shared/PlaceholderSection';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'VitaLink',
  description: 'VitaLink is a healthcare operating system and infrastructure platform for Africa.',
  path: '/vitalink',
});

export default function VitalinkPage() {
  return (
    <PageShell>
      <PlaceholderSection heading={[{ t: 'VITA' }, { t: 'link', serif: true }]} note="Coming in next step" />
    </PageShell>
  );
}
