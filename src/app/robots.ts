import type { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    host: personalInfo.siteUrl,
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${personalInfo.siteUrl}/sitemap.xml`,
  };
}
