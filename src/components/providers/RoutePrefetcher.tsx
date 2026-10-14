'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { navLinks } from '@/content/site';
import { normalizePath } from '@/lib/routes';

/** Routes worth having ready before anyone clicks: every top-level page. */
const WARM_ROUTES = Array.from(new Set(['/', ...navLinks.map((l) => l.href), '/cv']));

const schedule = (cb: () => void) => {
  if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(cb, { timeout: 2500 });
  else setTimeout(cb, 1200);
};

/**
 * Nav links and many buttons are plain anchors handled by the transition router, so Next
 * never prefetches them and each page change waits for a network round trip after the
 * curtain closes. This warms the main routes once the page is idle, and prefetches any
 * other internal link as soon as the pointer or a finger lands on it.
 */
export default function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const done = new Set<string>();

    const prefetch = (href: string) => {
      const path = normalizePath(href);
      if (done.has(path) || path === normalizePath(window.location.pathname)) return;
      done.add(path);
      router.prefetch(path);
    };

    if (!conn?.saveData) {
      schedule(() => WARM_ROUTES.forEach(prefetch));
    }

    const onIntent = (e: Event) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname.startsWith('/api/')) return;
      if (/\.(pdf|xml|txt|webp|png|jpe?g)$/i.test(url.pathname)) return;
      prefetch(url.pathname);
    };

    document.addEventListener('pointerover', onIntent, { passive: true });
    document.addEventListener('touchstart', onIntent, { passive: true });
    document.addEventListener('focusin', onIntent);
    return () => {
      document.removeEventListener('pointerover', onIntent);
      document.removeEventListener('touchstart', onIntent);
      document.removeEventListener('focusin', onIntent);
    };
  }, [router]);

  return null;
}
