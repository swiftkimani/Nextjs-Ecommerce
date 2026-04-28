"use client";
import Link from "next/link";
import {
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  MonitorPlay,
  ScanSearch,
  Settings2,
  Package,
  Truck,
  User,
  Users2,
  UserSquare2,
  Warehouse,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export default function Sidebar({ showSideBar, setShowSideBar }) {
  const pathName = usePathname();
  const sideBarLink = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Suppliers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Team",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Campaigns",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Payouts",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings2,
      href: "/dashboard/settings",
    },
  ];
  const CatalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      icon: MonitorPlay,
      href: "/dashboard/banners",
    },
  ];

  const [openMenu, setOpenMenu] = useState(true);
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen w-72 overflow-y-auto border-r border-stone-200/80 bg-[rgba(255,255,255,0.94)] text-stone-800 shadow-2xl shadow-stone-200/60 backdrop-blur-xl transition-transform duration-300 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 dark:shadow-black/30 ${
        showSideBar ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <Link className="block px-5 pb-5 pt-6" href="/dashboard">
        <div className="rounded-[1.6rem] border border-stone-200 bg-stone-100/90 p-4 dark:border-stone-800 dark:bg-stone-900/80">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1b84b] text-sm font-bold uppercase tracking-[0.3em] text-stone-950">
              SS
            </div>
            <div>
              <p className="font-titleFont text-base font-semibold tracking-[0.14em] text-stone-950 dark:text-stone-50">
                SHANNY
              </p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                Commerce OS
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">Products, orders, campaigns, and supplier activity in one place.</p>
        </div>
      </Link>

      <div className="flex flex-col space-y-1 px-4 pb-8">
        <Link
          onClick={() => setShowSideBar(false)}
          href="/dashboard"
          className={
            pathName === "/dashboard"
              ? "flex items-center space-x-3 rounded-2xl bg-stone-950 px-4 py-3 text-[#f1b84b] dark:bg-white/10"
              : "flex items-center space-x-3 rounded-2xl px-4 py-3 text-stone-600 transition hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-white/5 dark:hover:text-stone-50"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible open={openMenu} onOpenChange={setOpenMenu} className="px-1 py-1">
          <CollapsibleTrigger className="w-full">
            <div className="flex items-center justify-between rounded-2xl px-3 py-3 text-stone-600 transition hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-white/5 dark:hover:text-stone-50">
              <div className="flex items-center space-x-3">
                <Package />
                <span>Catalog</span>
              </div>
              {openMenu ? <ChevronDown /> : <ChevronRight />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 rounded-2xl border border-stone-200 bg-stone-50/90 px-3 py-3 dark:border-stone-800 dark:bg-stone-900/70">
            {CatalogueLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSideBar(false)}
                  key={index}
                  href={item.href}
                  className={
                    pathName === item.href
                      ? "flex items-center space-x-3 rounded-xl bg-white px-3 py-2 text-sm text-stone-950 shadow-sm dark:bg-white/10 dark:text-[#f1b84b]"
                      : "flex items-center space-x-3 rounded-xl px-3 py-2 text-sm text-stone-600 transition hover:bg-white hover:text-stone-950 dark:text-stone-300 dark:hover:bg-white/5 dark:hover:text-stone-50"
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sideBarLink.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSideBar(false)}
              key={index}
              href={item.href}
              className={
                item.href == pathName
                  ? "flex items-center space-x-3 rounded-2xl bg-stone-950 px-4 py-3 text-[#f1b84b] dark:bg-white/10"
                  : "flex items-center space-x-3 rounded-2xl px-4 py-3 text-stone-600 transition hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-white/5 dark:hover:text-stone-50"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-1 pt-4">
          <Link
            href="/"
            onClick={() => setShowSideBar(false)}
            className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-4 py-4 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:text-stone-950 dark:border-stone-800 dark:bg-stone-900/80 dark:text-stone-200 dark:hover:border-stone-700 dark:hover:text-stone-50"
          >
            <span>Open storefront</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
