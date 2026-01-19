import { MetadataRoute } from 'next';
import { siteConfig } from '@/app/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}