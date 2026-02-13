import Image from "next/image";
import Link from "next/link";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Webové trendy, technológie a digital marketing | AEB Digital",
  description: "Odborný blog o webových technológiách, React, JavaScript, digital marketingu a SEO optimalizácii. Praktické tipy a trendy od expertov AEB Digital pre rok 2025.",
  keywords: [
    "webový blog",
    "React trendy 2025",
    "JavaScript techniky",
    "SEO stratégia",
    "digital marketing blog",
    "web development tipy",
    "e-commerce trendy",
    "UX dizajn",
  ],
  alternates: {
    canonical: "https://aebdigital.sk/blog",
  },
  openGraph: {
    title: "Blog - Webové trendy a technológie | AEB Digital",
    description: "Odborný blog o webových technológiách, React, JavaScript, digital marketingu a SEO optimalizácii.",
    url: "https://aebdigital.sk/blog",
    type: "website",
  },
};

interface BlogPost {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "react-trendy-2025",
    imageSrc: "/sources/techstack/React-icon.svg.webp",
    imageAlt: "React 2025 trendy",
    category: "Technológie",
    date: "15. január 2025",
    author: "AEB Digital",
    title: "Top 10 React trendov pre rok 2025",
    description: "React pokračuje v evolúcii a v roku 2025 prináša nové možnosti. Pozrite si najvýznamnejšie trendy, ktoré budú formovať budúcnosť frontendu...",
  },
  {
    slug: "ux-dizajn-prirucka",
    imageSrc: "/sources/techstack/apps-figma-icon-2048x2048-ctjj5ab7.webp",
    imageAlt: "UI/UX dizajn",
    category: "Dizajn",
    date: "12. január 2025",
    author: "AEB Digital",
    title: "Ako vytvoriť používateľsky prívetivý dizajn",
    description: "UX dizajn je kľúčový pre úspech každej webovej stránky. Naučte sa základné princípy, ktoré ulahodia vašim používateľom...",
  },
  {
    slug: "seo-strategia-2025",
    imageSrc: "/sources/techstack/1f4ac.svg",
    imageAlt: "Digital marketing",
    category: "Marketing",
    date: "10. január 2025",
    author: "AEB Digital",
    title: "5 krokov k úspešnej SEO stratégii",
    description: "SEO optimalizácia je základom každej digitálnej stratégie. Pozrite si praktické kroky pre zlepšenie viditeľnosti...",
  },
  {
    slug: "ecommerce-trendy-2025",
    imageSrc: "/sources/techstack/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u-removebg-preview-e1750440978862.webp",
    imageAlt: "E-commerce",
    category: "E-commerce",
    date: "8. január 2025",
    author: "AEB Digital",
    title: "Trendy v e-commerce pre rok 2025",
    description: "E-commerce sa neustále mení. Objavte najnovšie trendy, ktoré ovplyvnia online predaj v nadchádzajúcom roku...",
  },
  {
    slug: "javascript-techniky-2025",
    imageSrc: "/sources/techstack/JavaScript-Logo-scaled-e1750439290173.webp",
    imageAlt: "JavaScript",
    category: "Technológie",
    date: "5. január 2025",
    author: "AEB Digital",
    title: "Moderné JavaScript techniky pre vývojárov",
    description: "JavaScript sa neustále vyvíja. Naučte sa najnovšie techniky a best practices pre moderný vývoj webových aplikácií...",
  },
  {
    slug: "web-optimalizacia-rychlost",
    imageSrc: "/sources/techstack/HTML5_logo_and_wordmark.svg.webp",
    imageAlt: "Webové stránky",
    category: "Vývoj",
    date: "3. január 2025",
    author: "AEB Digital",
    title: "Ako optimalizovať rýchlosť načítania webu",
    description: "Rýchlosť načítania je kritická pre používateľskú skúsenosť. Pozrite si praktické tipy na optimalizáciu výkonu...",
  },
];

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-post rounded-[20px] overflow-hidden bg-white/[0.05] border border-white/[0.1] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
      <Link href={`/blog/${post.slug}`}>
        <div className="post-image relative h-48 w-full">
          <Image src={post.imageSrc} alt={post.imageAlt} layout="fill" objectFit="contain" className="transition-transform duration-300 hover:scale-105" />
          <div className="post-category absolute bottom-2 left-2 bg-accent-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </div>
        </div>
        <div className="post-content p-6">
          <div className="post-meta text-gray-light text-sm mb-2 flex space-x-2">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 hover:text-accent-teal transition-colors">{post.title}</h3>
          <p className="text-gray-medium text-base leading-relaxed">{post.description}</p>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPage() {
  return (
    <>
      <BackgroundTextAnimation />

      {/* Page Header */}
      <section className="page-header py-32 text-white relative z-10">
        <div className="container">
          <h1 className="page-title">Blog</h1>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section py-20 relative z-10">
        <div className="container">
          <div className="blog-content">
            <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
