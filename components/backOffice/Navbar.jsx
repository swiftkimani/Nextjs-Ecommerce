import {
  Bell,
  AlignJustify,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherBtn from "../ThemeSwitcher";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Navbar({ setShowSideBar, showSideBar }) {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-40 flex h-24 items-center justify-between border-b border-stone-200/70 bg-[rgba(247,243,236,0.82)] px-4 backdrop-blur-xl sm:left-72 sm:px-8"
    >
      <button
        onClick={() => setShowSideBar(!showSideBar)}
        className="rounded-full border border-stone-300 bg-white/80 p-3 text-stone-800"
      >
        <AlignJustify />
      </button>
      <div className="hidden flex-1 px-6 sm:block">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
          Shanny Commerce House
        </p>
        <p className="mt-1 font-titleFont text-xl font-semibold text-stone-950">
          Frontend-connected dashboard
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <Link
          href="/"
          className="hidden items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-700 sm:inline-flex"
        >
          Storefront
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <ThemeSwitcherBtn></ThemeSwitcherBtn>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              type="button"
              className="relative inline-flex items-center rounded-full border border-stone-300 bg-white/80 p-3 text-sm font-medium text-center text-stone-800"
            >
              <Bell className="text-stone-700" />
              <span className="sr-only">Notifications</span>
              <div className="absolute -right-1 top-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f1b84b] text-[10px] font-bold text-stone-950">
                4
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1 py-1">
                <span className="text-sm font-medium">Catalog is live-linked to storefront</span>
                <span className="text-xs text-stone-500">Products, banners, and coupons now share one source.</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1 py-1">
                <span className="text-sm font-medium">Use /dashboard to manage storefront content</span>
                <span className="text-xs text-stone-500">Banners and categories now map directly to public pages.</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1 py-1">
                <span className="text-sm font-medium">Theme toggle is active</span>
                <span className="text-xs text-stone-500">You can preview light and dark admin surfaces.</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-sm font-bold text-stone-50">
              SS
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard" className="flex items-center space-x-2">
                <span>Dashboard home</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/" className="flex items-center space-x-2">
                <span>Open storefront</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
