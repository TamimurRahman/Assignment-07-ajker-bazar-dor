
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  slug: string;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const Banner = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  const priceHighProducts = products.filter(
    (p) => p.change.dir === "up"
  );

  const priceLowProducts = products.filter(
    (p) => p.change.dir === "down"
  );

  return (
    <main className="space-y-8 bg-[#f0f5f1] p-4 text-[#263229] sm:p-6">

      {/* Price increased */}
      <section>
        <h2 className="mb-4 font-bold">
          <span className="text-red-600">▲</span>{" "}
          আজ দাম বেড়েছে
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priceHighProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* Price decreased */}
      <section>
        <h2 className="mb-4 font-bold">
          <span className="text-green-600">▼</span>{" "}
          আজ দাম কমেছে
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priceLowProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* All products */}
      <section>
        <h2 className="mb-1 font-bold">সব পণ্য</h2>

        <p className="mb-4 text-xs text-gray-500">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

    </main>
  );
};

export default Banner;
