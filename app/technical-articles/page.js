import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { site, technicalArticles } from '@/lib/site-data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Technical Articles',
  description:
    'Read the technical article references included in the CCT brochure covering microwave plasma CVD and single crystal diamond deposition.',
  path: '/technical-articles/',
  keywords: [
    'microwave plasma CVD research',
    'single crystal diamond deposition papers',
    'CCT technical articles',
  ],
});

export default function TechnicalArticlesPage() {
  return (
    <>
      <PageHero
        description="Explore research references related to microwave plasma CVD, single-crystal diamond growth, and the technical foundations behind advanced deposition workflows."
        eyebrow="Technical Articles"
        title="Research references that support the CCT process narrative"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Referenced papers"
            title="Selected technical references relevant to CCT applications"
          />
          <div className="stack-section">
            {technicalArticles.map((article) => (
              <article className="article-card" key={article.title}>
                <span>{article.topic}</span>
                <h2>{article.title}</h2>
                <p>{article.citation}</p>
                <a href={article.searchUrl} rel="noreferrer" target="_blank">
                  Search paper reference
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section">
          <div className="split-copy">
            <SectionHeading
            eyebrow="Why technical context matters"
            title="Helpful reading for teams comparing processes, materials, and capabilities"
            description="Research context helps buyers, engineers, and academic teams connect equipment choices with real process outcomes."
            />
            <ul className="bullet-list">
              <li>Supports technical buyers who want validation beyond marketing copy</li>
              <li>Strengthens topical relevance around MPCVD and diamond growth</li>
              <li>Creates a clean place to expand future papers, case studies, or whitepapers</li>
            </ul>
          </div>
          <div className="split-media">
            <Image
              alt="Technical articles brochure sheet"
              className="media-frame"
              height={900}
              src="/assets/brochure/technical-articles.png"
              width={680}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container quote-panel">
          <h2>Want technical guidance for a specific process or deposition goal?</h2>
          <p>
            CCT can help connect your material or coating target with the right process platform.
          </p>
          <a className="button button-primary" href={`mailto:${site.email}`}>
            Email the team
          </a>
        </div>
      </section>
    </>
  );
}
