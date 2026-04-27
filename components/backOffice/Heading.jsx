export default function Heading({ title, eyebrow, description }) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-titleFont text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-sm leading-6 text-stone-600">{description}</p> : null}
    </div>
  );
}
