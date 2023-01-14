import React from "react";
import Image from "next/image";

function Products() {
  return (
    <div className="flex justify-between sm:pt-10 pt-5 pl-10 pr-10 sm:pl-20 sm:pr-20">
      <div className="flex">
        <h3 className="font-bold sm:text-2xl">Photography /</h3>
        <h3 className="font-bold text-slate-500 sm:text-2xl">
          &nbsp;Premium Photos
        </h3>
      </div>
      <div className="hidden sm:flex gap-x-3 self-center">
        <p className="text-slate-500 font-md">Sort By</p>
        <select name="sort" id="sort">
          <option value="price">Price</option>
          <option value="alphabetically ">Alphabetically</option>
        </select>
      </div>
      <button className="sm:hidden">
        <Image src={"./Slider.svg"} alt={"slider"} width={30} height={30} />
      </button>
    </div>
  );
}

export default Products;
