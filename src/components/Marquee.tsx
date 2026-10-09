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
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

  const data = await res.json();
  const filterHeading: Headlines[] = data.filter((h:Headlines) => h.change.pct !== 0);
  return (
    <div>
      <MarqueeText direction="left" speed={40}>
        {filterHeading.map((h) => (
          <span key={h.id} className="mx-6">
            {h.nameBn} {h.today} টাকা/{h.unit}{" "}
            <span
              className={
                h.change.pct > 0
                  ? "text-red-500"
                  : h.change.pct < 0
                    ? "text-green-500"
                    : "text-gray-500"
              }
            >
              {h.change.pct > 0
                ? ` ▲ ${h.change.pct}%`
                : ` ▼ ${h.change.pct}%`}{" "}
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
