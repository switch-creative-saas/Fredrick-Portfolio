'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';
import Lightbox from '@/components/photography/Lightbox';
import { photographyPage, type Photo, type PhotoSeries } from '@/content/photography';

interface PhotoGalleryProps {
  photos: Photo[];
  series: PhotoSeries[];
}

/** Images in the first rows load eagerly; everything below the fold is lazy. */
const EAGER_COUNT = 3;

export default function PhotoGallery({ photos, series }: PhotoGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [activeSeries, setActiveSeries] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Only offer series that actually have photos.
  const seriesWithPhotos = useMemo(
    () => series.filter((s) => photos.some((p) => p.series === s.slug)),
    [series, photos],
  );

  const visible = useMemo(
    () => (activeSeries === 'all' ? photos : photos.filter((p) => p.series === activeSeries)),
    [photos, activeSeries],
  );

  useGSAP(
    () => {
      if (reduced) return;
      const items = gsap.utils.toArray<HTMLElement>('.photo-item');
      if (!items.length) return;
      gsap.set(items, { opacity: 0, y: 40 });
      // One batched trigger for the whole grid rather than one per image.
      const triggers = ScrollTrigger.batch(items, {
        start: 'top 92%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, overwrite: true }),
      });
      return () => triggers.forEach((t) => t.kill());
    },
    { scope: rootRef, dependencies: [reduced, visible] },
  );

  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <div ref={rootRef}>
      {seriesWithPhotos.length > 1 && (
        <div role="group" aria-label="Filter by series" className="mb-8 flex flex-wrap gap-2 sm:gap-3">
          {[{ slug: 'all', title: photographyPage.allLabel }, ...seriesWithPhotos].map((s) => {
            const isActive = activeSeries === s.slug;
            return (
              <button
                key={s.slug}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveSeries(s.slug)}
                className={`text-xs sm:text-sm font-mono tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cream text-ink border-cream font-semibold'
                    : 'bg-elevated-dark/60 text-gray-soft border-white/10 hover:border-accent/40 hover:text-cream'
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      )}

      <ul className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {visible.map((photo, index) => (
          <li key={photo.id} className="photo-item mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full overflow-hidden rounded-xl border border-border-subtle bg-surface-card cursor-zoom-in"
              aria-label={`Open photo: ${photo.alt}`}
            >
              <Image
                src={photo.thumb}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                loading={index < EAGER_COUNT ? 'eager' : 'lazy'}
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox photos={visible} index={openIndex} onIndexChange={setOpenIndex} onClose={close} />
      )}
    </div>
  );
}
