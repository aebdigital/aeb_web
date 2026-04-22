import { InfiniteGrid } from "@/components/InfiniteGrid";
import { FaHandPointer } from "react-icons/fa";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, featuredCaseStudySlugs } from "@/lib/seo-pages";

export const metadata: Metadata = {
  title: "Portfólio - Naše najlepšie webové stránky a projekty | AEB Digital",
  description: "Pozrite si ukážky našich projektov pre 120+ spokojných klientov - webové stránky, e-shopy, aplikácie pre slovenské firmy. Moderný dizajn, SEO optimalizácia, responzívny web.",
  keywords: [
    "webové portfólio",
    "ukážky webových stránok",
    "referencie web dizajn",
    "príklady e-shopov",
    "webové projekty Slovensko",
    "AEB Digital projekty",
    "moderné webové stránky",
  ],
  alternates: {
    canonical: "https://aebdigital.sk/portfolio",
  },
  openGraph: {
    title: "Portfólio - 120+ úspešných projektov | AEB Digital",
    description: "Pozrite si ukážky našich projektov - webové stránky, e-shopy, aplikácie pre slovenské firmy.",
    url: "https://aebdigital.sk/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-32 text-white relative">
        <div className="container">
          <h1 className="page-title">Naše portfólio</h1>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="portfolio-apple-style py-5 relative overflow-hidden"
      >
        <div className="portfolio-content relative z-10">
          {/* Portfolio Gallery */}
          <div className="portfolio-gallery relative">
            {/* Infinite Grid Component */}
            <InfiniteGrid />
            {/* Drag Prompt - Centered overlay with bounce animation */}
            <div
              id="drag-prompt"
              className="drag-prompt absolute inset-0 flex justify-center items-center z-20 pointer-events-none transition-opacity duration-500"
            >
              <div className="flex items-center bg-black/70 backdrop-blur-sm px-6 py-4 rounded-full text-white text-2xl animate-bounce-gentle">
                <FaHandPointer className="drag-hand-icon mr-3" />
                <span className="drag-prompt-text">Posúvajte galériu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-white relative z-10">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-accent-teal">Prípadové štúdie</p>
            <h2 className="text-4xl font-bold md:text-5xl">Ako rozmýšľame nad projektmi</h2>
            <p className="mt-5 text-lg leading-8 text-gray-light">
              Vybrané projekty rozoberáme cez zadanie, riešenie, výsledok a technický základ.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredCaseStudySlugs.map((slug) => {
              const study = caseStudies[slug];
              return (
                <Link key={study.slug} href={`/pripadove-studie/${study.slug}`} className="group block overflow-hidden border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={study.image} alt={study.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-sm uppercase tracking-[0.18em] text-accent-teal">{study.industry}</p>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    <p className="mt-3 text-gray-light">{study.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
