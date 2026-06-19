import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { seo, site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
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
    <html lang="en-SG" className={`${inter.variable} ${interTight.variable}`}>
      <body className="relative bg-base font-sans antialiased">
        {/* Ambient radial glow blobs */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(13,164,213,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -right-[10%] top-[40%] h-[700px] w-[700px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(70,51,255,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[5%] left-[30%] h-[500px] w-[500px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(31,137,255,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

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
