import PageShell from '@/components/shared/PageShell';
import Projects from '@/components/sections/Projects';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimatedButton from '@/components/ui/AnimatedButton';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import CurvedSectionDivider from '@/components/ui/CurvedSectionDivider';
import ComingSoon from '@/components/shared/ComingSoon';
import PhotoGallery from '@/components/photography/PhotoGallery';
import WorkSubnav from '@/components/work/WorkSubnav';
import { getWorkProjects, WORK_FILTERS, sortProjects } from '@/content/projects';
import { getAllDesigns, designPage } from '@/content/designs';
import { getVisiblePhotos, photographyPage, photoSeries } from '@/content/photography';
import { research, researchKindLabel } from '@/content/research';
import { researchStatusLabel } from '@/content/about';
import { workPage } from '@/content/work';
import { site, showDesign, showPhotography } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Work',
  description: `Work by ${site.name}: health platforms, web apps and client websites, public health research, design and photography.`,
  path: '/work',
});

const sectionPad = 'max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16';
const label = 'font-mono text-sm sm:text-base text-warm-light uppercase tracking-[0.3em] font-medium';

export default function WorkPage() {
  const projects = getWorkProjects();
  const designs = sortProjects(getAllDesigns());
  const photos = getVisiblePhotos();
  const featuredPhotos = photos.filter((p) => p.featured).length >= 3 ? photos.filter((p) => p.featured) : photos.slice(0, 6);

  const counts: Record<string, number> = {
    development: projects.length,
    research: research.length,
    design: designs.length,
    photography: photos.filter((p) => !p.placeholder).length,
  };

  return (
    <PageShell>
      {/* Hero */}
      <section className={`${sectionPad} pt-32 pb-16 md:pt-40 md:pb-24`}>
        <AnimatedHeading level="h1" words={workPage.heading} className="text-[clamp(3rem,10vw,9rem)] tracking-tight mb-6" />
        <p className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed max-w-2xl mb-10">{workPage.intro}</p>
        <WorkSubnav sections={workPage.sections.map((s) => ({ ...s, count: counts[s.id] }))} />
      </section>

      {/* Development */}
      <CurvedSectionDivider curveColor="var(--color-ink)" bottomColor="var(--color-cream)" />
      <div id="development" className="bg-cream scroll-mt-16">
        <Projects id="development-list" items={projects} basePath="/work" filters={WORK_FILTERS} heading={workPage.development.heading} />
      </div>
      <CurvedSectionDivider curveColor="var(--color-cream)" bottomColor="var(--color-ink)" />

      {/* Research */}
      <section id="research" aria-labelledby="work-research-heading" className={`${sectionPad} py-16 md:py-24 scroll-mt-16`}>
        <span className={label}>{workPage.research.label}</span>
        <div id="work-research-heading" className="mt-5">
          <AnimatedHeading words={workPage.research.heading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
        </div>
        <div className="max-w-3xl mb-10 md:mb-14">
          <ScrollWordReveal
            text={workPage.research.intro}
            offset={['start 0.95', 'end 0.7']}
            className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
          />
        </div>
        <ul className="divide-y divide-border-subtle border-t border-b border-border-subtle">
          {research.map((item) => (
            <li key={item.id} className="py-6 md:py-8 grid md:grid-cols-12 gap-3 md:gap-8">
              <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-gray-soft space-y-1">
                <p>
                  {researchKindLabel[item.kind]}
                  {item.year ? ` · ${item.year}` : ''}
                </p>
                {item.status && <p className="text-accent">{researchStatusLabel[item.status]}</p>}
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-xl md:text-3xl font-bold tracking-tight leading-tight text-cream">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                      {item.title} ↗
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                {item.summary && <p className="mt-2 font-sans text-base text-light/80 leading-relaxed max-w-3xl">{item.summary}</p>}
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-warm-light">{item.venue}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <AnimatedButton
            as="a"
            href={workPage.research.cta.href}
            topText={workPage.research.cta.top}
            bottomText={workPage.research.cta.bottom}
            variant="primary"
          />
        </div>
      </section>

      {/* Design */}
      <section id="design" aria-labelledby="work-design-heading" className={`${sectionPad} py-16 md:py-24 border-t border-white/10 scroll-mt-16`}>
        <span className={label}>{workPage.design.label}</span>
        <div id="work-design-heading" className="mt-5">
          <AnimatedHeading words={workPage.design.heading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed max-w-2xl mb-10">{designPage.intro}</p>
        {designs.length > 0 ? (
          <AnimatedButton
            as="a"
            href={workPage.design.viewAll.href}
            topText={workPage.design.viewAll.top}
            bottomText={workPage.design.viewAll.bottom}
            variant="primary"
          />
        ) : (
          <ComingSoon message={designPage.comingSoon} cta={designPage.cta} />
        )}
      </section>
      {designs.length > 0 && showDesign && (
        <div className="bg-cream">
          <Projects id="design-list" items={designs.slice(0, 4)} basePath="/design" heading={designPage.listHeading} />
        </div>
      )}

      {/* Photography */}
      <section
        id="photography"
        aria-labelledby="work-photography-heading"
        className={`${sectionPad} py-16 md:py-24 pb-24 md:pb-32 border-t border-white/10 scroll-mt-16`}
      >
        <span className={label}>{workPage.photography.label}</span>
        <div id="work-photography-heading" className="mt-5">
          <AnimatedHeading words={workPage.photography.heading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed max-w-2xl mb-10">{photographyPage.intro}</p>
        {!showPhotography && (
          <div className="mb-12">
            <ComingSoon message={photographyPage.comingSoon} cta={photographyPage.bookingCta} />
          </div>
        )}
        {featuredPhotos.length > 0 && <PhotoGallery photos={featuredPhotos} series={photoSeries} />}
        {showPhotography && (
          <div className="mt-12">
            <AnimatedButton
              as="a"
              href={workPage.photography.viewAll.href}
              topText={workPage.photography.viewAll.top}
              bottomText={workPage.photography.viewAll.bottom}
              variant="primary"
            />
          </div>
        )}
      </section>
    </PageShell>
  );
}
