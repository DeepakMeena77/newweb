import Image from 'next/image';
import Link from 'next/link';
import { categories, industries, site, supportChannels } from '@/lib/site-data';
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

// Category icon SVGs (inline, matching screenshot style)
const categoryIcons = {
  'MPCVD Systems': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <rect x="8" y="20" width="48" height="30" rx="4" fill="currentColor" opacity="0.18"/>
      <rect x="16" y="28" width="32" height="16" rx="2" fill="currentColor" opacity="0.35"/>
      <rect x="22" y="8" width="20" height="14" rx="2" fill="currentColor" opacity="0.55"/>
      <rect x="28" y="4" width="8" height="6" rx="1" fill="currentColor"/>
      <rect x="14" y="46" width="8" height="8" rx="1" fill="currentColor" opacity="0.7"/>
      <rect x="42" y="46" width="8" height="8" rx="1" fill="currentColor" opacity="0.7"/>
    </svg>
  ),
  'HFCVD Systems': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <rect x="6" y="22" width="24" height="28" rx="3" fill="currentColor" opacity="0.2"/>
      <rect x="34" y="22" width="24" height="28" rx="3" fill="currentColor" opacity="0.2"/>
      <rect x="10" y="26" width="16" height="18" rx="2" fill="currentColor" opacity="0.45"/>
      <rect x="38" y="26" width="16" height="18" rx="2" fill="currentColor" opacity="0.45"/>
      <rect x="24" y="18" width="16" height="8" rx="2" fill="currentColor" opacity="0.6"/>
      <circle cx="32" cy="14" r="4" fill="currentColor"/>
      <rect x="10" y="50" width="44" height="4" rx="2" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  'Thermal CVD Systems': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <rect x="8" y="16" width="48" height="36" rx="4" fill="currentColor" opacity="0.18"/>
      <rect x="16" y="24" width="32" height="20" rx="2" fill="currentColor" opacity="0.35"/>
      <rect x="20" y="8" width="24" height="10" rx="2" fill="currentColor" opacity="0.55"/>
      <line x1="24" y1="28" x2="24" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="32" y1="28" x2="32" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="40" y1="28" x2="40" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'Sputtering Systems': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <polygon points="32,8 52,48 12,48" fill="currentColor" opacity="0.18"/>
      <polygon points="32,18 46,44 18,44" fill="currentColor" opacity="0.35"/>
      <line x1="20" y1="52" x2="44" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="32" cy="30" r="5" fill="currentColor" opacity="0.75"/>
    </svg>
  ),
  'Electron / Thermal Evaporation': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <rect x="10" y="30" width="44" height="24" rx="4" fill="currentColor" opacity="0.2"/>
      <rect x="18" y="36" width="12" height="12" rx="2" fill="currentColor" opacity="0.5"/>
      <rect x="36" y="36" width="12" height="12" rx="2" fill="currentColor" opacity="0.5"/>
      <path d="M22 30 Q32 10 42 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="32" cy="12" r="4" fill="currentColor"/>
    </svg>
  ),
};

// Industry icon SVGs
const industryIcons = {
  'CVD Diamond': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
      <polygon points="32,6 56,24 48,54 16,54 8,24" fill="currentColor" opacity="0.22"/>
      <polygon points="32,14 50,28 44,50 20,50 14,28" fill="currentColor" opacity="0.4"/>
      <polygon points="32,22 44,32 40,46 24,46 20,32" fill="currentColor" opacity="0.65"/>
    </svg>
  ),
  'Semiconductor': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
      <rect x="18" y="18" width="28" height="28" rx="2" fill="currentColor" opacity="0.25"/>
      <rect x="24" y="24" width="16" height="16" rx="1" fill="currentColor" opacity="0.55"/>
      <line x1="10" y1="26" x2="18" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="10" y1="38" x2="18" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="46" y1="26" x2="54" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="46" y1="38" x2="54" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="26" y1="10" x2="26" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="38" y1="10" x2="38" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="26" y1="46" x2="26" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="38" y1="46" x2="38" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'Research & Academics': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
      <path d="M32 10 L22 28 L26 28 L20 46 L44 46 L38 28 L42 28 Z" fill="currentColor" opacity="0.25"/>
      <path d="M32 16 L25 30 L28 30 L24 42 L40 42 L36 30 L39 30 Z" fill="currentColor" opacity="0.55"/>
      <rect x="22" y="46" width="20" height="4" rx="2" fill="currentColor" opacity="0.6"/>
      <rect x="26" y="50" width="12" height="4" rx="2" fill="currentColor" opacity="0.45"/>
    </svg>
  ),
  'Nanotechnology': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
      <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.7"/>
      <ellipse cx="32" cy="32" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
      <ellipse cx="32" cy="32" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" transform="rotate(60 32 32)"/>
      <ellipse cx="32" cy="32" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" transform="rotate(120 32 32)"/>
    </svg>
  ),
};

