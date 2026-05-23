import type { MetadataRoute } from 'next';

const routes = ['/', '/services', '/pricing', '/about', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://abacore.ai${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8
  }));
}
