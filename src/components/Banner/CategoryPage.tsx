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

const CategoryPage = async ({ slug }: { slug: string }) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  const categoryProducts = products.filter(
    (p) => p.category === slug
  );

  if (categoryProducts.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="mb-4 text-xl font-bold">
          কোনো পণ্য পাওয়া যায়নি!
        </h2>

        <Link
          href="/"
          className="rounded bg-green-700 px-4 py-2 text-white"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen space-y-6 bg-[#f0f5f1] p-4 text-[#263229] sm:p-6">
      <section className="rounded-xl bg-white p-5">

    
        <h1 className="text-xl font-bold">
          {categoryProducts[0].categoryIcon}{" "}
          {categoryProducts[0].categoryNameBn}
        </h1>

        <p className="text-sm text-gray-500">
          {categoryProducts.length}টি পণ্য
        </p>
      </section>
      

      <CategoryProducts products={categoryProducts} />
    </main>
  );
};

export default CategoryPage;