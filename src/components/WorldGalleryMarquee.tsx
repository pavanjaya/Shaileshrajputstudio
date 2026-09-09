"use client";

import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";

// Thin client wrapper around <Marquee> for the World page's studio-life
// gallery — needed because that page is a Server Component and can't pass
// render-prop functions across the boundary directly (the same reason
// FeaturedCarousel wraps <Marquee> for the homepage).
export function WorldGalleryMarquee({ items }: { items: { image: string }[] }) {
  return (
    <Marquee
      items={items}
      keyFor={(item, i) => `${item.image}-${i}`}
      renderItem={(item) => (
        <div className="aspect-[4/5] w-[220px] shrink-0 overflow-hidden sm:w-[280px]">
          <Image
            src={item.image}
            alt=""
            width={560}
            height={700}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      )}
    />
  );
}
