import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rewriteProjectLinks from './scripts/remark-project-links';

const [organizationName = 'testatlas', projectName = 'testatlas'] =
  (process.env.GITHUB_REPOSITORY ?? 'testatlas/testatlas').split('/');
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const config: Config = {
  title: 'TestAtlas',
  tagline: 'The Open Software Testing Knowledge Base',
  favicon: 'img/favicon.svg',

  url: `https://${organizationName}.github.io`,
  baseUrl: isGitHubActions ? `/${projectName}/` : '/',
  organizationName,
  projectName,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,500&display=swap',
      },
    },
  ],

  markdown: {
    mermaid: true,
    preprocessor: rewriteProjectLinks({
      licenseUrl: `https://github.com/${organizationName}/${projectName}/blob/main/LICENSE`,
    }),
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          blogTitle: 'TestAtlas Notes',
          blogDescription: 'Project updates and practical quality-engineering notes.',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/project',
        routeBasePath: 'project',
        sidebarPath: './sidebars.ts',
        editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
        lastVersion: 'current',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learning-paths',
        path: 'learning-paths',
        routeBasePath: 'learning-paths',
        sidebarPath: './sidebarsLearningPaths.ts',
        editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: ['project', 'learning-paths'],
        searchResultLimits: 8,
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/testatlas-social-card.svg',
    mermaid: {
      theme: {light: 'base', dark: 'base'},
      options: {
        themeVariables: {
          background: 'transparent',
          primaryColor: '#0992a1',
          primaryTextColor: '#05262b',
          primaryBorderColor: '#076f7b',
          lineColor: '#076f7b',
          secondaryColor: '#e6f4f5',
          tertiaryColor: '#f3f8f8',
          fontSize: '16px',
          // Quadrant chart: constrained to the same brand palette instead of
          // Mermaid's default four-color quadrant fill, so a quadrantChart
          // doesn't visually clash with every flowchart around it.
          quadrant1Fill: '#e6f4f5',
          quadrant2Fill: '#f3f8f8',
          quadrant3Fill: '#f3f8f8',
          quadrant4Fill: '#e6f4f5',
          quadrant1TextFill: '#05262b',
          quadrant2TextFill: '#05262b',
          quadrant3TextFill: '#05262b',
          quadrant4TextFill: '#05262b',
          quadrantPointFill: '#076f7b',
          quadrantPointTextFill: '#05262b',
          quadrantXAxisTextFill: '#05262b',
          quadrantYAxisTextFill: '#05262b',
          quadrantTitleFill: '#05262b',
        },
        flowchart: {
          // More breathing room between nodes/ranks — the default spacing
          // reads cramped at the module content width.
          nodeSpacing: 45,
          rankSpacing: 55,
          curve: 'basis',
        },
        state: {
          nodeSpacing: 45,
          rankSpacing: 55,
        },
      },
    },
    navbar: {
      title: 'TestAtlas',
      logo: {
        alt: 'TestAtlas logo',
        src: 'img/testatlas-mark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          docsPluginId: 'learning-paths',
          sidebarId: 'learningPathsSidebar',
          position: 'left',
          label: 'Learning Paths',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectSidebar',
          position: 'left',
          label: 'Project',
        },
        {to: '/blog', label: 'Notes', position: 'left'},
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Project foundations', to: '/project/overview'},
            {label: 'Roadmap', to: '/project/roadmap'},
            {label: 'Contribute', to: '/project/contributing'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: `https://github.com/${organizationName}/${projectName}`},
            {label: 'Report an issue', href: `https://github.com/${organizationName}/${projectName}/issues`},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TestAtlas contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
      additionalLanguages: ['bash', 'java', 'json', 'sql', 'typescript', 'yaml'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
