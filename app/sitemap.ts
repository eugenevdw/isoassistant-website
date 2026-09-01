import type { MetadataRoute } from "next";
import { seoLandingPages } from "./lib/seoLandingPages";

const staticPaths = ["", "/features", "/pricing", "/faq", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    ...staticPaths,
    ...Object.values(seoLandingPages).map((page) => `/${page.slug}`),
  ];

  return paths.map((path) => ({
    url: `https://isoassistant.com${path}`,
    lastModified: now,
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.8 : 1,
  }));
}
