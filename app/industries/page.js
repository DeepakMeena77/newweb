import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { categories, industries, site } from '@/lib/site-data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Industries',
  description:
    'Discover how CCT equipment supports CVD diamond, semiconductor processing, nanotechnology, and research laboratories.',
  path: '/industries/',
  keywords: [
    'CVD diamond applications',
    'semiconductor coating equipment',
    'nanotechnology deposition systems',
    'research lab CVD systems',
  ],
});

const capabilityRows = [
  {
    title: 'Diamond growth and wafer development',
    detail:
      'Supports electronic-grade, optical-grade, and quantum-grade diamond programs through MPCVD and related process control systems.',
  },
  {
    title: 'Semiconductor and thin-film coatings',
    detail:
      'Enables metal, dielectric, optical, and semiconductor film deposition using sputtering and evaporation systems.',
  },
  {
    title: 'Graphene and CNT process development',
    detail:
      'Thermal and hot filament CVD lines support carbon nanomaterials, graphene, and advanced coating workflows.',
  },
  {
    title: 'Academic and pilot-scale R&D',
    detail:
      'Compact, automated platforms are suitable for research institutions, prototyping, and small-batch process validation.',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        actions={
          <Link className="button button-primary" href="/contact/">
            Discuss Your Application
          </Link>
        }
        description="CCT equipment supports diamond growth, semiconductor coating, nanomaterial development, and research workflows with scalable process control."
        eyebrow="Industries"
        title="Technology platforms aligned with target industries and application goals"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core sectors"
            title="Technology platforms built for CCT's core application sectors"
            description="Each sector below connects directly to the equipment families used across the site."
          />
          <div className="card-grid card-grid-four">
            {industries.map((industry) => (
              <article className={`industry-card accent-${industry.accent}`} key={industry.title}>
                <h2>{industry.title}</h2>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section">
          <div className="split-copy">
            <SectionHeading
              eyebrow="Application capabilities"
              title="From early-stage material development to production-oriented coating workflows"
            description="The equipment range spans multiple process requirements, from early-stage experimentation to more mature process and coating workflows."
            />
            <div className="capability-list">
              {capabilityRows.map((item) => (
                <article className="capability-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="split-copy">
            <SectionHeading
              eyebrow="Matching product groups"
              title="Each industry need connects directly to a matching product family"
            />
            <div className="footer-links">
              {categories.map((category) => (
                <Link href={`/products/${category.anchor}`} key={category.title}>
                  {category.title}
                </Link>
              ))}
            </div>
            <div className="content-panel">
              <h3>Why this matters</h3>
              <p>
                It becomes easier for buyers to match their process goals with the right type of
                system when the site is organized around applications as well as machine names.
              </p>
              <Link className="button button-secondary" href="/products/">
                Explore Product Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container quote-panel">
          <h2>Need a system recommendation for your application?</h2>
          <p>
            Share your process, substrate, or research goal and we can direct you to the right CCT
            system family.
          </p>
          <Link className="button button-primary" href="/contact/">
            Contact {site.shortName}
          </Link>
        </div>
      </section>
    </>
  );
}
