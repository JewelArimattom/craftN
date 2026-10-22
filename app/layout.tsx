import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { ScrollEffects } from "./components/scroll-effects";

const siteUrl = "https://craftn.duckdns.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "CraftN — Software & AI Studio", template: "%s | CraftN" },
  description: "CraftN designs and builds thoughtful software, AI solutions, and digital products for businesses and people.",
  applicationName: "CraftN",
  keywords: ["CraftN", "software development", "AI solutions", "web applications", "product design", "digital studio"],
  creator: "CraftN",
  publisher: "CraftN",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "CraftN — Software & AI Studio",
    description: "Thoughtful software and practical AI, built around people.",
    url: siteUrl,
    siteName: "CraftN",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CraftN — Software and AI studio" }],
  },
  twitter: { card: "summary_large_image", title: "CraftN — Software & AI Studio", description: "Thoughtful software and practical AI, built around people.", images: ["/opengraph-image"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf7",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CraftN",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: "CraftN designs and builds thoughtful software, AI solutions, and digital products.",
  knowsAbout: ["Software development", "Artificial intelligence", "Product design", "Web applications"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/><ScrollEffects/><SiteHeader/>{children}<SiteFooter/></body></html>;
}
