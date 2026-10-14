'use client';

import { useSearchParams } from 'next/navigation';
import Contact from '@/components/sections/Contact';
import { DEFAULT_TOPIC, isContactTopic } from '@/content/contact';

/** Reads ?topic= in the browser so /contact can be a static page. */
export default function ContactWithTopic() {
  const value = useSearchParams().get('topic');
  const topic = isContactTopic(value) ? value : DEFAULT_TOPIC;
  // key remounts the form when only the query changes (/contact?topic=a -> ?topic=b).
  return <Contact key={topic} initialTopic={topic} headingLevel="h1" />;
}
