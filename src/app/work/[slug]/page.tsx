import ProjectDetails from '@/components/project/ProjectDetails';
import PageShell from '@/components/shared/PageShell';
import { getProjectBySlug, getAllProjects } from '@/content/projects';
import { projectMetadata } from '@/lib/metadata';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/shared/JsonLd';
import { creativeWorkJsonLd } from '@/lib/jsonld';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return projectMetadata(getProjectBySlug(slug), '/work');
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function WorkProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <PageShell className="bg-surface-base">
      <JsonLd data={creativeWorkJsonLd(project, `/work/${project.slug}`)} />
      <ProjectDetails key={project.slug} project={project} collection="work" />
    </PageShell>
  );
}
