import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com",
  "connect-src 'self' https://challenges.cloudflare.com ws: wss: http://localhost:* http://127.0.0.1:*",
  "frame-src https://challenges.cloudflare.com",
  "media-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const templateContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self'",
  "connect-src 'self'",
  "media-src 'self' blob:",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
];

const templateSecurityHeaders = [
  ...securityHeaders.filter((header) => header.key !== "Content-Security-Policy"),
  {
    key: "Content-Security-Policy",
    value: templateContentSecurityPolicy,
  },
  {
    key: "X-Robots-Tag",
    value: "noindex, nofollow, noarchive",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/templates/:path*",
        headers: templateSecurityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:slug(alumsist|atstav|austav|avrekon|bomif|davstav|dobritesari|efektivnestavby|ellio|hurtstav|hydrotunel|inrestsro|kosap|kostelansky|kronostav|la-ma|mikulek|miroslavholecvykopoveprace|mmsadrokartony|poterymm|pramo|premona-nitra|purdom|redosi_group|revast|soki|soultrade|stamaxplus|starbuilding|stavferka|vo-vyske|zamkovadlazbamartin)',
        destination: '/templates/:slug/index.html',
      },
    ];
  },
};

export default nextConfig;
