import React from "react";
import { products } from "../database";

type Props = {
  visible?: boolean;
  chooseCategory: (arg: string) => void;
  category: string[] | undefined;
};

function Filters({ visible, chooseCategory, category }: Props) {
  var uniqueFilterEntries = Array.from(
    new Set(products.map((item) => item.category))
  );

  return (
    <div
      className={
        visible
          ? "sm:pl-20 sm:pt-10 sm:block block"
          : "sm:pl-20 sm:pt-10 sm:block hidden"
      }
    >
      <h4 className="text-lg font-bold">Category</h4>
      {uniqueFilterEntries.map((p, i) => (
        <div key={i} className="flex gap-x-3 content-center pt-2  ">
          <input
            onChange={() => chooseCategory(p)}
            type="checkbox"
            name={p}
            id={p}
            checked={category?.includes(p) ? true : false}
            className="accent-slate-900 rounded "
          />
          <label htmlFor={p} className="flex text-lg">
            {p}
          </label>
        </div>
      ))}
      <div className="border mt-2"></div>

      <div className="pt-2">
        <h4 className="text-lg font-bold">Price range</h4>
        <div className="flex gap-x-3 pt-2 content-center">
          <input
            type="checkbox"
            name="price_range"
            id="lower"
            className="accent-slate-900 rounded "
          />
          <label htmlFor="lower" className="">
            Lower than $20
          </label>
        </div>
        <div className="flex gap-x-3 pt-2 content-center">
          <input
            type="checkbox"
            name="price_range"
            id="stbetween"
            className="accent-slate-900 rounded "
          />
          <label htmlFor="stbetween" className="">
            $20 - $100
          </label>
        </div>
        <div className="flex gap-x-3 pt-2 content-center">
          <input
            type="checkbox"
            name="price_range"
            id="ndbetween"
            className="accent-slate-900 rounded "
          />
          <label htmlFor="ndbetween" className="">
            $100 - $200
          </label>
        </div>
        <div className="flex gap-x-3 pt-2 content-center">
          <input
            type="checkbox"
            name="price_range"
            id="more"
            className="accent-slate-900 rounded "
          />
          <label htmlFor="more" className="">
            More than $200
          </label>
        </div>
      </div>
      <div
        className="flex justify-center w-full border-2 border-black m-2 cursor-pointer"
        onClick={() => chooseCategory("")}
      >
        <p className="m-2 font-bold">Clear</p>
      </div>
    </div>
  );
}

export default Filters;
