// Empirical Challenger Test Harness for Hard Call Sales (HCS)
// Adversarial edge-case generator & verification suite

import assert from "node:assert/strict";

console.log("===============================================================================");
console.log("STARTING EMPIRICAL CHALLENGER VERIFICATION SUITE");
console.log("===============================================================================\n");

let passedTests = 0;
let failedTests = 0;
const findings = [];

function test(name, fn) {
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  [FAIL] ${name}`);
    console.error(`         Error: ${err.message}`);
    failedTests++;
    findings.push({ test: name, error: err.message, stack: err.stack });
  }
}

// ============================================================================
// SUITE 1: BookingForm Validation & State Logic
// ============================================================================
console.log("--- SUITE 1: BookingForm Logic & Validation Tests ---");

const INTEREST_OPTIONS = [
  { id: "motesbokning", label: "Mötesbokning B2B" },
  { id: "fullstack", label: "Fullstack Säljteam" },
  { id: "linkedclient", label: "LinkedClient AI-Agent" },
  { id: "pilotstart", label: "Pilotstart (3 mån)" },
  { id: "ovrigt", label: "Övrigt / Rådgivning" },
];

function validateBookingForm(data) {
  const errs = {};

  if (!data.fullName.trim()) {
    errs.fullName = "Vänligen ange ditt för- och efternamn.";
  } else if (data.fullName.trim().length < 2) {
    errs.fullName = "Namnet är för kort.";
  }

  if (!data.company.trim()) {
    errs.company = "Vänligen ange ditt företagsnamn.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errs.email = "Vänligen ange din e-postadress.";
  } else if (!emailRegex.test(data.email.trim())) {
    errs.email = "Ange en giltig e-postadress (gärna arbetsmejl).";
  }

  const phoneRegex = /^[+0-9\s-()]{6,20}$/;
  if (!data.phone.trim()) {
    errs.phone = "Vänligen ange ditt telefonnummer.";
  } else if (!phoneRegex.test(data.phone.trim().replace(/\s/g, ""))) {
    errs.phone = "Ange ett giltigt telefonnummer.";
  }

  if (!data.interest) {
    errs.interest = "Välj ett primärt intresseområde.";
  }

  return errs;
}

test("BookingForm: Valid complete submission passes with zero errors", () => {
  const validData = {
    fullName: "Fabian Sjöberg",
    company: "Zaitex AB",
    email: "fabian@zaitex.se",
    phone: "+46 70 850 63 04",
    interest: "linkedclient",
    industry: "SaaS & Molntjänster",
    meetingVolume: "25–50 möten per månad",
    revenueBracket: "10 – 50 MSEK",
    message: "Vi vill automatisera mötesbokningen.",
  };
  const errors = validateBookingForm(validData);
  assert.equal(Object.keys(errors).length, 0);
});

test("BookingForm: Empty fields trigger appropriate validation errors", () => {
  const emptyData = {
    fullName: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
  };
  const errors = validateBookingForm(emptyData);
  assert.ok(errors.fullName, "fullName error should exist");
  assert.ok(errors.company, "company error should exist");
  assert.ok(errors.email, "email error should exist");
  assert.ok(errors.phone, "phone error should exist");
  assert.ok(errors.interest, "interest error should exist");
});

test("BookingForm: Adversarial email inputs", () => {
  const invalidEmails = [
    "plainaddress",
    "#@%^%#$@#$@#.com",
    "@example.com",
    "Joe Smith <email@example.com>",
    "email.example.com",
    "email@example@example.com",
    "email@example",
    "email@111.222.333.44444",
  ];
  for (const email of invalidEmails) {
    const errs = validateBookingForm({
      fullName: "Test User",
      company: "Test AB",
      email,
      phone: "+46701234567",
      interest: "motesbokning",
    });
    assert.ok(errs.email, `Email '${email}' should fail validation`);
  }

  const validEmails = [
    "email@example.com",
    "firstname.lastname@example.com",
    "email@subdomain.example.com",
    "firstname+lastname@example.com",
    "1234567890@example.com",
    "email@example.co.uk",
    "  spaced@example.com  ", // will be trimmed
  ];
  for (const email of validEmails) {
    const errs = validateBookingForm({
      fullName: "Test User",
      company: "Test AB",
      email,
      phone: "+46701234567",
      interest: "motesbokning",
    });
    assert.equal(errs.email, undefined, `Email '${email}' should be valid`);
  }
});

test("BookingForm: Adversarial phone inputs", () => {
  const invalidPhones = [
    "123", // too short (<6)
    "abc-def-ghij", // alphabetic
    "++46++70", // non-standard chars
    "+46 70 123 45 67 89 01 23 45 67", // > 20 chars after whitespace removal
  ];
  for (const phone of invalidPhones) {
    const errs = validateBookingForm({
      fullName: "Test User",
      company: "Test AB",
      email: "test@example.com",
      phone,
      interest: "motesbokning",
    });
    assert.ok(errs.phone, `Phone '${phone}' should fail validation`);
  }

  const validPhones = [
    "0701234567",
    "+46708506304",
    "+46 (0) 70 850 63 04",
    "08-123 456 78",
    "+1-555-123-4567",
  ];
  for (const phone of validPhones) {
    const errs = validateBookingForm({
      fullName: "Test User",
      company: "Test AB",
      email: "test@example.com",
      phone,
      interest: "motesbokning",
    });
    assert.equal(errs.phone, undefined, `Phone '${phone}' should be valid`);
  }
});

test("BookingForm: Prop initialService matching logic", () => {
  const matchService = (initialService) => {
    return INTEREST_OPTIONS.find(
      (opt) =>
        opt.id.toLowerCase() === initialService.toLowerCase() ||
        opt.label.toLowerCase().includes(initialService.toLowerCase())
    );
  };

  assert.equal(matchService("linkedclient")?.id, "linkedclient");
  assert.equal(matchService("LINKEDCLIENT")?.id, "linkedclient");
  assert.equal(matchService("Mötesbokning")?.id, "motesbokning");
  assert.equal(matchService("pilotstart")?.id, "pilotstart");
  assert.equal(matchService("fullstack")?.id, "fullstack");
  assert.equal(matchService("unknown-service"), undefined);
});

test("BookingForm: First name extraction with leading spaces (Adversarial check)", () => {
  // If user inputs "  Fabian Sjöberg", fullName.split(" ")[0] returns ""
  const rawFullName = "  Fabian Sjöberg";
  const naiveFirstName = rawFullName.split(" ")[0];
  const robustFirstName = rawFullName.trim().split(/\s+/)[0];

  assert.equal(naiveFirstName, "", "Naive split produces empty string on leading whitespace");
  assert.equal(robustFirstName, "Fabian", "Robust trim + split produces correct first name");
});

// ============================================================================
// SUITE 2: ApplicationForm Validation & Edge Cases
// ============================================================================
console.log("\n--- SUITE 2: ApplicationForm Validation & Edge Cases ---");

function validateApplicationForm(data) {
  const errs = {};

  if (!data.fullName.trim()) {
    errs.fullName = "Vänligen ange ditt fullständiga namn.";
  } else if (data.fullName.trim().length < 2) {
    errs.fullName = "Namnet är för kort.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errs.email = "Vänligen ange din e-postadress.";
  } else if (!emailRegex.test(data.email.trim())) {
    errs.email = "Ange en giltig e-postadress (t.ex. namn@foretag.se).";
  }

  const phoneRegex = /^[+0-9\s-()]{6,20}$/;
  if (!data.phone.trim()) {
    errs.phone = "Vänligen ange ditt telefonnummer.";
  } else if (!phoneRegex.test(data.phone.trim().replace(/\s/g, ""))) {
    errs.phone = "Ange ett giltigt telefonnummer (minst 6 siffror).";
  }

  if (!data.role) {
    errs.role = "Välj vilken roll du söker.";
  }

  if (!data.location) {
    errs.location = "Välj önskad placeringsort.";
  }

  if (!data.message.trim()) {
    errs.message = "Berätta kort om din säljerfarenhet eller varför du vill jobba på HCS.";
  } else if (data.message.trim().length < 15) {
    errs.message = "Vänligen skriv lite mer (minst 15 tecken).";
  }

  return errs;
}

test("ApplicationForm: Valid complete application passes with zero errors", () => {
  const validApp = {
    fullName: "Erik Lindqvist",
    email: "erik@example.com",
    phone: "+46 73 999 88 77",
    role: "Senior B2B Mötesbokare / SDR (Stockholm / Malta)",
    location: "Sliema, Malta (Medelhavet)",
    linkedin: "https://linkedin.com/in/eriklindqvist",
    message: "Jag har 5 års erfarenhet av cold calling och B2B-prospektering.",
  };
  const errors = validateApplicationForm(validApp);
  assert.equal(Object.keys(errors).length, 0);
});

test("ApplicationForm: Short message boundary (<15 vs >=15)", () => {
  const base = {
    fullName: "Erik Lindqvist",
    email: "erik@example.com",
    phone: "+46 73 999 88 77",
    role: "Senior B2B Mötesbokare",
    location: "Stockholm, Sverige",
  };

  // 14 characters
  const err14 = validateApplicationForm({ ...base, message: "12345678901234" });
  assert.ok(err14.message, "14 chars should fail min 15 chars validation");

  // 15 characters
  const err15 = validateApplicationForm({ ...base, message: "123456789012345" });
  assert.equal(err15.message, undefined, "15 chars should pass validation");

  // 15 spaces (whitespace only)
  const errSpaces = validateApplicationForm({ ...base, message: "               " });
  assert.ok(errSpaces.message, "15 spaces should fail validation (trimmed length is 0)");
});

test("ApplicationForm: File upload size limit logic (10MB)", () => {
  const checkFileSize = (sizeBytes) => {
    if (sizeBytes > 10 * 1024 * 1024) {
      return "Filen får max vara 10 MB stor.";
    }
    return null;
  };

  assert.equal(checkFileSize(10 * 1024 * 1024), null, "10 MB exact is allowed");
  assert.equal(checkFileSize(10 * 1024 * 1024 - 1), null, "10 MB - 1 byte is allowed");
  assert.ok(checkFileSize(10 * 1024 * 1024 + 1), "10 MB + 1 byte triggers error");
  assert.ok(checkFileSize(25 * 1024 * 1024), "25 MB triggers error");
});

// ============================================================================
// SUITE 3: RoiCalculator Mathematical Stability & Edge Cases
// ============================================================================
console.log("\n--- SUITE 3: RoiCalculator Math & Edge Cases ---");

function calculateRoi({ teamSize, currentMeetings, dealSize, closeRate }) {
  const additionalMeetingsPerMonth = Math.max(15, Math.round(teamSize * 12));
  const newTotalMeetings = teamSize * currentMeetings + additionalMeetingsPerMonth;
  const newMonthlyPipeline = additionalMeetingsPerMonth * dealSize;
  const estimatedNewDealsPerMonth = additionalMeetingsPerMonth * (closeRate / 100);
  const estimatedAnnualNewRevenue = estimatedNewDealsPerMonth * dealSize * 12;
  const savedSdrHoursPerMonth = teamSize * 35;

  const estimatedMonthlyCost = 25000 + teamSize * 5000;
  const monthlyGrossReturn = estimatedNewDealsPerMonth * dealSize;
  const roiMultiple = (monthlyGrossReturn / estimatedMonthlyCost).toFixed(1);

  const percentageIncrease = (teamSize * currentMeetings > 0)
    ? Math.round((additionalMeetingsPerMonth / (teamSize * currentMeetings)) * 100)
    : 0;

  return {
    additionalMeetingsPerMonth,
    newTotalMeetings,
    newMonthlyPipeline,
    estimatedNewDealsPerMonth,
    estimatedAnnualNewRevenue,
    savedSdrHoursPerMonth,
    estimatedMonthlyCost,
    monthlyGrossReturn,
    roiMultiple,
    percentageIncrease,
  };
}

test("RoiCalculator: Default values produce expected output", () => {
  const result = calculateRoi({
    teamSize: 3,
    currentMeetings: 8,
    dealSize: 150000,
    closeRate: 20,
  });

  assert.equal(result.additionalMeetingsPerMonth, 36);
  assert.equal(result.newTotalMeetings, 24 + 36); // 60
  assert.equal(result.newMonthlyPipeline, 36 * 150000); // 5 400 000
  assert.equal(result.estimatedNewDealsPerMonth, 7.2);
  assert.equal(result.estimatedAnnualNewRevenue, 7.2 * 150000 * 12); // 12 960 000
  assert.equal(result.savedSdrHoursPerMonth, 105);
  assert.equal(result.estimatedMonthlyCost, 40000);
  assert.equal(result.monthlyGrossReturn, 1080000);
  assert.equal(result.roiMultiple, "27.0");
  assert.equal(result.percentageIncrease, 150);
});

test("RoiCalculator: Boundary inputs across full slider ranges", () => {
  // Slider limits: teamSize [1..15], currentMeetings [2..20], dealSize [30000..800000], closeRate [10..40]
  const minResult = calculateRoi({
    teamSize: 1,
    currentMeetings: 2,
    dealSize: 30000,
    closeRate: 10,
  });
  assert.ok(!Number.isNaN(minResult.additionalMeetingsPerMonth));
  assert.ok(!Number.isNaN(Number(minResult.roiMultiple)));
  assert.ok(minResult.percentageIncrease > 0);
  assert.equal(minResult.additionalMeetingsPerMonth, 15, "Math.max(15, 12) gives min 15 meetings");

  const maxResult = calculateRoi({
    teamSize: 15,
    currentMeetings: 20,
    dealSize: 800000,
    closeRate: 40,
  });
  assert.ok(!Number.isNaN(maxResult.additionalMeetingsPerMonth));
  assert.ok(!Number.isNaN(Number(maxResult.roiMultiple)));
  assert.ok(maxResult.percentageIncrease > 0);
  assert.equal(maxResult.additionalMeetingsPerMonth, 180); // 15 * 12
});

test("RoiCalculator: Stress-test against non-finite or 0 values", () => {
  // If teamSize = 0 (adversarial query param / edge case)
  const zeroTeamResult = calculateRoi({
    teamSize: 0,
    currentMeetings: 0,
    dealSize: 0,
    closeRate: 0,
  });
  assert.ok(!Number.isNaN(zeroTeamResult.additionalMeetingsPerMonth));
  assert.equal(zeroTeamResult.additionalMeetingsPerMonth, 15);
  assert.equal(zeroTeamResult.estimatedMonthlyCost, 25000);
  assert.equal(zeroTeamResult.roiMultiple, "0.0");
  assert.equal(zeroTeamResult.percentageIncrease, 0); // guarded against Infinity
});

test("RoiCalculator: Currency formatter sv-SE stability", () => {
  const formatSEK = (val) => {
    return new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatted = formatSEK(150000);
  assert.ok(formatted.includes("150") && (formatted.includes("kr") || formatted.includes("SEK")), `Formatted currency '${formatted}'`);
  assert.ok(!formatted.includes("NaN"));
});

// ============================================================================
// SUITE 4: AiOutreachSimulator & LinkedClientShowcase State Machines
// ============================================================================
console.log("\n--- SUITE 4: Simulator & Showcase State Machine Integrity ---");

test("AiOutreachSimulator: Stepper boundary safety", () => {
  let activeStepIdx = 0;
  const stepsCount = 4;

  const handlePrevStep = () => {
    if (activeStepIdx > 0) activeStepIdx--;
  };
  const handleNextStep = () => {
    if (activeStepIdx < stepsCount - 1) activeStepIdx++;
  };

  // At 0, prev does not underflow
  handlePrevStep();
  assert.equal(activeStepIdx, 0, "Prev at 0 stays at 0");

  // Step to max
  handleNextStep(); // 1
  handleNextStep(); // 2
  handleNextStep(); // 3
  assert.equal(activeStepIdx, 3, "Stepped to 3");

  // At 3, next does not overflow
  handleNextStep();
  assert.equal(activeStepIdx, 3, "Next at max stays at 3");
});

test("LinkedClientShowcase: Scenario index mapping", () => {
  const CHAT_SCENARIOS = [
    { id: "saas", label: "SaaS Tillväxt" },
    { id: "enterprise", label: "Enterprise IT" },
    { id: "scaleup", label: "B2B Tech Scaleup" },
  ];

  for (let idx = 0; idx < CHAT_SCENARIOS.length; idx++) {
    const sc = CHAT_SCENARIOS[idx];
    assert.ok(sc.id);
    assert.ok(sc.label);
  }
});

// ============================================================================
// SUITE 5: Navigation, Data & Layout Integrity
// ============================================================================
console.log("\n--- SUITE 5: Navigation & Route Contract Integrity ---");

const VALID_ROUTES = [
  "/",
  "/tjanster",
  "/linkedclient",
  "/kunder",
  "/om",
  "/jobba-hos-oss",
  "/boka-mote",
];

const MAIN_NAV_ITEMS = [
  { label: "Tjänster", href: "/tjanster" },
  { label: "LinkedClient", href: "/linkedclient", badge: "AI" },
  { label: "Kunder", href: "/kunder" },
  { label: "Om oss", href: "/om" },
  { label: "Karriär", href: "/jobba-hos-oss" },
];

test("Navigation: All main nav hrefs exist in valid routes", () => {
  for (const item of MAIN_NAV_ITEMS) {
    assert.ok(VALID_ROUTES.includes(item.href), `Route '${item.href}' must be in VALID_ROUTES`);
  }
});

test("Navigation: Active route matcher behaves correctly", () => {
  const isMatch = (pathname, href) => pathname === href;
  assert.equal(isMatch("/", "/"), true);
  assert.equal(isMatch("/tjanster", "/tjanster"), true);
  assert.equal(isMatch("/tjanster", "/"), false);
  assert.equal(isMatch("/kunder", "/om"), false);
});

// ============================================================================
// SUITE 6: Accordions & Filter Datasets
// ============================================================================
console.log("\n--- SUITE 6: Accordions & Filter Safety ---");

test("FaqAccordion: Toggle logic (toggle same closes, toggle other opens)", () => {
  let openIndex = 0;
  const toggle = (idx) => {
    openIndex = (openIndex === idx ? null : idx);
  };

  toggle(0);
  assert.equal(openIndex, null, "Toggling open accordion closes it");
  toggle(2);
  assert.equal(openIndex, 2, "Toggling closed index opens it");
  toggle(2);
  assert.equal(openIndex, null, "Toggling again closes it");
});

test("CaseStudiesFilter: Count calculations match filtered array lengths", () => {
  const mockStudies = [
    { id: "1", category: "Enterprise" },
    { id: "2", category: "Enterprise" },
    { id: "3", category: "SaaS" },
    { id: "4", category: "Consulting" },
  ];

  const catAll = mockStudies.length;
  const catEnterprise = mockStudies.filter(c => c.category === "Enterprise").length;
  const catSaaS = mockStudies.filter(c => c.category === "SaaS").length;
  const catConsulting = mockStudies.filter(c => c.category === "Consulting").length;

  assert.equal(catAll, 4);
  assert.equal(catEnterprise, 2);
  assert.equal(catSaaS, 1);
  assert.equal(catConsulting, 1);
});

console.log("\n===============================================================================");
console.log(`VERIFICATION COMPLETE: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log("===============================================================================\n");
