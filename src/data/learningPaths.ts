// Single source of truth for learning-path metadata, shared by the homepage
// and the /learning-paths/ landing page — update counts and descriptions
// here only, not independently in each page.

export type LearningPath = {
  title: string;
  description: string;
  href: string;
  status: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  modulesCount: number;
  duration: string;
  skills: string[];
  prerequisites?: string;
  careerRelevance: string;
};

export const learningPaths: LearningPath[] = [
  {
    title: 'Foundations of Software Testing',
    description: 'What testing actually is, and why it matters before you write a single test case.',
    href: '/learning-paths/foundations/what-is-software-testing',
    status: 'Live · 17 modules',
    difficulty: 'Beginner',
    modulesCount: 17,
    duration: '3 hours',
    skills: ['Testing Principles', 'SDLC/STLC', 'Defect Lifecycle', 'QA Metrics'],
    prerequisites: 'None',
    careerRelevance: 'Essential baseline for QA engineers, developers, and product managers.'
  },
  {
    title: 'Manual Testing & Test Design',
    description: 'Boundary values, equivalence classes, decision tables — designing tests that catch real problems.',
    href: '/learning-paths/manual-testing/test-design-fundamentals',
    status: 'Live · 23 modules, certified',
    difficulty: 'Beginner',
    modulesCount: 23,
    duration: '6 hours',
    skills: ['Boundary Value Analysis', 'Equivalence Partitioning', 'Exploratory Testing', 'Bug Reporting'],
    prerequisites: 'Foundations of Software Testing',
    careerRelevance: 'Fundamental testing skill for manual testers and QA analysts.'
  },
  {
    title: 'API Testing',
    description: 'Apply test design to REST APIs: contracts, authentication, error handling, edge cases.',
    href: '/learning-paths/api-testing/what-is-api-testing',
    status: 'Live · 21 modules, certified',
    difficulty: 'Intermediate',
    modulesCount: 21,
    duration: '5 hours',
    skills: ['Postman', 'REST APIs', 'JSON Schema', 'Auth (OAuth, JWT)', 'Rate Limiting'],
    prerequisites: 'Foundations + Manual Testing',
    careerRelevance: 'Critical bridge towards automation and backend testing roles.'
  },
  {
    title: 'Test Automation',
    description: 'Turn designed test cases into automation that survives real change, not just the demo.',
    href: '/learning-paths/automation/introduction-to-automation-testing',
    status: 'Live · 18 modules, certified',
    difficulty: 'Intermediate',
    modulesCount: 18,
    duration: '6 hours',
    skills: ['Playwright', 'Selenium', 'Page Object Model', 'Data-Driven Testing', 'CI/CD'],
    prerequisites: 'Manual Testing + API Testing',
    careerRelevance: 'Primary step to becoming an Automation Engineer or SDET.'
  },
  {
    title: 'Database Testing',
    description: 'Enough SQL to verify what actually happened to the data, not just what the UI shows.',
    href: '/learning-paths/database-testing/what-is-database-testing',
    status: 'Live · 16 modules, certified',
    difficulty: 'Intermediate',
    modulesCount: 16,
    duration: '4 hours',
    skills: ['SQL', 'Data Integrity', 'Joins', 'Schema Validation', 'Transaction Testing'],
    prerequisites: 'Foundations of Software Testing',
    careerRelevance: 'Essential for backend testing, data validation, and automated checks.'
  },
  {
    title: 'Performance Testing',
    description: 'Load, stress, and spike testing designed around realistic traffic, not arbitrary numbers.',
    href: '/learning-paths/performance-testing/what-is-performance-testing',
    status: 'Live · 17 modules, certified',
    difficulty: 'Advanced',
    modulesCount: 17,
    duration: '5 hours',
    skills: ['JMeter', 'Load Testing', 'Latency Percentiles', 'Bottleneck Analysis', 'Capacity Forecasting'],
    prerequisites: 'API Testing + Database Testing',
    careerRelevance: 'Specialized performance engineering and system reliability skills.'
  },
  {
    title: 'Security Testing',
    description: 'The OWASP Top 10 and threat modeling from a tester’s point of view.',
    href: '/learning-paths/security-testing/what-is-security-testing',
    status: 'Live · 22 modules, certified',
    difficulty: 'Advanced',
    modulesCount: 22,
    duration: '6 hours',
    skills: ['OWASP Top 10', 'Threat Modeling', 'XSS/SQL Injection', 'Penetration Testing', 'SAST/DAST'],
    prerequisites: 'API Testing + Database Testing',
    careerRelevance: 'Highly valued security verification and DevSecOps capabilities.'
  },
  {
    title: 'AI for QA',
    description: 'Using AI to accelerate testing, and testing AI-driven features themselves — where each fits.',
    href: '/learning-paths/ai-for-qa/ai-in-software-testing',
    status: 'Live · 17 modules, certified',
    difficulty: 'Intermediate',
    modulesCount: 17,
    duration: '4 hours',
    skills: ['Prompt Engineering', 'AI Test Generation', 'LLM Validation', 'Responsible AI', 'AI Security'],
    prerequisites: 'Foundations of Software Testing',
    careerRelevance: 'State-of-the-art testing techniques for modern AI-integrated systems.'
  },
  {
    title: 'Mobile Testing',
    description: 'Device fragmentation, offline behavior, hardware and permissions — testing beyond web and API.',
    href: '/learning-paths/mobile-testing/what-is-mobile-testing',
    status: 'Live · 16 modules, certified',
    difficulty: 'Intermediate',
    modulesCount: 16,
    duration: '4 hours',
    skills: ['Appium', 'Emulators/Simulators', 'Fragmentation', 'Hardware Testing', 'Crash Analysis'],
    prerequisites: 'Manual Testing + API Testing',
    careerRelevance: 'Key requirement for mobile app QA specialists and mobile SDETs.'
  },
  {
    title: 'Interview Preparation',
    description: 'Scenario-based practice for the interviews QA candidates actually get asked.',
    href: '/learning-paths/interview-preparation/how-qa-interviews-are-structured',
    status: 'Live · 21 modules, certified',
    difficulty: 'Intermediate',
    modulesCount: 21,
    duration: '5 hours',
    skills: ['STAR Method', 'QA Strategy Scenarios', 'Technical Coding Qs', 'System Design'],
    prerequisites: 'Completion of at least one domain-specific learning path.',
    careerRelevance: 'Direct preparation for QA, SDET, and Lead QA positions.'
  },
  {
    title: 'Career & Leadership',
    description: 'Building a test strategy, leading a QA team, and growing beyond individual execution.',
    href: '/learning-paths/career-leadership/qa-career-roadmap-ic-vs-technical-lead-vs-manager',
    status: 'Live · 35 modules, certified',
    difficulty: 'Advanced',
    modulesCount: 35,
    duration: '8 hours',
    skills: ['Test Strategy Design', 'QA Metrics', 'Coaching & Mentoring', 'Agile Leadership', 'QA Budgeting'],
    prerequisites: 'Foundations + experience leading projects',
    careerRelevance: 'Essential roadmap for aspiring QA managers, Leads, and Directors.'
  }
];
