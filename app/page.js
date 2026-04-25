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

const heroStats = [
  {
    value: '2021',
    label: 'Founded by engineers focused on advanced material systems',
  },
  {
    value: `${categories.length}`,
    label: 'Core technology families across deposition and coating',
  },
  {
    value: `${equipment.length}+`,
    label: 'System lines for labs, pilot programs, and production goals',
  },
  {
    value: `${industries.length}`,
    label: 'Target sectors from diamond growth to semiconductor R&D',
  },
];

const showcaseSystems = [
  {
    slug: 'mpcvd-10kw-12kw',
    accent: 'cyan',
    label: 'Flagship platform',
  },
  {
    slug: 'mpcvd-6kw',
    accent: 'amber',
    label: 'Compact precision',
  },
  {
    slug: 'electron-beam-evaporation-system',
    accent: 'violet',
    label: 'Thin-film specialist',
  },
]
  .map((entry) => ({
    ...entry,
    item: equipment.find((system) => system.slug === entry.slug),
  }))
  .filter((entry) => entry.item);

export default function HomePage() {
  const organizationSchema = buildOrganizationSchema();
  const flagshipSystem = equipment.find((item) => item.slug === 'mpcvd-10kw-12kw');
  const compactSystem = equipment.find((item) => item.slug === 'mpcvd-6kw');
  const evaporationSystem = equipment.find(
    (item) => item.slug === 'electron-beam-evaporation-system',
  );

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        type="application/ld+json"
      />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-brand-line">
              <Image
                alt={`${site.shortName} logo mark`}
                className="hero-brand-logo"
                height={56}
                priority
                src={site.logoPath}
                width={56}
              />
              <span>Mumbai-built systems for deposition, coating, and advanced material growth</span>
            </div>
            <p className="section-kicker">Advanced CVD / MPCVD / Thin Film Engineering</p>
            <h1>{site.name}</h1>
            <p className="hero-tagline">{site.tagline}</p>
            <p className="hero-description">
              Precision-built platforms for semiconductor programs, diamond growth,
              nanotechnology, and research teams that want sharp process control with a stronger
              industrial presence.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/products/">
                Browse Equipment
              </Link>
              <Link className="button button-secondary" href="/contact/">
                Request Quote
              </Link>
            </div>

            <div className="hero-pill-row">
              {benefits.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-system-card hero-system-card-left">
              <span>Compact power</span>
              <strong>{compactSystem?.title}</strong>
              <Image
                alt={compactSystem?.title || '6 kW MPCVD system'}
                className="hero-product hero-product-compact"
                height={720}
                src={compactSystem?.image || '/6%20kW%20MPCVD%20System.png'}
                width={720}
              />
            </div>

            <div className="hero-system-card hero-system-card-main">
              <div className="hero-system-copy">
                <span>Flagship machine</span>
                <strong>{flagshipSystem?.title}</strong>
                <p>{flagshipSystem?.summary}</p>
              </div>
              <Image
                alt={flagshipSystem?.title || '10 and 12 kW MPCVD system'}
                className="hero-product"
                height={1040}
                priority
                src={flagshipSystem?.image || '/10_12%20kW%20MPCVD%20System.png'}
                width={1040}
              />
            </div>

            <div className="hero-system-card hero-system-card-right">
              <span>Thin-film coating</span>
              <strong>{evaporationSystem?.title}</strong>
              <Image
                alt={evaporationSystem?.title || 'Electron beam evaporation system'}
                className="hero-product hero-product-ebe"
                height={760}
                src={evaporationSystem?.image || '/Electron%20beam%20evaporation.png'}
                width={960}
              />
            </div>
          </div>
        </div>

        <div className="container hero-metrics">
          {heroStats.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="System spotlight"
            title="High-visibility machine presentations for the systems buyers ask about first"
            description="CCT combines compact lab-ready equipment, scalable MPCVD platforms, and thin-film coating systems in one sharper visual lineup."
          />
          <div className="showcase-grid">
            {showcaseSystems.map(({ accent, item, label }) => (
              <article className={`showcase-card accent-${accent}`} key={item.slug}>
                <div className="showcase-media">
                  <Image alt={item.title} height={860} src={item.image} width={1080} />
                </div>
                <div className="showcase-copy">
                  <span>{label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <ul className="showcase-points">
                    {item.features.slice(0, 3).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link href={`/products/#${item.slug}`}>View specifications</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-band">
        <div className="container benefits-grid">
          <div>
            <p className="section-kicker">Why teams choose CCT</p>
            <h2>Bold presentation outside, serious engineering inside, and dependable support after delivery</h2>
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
            eyebrow="Technology lanes"
            title="Five product families shaped around real lab, coating, and material-growth workflows"
          />
          <div className="tech-lattice">
            {categories.map((category, index) => (
              <article className={`lattice-card accent-${category.accent}`} key={category.title}>
                <span className="lattice-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link href={`/products/${category.anchor}`}>Explore technology</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Engineered for diamond growth, semiconductor deposition, research labs, and nanotechnology programs"
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
            <p className="section-kicker">Ready to move from inquiry to system selection?</p>
            <h2>Talk to CCT about the right platform for your material, throughput, and process goals.</h2>
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
          <div className="split-media story-machine-gallery">
            <div className="gallery-panel">
              <Image
                alt="CCT 6 kW MPCVD system"
                className="media-frame"
                height={820}
                src="/6%20kW%20MPCVD%20System.png"
                width={820}
              />
            </div>
            <div className="gallery-panel gallery-panel-alt">
              <Image
                alt="CCT electron beam evaporation system"
                className="media-frame"
                height={760}
                src="/Electron%20beam%20evaporation.png"
                width={960}
              />
            </div>
          </div>
          <div className="split-copy">
            <div className="story-panel">
              <div className="story-logo">
                <Image alt={`${site.shortName} logo`} height={220} src={site.logoPath} width={220} />
              </div>
              <div>
                <SectionHeading
                  eyebrow="About Carbon Carat Technology LLP"
                  title="Practical engineering for high-performance CVD and quantum material systems"
                  description="Founded by a team of professional engineers, CCT designs both standard and custom systems with a focus on quality, competitive cost, and application-specific support."
                />
              </div>
            </div>
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
            eyebrow="Reference deck"
            title="Brochure sheets and technical previews for teams that want the deeper product view"
          />
          <BrochureGrid items={brochurePreviews.slice(0, 3)} />
        </div>
      </section>

      <section className="section section-tight">
        <div className="container contact-strip">
          {supportChannels.map((channel) => (
            <a
              className="contact-chip"
              href={channel.href}
              key={channel.title}
              rel="noreferrer"
              target="_blank"
            >
              <span>{channel.title}</span>
              <strong>{channel.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
