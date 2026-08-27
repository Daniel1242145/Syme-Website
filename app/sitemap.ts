import type { MetadataRoute } from "next";

const servicePages = [
  "window-cleaning",
  "carpet-cleaning",
  "commercial-cleaning",
  "upholstery-cleaning",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://symecleaning.co.nz";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/offers/carpet-window-bundle`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...servicePages.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
