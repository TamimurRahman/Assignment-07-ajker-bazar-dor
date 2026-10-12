
import Link from "next/link";
import CategoryProducts from "./CategoryProducts";

interface Product {
  id: number;
  slug: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const CategoryPage = async ({
  slug,
}: {
  slug: string;
}) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );

  if (categoryProducts.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f0f5f1] p-4">
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold text-[#263229]">
            কোনো পণ্য পাওয়া যায়নি!
          </h2>

          <Link
            href="/"
            className="inline-block rounded-lg bg-green-700 px-4 py-2 text-white hover:bg-green-800"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f0f5f1] p-4 text-[#263229] sm:p-6">
      <div className="mx-auto max-w-6xl space-y-4">

        {/* Category Header */}
        <section className="rounded-xl border border-[#e1e9e2] bg-[#fafcfb] p-4">
          <h1 className="text-xl font-bold">
            {categoryProducts[0].categoryIcon}{" "}
            {categoryProducts[0].categoryNameBn}
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            {categoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </section>



        {/* Product Count */}
        <p className="text-xs text-gray-500">
          মোট {categoryProducts.length}টি পণ্য পাওয়া গেছে
        </p>

        {/* Product Cards */}
        <CategoryProducts products={categoryProducts} />

      </div>
    </main>
  );
};

export default CategoryPage;
