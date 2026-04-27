import { getCatalogSnapshot } from "@/lib/catalog";

function toAmount(value) {
  const amount = Number(value ?? 0);
  return Number.isFinite(amount) ? amount : 0;
}

function formatCurrency(value) {
  return `Ksh ${new Intl.NumberFormat("en-KE", {
    maximumFractionDigits: 0,
  }).format(toAmount(value))}`;
}

export async function getDashboardSnapshot() {
  const catalog = await getCatalogSnapshot();
  const inventoryValue = catalog.products.reduce((sum, item) => sum + toAmount(item.price), 0);
  const discountedProducts = catalog.products.filter(
    (item) => toAmount(item.originalPrice) > toAmount(item.price)
  ).length;
  const featuredProducts = catalog.products.filter((item) => item.badge).length;

  return {
    catalog,
    stats: {
      totalProducts: catalog.products.length,
      totalCategories: catalog.categories.length,
      totalMarkets: catalog.markets.length,
      totalFarmers: catalog.farmers.length,
      totalCoupons: catalog.coupons.length,
      totalBanners: catalog.banners.length,
      inventoryValue,
      inventoryValueLabel: formatCurrency(inventoryValue),
      discountedProducts,
      featuredProducts,
    },
  };
}
