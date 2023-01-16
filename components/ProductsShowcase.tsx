import React, { useState } from "react";
import { products } from "../database";
import Image from "next/image";
import Pagination from "./Pagination";
import { paginate } from "@/helpers/paginate";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";

function ProductsShowcase() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize: number = 6;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(products, currentPage, pageSize);
  console.log(paginatedPosts.filter((p) => p.bestseller === true));

  return (
    <div className="pt-10 sm:pl-20 pl-10 pr-10 sm:pr-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10">
        {paginatedPosts
          .filter((p, i) => p.featured !== true)
          .map((p, i) => (
            <div key={i} className="">
              <div className="relative">
                {p.bestseller === true && (
                  <p className="text-lg ">Best Seller</p>
                )}
                <div className="relative w-full h-96 aspect-square fill-current overflow-hidden">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={() => dispatch(addToCart(p))}
                  className="bg-black w-full text-white pl-2 pr-2 pt-2 pb-2 font-semibold text-lg text-center absolute bottom-0"
                >
                  ADD TO CART
                </button>
              </div>
              <div className="flex flex-col gap-y-1 pt-2">
                <p className="text-lg font-semibold text-slate-600">
                  {p.category}
                </p>
                <h3 className="text-2xl font-bold ">{p.name}</h3>
                <p className="text-xl font-bold text-slate-600">${p.price}</p>
              </div>
            </div>
          ))}
      </div>
      <div>
        <Pagination
          items={products.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default ProductsShowcase;
