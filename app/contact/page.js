import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { site, supportChannels } from '@/lib/site-data';
import { buildLocalBusinessSchema, buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contact Carbon Carat Technology LLP for product inquiries, consultations, and quote requests related to CVD, MPCVD, sputtering, and thin-film systems.',
  path: '/contact/',
  keywords: [
    'contact CCT',
    'CVD equipment inquiry',
    'EmailJS quote form',
    'Navi Mumbai industrial equipment company',
  ],
});

export default function ContactPage() {
  const schema = buildLocalBusinessSchema();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        type="application/ld+json"
      />

      <PageHero
        description="The contact information from the brochure is now combined with a working inquiry form that can email the client directly through EmailJS, with no backend required."
        eyebrow="Contact Us"
        title="Talk to CCT about materials, systems, and technical consultation"
      />

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <SectionHeading
              eyebrow="Support channels"
              title="We'd love to hear from you"
              description="Have a question? Reach out by phone, email, or the form below. All contact details are sourced from the provided brochure."
            />
            <div className="channel-list">
              {supportChannels.map((channel) => (
                <a className="channel-card" href={channel.href} key={channel.title} rel="noreferrer" target="_blank">
                  <Image alt={channel.title} height={79} src={channel.image} width={79} />
                  <div>
                    <span>{channel.title}</span>
                    <strong>{channel.value}</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="split-media">
            <Image
              alt="Contact brochure preview"
              className="media-frame"
              height={1080}
              src="/assets/brochure/contact-sheet.png"
              width={760}
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Inquiry form"
            title="Send a direct quote or product inquiry"
            description="This form is implemented on the frontend using EmailJS so it can work without an admin panel or backend service."
          />
          <ContactForm />
        </div>
      </section>

      <section className="section">
        <div className="container quote-panel">
          <h2>Need quick support?</h2>
          <p>
            You can also call {site.phoneDisplay} or email {site.email} directly for a faster
            conversation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${site.phoneRaw}`}>
              Call Now
            </a>
            <a className="button button-secondary" href={`mailto:${site.email}`}>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
