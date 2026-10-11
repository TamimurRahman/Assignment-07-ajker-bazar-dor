
import Link from "next/link";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  let data: Navs[] = [];

  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/categories"
    );

    if (!res.ok) {
      throw new Error(`Categories API failed: ${res.status}`);
    }

    data = await res.json();
  } catch (error) {
    console.error("NavLinks fetch error:", error);
    throw error;
  }

  return (
    <div className="flex gap-2">
      {data.map((n) => (
        <Link key={n.id} href={`/category/${n.slug}`}>
          <span>{n.icon}</span> {n.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
