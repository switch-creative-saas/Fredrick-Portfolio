import PageShell from '@/components/shared/PageShell';
import Contact from '@/components/sections/Contact';
import { DEFAULT_TOPIC, isContactTopic } from '@/content/contact';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Contact',
  description: `Get in touch with ${site.name} about VitaLink, development, design, photography or academic work.`,
  path: '/contact',
});

interface PageProps {
  searchParams: Promise<{ topic?: string | string[] }>;
}

export default async function ContactPage({ searchParams }: PageProps) {
  const { topic } = await searchParams;
  const value = Array.isArray(topic) ? topic[0] : topic;
  const initialTopic = isContactTopic(value) ? value : DEFAULT_TOPIC;

  return (
    <PageShell>
      <div className="pt-20 md:pt-24">
        {/* key remounts the form when only the query changes (/contact?topic=a -> ?topic=b). */}
        <Contact key={initialTopic} initialTopic={initialTopic} headingLevel="h1" />
      </div>
    </PageShell>
  );
}
