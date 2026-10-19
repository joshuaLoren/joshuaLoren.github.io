import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNotes } from '../data';
import { SITE } from '../site';

export async function GET(context: APIContext) {
  const notes = await getNotes();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: notes.map((n) => ({
      title: n.data.title,
      description: n.data.summary,
      pubDate: n.data.date,
      link: `/notes/${n.id}/`,
    })),
  });
}
