'use client';

import { useEffect, useState } from 'react';
import { scrollToSection } from '@/lib/navigation';
import type { WorkSectionId } from '@/content/work';

interface WorkSubnavProps {
  sections: { id: WorkSectionId; label: string; count?: number }[];
}

/** Jump links to the sections of /work. Highlights the section currently in view. */
export default function WorkSubnav({ sections }: WorkSubnavProps) {
  const [active, setActive] = useState<WorkSectionId>(sections[0]?.id);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id as WorkSectionId);
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Work sections" className="flex flex-wrap gap-3">
      {sections.map((s, i) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              setActive(s.id);
              scrollToSection(s.id);
            }}
            aria-current={isActive ? 'true' : undefined}
            className={`group inline-flex items-center gap-3 rounded-full border px-5 py-3 font-mono text-xs sm:text-sm uppercase tracking-widest transition-colors duration-300 ${
              isActive
                ? 'border-accent bg-accent text-ink'
                : 'border-white/15 text-light hover:border-accent/60 hover:text-accent'
            }`}
          >
            <span className={isActive ? 'text-ink/70' : 'text-accent'}>{String(i + 1).padStart(2, '0')}</span>
            {s.label}
            {typeof s.count === 'number' && s.count > 0 && (
              <span className={`text-[10px] ${isActive ? 'text-ink/70' : 'text-warm-light'}`}>({s.count})</span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
