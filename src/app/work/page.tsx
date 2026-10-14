import PageShell from '@/components/shared/PageShell';
import Projects from '@/components/sections/Projects';
import { getAllProjects } from '@/content/projects';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Work',
  description: 'Development projects by Fredrick Akojuru.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <PageShell className="bg-cream pt-16">
      <Projects items={getAllProjects()} basePath="/work" />
    </PageShell>
  );
}
