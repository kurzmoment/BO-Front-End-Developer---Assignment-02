import React, { useState } from "react";
import Image from "next/image";
import Filters from "./Filters";
import ProductsShowcase from "./ProductsShowcase";

function Products() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-between sm:pt-10 pt-5 pl-10 pr-10 sm:pl-20 sm:pr-20">
        <div className="flex ">
          <h3 className="font-bold sm:text-2xl">Photography /</h3>
          <h3 className="font-bold text-slate-500 sm:text-2xl">
            &nbsp;Premium Photos
          </h3>
        </div>
        <div className="hidden sm:flex  gap-x-3 self-center">
          <p className="text-slate-500 font-md">Sort By</p>
          <select name="sort" id="sort">
            <option value="price">Price</option>
            <option value="alphabetically ">Alphabetically</option>
          </select>
        </div>
        <div className="flex flex-row justify-between sm:hidden absolute right-0 pr-10">
          <a
            onClick={() => (visible ? setVisible(false) : setVisible(true))}
            className=""
          >
            <Image src={"./Slider.svg"} alt={"slider"} width={30} height={30} />
          </a>
        </div>
        <div className="sm:hidden">
          <Filters visible={visible} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row ">
        <Filters />
        <div className="flex-1 ">
          <ProductsShowcase />
        </div>
      </div>
    </div>
  );
}

export default Products;
