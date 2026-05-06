// Resize originals from G:\Глэмпинг Yagoda\_web → public/images/<category>
// Outputs WebP at three widths (2000 / 1280 / 640) for responsive use.
// Run: node scripts/process-assets.mjs

import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const SRC_ROOT = "G:\\Глэмпинг Yagoda\\_web";
const OUT_ROOT = path.resolve("public/images");

const CATEGORIES = [
  { src: "баня", out: "banya" },
  { src: "дом а", out: "house-a" },
  { src: "дом b", out: "house-b" },
  { src: "дом с", out: "house-c" },
  { src: "ресторан", out: "restaurant" },
  { src: "территория", out: "territory" },
];

const VARIANTS = [
  { suffix: "@2000", width: 2000, quality: 78 },
  { suffix: "@1280", width: 1280, quality: 78 },
  { suffix: "@640", width: 640, quality: 74 },
];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function processCategory({ src, out }) {
  const srcDir = path.join(SRC_ROOT, src);
  const outDir = path.join(OUT_ROOT, out);
  await ensureDir(outDir);

  const files = (await fs.readdir(srcDir))
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .sort();

  console.log(`\n[${out}] ${files.length} files`);

  const manifest = [];
  let i = 0;
  for (const file of files) {
    i += 1;
    const stem = path.parse(file).name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const inPath = path.join(srcDir, file);
    const outBase = path.join(outDir, stem);

    const meta = await sharp(inPath).metadata();
    const orientation = meta.width >= meta.height ? "landscape" : "portrait";

    for (const v of VARIANTS) {
      const outFile = `${outBase}${v.suffix}.webp`;
      try {
        await fs.access(outFile);
        continue; // skip if exists
      } catch {}
      await sharp(inPath)
        .rotate()
        .resize({ width: v.width, withoutEnlargement: true })
        .webp({ quality: v.quality, effort: 5 })
        .toFile(outFile);
    }

    manifest.push({
      id: stem,
      file: `${stem}@1280.webp`,
      large: `${stem}@2000.webp`,
      thumb: `${stem}@640.webp`,
      orientation,
      width: meta.width,
      height: meta.height,
    });

    if (i % 10 === 0) process.stdout.write(`  ${i}/${files.length}\n`);
  }

  await fs.writeFile(
    path.join(outDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );
  console.log(`[${out}] manifest written (${manifest.length} entries)`);
}

(async () => {
  console.log("Output:", OUT_ROOT);
  for (const cat of CATEGORIES) {
    try {
      await processCategory(cat);
    } catch (e) {
      console.error(`!! Failed [${cat.out}]:`, e.message);
    }
  }
  console.log("\nDone.");
})();
