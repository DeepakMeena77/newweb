export function PageHero({ eyebrow, title, description, actions }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="page-hero-copy">{description}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}
