export type ResearchKind = 'paper' | 'abstract' | 'conference' | 'fieldwork' | 'hackathon';
export type ResearchStatus = 'in-preparation' | 'submitted' | 'accepted' | 'presented' | 'published' | 'completed';

export interface ResearchItem {
  id: string;
  kind: ResearchKind;
  title: string;
  /** Short plain description of the work, shown under the title. */
  summary?: string;
  venue: string;
  /** null until the year is confirmed. */
  year: number | null;
  /** null until the status is confirmed. Hidden on the site while null. */
  status: ResearchStatus | null;
  link?: string;
}

export const researchKindLabel: Record<ResearchKind, string> = {
  paper: 'Paper',
  abstract: 'Abstract',
  conference: 'Conference',
  fieldwork: 'Fieldwork',
  hackathon: 'Hackathon',
};

export const research: ResearchItem[] = [
  {
    id: 'aphtres-ai-public-health-umbrella-review',
    kind: 'abstract',
    // TODO(fred): replace with the exact submitted title.
    title: 'Adoption of artificial intelligence in public health: an umbrella review',
    summary:
      'A structured umbrella review, following PRISMA-ScR, that synthesises six review studies on how artificial intelligence is being adopted in public health. It went through several rounds of supervisor and committee review before submission.',
    venue: 'APHTReS conference',
    year: 2026,
    status: 'submitted',
  },
  {
    id: 'nfpc-2026-abstract',
    kind: 'abstract',
    // TODO(fred): replace with the exact submitted title, and set the status.
    title: 'AI and digital data systems for family planning: a scoping review',
    summary:
      'A PRISMA-ScR scoping review for Sub-theme 6 of the conference, on artificial intelligence and digital data systems in family planning. Written with a ten-person team.',
    venue: '9th Nigeria Family Planning Conference (NFPC 2026)',
    year: 2026,
    status: null,
  },
  {
    id: 'iss-2026-ai-hackathon',
    kind: 'hackathon',
    title: 'AI-assisted infectious disease screening (2nd place)',
    summary:
      'Track 1 of the ISS 2026 AI Hackathon. Working in Python with pandas, scikit-learn and Streamlit, we built a screening tool on a dataset released at the event and placed second.',
    venue: 'IHVN / IRCE 4th Annual Scientific Symposium',
    year: 2026,
    status: 'presented',
  },
  {
    id: 'tlmn-proskin-siwes',
    kind: 'fieldwork',
    title: 'PROSKIN project: leprosy and skin NTD surveillance',
    summary:
      'SIWES placement with The Leprosy Mission Nigeria from January to March 2026, supporting surveillance work on leprosy and other skin neglected tropical diseases.',
    venue: 'The Leprosy Mission Nigeria',
    year: 2026,
    status: 'completed',
  },
];
