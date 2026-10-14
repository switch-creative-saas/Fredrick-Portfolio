import type { Project } from './projects';

// Design work uses the same shape as dev projects (category: 'design') so it can
// share the project detail page.
// TODO(fred): add design projects (title, year, client, images, write-up).
export const designs: Project[] = [];

export function getAllDesigns(): Project[] {
  return designs;
}

export function getDesignBySlug(slug: string): Project | undefined {
  return designs.find((d) => d.slug === slug);
}

export const designPage = {
  heading: [{ t: 'DESIGN' }, { t: 'work', serif: true }],
  listHeading: [{ t: 'SELECTED' }, { t: 'designs', serif: true }],
  intro:
    'Brand identities, campaign graphics and interface design. Recent work includes the VitaLink brand kit and a Myth vs. Fact health awareness series for The Leprosy Mission Nigeria.',
  comingSoon: 'Case studies are on the way.',
  cta: { top: 'START A PROJECT', bottom: 'CONTACT →', href: '/contact?topic=design' },
};
