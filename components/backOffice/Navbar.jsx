import {
  Sun,
  Bell,
  User,
  AlignJustify,
  LayoutDashboard,
  Settings,
  LogOut,
  X,
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
import logo from "../../public/logo.png"

export default function Navbar({ setShowSideBar, showSideBar }) {
  return (
    <div
      className="flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50
      h-20 px-8 py-8 fixed top-0 w-full sm:left-60 left-0 sm:pr-[20rem] z-50">
      {/* Icons */}
      <button
        onClick={() => setShowSideBar(!showSideBar)}
        className="text-blue-600 dark:text-blue-50">
        <AlignJustify />
      </button>
      <Link className="px-0 py-2" href="/dashboard">
        <Image
          src={logo}
          alt="logo"
          className="w-12 block sm:hidden object-contain h-10 bg-blue-50 dark:bg-white px-2 py-1 rounded-md"
        />
      </Link>

      {/* 3Icons */}
      <div className="flex space-x-3">
        <ThemeSwitcherBtn></ThemeSwitcherBtn>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
              <Bell className="text-blue-600 dark:text-blue-50" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-none rounded-full -top-0 end-6 dark:border-gray-900">
                20
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="profile.jpg"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
                <div className="flex flex-col space-y-1">
                  <p>Lorem ipsum dolor sit.</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full">
                      Stock Out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="profile.jpg"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
                <div className="flex flex-col space-y-1">
                  <p>Lorem ipsum dolor sit.</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-green-700 text-white rounded-full">
                      Stock Out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/profile.jpg"
              alt="profile.jpg"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
