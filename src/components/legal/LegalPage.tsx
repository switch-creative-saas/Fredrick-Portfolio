import PageShell from '@/components/shared/PageShell';
import type { LegalSection } from '@/content/legal';

interface LegalPageProps {
  title: string;
  updated: string;
  sections: LegalSection[];
}

/** Plain text page used for the privacy policy and terms. */
export default function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <PageShell>
      <article className="max-w-3xl mx-auto px-6 sm:px-8 pt-32 pb-24 md:pt-40">
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-black uppercase tracking-tight leading-none text-cream">{title}</h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-gray-soft">Last updated {updated}</p>
        {sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="font-display text-xl md:text-2xl font-bold text-cream">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i} className="mt-4 font-sans text-base leading-relaxed text-light/85">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
    </PageShell>
  );
}
