// Six main stories total — the studio's own "Product Category Architecture"
// doc (Shailesh_Rajput_Studio_Product_Category_Architecture.pdf), confirmed
// by the studio: Panch Bhuta, Kabir's Dohas, Aranya, Sama:Yantar,
// Parth:Sarathi, Prem:Samatva. Bhumi/Jal/Agni/Vayu/Vyom/Dhatu are NOT their
// own top-level stories — they're the six elemental sub-chapters nested one
// level under Panch Bhuta (confirmed by the studio as all six being part of
// Panch Bhuta, even though the PDF's own tree only lists five). Route:
// /collections/panch-bhuta (overview) has an in-page tab browser
// (ElementBrowser) for the six elements — there is deliberately no separate
// /collections/panch-bhuta/<element> page; each element's myth is shown
// inline below its tab instead, since that page only ever held placeholder
// story copy. /collections/<slug> covers the other five stories.
//
// Cover photography is real for the six elements (public/images/collections/
// <slug>-cover.png, sourced from /Users/pavantj/Desktop/GUBI/SRS) and for
// Panch Bhuta itself (cover/stills/myth/films all real, sourced from
// /Users/pavantj/Downloads/SRS IMAGE/Stories/Panchbhuta — the myth text is
// the studio's own copy, verbatim; films are real mp4s transcoded to 540p
// for web delivery, public/videos/panch-bhuta/). Myth/material-story copy
// for the six elements and the five sibling stories is still placeholder —
// seeded from the PDF's own one-line descriptions (and, for Parth:Sarathi,
// from MAR:GA's real product copy), written in the studio's voice but
// pending the studio's fuller story copy. "Collectables" is excluded per
// the studio — it's a functional/type bucket, not a story.
//
// This file is the single source other pages read from, matching the "grow
// without touching code" spirit from the website brief.

export type Film = {
  slug: string;
  title: string;
  duration: string;
  type: "Brand Film" | "Process Film" | "Collection Film";
  videoSrc?: string; // real, playable video (mp4) — when absent, falls back to a placeholder poster linking to /films
};

// One of Panch Bhuta's six elemental sub-chapters.
export type Element = {
  slug: string;
  title: string;
  sanskritName: string;
  element: string; // Earth / Water / Fire / Air / Ether / Metal
  coverExt: "png" | "jpg" | "svg"; // real photography vs. placeholder SVG
  stillsExt: "jpg" | "svg";
  placeholder: boolean;
  myth: string;
  materialStory: string;
  films: Film[];
};

export type Collection = {
  slug: string;
  title: string;
  sanskritName: string;
  coverExt: "png" | "jpg" | "svg";
  stillsExt: "jpg" | "svg";
  placeholder: boolean;
  myth: string;
  materialStory: string;
  films: Film[];
  elements?: Element[]; // present only on the Panch Bhuta entry
};

