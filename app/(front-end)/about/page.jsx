import Link from "next/link";
import Breadcrumbs from "@/components/shop/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Shanny Shop</span>{" "}
          is one of the world&apos;s leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool looking style.
        </h1>
        <Link href="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}
