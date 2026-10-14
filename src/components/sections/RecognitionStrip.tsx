'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { awards } from '@/content/awards';
import { recognition } from '@/content/home';
import { useReducedMotion } from '@/lib/useReducedMotion';

/** A compact row of awards and recognition. */
export default function RecognitionStrip() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const entries = [
    ...awards.map((a) => ({ key: a.id, title: `${a.title}, ${a.event}`, meta: `${a.organizer ? `${a.organizer} · ` : ''}${a.year}`, detail: a.detail })),
    ...recognition.slots.map((slot, i) => ({ key: `slot-${i}`, title: slot, meta: '', detail: undefined })),
  ];

  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        '.recognition-item',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 88%', once: true },
        },
      );
    },
    { scope: rootRef, dependencies: [reduced] },
  );

  return (
    <section ref={rootRef} aria-labelledby="recognition-label" className="bg-cream px-6 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto border-t border-border pt-8">
        <p id="recognition-label" className="font-mono text-sm uppercase tracking-[0.3em] text-warm mb-6">
          {recognition.label}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {entries.map((e) => (
            <li key={e.key} className="recognition-item">
              <p className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight text-charcoal">{e.title}</p>
              {e.meta && <p className="mt-2 font-mono text-xs uppercase tracking-widest text-warm">{e.meta}</p>}
              {e.detail && <p className="mt-2 font-sans text-sm leading-relaxed text-warm">{e.detail}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
