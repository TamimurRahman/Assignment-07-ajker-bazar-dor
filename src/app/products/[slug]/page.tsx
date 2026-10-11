
interface Product {
  id: number;
  slug: string;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = await getProducts();

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return <div className="p-10">পণ্য পাওয়া যায়নি।</div>;
  }

  return (
    <main className="min-h-screen bg-[#f0f5f1] p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">

        <LinkBack />

        <section className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">
              {product.image}
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                {product.nameBn}
              </h1>
              <p className="text-sm text-gray-500">
                {product.categoryNameBn} · {product.unit}
              </p>
            </div>

            <div className="ml-auto text-right">
              <p className="text-sm text-gray-500">
                আজকের দাম
              </p>
              <p className="text-2xl font-bold">
                {product.today} টাকা
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="mb-4 font-bold">
            দামের সাম্প্রতিক রেকর্ড
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">
                গতকাল
              </p>
              <p className="font-bold">
                {product.yesterday} টাকা
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">
                গত সপ্তাহ
              </p>
              <p className="font-bold">
                {product.lastWeek} টাকা
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">
                গত মাস
              </p>
              <p className="font-bold">
                {product.lastMonth} টাকা
              </p>
            </div>
          </div>

          <h2 className="mb-3 mt-6 font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">বাজার</th>
                  <th className="p-3 text-left">বিভাগ</th>
                  <th className="p-3 text-right">সর্বনিম্ন</th>
                  <th className="p-3 text-right">সর্বোচ্চ</th>
                </tr>
              </thead>

              <tbody>
                {product.markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-t"
                  >
                    <td className="p-3">
                      {market.market}
                    </td>
                    <td className="p-3">
                      {market.division}
                    </td>
                    <td className="p-3 text-right">
                      {market.min} টাকা
                    </td>
                    <td className="p-3 text-right">
                      {market.max} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

function LinkBack() {
  return (
    <Link
      href="/"
      className="text-sm text-gray-600 hover:text-green-700"
    >
      ← হোম পেজে ফিরে যান
    </Link>
  );
}

import Link from "next/link";
