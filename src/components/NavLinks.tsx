
import Link from "next/link";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: Navs[] = await res.json();

  return (
    <nav
      aria-label="Product categories"
      className="scrollbar-hide flex h-[36px] items-center justify-center gap-5 overflow-x-auto whitespace-nowrap"
    >
      {data.map((n) => (
        <Link
          key={n.id}
          href={`/category/${n.slug}`}
          className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-gray-600 transition-colors hover:text-green-700"
        >
          <span className="text-[11px]">{n.icon}</span>
          <span>{n.nameBn}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