const panchBhutaElements: Element[] = [
  {
    slug: "bhumi",
    title: "Bhumi",
    sanskritName: "भूमि",
    element: "Earth",
    coverExt: "png",
    stillsExt: "svg",
    placeholder: true,
    myth: "Grounded, unhurried, load-bearing — this collection begins where the studio begins: with clay, stone, and the patience of things that do not rush to be shaped.",
    materialStory: "Cast and hand-finished forms rooted in mineral weight — clay bodies, patinated bronze, stone dust bound into surface.",
    films: [
      { slug: "bhumi-i", title: "Bhumi — Origin", duration: "2:14", type: "Collection Film" },
      { slug: "bhumi-ii", title: "Bhumi — Process", duration: "3:02", type: "Process Film" },
      { slug: "bhumi-iii", title: "Bhumi — In Situ", duration: "1:48", type: "Collection Film" },
    ],
  },
  {
    slug: "jal",
    title: "Jal",
    sanskritName: "जल",
    element: "Water",
    coverExt: "png",
    stillsExt: "svg",
    placeholder: true,
    myth: "Movement without violence. Jal traces the coil language back to its source — the way water finds form only by yielding to it.",
    materialStory: "Fluid silhouettes in blown glass and polished bronze, surfaces treated to hold and release light like water holds a reflection.",
    films: [
      { slug: "jal-i", title: "Jal — Origin", duration: "2:31", type: "Collection Film" },
      { slug: "jal-ii", title: "Jal — Process", duration: "2:56", type: "Process Film" },
      { slug: "jal-iii", title: "Jal — In Situ", duration: "1:39", type: "Collection Film" },
    ],
  },
  {
    slug: "agni",
    title: "Agni",
    sanskritName: "अग्नि",
    element: "Fire",
    coverExt: "png",
    stillsExt: "svg",
    placeholder: true,
    myth: "Transformation, witnessed. Every piece in Agni passed through heat that changed it permanently — the studio's most literal act of reincarnation.",
    materialStory: "Fire-cast bronze and blown glass, finished with heat-treated patinas that can never be exactly repeated.",
    films: [
      { slug: "agni-i", title: "Agni — Origin", duration: "2:47", type: "Collection Film" },
      { slug: "agni-ii", title: "Agni — Process", duration: "3:18", type: "Process Film" },
      { slug: "agni-iii", title: "Agni — In Situ", duration: "1:52", type: "Collection Film" },
    ],
  },
  {
    slug: "vayu",
    title: "Vayu",
    sanskritName: "वायु",
    element: "Air",
    coverExt: "png",
    stillsExt: "svg",
    placeholder: true,
    myth: "The lightest collection, in weight and in intention — forms that seem to hover, lit from within, carrying almost nothing but presence.",
    materialStory: "Suspended lighting in hand-worked metal mesh and blown glass, engineered to feel weightless despite their scale.",
    films: [
      { slug: "vayu-i", title: "Vayu — Origin", duration: "2:22", type: "Collection Film" },
      { slug: "vayu-ii", title: "Vayu — Process", duration: "2:44", type: "Process Film" },
      { slug: "vayu-iii", title: "Vayu — In Situ", duration: "1:35", type: "Collection Film" },
    ],
  },
  {
    slug: "vyom",
    title: "Vyom",
    sanskritName: "व्योम",
    element: "Ether",
    coverExt: "png",
    stillsExt: "svg",
    placeholder: true,
    myth: "The element with no form of its own — Vyom is the collection built around negative space, where what is left out matters as much as what is made.",
    materialStory: "Sculptural voids in cast bronze and blackened steel, designed to be read as much by their shadow as their surface.",
    films: [
      { slug: "vyom-i", title: "Vyom — Origin", duration: "2:09", type: "Collection Film" },
      { slug: "vyom-ii", title: "Vyom — Process", duration: "2:51", type: "Process Film" },
      { slug: "vyom-iii", title: "Vyom — In Situ", duration: "1:44", type: "Collection Film" },
    ],
  },
  {
    slug: "dhatu",
    title: "Dhatu",
    sanskritName: "धातु",
    element: "Metal",
    coverExt: "png",
    stillsExt: "svg",
    placeholder: true,
    myth: "Beyond the five elements — Dhatu is the studio's material signature made explicit: bronze, brass and iron, worked by hand until the metal remembers the maker's pressure.",
    materialStory: "Hand-hammered and cast metalwork, left to patina naturally rather than sealed against time.",
    films: [
      { slug: "dhatu-i", title: "Dhatu — Origin", duration: "2:58", type: "Collection Film" },
      { slug: "dhatu-ii", title: "Dhatu — Process", duration: "3:26", type: "Process Film" },
      { slug: "dhatu-iii", title: "Dhatu — In Situ", duration: "1:57", type: "Collection Film" },
    ],
  },
];

