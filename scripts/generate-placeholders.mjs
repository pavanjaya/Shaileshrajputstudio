// One-off: generates placeholder SVG imagery for collections, films, stills,
// press, and portraits — tinted per collection element, clearly labeled as
// placeholders. Real photography/film stills should overwrite these later.
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const palettes = {
  Earth: ["#6b4a2f", "#c9a06b"],
  Water: ["#1f4a5c", "#7ba9bd"],
  Fire: ["#6b1f1f", "#c9622f"],
  Air: ["#4a5560", "#c7d1d8"],
  Ether: ["#211a33", "#5c4a72"],
  Metal: ["#5c4a1f", "#b89552"],
  Dohe: ["#3b2f2f", "#a88a6a"],
  Aranya: ["#2b3b2a", "#7a9a68"],
  Yantar: ["#2a2b3b", "#6a72a8"],
  Samatva: ["#3b2a34", "#a8688f"],
  Sarathi: ["#33291a", "#c9a24a"],
  PanchBhuta: ["#2f2a1f", "#8f7a4a"],
};

const collections = [
  { slug: "bhumi", title: "Bhumi", paletteKey: "Earth" },
  { slug: "jal", title: "Jal", paletteKey: "Water" },
  { slug: "agni", title: "Agni", paletteKey: "Fire" },
  { slug: "vayu", title: "Vayu", paletteKey: "Air" },
  { slug: "vyom", title: "Vyom", paletteKey: "Ether" },
  { slug: "dhatu", title: "Dhatu", paletteKey: "Metal" },
  { slug: "panch-bhuta", title: "Panch Bhuta", paletteKey: "PanchBhuta" },
  { slug: "kabir-ke-dohe", title: "Kabir's Dohas", paletteKey: "Dohe" },
  { slug: "aranya", title: "Aranya", paletteKey: "Aranya" },
  { slug: "sama-yantar", title: "Sama:Yantar", paletteKey: "Yantar" },
  { slug: "prem-samatva", title: "Prem:Samatva", paletteKey: "Samatva" },
  { slug: "parth-sarathi", title: "Parth:Sarathi", paletteKey: "Sarathi" },
];

// Story collections without real photography yet — these get a placeholder
// cover.svg too (the six Panch Bhuta elements already have real cover.png
// files; the Panch Bhuta overview itself has no single "cover" photo yet).
const storyCollectionSlugs = new Set([
  "panch-bhuta",
  "kabir-ke-dohe",
  "aranya",
  "sama-yantar",
  "prem-samatva",
  "parth-sarathi",
]);

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function coverSvg({ w, h, title, label, paletteKey, seed }) {
  const [c1, c2] = palettes[paletteKey];
  const id = `g-${seed}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${id})"/>
  <text x="${w / 2}" y="${h / 2 - 10}" font-family="sans-serif" font-size="15" letter-spacing="3" fill="#ffffffaa" text-anchor="middle">${escapeXml(title.toUpperCase())}</text>
  <text x="${w / 2}" y="${h / 2 + 16}" font-family="sans-serif" font-size="11" letter-spacing="1.5" fill="#ffffff66" text-anchor="middle">${escapeXml(label)}</text>
</svg>`;
}

function filmPosterSvg({ w, h, title, paletteKey, seed }) {
  const [c1, c2] = palettes[paletteKey];
  const id = `f-${seed}`;
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) * 0.09;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${id})"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff22" stroke="#ffffff88" stroke-width="1.5"/>
  <polygon points="${cx - r * 0.35},${cy - r * 0.5} ${cx - r * 0.35},${cy + r * 0.5} ${cx + r * 0.55},${cy}" fill="#ffffffdd"/>
  <text x="${w / 2}" y="${h - 22}" font-family="sans-serif" font-size="13" letter-spacing="2" fill="#ffffffaa" text-anchor="middle">${escapeXml(title.toUpperCase())}</text>
</svg>`;
}

function portraitSvg({ w, h, label }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="portrait" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3a3530"/>
      <stop offset="1" stop-color="#1e1e1e"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#portrait)"/>
  <text x="${w / 2}" y="${h - 30}" font-family="sans-serif" font-size="14" letter-spacing="2" fill="#ffffff88" text-anchor="middle">${escapeXml(label)}</text>
</svg>`;
}

