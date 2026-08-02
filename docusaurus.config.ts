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
