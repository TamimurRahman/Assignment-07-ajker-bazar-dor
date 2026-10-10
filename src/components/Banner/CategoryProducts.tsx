
"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const CategoryProducts = ({
  products,
}: {
  products: Product[];
}) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.today - b.today);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <>
      <section className="rounded-xl bg-white p-4">
        <label htmlFor="sort">সাজান: </label>

        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded border p-2"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
