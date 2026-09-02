import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

// A slow, continuously moving strip rather than a paged carousel — the
// track renders the product list twice back-to-back and animates via CSS
// (see .animate-marquee in globals.css), which loops seamlessly and pauses
// on hover. No JS timers needed since the motion is pure CSS.
export function FeaturedCarousel({ products }: { products: Product[] }) {
  const track = [...products, ...products];

  return (
    <div className="marquee-wrapper relative overflow-hidden">
      <div className="animate-marquee flex w-max gap-8">
        {track.map((product, i) => (
          <Link
            key={`${product.slug}-${i}`}
            href={`/products/${product.slug}`}
            className="group block w-[220px] shrink-0 sm:w-[280px]"
          >
            <div className="mb-3 aspect-[4/5] overflow-hidden bg-[var(--paper-2)]">
              <Image
                src={product.images[0]}
                alt={product.romanized}
                width={800}
                height={1000}
                unoptimized
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-lg">‖ {product.displayName} ‖</p>
            {product.romanized !== product.displayName && (
              <p className="font-sans-ui text-xs tracking-[0.15em] text-[var(--ash)] uppercase">
                {product.romanized}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
