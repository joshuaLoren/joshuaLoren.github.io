export const SITE = {
  name: 'Joshua Small',
  title: 'Joshua Small — engineering notes',
  description:
    'Accounting engineer. Notes, experiments, and projects on payments, accounting systems, and applied AI.',
  github: 'https://github.com/joshuaLoren',
  linkedin: '', // add your LinkedIn URL to show it in the footer
};

// Series slugs used in a post's `series:` frontmatter, mapped to display info.
export const SERIES: Record<string, { name: string; description: string }> = {
  'dispute-engine': {
    name: 'Dispute Engine log',
    description:
      'Building a chargeback-triage system in public, one curriculum week at a time, with the eval scorecard as it develops.',
  },
};
