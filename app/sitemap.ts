import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aebdigital.sk";
  const currentDate = new Date().toISOString();

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sluzby`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ochrana-osobnych-udajov`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/ecommerce-trendy-2025`,
      lastModified: "2025-01-08",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/javascript-techniky-2025`,
      lastModified: "2025-01-05",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/react-trendy-2025`,
      lastModified: "2025-01-15",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/seo-strategia-2025`,
      lastModified: "2025-01-10",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ux-dizajn-prirucka`,
      lastModified: "2025-01-12",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/web-optimalizacia-rychlost`,
      lastModified: "2025-01-03",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [...mainPages, ...blogPosts];
}
