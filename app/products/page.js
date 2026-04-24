import Image from 'next/image';
import Link from 'next/link';
import { BrochureGrid } from '@/components/brochure-grid';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { brochurePreviews, equipment, materials, site } from '@/lib/site-data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Products',
  description:
    'View CCT product lines including diamond plates, MPCVD systems, HFCVD systems, thermal CVD platforms, sputtering systems, and electron beam evaporation equipment.',
  path: '/products/',
  keywords: [
    'diamond wafers',
    'MPCVD systems',
    'HFCVD systems',
    'thermal CVD',
    'magnetron sputtering',
    'electron beam evaporation',
  ],
});

const brochureItems = brochurePreviews.filter((item) =>
  ['Product range brochure', 'Home concept preview'].includes(item.title),
);

export default function ProductsPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <a className="button button-secondary" href={site.brochurePath}>
              Download Brochure
            </a>
            <Link className="button button-primary" href="/contact/">
              Request Product Consultation
            </Link>
          </>
        }
        description="The brochure supplied by you includes both advanced diamond material products and multiple equipment classes. We consolidated those into a cleaner product experience while preserving the same core content."
        eyebrow="Product Range"
        title="Diamond materials, deposition systems, and thin-film equipment"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Diamond materials"
            title="Electronic-grade, optical-grade, and semiconductor-ready diamond products"
            description="The product range page in the brochure highlights high-purity diamond plates and wafers across p-type, n-type, optical, and semiconductor-grade formats."
          />
          <div className="card-grid card-grid-two">
            {materials.map((item) => (
              <article className="material-card" key={item.title}>
                <div className="material-media">
                  <Image alt={item.title} height={420} src={item.image} width={680} />
                </div>
                <div className="material-copy">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="catalog">
        <div className="container">
          <SectionHeading
            eyebrow="Equipment catalog"
            title="Seven brochure-backed systems arranged into a single SEO-friendly catalog"
            description="Instead of scattering product information across separate PDF-style pages, the website groups each system into a structured section with applications, key features, and warranty details where provided."
          />
          <div className="product-summary-grid">
            {equipment.map((item) => (
              <article className="summary-card" key={item.slug}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href={`#${item.slug}`}>View specifications</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
          <div className="container stack-section">
            {equipment.map((item) => (
              <div key={item.slug}>
                {item.slug === 'mpcvd-6kw' ? <span className="anchor-target" id="mpcvd" /> : null}
                {item.slug === 'hfcvd-diamond-system' ? (
                  <span className="anchor-target" id="hfcvd" />
                ) : null}
                {item.slug === 'thermal-cvd-system' ? (
                  <span className="anchor-target" id="thermal-cvd" />
                ) : null}
                {item.slug === 'magnetron-sputtering-system' ? (
                  <span className="anchor-target" id="sputtering" />
                ) : null}
                {item.slug === 'electron-beam-evaporation-system' ? (
                  <span className="anchor-target" id="evaporation" />
                ) : null}

                <article className="product-detail" id={item.slug}>
                  <div className="product-detail-media">
                    <Image alt={item.title} height={800} src={item.image} width={900} />
                  </div>
                  <div className="product-detail-copy">
                    <p className="section-kicker">{item.category}</p>
                    <h2>{item.title}</h2>
                    <p className="lead-copy">{item.summary}</p>

                    <div className="detail-columns">
                      <div>
                        <h3>Applications</h3>
                        <ul className="bullet-list">
                          {item.applications.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3>Key Features</h3>
                        <ul className="bullet-list">
                          {item.features.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {item.warranty.length ? (
                      <div className="warranty-box">
                        <h3>Warranty</h3>
                        <ul className="bullet-list">
                          {item.warranty.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              </div>
            ))}
          </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Original brochure sheets"
            title="PDF product references preserved alongside the web experience"
            description="The product range and homepage brochure pages are also included here as supporting visuals from the original source file."
          />
          <BrochureGrid items={brochureItems} />
        </div>
      </section>
    </>
  );
}
