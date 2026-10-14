import PageShell from '@/components/shared/PageShell';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { vitalink } from '@/content/vitalink';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'VitaLink',
  description: vitalink.intro,
  path: '/vitalink',
});

const sectionPad = 'max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16';
const label = 'font-mono text-sm sm:text-base text-warm uppercase tracking-[0.3em] font-medium';

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-16 border-t border-white/10">
      <div className="md:col-span-4">
        <span className={label}>{title}</span>
      </div>
      <div className="md:col-span-8">
        <ScrollWordReveal
          text={body}
          offset={['start 0.95', 'end 0.7']}
          className="text-lg sm:text-xl md:text-2xl text-light font-sans leading-relaxed"
        />
      </div>
    </div>
  );
}

export default function VitalinkPage() {
  return (
    <PageShell>
      <section className={`${sectionPad} pt-32 pb-12 md:pt-40 md:pb-16`}>
        <AnimatedHeading level="h1" words={vitalink.heading} className="text-[clamp(3rem,10vw,9rem)] tracking-tight mb-4" />
        <p className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed max-w-2xl">{vitalink.intro}</p>
      </section>

      <section className={sectionPad}>
        <TextBlock title={vitalink.problem.label} body={vitalink.problem.body} />
        <TextBlock title={vitalink.what.label} body={vitalink.what.body} />
      </section>

      <section aria-labelledby="modules-heading" className={`${sectionPad} py-10 md:py-16`}>
        <div className="border-t border-white/10 pt-10 md:pt-16">
          <span className={label}>{vitalink.productsLabel}</span>
          <div id="modules-heading" className="mt-5">
            <AnimatedHeading words={vitalink.productsHeading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vitalink.products.map((product, i) => (
              <li
                key={product.name}
                className="rounded-2xl border border-border-subtle bg-surface-card p-6 md:p-8 transition-colors duration-300 hover:border-accent/40"
              >
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-cream">{product.name}</h3>
                <p className="mt-3 font-sans text-sm md:text-base leading-relaxed text-gray-soft">{product.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={sectionPad}>
        <TextBlock title={vitalink.stage.label} body={vitalink.stage.body} />
      </section>

      <section className={`${sectionPad} pt-8 pb-24 md:pb-32`}>
        <div className="rounded-3xl bg-surface p-8 sm:p-12 md:p-16 border border-elevated-dark">
          <AnimatedHeading words={vitalink.cta.heading} className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-6 text-light" />
          <p className="max-w-2xl mb-10 text-base sm:text-lg text-gray-soft font-sans leading-relaxed">{vitalink.cta.intro}</p>
          <div className="flex flex-wrap items-center gap-4">
            <AnimatedButton
              as="a"
              href={vitalink.cta.button.href}
              topText={vitalink.cta.button.top}
              bottomText={vitalink.cta.button.bottom}
              variant="primary"
            />
            {vitalink.website && (
              <AnimatedButton
                as="a"
                href={vitalink.website}
                target="_blank"
                rel="noopener noreferrer"
                topText={vitalink.cta.websiteButton.top}
                bottomText={vitalink.cta.websiteButton.bottom}
                variant="dark"
                className="!border !border-white/15 hover:!border-white/40"
              />
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
