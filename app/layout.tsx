import type { Metadata, Viewport } from "next";
import { Manrope, Anton } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Header } from "@/components/Header";
import { CookieConsentProvider } from "@/components/CookieConsentProvider";
import { PrivacyPopup } from "@/components/PrivacyPopup";
import { CookieBanner } from "@/components/CookieBanner";
import { CookieSettingsModal } from "@/components/CookieSettingsModal";
import { PageSections } from "@/components/PageSections";
import Script from "next/script";

// Viewport configuration (separate from metadata in Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#16171a" },
  ],
};

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

const siteUrl = "https://aebdigital.sk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tvorba webových stránok Bratislava | Web dizajn & E-shopy | AEB Digital",
    template: "%s | AEB Digital",
  },
  description: "Profesionálna tvorba webových stránok, e-shopov a webových aplikácií v Bratislave. 120+ úspešných projektov, 5+ rokov skúseností. Responzívny dizajn, SEO optimalizácia, moderné technológie. Bezplatná konzultácia!",
  keywords: [
    "tvorba webových stránok",
    "web design Bratislava",
    "tvorba web stránok",
    "webdizajn Bratislava",
    "e-shop tvorba",
    "eshop na mieru",
    "webové aplikácie",
    "responzívne web stránky",
    "SEO optimalizácia",
    "digital marketing Slovensko",
    "AEB Digital",
    "tvorba webu cena",
    "web stránka na mieru",
    "moderný web dizajn",
    "profesionálne webové stránky",
    "WordPress weby",
    "React aplikácie",
    "Next.js vývoj",
  ],
  authors: [{ name: "AEB Digital", url: siteUrl }],
  creator: "AEB Digital",
  publisher: "AEB Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "sk-SK": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: siteUrl,
    siteName: "AEB Digital",
    title: "Tvorba webových stránok Bratislava | Web dizajn & E-shopy | AEB Digital",
    description: "Profesionálna tvorba webových stránok, e-shopov a webových aplikácií v Bratislave. 120+ úspešných projektov. Bezplatná konzultácia!",
    images: [
      {
        url: "/sources/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AEB Digital - Tvorba webových stránok Bratislava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tvorba webových stránok Bratislava | AEB Digital",
    description: "Profesionálna tvorba webových stránok, e-shopov a aplikácií. 120+ úspešných projektov. Bezplatná konzultácia!",
    images: ["/sources/og-image.jpg"],
    creator: "@aebdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/sources/favicon-aeb.png", sizes: "32x32", type: "image/png" },
      { url: "/sources/favicon-aeb.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/sources/favicon-aeb.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/sources/favicon-aeb.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  applicationName: "AEB Digital",
  appleWebApp: {
    title: "AEB Digital",
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "AEB Digital",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/sources/favicon-aeb.png`,
    width: 512,
    height: 512,
  },
  description: "Profesionálna tvorba webových stránok, e-shopov a webových aplikácií v Bratislave.",
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Peter",
    },
    {
      "@type": "Person",
      name: "Alexander",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+421-908-507-131",
      contactType: "customer service",
      email: "peter@aebdig.com",
      availableLanguage: ["Slovak", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+421-917-422-245",
      contactType: "sales",
      email: "alexander@aebdig.com",
      availableLanguage: ["Slovak", "English"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/aebdigital",
    "https://www.instagram.com/aebdigital",
    "https://www.linkedin.com/company/aebdigital",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "AEB Digital",
  image: `${siteUrl}/sources/favicon-aeb.png`,
  url: siteUrl,
  telephone: "+421-908-507-131",
  email: "peter@aebdig.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bratislava",
    addressRegion: "Bratislavský kraj",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1486,
    longitude: 17.1077,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "AEB Digital",
  description: "Profesionálna tvorba webových stránok, e-shopov a webových aplikácií v Bratislave.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "sk-SK",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: "AEB Digital - Tvorba webových stránok",
  image: `${siteUrl}/sources/favicon-aeb.png`,
  url: siteUrl,
  telephone: "+421-908-507-131",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bratislava",
    addressCountry: "SK",
  },
  priceRange: "€€",
  serviceType: [
    "Tvorba webových stránok",
    "Web dizajn",
    "E-shop riešenia",
    "Webové aplikácie",
    "SEO optimalizácia",
    "Digital marketing",
  ],
  areaServed: {
    "@type": "Country",
    name: "Slovakia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Webové služby",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tvorba webových stránok",
          description: "Moderné, responzívne webové stránky optimalizované pre všetky zariadenia.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-shop riešenia",
          description: "Komplexné e-commerce riešenia pre online predaj.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webové aplikácie",
          description: "Pokročilé webové aplikácie s modernou funkcionalitou.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${manrope.variable} ${anton.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <LenisProvider>
          <CookieConsentProvider>
            <Header />
            <main>{children}</main>
            <PageSections />
            <PrivacyPopup />
            <CookieBanner />
            <CookieSettingsModal />
          </CookieConsentProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
