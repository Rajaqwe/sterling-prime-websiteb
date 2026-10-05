import type { MetadataRoute } from "next";
import { publicRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sterling-prime-websiteb.vercel.app";
  const entries: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...publicRoutes.map((route) => ({
      url: base + "/" + route,
      changeFrequency: "monthly" as const,
      priority: route === "products" ? 0.9 : 0.6
    }))
  ];
  return entries;
}
