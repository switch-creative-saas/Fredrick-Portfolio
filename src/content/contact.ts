// `phrase` completes "Thanks for getting in touch about ..." in the confirmation email.
export const CONTACT_TOPICS = [
  { value: 'vitalink', label: 'VitaLink / investment', phrase: 'VitaLink' },
  { value: 'dev', label: 'Development project', phrase: 'a development project' },
  { value: 'design', label: 'Design project', phrase: 'a design project' },
  { value: 'photography', label: 'Photography booking', phrase: 'a photography booking' },
  { value: 'academic', label: 'Scholarship / academic', phrase: 'a scholarship or academic matter' },
  { value: 'other', label: 'Other', phrase: '' },
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number]['value'];

export const DEFAULT_TOPIC: ContactTopic = 'other';

export function isContactTopic(value: unknown): value is ContactTopic {
  return typeof value === 'string' && CONTACT_TOPICS.some((t) => t.value === value);
}

export function topicLabel(topic: ContactTopic): string {
  return CONTACT_TOPICS.find((t) => t.value === topic)?.label ?? 'Other';
}

export function topicPhrase(topic: ContactTopic): string {
  return CONTACT_TOPICS.find((t) => t.value === topic)?.phrase ?? '';
}

export const contactPage = {
  topicLabel: "I'm reaching out about",
};

export interface ContactRoute {
  topic: ContactTopic;
  title: string;
  body: string;
}

/** Shown under the form: who usually writes, and the topic that gets their message to the right place. */
export const contactRoutes = {
  label: '(Ways to work together)',
  heading: [{ t: 'HOW' }, { t: 'i', serif: true }, { t: 'CAN HELP' }],
  pickLabel: 'Start with this topic →',
  items: [
    {
      topic: 'vitalink',
      title: 'VitaLink',
      body: 'Hospitals, NGOs, public health agencies and investors who want to pilot, partner with or invest in VitaLink.',
    },
    {
      topic: 'dev',
      title: 'Development',
      body: 'Web apps, websites and internal platforms for organisations, especially in health and the non-profit sector.',
    },
    {
      topic: 'design',
      title: 'Design',
      body: 'Brand identities, campaign graphics and interface design.',
    },
    {
      topic: 'photography',
      title: 'Photography',
      body: 'Portraits, events and organisation shoots in Abuja.',
    },
    {
      topic: 'academic',
      title: 'Research & academic',
      body: 'Research collaborations, conference work, referees and scholarship committees.',
    },
  ] as ContactRoute[],
  directLabel: '(Direct)',
  locationLabel: 'Based in',
  socialLabel: 'Elsewhere',
};
