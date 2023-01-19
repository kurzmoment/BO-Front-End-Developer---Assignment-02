export const sorter = (products: Array<any>, filters: any) => {
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
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  return sortingProducts;
};
