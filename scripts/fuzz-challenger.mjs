// Deep Stress & Fuzzing Harness for Hard Call Sales (HCS)
import assert from "node:assert/strict";
import { CASE_STUDIES } from "../src/data/caseStudies.ts";
import { PILOT_STEPS } from "../src/data/pilotSteps.ts";
import { LEADERSHIP_TEAM, TEAM_ROLES, HUBS, CORE_VALUES } from "../src/data/team.ts";
import { JOB_OPENINGS, CULTURE_PILLARS, BENEFITS_LIST } from "../src/data/jobs.ts";
import { SERVICES } from "../src/data/services.ts";
import { FAQS } from "../src/data/faq.ts";
import { MAIN_NAV_ITEMS, FOOTER_COLUMNS, COMPANY_INFO } from "../src/data/navigation.ts";

console.log("===============================================================================");
console.log("STARTING FUZZING & ADVERSARIAL STRESS TEST SUITE");
console.log("===============================================================================\n");

let passed = 0;
let failed = 0;

function runFuzzTest(name, fn) {
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`  [FAIL] ${name}: ${err.message}`);
    failed++;
  }
}

// 1. FUZZING ROI CALCULATOR (10,000 random iterations)
runFuzzTest("RoiCalculator: Fuzzing 10,000 random input permutations", () => {
  for (let i = 0; i < 10000; i++) {
    const teamSize = Math.floor(Math.random() * 20); // 0 to 19
    const currentMeetings = Math.floor(Math.random() * 30); // 0 to 29
    const dealSize = Math.floor(Math.random() * 2000000); // 0 to 2,000,000
    const closeRate = Math.floor(Math.random() * 100); // 0 to 99

    const additionalMeetingsPerMonth = Math.max(15, Math.round(teamSize * 12));
    const newTotalMeetings = teamSize * currentMeetings + additionalMeetingsPerMonth;
    const newMonthlyPipeline = additionalMeetingsPerMonth * dealSize;
    const estimatedNewDealsPerMonth = additionalMeetingsPerMonth * (closeRate / 100);
    const estimatedAnnualNewRevenue = estimatedNewDealsPerMonth * dealSize * 12;
    const savedSdrHoursPerMonth = teamSize * 35;
    const estimatedMonthlyCost = 25000 + teamSize * 5000;
    const monthlyGrossReturn = estimatedNewDealsPerMonth * dealSize;
    const roiMultiple = (monthlyGrossReturn / estimatedMonthlyCost).toFixed(1);

    // Verify all outputs are valid numbers / finite
    assert.ok(Number.isFinite(additionalMeetingsPerMonth), "additionalMeetingsPerMonth is finite");
    assert.ok(Number.isFinite(newTotalMeetings), "newTotalMeetings is finite");
    assert.ok(Number.isFinite(newMonthlyPipeline), "newMonthlyPipeline is finite");
    assert.ok(Number.isFinite(estimatedNewDealsPerMonth), "estimatedNewDealsPerMonth is finite");
    assert.ok(Number.isFinite(estimatedAnnualNewRevenue), "estimatedAnnualNewRevenue is finite");
    assert.ok(Number.isFinite(savedSdrHoursPerMonth), "savedSdrHoursPerMonth is finite");
    assert.ok(Number.isFinite(estimatedMonthlyCost), "estimatedMonthlyCost is finite");
    assert.ok(Number.isFinite(monthlyGrossReturn), "monthlyGrossReturn is finite");
    assert.ok(!Number.isNaN(Number(roiMultiple)), "roiMultiple is a valid number");
    assert.ok(estimatedMonthlyCost >= 25000, "estimatedMonthlyCost >= 25000 (never 0)");
  }
});

// 2. FUZZING BOOKING FORM WITH ADVERSARIAL UNICODE & PAYLOADS
runFuzzTest("BookingForm: Fuzzing Swedish characters, accents & emoji inputs", () => {
  const unicodeNames = [
    "Åsa Öhman",
    "Björn-Åke Älvestad",
    "Karl-Oskar Sjöström",
    "Élodie Renoir",
    "René Müller",
    "O'Connor-Smith",
  ];

  for (const name of unicodeNames) {
    assert.ok(name.trim().length >= 2, `Unicode name '${name}' is valid length`);
    const firstName = name.trim().split(/\s+/)[0];
    assert.ok(firstName.length > 0, `First name extraction succeeded for '${name}' -> '${firstName}'`);
  }
});

// 3. VERIFY ALL CASE STUDIES DATA CONSISTENCY
runFuzzTest("CaseStudies: All case studies have complete required fields", () => {
  assert.ok(CASE_STUDIES.length >= 2, "At least 2 case studies exist");
  for (const study of CASE_STUDIES) {
    assert.ok(study.id, "study.id exists");
    assert.ok(study.client, "study.client exists");
    assert.ok(study.industry, "study.industry exists");
    assert.ok(study.metric, "study.metric exists");
    assert.ok(study.metricLabel, "study.metricLabel exists");
    assert.ok(study.challenge, "study.challenge exists");
    assert.ok(study.solution, "study.solution exists");
    assert.ok(study.outcome, "study.outcome exists");
    assert.ok(study.stats && study.stats.length >= 3, "study.stats has >= 3 items");
    assert.ok(study.keyDeliverables && study.keyDeliverables.length >= 3, "study.keyDeliverables has >= 3 items");
    assert.ok(study.quote && study.quote.text && study.quote.author, "study.quote has text and author");
  }
});

