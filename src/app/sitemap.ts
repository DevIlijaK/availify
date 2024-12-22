// app/sitemap.ts
import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://availify-tau.vercel.app/", // Main homepage URL
      lastModified: new Date(), // The date the page was last modified
      changeFrequency: "daily", // How often the page is updated
      priority: 1, // Priority of the page (1 being the highest)
    },
  ];
}
