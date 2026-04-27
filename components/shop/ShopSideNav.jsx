import Category from "./shopBy/Category";
import Price from "./shopBy/Price";

const ShopSideNav = ({ categories = [] }) => (
  <div className="w-full flex flex-col gap-6">
    <Category categories={categories} />
    <Price />
  </div>
);

export default ShopSideNav;
