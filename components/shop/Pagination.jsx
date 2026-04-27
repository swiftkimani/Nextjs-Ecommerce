"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import ShopProduct from "./Products/ShopProduct";

function Items({ currentItems }) {
  return (
    <>
      {currentItems.map((item) => (
        <div key={item._id} className="w-full">
          <ShopProduct {...item} />
        </div>
      ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, items = [] }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const itemStart = itemOffset + 1;
  const itemEnd = Math.min(endOffset, items.length);

  const handlePageClick = (event) => {
    if (!items.length) return;
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />
        <p className="text-base font-normal text-lightText">
          Products from {items.length ? itemStart : 0} to {items.length ? itemEnd : 0} of {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
