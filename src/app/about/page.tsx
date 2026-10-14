import PageShell from '@/components/shared/PageShell';
import PlaceholderSection from '@/components/shared/PlaceholderSection';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'About',
  description: 'About Fredrick Akojuru: public health student at Miva Open University and founder of VitaLink.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <PageShell>
      <PlaceholderSection heading={[{ t: 'ABOUT' }, { t: 'me', serif: true }]} note="Coming in next step" />
    </PageShell>
  );
}
