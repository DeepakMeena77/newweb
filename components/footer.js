import Image from 'next/image';
import Link from 'next/link';
import { benefits, navigation, site, supportChannels } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Image
              alt={`${site.shortName} logo`}
              className="footer-logo"
              height={84}
              src={site.logoPath}
              width={84}
            />
            <div className="footer-brand-copy">
              <p className="footer-kicker">Advanced CVD and thin-film systems</p>
              <h2>{site.name}</h2>
            </div>
          </div>
          <p>{site.description}</p>
          <div className="footer-pill-list">
            {benefits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
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
          <span>&copy; {new Date().getFullYear()} {site.legalName}</span>
          <span>Built for research labs, advanced materials teams, and semiconductor programs.</span>
        </div>
      </div>
    </footer>
  );
}
