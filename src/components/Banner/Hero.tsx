import React from "react";
import Image from "next/image";
import Link from "next/link";

// Put your image in the /public folder (e.g. public/basket.png)
// and change this path if your file has a different name.
const HERO_IMAGE = "/bazar-hero.png";

const Hero = () => {
  const today = new Date();
  const weekday = new Intl.DateTimeFormat("bn-BD", { weekday: "long" }).format(today);
  const dayMonthYear = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(today)
    .replace(/(\S+)\s(\S+)\s(\S+)/, "$1 $2, $3");

  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-100 mt-10 bg-gradient-to-br from-white to-emerald-50/60 px-6 py-8 sm:px-10 sm:py-10 container mx-auto">
      {/* Text side */}
      <div className="relative z-10 max-w-xl">
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
          {weekday}, {dayMonthYear}
        </span>

        <h1 className="mt-3 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়,
          সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          সব দাম দেখুন
        </Link>
      </div>

      {/* Image side */}
      <Image
        src={HERO_IMAGE}
        alt=""
        width={320}
        height={260}
        priority
        className="pointer-events-none absolute bottom-0 right-4 hidden h-auto w-56 sm:block md:right-12 md:w-72"
      />
    </div>
  );
};

export default Hero;