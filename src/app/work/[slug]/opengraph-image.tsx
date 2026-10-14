import { renderOg, OG_SIZE } from '@/lib/og';
import { getAllProjects, getProjectBySlug } from '@/content/projects';
import { site } from '@/content/site';

export const alt = `Project by ${site.name}`;
export const size = OG_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function WorkOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return renderOg({
    eyebrow: `${site.name} · Work`,
    title: project?.title ?? site.name,
    subtitle: project?.type && !project.type.startsWith('TODO') ? project.type : site.tagline,
  });
}
