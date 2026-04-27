export default function Heading({ title, eyebrow, description }) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-titleFont text-2xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-300">{description}</p>
      ) : null}
    </div>
  );
}
