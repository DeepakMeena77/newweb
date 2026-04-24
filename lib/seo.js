import { site } from '@/lib/site-data';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const siteUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
}) {
  const url = `${siteUrl}${path === '/' ? '' : path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: `${siteUrl}/assets/brochure/home-preview.png`,
          width: 1024,
          height: 1536,
          alt: `${site.name} brochure preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/assets/brochure/home-preview.png`],
    },
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legalName,
    url: siteUrl,
    logo: `${siteUrl}${site.logoPath}`,
    email: site.email,
    telephone: site.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.addressLine1}, ${site.addressLine2}`,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.legalName,
    description: site.description,
    url: siteUrl,
    logo: `${siteUrl}${site.logoPath}`,
    telephone: site.phoneRaw,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.addressLine1}, ${site.addressLine2}`,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
  };
}
