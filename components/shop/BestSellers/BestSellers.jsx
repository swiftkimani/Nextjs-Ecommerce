import ProductHeading from "../Products/ProductHeading";
import ShopProduct from "../Products/ShopProduct";

const BestSellers = ({ items = [] }) => (
  <div className="w-full pb-20">
    <ProductHeading heading="Our Bestsellers" />
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      {items.map((item) => (
        <ShopProduct key={item._id} {...item} />
      ))}
    </div>
  </div>
);

export default BestSellers;
