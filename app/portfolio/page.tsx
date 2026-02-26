import { InfiniteGrid } from "@/components/InfiniteGrid";
import { FaHandPointer } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Unsere besten Websites und Projekte | AEB Digital",
  description: "Sehen Sie Beispiele unserer Projekte für 120+ zufriedene Kunden - Websites, E-Shops, Anwendungen für Unternehmen. Modernes Design, SEO-Optimierung, Responsive Web.",
  keywords: [
    "webportfolio",
    "website beispiele",
    "webdesign referenzen",
    "e-shop beispiele",
    "webprojekte",
    "AEB Digital projekte",
    "moderne websites",
  ],
  alternates: {
    canonical: "https://aebdigital.com/de/portfolio",
  },
  openGraph: {
    title: "Portfolio - 120+ Erfolgreiche Projekte | AEB Digital",
    description: "Sehen Sie Beispiele unserer Projekte - Websites, E-Shops, Anwendungen für Unternehmen.",
    url: "https://aebdigital.com/de/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-32 text-white relative">
        <div className="container">
          <h1 className="page-title">Unser Portfolio</h1>
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
                <span className="drag-prompt-text">Ziehen, um die Galerie zu erkunden</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}