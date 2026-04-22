/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
}

interface ReviewsResponse {
  reviews?: Review[];
  averageRating?: number;
  totalReviewCount?: number;
  source?: "business-profile" | "places" | null;
}

export function ReviewsSlider() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [totalReviewCount, setTotalReviewCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (response.ok) {
          const data = (await response.json()) as ReviewsResponse;
          const googleReviews = Array.isArray(data.reviews)
            ? data.reviews.filter((review) => review.text && review.rating > 0)
            : [];

          setReviews(googleReviews);
          setAverageRating(typeof data.averageRating === "number" ? data.averageRating : null);
          setTotalReviewCount(typeof data.totalReviewCount === "number" ? data.totalReviewCount : null);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  const rollingReviews = reviews.length < 3 ? [...reviews, ...reviews, ...reviews] : reviews;
  const firstRow = [...rollingReviews, ...rollingReviews];
  const secondRow = [...rollingReviews, ...rollingReviews].reverse();

  if (loading || reviews.length === 0) return null;

  return (
    <section className="reviews-slider-section py-20 relative z-40 overflow-hidden bg-black/50 backdrop-blur-sm border-y border-white/5">
      <div className="container mb-12">
        <h2 className="heading-section text-center mb-4">Čo o nás hovoria klienti</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 text-gray-light text-sm md:text-base">
          <span className="uppercase tracking-[0.18em] text-white/70">Google recenzie</span>
          {averageRating ? (
            <span className="flex items-center gap-2">
              <Star size={16} fill="#025DFF" color="#025DFF" />
              {averageRating.toFixed(1)} / 5
            </span>
          ) : null}
          {totalReviewCount ? <span>{totalReviewCount} hodnotení</span> : null}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* First Row - Moving Left */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {firstRow.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {secondRow.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const authorInitial = review.author_name.trim().charAt(0).toUpperCase() || "G";

  return (
    <div className="flex-shrink-0 w-[min(84vw,400px)] bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-lg flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {review.profile_photo_url ? (
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            className="w-12 h-12 rounded-full border border-white/20 object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white font-bold">
            {authorInitial}
          </div>
        )}
        <div className="min-w-0">
          <h4 className="text-white font-bold text-base md:text-lg leading-tight uppercase font-[family-name:var(--font-manrope)] truncate">
            {review.author_name}
          </h4>
          <p className="text-gray-light text-xs">{review.relative_time_description}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < review.rating ? "#025DFF" : "none"}
            color={i < review.rating ? "#025DFF" : "#444"}
          />
        ))}
      </div>
      <p className="text-gray-light text-sm italic whitespace-normal line-clamp-3">
        &quot;{review.text}&quot;
      </p>
    </div>
  );
}
