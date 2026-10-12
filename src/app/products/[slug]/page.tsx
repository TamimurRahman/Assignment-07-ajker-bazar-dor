
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
          <h1 className="text-xl font-bold text-gray-800">
            ৪০৪ - পণ্য পাওয়া যায়নি
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            দুঃখিত, এই পণ্যটি খুঁজে পাওয়া যায়নি।
          </p>

          <Link
            href="/"
            className="btn mt-4 border-none bg-green-700 text-white hover:bg-green-800"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

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
              <span className="font-medium text-gray-800">
                {product.nameBn}
              </span>
            </li>
          </ul>
        </div>

        {/* Product Details */}
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-green-50 text-4xl">
              {product.image}
            </div>

            <div className="min-w-0">
              <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                {product.nameBn}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {product.categoryNameBn} · প্রতি {product.unit}
              </p>
            </div>

            <div className="sm:ml-auto sm:text-right">
              <p className="text-sm text-gray-500">
                আজকের দাম
              </p>

              <p className="text-2xl font-bold text-green-700">
                {product.today} টাকা
              </p>

              <p
                className={`mt-1 text-sm font-medium ${
                  product.change.dir === "up"
                    ? "text-red-600"
                    : product.change.dir === "down"
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {product.change.dir === "up"
                  ? "↑ দাম বেড়েছে"
                  : product.change.dir === "down"
                  ? "↓ দাম কমেছে"
                  : "— দাম অপরিবর্তিত"}{" "}
                {product.change.pct}%
              </p>
            </div>

          </div>
        </section>

        {/* Price History */}
        <section className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            দামের সাম্প্রতিক রেকর্ড
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            <div className="rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-500">
                গতকাল
              </p>
              <p className="mt-1 font-bold text-gray-800">
                {product.yesterday} টাকা
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-500">
                গত সপ্তাহ
              </p>
              <p className="mt-1 font-bold text-gray-800">
                {product.lastWeek} টাকা
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-500">
                গত মাস
              </p>
              <p className="mt-1 font-bold text-gray-800">
                {product.lastMonth} টাকা
              </p>
            </div>

          </div>

          {/* Market Prices */}
          <h2 className="mb-3 mt-6 text-lg font-bold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>

          {product.markets.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[550px] text-sm">

                <thead className="bg-gray-50 text-gray-600">
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
                      সর্বোচ্চ
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {product.markets.map((market, index) => (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-t border-gray-100 hover:bg-gray-50"
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
          ) : (
            <p className="rounded-lg bg-gray-50 p-4 text-sm text-gray-500">
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
