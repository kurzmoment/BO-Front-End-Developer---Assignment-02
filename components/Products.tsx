import React, { useEffect, useState } from "react";
import Image from "next/image";
import Filters from "./Filters";
import ProductsShowcase from "./ProductsShowcase";
import { products } from "@/database";

function Products() {
  const pageSize: number = 6;
  const [visible, setVisible] = useState(false);
  const [filters, setFilters] = useState({
    s: "",
    sort: "",
  });
  const [filteredProducts, setFilteredProducts] = useState<{}>([]);

  useEffect(() => {
    let sortingProducts = products.filter(
      (p) => p.name.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0
    );
    if (filters.sort === "price") {
      sortingProducts.sort((a, b) => {
        const diff = a.price - b.price;
        if (diff === 0) return 0;
        const sign = Math.abs(diff) / diff;
        return filters.sort === "price" ? sign : -sign;
      });
    } else {
      sortingProducts.sort((a, b) => {
        if (a.name > b.name) {
          console.log("RETURN 1 | -1");
          return filters.sort === "alphabetically" ? -1 : 1;
        } else {
          console.log("RETURN 0");
          return 0;
        }
      });
    }
    setFilteredProducts(sortingProducts);
  }, [filters]);

  const sort = (sort: string) => {
    setFilters({
      ...filters,
      sort,
    });
  };

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
          <select name="sort" id="sort" onChange={(e) => sort(e.target.value)}>
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
          <ProductsShowcase filteredProducts={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Products;