export const collections: Collection[] = [
  {
    slug: "panch-bhuta",
    title: "Panch Bhuta",
    sanskritName: "पंचभूत",
    coverExt: "jpg",
    stillsExt: "jpg",
    placeholder: false,
    // Real copy, from the studio's own Panch Bhuta story materials.
    myth: "This collection is an exploration of the five elements that build our universe. Each piece is an invitation to witness the delicate balance between creation and destruction, stillness and motion, presence and absence. The elements are alive and ever-changing.",
    materialStory: "Each element carries its own material language — clay and stone for Bhumi, blown glass for Jal, fire-cast bronze for Agni, suspended metal mesh for Vayu, cast voids for Vyom, and hand-worked metal for Dhatu.",
    films: [
      { slug: "panch-bhuta-cinematic", title: "Panch Bhuta — Cinematic", duration: "—", type: "Brand Film", videoSrc: "/videos/panch-bhuta/cinematic.mp4" },
      { slug: "panch-bhuta-product", title: "Panch Bhuta — Product", duration: "—", type: "Collection Film", videoSrc: "/videos/panch-bhuta/product.mp4" },
      { slug: "panch-bhuta-making", title: "Panch Bhuta — Making", duration: "—", type: "Process Film", videoSrc: "/videos/panch-bhuta/making.mp4" },
    ],
    elements: panchBhutaElements,
  },
  // Story categories — from the PDF's "Product Category Architecture" tree.
  // Myth copy is seeded from the PDF's own one-line description of each.
  {
    slug: "kabir-ke-dohe",
    title: "Kabir's Dohas",
    sanskritName: "कबीर के दोहे",
    coverExt: "jpg",
    stillsExt: "jpg",
    placeholder: false,
    myth: "This series is a tribute to the mystic poet Saint Kabir, whose verses speak beyond time, language, and religion. Each light draws from his wisdom — simple in form, profound in meaning — reminding us that truth is not found outside, but within.",
    materialStory: "Each piece is carried the way Kabir himself was said to carry his own lamp — a wandering jhola strung with light, a humble bowl, a quiet glow — handcrafted in stainless steel, wire mesh, and blown glass.",
    films: [
      { slug: "jhola", title: "Jhola", duration: "—", type: "Collection Film", videoSrc: "/videos/kabir-ke-dohe/jhola.mp4" },
      { slug: "vikaya", title: "Vikaya", duration: "—", type: "Collection Film", videoSrc: "/videos/kabir-ke-dohe/vikaya.mp4" },
      { slug: "musha", title: "Musha", duration: "—", type: "Collection Film", videoSrc: "/videos/kabir-ke-dohe/musha.mp4" },
    ],
  },
  {
    slug: "aranya",
    title: "Aranya",
    sanskritName: "आरण्य",
    coverExt: "jpg",
    stillsExt: "jpg",
    placeholder: false,
    myth: "We entered the forest seeking what could be seen — the animals, and the wild in between. But the forest spoke softer, through textures and trace, through patterns and the stillness of space.",
    materialStory: "Each piece takes its silhouette from a different creature of the forest — the rhino's layered hide, the turtle's sculpted shell, the elephant's sensitive ear, the crocodile's patience, the moth's woven cocoon — worked by hand in aluminium, brass, and compound epoxy texture.",
    films: [
      { slug: "aranya-product", title: "Aranya — Product", duration: "—", type: "Collection Film", videoSrc: "/videos/aranya/product.mp4" },
      { slug: "aranya-making", title: "Aranya — Making", duration: "—", type: "Process Film", videoSrc: "/videos/aranya/making.mp4" },
      { slug: "aranya-cinematic", title: "Aranya — Cinematic", duration: "—", type: "Brand Film", videoSrc: "/videos/aranya/cinematic.mp4" },
    ],
  },
  {
    slug: "sama-yantar",
    title: "Sama:Yantar",
    sanskritName: "समयांतर",
    coverExt: "jpg",
    stillsExt: "jpg",
    placeholder: false,
    myth: "The Dance of Eternity — a meditation on the turtle that bears the weight of time, the cycle that carries us through it, and the beads that mark our way back to stillness.",
    materialStory: "Each piece is cast in aluminium and hand-finished bronze — Kurma's ancient shell, Samsara's endless turn, Rudraksha's counted beads — objects that hold time rather than measure it.",
    films: [
      { slug: "samsara", title: "Samsara", duration: "—", type: "Collection Film", videoSrc: "/videos/sama-yantar/samsara.mp4" },
      { slug: "rudraksh", title: "Rudraksh", duration: "—", type: "Collection Film", videoSrc: "/videos/sama-yantar/rudraksh.mp4" },
      { slug: "kurma-film", title: "Kurma", duration: "—", type: "Collection Film", videoSrc: "/videos/sama-yantar/kurma.mp4" },
      { slug: "sama-yantar-making", title: "Sama:Yantar — Making", duration: "—", type: "Process Film", videoSrc: "/videos/sama-yantar/making.mp4" },
    ],
  },
  {
    slug: "parth-sarathi",
    title: "Parth:Sarathi",
    sanskritName: "पार्थ:सारथि",
    coverExt: "jpg",
    stillsExt: "jpg",
    placeholder: false,
    myth: "Guidance does not come as simple instruction. It unfolds through conversation. This series translates that exchange into form.",
    materialStory: "Handcrafted in brass, stainless steel, and marble, each piece is woven or cast around a single unwavering line of light — a form for the quiet exchange between seeker and guide.",
    films: [
      { slug: "parth-sarathi-product", title: "Parth:Sarathi — Product", duration: "—", type: "Collection Film", videoSrc: "/videos/parth-sarathi/product.mp4" },
      { slug: "parth-sarathi-making", title: "Parth:Sarathi — Making", duration: "—", type: "Process Film", videoSrc: "/videos/parth-sarathi/making.mp4" },
      { slug: "parth-sarathi-cinematic", title: "Parth:Sarathi — Cinematic", duration: "—", type: "Brand Film", videoSrc: "/videos/parth-sarathi/cinematic.mp4" },
    ],
  },
  {
    slug: "prem-samatva",
    title: "Prem:Samatva",
    sanskritName: "प्रेम:समत्व",
    coverExt: "jpg",
    stillsExt: "jpg",
    placeholder: false,
    myth: "Strength and gentleness. Stillness and movement. Self and other — nothing overpowers, and nothing is diminished.",
    materialStory: "Cast in bronze and lit from within, each piece holds two opposing forms in a single unbroken line — balance made material.",
    films: [
      { slug: "prem-samatva-product", title: "Prem:Samatva — Product", duration: "—", type: "Collection Film", videoSrc: "/videos/prem-samatva/product.mp4" },
      { slug: "prem-samatva-making", title: "Prem:Samatva — Making", duration: "—", type: "Process Film", videoSrc: "/videos/prem-samatva/making.mp4" },
      { slug: "prem-samatva-cinematic", title: "Prem:Samatva — Cinematic", duration: "—", type: "Brand Film", videoSrc: "/videos/prem-samatva/cinematic.mp4" },
    ],
  },
];

