import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/profile/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/", "/profile/", "/private/"],
      },
    ],
    sitemap: "https://tekcify-auth.vercel.app/sitemap.xml",
  };
}
