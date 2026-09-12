import type { Metadata } from "next";
import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductCategoryBrowser } from "@/components/ProductCategoryBrowser";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { products, productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Shailesh Rajput Studio's work by category, wall sconces, pendant lights, floor lamps, and more.",
};

export default function ProductsPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 pt-8 pb-6 text-left sm:pt-10">
        <RevealText as="h1" className="text-2xl sm:text-3xl">
          The Objects
        </RevealText>
        <Reveal delay={0.05}>
          <p className="font-sans-ui mt-2 text-sm text-[var(--ink)]/60">
            Made to order, browse by type below.
          </p>
        </Reveal>
      </section>

      <Suspense fallback={null}>
        <ProductCategoryBrowser categories={productCategories} products={products} />
      </Suspense>

      <Footer />
    </>
  );
}
