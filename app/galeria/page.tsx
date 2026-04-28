"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery image data
const galleryImages = [
  // Zrubový nábytok
  ...Array.from({ length: 16 }, (_, i) => ({
    src: `https://www.pedrostol.sk/wp-content/gallery/zrubovy-nabytok/Zrubovy-nabytok-${i + 1}.jpg`,
    category: "zrubovy-nabytok",
    alt: `Zrubový nábytok ${i + 1}`
  })),
  // Stavby z dreva
  ...Array.from({ length: 15 }, (_, i) => ({
    src: `https://www.pedrostol.sk/wp-content/gallery/stavby-z-dreva/Stavby-z-dreva-${i + 1}.jpg`,
    category: "stavby-z-dreva",
    alt: `Stavba z dreva ${i + 1}`
  })),
  ...Array.from({ length: 9 }, (_, i) => ({
    src: `https://www.pedrostol.sk/wp-content/gallery/stavby-z-dreva/Stavby-z-drevo-${i + 28}.jpg`,
    category: "stavby-z-dreva",
    alt: `Stavba z dreva ${i + 28}`
  })),
  // Nábytok a ostatné
  ...Array.from({ length: 17 }, (_, i) => ({
    src: `https://www.pedrostol.sk/wp-content/gallery/nabytok-a-ostatne/Nabytok-a-ostatne-${i + 1}.jpg`,
    category: "nabytok-a-ostatne",
    alt: `Nábytok a ostatné ${i + 1}`
  }))
];

const categories = [
  { id: "all", label: "Všetko" },
  { id: "zrubovy-nabytok", label: "Zrubový nábytok" },
  { id: "stavby-z-dreva", label: "Stavby z dreva" },
  { id: "nabytok-a-ostatne", label: "Nábytok a ostatné" }
];

export default function GaleriaPage() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#fcfaf7]">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-10 h-[1px] bg-[#b48454]"></span>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#b48454]">Naša práca</span>
              <span className="w-10 h-[1px] bg-[#b48454]"></span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#1c1917] mb-12" style={{ fontFamily: '"DM Serif Display", serif', fontStyle: 'italic' }}>
              Galéria realizácií
            </h1>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  filter === cat.id 
                    ? "bg-[#b48454] text-white border-[#b48454]" 
                    : "bg-transparent text-[#1c1917]/60 border-[#1c1917]/10 hover:border-[#b48454]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                    layout: {
                      type: "spring",
                      stiffness: 250,
                      damping: 30,
                      mass: 1
                    }
                  }}
                  className="relative aspect-[4/5] overflow-hidden group cursor-pointer shadow-lg bg-white"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] uppercase tracking-[0.2em] font-bold border border-white/40 px-4 py-2">
                      Zobraziť
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1c1917]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center pointer-events-none">
              <motion.div
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    fill
                    className="object-contain shadow-2xl"
                    sizes="90vw"
                    unoptimized
                  />
                </div>
              </motion.div>
              <p className="text-white/60 text-xs uppercase tracking-[0.3em] mt-8 font-medium pointer-events-auto">
                {filteredImages[selectedImage].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          background-color: #fcfaf7 !important;
        }
      `}</style>
    </main>
  );
}
