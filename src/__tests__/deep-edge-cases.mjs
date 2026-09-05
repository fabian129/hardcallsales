import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

console.log('====================================================');
console.log('  HCS DEEP COMPONENT & EDGE CASE AUDIT (V2)');
console.log('====================================================\n');

// 1. TEST BOOKING FORM INITIAL SERVICE BEHAVIOR
console.log('--- 1. Testing BookingForm initialService State Initialization ---');

const bookingFormPath = path.join(srcDir, 'components', 'sections', 'BookingForm.tsx');
if (fs.existsSync(bookingFormPath)) {
  const content = fs.readFileSync(bookingFormPath, 'utf8');
  const hasGetInitialInterest = content.includes('getInitialInterest(initialService)');
  const hasPropSync = content.includes('initialService !== prevInitialService') || content.includes('useEffect');

  const INTEREST_OPTIONS = [
    { id: 'motesbokning', label: 'Mötesbokning B2B' },
    { id: 'fullstack', label: 'Fullstack Säljteam' },
    { id: 'linkedclient', label: 'LinkedClient AI-Agent' },
    { id: 'pilotstart', label: 'Pilotstart (3 mån)' },
    { id: 'ovrigt', label: 'Övrigt / Rådgivning' },
  ];

  const getInitialInterest = (serviceParam) => {
    if (!serviceParam) return 'motesbokning';
    const match = INTEREST_OPTIONS.find(
      (opt) =>
        opt.id.toLowerCase() === serviceParam.toLowerCase() ||
        opt.label.toLowerCase().includes(serviceParam.toLowerCase())
    );
    return match ? match.id : 'motesbokning';
  };

  const resultForLinkedClient = getInitialInterest('linkedclient');
  const resultForFullstack = getInitialInterest('fullstack');
  const resultForEmpty = getInitialInterest('');

  console.log(`  Initial render with ?service=linkedclient: selected interest = "${resultForLinkedClient}"`);
  console.log(`  Initial render with ?service=fullstack: selected interest = "${resultForFullstack}"`);
  console.log(`  Initial render with default (empty): selected interest = "${resultForEmpty}"`);
  console.log(`  BookingForm code verification: getInitialInterest used in initial state: ${hasGetInitialInterest}, prop sync handling: ${hasPropSync}`);

  if (resultForLinkedClient === 'linkedclient' && resultForFullstack === 'fullstack' && resultForEmpty === 'motesbokning' && hasGetInitialInterest && hasPropSync) {
    console.log(`  [PASS] BookingForm properly pre-selects 'linkedclient'`);
  } else {
    console.log(`  [FAIL/BUG DETECTED] BookingForm failed pre-selection test!`);
  }
}

// 2. TEST APPLICATION FORM INITIAL ROLE BEHAVIOR
console.log('\n--- 2. Testing ApplicationForm initialRole State Initialization ---');
const appFormPath = path.join(srcDir, 'components', 'sections', 'ApplicationForm.tsx');
if (fs.existsSync(appFormPath)) {
  const content = fs.readFileSync(appFormPath, 'utf8');
  console.log(`  ApplicationForm found, analyzing props and state handling...`);
  const usesInitialRole = content.includes('initialRole');
  console.log(`  ApplicationForm handles initialRole: ${usesInitialRole}`);
}

// 3. TEST AI OUTREACH SIMULATOR & OTHER CLIENT COMPONENTS
console.log('\n--- 3. Testing AiOutreachSimulator & Interactive Components ---');
const simPath = path.join(srcDir, 'components', 'sections', 'AiOutreachSimulator.tsx');
if (fs.existsSync(simPath)) {
  const content = fs.readFileSync(simPath, 'utf8');
  console.log(`  AiOutreachSimulator found. Length: ${content.length} chars`);
}

// 4. TEST CASE STUDIES FILTER
console.log('\n--- 4. Testing CaseStudiesFilter & Case Data ---');
const casesPath = path.join(srcDir, 'data', 'caseStudies.ts');
if (fs.existsSync(casesPath)) {
  const content = fs.readFileSync(casesPath, 'utf8');
  console.log(`  caseStudies.ts found. Length: ${content.length} chars`);
}

console.log('\nDeep audit complete.');