export function getPanchBhuta() {
  return collections.find((c) => c.slug === "panch-bhuta")!;
}

export function getElements(): Element[] {
  return getPanchBhuta().elements ?? [];
}

export function getElementBySlug(slug: string) {
  return getElements().find((e) => e.slug === slug);
}

// The five sibling stories alongside Panch Bhuta (excludes Panch Bhuta
// itself, which has its own overview + nested-element route structure).
export function getStoryCollections(): Collection[] {
  return collections.filter((c) => c.slug !== "panch-bhuta");
}

export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getAllFilms(): (Film & { collectionSlug: string; collectionTitle: string; href: string })[] {
  const elementFilms = getElements().flatMap((e) =>
    e.films.map((f) => ({ ...f, collectionSlug: e.slug, collectionTitle: e.title, href: "/collections/panch-bhuta" })),
  );
  const storyFilms = getStoryCollections().flatMap((c) =>
    c.films.map((f) => ({ ...f, collectionSlug: c.slug, collectionTitle: c.title, href: `/collections/${c.slug}` })),
  );
  return [...elementFilms, ...storyFilms];
}

// Cover photos are real photography where coverExt is "png"/"jpg"
// (public/images/collections/<slug>-cover.<ext>); otherwise a placeholder
// SVG until the studio provides photography.
export function coverImage(c: Collection | Element) {
  return `/images/collections/${c.slug}-cover.${c.coverExt}`;
}

export function stillImages(c: Collection | Element) {
  return [1, 2, 3].map((i) => `/images/stills/${c.slug}-still-${i}.${c.stillsExt}`);
}

// Real films get their own poster — an actual frame grabbed from that
// film's own footage — so every thumbnail in a collection's film grid is
// distinct instead of all sharing the collection's cover image. Films
// without real footage yet fall back to the generated placeholder SVG.
export function filmPoster(film: Film) {
  const ext = film.videoSrc ? "jpg" : "svg";
  return `/images/films/${film.slug}.${ext}`;
}
