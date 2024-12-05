"use client";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
import {
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  Monitor,
  MonitorPlay,
  ScanSearch,
  SendToBack,
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
      href: "/dashboard/commnunity",
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
      href: "/dashboard/sliders",
    },
  ];

  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div
      className={
        showSideBar
          ? "sm:block mt-20 z-50 sm:mt-0 bg-white dark:bg-slate-700 text-slate-50 space-y-6 w-60 h-screen dark:text-slate-50 fixed left-0 top-0 shadow-md overflow-y-scroll"
          : "hidden sm:block z-50 mt-20 sm:mt-0 bg-white dark:bg-slate-800 text-slate-800 space-y-6 w-60 h-screen dark:text-slate-100 fixed left-0 top-0 shadow-md overflow-y-scroll"
      }>
      {/* Logo */}
      <Link className="px-6 py-4" href="/dashboard">
        <Image
          src={logo}
          alt="logo"
          className="w-32 hidden sm:block object-contain h-18 bg-blue-50 dark:bg-white px-10 py-2 ml-6 rounded-md"
        />
      </Link>

      <div className="space-y-3 flex flex-col">
        <Link
          onClick={() => setShowSideBar(false)}
          href="/dashboard"
          className={
            pathName === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-blue-200 text-blue-400"
              : "flex items-center space-x-3 px-6 py-2"
          }>
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger
            className=""
            onClick={() => setOpenMenu(!openMenu)}>
            <div className="flex items-center space-x-1 py-2">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronRight /> : <ChevronDown />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-3 pl-6 bg-slate-700 rounded py-3">
            {CatalogueLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSideBar(false)}
                  key={index}
                  href={item.href}
                  className={
                    pathName === item.href
                      ? "flex items-center space-x-3 text-sm border-blue-200 text-blue-400"
                      : "flex items-center space-x-3 text-slate-50 py-2"
                  }>
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
                  ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-blue-200 text-blue-400"
                  : "flex items-center space-x-3 px-6 py-2"
              }>
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex items-center space-x-3 px-6 py-3 bg-blue-600 rounded-md mt-4 sm:mt-6 text-sm font-medium text-center text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            <LogOut />
            <span>LogOut</span>
          </button>
        </div>
      </div>
    </div>
  );
}
