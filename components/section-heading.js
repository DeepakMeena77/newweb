export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
