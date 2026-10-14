export interface Photo {
  id: string;
  /** Path under /public, e.g. /photography/<series>/<file>.webp */
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
  series?: string;
  location?: string;
  year?: number;
}

export interface PhotoSeries {
  slug: string;
  title: string;
  description?: string;
  cover: string;
}

// TODO(fred): add photo series and photos.
export const photoSeries: PhotoSeries[] = [];

// TODO(fred): add photos (export at max 2000px wide, webp).
export const photos: Photo[] = [];
