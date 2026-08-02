import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  projectSidebar: [
    {
      type: 'category',
      label: 'About TestAtlas',
      collapsed: false,
      items: [
        'overview',
        'constitution',
        'style-guide',
        'roadmap',
        'contributing',
        'governance',
      ],
    },
  ],
};

export default sidebars;
