export interface Award {
  id: string;
  title: string;
  event: string;
  organizer?: string;
  year: number;
  detail?: string;
  link?: string;
}

export const awards: Award[] = [
  {
    id: 'iss-2026-ai-hackathon',
    title: '2nd place',
    event: 'ISS 2026 AI Hackathon',
    organizer: 'IHVN / IRCE 4th Annual Scientific Symposium',
    year: 2026,
    detail: 'Track 1: AI-assisted infectious disease screening.',
  },
  // TODO(fred): add other awards, scholarships or recognition.
];
