import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

console.log('====================================================');
console.log('  HCS EMPIRICAL CHALLENGER 2 - AUDIT SUITE (V2)');
console.log('====================================================\n');

const results = {
  routes: { tested: 0, passed: 0, failed: 0, details: [] },
  redirects: { tested: 0, passed: 0, failed: 0, details: [] },
  links: { tested: 0, passed: 0, failed: 0, details: [] },
  anchors: { tested: 0, passed: 0, failed: 0, details: [] },
  mobileParity: { passed: false, details: [] },
};

// 1. ROUTE INTEGRITY CHECK
const expectedRoutes = [
  '/',
  '/tjanster',
  '/linkedclient',
  '/kunder',
  '/om',
  '/jobba-hos-oss',
  '/boka-mote'
];

console.log('--- 1. Testing Route Integrity ---');
for (const route of expectedRoutes) {
  results.routes.tested++;
  const routePath = route === '/' 
    ? path.join(srcDir, 'app', 'page.tsx')
    : path.join(srcDir, 'app', route.replace(/^\//, ''), 'page.tsx');

  if (fs.existsSync(routePath)) {
    const content = fs.readFileSync(routePath, 'utf8');
    const hasDefaultExport = /export\s+default\s+(function|async\s+function|const\s+\w+\s*=)/.test(content) || /export\s+default\s+\w+;/.test(content);
    if (hasDefaultExport) {
      results.routes.passed++;
      results.routes.details.push({ route, status: 'PASS', path: path.relative(projectRoot, routePath) });
      console.log(`  [PASS] Route ${route} exists with default export at ${path.relative(projectRoot, routePath)}`);
    } else {
      results.routes.failed++;
      results.routes.details.push({ route, status: 'FAIL', reason: 'Missing default export' });
      console.log(`  [FAIL] Route ${route} exists at ${routePath} but missing default export!`);
    }
  } else {
    results.routes.failed++;
    results.routes.details.push({ route, status: 'FAIL', reason: 'File not found' });
    console.log(`  [FAIL] Route ${route} file not found at ${routePath}!`);
  }
}

// 2. REDIRECT INTEGRITY CHECK
console.log('\n--- 2. Testing Redirects in next.config.ts ---');
const nextConfigPath = path.join(projectRoot, 'next.config.ts');

if (fs.existsSync(nextConfigPath)) {
  const configContent = fs.readFileSync(nextConfigPath, 'utf8');
  const requestedRedirects = [
    { source: '/kontakt', destination: '/boka-mote' },
    { source: '/pilot', destination: '/tjanster' },
    { source: '/case-studies', destination: '/kunder' },
    { source: '/cases', destination: '/kunder' },
    { source: '/services', destination: '/tjanster' },
    { source: '/about', destination: '/om' },
    { source: '/careers', destination: '/jobba-hos-oss' },
    { source: '/karriar', destination: '/jobba-hos-oss' },
  ];

  for (const reqRedir of requestedRedirects) {
    results.redirects.tested++;
    
    // Look for exact match or regex in configContent
    const sourceRegex = new RegExp(`source:\\s*["']${reqRedir.source}["']`);
    const destRegex = new RegExp(`destination:\\s*["']${reqRedir.destination}["']`);
    
    const hasSource = sourceRegex.test(configContent);
    const hasDest = destRegex.test(configContent);

    if (hasSource && hasDest) {
      results.redirects.passed++;
      results.redirects.details.push({ ...reqRedir, status: 'PASS' });
      console.log(`  [PASS] Redirect ${reqRedir.source} -> ${reqRedir.destination} configured in next.config.ts`);
    } else {
      results.redirects.failed++;
      results.redirects.details.push({ ...reqRedir, status: 'FAIL', reason: `Missing in next.config.ts (source: ${hasSource}, dest: ${hasDest})` });
      console.log(`  [FAIL] Redirect ${reqRedir.source} -> ${reqRedir.destination} MISSING in next.config.ts!`);
    }
  }
} else {
  console.log(`  [FAIL] next.config.ts not found!`);
}

// 3. SCAN ALL TS/TSX FILES FOR LINKS AND ANCHORS
console.log('\n--- 3. Extracting and Testing All Links Across Codebase ---');

function getAllFiles(dir, exts = ['.ts', '.tsx']) {
  let files = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllFiles(full, exts));
    } else if (exts.some(ext => item.name.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

const allSrcFiles = getAllFiles(srcDir);
const definedIds = new Set();

// Extract static element IDs
for (const file of allSrcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const idRegex = /id=["']([^"']+)["']/g;
  let idMatch;
  while ((idMatch = idRegex.exec(content)) !== null) {
    definedIds.add(idMatch[1]);
  }
}

// Extract dynamic service IDs from services.ts
const servicesPath = path.join(srcDir, 'data', 'services.ts');
if (fs.existsSync(servicesPath)) {
  const servContent = fs.readFileSync(servicesPath, 'utf8');
  const servIdRegex = /id:\s*["']([^"']+)["']/g;
  let sMatch;
  while ((sMatch = servIdRegex.exec(servContent)) !== null) {
    definedIds.add(sMatch[1]);
  }
}

// Extract pilot step IDs or case study IDs if any
const pilotStepsPath = path.join(srcDir, 'data', 'pilotSteps.ts');
if (fs.existsSync(pilotStepsPath)) {
  const pilotContent = fs.readFileSync(pilotStepsPath, 'utf8');
  const pilotIdRegex = /id:\s*["']([^"']+)["']/g;
  let pMatch;
  while ((pMatch = pilotIdRegex.exec(pilotContent)) !== null) {
    definedIds.add(pMatch[1]);
  }
}

console.log(`Total known element/target IDs in system: ${definedIds.size} [${Array.from(definedIds).join(', ')}]`);

// Extract links from files
const linkRegex1 = /href=["']([^"']+)["']/g;
const linkRegex2 = /href:\s*["']([^"']+)["']/g;
const linkRegex3 = /href=\{[`"']([^`"'}]+)[`"']\}/g;

const uniqueLinkMap = new Map();

for (const file of allSrcFiles) {
  if (file.includes('__tests__')) continue; // skip test files
  const content = fs.readFileSync(file, 'utf8');
  const relFile = path.relative(projectRoot, file);

  const addLink = (href) => {
    const key = `${href}@@@${relFile}`;
    if (!uniqueLinkMap.has(key)) {
      uniqueLinkMap.set(key, { href, file: relFile });
    }
  };

  let match;
  while ((match = linkRegex1.exec(content)) !== null) {
    addLink(match[1]);
  }
  while ((match = linkRegex2.exec(content)) !== null) {
    addLink(match[1]);
  }
  while ((match = linkRegex3.exec(content)) !== null) {
    addLink(match[1]);
  }
}

console.log(`Found ${uniqueLinkMap.size} unique (href, file) occurrences.`);

// Validate each link
for (const linkItem of uniqueLinkMap.values()) {
  const { href, file } = linkItem;
  results.links.tested++;

  // External, tel, mailto
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    results.links.passed++;
    results.links.details.push({ ...linkItem, status: 'PASS', type: 'external/protocol' });
    continue;
  }

  // Separate hash and query
  let urlPart = href;
  let hashPart = null;

  if (urlPart.includes('#')) {
    const splitHash = urlPart.split('#');
    urlPart = splitHash[0];
    hashPart = splitHash[1];
  }

  if (urlPart.includes('?')) {
    const splitQuery = urlPart.split('?');
    urlPart = splitQuery[0];
  }

  const cleanRoute = urlPart === '' ? '/' : urlPart;
  const isValidRoute = expectedRoutes.includes(cleanRoute) || (cleanRoute === '/' && hashPart !== null);

  if (!isValidRoute) {
    results.links.failed++;
    results.links.details.push({ ...linkItem, status: 'FAIL', reason: `Unknown route "${cleanRoute}"` });
    console.log(`  [FAIL] Invalid internal route target: "${href}" in ${file}`);
    continue;
  }

  // Check anchor if present
  if (hashPart) {
    results.anchors.tested++;
    if (definedIds.has(hashPart)) {
      results.anchors.passed++;
      results.anchors.details.push({ href, hashPart, file, status: 'PASS' });
    } else {
      results.anchors.failed++;
      results.anchors.details.push({ href, hashPart, file, status: 'FAIL', reason: `Anchor id="${hashPart}" not found in system` });
      console.log(`  [FAIL] Broken anchor link: "${href}" (id="${hashPart}" missing) in ${file}`);
    }
  }

  results.links.passed++;
  results.links.details.push({ ...linkItem, status: 'PASS', type: 'internal' });
}

// 4. NAVIGATION DATA & HEADER / FOOTER INTEGRITY
console.log('\n--- 4. Checking Navigation Data & Footer Links ---');
const navDataPath = path.join(srcDir, 'data', 'navigation.ts');
if (fs.existsSync(navDataPath)) {
  const navContent = fs.readFileSync(navDataPath, 'utf8');
  for (const route of expectedRoutes) {
    if (route === '/') continue;
    if (navContent.includes(`href: "${route}"`) || navContent.includes(`href: '${route}'`)) {
      console.log(`  [PASS] Nav data includes ${route}`);
    } else {
      console.log(`  [WARN] Nav data might be missing direct reference to ${route}`);
    }
  }
}

// 5. SUMMARY
console.log('\n====================================================');
console.log('  AUDIT SUMMARY');
console.log('====================================================');
console.log(`Routes:     ${results.routes.passed}/${results.routes.tested} passed`);
console.log(`Redirects:  ${results.redirects.passed}/${results.redirects.tested} passed`);
console.log(`Links:      ${results.links.passed}/${results.links.tested} passed`);
console.log(`Anchors:    ${results.anchors.passed}/${results.anchors.tested} passed`);
console.log('====================================================\n');

if (results.routes.failed > 0 || results.redirects.failed > 0 || results.links.failed > 0 || results.anchors.failed > 0) {
  console.log('VERDICT: CHALLENGE_DETECTED');
} else {
  console.log('VERDICT: APPROVE');
}
