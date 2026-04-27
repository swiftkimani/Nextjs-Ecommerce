import Heading from './Heading';
import Link from 'next/link';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function PageHeader({ heading, linkTitle, href, description, storefrontHref = "/" }) {
  return (
    <div className="flex flex-col gap-5 rounded-[1.85rem] border border-stone-200/80 bg-white/90 p-5 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70 md:flex-row md:items-end md:justify-between">
      <Heading
        title={heading}
        eyebrow="Back office"
        description={description || "Manage the same catalog, pricing, and content surfaced on the storefront."}
      />
      <div className="flex flex-wrap gap-3">
        <Link
          href={storefrontHref}
          className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 transition hover:border-stone-950 hover:text-stone-950 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-stone-50"
        >
          Preview storefront
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-50 transition hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200"
          href={href}
        >
          <Plus className="h-4 w-4" />
          <span>{linkTitle}</span>
        </Link>
      </div>
    </div>
  );
}
