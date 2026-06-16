import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { seo, site } from "@/lib/content";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://pilotpulse.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.title,
    template: "%s | PilotPulse",
  },
  description: seo.description,
  applicationName: site.name,
  keywords: [
    "AI workflow automation",
    "agentic AI",
    "AI implementation Singapore",
    "business process automation",
    "IMDA technology partner",
    "AI agents",
    "operations automation",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: SITE_URL,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#05002B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: SITE_URL,
  description: seo.description,
  email: site.email,
  telephone: site.phone,
  slogan: site.positioning,
  address: {
    "@type": "PostalAddress",
    streetAddress: "60 Paya Lebar Road #07-54",
    addressLocality: "Singapore",
    postalCode: "409051",
    addressCountry: "SG",
  },
  areaServed: "SG",
  knowsAbout: [
    "Agentic AI",
    "AI workflow automation",
    "Business operations automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG" className={mulish.variable}>
      <body className="bg-base font-sans antialiased">
        {/* No-JS fallback: never hide scroll-reveal content if JS fails to load */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
