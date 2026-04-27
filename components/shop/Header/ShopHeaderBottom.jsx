"use client";
import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const ShopHeaderBottom = ({ searchProducts = [], categories = [] }) => {
  const products = useSelector((state) => state.shanny.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  const filteredProducts = useMemo(
    () =>
      searchProducts.filter((item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchProducts, searchQuery]
  );

  return (
    <div className="relative z-40 w-full px-4 py-4 lg:py-5">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-stone-200/70 bg-white/85 p-4 shadow-[0_25px_80px_-38px_rgba(28,25,23,0.45)] backdrop-blur xl:flex-row xl:items-center xl:justify-between xl:px-6">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="relative flex h-14 cursor-pointer items-center gap-3 rounded-full border border-stone-200 bg-stone-50 px-5 text-stone-800"
          >
            <HiOutlineMenuAlt4 className="h-5 w-5" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em]">
              Shop by category
            </p>
            {show && (
              <motion.ul
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-16 z-50 min-w-[260px] rounded-3xl border border-stone-200 bg-white p-4 text-stone-700 shadow-2xl"
              >
                {["Home", ...categories.map((category) => category.title)].slice(0, 6).map((cat) => (
                  <li
                    key={cat}
                    className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.14em] transition hover:bg-stone-100 hover:text-stone-950"
                  >
                    {cat === "Home" ? <Link href="/">{cat}</Link> : cat}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          <div className="relative flex h-[58px] w-full items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-6 text-base text-stone-800 xl:max-w-[660px]">
            <input
              className="h-full flex-1 bg-transparent outline-none placeholder:text-sm placeholder:uppercase placeholder:tracking-[0.18em] placeholder:text-stone-400"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              placeholder="Search curated products"
            />
            <FaSearch className="h-5 w-5 text-stone-500" />
            {searchQuery && (
              <div className="absolute left-0 top-16 z-50 h-96 w-full overflow-y-scroll rounded-[1.5rem] border border-stone-200 bg-white p-3 shadow-2xl">
                {filteredProducts.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => {
                      router.push(`/product/${item._id}`);
                      setSearchQuery("");
                    }}
                    className="mb-3 flex h-28 items-center gap-4 rounded-[1.25rem] bg-stone-50 px-3 transition hover:bg-[#efe8dd]"
                  >
                    <img className="w-24 rounded-2xl object-cover" src={item.img} alt={item.productName} />
                    <div className="flex flex-col gap-1">
                      <p className="font-titleFont text-lg font-semibold text-stone-900">{item.productName}</p>
                      <p className="max-w-[360px] overflow-hidden text-ellipsis whitespace-nowrap text-xs text-stone-500">
                        {item.des}
                      </p>
                      <p className="text-sm uppercase tracking-[0.14em] text-stone-500">
                        Price: <span className="font-semibold text-stone-900">Ksh {item.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative flex items-center gap-3 xl:pr-1">
            <div
              onClick={() => setShowUser(!showUser)}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-3 text-stone-800"
            >
              <FaUser />
              <span className="text-xs font-semibold uppercase tracking-[0.16em]">Account</span>
              <FaCaretDown className="text-stone-500" />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 top-16 z-50 w-52 rounded-3xl border border-stone-200 bg-white p-3 text-stone-700 shadow-2xl"
              >
                <Link href="/signin">
                  <li className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.14em] hover:bg-stone-100">
                    Login
                  </li>
                </Link>
                <Link href="/signup" onClick={() => setShowUser(false)}>
                  <li className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.14em] hover:bg-stone-100">
                    Sign Up
                  </li>
                </Link>
                <Link href="/dashboard" onClick={() => setShowUser(false)}>
                  <li className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.14em] hover:bg-stone-100">
                    Dashboard
                  </li>
                </Link>
              </motion.ul>
            )}
            <Link href="/cart">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-stone-50">
                <FaShoppingCart />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f1b84b] text-[10px] font-bold text-stone-950">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 px-2">
          {["Curated gadgets", "Fast Nairobi dispatch", "Secure checkout"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopHeaderBottom;
