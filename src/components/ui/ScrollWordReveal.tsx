'use client';

import React, { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { hexToRgba, themeColor, themeRgba } from '@/lib/theme';

interface ScrollWordRevealProps {
  text: string;
  className?: string;
  dimOpacity?: number;
  offset?: [string, string];
  highlightColor?: string;
  dimColor?: string;
  accentColor?: string;
}

interface Token {
  t: string;
  accent: boolean;
}

const tokenize = (text: string): Token[] => {
  const tokens: Token[] = [];
  const re = /\*([^*]+)\*|(\S+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m[1] !== undefined) tokens.push({ t: m[1], accent: true });
    else tokens.push({ t: m[2], accent: false });
  }
  return tokens;
};

export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
  dimOpacity = 0.22,
  offset = ['start 0.99', 'end 0.85'],
  highlightColor,
  dimColor,
  accentColor,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  const parsePct = (part: string | undefined, fallback: number) => {
    const v = parseFloat(part ?? '');
    return Number.isFinite(v) ? v * 100 : fallback * 100;
  };
  const stStart = `top ${parsePct(offset[0]?.split(' ')[1], 0.99)}%`;
  const stEnd = `bottom ${parsePct(offset[1]?.split(' ')[1], 0.85)}%`;

  const tokens = React.useMemo(() => tokenize(text), [text]);

  useGSAP(
    () => {
      if (reduced) return;
      const el = containerRef.current;
      if (!el) return;
      const wordEls = el.querySelectorAll<HTMLSpanElement>('.swr-word');
      if (!wordEls.length) return;

      // Defaults come from the theme tokens so the reveal follows the palette.
      const accent = accentColor ?? themeColor('accent');
      const highlight = highlightColor ?? themeColor('cream');
      const dim = dimColor ?? themeRgba('cream', 0.22);

      const isTouch =
        typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

      gsap.set(wordEls, {
        opacity: dimOpacity,
        y: isTouch ? 0 : 8,
        scale: isTouch ? 1 : 0.94,
        transformOrigin: '50% 100%',
        color: (i: number, target: Element) =>
          (target as HTMLElement).dataset.accent === 'true'
            ? hexToRgba(accent, Math.max(dimOpacity, 0.3))
            : dim,
      });

      gsap.to(wordEls, {
        opacity: 1,
        y: 0,
        scale: 1,
        color: (i: number, target: Element) =>
          (target as HTMLElement).dataset.accent === 'true' ? accent : highlight,
        ease: 'none',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: stStart,
          end: stEnd,
          scrub: true,
        },
      });
    },
    { scope: containerRef, dependencies: [reduced, text, accentColor, highlightColor, dimColor] }
  );

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {tokens.map((tok, i) => (
        <span key={`${tok.t}-${i}`} className="relative inline-block mr-[0.28em] my-[0.04em]">
          <span
            className={`swr-word inline-block ${
              tok.accent ? 'serif-accent normal-case text-[1.12em]' : ''
            }`}
            data-accent={tok.accent}
          >
            {tok.t}
          </span>
        </span>
      ))}
    </p>
  );
};

export default ScrollWordReveal;
