import Heading from "@/components/backOffice/Heading";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgePercent,
  Boxes,
  CircleDollarSign,
  Cpu,
  ImageIcon,
  LayoutList,
  MoveRight,
  Percent,
  Sparkles,
  Store,
  Tag,
  Users2,
  Warehouse,
} from "lucide-react";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function page() {
  const { catalog, stats } = await getDashboardSnapshot();
  const spotlightProducts = catalog.products.slice(0, 4);
  const recentBanners = catalog.banners.slice(0, 3);
  const latestCategories = catalog.categories.slice(0, 4);

  const overviewCards = [
    {
      title: "Products",
      value: stats.totalProducts,
      note: "Live in the storefront catalog",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      value: stats.totalCategories,
      note: "Driving navigation and filtering",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Markets",
      value: stats.totalMarkets,
      note: "Distribution and pickup locations",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Suppliers",
      value: stats.totalFarmers,
      note: "Vendor and sourcing records",
      icon: Users2,
      href: "/dashboard/farmers",
    },
  ];

  const controlStats = [
    {
      label: "Inventory value",
      value: stats.inventoryValueLabel,
      note: "Priced from current product records",
      icon: CircleDollarSign,
    },
    {
      label: "Featured",
      value: stats.featuredProducts,
      note: "Items receiving priority visibility",
      icon: Tag,
    },
    {
      label: "Discounted",
      value: stats.discountedProducts,
      note: "Products with active markdowns",
      icon: Percent,
    },
    {
      label: "Coupons",
      value: stats.totalCoupons,
      note: "Promotion records available to run",
      icon: BadgePercent,
    },
  ];

  const agenticActions = [
    "Review discounted items with weak category coverage and move them into stronger discovery paths.",
    "Refresh the top banner set to match the current coupon load before the next campaign push.",
    "Prioritize new supplier products that can expand the thinnest categories first.",
  ];

  return (
    <div className="space-y-5">
      <section className="rounded-[2rem] border border-stone-200/80 bg-white/90 p-5 shadow-[0_24px_80px_-52px_rgba(28,25,23,0.5)] dark:border-stone-800 dark:bg-stone-950/70 md:p-6">
        <Heading
          eyebrow="Commerce overview"
          title="Run the store from one direct dashboard"
          description="Track the core catalog, promotion load, and selling surfaces without switching contexts. This view stays tied to the same data powering the storefront."
        />

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.3fr_0.95fr]">
          <div className="rounded-[1.75rem] bg-stone-950 p-5 text-stone-50 dark:bg-stone-100 dark:text-stone-950">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f1b84b]">
                  Executive snapshot
                </p>
                <p className="mt-3 max-w-xl font-titleFont text-3xl font-semibold tracking-[-0.05em] md:text-[2.4rem]">
                  Clean visibility into stock, promotions, categories, and selling channels.
                </p>
              </div>
              <Link
                href="/dashboard/products/new"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-950"
              >
                Add product
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {controlStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4 dark:border-stone-300/20 dark:bg-stone-950/10"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-300 dark:text-stone-700">
                        {item.label}
                      </p>
                      <Icon className="h-4 w-4 text-[#f1b84b] dark:text-stone-950" />
                    </div>
                    <p className="mt-3 font-titleFont text-2xl font-semibold tracking-[-0.04em]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-stone-300 dark:text-stone-700">
                      {item.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-stone-200 bg-[#f6f1e8] p-5 dark:border-stone-800 dark:bg-stone-900/70">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                    Promotion load
                  </p>
                  <p className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
                    {stats.totalBanners} banners, {stats.totalCoupons} coupons
                  </p>
                </div>
                <Link
                  href="/dashboard/banners"
                  className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 dark:border-stone-700 dark:text-stone-200"
                >
                  Manage
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
                Campaign surfaces are compact and ready to update without leaving the main workflow.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200/80 bg-white p-5 dark:border-stone-800 dark:bg-stone-900/70">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                    Category focus
                  </p>
                  <p className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
                    Keep discovery structured
                  </p>
                </div>
                <LayoutList className="h-5 w-5 text-stone-400" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {latestCategories.map((category) => (
                  <span
                    key={category.id}
                    className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-xs font-medium text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-[1.5rem] border border-stone-200/80 bg-white/92 p-4 shadow-[0_18px_60px_-48px_rgba(28,25,23,0.45)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_-46px_rgba(28,25,23,0.55)] dark:border-stone-800 dark:bg-stone-950/70"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3e4c7] text-stone-950">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-stone-500 dark:text-stone-400" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                {card.title}
              </p>
              <div className="mt-2 flex items-end justify-between gap-3">
                <p className="font-titleFont text-3xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
                  {card.value}
                </p>
                <p className="max-w-[11rem] text-right text-xs leading-5 text-stone-500 dark:text-stone-400">
                  {card.note}
                </p>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[1.75rem] border border-stone-200/80 bg-stone-950 p-5 text-stone-50 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-100 dark:text-stone-950">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f1b84b] dark:text-stone-700">
                Agentic layer
              </p>
              <h3 className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em]">
                The dashboard should tell you what to do next
              </h3>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 dark:bg-stone-900/10">
              <Cpu className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {agenticActions.map((action, index) => (
              <div
                key={action}
                className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 dark:border-stone-300/20 dark:bg-stone-950/10"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f1b84b] text-[11px] font-bold text-stone-950">
                  0{index + 1}
                </span>
                <p className="text-sm leading-6 text-stone-200 dark:text-stone-800">{action}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-stone-200/80 bg-white/95 p-5 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
            Suggested automation
          </p>
          <h3 className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
            High-confidence next moves
          </h3>

          <div className="mt-4 space-y-3">
            <div className="rounded-[1.3rem] border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/60">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-stone-600 dark:text-stone-300" />
                  <p className="text-sm font-medium text-stone-950 dark:text-stone-50">Promotion alignment</p>
                </div>
                <span className="rounded-full bg-[#f3e4c7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-950">
                  Ready
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                Pair active coupons with the strongest banners and surface them into one approval flow.
              </p>
            </div>

            <div className="rounded-[1.3rem] border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/60">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <MoveRight className="h-4 w-4 text-stone-600 dark:text-stone-300" />
                  <p className="text-sm font-medium text-stone-950 dark:text-stone-50">Inventory routing</p>
                </div>
                <span className="rounded-full border border-stone-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 dark:border-stone-700 dark:text-stone-200">
                  Monitor
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                Push thin categories and supplier additions into a single replenishment watchlist.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.25fr_0.95fr]">
        <section className="rounded-[1.75rem] border border-stone-200/80 bg-white/95 p-5 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                Storefront live view
              </p>
              <h3 className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
                Best visible product rows
              </h3>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 dark:border-stone-700 dark:text-stone-200"
            >
              View shop
              <Store className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {spotlightProducts.map((item) => (
              <div
                key={item._id}
                className="rounded-[1.35rem] border border-stone-200 bg-stone-50 p-3 dark:border-stone-800 dark:bg-stone-900/60"
              >
                <div className="mb-3 overflow-hidden rounded-[1rem] bg-white dark:bg-stone-800">
                  <img src={item.img} alt={item.productName} className="h-36 w-full object-cover" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-titleFont text-base font-semibold text-stone-950 dark:text-stone-50">
                      {item.productName}
                    </p>
                    <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{item.category}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 dark:bg-stone-800 dark:text-stone-100">
                    Ksh {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-stone-200/80 bg-white/95 p-5 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
            Merchandising queue
          </p>
          <h3 className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
            Active banners and promo readiness
          </h3>

          <div className="mt-4 space-y-3">
            {recentBanners.map((banner) => (
              <div
                key={banner.id}
                className="rounded-[1.35rem] border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f3e4c7] text-stone-950">
                      <ImageIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-950 dark:text-stone-50">{banner.title}</p>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">
                        {banner.link}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/dashboard/banners"
                    className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-50"
                  >
                    Manage
                  </Link>
                </div>
              </div>
            ))}

            <div className="rounded-[1.35rem] border border-stone-200 bg-[#f6f1e8] p-4 dark:border-stone-800 dark:bg-stone-900/70">
              <div className="flex items-start gap-3">
                <BadgePercent className="mt-1 h-5 w-5 text-stone-700" />
                <div>
                  <p className="font-medium text-stone-950 dark:text-stone-50">{stats.totalCoupons} live coupon records</p>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">
                    Promotions stay near banner controls so campaigns can be reviewed as one merchandising set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
