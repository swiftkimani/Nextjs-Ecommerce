"use client"
import Link from "next/link";
import { Pencil, ArrowUpRight } from "lucide-react";

export default function CatalogTable({ title, columns = [], rows = [], emptyMessage = "No records yet." }) {
  return (
    <section className="mt-5 overflow-hidden rounded-[1.6rem] border border-stone-200/80 bg-white/95 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70">
      <div className="border-b border-stone-200/70 px-5 py-4 dark:border-stone-800">
        <h3 className="font-titleFont text-xl font-semibold text-stone-950 dark:text-stone-50">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-stone-200/70 dark:divide-stone-800">
          <thead className="bg-stone-50/80 dark:bg-stone-900/80">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200/60 dark:divide-stone-800">
            {rows.length ? (
              rows.map((row, index) => (
                <tr key={row.id || index} className="transition hover:bg-[#f6f1e8] dark:hover:bg-stone-900/80">
                  {columns.map((column) => (
                    <td key={column.key} className="px-5 py-4 align-top text-sm text-stone-700 dark:text-stone-200">
                      {column.key === "actions" ? (
                        <div className="flex items-center gap-3">
                          {row.previewHref ? (
                            <Link
                              href={row.previewHref}
                              className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 dark:border-stone-700 dark:text-stone-200"
                            >
                              Preview
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          ) : null}
                          {row.onEdit ? (
                            <button
                              type="button"
                              onClick={row.onEdit}
                              className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-50 transition hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200"
                            >
                              <Pencil className="h-3.5 w-3.5" />
                              Edit
                            </button>
                          ) : row.editHref ? (
                            <Link
                              href={row.editHref}
                              className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-50 dark:bg-stone-100 dark:text-stone-950"
                            >
                              <Pencil className="h-3.5 w-3.5" />
                              Edit
                            </Link>
                          ) : null}
                        </div>
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-10 text-center text-sm text-stone-500 dark:text-stone-400"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
