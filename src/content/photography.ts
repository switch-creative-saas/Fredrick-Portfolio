import type { HeadingWord } from './home';

export interface Photo {
  id: string;
  /** Full size (2400px wide), used by the lightbox. */
  src: string;
  /** Grid size (1200px wide). */
  thumb: string;
  alt: string;
  /** Intrinsic size of `src`. */
  width: number;
  height: number;
  /** Matches a PhotoSeries slug. */
  series: string;
  year: number | null;
  featured: boolean;
  /** Tiny inline image shown while the real one loads. */
  blurDataURL: string;
  /** Layout-test image. Only rendered in development and never counted as real work. */
  placeholder?: boolean;
}

export interface PhotoSeries {
  slug: string;
  title: string;
  description?: string;
}

export const photographyPage = {
  heading: [{ t: 'PHOTO' }, { t: 'graphy', serif: true }] as HeadingWord[],
  // TODO(fred): confirm what you photograph.
  intro: 'Portraits, events and organisation shoots in Abuja. The gallery is being curated, and bookings are open.',
  allLabel: 'All',
  comingSoon: 'The gallery is on the way.',
  bookingCta: { top: 'BOOK A SHOOT', bottom: 'CONTACT →', href: '/contact?topic=photography' },
  lightbox: { close: 'Close', previous: 'Previous photo', next: 'Next photo' },
};

// TODO(fred): add your series. Slugs match the folder names in photos-raw/.
export const photoSeries: PhotoSeries[] = [{ slug: 'placeholder', title: 'Layout test' }];

// Generate real entries with `node scripts/optimize-photos.mjs` and paste them here.
export const photos: Photo[] = [
  {
    id: 'placeholder-landscape',
    src: '/photography/placeholder/placeholder-landscape-2400.webp',
    thumb: '/photography/placeholder/placeholder-landscape-1200.webp',
    alt: 'Solid blue placeholder image in landscape format',
    width: 2400,
    height: 1600,
    series: 'placeholder',
    year: null,
    featured: false,
    blurDataURL: 'data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoQAAsAA4BaJaACdLoAA5gA/ueL//kp/Xd5Rc93xC72MKAA',
    placeholder: true,
  },
  {
    id: 'placeholder-portrait',
    src: '/photography/placeholder/placeholder-portrait-2400.webp',
    thumb: '/photography/placeholder/placeholder-portrait-1200.webp',
    alt: 'Solid indigo placeholder image in portrait format',
    width: 1600,
    height: 2400,
    series: 'placeholder',
    year: null,
    featured: false,
    blurDataURL: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAgCdASoQABgAPu1iqU2ppaOiMAgBMB2JQBdgBaSAAP7uQx92exHGMfC6DqPwAAA=',
    placeholder: true,
  },
  {
    id: 'placeholder-square',
    src: '/photography/placeholder/placeholder-square-2400.webp',
    thumb: '/photography/placeholder/placeholder-square-1200.webp',
    alt: 'Solid cream placeholder image in square format',
    width: 2000,
    height: 2000,
    series: 'placeholder',
    year: null,
    featured: false,
    blurDataURL: 'data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAABwAQCdASoQABAAA4BaJYwCdAFAAAD+8QKJ6dFoAAA=',
    placeholder: true,
  },
];

/** Photos that count as real work (placeholders excluded). */
export const realPhotos = photos.filter((p) => !p.placeholder);

/** Photos to render: placeholders only show in development so the layout can be tested. */
export function getVisiblePhotos(): Photo[] {
  return process.env.NODE_ENV === 'production' ? realPhotos : photos;
}
