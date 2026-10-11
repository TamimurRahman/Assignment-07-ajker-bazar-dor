
import Image from "next/image";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-gray-800 shadow-sm">
      {/* Top Header */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex h-[62px] max-w-[1200px] items-center justify-between px-4 sm:px-6">

          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Image
              src="/Stack.png"
              width={30}
              height={30}
              alt="বাজার দর logo"
              className="h-[30px] w-[30px] rounded-lg object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-[17px] font-bold tracking-tight text-gray-800">
                বাজার দর
              </h1>

              <p className="mt-1 text-[9px] text-gray-500">
                {date}
              </p>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center">
            <UserInfo />
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-[1200px] px-3">
          <NavLinks />
        </div>
      </div>

      {/* Market Price Ticker */}
      <div className="border-b border-gray-200 bg-[#fafbf9]">
        <Marquee />
      </div>
    </header>
  );
};

export default Header;
