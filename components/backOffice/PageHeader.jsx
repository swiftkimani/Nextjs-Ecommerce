import Heading from './Heading';
import Link from 'next/link';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function PageHeader({ heading, linkTitle, href, description, storefrontHref = "/" }) {
  return (
    <div className="flex flex-col gap-5 rounded-[2rem] border border-stone-200/80 bg-white/90 p-6 shadow-[0_22px_70px_-46px_rgba(28,25,23,0.45)] md:flex-row md:items-end md:justify-between">
      <Heading
        title={heading}
        eyebrow="Back office"
        description={description || "Manage the same catalog, pricing, and content surfaced on the storefront."}
      />
      <div className="flex flex-wrap gap-3">
        <Link
          href={storefrontHref}
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
        >
          Preview storefront
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone-50 transition hover:bg-stone-800"
          href={href}
        >
          <Plus className="h-4 w-4" />
          <span>{linkTitle}</span>
        </Link>
      </div>
    </div>
  );
}
