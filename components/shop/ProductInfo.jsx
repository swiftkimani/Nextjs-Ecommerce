"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/shannySlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">Ksh{productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo._id,
              productName: productInfo.productName,
              quantity: 1,
              img: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              color: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring collection, Streetwear, Women{" "}
        <span className="font-medium">Tags:</span> featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
