import { getCollection } from 'astro:content';

export async function getLog() {
  const entries = await getCollection('log', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getSystems() {
  const systems = await getCollection('systems');
  return systems.sort((a, b) => a.data.order - b.data.order);
}

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
