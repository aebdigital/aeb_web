"use client";

import { useEffect, useMemo, useState } from "react";
import { FaGoogle, FaStar, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

interface GMBWidgetProps {
  className?: string;
  placeId?: string; // Optional: for direct review link
}

type ReviewStats = {
  averageRating?: number;
  totalReviewCount?: number;
};

const AEB_GOOGLE_PLACE_ID = "ChIJhXf9XG4abEcRV084_9Bv_3Q";
const FALLBACK_RATING = 5;
const FALLBACK_REVIEW_COUNT = 26;

export function GMBWidget({ className = "", placeId = AEB_GOOGLE_PLACE_ID }: GMBWidgetProps) {
  const [reviewStats, setReviewStats] = useState<ReviewStats | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchReviewStats() {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) return;

        const data = (await response.json()) as ReviewStats;
        if (isMounted) {
          setReviewStats(data);
        }
      } catch (error) {
        console.error("Error fetching Google review stats:", error);
      }
    }

    fetchReviewStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const mapEmbedKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const rating = reviewStats?.averageRating || FALLBACK_RATING;
  const reviewCount = reviewStats?.totalReviewCount || FALLBACK_REVIEW_COUNT;
  const googleReviewLink = `https://search.google.com/local/writereview?placeid=${placeId}`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=AEB%20Digital%20Bratislava&query_place_id=${encodeURIComponent(placeId)}`;
  const mapEmbedUrl = useMemo(() => {
    if (!mapEmbedKey) return null;
    return `https://www.google.com/maps/embed/v1/place?key=${mapEmbedKey}&q=place_id:${encodeURIComponent(placeId)}`;
  }, [mapEmbedKey, placeId]);

  return (
    <div className={`gmb-widget bg-white/[0.05] backdrop-blur-md border border-white/[0.1] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-accent-teal/30 ${className}`}>
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
        {/* Left Side: Info & Reviews */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <FaGoogle className="text-blue-500 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Google Business Profile</h3>
              <p className="text-white/60 text-sm">AEB Digital s. r. o.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-1 mb-4 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-3 text-white font-bold">{rating.toFixed(1)}</span>
            <span className="ml-2 text-white/50 text-sm">({reviewCount} Google recenzií)</span>
          </div>

          <p className="text-white/80 mb-6 text-sm md:text-base leading-relaxed">
            AEB Digital funguje ako servisná oblasť pre Bratislavu a okolie. Otvorte si náš Google profil alebo nám zanechajte spätnú väzbu.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href={googleReviewLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95"
            >
              Napísať recenziu <FaExternalLinkAlt className="text-[10px]" />
            </a>
            <a 
              href={googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent-teal text-white px-5 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95"
            >
              <FaMapMarkerAlt /> Otvoriť profil
            </a>
          </div>
        </div>

        {/* Right Side: Service-area map placeholder or live Google embed when configured */}
        <div className="w-full md:w-[350px] aspect-square md:aspect-auto md:h-[240px] rounded-xl overflow-hidden relative group border border-white/10">
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              title="AEB Digital Google Business profil"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
              <div className="text-center p-4">
                <FaMapMarkerAlt className="text-accent-teal text-4xl mx-auto mb-3 animate-bounce" />
                <p className="text-white font-bold mb-1">AEB Digital</p>
                <p className="text-white/60 text-sm mb-1">Servisná oblasť Bratislava</p>
                <p className="text-white/40 text-xs italic">Kliknite pre Google profil</p>
              </div>
            </div>
          )}
          {/* Real Map Overlay (Transparent Link) */}
          <a 
            href={googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Otvoriť AEB Digital Google profil"
            className="absolute inset-0 z-10 block cursor-alias transition-colors group-hover:bg-accent-teal/10"
          ></a>
        </div>
      </div>
    </div>
  );
}
