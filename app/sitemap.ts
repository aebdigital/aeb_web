import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aebdigital.sk";
  const mainPagesLastModified = "2026-04-22";

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: mainPagesLastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sluzby`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: mainPagesLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: mainPagesLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ochrana-osobnych-udajov`,
      lastModified: mainPagesLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/tvorba-web-stranok-bratislava`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tvorba-web-stranok`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tvorba-eshopu`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/web-aplikacie`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/seo-optimalizacia`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tvorba-web-stranok-cena`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/pripadove-studie/kovo-sklo`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pripadove-studie/lerent`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pripadove-studie/provel`,
      lastModified: mainPagesLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
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

  return [...mainPages, ...servicePages, ...caseStudyPages, ...blogPosts];
}
