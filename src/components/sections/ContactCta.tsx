import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { contactCta } from '@/content/home';
import { site } from '@/content/site';

/** Short call to action pointing at /contact. */
export default function ContactCta() {
  return (
    <section id="contact" className="bg-ink text-light pt-12 pb-16 md:pt-14 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="rounded-3xl bg-surface p-8 sm:p-12 md:p-16 lg:p-20 border border-elevated-dark">
          <AnimatedHeading words={contactCta.heading} className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-6 text-light" />
          <div className="max-w-2xl mb-10">
            <ScrollWordReveal
              text={contactCta.intro}
              offset={['start 0.95', 'end 0.7']}
              className="text-base sm:text-lg text-gray-soft font-sans leading-relaxed"
            />
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <AnimatedButton
              as="a"
              href={contactCta.button.href}
              topText={contactCta.button.top}
              bottomText={contactCta.button.bottom}
              variant="primary"
            />
            <a href={`mailto:${site.email}`} className="font-mono text-sm text-muted hover:text-accent transition-colors duration-300">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
