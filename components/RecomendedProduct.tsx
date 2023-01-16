import React from "react";
import { products } from "../database";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";

function RecomendedProduct() {
  const dispatch = useDispatch();

  return (
    <div>
      {products
        .filter((p) => p.featured === true)
        .map((p, i) => (
          <div key={i}>
            <div className="flex sm:justify-between justify-center sm:pl-20 pt-10 sm:pr-20">
              <div className="text-xl md:text-2xl font-bold">{p.name}</div>
              <button
                onClick={() => dispatch(addToCart(p))}
                className="bg-black hidden sm:flex text-white pl-2 pr-2 pt-2 pb-2 md:pl-5 md:pr-5 font-semibold text-sm md:text-lg"
              >
                ADD TO CART
              </button>
            </div>
            {/* h-2/4 w-3/4 sm:w-1/2 flex pt-10 m-auto relative text-center */}
            <div className="sm:p-20 p-10">
              <div className="w-full sm:h-[800px] h-[400px] flex pt-10 relative text-center">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  className="object-cover"
                  // width={1260}
                  // height={750}
                />
                <p className="absolute bg-white p-2 font-semibold bottom-0">
                  Photo of the day
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-5">
              <a
                onClick={() => dispatch(addToCart(p))}
                className="bg-black text-white text-center w-3/4 pt-2 pb-2 font-semibold text-md md:hidden"
              >
                ADD TO CART
              </a>
            </div>

            <div className="flex lg:flex-row flex-col justify-between p-10 lg:pr-20 lg:pl-20 pt-10">
              <div className="lg:w-1/2">
                <h3 className="font-bold">About the {p.name}</h3>
                <p className="mt-2 text-slate-400 font-semibold">
                  {p.category}
                </p>
                <p className="mt-4 ">{p.details?.description}</p>
              </div>
              <div>
                <h3 className="font-bold lg:text-right  pt-4 lg:p-0">
                  People also buy
                </h3>
                <div className="flex">
                  {p.details?.recommendations.map((r, i) => (
                    <div
                      key={i}
                      className="mt-5 m-2 relative w-full sm:h-52 h-24 aspect-square fill-current overflow-hidden "
                    >
                      <Image
                        src={r.src}
                        alt={r.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h4 className="lg:text-right pt-5 font-bold">Details</h4>
                <p className="lg:text-right text-slate-400">
                  Size: {p.details?.dimmentions.height} x{" "}
                  {p.details?.dimmentions.width} pixel
                </p>
                <p className="lg:text-right text-slate-400">
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
