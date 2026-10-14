import AnimatedHeading, { type HeadingWord } from '@/components/ui/AnimateHeading';

interface PlaceholderSectionProps {
  heading: HeadingWord[];
  note: string;
}

/** Temporary page body for routes that are built in a later step. */
export default function PlaceholderSection({ heading, note }: PlaceholderSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 pb-24 md:pt-40">
      <AnimatedHeading level="h1" words={heading} className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4" />
      <p className="font-mono text-sm uppercase tracking-widest text-gray-soft">{note}</p>
    </section>
  );
}
