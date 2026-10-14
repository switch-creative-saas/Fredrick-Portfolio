'use client';

import React, { useRef, startTransition, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { TransitionRouter } from 'next-transition-router';
import { useLenis } from '@/components/providers/SmoothScrollProvider';
import Lenis from 'lenis';
import { safeSessionStorage } from '@/utils/storage';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { isDetailRoute, isIndexRoute, normalizePath, scrollKey } from '@/lib/routes';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

let _isCurtainCovering = false;

function restoreScroll(target: number, lenisInst: React.RefObject<Lenis | null> | null) {
  const lenisObj = lenisInst?.current || (typeof window !== 'undefined' ? window.__lenis : null);
  document.documentElement.scrollTop = target;
  document.body.scrollTop = target;
  if (lenisObj) {
    lenisObj.scrollTo(target, { immediate: true });
    lenisObj.start();
  }
  requestAnimationFrame(() => {
    document.documentElement.scrollTop = target;
    document.body.scrollTop = target;
    if (lenisObj) lenisObj.scrollTo(target, { immediate: true });
    ScrollTrigger.refresh();
  });
}

function setScrollNow(target: number) {
  if (window.__lenis) window.__lenis.scrollTo(target, { immediate: true });
  document.documentElement.scrollTop = target;
  document.body.scrollTop = target;
}

/** Pins the scroll position for `ms` while the next page renders, then hands control back. */
function holdScroll(target: number, ms: number, lenisInst: React.RefObject<Lenis | null> | null) {
  const until = performance.now() + ms;
  const step = () => {
    setScrollNow(target);
    if (performance.now() < until) requestAnimationFrame(step);
    else restoreScroll(target, lenisInst);
  };
  requestAnimationFrame(step);
}

function currentScroll(): number {
  return window.__lenis ? Math.round(window.__lenis.scroll) : Math.round(window.scrollY);
}

/**
 * Where a page should land. Index routes reached from a detail route get their
 * saved position back; everything else starts at the top. The saved value is
 * consumed either way so it can never leak into a later, unrelated visit.
 */
function takeScrollTarget(path: string, cameFromDetail: boolean): number {
  if (!isIndexRoute(path)) return 0;
  const key = scrollKey(path);
  const saved = safeSessionStorage.getItem(key);
  safeSessionStorage.removeItem(key);
  if (!cameFromDetail || !saved) return 0;
  const value = parseInt(saved, 10);
  return Number.isFinite(value) ? value : 0;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);
  const scrollTargetRef = useRef<number>(0);
  const lenis = useLenis() as React.RefObject<Lenis | null> | null;
  const pathname = usePathname();
  const reduced = useReducedMotion();

  const lenisRef = useRef(lenis);
  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  const reducedRef = useRef(reduced);
  useEffect(() => {
    reducedRef.current = reduced;
  }, [reduced]);

  // The path React last rendered. During a popstate it still holds the page we are leaving.
  const lastPathRef = useRef<string>(pathname || '/');

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!pathname) return;
    lastPathRef.current = pathname;
    // Detail pages get a duplicate history entry so the browser back button pops it first.
    // That pop is our cue to cover the screen before really going back.
    if (isDetailRoute(pathname)) {
      if (!history.state || history.state.isDummy !== true) {
        history.pushState({ isDummy: true }, '', window.location.href);
      }
    }
  }, [pathname]);

  useEffect(() => {
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;

    const playCurtainOut = (target: number) => {
      _isCurtainCovering = false;
      if (fallbackTimer) clearTimeout(fallbackTimer);
      const lenisInst = lenisRef.current;
      if (lenisInst?.current) lenisInst.current.stop();

      if (reducedRef.current) {
        holdScroll(target, 250, lenisInst);
        return;
      }

      setScrollNow(target);

      let scrollLockActive = true;
      const runScrollLock = () => {
        if (!scrollLockActive) return;
        document.documentElement.scrollTop = target;
        document.body.scrollTop = target;
        requestAnimationFrame(runScrollLock);
      };
      requestAnimationFrame(runScrollLock);

      const tl = gsap.timeline({
        onComplete: () => {
          setScrollNow(target);
          setTimeout(() => {
            scrollLockActive = false;
            restoreScroll(target, lenisInst);
          }, 16);
        },
      });

      tl.fromTo(secondLayer.current, { y: '0%' }, { y: '-100%', duration: 0.45, ease: 'circ.inOut' })
        .fromTo(firstLayer.current, { y: '0%' }, { y: '-100%', duration: 0.45, ease: 'circ.inOut' }, '<50%');
    };

    const goBack = () => {
      history.back();
      // If there is nothing to go back to (page opened directly in a new tab), uncover again.
      fallbackTimer = setTimeout(() => {
        if (_isCurtainCovering) playCurtainOut(0);
      }, 1500);
    };

    const playCurtainIn = () => {
      if (_isCurtainCovering) return;
      _isCurtainCovering = true;
      const lenisInst = lenisRef.current;
      if (lenisInst?.current) lenisInst.current.stop();

      if (reducedRef.current) {
        goBack();
        return;
      }

      const tl = gsap.timeline({ onComplete: goBack });
      tl.fromTo(firstLayer.current, { y: '100%' }, { y: '0%', duration: 0.45, ease: 'circ.inOut' })
        .fromTo(secondLayer.current, { y: '100%' }, { y: '0%', duration: 0.45, ease: 'circ.inOut' }, '<50%');
    };

    const handlePopState = (event: PopStateEvent) => {
      const path = normalizePath(window.location.pathname);
      const previousPath = normalizePath(lastPathRef.current);

      // Arrived where our own history.back() was heading: restore and uncover.
      if (_isCurtainCovering) {
        playCurtainOut(takeScrollTarget(path, true));
        return;
      }

      // Back was pressed on a detail page: the dummy entry was popped and the URL did not change.
      // Cover first, then really go back. A forward/back to a different URL is not this case.
      const poppedDummy = path === previousPath && (!event.state || event.state.isDummy !== true);
      if (isDetailRoute(path) && poppedDummy) {
        playCurtainIn();
        return;
      }

      if (path === previousPath) return;

      // Any other history move between pages: restore index scroll when leaving a detail page,
      // otherwise land at the top.
      holdScroll(takeScrollTarget(path, isDetailRoute(previousPath)), 400, lenisRef.current);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <TransitionRouter
      auto={true}
      leave={(next: () => void, from?: string, to?: string) => {
        if (lenis?.current) lenis.current.stop();

        const fromPath = normalizePath(from || window.location.pathname);
        const toPath = normalizePath(to ? new URL(to, window.location.href).pathname : '/');

        if (isIndexRoute(fromPath) && isDetailRoute(toPath)) {
          safeSessionStorage.setItem(scrollKey(fromPath), String(currentScroll()));
        }
        scrollTargetRef.current = takeScrollTarget(toPath, isDetailRoute(fromPath));

        if (reducedRef.current) {
          next();
          return () => {};
        }

        const tl = gsap
          .timeline({ onComplete: next })
          .fromTo(
            firstLayer.current,
            { y: '100%' },
            { y: '0%', duration: 0.5, ease: 'circ.inOut' }
          )
          .fromTo(
            secondLayer.current,
            { y: '100%' },
            { y: '0%', duration: 0.5, ease: 'circ.inOut' },
            '<50%'
          );

        tl.add(() => {
          setScrollNow(scrollTargetRef.current);
        }, 0.5);

        return () => {
          tl.kill();
        };
      }}
      enter={(next: () => void) => {
        if (_isCurtainCovering) {
          _isCurtainCovering = false;
          startTransition(next);
          return () => {};
        }

        if (reducedRef.current) {
          startTransition(next);
          holdScroll(scrollTargetRef.current, 250, lenis);
          return () => {};
        }

        let scrollLockActive = false;
        const runScrollLock = () => {
          if (!scrollLockActive) return;
          const y = scrollTargetRef.current;
          document.documentElement.scrollTop = y;
          document.body.scrollTop = y;
          requestAnimationFrame(runScrollLock);
        };

        const tl = gsap
          .timeline({
            onComplete: () => {
              const target = scrollTargetRef.current;
              setScrollNow(target);
              setTimeout(() => {
                scrollLockActive = false;
                restoreScroll(target, lenis);
              }, 16);
            },
          })
          .fromTo(
            secondLayer.current,
            { y: '0%' },
            { y: '-100%', duration: 0.5, ease: 'circ.inOut' }
          )
          .fromTo(
            firstLayer.current,
            { y: '0%' },
            { y: '-100%', duration: 0.5, ease: 'circ.inOut' },
            '<50%'
          )
          .call(() => {
            requestAnimationFrame(() => {
              startTransition(next);
            });
          }, undefined, '<50%');

        tl.add(() => {
          setScrollNow(scrollTargetRef.current);
          scrollLockActive = true;
          requestAnimationFrame(runScrollLock);
        }, 0);

        return () => {
          scrollLockActive = false;
          tl.kill();
        };
      }}
    >
      <main id="main-content">{children}</main>

      <div
        ref={firstLayer}
        className="fixed inset-0 z-[9994] translate-y-full bg-accent pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={secondLayer}
        className="fixed inset-0 z-[9995] translate-y-full bg-ink pointer-events-none"
        style={{ willChange: 'transform' }}
      />
    </TransitionRouter>
  );
}
