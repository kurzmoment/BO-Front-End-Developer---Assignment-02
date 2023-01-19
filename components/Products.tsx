import React, { useEffect, useState } from "react";
import Image from "next/image";
import Filters from "./Filters";
import ProductsShowcase from "./ProductsShowcase";
import { products } from "@/database";
import { sorter } from "@/helpers/sorter";

function Products() {
  const [visible, setVisible] = useState(false);
  const [filters, setFilters] = useState({
    s: "",
    sort: "",
  });
  const [filteredProducts, setFilteredProducts] = useState<{}>([]);
  const [category, setCategory] = useState<string[]>([""]);

  const chooseCategory = (category: string): void => {
    if (category === "") {
      setCategory([]);
    }
    setCategory((prevState) => [...prevState, category]);
  };

  useEffect(() => {
    let sortingProducts = sorter(products, filters);
    setFilteredProducts(
      category.length > 1
        ? sortingProducts.filter((a) => {
            if (category.includes(a.category)) {
              return a;
            }
          })
        : sortingProducts
    );
  }, [filters, category]);

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
          <Filters
            visible={visible}
            chooseCategory={chooseCategory}
            category={category}
          />
          <div className="flex pt-4 gap-x-3 self-center">
            <p className="text-slate-500 font-md">Sort By</p>
            <select
              name="sort"
              id="sort"
              onChange={(e) => sort(e.target.value)}
            >
              <option value="price">Price</option>
              <option value="alphabetically ">Alphabetically</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row ">
        <Filters chooseCategory={chooseCategory} category={category} />
        <div className="flex-1 ">
          <ProductsShowcase
            filteredProducts={filteredProducts}
            category={category}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
