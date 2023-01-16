import React, { useState } from "react";
import Image from "next/image";
import Cart from "./Cart";

function Navbar() {
  const [visible, setVisible] = useState(false);
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
        <div
          className="cursor-pointer"
          onClick={() => (visible ? setVisible(false) : setVisible(true))}
        >
          <Image
            src={"./shopping-cart.svg"}
            alt="shoping cart"
            width={30}
            height={30}
          />
        </div>
        <div
          className={
            visible
              ? "z-50 w-fit h-fit sm:right-10 right-0 mt-[55px]  p-2 bg-white absolute border border-slate-600"
              : "hidden"
          }
        >
          <Cart />
        </div>
      </div>
      <div className="border-b-2 border border-slate-400 mt-10 b"></div>
    </nav>
  );
}

export default Navbar;
