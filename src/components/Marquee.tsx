
import MarqueeText from "react-fast-marquee";

interface Headlines {
  id: number;
  nameBn: string;
  today: number;
  unit: string;
  change: {
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch market prices");
  }

  const data: Headlines[] = await res.json();

  const filteredHeadlines = data.filter(
    (item) => item.change.pct !== 0
  );

  return (
    <div className="mx-auto max-w-[1400px]">
      <MarqueeText
        direction="left"
        speed={35}
        pauseOnHover
        gradient={false}
      >
        {filteredHeadlines.map((item) => (
          <div
            key={item.id}
            className="flex shrink-0 items-center gap-1.5 border-r border-gray-200 px-4 py-1.5 text-[10px] sm:text-[11px]"
          >
            <span className="font-medium text-gray-700">
              {item.nameBn}
            </span>

            <span className="whitespace-nowrap text-gray-600">
              {item.today} টাকা/{item.unit}
            </span>

            <span
              className={`whitespace-nowrap font-semibold ${
                item.change.pct > 0
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {item.change.pct > 0 ? "▲" : "▼"}{" "}
              {Math.abs(item.change.pct)}%
            </span>
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
