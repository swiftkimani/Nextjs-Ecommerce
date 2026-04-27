"use client";
import { usePathname } from "next/navigation";
import { HiOutlineChevronRight } from "react-icons/hi";

const Breadcrumbs = ({ title, prevLocation = "Home" }) => {
  const pathname = usePathname();
  const currentSegment = pathname.split("/").filter(Boolean).pop() || "home";

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
      <h1 className="text-5xl text-primeColor font-titleFont font-bold">{title}</h1>
      <p className="text-sm font-normal text-lightText capitalize flex items-center">
        <span>{prevLocation === "" ? "Home" : prevLocation}</span>
        <span className="px-1">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize font-semibold text-primeColor">{currentSegment}</span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
