import { InfiniteGrid } from "@/components/InfiniteGrid";
import { FaHandPointer } from "react-icons/fa";
import type { Metadata } from "next";

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
    </>
  );
}