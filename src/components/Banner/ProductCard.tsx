
interface ProductCardProps {
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
  image,
  nameBn,
  unit,
  today,
  change,
}: ProductCardProps) => {
  return (
    <div className="rounded-2xl border border-[#e0e7e1] bg-[#fafcfb] p-4 text-[#263229]">
      {/* Product information */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f1] text-2xl">
          {image}
        </div>

        <div>
          <h3 className="text-sm font-bold">{nameBn}</h3>
          <p className="text-xs text-[#68736b]">
            প্রতি {unit === "kg" ? "কেজি" : unit}
          </p>
        </div>
      </div>

      {/* Price and percentage */}
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-xs text-[#68736b]">আজকের দাম</p>
          <p className="mt-0.5 text-lg font-bold">
            {today.toLocaleString("bn-BD")} টাকা
          </p>
        </div>

        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${
            change.dir === "up"
              ? "bg-red-50 text-red-600"
              : change.dir === "down"
                ? "bg-green-50 text-green-600"
                : "bg-gray-100 text-gray-500"
          }`}
        >
          {change.dir === "up"
            ? "▲"
            : change.dir === "down"
              ? "▼"
              : "—"}{" "}
          {Math.abs(change.pct).toLocaleString("bn-BD")}%
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
