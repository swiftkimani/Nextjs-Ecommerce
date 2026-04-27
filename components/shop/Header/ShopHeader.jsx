"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { navBarList } from "@/constants/shopData";

const ShopHeader = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setShowMenu(window.innerWidth >= 667);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[rgba(247,243,236,0.82)] backdrop-blur-xl">
      <div className="border-b border-stone-200/70 bg-stone-950 text-stone-100">
        <div className="mx-auto flex max-w-container items-center justify-between px-4 py-2 text-xs uppercase tracking-[0.28em]">
          <p>Modern East African commerce</p>
          <div className="flex items-center gap-5">
            <span>Open daily 8am to 8pm</span>
            <Link href="/dashboard" className="font-semibold text-[#f1b84b]">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <nav className="relative mx-auto flex h-20 max-w-container items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-950 text-sm font-bold uppercase tracking-[0.3em] text-stone-50">
            SS
          </div>
          <div>
            <p className="font-titleFont text-lg font-semibold tracking-[0.18em] text-stone-950">
              SHANNY
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
              Commerce House
            </p>
          </div>
        </Link>
        <div>
          {showMenu && (
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="hidden items-center gap-2 md:flex"
            >
              {navBarList.map(({ _id, title, link }) => (
                <li key={_id}>
                  <Link
                    href={link}
                    className={`rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] transition ${
                      pathname === link
                        ? "bg-stone-950 text-stone-50"
                        : "text-stone-600 hover:bg-stone-200/70 hover:text-stone-950"
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
          <HiMenuAlt2
            onClick={() => setSidenav(!sidenav)}
            className="inline-block h-8 w-8 cursor-pointer md:hidden"
          />
          {sidenav && (
            <div className="fixed inset-0 z-50 bg-black/50 text-stone-100 md:hidden">
              <motion.div
                initial={{ x: -260, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="relative h-full w-[84%] bg-stone-950 px-6 py-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="font-titleFont text-xl font-semibold tracking-[0.18em]">
                      SHANNY
                    </p>
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-400">
                      Commerce House
                    </p>
                  </div>
                  <button
                    onClick={() => setSidenav(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-xl"
                  >
                    <MdClose />
                  </button>
                </div>
                <ul className="flex flex-col gap-3">
                  {navBarList.map((item) => (
                    <li key={item._id}>
                      <Link
                        href={item.link}
                        onClick={() => setSidenav(false)}
                        className="block rounded-2xl border border-stone-800 px-4 py-3 text-sm uppercase tracking-[0.18em] text-stone-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/dashboard"
                      onClick={() => setSidenav(false)}
                      className="mt-3 block rounded-2xl bg-[#f1b84b] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950"
                    >
                      Open Dashboard
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default ShopHeader;
