import type { Metadata } from "next";
import localFont from "next/font/local";
import { Duru_Sans } from "next/font/google";
import { FloatingContact } from "@/components/FloatingContact";
import { SingleVideoPlayback } from "@/components/SingleVideoPlayback";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { RouteTransition } from "@/components/motion/RouteTransition";
import "./globals.css";

const annapurna = localFont({
  src: [
    { path: "../../public/fonts/AnnapurnaSIL-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/AnnapurnaSIL-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/AnnapurnaSIL-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-annapurna",
  display: "swap",
});

const duruSans = Duru_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-duru",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shailesh Rajput Studio",
    template: "%s — Shailesh Rajput Studio",
  },
  description:
    "Shailesh Rajput Studio is a design practice creating sculptural lighting, objects, and experiences inspired by the intelligence of nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${annapurna.variable} ${duruSans.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <RouteTransition>{children}</RouteTransition>
        <FloatingContact />
        <SingleVideoPlayback />
      </body>
    </html>
  );
}
