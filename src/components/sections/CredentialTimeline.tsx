'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';
import type { Credential } from '@/content/credentials';

interface CredentialTimelineProps {
  items: Credential[];
  label: string;
  heading: { before: string; accent: string; after: string };
  className?: string;
}

/** The alternating timeline with the hand-drawn spine, used on home and /about. */
export default function CredentialTimeline({
  items,
  label,
  heading,
  className = 'pt-12 md:pt-20 border-t border-white/10',
}: CredentialTimelineProps) {
  const tableRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const rows = gsap.utils.toArray<HTMLElement>('.cred-row');
      rows.forEach((row, i) => {
        const side = row.dataset.side === 'left' ? -1 : 1;
        const dot = row.querySelector('.timeline-dot');
        const connector = row.querySelector('.timeline-connector');
        const content = row.querySelector('.timeline-content');
        gsap.fromTo(
          row,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            delay: i * 0.07,
            scrollTrigger: {
              trigger: row,
              start: 'top 90%',
              once: true,
            },
          },
        );
        if (content) {
          gsap.fromTo(
            content,
            { x: side * 42, y: 18 },
            {
              x: 0,
              y: 0,
              duration: 0.8,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 87%',
                once: true,
              },
            },
          );
        }
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.45,
              ease: 'back.out(2.5)',
              delay: 0.18,
              scrollTrigger: {
                trigger: row,
                start: 'top 87%',
                once: true,
              },
            },
          );
        }
        if (connector) {
          gsap.fromTo(
            connector,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.55,
              delay: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 87%',
                once: true,
              },
            },
          );
        }
      });

      gsap.fromTo(
        '.cred-section-label',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 92%',
            once: true,
          },
        },
      );

      const experienceWords = gsap.utils.toArray<HTMLElement>('.experience-word > span');
      if (experienceWords.length) {
        gsap.fromTo(
          experienceWords,
          { yPercent: 120, rotate: 3 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: tableRef.current,
              start: 'top 82%',
              once: true,
            },
          },
        );
      }

      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 75%',
            once: true,
          },
        });
      }
    },
    { scope: tableRef, dependencies: [reduced] },
  );

  // Rows start hidden only when they are going to be animated in.
  const hidden = reduced ? '' : 'opacity-0';

  return (
    <div ref={tableRef} className={className}>
      <div className="mb-12 text-center md:mb-20">
        <span className={`cred-section-label font-mono text-sm sm:text-base md:text-base text-warm-light uppercase tracking-[0.3em] font-medium inline-block ${hidden}`}>
          {label}
        </span>
        <h3 className="mt-5 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-black uppercase tracking-tight leading-none text-light">
          <span className="experience-word inline-block overflow-hidden align-top"><span className="block">{heading.before}</span></span>{' '}
          <span className="experience-word inline-block overflow-hidden align-top"><span className="serif-accent block normal-case tracking-[-0.05em] text-accent">{heading.accent}</span></span>
          {heading.after && (
            <>
              {' '}
              <span className="experience-word inline-block overflow-hidden align-top"><span className="block">{heading.after}</span></span>
            </>
          )}
        </h3>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-white/15 md:hidden" />
        <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 hidden h-full w-16 -translate-x-1/2 md:block" viewBox="0 0 64 1000" preserveAspectRatio="none">
          <path
            ref={pathRef}
            d="M32 0 C25 84 39 164 32 250 C25 334 39 416 32 500 C25 584 39 666 32 750 C25 834 39 916 32 1000"
            fill="none"
            style={{ stroke: 'color-mix(in srgb, var(--color-cream) 28%, transparent)' }}
            strokeWidth="1.5"
          />
        </svg>
        <div className="flex flex-col gap-12 md:gap-20">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <article key={`${item.type}-${item.title}-${item.organization}`} data-side={isLeft ? 'left' : 'right'} className={`cred-row relative grid grid-cols-[32px_1fr] gap-x-5 md:grid-cols-[1fr_96px_1fr] md:gap-x-0 ${hidden}`}>
                <div className="relative order-1 md:col-start-2 md:row-start-1 md:justify-self-center">
                  <span className="timeline-dot relative z-10 block h-[15px] w-[15px] rounded-full border-[3px] border-ink bg-cream" />
                  <span aria-hidden="true" className={`timeline-connector absolute top-[7px] hidden h-px w-14 bg-white/25 md:block ${isLeft ? 'right-full origin-right' : 'left-full origin-left'}`} />
                  <span className={`absolute top-7 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-warm-light ${isLeft ? 'left-0 md:right-7 md:left-auto md:text-right' : 'left-0 md:left-7'}`}>
                    {item.year}
                  </span>
                </div>

                <div className={`timeline-content order-2 pt-8 md:row-start-1 md:pt-0 ${isLeft ? 'md:col-start-1 md:pr-14 md:text-right' : 'md:col-start-3 md:pl-14'}`}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">{item.type}</span>
                  <h4 className="mt-4 font-display text-[clamp(2.15rem,4.4vw,4.5rem)] font-bold uppercase tracking-[-0.065em] leading-[0.86] text-cream">
                    {item.title}
                  </h4>
                  <div className={`mt-6 border-t border-white/10 pt-4 ${isLeft ? 'md:ml-auto md:max-w-md' : 'md:max-w-md'}`}>
                    <p className="font-mono text-xs leading-relaxed text-gray-soft">{item.organization}</p>
                    {item.stat && <p className="mt-3 font-sans text-sm leading-relaxed text-warm-light">{item.stat}</p>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
