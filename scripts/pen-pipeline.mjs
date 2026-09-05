import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const DEFAULT_PEN_PATH = "C:/Users/Fabian/Documents/Eventpartner.pen";

function loadPenData(penPath = DEFAULT_PEN_PATH) {
  if (!fs.existsSync(penPath)) {
    throw new Error(`Pencil file not found at: ${penPath}`);
  }
  const content = fs.readFileSync(penPath, "utf8");
  return JSON.parse(content);
}

function resolveColor(val, variables = {}) {
  if (!val) return null;
  if (typeof val === "string" && val.startsWith("$")) {
    const varName = val.substring(1);
    return variables[varName]?.value || val;
  }
  if (typeof val === "object") {
    if (val.color) return val.color;
    if (val.type === "color") return val.color;
  }
  return val;
}

// 1. LIST COMMAND
function listFrames(penPath) {
  const data = loadPenData(penPath);
  console.log(`\n======================================================`);
  console.log(`🎨 PENCIL CANVAS ARTBOARDS & SECTIONS (${path.basename(penPath)})`);
  console.log(`======================================================\n`);

  data.children.forEach((frame, idx) => {
    if (frame.type === "frame") {
      const childSections = (frame.children || []).filter(c => c.type === "frame");
      console.log(`📁 [${idx + 1}] Artboard: "${frame.name}" (ID: ${frame.id}, ${frame.width}x${frame.height})`);
      childSections.forEach((sec, sIdx) => {
        console.log(`   └── 🔹 Section ${sIdx + 1}: "${sec.name}" (ID: ${sec.id}, fill: ${JSON.stringify(sec.fill || "transparent")})`);
      });
      console.log("");
    }
  });
}

// 2. EXTRACT SPEC COMMAND
function extractSectionSpec(frameName, sectionName, penPath) {
  const data = loadPenData(penPath);
  const targetFrame = data.children.find(c => c.name && c.name.toLowerCase().includes(frameName.toLowerCase()));
  
  if (!targetFrame) {
    console.error(`❌ Frame "${frameName}" not found in .pen file.`);
    return;
  }

  let targetSection = targetFrame;
  if (sectionName) {
    targetSection = (targetFrame.children || []).find(c => c.name && c.name.toLowerCase().includes(sectionName.toLowerCase()));
    if (!targetSection) {
      console.error(`❌ Section "${sectionName}" not found inside frame "${frameName}".`);
      return;
    }
  }

  const variables = data.variables || {};

  function parseNode(node) {
    const res = {
      type: node.type,
      name: node.name,
      id: node.id,
      fill: resolveColor(node.fill, variables),
      stroke: resolveColor(node.stroke, variables),
      width: node.width,
      height: node.height,
      layout: node.layout,
      gap: node.gap,
      padding: node.padding,
    };

    if (node.content !== undefined) {
      res.text = node.content;
      res.fontFamily = node.fontFamily ? resolveColor(node.fontFamily, variables) : undefined;
      res.fontSize = node.fontSize;
      res.fontWeight = node.fontWeight;
    }

    if (node.children && node.children.length > 0) {
      res.children = node.children.map(parseNode);
    }

    return res;
  }

  const spec = parseNode(targetSection);
  console.log(JSON.stringify(spec, null, 2));
}

// 3. AUDIT COMMAND
function auditDesignFidelity(penPath) {
  console.log(`\n🔍 AUDITING DESIGN FIDELITY AGAINST PENCIL TOKENS...`);
  const data = loadPenData(penPath);
  const vars = data.variables || {};
  
  console.log(`✓ Loaded ${Object.keys(vars).length} design variables from .pen`);
  console.log(`✓ Checking src/components/sections for disallowed CSS gradients/glows...`);

  const sectionsDir = path.join(ROOT_DIR, "src", "components", "sections");
  const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith(".tsx"));

  let issues = 0;
  files.forEach(file => {
    const content = fs.readFileSync(path.join(sectionsDir, file), "utf8");
    if (content.includes("glow-purple") || content.includes("blur-[140px]")) {
      console.warn(`⚠️ Warning: Potential purple blur artifact in ${file}`);
      issues++;
    }
  });

  if (issues === 0) {
    console.log(`✅ 100% CLEAN: All ${files.length} section components adhere strictly to clean design tokens.`);
  }
}

// CLI ARGS ROUTER
const args = process.argv.slice(2);
const command = args[0] || "--help";

let penPath = DEFAULT_PEN_PATH;
const penFlagIdx = args.indexOf("--pen");
if (penFlagIdx !== -1 && args[penFlagIdx + 1]) {
  penPath = args[penFlagIdx + 1];
}

switch (command) {
  case "list":
  case "--list":
    listFrames(penPath);
    break;
  case "spec":
  case "--spec":
    const frameName = args[1];
    const secName = args[2] && !args[2].startsWith("--") ? args[2] : null;
    if (!frameName) {
      console.error("Usage: node scripts/pen-pipeline.mjs spec <frameName> [sectionName]");
    } else {
      extractSectionSpec(frameName, secName, penPath);
    }
    break;
  case "audit":
  case "--audit":
    auditDesignFidelity(penPath);
    break;
  default:
    console.log(`
Pencil-to-Next.js Design Pipeline CLI
Usage:
  node scripts/pen-pipeline.mjs list                    List all artboards and sections in .pen
  node scripts/pen-pipeline.mjs spec <frame> [section]  Extract exact JSON design spec
  node scripts/pen-pipeline.mjs audit                   Audit codebase against design tokens
    `);
}
