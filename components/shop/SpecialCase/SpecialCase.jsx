"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";

const SpecialCase = () => {
  const products = useSelector((state) => state.shanny.products);

  return (
    <div className="fixed right-4 top-56 z-20 hidden md:flex flex-col gap-3">
      <Link href="/signin">
        <div className="group flex h-[78px] w-[78px] flex-col items-center justify-center gap-1 rounded-[1.4rem] border border-stone-200 bg-white/95 text-stone-700 shadow-[0_20px_45px_-30px_rgba(28,25,23,0.55)] overflow-x-hidden cursor-pointer">
          <div className="flex justify-center items-center">
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">Profile</p>
        </div>
      </Link>
      <Link href="/cart">
        <div className="group relative flex h-[78px] w-[78px] flex-col items-center justify-center gap-1 rounded-[1.4rem] border border-stone-200 bg-white/95 text-stone-700 shadow-[0_20px_45px_-30px_rgba(28,25,23,0.55)] overflow-x-hidden cursor-pointer">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">Cart</p>
          {products.length > 0 && (
            <p className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f1b84b] text-[10px] font-semibold text-stone-950">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
