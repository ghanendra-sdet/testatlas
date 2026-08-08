// Single source of truth for learning-path metadata, shared by the homepage
// and the /learning-paths/ landing page — update counts and descriptions
// here only, not independently in each page.
export type LearningPath = {
  title: string;
  description: string;
  href?: string;
  status: string;
};

export const learningPaths: LearningPath[] = [
  {
    title: 'Foundations of Software Testing',
    description: 'What testing actually is, and why it matters before you write a single test case.',
    href: '/learning-paths/foundations/what-is-software-testing',
    status: 'Live · 17 modules',
  },
  {
    title: 'Manual Testing & Test Design',
    description: 'Boundary values, equivalence classes, decision tables — designing tests that catch real problems.',
    href: '/learning-paths/manual-testing/test-design-fundamentals',
    status: 'Live · 23 modules, certified',
  },
  {
    title: 'API Testing',
    description: 'Apply test design to REST APIs: contracts, authentication, error handling, edge cases.',
    href: '/learning-paths/api-testing/what-is-api-testing',
    status: 'Live · 21 modules, certified',
  },
  {
    title: 'Test Automation',
    description: 'Turn designed test cases into automation that survives real change, not just the demo.',
    href: '/learning-paths/automation/introduction-to-automation-testing',
    status: 'Live · 18 modules, certified',
  },
  {
    title: 'Database Testing',
    description: 'Enough SQL to verify what actually happened to the data, not just what the UI shows.',
    href: '/learning-paths/database-testing/what-is-database-testing',
    status: 'Live · 16 modules, certified',
  },
  {
    title: 'Performance Testing',
    description: 'Load, stress, and spike testing designed around realistic traffic, not arbitrary numbers.',
    href: '/learning-paths/performance-testing/what-is-performance-testing',
    status: 'Live · 17 modules, certified',
  },
  {
    title: 'Security Testing',
    description: 'The OWASP Top 10 and threat modeling from a tester’s point of view.',
    href: '/learning-paths/security-testing/what-is-security-testing',
    status: 'Live · 22 modules, certified',
  },
  {
    title: 'AI for QA',
    description: 'Using AI to accelerate testing, and testing AI-driven features themselves — where each fits.',
    href: '/learning-paths/ai-for-qa/ai-in-software-testing',
    status: 'Live · 17 modules, certified',
  },
  {
    title: 'Mobile Testing',
    description: 'Device fragmentation, offline behavior, hardware and permissions — testing beyond web and API.',
    href: '/learning-paths/mobile-testing/what-is-mobile-testing',
    status: 'Live · 16 modules, certified',
  },
  {
    title: 'Interview Preparation',
    description: 'Scenario-based practice for the interviews QA candidates actually get asked.',
    href: '/learning-paths/interview-preparation/how-qa-interviews-are-structured',
    status: 'Live · 21 modules, certified',
  },
  {
    title: 'Career & Leadership',
    description: 'Building a test strategy, leading a QA team, and growing beyond individual execution.',
    href: '/learning-paths/career-leadership/qa-career-roadmap-ic-vs-technical-lead-vs-manager',
    status: 'Live · 35 modules, certified',
  },
];
