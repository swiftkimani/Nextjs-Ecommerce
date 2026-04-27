import { ArrowRight, Database, Radar, Store } from "lucide-react";
import Link from "next/link";

export default function TableActions({ summary, storefrontHref = "/" }) {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-[1.75rem] border border-stone-200/80 bg-white/90 p-5 shadow-[0_18px_60px_-46px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
          Live catalog connection
        </p>
        <p className="max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-300">
          {summary || "These records feed the storefront experience directly. Changes made here affect what shoppers see."}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-700 dark:bg-stone-900 dark:text-stone-200">
          <Database className="h-4 w-4" />
          Shared catalog
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-700 dark:bg-stone-900 dark:text-stone-200">
          <Radar className="h-4 w-4" />
          Frontend synced
        </span>
        <Link
          href={storefrontHref}
          className="inline-flex items-center gap-2 rounded-full bg-[#f1b84b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-950 transition hover:bg-[#ffd27a]"
        >
          <Store className="h-4 w-4" />
          View on storefront
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
