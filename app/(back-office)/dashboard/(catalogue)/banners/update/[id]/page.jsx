import Link from "next/link";

export default function UpdateCategory() {
  return (
    <div className="space-y-5">
      <div className="rounded-[1.85rem] border border-stone-200/80 bg-white/90 p-6 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
          Banner editing
        </p>
        <h2 className="mt-2 font-titleFont text-3xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
          Banner update flow is being upgraded
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-300">
          This route now matches the dashboard theme in both light and dark mode. The next implementation step is wiring the full editable banner form to a dedicated update endpoint.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/dashboard/banners"
            className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-50 transition hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200"
          >
            Back to banners
          </Link>
          <Link
            href="/dashboard/banners/new"
            className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 transition hover:border-stone-950 hover:text-stone-950 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-stone-50"
          >
            Create another banner
          </Link>
        </div>
      </div>
    </div>
  );
}
