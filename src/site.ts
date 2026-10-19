export const SITE = {
  name: 'Joshua Small',
  title: 'Joshua Small',
  description:
    'Staff software engineer at Aiwyn. I built its payments platform from zero to $2.38B in payment volume.',
  github: 'https://github.com/joshuaLoren',
  linkedin: 'https://www.linkedin.com/in/joshuasmalluncc/',
};

export type Role = { title?: string; points: string[] };
export type Job = { company: string; dates: string; roles: Role[] };

export const WORK: Job[] = [
  {
    company: 'Aiwyn',
    dates: '2020 – present',
    roles: [
      {
        title: 'Staff Software Engineer',
        points: [
          'Own technical direction for the Experience business unit: payments, engagements, and client requests.',
          'Lead architecture for cross-team work, including greenfield builds and platform modernization.',
          'Rolled out Claude Code across engineering: project-level CLAUDE.md files, CI hooks for code-quality checks, MCP server integrations, and shared configuration across repositories.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        points: [
          'Extracted billing from the monolith in eight phases, with no disruption to customers.',
          'Cut test run time 40% by switching test setup to PostgreSQL template databases.',
        ],
      },
      {
        title: 'Software Engineer',
        points: [
          'Built the payments platform from scratch and took it from $0 to $2.38B in payment volume.',
          'Designed the payment state machine, with self-healing reconciliation and long-lived idempotency.',
          'Integrated Stripe Payment Intents, Connect, ACH, and cards, and led the migration off the Charges API.',
          'Added international rails: Canadian PAD, BACS, and multi-currency.',
          'Shaped payment flows around how firms collect: quick pay for small balances, payment plans for large invoices, and self-serve payment links.',
        ],
      },
    ],
  },
  {
    company: 'PeraHealth',
    dates: '2019 – 2020',
    roles: [
      {
        title: 'Software Engineer',
        points: [
          'Built analytics features on the Rothman Index, used by nurses and clinicians to monitor patient condition.',
        ],
      },
    ],
  },
];
