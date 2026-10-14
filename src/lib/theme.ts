/**
 * Reads colour tokens from the @theme block in globals.css at runtime, for code that cannot
 * use Tailwind classes or CSS variables directly (canvas drawing, GSAP colour tweens).
 */

export type ThemeColor =
  | 'cream'
  | 'ink'
  | 'accent'
  | 'accent-light'
  | 'accent-muted'
  | 'warm'
  | 'surface'
  | 'surface-mid'
  | 'elevated'
  | 'charcoal';

const cache = new Map<ThemeColor, string>();

/** The token's value as declared in CSS, e.g. "#4F7BFF". */
export function themeColor(name: ThemeColor): string {
  const hit = cache.get(name);
  if (hit) return hit;
  const value = getComputedStyle(document.documentElement).getPropertyValue(`--color-${name}`).trim();
  if (value) cache.set(name, value);
  return value;
}

/** "#4F7BFF" + 0.2 -> "rgba(79, 123, 255, 0.2)". */
export function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const num = parseInt(full, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

/** A theme token with alpha, ready for canvas or GSAP. */
export function themeRgba(name: ThemeColor, alpha: number): string {
  return hexToRgba(themeColor(name), alpha);
}