const imagesDir = path.join(rootDir, "public/images");
mkdirSync(path.join(imagesDir, "collections"), { recursive: true });
mkdirSync(path.join(imagesDir, "films"), { recursive: true });
mkdirSync(path.join(imagesDir, "stills"), { recursive: true });
mkdirSync(path.join(imagesDir, "press"), { recursive: true });

// Cover photos are real product photography for the six Panch Bhuta
// collections (public/images/collections/<slug>-cover.png) — this script
// only generates a placeholder cover for the six story collections, plus
// stills/film posters for all twelve, which are still placeholders.
for (const c of collections) {
  if (storyCollectionSlugs.has(c.slug)) {
    writeFileSync(
      path.join(imagesDir, "collections", `${c.slug}-cover.svg`),
      coverSvg({ w: 1200, h: 1500, title: c.title, label: "PLACEHOLDER COVER", paletteKey: c.paletteKey, seed: `${c.slug}-cover` }),
    );
  }
  for (let i = 1; i <= 3; i++) {
    writeFileSync(
      path.join(imagesDir, "stills", `${c.slug}-still-${i}.svg`),
      coverSvg({ w: 1200, h: 1500, title: `${c.title} ${i}`, label: "PLACEHOLDER STILL", paletteKey: c.paletteKey, seed: `${c.slug}-${i}` }),
    );
  }
  for (let i = 1; i <= 3; i++) {
    const roman = ["i", "ii", "iii"][i - 1];
    writeFileSync(
      path.join(imagesDir, "films", `${c.slug}-${roman}.svg`),
      filmPosterSvg({ w: 1280, h: 720, title: `${c.title} — Film ${i}`, paletteKey: c.paletteKey, seed: `${c.slug}-film-${i}` }),
    );
  }
}

writeFileSync(
  path.join(imagesDir, "founder-portrait.svg"),
  portraitSvg({ w: 1200, h: 1500, label: "FOUNDER PORTRAIT — PLACEHOLDER" }),
);
writeFileSync(
  path.join(imagesDir, "arrival-hero.svg"),
  coverSvg({ w: 1920, h: 1080, title: "Shailesh Rajput Studio", label: "ARRIVAL HERO — PLACEHOLDER, REPLACE WITH FILM/PHOTOGRAPHY", paletteKey: "Ether", seed: "arrival" }),
);
writeFileSync(
  path.join(imagesDir, "world-hero.svg"),
  coverSvg({ w: 1600, h: 1000, title: "The Studio", label: "PLACEHOLDER", paletteKey: "Earth", seed: "world" }),
);

for (let i = 1; i <= 3; i++) {
  writeFileSync(
    path.join(imagesDir, "press", `press-${i}.svg`),
    coverSvg({ w: 1200, h: 900, title: `Press ${i}`, label: "PLACEHOLDER", paletteKey: ["Metal", "Fire", "Water"][i - 1], seed: `press-${i}` }),
  );
}

// Category-browsing placeholders (src/app/products/page.tsx) — neutral
// ink/paper tones since these aren't tied to an elemental collection.
function categorySlug(category) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function productPlaceholderSvg({ w, h, category }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="p-${categorySlug(category)}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2b2b2b"/>
      <stop offset="1" stop-color="#4a4540"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#p-${categorySlug(category)})"/>
  <text x="${w / 2}" y="${h / 2 - 10}" font-family="sans-serif" font-size="13" letter-spacing="3" fill="#ffffffaa" text-anchor="middle">${escapeXml(category.toUpperCase())}</text>
  <text x="${w / 2}" y="${h / 2 + 16}" font-family="sans-serif" font-size="11" letter-spacing="1.5" fill="#ffffff66" text-anchor="middle">COMING SOON — PLACEHOLDER</text>
</svg>`;
}

const productCategories = [
  "Wall Sconces",
  "Wall Art",
  "Wall Clock",
  "Pendant Lights",
  "Ceiling Lights",
  "Table Lights",
  "Floor Lamps",
  "Accent Furniture Pieces",
  "Artisanal Pieces",
  "Mirror",
];

mkdirSync(path.join(imagesDir, "products/placeholder"), { recursive: true });
for (const category of productCategories) {
  const count = category === "Floor Lamps" ? 1 : 2;
  for (let i = 1; i <= count; i++) {
    writeFileSync(
      path.join(imagesDir, "products/placeholder", `${categorySlug(category)}-${i}.svg`),
      productPlaceholderSvg({ w: 900, h: 1125, category }),
    );
  }
}

console.log("Placeholder images generated.");
