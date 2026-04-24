import Image from 'next/image';
import Link from 'next/link';
import { BrochureGrid } from '@/components/brochure-grid';
import { SectionHeading } from '@/components/section-heading';
import {
  benefits,
  brochurePreviews,
  categories,
  equipment,
  industries,
  site,
  supportChannels,
} from '@/lib/site-data';
import { buildMetadata, buildOrganizationSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: `${site.name} - Advanced CVD and Semiconductor Equipment`,
  description:
    'Explore CCT products, diamond materials, CVD systems, sputtering systems, and thin-film equipment for semiconductor and research applications.',
  path: '/',
  keywords: [
    'CVD systems',
    'diamond deposition systems',
    'MPCVD equipment',
    'thin film coating systems',
    'semiconductor equipment India',
  ],
});

export default function HomePage() {
  const organizationSchema = buildOrganizationSchema();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        type="application/ld+json"
      />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Advanced thermal and CVD equipment</p>
            <h1>{site.name}</h1>
            <p className="hero-tagline">{site.tagline}</p>
            <p className="hero-description">
              Built for semiconductor, diamond growth, nanotechnology, and research teams that
              need dependable process control, scalable equipment, and practical engineering
              support.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/products/">
                Browse Equipment
              </Link>
              <Link className="button button-secondary" href="/contact/">
                Request Quote
              </Link>
            </div>

            <div className="hero-metrics">
              <article>
                <strong>2021</strong>
                <span>Founded by professional engineers</span>
              </article>
              <article>
                <strong>{equipment.length}+</strong>
                <span>System categories and product lines</span>
              </article>
              <article>
                <strong>{industries.length}</strong>
                <span>Core application sectors served</span>
              </article>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <span>Featured system</span>
              <Image
                alt="MPCVD 6 kW system"
                className="hero-product"
                height={760}
                priority
                src="/assets/products/mpcvd-6kw.png"
                width={760}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Explore our categories"
            title="Technology groups shaped around real lab and production workflows"
            description="The home concept in your brochure highlights five primary categories. We recreated that structure here and linked each group to deeper product detail."
          />
          <div className="card-grid card-grid-fives">
            {categories.map((category) => (
              <article className={`feature-card accent-${category.accent}`} key={category.title}>
                <div className="icon-badge">{category.title.slice(0, 2)}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link href={`/products/${category.anchor}`}>View category</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-band">
        <div className="container benefits-grid">
          <div>
            <p className="section-kicker">Why choose us</p>
            <h2>Focused on dependable delivery, support, and long-term system value</h2>
          </div>
          <div className="benefits-list">
            {benefits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Engineered for diamond, semiconductor, research, and nanotechnology programs"
            description="The supplied homepage concept highlighted four sectors. We turned them into dedicated industry narratives so the site remains useful for both SEO and client presentations."
          />
          <div className="card-grid card-grid-four">
            {industries.map((industry) => (
              <article className={`industry-card accent-${industry.accent}`} key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="section-kicker">Need help choosing the right equipment?</p>
            <h2>Talk to CCT about the right system for your application and throughput goals.</h2>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={`tel:${site.phoneRaw}`}>
              Call Now
            </a>
            <a className="button button-secondary" href={`mailto:${site.email}`}>
              Email Us
            </a>
            <Link className="button button-primary" href="/contact/">
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-media">
            <Image
              alt="CCT MPCVD system"
              className="media-frame"
              height={760}
              src="/assets/products/mpcvd-10kw.png"
              width={760}
            />
          </div>
          <div className="split-copy">
            <SectionHeading
              eyebrow="About Carbon Carat Technology LLP"
              title="High-performance CVD and quantum material systems with a practical engineering foundation"
              description="Founded by a team of professional engineers, CCT designs both standard and custom systems with a focus on quality, competitive cost, and application-specific support."
            />
            <ul className="bullet-list">
              <li>High-temperature CVD equipment from 700 C to 1200 C, extendable up to 1700 C</li>
              <li>Customized solutions tailored to customer requirements</li>
              <li>Strong manufacturing base with reliable quality control</li>
              <li>Fast response and customer-focused support</li>
            </ul>
            <Link className="button button-primary" href="/about-us/">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Brochure references"
            title="PDF content and visuals from the supplied CCT brochure are carried into the website"
            description="The website content was mapped from the brochure pages you shared, including the original preview sheets, system images, and company material."
          />
          <BrochureGrid items={brochurePreviews.slice(0, 3)} />
        </div>
      </section>

      <section className="section section-tight">
        <div className="container contact-strip">
          {supportChannels.map((channel) => (
            <a className="contact-chip" href={channel.href} key={channel.title} rel="noreferrer" target="_blank">
              <span>{channel.title}</span>
              <strong>{channel.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
