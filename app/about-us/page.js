import Image from 'next/image';
import { BrochureGrid } from '@/components/brochure-grid';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { aboutHighlights, brochurePreviews, site } from '@/lib/site-data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'Learn about Carbon Carat Technology LLP, its engineering background, product focus, and strengths in advanced thermal and CVD equipment.',
  path: '/about-us/',
  keywords: [
    'Carbon Carat Technology LLP',
    'CCT about us',
    'advanced thermal equipment company',
    'CVD equipment manufacturer India',
  ],
});

const aboutPreview = brochurePreviews.filter((item) =>
  ['About company sheet', 'Contact sheet'].includes(item.title),
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="CCT brings together engineering experience, custom system thinking, and dependable manufacturing for advanced thermal and CVD equipment."
        eyebrow="About Us"
        title="Engineering-led, application-aware, and built around dependable delivery"
      />

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <SectionHeading
              eyebrow="Company profile"
              title={site.legalName}
              description="Founded in 2021, CCT specializes in advanced thermal and CVD equipment with a balance of standard product lines and custom system capability."
            />
            <ul className="bullet-list">
              <li>High-temperature CVD equipment from 700 C to 1200 C, extendable up to 1700 C</li>
              <li>Customized solutions tailored to customer requirements</li>
              <li>Strong manufacturing base with reliable quality control</li>
              <li>Fast response and customer-focused approach</li>
            </ul>
          </div>
          <div className="content-panel">
            <h3>Positioning statement</h3>
            <p>
              CCT supports laboratories, industrial users, and advanced material teams with
              reliable systems, practical guidance, and a strong focus on long-term performance.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Our strengths"
            title="The values behind our equipment, support, and delivery approach"
          />
          <div className="card-grid card-grid-four">
            {aboutHighlights.map((item) => (
              <article className="value-card" key={item.title}>
                <Image alt={item.title} height={98} src={item.image} width={98} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-media">
            <Image
              alt="Brochure about preview"
              className="media-frame"
              height={1080}
              src="/assets/brochure/about-sheet.png"
              width={760}
            />
          </div>
          <div className="split-copy">
            <SectionHeading
              eyebrow="Why clients trust CCT"
              title="A company profile built around support, credibility, and long-term collaboration"
              description="From system design to delivery and after-sales guidance, CCT focuses on practical engineering support at every step."
            />
            <div className="content-panel">
              <h3>What customers value</h3>
              <p>
                Buyers often want fast responses, honest technical guidance, and room for
                customization. CCT is built to support all three.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <BrochureGrid items={aboutPreview} />
        </div>
      </section>
    </>
  );
}
