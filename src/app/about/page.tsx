import Image from 'next/image';
import PageShell from '@/components/shared/PageShell';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import AnimatedButton from '@/components/ui/AnimatedButton';
import CredentialTimeline from '@/components/sections/CredentialTimeline';
import { credentialsFromTimeline } from '@/content/credentials';
import { about, researchStatusLabel } from '@/content/about';
import { research } from '@/content/research';
import { awards } from '@/content/awards';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'About',
  description: `About ${site.name}: public health student at Miva Open University, founder of VitaLink, and developer based in ${site.location}.`,
  path: '/about',
});

const sectionPad = 'max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16';
const label = 'font-mono text-sm sm:text-base text-warm uppercase tracking-[0.3em] font-medium';

export default function AboutPage() {
  return (
    <PageShell>
      <section className={`${sectionPad} pt-32 pb-16 md:pt-40 md:pb-24`}>
        <AnimatedHeading level="h1" words={about.heading} className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4" />
        <p className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed max-w-2xl">{about.intro}</p>

        <div className="mt-12 md:mt-20 grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-5">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-border-subtler bg-elevated-dark shadow-2xl">
              <Image src={site.photo} alt={about.photoAlt} fill priority sizes="(max-width: 768px) 100vw, 380px" className="object-cover" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 space-y-8">
            <span className={label}>{about.storyLabel}</span>
            <div className="space-y-6">
              {about.story.map((paragraph, i) => (
                <ScrollWordReveal
                  key={i}
                  text={paragraph}
                  offset={['start 0.92', 'end 0.65']}
                  className="text-base sm:text-lg leading-relaxed font-sans"
                />
              ))}
            </div>
            <AnimatedButton
              as="a"
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              topText={about.cv.top}
              bottomText={about.cv.bottom}
              variant="primary"
            />
          </div>
        </div>
      </section>

      <section className={`${sectionPad} pb-16 md:pb-24`}>
        <CredentialTimeline
          items={credentialsFromTimeline('education')}
          label={about.educationLabel}
          heading={about.educationHeading}
        />
      </section>

      <section aria-labelledby="research-heading" className={`${sectionPad} pb-16 md:pb-24`}>
        <div className="pt-12 md:pt-20 border-t border-white/10">
          <span className={label}>{about.researchLabel}</span>
          <div id="research-heading" className="mt-5">
            <AnimatedHeading words={about.researchHeading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
          </div>
          <ul className="divide-y divide-border-subtle border-t border-b border-border-subtle">
            {research.map((item) => (
              <li key={item.id} className="py-6 md:py-8 grid md:grid-cols-12 gap-3 md:gap-8">
                <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-gray-soft space-y-1">
                  <p>{item.year ?? 'TODO(fred): year'}</p>
                  <p className="text-accent">{item.status ? researchStatusLabel[item.status] : 'TODO(fred): status'}</p>
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
                  {item.summary && <p className="mt-2 font-sans text-base text-light/80 leading-relaxed">{item.summary}</p>}
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-warm-light">{item.venue}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${sectionPad} pb-16 md:pb-24`}>
        <CredentialTimeline
          items={credentialsFromTimeline('experience')}
          label={about.experienceLabel}
          heading={about.experienceHeading}
        />
      </section>

      <section aria-labelledby="awards-heading" className={`${sectionPad} pb-24 md:pb-32`}>
        <div className="pt-12 md:pt-20 border-t border-white/10">
          <span className={label}>{about.awardsLabel}</span>
          <div id="awards-heading" className="mt-5">
            <AnimatedHeading words={about.awardsHeading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
          </div>
          <ul className="divide-y divide-border-subtle border-t border-b border-border-subtle">
            {awards.map((award) => (
              <li key={award.id} className="py-6 md:py-8 grid md:grid-cols-12 gap-3 md:gap-8">
                <p className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-gray-soft">{award.year}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-xl md:text-3xl font-bold tracking-tight leading-tight text-cream">
                    {award.title}, {award.event}
                  </h3>
                  {award.organizer && <p className="mt-2 font-mono text-xs uppercase tracking-widest text-warm-light">{award.organizer}</p>}
                  {award.detail && <p className="mt-2 font-sans text-base text-light/80 leading-relaxed">{award.detail}</p>}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <AnimatedButton
              as="a"
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              topText={about.cv.top}
              bottomText={about.cv.bottom}
              variant="primary"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
