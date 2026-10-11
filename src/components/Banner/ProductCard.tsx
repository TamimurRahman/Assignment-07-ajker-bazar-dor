
import Link from "next/link";

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

const ProductCard = ({
  id,
  slug,
  image,
  nameBn,
  unit,
  today,
  change,
}: Product) => {
  return (
    <Link href={`/products/${slug}`}>
      <div className="cursor-pointer rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-2xl">
            {image}
          </div>

          <div>
            <h3 className="font-bold">{nameBn}</h3>
            <p className="text-sm text-gray-500">
              প্রতি {unit}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold">
            {today} টাকা
          </p>

          <p
            className={
              change.dir === "up"
                ? "text-red-600"
                : change.dir === "down"
                  ? "text-green-600"
                  : "text-gray-500"
            }
          >
            {change.dir === "up"
              ? "▲"
              : change.dir === "down"
                ? "▼"
                : "—"}{" "}
            {change.pct}%
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
