import { NextResponse } from "next/server";
import { productCategories } from "@/data/products";

// Lets other tools (the catalogue-sharing admin) read the current /products
// category list without hardcoding a copy of it — add a category here and
// it shows up there within the hour, no redeploy of the other project
// needed. Public and read-only; category names aren't sensitive.
export async function GET() {
  return NextResponse.json(
    { categories: productCategories },
    { headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" } },
  );
}
