import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const AUDIT_DIR = path.join(ROOT_DIR, ".visual_audit");

async function runVisualLoop(route = "/") {
  console.log(`\n======================================================`);
  console.log(`🔄 RUNNING TEAMWORK 1:1 VISUAL DESIGN LOOP for "${route}"`);
  console.log(`======================================================\n`);

  // Step 1: Capture live browser rendering
  console.log(`📸 STEP 1: Capturing browser screenshot via Playwright...`);
  execSync(`node scripts/visual-capture.mjs ${route}`, { stdio: "inherit", cwd: ROOT_DIR });

  // Step 2: Audit CSS Token Discipline
  console.log(`\n🔍 STEP 2: Auditing token & gradient discipline...`);
  execSync(`node scripts/pen-pipeline.mjs audit`, { stdio: "inherit", cwd: ROOT_DIR });

  // Step 3: Report Visual Evidence
  const routeClean = route === "/" ? "home" : route.replace(/\//g, "_");
  const screenshotPath = path.join(AUDIT_DIR, "rendered", `${routeClean}_desktop_full.png`);

  console.log(`\n⚖️ STEP 3: Visual Evidence Ready for Independent Judge:`);
  console.log(`   📄 Rendered Screenshot: ${screenshotPath}`);
  console.log(`   🎨 Pencil Design Source: C:/Users/Fabian/Documents/Eventpartner.pen`);
  console.log(`\n✅ Visual Design Loop Completed Successfully.`);
}

const targetRoute = process.argv[2] || "/";
runVisualLoop(targetRoute).catch(err => {
  console.error("❌ Visual loop failed:", err);
  process.exit(1);
});
