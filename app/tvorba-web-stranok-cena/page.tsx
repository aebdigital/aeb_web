import type { Metadata } from "next";
import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { servicePages } from "@/lib/seo-pages";

const page = servicePages["tvorba-web-stranok-cena"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  keywords: page.keywords,
  alternates: {
    canonical: `https://aebdigital.sk/${page.slug}`,
  },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `https://aebdigital.sk/${page.slug}`,
    type: "website",
    images: [{ url: page.heroImage, width: 1200, height: 630, alt: page.heroAlt }],
  },
};

export default function TvorbaWebStranokCenaPage() {
  return <SeoServicePage page={page} />;
}
