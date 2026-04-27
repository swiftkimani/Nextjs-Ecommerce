"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import Pagination from "@/components/shop/Pagination";
import ProductBanner from "@/components/shop/ProductBanner";
import ShopSideNav from "@/components/shop/ShopSideNav";

export default function ShopPageClient({ products = [], categories = [] }) {
  const [itemsPerPage, setItemsPerPage] = useState(12);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav categories={categories} />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={(n) => setItemsPerPage(n)} />
          <Pagination itemsPerPage={itemsPerPage} items={products} />
        </div>
      </div>
    </div>
  );
}
