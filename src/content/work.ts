import type { HeadingWord } from './home';

export type WorkSectionId = 'development' | 'research' | 'design' | 'photography';

export const workPage = {
  heading: [{ t: 'MY' }, { t: 'work', serif: true }] as HeadingWord[],
  intro:
    'Software for health systems and the organisations around them, research on digital health, and the design and photography I do alongside it. Pick a thread.',
  sections: [
    { id: 'development', label: 'Development' },
    { id: 'research', label: 'Research' },
    { id: 'design', label: 'Design' },
    { id: 'photography', label: 'Photography' },
  ] as { id: WorkSectionId; label: string }[],
  development: {
    heading: [{ t: 'DEVELOP' }, { t: 'ment', serif: true }] as HeadingWord[],
  },
  research: {
    label: '(Research & fieldwork)',
    heading: [{ t: 'RESEARCH' }, { t: '&', serif: true }, { t: 'FIELDWORK' }] as HeadingWord[],
    intro:
      'My research sits where public health practice meets data and software: how health systems adopt AI, how digital data systems can support family planning, and what surveillance looks like on the ground.',
    cta: { top: 'COLLABORATE', bottom: 'CONTACT →', href: '/contact?topic=academic' },
  },
  design: {
    label: '(Design)',
    heading: [{ t: 'DESIGN' }] as HeadingWord[],
    viewAll: { top: 'DESIGN', bottom: 'VIEW ALL →', href: '/design' },
  },
  photography: {
    label: '(Photography)',
    heading: [{ t: 'PHOTO' }, { t: 'graphy', serif: true }] as HeadingWord[],
    viewAll: { top: 'GALLERY', bottom: 'VIEW ALL →', href: '/photography' },
  },
};
