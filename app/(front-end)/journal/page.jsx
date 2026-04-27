import Link from "next/link";
import Breadcrumbs from "@/components/shop/Breadcrumbs";

export default function JournalPage() {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Shanny Shop</span>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis delectus vitae,
          aliquid sit iure dolorum commodi eum numquam voluptate!
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
