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
      <section className="page-header py-32 bg-custom-bg text-white relative">
        <div className="container">
          <h1 className="page-title">Naše portfólio</h1>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Portfolio Section */}
      <section 
        className="portfolio-apple-style py-5 bg-black relative overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none z-0"></div>
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