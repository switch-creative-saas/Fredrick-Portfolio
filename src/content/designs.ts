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
