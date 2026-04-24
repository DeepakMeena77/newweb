import Image from 'next/image';

export function BrochureGrid({ items }) {
  return (
    <div className="brochure-grid">
      {items.map((item) => (
        <article className="brochure-card" key={item.title}>
          <Image
            alt={item.title}
            className="brochure-image"
            height={720}
            src={item.image}
            width={520}
          />
          <div className="brochure-copy">
            <h3>{item.title}</h3>
            <p>Reference preview sourced from the supplied CCT brochure.</p>
          </div>
        </article>
      ))}
    </div>
  );
}
