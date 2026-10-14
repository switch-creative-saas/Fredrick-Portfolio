export type ResearchKind = 'paper' | 'abstract' | 'conference';
export type ResearchStatus = 'in-preparation' | 'submitted' | 'accepted' | 'presented' | 'published';

export interface ResearchItem {
  id: string;
  kind: ResearchKind;
  title: string;
  /** Short plain description of the work, shown under the title. */
  summary?: string;
  venue: string;
  /** null until the year is confirmed. */
  year: number | null;
  /** null until the status is confirmed. */
  status: ResearchStatus | null;
  link?: string;
}

export const research: ResearchItem[] = [
  {
    id: 'aphtres-ai-public-health-umbrella-review',
    kind: 'abstract',
    title: 'TODO(fred): exact abstract title',
    summary: 'Umbrella review (PRISMA-ScR) on AI adoption in public health.',
    venue: 'APHTReS conference',
    year: null, // TODO(fred): year
    status: null, // TODO(fred): status
  },
  {
    id: 'nfpc-2026-abstract',
    kind: 'abstract',
    title: 'TODO(fred): abstract title',
    venue: '9th Nigeria Family Planning Conference (NFPC 2026)',
    year: 2026,
    status: null, // TODO(fred): status
  },
];
