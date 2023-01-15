import React, { useState } from "react";
import Image from "next/image";

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
              ? " w-fit h-fit right-10 mt-[55px] p-2 bg-white absolute border border-slate-600"
              : "hidden"
          }
        >
          <div className="flex">
            <p className="text-lg font-bold">Your cart is empty</p>
            <Image
              onClick={() => setVisible(false)}
              src={"./x.svg"}
              alt={"x"}
              width={20}
              height={20}
              className={"cursor-pointer"}
            />
          </div>
        </div>
      </div>
      <div className="border-b-2 border border-slate-400 mt-10 b"></div>
    </nav>
  );
}

export default Navbar;
