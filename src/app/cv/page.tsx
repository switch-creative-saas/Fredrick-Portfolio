import PageShell from '@/components/shared/PageShell';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { cvPage } from '@/content/legal';
import { getTimeline, formatRange, type TimelineEntry } from '@/content/timeline';
import { research } from '@/content/research';
import { awards } from '@/content/awards';
import { researchStatusLabel } from '@/content/about';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Curriculum Vitae',
  description: `CV of ${site.name}: education at Miva Open University and APTECH Abuja, VitaLink, research and awards.`,
  path: '/cv',
});

function Entry({ title, meta, detail }: { title: string; meta: string; detail?: string }) {
  return (
    <li className="py-5 grid md:grid-cols-12 gap-2 md:gap-8 border-b border-border-subtle">
      <p className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-gray-soft">{meta}</p>
      <div className="md:col-span-9">
        <p className="font-display text-lg md:text-xl font-bold text-cream">{title}</p>
        {detail && <p className="mt-1 font-sans text-sm md:text-base text-light/80 leading-relaxed">{detail}</p>}
      </div>
    </li>
  );
}

const timelineEntry = (t: TimelineEntry) => (
  <Entry key={t.id} title={`${t.title}, ${t.organization}`} meta={formatRange(t)} detail={t.description} />
);

export default function CvPage() {
  const sections = cvPage.sections;
  return (
    <PageShell>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-32 pb-24 md:pt-40">
        <AnimatedHeading level="h1" words={[{ t: cvPage.title }]} className="text-[clamp(2.25rem,6vw,5rem)] tracking-tight mb-4" />
        <p className="text-base sm:text-lg text-gray-soft font-sans leading-relaxed max-w-2xl mb-10">{cvPage.intro}</p>
        <AnimatedButton as="a" href={site.cvPath} download="Fredrick-Akojuru-CV.pdf" topText={cvPage.download.top} bottomText={cvPage.download.bottom} variant="primary" />

        <section className="mt-16">
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-warm-light mb-2">{sections.education}</h2>
          <ul className="border-t border-border-subtle">{getTimeline('education').map(timelineEntry)}</ul>
        </section>
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-warm-light mb-2">{sections.experience}</h2>
          <ul className="border-t border-border-subtle">{[...getTimeline('experience'), ...getTimeline('venture')].map(timelineEntry)}</ul>
        </section>
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-warm-light mb-2">{sections.research}</h2>
          <ul className="border-t border-border-subtle">
            {research.map((r) => (
              <Entry
                key={r.id}
                title={r.title}
                meta={[r.year, r.status ? researchStatusLabel[r.status] : null].filter(Boolean).join(' · ')}
                detail={[r.summary, r.venue].filter(Boolean).join(' ')}
              />
            ))}
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-warm-light mb-2">{sections.awards}</h2>
          <ul className="border-t border-border-subtle">
            {awards.map((a) => (
              <Entry key={a.id} title={`${a.title}, ${a.event}`} meta={String(a.year)} detail={[a.organizer, a.detail].filter(Boolean).join('. ')} />
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <object
            data={site.cvPath}
            type="application/pdf"
            aria-label={cvPage.viewerTitle}
            className="w-full h-[80vh] rounded-2xl border border-border-subtle bg-surface-card"
          >
            <p className="p-6 font-sans text-light/80">
              {cvPage.viewerFallback}{' '}
              <a href={site.cvPath} className="text-accent underline">{cvPage.viewerFallbackLink}</a>
            </p>
          </object>
        </section>
      </div>
    </PageShell>
  );
}
