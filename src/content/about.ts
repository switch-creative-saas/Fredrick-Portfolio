import type { HeadingWord } from './home';
import { site } from './site';
import type { ResearchStatus } from './research';

export const about = {
  heading: [{ t: 'ABOUT' }, { t: 'me', serif: true }] as HeadingWord[],
  intro: site.tagline,
  photoAlt: `Portrait of ${site.name}`,
  storyLabel: '(My story)',
  // First person, plain and specific. Max three paragraphs.
  story: [
    'TODO(fred): Why public health. What drew you to it, and something you saw or did that made it real for you.',
    'TODO(fred): Why you build software. How you started, and how it connects to the health problems you care about.',
    'TODO(fred): What you want to do next. The work, study or role you are aiming for in the next few years.',
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
  submitted: 'Submitted',
  accepted: 'Accepted',
  presented: 'Presented',
  published: 'Published',
};
