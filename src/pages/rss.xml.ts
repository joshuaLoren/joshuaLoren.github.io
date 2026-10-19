import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getLog } from '../data';
import { SITE } from '../site';

export async function GET(context: APIContext) {
  const log = await getLog();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: log.map((e) => ({
      title: `[${e.data.system}] ${e.data.title}`,
      description: e.data.lines.join(' / '),
      pubDate: e.data.date,
      link: `/log/${e.id}/`,
    })),
  });
}
