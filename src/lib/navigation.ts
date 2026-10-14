'use client';

import { useTransitionRouter } from 'next-transition-router';
import { useLenis } from '@/components/providers/SmoothScrollProvider';
import Lenis from 'lenis';
import { normalizePath } from '@/lib/routes';

/**
 * Finds the element for an in-page anchor. A section can opt into a wider scroll
 * target by wrapping itself in an element with id `<id>-section-wrapper`.
 */
export const getSectionElement = (targetId: string): HTMLElement | null => {
  if (!targetId || targetId === 'top' || targetId === 'home') return null;
  return document.getElementById(`${targetId}-section-wrapper`) || document.getElementById(targetId);
};

export const scrollToSection = (targetId: string, lenis?: Lenis | null) => {
  const activeLenis = lenis || (typeof window !== 'undefined' ? window.__lenis : null);

  if (!targetId || targetId === 'top' || targetId === 'home') {
    if (activeLenis) {
      activeLenis.scrollTo(0, {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  let attempts = 0;
  const maxAttempts = 25;

  const tryScroll = () => {
    const el = getSectionElement(targetId);
    if (el) {
      if (activeLenis) {
        activeLenis.scrollTo(el, {
          offset: 0,
          duration: 1.3,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else if (typeof window !== 'undefined') {
        const rect = el.getBoundingClientRect();
        const targetTop = rect.top + (window.scrollY || window.pageYOffset);
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    } else if (attempts < maxAttempts) {
      attempts++;
      requestAnimationFrame(tryScroll);
    }
  };

  tryScroll();
};

/**
 * Click handler for nav links. Links to another page go through the transition
 * router (so the curtain plays); links to the current page scroll in place.
 * Give the anchor `data-transition-ignore` so the router's auto mode does not
 * handle the same click twice.
 */
export const useHandleLinkClick = (setIsMenuOpen?: (isOpen: boolean) => void) => {
  const router = useTransitionRouter();
  const lenisRef = useLenis() as React.RefObject<Lenis | null> | null;

  return (href: string) => {
    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
    requestAnimationFrame(() => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
      }
    });

    const [rawPath, targetId = ''] = href.split('#');
    const targetPath = normalizePath(rawPath || '/');
    const currentPath = typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/';

    if (targetPath !== currentPath) {
      if (typeof window !== 'undefined' && targetId) {
        try {
          sessionStorage.setItem('nav_target_section', targetId);
        } catch {}
      }
      router.push(targetPath);
      return;
    }

    const lenis = lenisRef?.current || (typeof window !== 'undefined' ? window.__lenis : null);
    if (lenis) {
      lenis.start();
    }

    scrollToSection(targetId, lenis);

    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };
};
