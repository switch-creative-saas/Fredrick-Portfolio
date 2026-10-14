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
    title: 'Public Health',
    organization: 'Miva Open University',
    start: null, // TODO(fred): start year
    end: 'Dec 2027 (expected)',
    description: 'TODO(fred): degree name (for example BSc Public Health).',
  },
  {
    id: 'aptech-software-engineering',
    kind: 'education',
    title: 'Diploma in Software Engineering',
    organization: 'APTECH Abuja',
    start: null, // TODO(fred): start year
    end: null, // TODO(fred): end year
  },
  {
    id: 'vitalink-founder',
    kind: 'experience',
    title: 'Founder & CEO',
    organization: 'VitaLink',
    start: null, // TODO(fred): start date
    end: 'Present',
    description: 'Healthcare operating system and infrastructure platform for Africa, formerly Switch Health.',
  },
  {
    id: 'tlmn-siwes',
    kind: 'experience',
    title: 'SIWES placement',
    organization: 'The Leprosy Mission Nigeria',
    start: 'Jan 2026',
    end: 'Mar 2026',
    description: 'PROSKIN project: leprosy and skin NTD surveillance.',
  },
  {
    id: 'freelance-dev',
    kind: 'experience',
    title: 'Freelance web developer',
    organization: 'Independent',
    start: null, // TODO(fred): start year
    end: null, // TODO(fred): end year or "Present"
    description: 'TODO(fred): one line on the kind of clients and projects.',
  },
  {
    id: 'glintsell-founder',
    kind: 'venture',
    title: 'Founder',
    organization: 'GlintSell',
    start: '2024',
    end: null, // TODO(fred): end year
    description: 'E-commerce marketplace.',
  },
];

export function getTimeline(kind: TimelineKind): TimelineEntry[] {
  return timeline.filter((t) => t.kind === kind);
}

/** "Jan 2026 to Mar 2026", "2024 to TODO", etc. */
export function formatRange(entry: Pick<TimelineEntry, 'start' | 'end'>): string {
  const start = entry.start ?? 'TODO(fred)';
  const end = entry.end ?? 'TODO(fred)';
  if (!entry.start && entry.end) return entry.end;
  return `${start} to ${end}`;
}
