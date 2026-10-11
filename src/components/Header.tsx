import Image from "next/image";
import React, { Suspense } from "react";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";
import UserInfo from "./UserInfo";
import HeaderDate from "./HeaderDate";

const Header = () => {
  return (
    <div>
      <div>
        <Image
          src="/Stack.png"
          width={50}
          height={50}
          alt="logo nav"
        />

        <div>
          <h1>বাজার দর</h1>
          <HeaderDate />
        </div>
      </div>

      <UserInfo />
      <NavLinks />

      <Suspense fallback={<div>&nbsp;</div>}>
        <Marquee />
      </Suspense>
    </div>
  );
};

export default Header;