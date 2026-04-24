This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact Form

Production contact submissions require Cloudflare Turnstile and SMTP2GO environment variables. The API fails closed in production if Turnstile is not configured.

```bash
TURNSTILE_SECRET_KEY=
SMTP2GO_API_KEY=
SMTP2GO_FROM_EMAIL=
BUSINESS_EMAIL=
CONTACT_ALLOWED_ORIGINS=https://aebdigital.sk,https://www.aebdigital.sk
```

## Google Reviews

The Slovak home page displays Google reviews after the "Pracovali sme so všetkými" section when the server-side `/api/reviews` route is configured.

Use the owned Google Business Profile connection for the full verified location review feed:

```bash
GOOGLE_BUSINESS_ACCOUNT_ID=
GOOGLE_BUSINESS_LOCATION_ID=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GOOGLE_REVIEWS_PAGE_SIZE=20
```

If the Business Profile variables are not present, the route can fall back to public Google Places reviews:

```bash
GOOGLE_PLACE_ID=ChIJhXf9XG4abEcRV084_9Bv_3Q
GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY=
```

`GOOGLE_MAPS_API_KEY` is used server-side for live Places reviews. `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` is optional and only needed if you want the Google map embed inside the Google Business widget instead of the built-in Bratislava service-area placeholder.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
