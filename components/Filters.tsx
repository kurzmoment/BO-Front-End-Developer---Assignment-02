import React from "react";
import { products } from "../database";

type Props = {
  visible?: boolean;
};

function Filters({ visible }: Props) {
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
            type="checkbox"
            name={p}
            id={p}
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
            name="lower"
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
            name="stbetween"
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
            name="ndbetween"
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
            name="more"
            id="more"
            className="accent-slate-900 rounded "
          />
          <label htmlFor="more" className="">
            More than $200
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
