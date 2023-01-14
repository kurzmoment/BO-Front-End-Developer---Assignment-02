import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="">
      <div className="flex pl-10 pr-10 pt-10 justify-between">
        <div>
          <Image
            src={"./Group.svg"}
            alt="bejamas logo"
            width={200}
            height={50}
          />
        </div>
        <div>
          <Image
            src={"./shopping-cart.svg"}
            alt="shoping cart"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="border-b-2 border border-slate-400 mt-10 b"></div>
    </nav>
  );
}

export default Navbar;
