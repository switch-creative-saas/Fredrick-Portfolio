import LegalPage from '@/components/legal/LegalPage';
import { LEGAL_UPDATED, termsSections } from '@/content/legal';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: `Terms for using ${site.name}'s website.`,
  path: '/terms-of-service',
});

export default function TermsOfServicePage() {
  return <LegalPage title="Terms of Service" updated={LEGAL_UPDATED} sections={termsSections} />;
}
