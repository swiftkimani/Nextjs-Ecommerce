"use client";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const fallbackItems = [
  { id: "fallback-1", title: "New Arrivals", productCount: 0 },
  { id: "fallback-2", title: "Gadgets", productCount: 0 },
  { id: "fallback-3", title: "Accessories", productCount: 0 },
  { id: "fallback-4", title: "Electronics", productCount: 0 },
];

const Category = ({ categories = fallbackItems }) => {
  const items = categories.length ? categories : fallbackItems;

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
        {items.map(({ id, title, productCount }) => (
          <li
            key={id}
            className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
          >
            <span>{title}</span>
            {productCount > 0 ? (
              <span className="text-xs text-lightText">{productCount}</span>
            ) : (
              <span
                className="text-[10px] lg:text-xs text-gray-400"
              >
                <ImPlus />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
