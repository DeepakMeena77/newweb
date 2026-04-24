# CCT Website

Static marketing website for Carbon Carat Technology LLP built with Next.js and EmailJS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static output is generated in `out/`.

## EmailJS setup

1. Copy `.env.example` to `.env.local`.
2. Add your EmailJS service ID, template ID, and public key.
3. In your EmailJS template, use the following fields:
   - `to_email`
   - `name`
   - `company`
   - `email`
   - `phone`
   - `interest`
   - `message`
   - `reply_to`

The contact form sends the inquiry directly to the client email configured in the site data.

## SEO setup

Set `NEXT_PUBLIC_SITE_URL` to the final production domain so canonical tags, sitemap entries, and robots metadata use the correct URL.
