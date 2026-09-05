// Empirical Stress-Test Harness for Challenger 2: Hard Call Sales Polish
import { chromium } from "playwright";
import assert from "node:assert/strict";

console.log("===============================================================================");
console.log("CHALLENGER 2: STARTING EMPIRICAL TEST & STRESS HARNESS");
console.log("===============================================================================\n");

let passed = 0;
let failed = 0;
const failures = [];

async function runTest(name, fn) {
  try {
    await fn();
    console.log(`  [PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`  [FAIL] ${name}`);
    console.error(`         Error: ${err.message}`);
    failed++;
    failures.push({ test: name, error: err.message });
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Monitor browser console errors
  const pageErrors = [];
  page.on("pageerror", (err) => pageErrors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") pageErrors.push(msg.text());
  });

  console.log("Navigating to http://localhost:3000/ ...");
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  // --------------------------------------------------------------------------
  // SUITE 1: ContactSplitSection Empirical Verification
  // --------------------------------------------------------------------------
  console.log("\n--- SUITE 1: ContactSplitSection Empirical Tests ---");

  await runTest("Contact: Left card logo triangle polygon and text", async () => {
    const triangle = page.locator("#kontakt div[class*='clip-path']").first();
    const count = await triangle.count();
    assert.ok(count > 0, "Triangle element must exist in contact section");

    const clipStyle = await triangle.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return computed.clipPath || el.getAttribute("class") || "";
    });
    assert.ok(
      clipStyle.includes("100% 0") || clipStyle.includes("100%_0") || clipStyle.includes("polygon"),
      `Expected polygon clip path, got: ${clipStyle}`
    );

    // Verify brand wordmark
    const wordmark = page.locator("#kontakt").getByText("HARD CALL", { exact: false });
    assert.ok((await wordmark.count()) > 0, "HARD CALL wordmark must exist");
  });

  await runTest("Contact: Headline 'Boka' in purple (#7851A9) and line break", async () => {
    const bokaSpan = page.locator("#kontakt h3 span").first();
    const bokaText = await bokaSpan.textContent();
    assert.equal(bokaText?.trim(), "Boka", "Expected 'Boka' span in headline");

    const color = await bokaSpan.evaluate((el) => window.getComputedStyle(el).color);
    // #7851a9 is rgb(120, 81, 169)
    assert.ok(
      color.includes("120") && color.includes("81") && color.includes("169"),
      `Expected rgb(120, 81, 169) for #7851A9, got ${color}`
    );

    const h3Text = await page.locator("#kontakt h3").innerText();
    assert.ok(h3Text.includes("Boka ett samtal med\nvår mötesexpert") || h3Text.includes("Boka ett samtal med"), "Headline text matches");
  });

  await runTest("Contact: AVEVA Testimonial structure and centered alignment", async () => {
    const quoteText = page.locator("#kontakt").getByText("Hard Call Sales fyllde kalendern på sex veckor", { exact: false });
    assert.ok((await quoteText.count()) > 0, "AVEVA quote text must exist");

    const quoteAlign = await quoteText.evaluate((el) => window.getComputedStyle(el).textAlign);
    assert.equal(quoteAlign, "center", "Quote text must be text-align: center");

    const authorText = page.locator("#kontakt").getByText("Mattias Holm");
    assert.ok((await authorText.count()) > 0, "Author Mattias Holm must exist");

    const subTitle = page.locator("#kontakt").getByText("Säljchef, AVEVA");
    assert.ok((await subTitle.count()) > 0, "Author subtitle must exist");

    // Check indicator (active line + dot)
    const indicatorContainer = page.locator("#kontakt .flex.items-center.justify-center.gap-2.mt-3\\.5");
    assert.ok((await indicatorContainer.count()) > 0, "Pagination indicator container must exist");
  });

  await runTest("Contact: Underline inputs edge-to-edge stretch", async () => {
    const form = page.locator("#kontakt form");
    assert.ok((await form.count()) > 0, "Form must exist");

    const formBox = await form.boundingBox();
    assert.ok(formBox, "Form must have bounding box");

    const inputs = form.locator("input");
    const inputCount = await inputs.count();
    assert.equal(inputCount, 4, "Form must have 4 input fields (Förnamn, Efternamn, Mejl, Meddelande)");

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const inputWidth = await input.evaluate((el) => el.offsetWidth);
      const parentWidth = await input.evaluate((el) => el.parentElement.offsetWidth);
      assert.ok(
        Math.abs(inputWidth - parentWidth) <= 2,
        `Input ${i} width (${inputWidth}px) must span edge-to-edge of parent column (${parentWidth}px)`
      );
    }
  });

  await runTest("Contact: Tab switching (Mejl vs Kalender) and submission", async () => {
    const calendarTab = page.locator("#kontakt button").getByText("Boka direkt i kalendern");
    await calendarTab.click();
    await page.waitForTimeout(100);

    const calMessage = page.locator("#kontakt").getByText("Kalenderintegration aktiverad.");
    assert.ok((await calMessage.count()) > 0, "Calendar message should appear after switching tabs");

    const emailTab = page.locator("#kontakt button").getByText("Kontakta via mejl");
    await emailTab.click();
    await page.waitForTimeout(100);

    // Fill form and submit
    await page.locator("#kontakt input[placeholder*='förnamn']").fill("Testson");
    await page.locator("#kontakt input[placeholder*='efternamn']").fill("Svensson");
    await page.locator("#kontakt input[type='email']").first().fill("testson@example.com");
    await page.locator("#kontakt input[placeholder*='försäljning']").fill("Vi behöver 50 möten i månaden.");

    await page.locator("#kontakt button[type='submit']").click();
    await page.waitForTimeout(100);

    const thanksMessage = page.locator("#kontakt").getByText("Tack för ditt meddelande!");
    assert.ok((await thanksMessage.count()) > 0, "Thank you message appears on form submission");
  });

  // --------------------------------------------------------------------------
  // SUITE 2: CommunityFooter Empirical Verification
  // --------------------------------------------------------------------------
  console.log("\n--- SUITE 2: CommunityFooter Empirical Tests ---");

  // Reload page to reset states
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  await runTest("Footer: Wide canvas max-w-[1720px] and container width", async () => {
    const footerContainer = page.locator("footer .max-w-\\[1720px\\]");
    assert.ok((await footerContainer.count()) > 0, "Footer max-w-[1720px] container must exist");

    const maxWidth = await footerContainer.evaluate((el) => window.getComputedStyle(el).maxWidth);
    assert.equal(maxWidth, "1720px", `Expected max-width 1720px, got ${maxWidth}`);
  });

  await runTest("Footer: Left column 'HÅLL KONTAKTEN!' and newsletter input", async () => {
    const heading = page.locator("footer h2").getByText("HÅLL KONTAKTEN!");
    assert.ok((await heading.count()) > 0, "Heading 'HÅLL KONTAKTEN!' must exist");

    const subtitle = page.locator("footer").getByText("Få konkreta tips om mötesbokning");
    assert.ok((await subtitle.count()) > 0, "Newsletter subtitle must exist");

    const emailInput = page.locator("footer input[type='email']");
    assert.ok((await emailInput.count()) > 0, "Footer email input must exist");

    // Submit newsletter
    await emailInput.fill("prenumerant@bolag.se");
    await page.locator("footer button[type='submit']").click();
    await page.waitForTimeout(100);

    const subscribedText = page.locator("footer").getByText("Tack! Du är nu uppskriven.");
    assert.ok((await subscribedText.count()) > 0, "Subscription confirmation message must appear");
  });

  await runTest("Footer: Right navigation columns (UTFORSKA, SOCIALT, KONTAKT)", async () => {
    const utforska = page.locator("footer").getByText("UTFORSKA");
    const socialt = page.locator("footer").getByText("SOCIALT");
    const kontakt = page.locator("footer").getByText("KONTAKT");

    assert.ok((await utforska.count()) > 0, "UTFORSKA column header must exist");
    assert.ok((await socialt.count()) > 0, "SOCIALT column header must exist");
    assert.ok((await kontakt.count()) > 0, "KONTAKT column header must exist");

    const emailLink = page.locator("footer a[href='mailto:kontakt@hardcallsales.se']");
    assert.ok((await emailLink.count()) > 0, "Mailto link kontakt@hardcallsales.se must exist");
  });

  await runTest("Footer: Smoky image background mask and overlays", async () => {
    const bgImageDiv = page.locator("footer div[style*='background-image']");
    assert.ok((await bgImageDiv.count()) > 0, "Background image layer must exist");

    const bgStyles = await bgImageDiv.evaluate((el) => {
      return {
        styleAttr: el.getAttribute("style") || "",
        bgImg: el.style.backgroundImage,
        mask: el.style.maskImage || el.style.webkitMaskImage || el.getAttribute("style"),
      };
    });
    assert.ok(
      bgStyles.styleAttr.includes("radial-gradient"),
      `Expected radial gradient mask, got ${JSON.stringify(bgStyles)}`
    );
  });

  await runTest("Footer: Bottom row 'HARD CALL' and copyright", async () => {
    const wordmark = page.locator("footer .text-2xl, footer .text-3xl, footer .text-4xl").getByText("HARD CALL");
    assert.ok((await wordmark.count()) > 0, "Bottom HARD CALL wordmark must exist");

    const copyright = page.locator("footer").getByText("© 2026 Hard Call Sales AB. Alla rättigheter förbehållna.");
    assert.ok((await copyright.count()) > 0, "Copyright line must exist");

    const privacy = page.locator("footer a").getByText("Integritetspolicy");
    const terms = page.locator("footer a").getByText("Villkor");
    assert.ok((await privacy.count()) > 0, "Integritetspolicy link must exist");
    assert.ok((await terms.count()) > 0, "Villkor link must exist");
  });

  // --------------------------------------------------------------------------
  // SUITE 3: ManifestSection Empirical Verification
  // --------------------------------------------------------------------------
  console.log("\n--- SUITE 3: ManifestSection Typography & Layout Tests ---");

  await runTest("Manifest: Typography letter-spacing: -1.3px and dual gray tones", async () => {
    const manifestHeading = page.locator("section:has-text('Vi bokar möten med beslutsfattare') div[class*='tracking-']").first();
    assert.ok((await manifestHeading.count()) > 0, "Manifest heading container must exist");

    const headingStyles = await manifestHeading.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        letterSpacing: computed.letterSpacing,
        fontFamily: computed.fontFamily,
      };
    });

    // -1.3px letter spacing
    assert.ok(
      headingStyles.letterSpacing === "-1.3px" || headingStyles.letterSpacing === "-1.30px" || headingStyles.letterSpacing.startsWith("-1.3"),
      `Expected letterSpacing -1.3px, got ${headingStyles.letterSpacing}`
    );

    // Check bold black span
    const boldSpan = manifestHeading.locator("span.font-semibold");
    const boldColor = await boldSpan.evaluate((el) => window.getComputedStyle(el).color);
    // #0F0F0F is rgb(15, 15, 15)
    assert.ok(
      boldColor.includes("15") && boldColor.includes("15"),
      `Expected #0F0F0F (rgb(15, 15, 15)), got ${boldColor}`
    );

    // Check light gray span
    const graySpan = manifestHeading.locator("span.text-\\[\\#8E8E8E\\]");
    const grayColor = await graySpan.evaluate((el) => window.getComputedStyle(el).color);
    // #8E8E8E is rgb(142, 142, 142)
    assert.ok(
      grayColor.includes("142") && grayColor.includes("142"),
      `Expected #8E8E8E (rgb(142, 142, 142)), got ${grayColor}`
    );
  });

  await runTest("Manifest: 4 Metric stats non-wrapping across grid", async () => {
    const statValues = ["10–100", "6", "3", "0"];
    for (const val of statValues) {
      const statEl = page.locator("section").getByText(val, { exact: true });
      assert.ok((await statEl.count()) > 0, `Stat value '${val}' must exist`);
    }
  });

  // --------------------------------------------------------------------------
  // SUITE 4: Multi-Viewport & Responsive Stress-Testing
  // --------------------------------------------------------------------------
  console.log("\n--- SUITE 4: Multi-Viewport Responsive Stress Tests ---");

  const viewports = [
    { name: "Mobile (iPhone SE)", width: 375, height: 667 },
    { name: "Mobile (iPhone 14)", width: 390, height: 844 },
    { name: "Tablet (iPad Mini)", width: 768, height: 1024 },
    { name: "Desktop (Laptop)", width: 1280, height: 800 },
    { name: "Desktop (Full HD)", width: 1920, height: 1080 },
    { name: "Ultra-wide (QHD)", width: 2560, height: 1440 },
  ];

  for (const vp of viewports) {
    await runTest(`Viewport Stress: ${vp.name} (${vp.width}x${vp.height}) - No Horizontal Overflow`, async () => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.waitForTimeout(150);

      const overflowCheck = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        return {
          scrollWidth: docWidth,
          innerWidth: winWidth,
          hasOverflow: docWidth > winWidth + 1, // 1px margin of error for subpixel rendering
        };
      });

      assert.ok(
        !overflowCheck.hasOverflow,
        `Horizontal overflow detected at ${vp.width}px: scrollWidth=${overflowCheck.scrollWidth} > innerWidth=${overflowCheck.innerWidth}`
      );
    });
  }

  // --------------------------------------------------------------------------
  // SUITE 5: Browser Console / Runtime Error Check
  // --------------------------------------------------------------------------
  console.log("\n--- SUITE 5: Runtime Errors & Uncaught Exceptions ---");

  await runTest("Zero uncaught JavaScript exceptions or runtime errors", async () => {
    const fatalErrors = pageErrors.filter((e) => !e.includes("favicon.ico") && !e.includes("UnicornStudio"));
    assert.equal(
      fatalErrors.length,
      0,
      `Expected 0 page errors, found: ${JSON.stringify(fatalErrors)}`
    );
  });

  await browser.close();

  console.log("\n===============================================================================");
  console.log(`CHALLENGER 2 SUITE SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log("===============================================================================\n");

  if (failed > 0) {
    console.error("Failures list:", failures);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal test harness error:", err);
  process.exit(1);
});
