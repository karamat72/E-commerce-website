export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`mb-8 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-bronze">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-tight tracking-[-.04em] text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{description}</p>}
    </div>
  );
}
