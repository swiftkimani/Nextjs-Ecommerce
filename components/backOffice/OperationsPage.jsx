import Link from "next/link";
import Heading from "@/components/backOffice/Heading";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function OperationsPage({
  eyebrow = "Operations",
  title,
  description,
  primaryAction,
  secondaryAction,
  metrics = [],
  workflows = [],
}) {
  return (
    <div className="space-y-5">
      <section className="rounded-[1.85rem] border border-stone-200/80 bg-white/90 p-5 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Heading eyebrow={eyebrow} title={title} description={description} />
          <div className="flex flex-wrap gap-3">
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 transition hover:border-stone-950 hover:text-stone-950 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-stone-50"
              >
                {secondaryAction.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : null}
            {primaryAction ? (
              <Link
                href={primaryAction.href}
                className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-50 transition hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200"
              >
                {primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[1.5rem] border border-stone-200/80 bg-white/95 p-4 shadow-[0_18px_60px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
              {metric.label}
            </p>
            <p className="mt-3 font-titleFont text-3xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
              {metric.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{metric.note}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {workflows.map((workflow) => (
          <div
            key={workflow.title}
            className="rounded-[1.75rem] border border-stone-200/80 bg-white/95 p-5 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              {workflow.eyebrow || "Workflow"}
            </p>
            <h3 className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
              {workflow.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
              {workflow.description}
            </p>
            {workflow.points?.length ? (
              <div className="mt-5 space-y-3">
                {workflow.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            ) : null}
            {workflow.link ? (
              <Link
                href={workflow.link.href}
                className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700 hover:text-stone-950 dark:text-stone-200 dark:hover:text-stone-50"
              >
                {workflow.link.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        ))}
      </section>
    </div>
  );
}
