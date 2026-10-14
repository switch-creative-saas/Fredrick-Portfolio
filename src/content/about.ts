import type { HeadingWord } from './home';
import { site } from './site';
import type { ResearchStatus } from './research';

export const about = {
  heading: [{ t: 'ABOUT' }, { t: 'me', serif: true }] as HeadingWord[],
  intro: site.tagline,
  photoAlt: `Portrait of ${site.name}`,
  storyLabel: '(My story)',
  story: [
    "I started out writing code. I trained as a software engineer at APTECH in Abuja, then spent a few years building websites and web apps for churches, small businesses and friends with ideas: a recipe app for African food, a catering site, a mentorship platform for new developers. It taught me how to ship, and how to listen to the person who will actually use what I build.",
    "Public health came next, and it changed what I wanted to build. Studying at Miva Open University, I kept meeting the same problem from different directions: records that live on paper and get lost between clinics, patients retelling their history at every visit, outbreak data that reaches decision makers weeks late. Those are information problems, and information problems are what I know how to work on.",
    "That is where VitaLink comes from. It began as Switch Health in 2024 and has grown into a healthcare operating system: one patient identity, one record, and the reporting tools public health teams need. In early 2026 my SIWES placement with The Leprosy Mission Nigeria put me on the PROSKIN project, around leprosy and skin NTD surveillance, and I built the organisation's operations platform alongside it.",
    "Next, I want to go deeper into research. I am writing on AI adoption in public health and on digital data systems for family planning, and I placed second at the ISS 2026 AI Hackathon run by IHVN. After I graduate in December 2027 I plan to do a master's that brings health data, epidemiology and software together.",
  ],
  cv: { top: 'CV', bottom: 'DOWNLOAD →' },
  educationLabel: '(Education)',
  educationHeading: { before: 'Where I', accent: 'study', after: '' },
  researchLabel: '(Research)',
  researchHeading: [{ t: 'RESEARCH' }, { t: '&', serif: true }, { t: 'CONFERENCES' }] as HeadingWord[],
  experienceLabel: '(Experience)',
  experienceHeading: { before: 'Where I', accent: 'work', after: '' },
  awardsLabel: '(Awards)',
  awardsHeading: [{ t: 'AWARDS' }] as HeadingWord[],
};

export const researchStatusLabel: Record<ResearchStatus, string> = {
  'in-preparation': 'In preparation',
  completed: 'Completed',
  submitted: 'Submitted',
  accepted: 'Accepted',
  presented: 'Presented',
  published: 'Published',
};