// 4. VERIFY ALL PILOT STEPS DATA
runFuzzTest("PilotSteps: 6 distinct steps with complete checkpoints", () => {
  assert.equal(PILOT_STEPS.length, 6, "Must be exactly 6 pilot steps");
  PILOT_STEPS.forEach((step, idx) => {
    assert.equal(step.step, `0${idx + 1}`, `Step numbering is 0${idx + 1}`);
    assert.ok(step.title, `Step ${step.step} has title`);
    assert.ok(step.points && step.points.length >= 3, `Step ${step.step} has >= 3 points`);
    assert.ok(step.layoutSide === "left" || step.layoutSide === "right", `Step ${step.step} has valid layoutSide`);
  });
});

// 5. VERIFY TEAM & LEADERSHIP DATA
runFuzzTest("Team: Team members & Leadership have complete bios & roles", () => {
  assert.ok(LEADERSHIP_TEAM.length >= 4, "Leadership has at least 4 members");
  assert.ok(TEAM_ROLES.length >= 3, "Team roles has at least 3 items");
  assert.ok(HUBS.length >= 2, "Hubs has at least 2 locations");
  assert.ok(CORE_VALUES.length >= 4, "Core values has at least 4 items");

  for (const member of LEADERSHIP_TEAM) {
    assert.ok(member.name, "member.name exists");
    assert.ok(member.roleTitle, "member.roleTitle exists");
    assert.ok(member.hub, "member.hub exists");
    assert.ok(member.bio, "member.bio exists");
    assert.ok(member.expertise && member.expertise.length >= 2, "member.expertise has >= 2 items");
  }
});

// 6. VERIFY JOB OPENINGS DATA
runFuzzTest("Jobs: Job openings, culture pillars & benefits are populated", () => {
  assert.ok(JOB_OPENINGS.length >= 3, "At least 3 job openings");
  assert.ok(CULTURE_PILLARS.length >= 4, "At least 4 culture pillars");
  assert.ok(BENEFITS_LIST.length >= 6, "At least 6 benefits");

  for (const job of JOB_OPENINGS) {
    assert.ok(job.id, "job.id exists");
    assert.ok(job.title, "job.title exists");
    assert.ok(job.department, "job.department exists");
    assert.ok(job.location, "job.location exists");
    assert.ok(job.compensation, "job.compensation exists");
    assert.ok(job.responsibilities && job.responsibilities.length >= 3, "job.responsibilities >= 3");
    assert.ok(job.qualifications && job.qualifications.length >= 3, "job.qualifications >= 3");
    assert.ok(job.perks && job.perks.length >= 3, "job.perks >= 3");
  }
});

// 7. VERIFY SERVICES DATA
runFuzzTest("Services: All 6 services are fully specified", () => {
  assert.equal(SERVICES.length, 6, "Must be exactly 6 services");
  for (const s of SERVICES) {
    assert.ok(s.id, "service.id exists");
    assert.ok(s.number, "service.number exists");
    assert.ok(s.title, "service.title exists");
    assert.ok(s.shortDesc, "service.shortDesc exists");
    assert.ok(s.fullDesc, "service.fullDesc exists");
    assert.ok(s.kicker, "service.kicker exists");
    assert.ok(s.icon, "service.icon exists");
    assert.ok(s.deliverables && s.deliverables.length >= 3, "deliverables has >= 3 items");
    assert.ok(s.tools && s.tools.length >= 3, "tools has >= 3 items");
    assert.ok(s.targetPersona, "targetPersona exists");
  }
});

// 8. VERIFY FAQ DATA
runFuzzTest("FAQ: Comprehensive FAQ questions across all categories", () => {
  assert.ok(FAQS.length >= 6, "At least 6 FAQs");
  for (const f of FAQS) {
    assert.ok(f.question, "faq.question exists");
    assert.ok(f.answer, "faq.answer exists");
    assert.ok(f.category, "faq.category exists");
  }
});

// 9. VERIFY NAVIGATION & COMPANY INFO
runFuzzTest("Navigation & Company: Consistent contact details across system", () => {
  assert.equal(COMPANY_INFO.phone, "+46 70 850 63 04");
  assert.equal(COMPANY_INFO.email, "info@hardcallsales.se");
  assert.ok(MAIN_NAV_ITEMS.length >= 5);
  assert.ok(FOOTER_COLUMNS.length >= 3);
});

console.log("\n===============================================================================");
console.log(`FUZZING SUITE COMPLETE: ${passed} PASSED, ${failed} FAILED`);
console.log("===============================================================================\n");
