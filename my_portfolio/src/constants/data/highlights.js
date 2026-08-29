/**
 * Homepage positioning copy.
 *
 * Every claim here traces back to content already in this repo (portfolio.data.js,
 * reviews.js, experience.js and the previous About page). Keep it that way - the
 * numbers are checkable, which is exactly what makes them persuasive.
 */

/** Professional start: Upriver/Friver, January 2023 (see experience.js). */
export const CAREER_START_YEAR = 2023;

export const yearsBuilding = () =>
  Math.max(1, new Date().getFullYear() - CAREER_START_YEAR);

export const POSITIONING = {
  availability: 'Available for new projects',
  headline: 'I build software that businesses actually run on.',
  subhead:
    'Full-stack engineer working with founders and small teams on production SaaS platforms, web apps and internal tools. From an empty repository to a system handling real customers, real money and real compliance.',
  location: 'Lahore, Pakistan - working with clients worldwide',
};

export const STATS = [
  { value: '20+', label: 'Projects shipped', detail: 'SaaS, web apps, extensions and ML tools' },
  { value: '5.0', label: 'Average client rating', detail: 'Across Fiverr and direct engagements' },
  { value: '5', label: 'Countries served', detail: 'Germany, Romania, Moldova, UK, Pakistan' },
  { value: '99%', label: 'Delivery success rate', detail: 'Fiverr Level 1 Seller' },
];

/** Real client and product names taken from portfolio.data.js and reviews.js. */
export const CLIENT_NAMES = [
  'ContaTaxPay',
  'Oldham Chronicle',
  'AIYard',
  'GreenYasin',
  'Neurix Solution',
  'Kindly',
  'PasteView',
  'Express Bodenleger',
];

/**
 * What a client is really buying. Each maps to evidence in the portfolio, so
 * these are capability claims rather than adjectives.
 */
export const VALUE_PROPS = [
  {
    title: 'Systems, not just screens',
    body: 'Multi-tenant SaaS with role-based access, payment flows, government API integrations and audit trails. ContaTaxPay files real tax declarations through Germany\u2019s ELSTER system.',
    proof: 'ContaTaxPay - Germany, Romania, Moldova',
  },
  {
    title: 'I take over messy codebases',
    body: 'Legacy migrations, half-finished builds and inherited projects. I read the code, find what is actually broken, and ship a plan you can follow.',
    proof: 'Oldham Chronicle migration - UK',
  },
  {
    title: 'AI where it earns its place',
    body: 'OpenAI integrations, predictive models and computer vision built into products, plus a Machine Learning background from academic and internship work.',
    proof: 'AIYard - AI product platform',
  },
  {
    title: 'Shipped and maintained',
    body: 'Deployment, domains, hosting, monitoring and the unglamorous follow-up work. Projects go live and stay live rather than stalling at ninety percent.',
    proof: 'Deployed on Vercel, Netlify, Heroku and VPS',
  },
];

/** Sets expectations before the first call - reduces friction for new clients. */
export const PROCESS = [
  {
    step: '01',
    title: 'Tell me the problem',
    body: 'A message describing what you need. No brief required - a paragraph is enough to start.',
  },
  {
    step: '02',
    title: 'Scope and a fixed quote',
    body: 'I come back with what I would build, how long it takes and what it costs. You approve before anything begins.',
  },
  {
    step: '03',
    title: 'Build in the open',
    body: 'Regular working previews you can click through, so nothing is a surprise at the end.',
  },
  {
    step: '04',
    title: 'Launch and hand over',
    body: 'Deployed, documented and handed over properly, with support while you settle in.',
  },
];
