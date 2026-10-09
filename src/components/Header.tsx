import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  return (
    <div>
      <div>
        <Image src={"/Stack.png"} width={50} height={50} alt="logo nav"></Image>
        <div>
          <h1>বাজার দর</h1>
          <div>{date}</div>
        </div> 
      </div>
      <div>
        <button className="btn btn-sm">Sign In</button>
        <button className="btn btn-sm">Sign Up</button>
      </div>

      <NavLinks></NavLinks>
      <Marquee></Marquee>
    </div>
  );
};

export default Header;
