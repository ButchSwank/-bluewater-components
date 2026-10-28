import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bluewatercomponents.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bluewatercomponents.com#services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bluewatercomponents.com#catalog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://bluewatercomponents.com#contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://bluewatercomponents.com/di-mgmt-82274-rev-a-explained',
      lastModified: new Date('2026-10-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bluewatercomponents.com/sd-26-predictive-tools-design-health',
      lastModified: new Date('2026-10-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
