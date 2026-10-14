import PageShell from '@/components/shared/PageShell';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ComingSoon from '@/components/shared/ComingSoon';
import PhotoGallery from '@/components/photography/PhotoGallery';
import { getVisiblePhotos, photographyPage, photoSeries } from '@/content/photography';
import { site, showPhotography } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Photography',
  description: `Photography by ${site.name}, based in ${site.location}.`,
  path: '/photography',
});

export default function PhotographyPage() {
  const photos = getVisiblePhotos();

  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 pb-24 md:pt-40">
        <AnimatedHeading level="h1" words={photographyPage.heading} className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4" />
        <p className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed max-w-2xl mb-12">{photographyPage.intro}</p>
        {!showPhotography && (
          <div className="mb-12">
            <ComingSoon message={photographyPage.comingSoon} cta={photographyPage.bookingCta} />
          </div>
        )}
        {photos.length > 0 && <PhotoGallery photos={photos} series={photoSeries} />}
      </section>
    </PageShell>
  );
}
