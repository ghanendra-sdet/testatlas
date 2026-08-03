// Validates every .mmd file under assets/diagrams/ with Mermaid's real parser.
//
// Why this exists: `npm run build` does NOT catch invalid Mermaid syntax.
// @docusaurus/theme-mermaid renders diagrams entirely client-side, in the
// browser, after page load — a build can succeed with a broken diagram on
// the page, and the only way to know is either a browser or this script.
// Discovered exactly this way during the Foundations Visual Sprint: a
// quadrantChart with unquoted, space-containing point labels built clean
// and failed silently at render time.
//
// Usage: node scripts/validate-diagrams.mjs

import {JSDOM} from 'jsdom';
import {readFileSync, readdirSync, statSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const diagramsRoot = path.join(__dirname, '..', 'assets', 'diagrams');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {pretendToBeVisual: true});
global.window = dom.window;
global.document = dom.window.document;
global.SVGElement = dom.window.SVGElement || class SVGElement {};

const mermaidModule = await import('mermaid');
const mermaid = mermaidModule.default;
mermaid.initialize({startOnLoad: false});

function findMmdFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      results.push(...findMmdFiles(fullPath));
    } else if (entry.endsWith('.mmd')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = findMmdFiles(diagramsRoot).sort();
let failures = 0;

for (const file of files) {
  const raw = readFileSync(file, 'utf-8');
  const relative = path.relative(diagramsRoot, file);
  try {
    await mermaid.parse(raw);
    console.log(`OK    ${relative}`);
  } catch (err) {
    failures++;
    console.log(`FAIL  ${relative}`);
    console.log(`      ${err.message.split('\n')[0]}`);
  }
}

console.log(`\n${files.length - failures}/${files.length} diagrams parsed successfully.`);
process.exit(failures > 0 ? 1 : 0);
