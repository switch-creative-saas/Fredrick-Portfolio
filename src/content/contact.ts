export const CONTACT_TOPICS = [
  { value: 'vitalink', label: 'VitaLink / investment' },
  { value: 'dev', label: 'Development project' },
  { value: 'design', label: 'Design project' },
  { value: 'photography', label: 'Photography booking' },
  { value: 'academic', label: 'Scholarship / academic' },
  { value: 'other', label: 'Other' },
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number]['value'];

export const DEFAULT_TOPIC: ContactTopic = 'other';

export function isContactTopic(value: unknown): value is ContactTopic {
  return typeof value === 'string' && CONTACT_TOPICS.some((t) => t.value === value);
}

export function topicLabel(topic: ContactTopic): string {
  return CONTACT_TOPICS.find((t) => t.value === topic)?.label ?? 'Other';
}

export const contactPage = {
  topicLabel: "I'm reaching out about",
};
