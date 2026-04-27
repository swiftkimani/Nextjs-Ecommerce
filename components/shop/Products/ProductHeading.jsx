const ProductHeading = ({ heading }) => (
  <div className="flex items-end justify-between gap-4 pb-8">
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
        Curated selection
      </p>
      <h2 className="font-titleFont text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
        {heading}
      </h2>
    </div>
    <div className="hidden h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent md:block" />
  </div>
);

export default ProductHeading;
