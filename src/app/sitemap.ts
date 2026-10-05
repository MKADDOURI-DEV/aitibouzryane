import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    { url: base, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/accommodations`, lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/experiences`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/gallery`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
  ];
}