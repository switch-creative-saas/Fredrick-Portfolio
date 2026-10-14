/**
 * Single source of truth for how routes relate to each other.
 * Index routes list items; detail routes live under a detail prefix.
 * The page transition uses this to decide when to save and restore scroll.
 */

export const INDEX_ROUTES = ['/', '/work', '/design', '/photography'] as const;
export const DETAIL_PREFIXES = ['/work/', '/design/'] as const;

/** Every static page, used by the sitemap. */
export const SITEMAP_ROUTES: string[] = [
  '/',
  '/about',
  '/vitalink',
  '/work',
  '/design',
  '/photography',
  '/contact',
  '/cv',
  '/privacy-policy',
  '/terms-of-service',
];

export type IndexRoute = (typeof INDEX_ROUTES)[number];

/** Strips query, hash and trailing slash: '/work/?a=1#x' -> '/work'. */
export function normalizePath(path: string): string {
  const clean = path.split(/[?#]/)[0] || '/';
  return clean.length > 1 && clean.endsWith('/') ? clean.slice(0, -1) : clean;
}

export function isIndexRoute(path: string): boolean {
  return (INDEX_ROUTES as readonly string[]).includes(normalizePath(path));
}

export function isDetailRoute(path: string): boolean {
  const p = normalizePath(path);
  return DETAIL_PREFIXES.some((prefix) => p.startsWith(prefix) && p.length > prefix.length);
}

/** '/work/mosyf' -> '/work'. Returns null for anything that is not a detail route. */
export function parentIndexFor(path: string): IndexRoute | null {
  const p = normalizePath(path);
  const prefix = DETAIL_PREFIXES.find((pre) => p.startsWith(pre) && p.length > pre.length);
  return prefix ? (prefix.slice(0, -1) as IndexRoute) : null;
}

/** sessionStorage key holding the saved scroll position of an index route. */
export function scrollKey(path: string): string {
  return `scroll:${normalizePath(path)}`;
}

/** True when `href` points at `pathname` itself or one of its children ('/work' is active on '/work/x'). */
export function isActiveRoute(href: string, pathname: string): boolean {
  const target = normalizePath(href);
  const current = normalizePath(pathname);
  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
}
