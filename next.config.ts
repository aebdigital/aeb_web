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
  "frame-src https://challenges.cloudflare.com https://www.google.com",
  "media-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const templateContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
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
        source: "/:path(abbainovator|agim|alumsist|alurenostav|armakov|atstav|austav|avrekon|az-real|bautop|betcon|bma-dk|bomati|bomif|bosolutions|bouwgroup|brunelstav|bsltrading|darton|davstav|dclpartners|dmbauteam|dobritesari|dzatko-junior|ebendomy|efektivnestavby|ekodat|ekoploty|ellio|espron|gekotech|granila|hirver|hnlstavby|hurtstav|hydrotunel|inrestsro|ivpstavby|izobetonlevice|jakubasek|jmstrechy7|klimaelektro|kmdstav|kosap|kostelansky|kronostav|la-ma|likvidaciaazbestu|matfiakdistribution|md-project|mikulek|miroslavholecvykopoveprace|mkem|mmsadrokartony|modularnastavba|montter|odes|pavstav|pemtrade|pestastav|petruslm|pkprojekt|plasttime|podlahovecentrumbj|poterymm|pramo|premona-nitra|purdom|pvbstav|pvwin|rambet|rbltrade|redosi_group|reinter|revast|riaplast|riljak|roneprojekt|sochabau|soki|soldout|soultrade|sperostav|stamaxplus|starbuilding|stavba-domu-na-kluc|stavbyjaniss|stavferka|stavmixv-naj|timbed|tisplus|tostav|vialle|vo-vyske|windoo|zamkovadlazbamartin|zembau)",
        headers: templateSecurityHeaders,
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
        source: '/:slug(abbainovator|agim|alumsist|alurenostav|armakov|atstav|austav|avrekon|az-real|bautop|betcon|bma-dk|bomati|bomif|bosolutions|bouwgroup|brunelstav|bsltrading|darton|davstav|dclpartners|dmbauteam|dobritesari|dzatko-junior|ebendomy|efektivnestavby|ekodat|ekoploty|ellio|espron|gekotech|granila|hirver|hnlstavby|hurtstav|hydrotunel|inrestsro|ivpstavby|izobetonlevice|jakubasek|jmstrechy7|klimaelektro|kmdstav|kosap|kostelansky|kronostav|la-ma|likvidaciaazbestu|matfiakdistribution|md-project|mikulek|miroslavholecvykopoveprace|mkem|mmsadrokartony|modularnastavba|montter|odes|pavstav|pemtrade|pestastav|petruslm|pkprojekt|plasttime|podlahovecentrumbj|poterymm|pramo|premona-nitra|purdom|pvbstav|pvwin|rambet|rbltrade|redosi_group|reinter|revast|riaplast|riljak|roneprojekt|sochabau|soki|soldout|soultrade|sperostav|stamaxplus|starbuilding|stavba-domu-na-kluc|stavbyjaniss|stavferka|stavmixv-naj|timbed|tisplus|tostav|vialle|vo-vyske|windoo|zamkovadlazbamartin|zembau)',
        destination: '/templates/:slug/index.html',
      },
    ];
  },
};

export default nextConfig;
