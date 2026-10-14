import Image from 'next/image';
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
  ownOgImage: true,
});

const sectionPad = 'max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16';
const label = 'font-mono text-sm sm:text-base text-warm-light uppercase tracking-[0.3em] font-medium';

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
  const { cta, blog } = vitalink;

  return (
    <PageShell>
      {/* Hero */}
      <section className={`${sectionPad} pt-32 pb-12 md:pt-40 md:pb-16`}>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-accent mb-6">{vitalink.tagline}</p>
        <AnimatedHeading level="h1" words={vitalink.heading} className="text-[clamp(3rem,10vw,9rem)] tracking-tight mb-6" />
        <p className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed max-w-3xl mb-10">{vitalink.intro}</p>
        <div className="flex flex-wrap items-center gap-4">
          {vitalink.website && (
            <AnimatedButton
              as="a"
              href={vitalink.website}
              target="_blank"
              rel="noopener noreferrer"
              topText={cta.websiteButton.top}
              bottomText={cta.websiteButton.bottom}
              variant="primary"
            />
          )}
          <AnimatedButton
            as="a"
            href={cta.button.href}
            topText={cta.button.top}
            bottomText={cta.button.bottom}
            variant="dark"
            className="!border !border-white/15 hover:!border-white/40"
          />
        </div>
      </section>

      <section className={sectionPad}>
        <TextBlock title={vitalink.role.label} body={vitalink.role.body} />
        <TextBlock title={vitalink.problem.label} body={vitalink.problem.body} />
        <TextBlock title={vitalink.what.label} body={vitalink.what.body} />
      </section>

      {/* Modules */}
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

      {/* Audiences + stack */}
      <section aria-labelledby="audience-heading" className={`${sectionPad} py-10 md:py-16`}>
        <div className="border-t border-white/10 pt-10 md:pt-16">
          <span className={label}>{vitalink.audienceLabel}</span>
          <div id="audience-heading" className="mt-5">
            <AnimatedHeading words={vitalink.audienceHeading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
          </div>
          <ul className="divide-y divide-border-subtle border-t border-b border-border-subtle">
            {vitalink.audiences.map((a, i) => (
              <li key={a.name} className="py-5 md:py-6 grid md:grid-cols-12 gap-2 md:gap-8 items-baseline">
                <span className="md:col-span-1 font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="md:col-span-5 font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-cream">{a.name}</h3>
                <p className="md:col-span-6 font-sans text-base text-gray-soft leading-relaxed">{a.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <span className={label}>{vitalink.stack.label}</span>
            <ul className="flex flex-wrap gap-2">
              {vitalink.stack.items.map((t) => (
                <li key={t} className="px-4 py-2 rounded-full border border-white/15 font-mono text-xs uppercase tracking-widest text-light">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={sectionPad}>
        <TextBlock title={vitalink.stage.label} body={vitalink.stage.body} />
      </section>

      {/* Blog */}
      <section aria-labelledby="blog-heading" className={`${sectionPad} py-10 md:py-16`}>
        <div className="border-t border-white/10 pt-10 md:pt-16">
          <span className={label}>{blog.label}</span>
          <div id="blog-heading" className="mt-5">
            <AnimatedHeading words={blog.heading} className="text-[clamp(2.25rem,6vw,5.5rem)] tracking-tight" />
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blog.posts.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-border-subtle bg-surface-card overflow-hidden transition-colors duration-300 hover:border-accent/50"
                >
                  <div className="relative aspect-[1200/630] overflow-hidden bg-elevated-dark">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-warm-light">
                      {post.category} · {post.date} · {post.readTime}
                    </p>
                    <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight text-cream group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm md:text-base leading-relaxed text-gray-soft">{post.excerpt}</p>
                    <p className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">{blog.readLabel}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <AnimatedButton
              as="a"
              href={blog.allLink.href}
              target="_blank"
              rel="noopener noreferrer"
              topText={blog.allLink.top}
              bottomText={blog.allLink.bottom}
              variant="dark"
              className="!border !border-white/15 hover:!border-white/40"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${sectionPad} pt-8 pb-24 md:pb-32`}>
        <div className="rounded-3xl bg-surface p-8 sm:p-12 md:p-16 border border-elevated-dark">
          <AnimatedHeading words={cta.heading} className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-6 text-light" />
          <p className="max-w-2xl mb-10 text-base sm:text-lg text-gray-soft font-sans leading-relaxed">{cta.intro}</p>
          <div className="flex flex-wrap items-center gap-4">
            <AnimatedButton as="a" href={cta.button.href} topText={cta.button.top} bottomText={cta.button.bottom} variant="primary" />
            {vitalink.website && (
              <AnimatedButton
                as="a"
                href={vitalink.website}
                target="_blank"
                rel="noopener noreferrer"
                topText={cta.websiteButton.top}
                bottomText={cta.websiteButton.bottom}
                variant="dark"
                className="!border !border-white/15 hover:!border-white/40"
              />
            )}
            <AnimatedButton
              as="a"
              href={cta.waitlistButton.href}
              target="_blank"
              rel="noopener noreferrer"
              topText={cta.waitlistButton.top}
              bottomText={cta.waitlistButton.bottom}
              variant="dark"
              className="!border !border-white/15 hover:!border-white/40"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
