'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { formInterests, site } from '@/lib/site-data';

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: 'General inquiry',
  message: '',
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isConfigured) {
      setStatus({
        state: 'error',
        message:
          'EmailJS keys are not configured yet. Add them in .env.local before using the live form.',
      });
      return;
    }

    try {
      setStatus({ state: 'loading', message: 'Sending your inquiry...' });

      await emailjs.send(
        serviceId,
        templateId,
        {
          ...values,
          to_email: site.email,
          reply_to: values.email,
        },
        publicKey,
      );

      setStatus({
        state: 'success',
        message: 'Your inquiry was sent successfully. Our team will get back to you soon.',
      });
      setValues(initialValues);
    } catch (error) {
      setStatus({
        state: 'error',
        message: 'The inquiry could not be sent right now. Please try again in a moment.',
      });
    }
  }

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" onChange={updateField} required type="text" value={values.name} />
        </label>

        <label>
          Company
          <input name="company" onChange={updateField} type="text" value={values.company} />
        </label>

        <label>
          Email
          <input
            name="email"
            onChange={updateField}
            required
            type="email"
            value={values.email}
          />
        </label>

        <label>
          Phone
          <input name="phone" onChange={updateField} type="tel" value={values.phone} />
        </label>

        <label className="full-span">
          Product or service interest
          <select name="interest" onChange={updateField} value={values.interest}>
            {formInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>

        <label className="full-span">
          Message
          <textarea
            name="message"
            onChange={updateField}
            placeholder="Tell us what system or material you are looking for."
            required
            rows={6}
            value={values.message}
          />
        </label>
      </div>

      <div className="form-footer">
        <div>
          <p className="form-note">
            This form is wired for EmailJS and sends inquiries directly to {site.email}.
          </p>
          {status.message ? (
            <p className={`form-status is-${status.state}`}>{status.message}</p>
          ) : null}
        </div>
        <button className="button button-primary" disabled={status.state === 'loading'} type="submit">
          {status.state === 'loading' ? 'Sending...' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  );
}
