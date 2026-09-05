import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const AUDIT_DIR = path.join(ROOT_DIR, ".visual_audit");
const RENDER_DIR = path.join(AUDIT_DIR, "rendered");

if (!fs.existsSync(RENDER_DIR)) {
  fs.mkdirSync(RENDER_DIR, { recursive: true });
}

async function captureRoute(route = "/", port = 3000) {
  const url = `http://localhost:${port}${route}`;
  console.log(`\n📸 Visual Capture: Launching headless browser for ${url}...`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
  } catch (e) {
    console.warn(`Warning: Network idle timeout, proceeding with current DOM state...`);
  }

  // Settle time for fonts & animations, then scroll down to trigger all GSAP ScrollTriggers
  await page.waitForTimeout(1000);
  await page.evaluate(async () => {
    const scrollHeight = document.body.scrollHeight;
    const step = 400;
    for (let y = 0; y < scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });

  const routeClean = route === "/" ? "home" : route.replace(/\//g, "_");
  const fullPagePath = path.join(RENDER_DIR, `${routeClean}_desktop_full.png`);

  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log(`✅ Saved full-page desktop screenshot: ${fullPagePath}`);

  // Mobile capture
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(500);
  const mobilePath = path.join(RENDER_DIR, `${routeClean}_mobile_full.png`);
  await page.screenshot({ path: mobilePath, fullPage: true });
  console.log(`✅ Saved mobile screenshot: ${mobilePath}`);

  await browser.close();
  return { desktop: fullPagePath, mobile: mobilePath };
}

const targetRoute = process.argv[2] || "/";
captureRoute(targetRoute).catch(err => {
  console.error("❌ Visual capture failed:", err);
  process.exit(1);
});
