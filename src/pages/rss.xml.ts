import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, getTils } from '../posts';
import { SITE } from '../site';

export async function GET(context: APIContext) {
  const [posts, tils] = await Promise.all([getPosts(), getTils()]);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: [
      ...posts.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.date,
        link: `/writing/${p.id}/`,
      })),
      ...tils.map((t) => ({
        title: `TIL: ${t.data.title}`,
        pubDate: t.data.date,
        link: `/til/${t.id}/`,
      })),
    ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
  });
}
