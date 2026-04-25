import { site } from '@/lib/site-data';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
const previewImagePath = '/10_12%20kW%20MPCVD%20System.png';

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
          url: `${siteUrl}${previewImagePath}`,
          width: 1024,
          height: 1024,
          alt: `${site.name} flagship deposition system`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}${previewImagePath}`],
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
