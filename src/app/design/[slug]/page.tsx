import ProjectDetails from '@/components/project/ProjectDetails';
import PageShell from '@/components/shared/PageShell';
import { getDesignBySlug, getAllDesigns } from '@/content/designs';
import { projectMetadata } from '@/lib/metadata';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/shared/JsonLd';
import { creativeWorkJsonLd } from '@/lib/jsonld';

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
      <JsonLd data={creativeWorkJsonLd(design, `/design/${design.slug}`)} />
      <ProjectDetails key={design.slug} project={design} collection="design" />
    </PageShell>
  );
}
