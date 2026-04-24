import Link from 'next/link';
import { navigation, site, supportChannels } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-kicker">{site.shortName}</p>
          <h2>{site.name}</h2>
          <p>{site.description}</p>
          <a className="button button-secondary footer-button" href={site.brochurePath}>
            Download Brochure
          </a>
        </div>

        <div>
          <h3>Navigation</h3>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-links">
            {supportChannels.map((channel) => (
              <a href={channel.href} key={channel.title} rel="noreferrer" target="_blank">
                {channel.title}: {channel.value}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>© {new Date().getFullYear()} {site.legalName}</span>
          <span>Built for SEO-ready static deployment with EmailJS lead capture.</span>
        </div>
      </div>
    </footer>
  );
}
