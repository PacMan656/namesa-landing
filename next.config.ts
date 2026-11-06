import type { NextConfig } from 'next';

const pages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(pages ? { output: 'export', basePath: '/namesa-landing', trailingSlash: true } : {}),
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: pages,
  },
  async headers() {
    if (pages) return [];
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
