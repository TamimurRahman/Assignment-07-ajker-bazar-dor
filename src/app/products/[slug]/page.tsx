
import Link from "next/link";

interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
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
    {
      cache: "no-store",
    }
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

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f0f5f1] p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-[#263229]">
            ৪০৪ - পণ্য পাওয়া যায়নি
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            দুঃখিত, এই পণ্যটি খুঁজে পাওয়া যায়নি।
          </p>

          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-green-700 px-4 py-2 text-white hover:bg-green-800"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  const unitName =
    product.unit === "kg"
      ? "কেজি"
      : product.unit;

  return (
    <main className="min-h-screen bg-[#f0f5f1] p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">

        {/* Breadcrumb */}
        <div className="breadcrumbs mb-4 text-sm">
          <ul>
            <li>
              <Link href="/" className="hover:text-green-700">
                হোম
              </Link>
            </li>

            <li>
              <Link
                href={`/category/${product.category}`}
                className="hover:text-green-700"
              >
                {product.categoryIcon} {product.categoryNameBn}
              </Link>
            </li>

            <li>
              <span className="font-medium text-[#263229]">
                {product.nameBn}
              </span>
            </li>
          </ul>
        </div>

        {/* Product Details */}
        <section className="rounded-xl border border-[#e1e9e2] bg-[#fafcfb] p-4 sm:p-5">
          <div className="flex items-center gap-3">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f1] text-3xl">
              {product.image}
            </div>

            <div className="min-w-0">
              <h1 className="text-xl font-bold text-[#263229] sm:text-2xl">
                {product.nameBn}
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                {product.categoryNameBn} · প্রতি {unitName}
              </p>

<p className="mt-1 text-xs text-gray-600">
  গতকালের তুলনায় আজ দাম{" "}
  {product.today > product.yesterday
    ? "বেড়েছে"
    : product.today < product.yesterday
    ? "কমেছে"
    : "অপরিবর্তিত"}
  {" "}
  {product.today !== product.yesterday &&
    `${Math.abs(product.today - product.yesterday)} টাকা`}
</p>
            </div>

            <div className="ml-auto shrink-0 rounded-xl bg-[#f0f5f1] px-3 py-3 text-center sm:min-w-24 sm:px-4">
              <p className="text-xs text-gray-500">
                আজকের দাম
              </p>

              <p className="text-2xl font-bold text-[#263229]">
                {product.today}
              </p>

              <p className="text-xs text-gray-500">
                টাকা / {unitName}
              </p>

              <p
                className={`mt-1 text-xs font-bold ${
                  product.change.dir === "up"
                    ? "text-red-600"
                    : product.change.dir === "down"
                    ? "text-green-700"
                    : "text-gray-500"
                }`}
              >
                {product.change.dir === "up"
                  ? "▲"
                  : product.change.dir === "down"
                  ? "▼"
                  : "—"}{" "}
                {product.change.pct}%
              </p>
            </div>

          </div>
        </section>

        {/* Price History */}
        <section className="mt-4 rounded-xl border border-[#e1e9e2] bg-[#fafcfb] p-4 sm:p-5">

          <h2 className="mb-3 text-base font-bold text-[#263229]">
            দামের সাম্প্রতিক রেকর্ড
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">

            <div className="rounded-xl border border-[#e1e9e2] p-4">
              <p className="text-xs text-gray-500">
                গতকালের দাম
              </p>

              <p className="mt-1 text-lg font-bold text-green-700">
                {product.yesterday} টাকা
              </p>

              <p className="text-xs text-gray-600">
                সর্বশেষ বাজারের আপডেট
              </p>
            </div>

            <div className="rounded-xl border border-[#e1e9e2] p-4">
              <p className="text-xs text-gray-500">
                গত সপ্তাহের দাম
              </p>

              <p className="mt-1 text-lg font-bold text-red-600">
                {product.lastWeek} টাকা
              </p>

              <p className="text-xs text-gray-600">
                গত সপ্তাহের তুলনামূলক দাম
              </p>
            </div>

            <div className="rounded-xl border border-[#e1e9e2] p-4">
              <p className="text-xs text-gray-500">
                গত মাসের দাম
              </p>

              <p className="mt-1 text-lg font-bold text-green-700">
                {product.lastMonth} টাকা
              </p>

              <p className="text-xs text-gray-600">
                গত মাসের তুলনামূলক দাম
              </p>
            </div>

          </div>

          {/* Market Prices */}
          <h2 className="mb-3 mt-5 text-base font-bold text-[#263229]">
            বাজারভিত্তিক আজকের দাম
          </h2>

          {product.markets.length > 0 ? (
            <div className="overflow-x-auto rounded-xl border border-[#e1e9e2]">
              <table className="w-full min-w-[650px] text-xs sm:text-sm">

                <thead className="bg-[#fafcfb] text-gray-500">
                  <tr>
                    <th className="p-3 text-left font-semibold">
                      বাজার
                    </th>

                    <th className="p-3 text-left font-semibold">
                      বিভাগ
                    </th>

                    <th className="p-3 text-right font-semibold">
                      সর্বনিম্ন
                    </th>

                    <th className="p-3 text-right font-semibold">
                      সর্বাধিক
                    </th>

                    <th className="p-3 text-right font-semibold">
                      গড়
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {product.markets.map((market, index) => {
                    const averagePrice =
                      (market.min + market.max) / 2;

                    return (
                      <tr
                        key={`${market.market}-${index}`}
                        className={`border-t border-[#dce3dd] ${
                          index % 2 === 0
                            ? "bg-[#fafcfb]"
                            : "bg-[#f0f5f1]"
                        } hover:bg-green-50`}
                      >
                        <td className="p-3 font-medium text-[#263229]">
                          {market.market}
                        </td>

                        <td className="p-3 text-gray-700">
                          {market.division}
                        </td>

                        <td className="p-3 text-right">
                          {market.min} টাকা
                        </td>

                        <td className="p-3 text-right">
                          {market.max} টাকা
                        </td>

                        <td className="p-3 text-right font-semibold text-[#263229]">
                          {averagePrice
                            .toFixed(2)
                            .replace(/\.00$/, "")} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>
          ) : (
            <p className="rounded-lg bg-[#f0f5f1] p-4 text-sm text-gray-500">
              এই পণ্যের বাজারভিত্তিক তথ্য পাওয়া যায়নি।
            </p>
          )}

        </section>

        {/* Back to Home */}
        <div className="mt-5">
          <Link
            href="/"
            className="text-sm font-medium text-green-700 hover:text-green-900"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>
    </main>
  );
}
