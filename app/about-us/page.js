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
        description="The brochure describes CCT as a high-tech enterprise founded by professional engineers and focused on advanced thermal and CVD equipment. This page turns that material into a clearer company story."
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
              Driven by professionalism and innovation, CCT delivers reliable equipment and
              solutions to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Our strengths"
            title="The icon set from the brochure is now translated into a cleaner company values grid"
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
              eyebrow="What this page adds"
              title="A brochure paragraph became a fuller trust-building page"
              description="This gives the site a better balance between product content and company credibility, which is useful when your client shares the website with new leads."
            />
            <div className="content-panel">
              <h3>Website advantage</h3>
              <p>
                Buyers often look for the team and company story before sending an inquiry. A
                stronger About page makes the website feel more complete and more trustworthy.
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
