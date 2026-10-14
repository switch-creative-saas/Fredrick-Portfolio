import PageShell from '@/components/shared/PageShell';
import PlaceholderSection from '@/components/shared/PlaceholderSection';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Get in touch with Fredrick Akojuru.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <PageShell>
      <PlaceholderSection heading={[{ t: "LET'S" }, { t: 'talk', serif: true }]} note="Coming in next step" />
    </PageShell>
  );
}
