import Link from "next/link";
import Heading from "@/components/backOffice/Heading";

export default function page() {
  return (
    <div className="rounded-[2rem] border border-stone-200/80 bg-white/90 p-8 shadow-[0_22px_70px_-46px_rgba(28,25,23,0.45)]">
      <Heading
        eyebrow="Catalog alias"
        title="Sliders were merged into banners"
        description="Use the banners section to manage the promotional visuals that appear on the storefront."
      />
      <Link
        href="/dashboard/banners"
        className="mt-6 inline-flex rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone-50"
      >
        Open banners
      </Link>
    </div>
  );
}
