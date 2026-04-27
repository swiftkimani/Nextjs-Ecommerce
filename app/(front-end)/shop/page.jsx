import { getCatalogSnapshot } from "@/lib/catalog";
import ShopPageClient from "@/components/shop/ShopPageClient";

export default async function ShopPage() {
  const catalog = await getCatalogSnapshot();

  return <ShopPageClient products={catalog.products} categories={catalog.categories} />;
}
