import AnimatedButton from '@/components/ui/AnimatedButton';

interface ComingSoonProps {
  message: string;
  cta?: { top: string; bottom: string; href: string };
}

/** Shown on portfolio pages that do not have enough real work yet. */
export default function ComingSoon({ message, cta }: ComingSoonProps) {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface-card p-8 sm:p-12 md:p-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <p className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-cream">{message}</p>
      {cta && <AnimatedButton as="a" href={cta.href} topText={cta.top} bottomText={cta.bottom} variant="primary" />}
    </div>
  );
}
