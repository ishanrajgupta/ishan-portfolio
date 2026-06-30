export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`${alignment} max-w-3xl`}>
      <p className="mb-4 inline-flex rounded-full border border-purple-400/25 bg-purple-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200/90">
        {eyebrow}
      </p>
      <h2 className="section-heading">{title}</h2>
      {description ? <p className="section-copy mt-5">{description}</p> : null}
    </div>
  );
}