'use client';

import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { photographyPage, type Photo } from '@/content/photography';

interface LightboxProps {
  photos: Photo[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Horizontal swipe distance (px) that counts as next/previous on touch screens. */
const SWIPE_THRESHOLD = 50;

export default function Lightbox({ photos, index, onIndexChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const photo = photos[index];
  const copy = photographyPage.lightbox;

  const go = useCallback(
    (delta: number) => onIndexChange((index + delta + photos.length) % photos.length),
    [index, onIndexChange, photos.length],
  );

  // Stop smooth scroll and lock the page while open; restore focus and scrolling on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    window.__lenis?.stop();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        go(1);
      } else if (e.key === 'ArrowLeft') {
        go(-1);
      } else if (e.key === 'Tab') {
        // Focus trap: keep Tab inside the dialog.
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [go, onClose]);

  if (!photo) return null;

  const multiple = photos.length > 1;

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[9985] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        const end = e.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (start === null || end === undefined || !multiple) return;
        const dx = end - start;
        if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1);
      }}
    >
      <figure className="relative flex max-h-full max-w-full flex-col items-center">
        <Image
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={photo.blurDataURL}
          className="h-auto max-h-[82vh] w-auto max-w-full rounded-lg object-contain"
          priority
        />
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-gray-soft">
          {index + 1} / {photos.length}
        </figcaption>
      </figure>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={copy.close}
        className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-surface-mid text-cream hover:border-accent hover:text-accent transition-colors"
      >
        ✕
      </button>
      {multiple && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={copy.previous}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-surface-mid text-cream hover:border-accent hover:text-accent transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={copy.next}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-surface-mid text-cream hover:border-accent hover:text-accent transition-colors"
          >
            →
          </button>
        </>
      )}
    </div>,
    document.body,
  );
}
