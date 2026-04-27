import { cache } from "react";
import { prisma, isDatabaseConfigured } from "@/lib/prisma";
import {
  allProducts as fallbackAllProducts,
  bestSellersData,
  newArrivalsData,
  specialOffersData,
} from "@/constants/shopData";

const fallbackBanners = [
  { id: "banner-1", title: "Smart living", link: "/shop", imageUrl: "/shop/banner/bannerImgOne.webp" },
  { id: "banner-2", title: "Premium audio", link: "/shop", imageUrl: "/shop/banner/bannerImgTwo.webp" },
  { id: "banner-3", title: "Seasonal offers", link: "/shop", imageUrl: "/shop/banner/bannerImgThree.webp" },
];

const fallbackCategories = [
  { id: "category-1", title: "Wearables", slug: "wearables" },
  { id: "category-2", title: "Audio", slug: "audio" },
  { id: "category-3", title: "Lifestyle", slug: "lifestyle" },
  { id: "category-4", title: "Accessories", slug: "accessories" },
];

const fallbackMarkets = [
  { id: "market-1", title: "Nairobi Flagship" },
  { id: "market-2", title: "Online Store" },
];

const fallbackFarmers = [
  { id: "farmer-1", name: "Shanny Supply" },
  { id: "farmer-2", name: "City Gadgets Hub" },
];

const fallbackCoupons = [
  { id: "coupon-1", title: "Welcome Offer", couponCode: "WELCOME10", expiryDate: "2026-12-31T00:00:00.000Z", isActive: true },
];

function dedupeProducts(products) {
  return Array.from(new Map(products.map((item) => [String(item._id), item])).values());
}

function formatPrice(value) {
  const number = Number(value ?? 0);
  return Number.isFinite(number) ? number.toFixed(2) : "0.00";
}

function normalizeFallbackProduct(product) {
  return {
    _id: String(product._id),
    slug: product.slug || String(product._id),
    img: product.img,
    productName: product.productName,
    price: formatPrice(product.price),
    originalPrice: formatPrice(product.originalPrice ?? product.price),
    color: product.color || "Standard",
    badge: Boolean(product.badge),
    des: product.des || "Shanny Shop curated item",
    category: product.category || "General",
    tags: product.tags || [],
  };
}

function normalizeDbProduct(product) {
  const categoryTitle = product.category?.title || "General";
  const salePrice = product.salePrice ? Number(product.salePrice) : null;
  const basePrice = Number(product.productPrice);
  const effectivePrice = salePrice ?? basePrice;

  return {
    _id: product.id,
    slug: product.slug,
    img: product.imageUrl || "/shop/products/newArrival/newArrOne.webp",
    productName: product.title,
    price: formatPrice(effectivePrice),
    originalPrice: formatPrice(basePrice),
    color: categoryTitle,
    badge: product.isFeatured || salePrice !== null,
    des: product.description || `${product.title} from the Shanny catalog.`,
    category: categoryTitle,
    tags: product.tags || [],
    sku: product.sku || "",
  };
}

function buildCollections(products) {
  return {
    newArrivals: products.slice(0, 8),
    bestSellers: products.filter((item) => item.badge).slice(0, 8),
    specialOffers: products
      .filter((item) => Number(item.originalPrice) > Number(item.price))
      .slice(0, 8),
  };
}

function getFallbackCatalog() {
  const products = dedupeProducts(fallbackAllProducts).map(normalizeFallbackProduct);
  return {
    products,
    categories: fallbackCategories,
    banners: fallbackBanners,
    markets: fallbackMarkets,
    farmers: fallbackFarmers,
    coupons: fallbackCoupons,
    ...buildCollections(products),
  };
}

async function getDbCatalog() {
  const [productsRaw, categories, banners, markets, farmers, coupons] = await Promise.all([
    prisma.product.findMany({
      include: { category: true, farmer: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.category.findMany({
      include: { markets: true, _count: { select: { products: true } } },
      orderBy: { title: "asc" },
    }),
    prisma.banner.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.market.findMany({ orderBy: { title: "asc" } }),
    prisma.farmer.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.coupon.findMany({ orderBy: { createdAt: "desc" } }),
  ]);
  const fallbackCatalog = getFallbackCatalog();
  const products = productsRaw.length
    ? productsRaw.map(normalizeDbProduct)
    : fallbackCatalog.products;

  return {
    products,
    categories: categories.length
      ? categories.map((category) => ({
          id: category.id,
          title: category.title,
          slug: category.slug,
          productCount: category._count.products,
          markets: category.markets.map((market) => market.title),
        }))
      : fallbackCatalog.categories,
    banners: banners.length
      ? banners.map((banner) => ({
          id: banner.id,
          title: banner.title,
          link: banner.link,
          imageUrl: banner.imageUrl,
        }))
      : fallbackCatalog.banners,
    markets: markets.length
      ? markets.map((market) => ({
          id: market.id,
          title: market.title,
          slug: market.slug,
          logoUrl: market.logoUrl,
          description: market.description,
        }))
      : fallbackCatalog.markets,
    farmers: farmers.length
      ? farmers.map((farmer) => ({
          id: farmer.id,
          name: farmer.name,
          code: farmer.code,
          email: farmer.email,
        }))
      : fallbackCatalog.farmers,
    coupons: coupons.length
      ? coupons.map((coupon) => ({
          id: coupon.id,
          title: coupon.title,
          couponCode: coupon.couponCode,
          expiryDate: coupon.expiryDate.toISOString(),
          isActive: coupon.isActive,
        }))
      : fallbackCatalog.coupons,
    ...buildCollections(products),
  };
}

export const getCatalogSnapshot = cache(async () => {
  if (!isDatabaseConfigured) {
    return getFallbackCatalog();
  }

  try {
    return await getDbCatalog();
  } catch (error) {
    console.error("Catalog fallback due to database error:", error);
    return getFallbackCatalog();
  }
});

export const getProductById = cache(async (id) => {
  const catalog = await getCatalogSnapshot();
  return catalog.products.find((product) => String(product._id) === String(id)) || null;
});

export async function getAdminFormOptions() {
  const catalog = await getCatalogSnapshot();

  return {
    categories: catalog.categories.map((category) => ({
      id: category.id,
      title: category.title,
    })),
    markets: catalog.markets.map((market) => ({
      id: market.id,
      title: market.title,
    })),
    farmers: catalog.farmers.map((farmer) => ({
      id: farmer.id,
      title: farmer.name,
    })),
  };
}

export function getLegacyCollections() {
  return {
    newArrivals: newArrivalsData.map(normalizeFallbackProduct),
    bestSellers: bestSellersData.map(normalizeFallbackProduct),
    specialOffers: specialOffersData.map(normalizeFallbackProduct),
  };
}
