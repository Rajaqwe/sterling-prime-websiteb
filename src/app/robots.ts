import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: "https://sterling-prime-websiteb.vercel.app/sitemap.xml" };
}
