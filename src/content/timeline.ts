export type TimelineKind = 'education' | 'experience' | 'venture';

export interface TimelineEntry {
  id: string;
  kind: TimelineKind;
  title: string;
  organization: string;
  /** Human-readable start, e.g. "Jan 2026". null until confirmed. */
  start: string | null;
  /** Human-readable end, e.g. "Mar 2026", "Present" or "Dec 2027 (expected)". null until confirmed. */
  end: string | null;
  description?: string;
  link?: string;
}

export const timeline: TimelineEntry[] = [
  {
    id: 'miva-public-health',
    kind: 'education',
    title: 'BSc Public Health',
    organization: 'Miva Open University',
    start: '2024',
    end: 'Dec 2027 (expected)',
    description: 'Focus on health information systems, data analysis, public health interventions and community health programmes.',
  },
  {
    id: 'aptech-software-engineering',
    kind: 'education',
    title: 'Diploma in Software Engineering',
    organization: 'APTECH Abuja',
    // TODO(fred): your resumes give different dates (2020 to 2022 and 2021 to 2023). Set the right ones.
    start: null,
    end: null,
    description: 'Web development, database management, software engineering and UI/UX design.',
  },
  {
    id: 'vitalink-founder',
    kind: 'experience',
    title: 'Founder & CEO',
    organization: 'VitaLink',
    start: '2024',
    end: 'Present',
    description: 'Healthcare operating system and infrastructure platform for Africa, formerly Switch Health. I lead product and engineering.',
    link: 'https://www.vitalink.africa',
  },
  {
    id: 'tlmn-siwes',
    kind: 'experience',
    title: 'SIWES placement',
    organization: 'The Leprosy Mission Nigeria',
    start: 'Jan 2026',
    end: 'Mar 2026',
    description: 'PROSKIN project: leprosy and skin NTD surveillance. Also built DOHRMP, the organisation’s operations platform.',
  },
  {
    id: 'freelance-dev',
    kind: 'experience',
    title: 'Freelance developer & designer',
    organization: 'Independent',
    // TODO(fred): start year.
    start: null,
    end: 'Present',
    description: 'Websites, web apps and brand work for churches, NGOs and small businesses.',
  },
  {
    id: 'glintsell-founder',
    kind: 'venture',
    title: 'Founder',
    organization: 'GlintSell',
    start: '2024',
    // TODO(fred): end year.
    end: null,
    description: 'E-commerce marketplace. No longer active.',
  },
];

export function getTimeline(kind: TimelineKind): TimelineEntry[] {
  return timeline.filter((t) => t.kind === kind);
}

/** "Jan 2026 to Mar 2026", "2024", "Present" or "" when nothing is confirmed. */
export function formatRange(entry: Pick<TimelineEntry, 'start' | 'end'>): string {
  // Unconfirmed dates are left out rather than shown as placeholders.
  if (entry.start && entry.end) return `${entry.start} to ${entry.end}`;
  return entry.start ?? entry.end ?? '';
}
