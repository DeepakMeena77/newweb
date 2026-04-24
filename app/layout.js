import { Manrope, Sora } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { site } from '@/lib/site-data';
import { siteUrl } from '@/lib/seo';
import './globals.css';

const headingFont = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Advanced CVD & Thin Film Systems`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  icons: {
    icon: site.logoPath,
    shortcut: site.logoPath,
    apple: site.logoPath,
  },
  category: 'Industrial Equipment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
