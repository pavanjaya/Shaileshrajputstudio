// "Design Democracy" is a real, named upcoming show (from the studio's own
// brief) whose venue/date aren't confirmed yet, so those two fields stay
// placeholder text even though the entry itself is real. The three "Past"
// entries below are real press coverage, fetched directly from each
// publication (title/date/author confirmed from the live article).
export type PressEntry = {
  title: string;
  venue: string;
  year: string;
  status: "Upcoming" | "Past";
  placeholder: boolean;
  description: string;
  url?: string;
  // Overrides the generic placeholder thumbnail with one of the studio's
  // own real photos, when the piece a feature covers is known.
  image?: string;
};

export const pressEntries: PressEntry[] = [
  {
    title: "Design Democracy",
    venue: "TBD",
    year: "2026",
    status: "Upcoming",
    placeholder: true,
    description:
      "The studio's next milestone show — details to be confirmed as the exhibition approaches.",
  },
  {
    title: "Inside a Multigenerational Navsari Home Rooted in Local Materials and Craftsmanship",
    venue: "Interior Design",
    year: "2026",
    status: "Past",
    placeholder: false,
    description:
      "A 12,000-square-foot home by Design ni Dukaan, built with over 20 Indian artisans and designers — the studio's mirror and sconces, in epoxy and aluminium, hang in the foyer.",
    url: "https://interiordesign.net/projects/design-ni-dukaan-navsari-home/",
    image: "/images/products/eraya-i/1.jpg",
  },
  {
    title: "Shailesh Rajput Studio",
    venue: "Platform Magazine",
    year: "2026",
    status: "Past",
    placeholder: false,
    description:
      "A profile on how the studio merges functionality with emotional narrative — drawing from nature, Indian cultural tradition, and storytelling.",
    url: "https://www.platform-mag.com/design/shailesh-rajput-studio.html",
  },
  {
    title: "Shailesh Rajput Studio",
    venue: "Design Pataki — DP Cult",
    year: "2026",
    status: "Past",
    placeholder: false,
    description:
      "A brand profile on the studio's handcrafted lighting, furniture, and sculpture — hand-blown glass, copper, and brass, shaped by Maharashtrian jewellery and yogic form.",
    url: "https://www.designpataki.com/dp-cult/shailesh-rajput/",
  },
];
