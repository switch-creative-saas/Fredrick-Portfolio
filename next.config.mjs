const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Cover images for VitaLink blog posts.
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' }],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Old URLs that are indexed on Google.
  async redirects() {
    return [
      { source: '/rss.xml', destination: '/', permanent: true },
      { source: '/projects/:slug', destination: '/work/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
