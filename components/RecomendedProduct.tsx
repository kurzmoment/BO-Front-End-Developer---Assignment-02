import React from "react";
import { products } from "../database";
import Image from "next/image";
function RecomendedProduct() {
  return (
    <div>
      {products
        .filter((p) => p.featured === true)
        .map((p, i) => (
          <div key={i}>
            <div className="flex justify-between pl-10 pt-10 pr-10">
              <div className="text-3xl font-bold">{p.name}</div>
              <button className="bg-black text-white pt-2 pb-2 pl-5 pr-5 font-semibold">
                ADD TO CART
              </button>
            </div>
            <div className="h-2/4 w-1/2 flex pt-10 m-auto relative text-center">
              <Image
                src={p.image.src}
                alt={p.image.alt}
                width={1260}
                height={750}
              />
              <p className="absolute bg-white p-2 font-semibold bottom-0">
                Photo of the day
              </p>
            </div>
            <div className="flex justify-between p-10">
              <div className="w-1/2">
                <h3 className="font-bold">About the {p.name}</h3>
                <p className="mt-2 text-slate-400 font-semibold">
                  {p.category}
                </p>
                <p className="mt-4 ">{p.details?.description}</p>
              </div>
              <div>
                <h3 className="font-bold text-right">People also buy</h3>
                <div className="flex">
                  {p.details?.recommendations.map((r, i) => (
                    <div key={i} className="pl-5 mt-5">
                      <Image src={r.src} alt={r.alt} width={128} height={0} />
                    </div>
                  ))}
                </div>
                <h4 className="text-right pt-5 font-bold">Details</h4>
                <p className="text-right text-slate-400">
                  Size: {p.details?.dimmentions.height} x{" "}
                  {p.details?.dimmentions.width} pixel
                </p>
                <p className="text-right text-slate-400">
                  Size: {p.details?.size} mb
                </p>
              </div>
            </div>
          </div>
        ))}
      <div className="border-b-2 border border-slate-400 mt-5 b"></div>
    </div>
  );
}

export default RecomendedProduct;
