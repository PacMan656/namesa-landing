import type { MetadataRoute } from 'next';
import { site } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/termos', '/privacidade'].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: p ? 'yearly' : 'monthly',
    priority: p ? 0.3 : 1,
  }));
}
