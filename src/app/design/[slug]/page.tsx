import ProjectDetails from '@/components/project/ProjectDetails';
import PageShell from '@/components/shared/PageShell';
import { getDesignBySlug, getAllDesigns } from '@/content/designs';
import { projectMetadata } from '@/lib/metadata';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return projectMetadata(getDesignBySlug(slug), '/design');
}

export async function generateStaticParams() {
  return getAllDesigns().map((design) => ({ slug: design.slug }));
}

export default async function DesignProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) notFound();
  return (
    <PageShell className="bg-surface-base">
      <ProjectDetails key={design.slug} project={design} collection="design" />
    </PageShell>
  );
}
