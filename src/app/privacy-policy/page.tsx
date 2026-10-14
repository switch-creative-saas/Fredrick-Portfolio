import LegalPage from '@/components/legal/LegalPage';
import { LEGAL_UPDATED, privacySections } from '@/content/legal';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `What ${site.name}'s website collects through the contact form and analytics.`,
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" updated={LEGAL_UPDATED} sections={privacySections(Boolean(process.env.NEXT_PUBLIC_GA_ID))} />;
}
