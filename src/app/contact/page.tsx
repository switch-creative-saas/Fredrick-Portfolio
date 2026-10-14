import { Suspense } from 'react';
import PageShell from '@/components/shared/PageShell';
import Contact from '@/components/sections/Contact';
import ContactWithTopic from '@/components/sections/ContactWithTopic';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import { contactRoutes, DEFAULT_TOPIC } from '@/content/contact';
import { site, socialList } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Contact',
  description: `Get in touch with ${site.name} about VitaLink, development, design, photography or academic work.`,
  path: '/contact',
});

const sectionPad = 'max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16';
const label = 'font-mono text-sm sm:text-base text-warm-light uppercase tracking-[0.3em] font-medium';

// Static page: the ?topic= preset is applied in the browser by ContactWithTopic.
export default function ContactPage() {
  return (
    <PageShell>
      <div className="pt-20 md:pt-24">
        <Suspense fallback={<Contact initialTopic={DEFAULT_TOPIC} headingLevel="h1" />}>
          <ContactWithTopic />
        </Suspense>
      </div>

      <section aria-labelledby="contact-routes-heading" className={`${sectionPad} pt-8 pb-24 md:pb-32`}>
        <div className="border-t border-white/10 pt-12 md:pt-20">
          <span className={label}>{contactRoutes.label}</span>
          <div id="contact-routes-heading" className="mt-5">
            <AnimatedHeading words={contactRoutes.heading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactRoutes.items.map((route, i) => {
              return (
                <li key={route.topic}>
                  <a
                    href={`/contact?topic=${route.topic}`}
                    className="group flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-card p-6 md:p-8 transition-colors duration-300 hover:border-accent/40"
                  >
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-cream">{route.title}</h3>
                    <p className="mt-3 flex-1 font-sans text-sm md:text-base leading-relaxed text-gray-soft">{route.body}</p>
                    <span className="mt-6 font-mono text-xs uppercase tracking-widest text-light group-hover:text-accent transition-colors duration-300">
                      {contactRoutes.pickLabel}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-warm-light">{contactRoutes.locationLabel}</p>
              <p className="mt-3 font-display text-xl md:text-2xl font-bold text-cream">
                {site.location} <span className="font-mono text-sm text-gray-soft">({site.timeZoneLabel})</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-warm-light">{contactRoutes.socialLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {socialList.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm uppercase tracking-widest text-light hover:text-accent transition-colors duration-300"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
