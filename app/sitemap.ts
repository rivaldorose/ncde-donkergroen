import type { MetadataRoute } from "next";
import { artikelen } from "@/lib/artikelen";

const BASE_URL = "https://ncde.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/salderingsregeling",
    "/noodpakket",
    "/oplossingen",
    "/oplossingen/warmtepompen",
    "/regelingen",
    "/regelingen/seeh",
    "/regelingen/thuisbatterijen",
    "/kenniscentrum",
    "/partners",
    "/werkwijze",
    "/over",
    "/contact",
    "/portaal",
    "/portaal/registratie",
    "/privacy",
    "/juridisch",
    "/cookies",
    "/disclaimer",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = artikelen.map((a) => ({
    url: `${BASE_URL}/kenniscentrum/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
