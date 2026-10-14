'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import { useHoverPreview } from '@/components/sections/Projects';
import { paths } from '@/content/home';
import { isPromoted } from '@/content/site';

const cards = paths.cards.filter((card) => isPromoted(card.href));
import { useReducedMotion } from '@/lib/useReducedMotion';

/** Four large cards pointing at the main areas of the site, with the Projects hover preview. */
export default function Paths() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderReelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { setFloatingRef, setInnerRef, setImageContainerRef, show, hide } = useHoverPreview(containerRef);

  useGSAP(
    () => {
      if (reduced) return;
      gsap.utils.toArray<HTMLElement>('.path-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: (i % 2) * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 92%', once: true },
          },
        );
      });
    },
    { scope: containerRef, dependencies: [reduced] },
  );

  const activate = (index: number, e: React.MouseEvent) => {
    if (reduced) return;
    if (sliderReelRef.current) {
      gsap.to(sliderReelRef.current, { yPercent: -index * 100, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
    }
    show(e.clientX, e.clientY);
  };

  return (
    <section
      id="paths"
      ref={containerRef}
      className="relative w-full bg-cream text-charcoal overflow-hidden px-6 sm:px-8 md:px-12 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedHeading
          words={paths.heading}
          className="text-[clamp(2.5rem,7vw,6.5rem)] leading-none text-charcoal"
          containerClassName="mb-10 md:mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" onMouseLeave={hide}>
          {cards.map((card, index) => (
            <a
              key={card.href}
              href={card.href}
              data-cursor="view"
              onMouseEnter={(e) => activate(index, e)}
              onMouseLeave={hide}
              className="path-card group relative flex flex-col justify-between min-h-[260px] md:min-h-[340px] rounded-3xl border border-border bg-cream p-6 sm:p-8 md:p-10 no-underline overflow-hidden transition-colors duration-300 hover:border-charcoal"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] text-warm">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-charcoal transition-colors duration-300 group-hover:text-accent-muted">
                  {paths.exploreLabel} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </span>
              </div>

              <div className="md:hidden relative mt-6 overflow-hidden rounded-2xl" style={{ aspectRatio: '16 / 10' }}>
                <Image src={card.image} alt="" fill sizes="calc(100vw - 48px)" className="object-cover object-top" />
              </div>

              <div className="mt-8">
                <h3 className="relative font-display text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
                  <span className="block transition-colors duration-300 group-hover:text-accent">{card.label}</span>
                </h3>
                <p className="mt-4 max-w-md font-sans text-base md:text-lg leading-relaxed text-warm">{card.sentence}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full pointer-events-none" />
            </a>
          ))}
        </div>
      </div>

      <div
        ref={setFloatingRef}
        className="hidden md:block fixed pointer-events-none z-[100]"
        style={{ top: 0, left: 0, willChange: 'transform, opacity' }}
        aria-hidden="true"
      >
        <div
          ref={setInnerRef}
          className="w-[360px] xl:w-[420px] rounded-2xl overflow-hidden bg-surface-mid"
          style={{
            aspectRatio: '16 / 10',
            willChange: 'transform',
            boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.4), 0 10px 20px -8px rgba(0, 0, 0, 0.22)',
          }}
        >
          <div
            ref={setImageContainerRef}
            className="w-full h-full relative overflow-hidden"
            style={{ willChange: 'transform', transform: 'scale(1.12)' }}
          >
            <div ref={sliderReelRef} className="w-full h-full relative" style={{ willChange: 'transform' }}>
              {cards.map((card, idx) => (
                <div key={card.href} className="w-full h-full absolute inset-0 overflow-hidden" style={{ top: `${idx * 100}%` }}>
                  <Image src={card.image} alt="" fill sizes="420px" className="object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
