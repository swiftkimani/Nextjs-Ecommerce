"use client"
import { X } from "lucide-react";
import { useEffect } from "react";

export default function SlideOverPanel({ isOpen, onClose, title, description, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-stone-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-stone-950 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between border-b border-stone-200/80 px-6 py-5 dark:border-stone-800">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              Edit record
            </p>
            <h2 className="mt-1 font-titleFont text-xl font-semibold text-stone-950 dark:text-stone-50">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition hover:bg-stone-100 dark:border-stone-800 dark:hover:bg-stone-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </>
  );
}
