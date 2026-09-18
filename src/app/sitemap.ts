import type { MetadataRoute } from "next";
import { caseStudyIndustries } from "@/lib/pages/case-studies";

const SITE_URL = "https://pilotpulse.ai";

const routes = [
  "/",
  "/digital-workers",
  "/solutions",
  "/industries",
  "/case-studies",
  ...caseStudyIndustries.map((industry) => `/case-studies/${industry.id}`),
  "/resources",
  "/about",
  "/contact",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path, index) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : path === "/contact" ? 0.8 : 0.7,
  }));
}
