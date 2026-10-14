import PageShell from '@/components/shared/PageShell';
import Projects from '@/components/sections/Projects';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ComingSoon from '@/components/shared/ComingSoon';
import { getAllDesigns, designPage } from '@/content/designs';
import { sortProjects } from '@/content/projects';
import { site, showDesign } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Design',
  description: `Design work by ${site.name}.`,
  path: '/design',
});

export default function DesignPage() {
  const designs = sortProjects(getAllDesigns());

  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 pb-16 md:pt-40">
        <AnimatedHeading level="h1" words={designPage.heading} className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4" />
        <p className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed max-w-2xl mb-12">{designPage.intro}</p>
        {!showDesign && <ComingSoon message={designPage.comingSoon} cta={designPage.cta} />}
      </section>
      {designs.length > 0 && (
        <div className="bg-cream">
          <Projects items={designs} basePath="/design" heading={designPage.listHeading} />
        </div>
      )}
    </PageShell>
  );
}
