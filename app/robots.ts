import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portaal/registratie/succes", "/contact/bedankt"],
      },
    ],
    sitemap: "https://ncde.nl/sitemap.xml",
  };
}
