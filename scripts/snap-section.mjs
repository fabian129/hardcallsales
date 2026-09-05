import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const RENDER_DIR = path.resolve(".visual_audit/rendered");
if (!fs.existsSync(RENDER_DIR)) fs.mkdirSync(RENDER_DIR, { recursive: true });

async function snap() {
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 2 });
    const page = await context.newPage();
    await page.goto("http://localhost:3001", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);
    const element = await page.$("#tjansteband");
    if (element) {
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      const box = await element.boundingBox();
      if (box) {
        await page.screenshot({
          path: path.join(RENDER_DIR, "tjansteband_render.png"),
          clip: box,
          animations: "disabled"
        });
        console.log("SUCCESS_SNAP_SAVED");
      }
    } else {
      console.error("ELEMENT_NOT_FOUND");
    }
  } finally {
    await browser.close();
  }
}
snap().catch(console.error);
