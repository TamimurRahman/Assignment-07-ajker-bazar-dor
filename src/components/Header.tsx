
import Image from "next/image";
import React, { Suspense } from "react";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";
import UserInfo from "./UserInfo";
import HeaderDate from "./HeaderDate";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      {/* Top Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Logo and Title */}

        <div className="flex shrink-0 items-center gap-2">
          <Link href={'/'}>
          <Image
            src="/Stack.png"
            width={45}
            height={45}
            alt="বাজার দর logo"
            priority
          />
</Link>
          <div>
            <h1 className="text-lg font-bold text-[#263229] sm:text-xl">
              বাজার দর
            </h1>
            <div className="text-xs text-gray-500">
              <HeaderDate />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="shrink-0">
          <UserInfo />
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
          <NavLinks />
        </div>
      </nav>

      {/* Marquee */}
      <div className="border-t border-gray-100 bg-[#f0f5f1]">
        <Suspense fallback={<div className="h-8" />}>
          <Marquee />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
