"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product, ProductCategory } from "@/data/products";

export function ProductCategoryBrowser({
  categories,
  products,
}: {
  categories: readonly ProductCategory[];
  products: Product[];
}) {
  const [active, setActive] = useState<ProductCategory>(categories[0]);
  const filtered = products.filter((p) => p.category === active);

  return (
    <div>
      <div className="font-sans-ui sticky top-[73px] z-10 overflow-x-auto border-y border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur sm:top-[81px]">
        <div className="mx-auto flex max-w-[1800px] gap-1 px-6 sm:px-10 lg:px-16 py-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`shrink-0 px-4 py-3 text-sm whitespace-nowrap transition ${
                active === category
                  ? "bg-[var(--ink)] text-white"
                  : "text-[var(--ink)]/60 hover:text-[var(--ink)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 py-12">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-[var(--ink)]/50">
            More pieces from this category are on their way.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper-2)]">
                  <Image
                    src={product.images[0]}
                    alt={product.placeholder ? `${product.category} — coming soon` : product.romanized}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="font-sans-ui mt-4 text-center text-sm tracking-[0.05em] text-[var(--ink)]">
                  {product.placeholder ? (
                    <>‖ {product.category} ‖</>
                  ) : (
                    <>‖ {product.displayName} ‖</>
                  )}
                </p>
                {!product.placeholder && product.romanized !== product.displayName && (
                  <p className="font-sans-ui mt-1 text-center text-xs text-[var(--ink)]/50">
                    ({product.romanized})
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
