import PageShell from '@/components/shared/PageShell';
import Projects from '@/components/sections/Projects';
import { getWorkProjects, WORK_FILTERS } from '@/content/projects';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Work',
  description: `Development work by ${site.name}: health platforms, web apps and client websites.`,
  path: '/work',
});

export default function WorkPage() {
  return (
    <PageShell className="bg-cream pt-16">
      <h1 className="sr-only">Work</h1>
      <Projects items={getWorkProjects()} basePath="/work" filters={WORK_FILTERS} />
    </PageShell>
  );
}
