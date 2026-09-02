// PLACEHOLDER DATA — real exhibition/press history not yet provided.
// "Design Democracy" is the one real, named upcoming show referenced in the
// website brief; everything else here is a structural placeholder.

export type PressEntry = {
  title: string;
  venue: string;
  year: string;
  status: "Upcoming" | "Past";
  placeholder: boolean;
  description: string;
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
    title: "Exhibition — Working Title",
    venue: "Venue TBD",
    year: "2025",
    status: "Past",
    placeholder: true,
    description: "Placeholder entry — replace with real exhibition history.",
  },
  {
    title: "Feature — Publication TBD",
    venue: "Press feature",
    year: "2025",
    status: "Past",
    placeholder: true,
    description: "Placeholder entry — replace with real press coverage.",
  },
];
