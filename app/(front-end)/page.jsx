import Link from "next/link";
import { getCatalogSnapshot, getLegacyCollections } from "@/lib/catalog";
import BannerBottom from "@/components/shop/Banner/BannerBottom";
import NewArrivals from "@/components/shop/NewArrivals/NewArrivals";
import BestSellers from "@/components/shop/BestSellers/BestSellers";
import SpecialOffers from "@/components/shop/SpecialOffers/SpecialOffers";

export default async function HomePage() {
  const catalog = await getCatalogSnapshot();
  const legacyCollections = getLegacyCollections();
  const heroProducts = catalog.products.slice(0, 3);
  const heroCategories = catalog.categories.slice(0, 4);

  return (
    <div className="mx-auto w-full">
      <section className="px-4 pb-8 pt-4">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-950 px-7 py-10 text-stone-50 md:px-10 md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(241,184,75,0.34),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.14),_transparent_28%)]" />
            <div className="relative">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#f1b84b]">
                Rebuilt storefront
              </p>
              <h1 className="max-w-2xl font-titleFont text-4xl font-semibold leading-tight md:text-6xl">
                Shanny now looks like a modern commerce brand, not a copied template.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-stone-300 md:text-lg">
                Discover curated electronics, accessory drops, and practical lifestyle pieces in a
                cleaner storefront tied directly to your admin dashboard.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-full bg-[#f1b84b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-[#ffd27a]"
                >
                  Shop the collection
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-100 transition hover:border-stone-50"
                >
                  Open dashboard
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Catalog items", value: `${catalog.products.length}+` },
                  { label: "Categories", value: `${catalog.categories.length || 4}` },
                  { label: "Store coverage", value: "Nairobi +" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[1.6rem] border border-stone-800 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2.2rem] border border-stone-200/80 bg-white/90 p-6 shadow-[0_20px_60px_-38px_rgba(28,25,23,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Top lanes
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {heroCategories.map((category) => (
                  <span
                    key={category.id}
                    className="rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-700"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {heroProducts.map((item, index) => (
                <div
                  key={item._id}
                  className="rounded-[2rem] border border-stone-200/80 bg-white/90 p-4 shadow-[0_18px_55px_-40px_rgba(28,25,23,0.45)]"
                >
                  <div className="mb-4 overflow-hidden rounded-[1.4rem] bg-stone-100">
                    <img src={item.img} alt={item.productName} className="h-44 w-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-titleFont text-base font-semibold text-stone-950">{item.productName}</p>
                    <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-stone-500">{item.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BannerBottom />
      <div className="mx-auto max-w-container px-4 pt-6">
        <NewArrivals items={catalog.newArrivals.length ? catalog.newArrivals : legacyCollections.newArrivals} />
        <BestSellers items={catalog.bestSellers.length ? catalog.bestSellers : legacyCollections.bestSellers} />
        <SpecialOffers
          items={catalog.specialOffers.length ? catalog.specialOffers : legacyCollections.specialOffers}
        />
      </div>
    </div>
  );
}
