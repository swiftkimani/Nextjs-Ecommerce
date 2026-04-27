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
  Monitor,
  MonitorPlay,
  ScanSearch,
  Settings2,
  Slack,
  Truck,
  User,
  User2,
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
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Shanny Commnunity",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings2,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
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
    <div
      className={
        showSideBar
          ? "fixed left-0 top-0 z-50 h-screen w-72 overflow-y-auto border-r border-stone-800 bg-stone-950 text-stone-100 shadow-2xl"
          : "fixed left-0 top-0 z-40 hidden h-screen w-72 overflow-y-auto border-r border-stone-800 bg-stone-950 text-stone-100 shadow-2xl sm:block"
      }
    >
      <Link className="block px-6 pb-6 pt-8" href="/dashboard">
        <div className="rounded-[1.8rem] border border-stone-800 bg-stone-900/80 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1b84b] text-sm font-bold uppercase tracking-[0.3em] text-stone-950">
              SS
            </div>
            <div>
              <p className="font-titleFont text-lg font-semibold tracking-[0.18em] text-stone-50">
                SHANNY
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-stone-400">
                Admin suite
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-stone-400">
            Shared storefront and back-office control for your live catalog.
          </p>
        </div>
      </Link>

      <div className="flex flex-col space-y-2 px-4 pb-8">
        <Link
          onClick={() => setShowSideBar(false)}
          href="/dashboard"
          className={
            pathName === "/dashboard"
              ? "flex items-center space-x-3 rounded-2xl bg-white/10 px-5 py-3 text-[#f1b84b]"
              : "flex items-center space-x-3 rounded-2xl px-5 py-3 text-stone-300 transition hover:bg-white/5 hover:text-stone-50"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="px-1 py-2">
          <CollapsibleTrigger className="w-full" onClick={() => setOpenMenu(!openMenu)}>
            <div className="flex items-center justify-between rounded-2xl px-4 py-3 text-stone-300 transition hover:bg-white/5 hover:text-stone-50">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronRight /> : <ChevronDown />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 rounded-2xl border border-stone-800 bg-stone-900/70 px-4 py-3">
            {CatalogueLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSideBar(false)}
                  key={index}
                  href={item.href}
                  className={
                    pathName === item.href
                      ? "flex items-center space-x-3 rounded-xl px-3 py-2 text-sm text-[#f1b84b]"
                      : "flex items-center space-x-3 rounded-xl px-3 py-2 text-sm text-stone-300 transition hover:bg-white/5 hover:text-stone-50"
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
                  ? "flex items-center space-x-3 rounded-2xl bg-white/10 px-5 py-3 text-[#f1b84b]"
                  : "flex items-center space-x-3 rounded-2xl px-5 py-3 text-stone-300 transition hover:bg-white/5 hover:text-stone-50"
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
            className="flex items-center justify-between rounded-2xl border border-stone-800 bg-stone-900/80 px-5 py-4 text-sm font-medium text-stone-200 transition hover:border-stone-700 hover:text-stone-50"
          >
            <span>Open storefront</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
