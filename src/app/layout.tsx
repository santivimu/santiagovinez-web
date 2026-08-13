import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site, book, method } from "@/lib/site-data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.role}`,
    template: `%s — ${site.shortName}`,
  },
  description: `${site.tagline} ${site.shortName} es autor de "${book.title}" y guía procesos de autoconocimiento a través del ${method.name}.`,
  openGraph: {
    title: `${site.shortName} — ${site.role}`,
    description: site.tagline,
    url: site.url,
    siteName: site.shortName,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.tagline,
    knowsLanguage: ["es", "en", "pt"],
    knowsAbout: [
      "Autoconocimiento",
      "Liderazgo personal",
      "Desarrollo personal",
      method.name,
    ],
    sameAs: [
      "https://instagram.com/santiagovinez",
      "https://tiktok.com/@santiagovimu",
    ],
  };

  return (
    <html
      lang="es"
      className={`${poppins.variable} ${cormorant.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