// Accent colors per category — exact match to screenshot
// Each entry: { icon: icon foreground color, bg: icon tile background color }
const categoryAccents = {
  'MPCVD Systems':              { icon: '#2e8b57', bg: '#d4f0e0' },
  'HFCVD Systems':              { icon: '#c8611a', bg: '#fde8d4' },
  'Thermal CVD Systems':        { icon: '#5a7080', bg: '#dde6ee' },
  'Sputtering Systems':         { icon: '#2666b0', bg: '#d4e4f8' },
  'Electron / Thermal Evaporation': { icon: '#7040a8', bg: '#e8dcf4' },
};

// Industry card full-card background gradients — exact match to screenshot
const industryAccents = {
  'CVD Diamond':        { bg: 'linear-gradient(145deg, #7ed8b8 0%, #48c09a 100%)', color: '#0d4030' },
  'Semiconductor':      { bg: 'linear-gradient(145deg, #78c878 0%, #4aa44a 100%)', color: '#0c3010' },
  'Research & Academics': { bg: 'linear-gradient(145deg, #f0a84a 0%, #d47e20 100%)', color: '#4a2000' },
  'Nanotechnology':     { bg: 'linear-gradient(145deg, #c0a0e0 0%, #9870c8 100%)', color: '#2c0c5a' },
};

export default function HomePage() {
  const organizationSchema = buildOrganizationSchema();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        type="application/ld+json"
      />

      {/* ── HERO ── */}
      <section className="hp-hero">
        <div className="hp-hero-overlay" />
        <div className="container hp-hero-inner">
          <h1>{site.name}</h1>
          <p className="hp-hero-sub">{site.tagline}</p>
          <div className="hp-hero-actions">
            <Link className="hp-btn hp-btn-primary" href="/products/">
              Browse Equipment
            </Link>
            <Link className="hp-btn hp-btn-secondary" href="/contact/">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── EXPLORE CATEGORIES ── */}
      <section className="hp-section">
        <div className="container">
          <h2 className="hp-section-title">Explore Our Categories</h2>
          <div className="hp-categories-grid">
            {categories.map((cat) => {
              const accent = categoryAccents[cat.title] || { icon: '#2e7fff', bg: '#d8e8ff' };
              return (
                <Link
                  className="hp-category-card"
                  href={`/products/${cat.anchor}`}
                  key={cat.title}
                >
                  <div
                    className="hp-category-icon"
                    style={{ backgroundColor: accent.bg, color: accent.icon }}
                  >
                    {categoryIcons[cat.title]}
                  </div>
                  <span className="hp-category-label">{cat.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="hp-view-all">
            <Link href="/products/" className="hp-view-all-link">
              View All Categories &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="hp-why-band">
        <div className="container hp-why-inner">
          <h2 className="hp-why-title">Why Choose Us</h2>
          <div className="hp-why-benefits">
            <span>✓ Genuine Products</span>
            <span>✓ Best Prices</span>
            <span>✓ Fast Delivery</span>
            <span>✓ Warranty Support</span>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="hp-section">
        <div className="container">
          <h2 className="hp-section-title">Industries We Serve</h2>
          <div className="hp-industries-grid">
            {industries.map((ind) => {
              const accent = industryAccents[ind.title] || { bg: 'linear-gradient(135deg,#cce,#99c)', color: '#333' };
              return (
                <Link
                  className="hp-industry-card"
                  href={`/industries/#${ind.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  key={ind.title}
                  style={{ background: accent.bg, '--ind-color': accent.color }}
                >
                  <div className="hp-industry-icon" style={{ color: accent.color }}>
                    {industryIcons[ind.title]}
                  </div>
                  <span className="hp-industry-label" style={{ color: accent.color }}>
                    {ind.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NEED HELP CTA ── */}
      <section className="hp-help-band">
        <div className="container hp-help-inner">
          <h2 className="hp-help-title">Need Help Choosing the Right Equipment?</h2>
          <div className="hp-help-actions">
            <a className="hp-btn hp-btn-primary" href={`tel:${site.phoneRaw}`}>
              📞 Call Now
            </a>
            <a className="hp-btn hp-btn-secondary" href={`mailto:${site.email}`}>
              ✉ Email Us
            </a>
            <Link className="hp-btn hp-btn-outline" href="/contact/">
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="hp-section">
        <div className="container hp-about-inner">
          <div className="hp-about-image">
            <Image
              alt="CCT MPCVD System"
              src="/6%20kW%20MPCVD%20System.png"
              width={260}
              height={260}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="hp-about-copy">
            <h2 className="hp-about-title">About {site.name}</h2>
            <p className="hp-about-sub">High-Performance CVD &amp; Quantum Material Systems</p>
            <Link className="hp-btn hp-btn-primary" href="/about-us/">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER CONTACT STRIP ── */}
      <div className="hp-contact-strip">
        <div className="container hp-contact-strip-inner">
          {supportChannels.map((ch) => (
            <a
              className="hp-contact-chip"
              href={ch.href}
              key={ch.title}
              rel="noreferrer"
              target="_blank"
            >
              <span className="hp-contact-chip-icon">
                {ch.title === 'Phone' ? '📞' : ch.title === 'Email' ? '✉' : '📍'}
              </span>
              <span>{ch.value}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
