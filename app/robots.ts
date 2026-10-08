import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/src/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", WEBSITE_URL).href,
  };
}
