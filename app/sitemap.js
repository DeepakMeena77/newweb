import { navigation } from '@/lib/site-data';
import { siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  return navigation.map((item) => ({
    url: `${siteUrl}${item.href === '/' ? '' : item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === '/' ? 'weekly' : 'monthly',
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
