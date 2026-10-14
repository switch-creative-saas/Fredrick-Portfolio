import { awards, type Award } from './awards';
import { formatRange, getTimeline, type TimelineKind } from './timeline';

/** One row of the credential timeline. */
export interface Credential {
  year: string;
  title: string;
  organization: string;
  stat?: string;
  type: string;
}

const KIND_LABEL: Record<TimelineKind, string> = {
  education: 'Education',
  experience: 'Experience',
  venture: 'Venture',
};

export const credentialsFromTimeline = (kind: TimelineKind): Credential[] =>
  getTimeline(kind).map((t) => ({
    year: formatRange(t),
    title: t.title,
    organization: t.organization,
    stat: t.description,
    type: KIND_LABEL[kind],
  }));

export const credentialsFromAwards = (list: Award[] = awards): Credential[] =>
  list.map((a) => ({
    year: String(a.year),
    title: `${a.title}, ${a.event}`,
    organization: a.organizer ?? '',
    stat: a.detail,
    type: 'Recognition',
  }));
