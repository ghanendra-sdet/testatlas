type Options = {
  licenseUrl: string;
};

const projectRoutes: Record<string, string> = {
  'README.md': '/project/overview',
  'PROJECT_CONSTITUTION.md': '/project/constitution',
  'STYLE_GUIDE.md': '/project/style-guide',
  'ROADMAP.md': '/project/roadmap',
  'CONTRIBUTING.md': '/project/contributing',
  'GOVERNANCE.md': '/project/governance',
};

/**
 * Keeps root Markdown files canonical for GitHub while rendering their internal
 * references as Docusaurus routes when they are imported into the project docs.
 */
export default function rewriteProjectLinks({licenseUrl}: Options) {
  const routes = {...projectRoutes, LICENSE: licenseUrl};

  return ({fileContent}: {filePath: string; fileContent: string}): string =>
    Object.entries(routes).reduce(
      (content, [source, destination]) => content.replaceAll(`](${source})`, `](${destination})`),
      fileContent,
    );
}
