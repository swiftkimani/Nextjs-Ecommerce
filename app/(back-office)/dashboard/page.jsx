import Heading from "@/components/backOffice/Heading";
import Link from "next/link";
import { ArrowUpRight, BadgePercent, Boxes, ImageIcon, LayoutList, Store, Users2, Warehouse } from "lucide-react";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function page() {
  const { catalog, stats } = await getDashboardSnapshot();
  const spotlightProducts = catalog.products.slice(0, 4);
  const recentBanners = catalog.banners.slice(0, 3);

  const overviewCards = [
    {
      title: "Products",
      value: stats.totalProducts,
      note: "Synced with storefront shelves",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      value: stats.totalCategories,
      note: "Used in navigation and discovery",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Markets",
      value: stats.totalMarkets,
      note: "Distribution and store points",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      value: stats.totalFarmers,
      note: "Supplier and partner records",
      icon: Users2,
      href: "/dashboard/farmers",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-[2.25rem] border border-stone-200/80 bg-white/90 p-7 shadow-[0_24px_80px_-50px_rgba(28,25,23,0.5)]">
        <Heading
          eyebrow="Dashboard overview"
          title="One control room for the storefront and catalog"
          description="The dashboard now reflects the same shared catalog layer used by the public site, so products, categories, coupons, and banners stay aligned."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.75rem] bg-stone-950 p-6 text-stone-50">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f1b84b]">
              Inventory value
            </p>
            <p className="mt-4 font-titleFont text-4xl font-semibold">{stats.inventoryValueLabel}</p>
            <p className="mt-2 text-sm text-stone-300">Based on current product pricing in the shared catalog.</p>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-[#f6f1e8] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
              Featured products
            </p>
            <p className="mt-4 font-titleFont text-4xl font-semibold text-stone-950">{stats.featuredProducts}</p>
            <p className="mt-2 text-sm text-stone-600">Flagged items now surface into the same merchandising flow.</p>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
              Discounted products
            </p>
            <p className="mt-4 font-titleFont text-4xl font-semibold text-stone-950">{stats.discountedProducts}</p>
            <p className="mt-2 text-sm text-stone-600">Sale pricing feeds storefront offer and comparison states.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-[1.75rem] border border-stone-200/80 bg-white/90 p-5 shadow-[0_18px_60px_-46px_rgba(28,25,23,0.45)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_-46px_rgba(28,25,23,0.55)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3e4c7] text-stone-950">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-stone-500" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                {card.title}
              </p>
              <p className="mt-2 font-titleFont text-4xl font-semibold text-stone-950">{card.value}</p>
              <p className="mt-2 text-sm text-stone-600">{card.note}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <section className="rounded-[1.9rem] border border-stone-200/80 bg-white/95 p-6 shadow-[0_22px_70px_-46px_rgba(28,25,23,0.45)]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Frontend connection
              </p>
              <h3 className="mt-2 font-titleFont text-2xl font-semibold text-stone-950">
                Storefront spotlight products
              </h3>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-700"
            >
              View shop
              <Store className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {spotlightProducts.map((item) => (
              <div key={item._id} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
                <div className="mb-4 overflow-hidden rounded-[1.2rem] bg-white">
                  <img src={item.img} alt={item.productName} className="h-44 w-full object-cover" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-titleFont text-lg font-semibold text-stone-950">{item.productName}</p>
                    <p className="mt-1 text-sm text-stone-500">{item.category}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-700">
                    Ksh {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.9rem] border border-stone-200/80 bg-white/95 p-6 shadow-[0_22px_70px_-46px_rgba(28,25,23,0.45)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            Merchandising content
          </p>
          <h3 className="mt-2 font-titleFont text-2xl font-semibold text-stone-950">
            Active banner inventory
          </h3>
          <div className="mt-5 space-y-4">
            {recentBanners.map((banner) => (
              <div key={banner.id} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3e4c7] text-stone-950">
                      <ImageIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-950">{banner.title}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-stone-500">{banner.link}</p>
                    </div>
                  </div>
                  <Link
                    href="/dashboard/banners"
                    className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-50"
                  >
                    Manage
                  </Link>
                </div>
              </div>
            ))}
            <div className="rounded-[1.5rem] border border-stone-200 bg-[#f6f1e8] p-5">
              <div className="flex items-start gap-3">
                <BadgePercent className="mt-1 h-5 w-5 text-stone-700" />
                <div>
                  <p className="font-medium text-stone-950">{stats.totalCoupons} live coupon records</p>
                  <p className="mt-1 text-sm text-stone-600">
                    Coupon data is maintained in the same dashboard flow and can be tied into storefront promotions next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
