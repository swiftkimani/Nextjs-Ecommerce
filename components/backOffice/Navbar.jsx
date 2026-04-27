import {
  Bell,
  AlignJustify,
  ArrowUpRight,
} from "lucide-react";
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

export default function Navbar({ setShowSideBar, showSideBar }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 lg:left-72">
      <div className="flex h-[78px] items-center justify-between border-b border-stone-200/70 bg-[rgba(247,243,236,0.82)] px-4 backdrop-blur-xl dark:border-stone-800/80 dark:bg-[rgba(24,24,27,0.82)] sm:px-6 xl:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={showSideBar ? "Close menu" : "Open menu"}
            onClick={() => setShowSideBar(!showSideBar)}
            className="rounded-2xl border border-stone-300 bg-white/80 p-3 text-stone-800 transition hover:border-stone-950 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-100 lg:hidden"
          >
            <AlignJustify />
          </button>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              Commerce desk
            </p>
            <p className="mt-1 font-titleFont text-lg font-semibold tracking-[-0.03em] text-stone-950 dark:text-stone-50 sm:text-[1.35rem]">
              Direct store oversight
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="hidden items-center gap-2 rounded-2xl border border-stone-300 bg-white/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 transition hover:border-stone-950 hover:text-stone-950 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-100 dark:hover:border-stone-500 sm:inline-flex"
          >
            Storefront
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <ThemeSwitcherBtn />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="relative inline-flex items-center rounded-2xl border border-stone-300 bg-white/80 p-3 text-sm font-medium text-center text-stone-800 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-100"
              >
                <Bell className="text-stone-700 dark:text-stone-200" />
                <span className="sr-only">Notifications</span>
                <span className="absolute -right-1 top-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f1b84b] text-[10px] font-bold text-stone-950">
                  4
                </span>
              </button>
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
                  <span className="text-sm font-medium">Use the dashboard to manage commerce operations</span>
                  <span className="text-xs text-stone-500">Catalog, merchandising, customers, and channels now sit in one workspace.</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1 py-1">
                  <span className="text-sm font-medium">Theme switching is active</span>
                  <span className="text-xs text-stone-500">The shell now responds to light and dark mode consistently.</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-950 text-sm font-bold text-stone-50 dark:bg-stone-100 dark:text-stone-950"
              >
                SS
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-4 py-2">
              <DropdownMenuLabel>Workspace</DropdownMenuLabel>
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
    </header>
  );
}
