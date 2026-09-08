import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { seo, site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const calSans = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
  display: "swap",
  weight: "600",
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
  themeColor: "#FAFAFA",
  colorScheme: "light",
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
    // VERIFY: Goldhill Plaza address is taken from the homepage prototype; confirm against the current registered office.
    streetAddress: "51 Goldhill Plaza, #14-01",
    addressLocality: "Singapore",
    postalCode: "308900",
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
    <html lang="en-SG" className={`${inter.variable} ${calSans.variable}`}>
      <body className="relative bg-background font-sans text-ink antialiased">
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
