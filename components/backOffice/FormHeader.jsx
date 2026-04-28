import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FormHeader({ title, eyebrow = "Back office" }) {
    const router = useRouter()
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between rounded-[1.75rem] border border-stone-200/80 bg-white/90 px-6 py-5 text-stone-700 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70 dark:text-stone-50 md:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
          </div>
          <button
            onClick={() => router.back()}
            className="rounded-2xl border border-stone-200 bg-stone-50 p-3 text-stone-600 transition hover:border-stone-300 hover:text-stone-950 dark:border-stone-800 dark:bg-stone-900/70 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:text-stone-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
}
