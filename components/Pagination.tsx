import React from "react";

type Props = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({ items, pageSize, currentPage, onPageChange }: Props) {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="pb-10 ">
      <ul className="flex gap-x-4 justify-center">
        {pages.map((page, i) => (
          <li
            key={i}
            className={page === currentPage ? `text-black` : `text-slate-500`}
          >
            <a
              className="text-2xl font-bold cursor-pointer"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
