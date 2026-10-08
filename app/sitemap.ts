import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/src/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: WEBSITE_URL }];
}
