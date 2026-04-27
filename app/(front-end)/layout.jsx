import { getCatalogSnapshot } from "@/lib/catalog";
import StoreProvider from "@/store/StoreProvider";
import ShopHeader from "@/components/shop/Header/ShopHeader";
import ShopHeaderBottom from "@/components/shop/Header/ShopHeaderBottom";
import SpecialCase from "@/components/shop/SpecialCase/SpecialCase";
import ShopFooter from "@/components/shop/Footer/ShopFooter";
import ShopFooterBottom from "@/components/shop/Footer/ShopFooterBottom";

export default async function ShopLayout({ children }) {
  const catalog = await getCatalogSnapshot();

  return (
    <StoreProvider>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(244,238,228,0.92)_32%,_#ebe4d7_100%)] text-stone-900 font-bodyFont">
        <ShopHeader />
        <ShopHeaderBottom
          searchProducts={catalog.products}
          categories={catalog.categories}
        />
        <SpecialCase />
        {children}
        <ShopFooter />
        <ShopFooterBottom />
      </div>
    </StoreProvider>
  );
}
