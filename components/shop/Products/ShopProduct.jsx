"use client";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { addToCart } from "@/store/shannySlice";
import Badge from "./Badge";

const ShopProduct = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleProductDetails = () => {
    router.push(`/product/${props._id}`);
  };

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white shadow-[0_18px_60px_-40px_rgba(28,25,23,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(28,25,23,0.55)]">
        <div>
          <img className="h-[320px] w-full object-cover" src={props.img} alt={props.productName} />
        </div>
        <div className="absolute left-5 top-5">
          {props.badge && <Badge text="New" />}
        </div>
        <div className="absolute bottom-0 w-full translate-y-full bg-[linear-gradient(180deg,rgba(12,10,9,0)_0%,rgba(12,10,9,0.92)_18%,rgba(12,10,9,0.98)_100%)] p-5 transition duration-500 group-hover:translate-y-0">
          <ul className="flex h-full flex-col gap-3 font-titleFont text-stone-100">
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    productName: props.productName,
                    quantity: 1,
                    img: props.img,
                    badge: props.badge,
                    price: props.price,
                    color: props.color,
                    })
                )
              }
              className="flex w-full cursor-pointer items-center justify-between rounded-2xl border border-stone-700/60 bg-white/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.15em] transition hover:bg-white/20"
            >
              Add to Cart
              <span className="text-base">
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="flex w-full cursor-pointer items-center justify-between rounded-2xl border border-stone-700/60 bg-white/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.15em] transition hover:bg-white/20"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-2 py-5">
        <div className="mb-2 flex items-center justify-between gap-4 font-titleFont">
          <h2 className="text-lg font-bold text-stone-950">{props.productName}</h2>
          <p className="rounded-full bg-stone-100 px-3 py-1 text-[13px] font-semibold text-stone-700">
            Ksh {props.price}
          </p>
        </div>
        <p className="text-sm uppercase tracking-[0.14em] text-stone-500">{props.color}</p>
      </div>
    </div>
  );
};

export default ShopProduct;
